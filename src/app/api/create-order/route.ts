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
    const body = await req.json();
    const { orderId, items, amount, shippingFee, user, status } = body; 

    for (const item of items) {
      const product = await client.fetch(
        `*[_type == "product" && _id == $id][0] { title, stock }`,
        { id: item.id }
      );

      const variant = product.stock?.find(
        (s: any) => s.size === item.size && s.color === item.color
      );

      if (!variant || variant.quantity < item.quantity) {
        return NextResponse.json(
          { error: `Sorry! "${product.title} (${item.color} - ${item.size})" is out of stock.` }, 
          { status: 400 }
        );
      }
    }

    // 2. ORDER CREATION
    const order = await client.create({
      _type: "order",
      orderId: orderId,
      customerName: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      totalAmount: amount, 
      shippingFee: shippingFee, 
      status: status || "pending", 
      createdAt: new Date().toISOString(),
      items: items.map((item: any) => ({
        _key: crypto.randomUUID(), 
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        size: item.size, 
        color: item.color, 
        product: { _type: 'reference', _ref: item.id }
      })),
    });

    // 3. STOCK DECREMENT (REFINED & FIXED) 📉
    if (status === "paid") {
      for (const item of items) {
        try {
          const stockData = await client.fetch(
            `*[_id == $id][0].stock[size == $size && color == $color][0]`,
            { id: item.id, size: item.size, color: item.color }
          );

          if (stockData && stockData._key) {
            const newQuantity = stockData.quantity - item.quantity;

            
            await client
              .patch(item.id)
              .insert("replace", `stock[_key == "${stockData._key}"]`, [
                {
                  ...stockData, 
                  quantity: newQuantity 
                }
              ])
              .commit();
            
            console.log(`Stock updated for ${item.id} (${item.size}): New Qty ${newQuantity}`);
          }
        } catch (patchError) {
          console.error(`Individual stock patch failed for ${item.id}:`, patchError);
        }
      }
    }

    return NextResponse.json({ message: "Order Created Successfully", order });

  } catch (error) {
    console.error("Critical Sanity Error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}
