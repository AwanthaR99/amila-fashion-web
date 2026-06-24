import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import crypto from "crypto";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const merchant_id = formData.get("merchant_id")?.toString();
    const order_id = formData.get("order_id")?.toString();
    const payhere_amount = formData.get("payhere_amount")?.toString();
    const payhere_currency = formData.get("payhere_currency")?.toString();
    const status_code = formData.get("status_code")?.toString();
    const md5sig = formData.get("md5sig")?.toString();

    const merchant_secret = process.env.PAYHERE_MERCHANT_SECRET;

    if (!merchant_id || !order_id || !payhere_amount || !payhere_currency || !status_code || !md5sig || !merchant_secret) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    
    
    const hashedSecret = crypto.createHash("md5").update(merchant_secret).digest("hex").toUpperCase();
    const dataString = `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${hashedSecret}`;
    
    const localMd5sig = crypto.createHash("md5").update(dataString).digest("hex").toUpperCase();

    if (localMd5sig !== md5sig) {
      console.error("Signature Mismatch!");
      return NextResponse.json({ error: "Signature mismatch" }, { status: 401 });
    }

    if (status_code === "2") {
      
    
      const orderQuery = `*[_type == "order" && orderId == "${order_id}"][0]`;
      const order = await client.fetch(orderQuery);

      if (!order) {
         return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      await client.patch(order._id).set({ status: 'paid' }).commit();

     
      if (order.items && order.items.length > 0) {
        for (const item of order.items) {
          if (item.product && item.product._ref) {
            await client
              .patch(item.product._ref)
              .dec({ stock: item.quantity }) 
              .commit();
          }
        }
      }

      console.log(`Order ${order_id} marked as PAID and Stock updated.`);
      return NextResponse.json({ message: "Payment updated successfully" });
    }

    return NextResponse.json({ message: "Payment not successful, no changes made" });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
