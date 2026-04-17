import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, orderId, total, items } = await req.json();

    const ADMIN_EMAIL = "amilafashion@gmail.com"; 

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const itemsList = items
      .map(
        (item: any) =>
          `<li style="margin-bottom: 5px;">
             ${item.title} (x${item.quantity}) - Rs. ${item.price * item.quantity}
             ${item.size ? `[Size: ${item.size}]` : ""}
             ${item.color ? `[Color: ${item.color}]` : ""}
           </li>`
      )
      .join("");

    // ---------------------------------------------
    // 1. Customer Email (Thank You Email)
    // ---------------------------------------------
    const customerMailOptions = {
      from: `"Amila Fashion" <${process.env.GMAIL_USER}>`,
      to: email, 
      subject: `Order Confirmation - #${orderId} 🎉`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #000;">Thank You for Your Order!</h2>
          <p>Hi,</p>
          <p>We have received your order. Total: <strong>Rs. ${total}</strong></p>
          <h3>Your Items:</h3>
          <ul>${itemsList}</ul>
          <p>We will ship it soon!</p>
        </div>
      `,
    };

    // ---------------------------------------------
    // 2. Admin Email (New Order Alert) 🚨
    // ---------------------------------------------
    const adminMailOptions = {
      from: `"Amila Fashion System" <${process.env.GMAIL_USER}>`,
      to: ADMIN_EMAIL, 
      subject: `🚨 New Order Received! #${orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #000;">
          <h2 style="color: #d32f2f;">New Order Alert! 💰</h2>
          <p><strong>Customer:</strong> ${email}</p>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Total Amount:</strong> Rs. ${total}</p>
          
          <h3>Items to Pack:</h3>
          <ul>${itemsList}</ul>
          
          <p>Please check the Admin Dashboard for more details.</p>
          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard" style="background: black; color: white; padding: 10px 20px; text-decoration: none;">Go to Dashboard</a>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json({ message: "Emails Sent Successfully" });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
