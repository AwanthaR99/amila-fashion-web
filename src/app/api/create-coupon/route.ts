import { NextResponse } from "next/server";
import { createClient } from "next-sanity";


const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const couponCode = data.code.toUpperCase().trim();

    
    const existingCouponQuery = `*[_type == "coupon" && code == "${couponCode}"][0]`;
    const existingCoupon = await writeClient.fetch(existingCouponQuery);

    if (existingCoupon) {
      
      return NextResponse.json(
        { success: false, error: `The coupon code "${couponCode}" already exists!` },
        { status: 400 }
      );
    }

    
    const newCoupon = {
      _type: 'coupon',
      code: couponCode, 
      discount: Number(data.discount),
      applicableCategory: data.applicableCategory || "all", 
      isActive: true, 
    };

    const response = await writeClient.create(newCoupon);
    return NextResponse.json({ success: true, coupon: response });

  } catch (error) {
    console.error("Coupon creation failed:", error);
    return NextResponse.json({ success: false, error: "Failed to create coupon" }, { status: 500 });
  }
}