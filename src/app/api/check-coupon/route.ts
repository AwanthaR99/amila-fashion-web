import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, 
  apiVersion: '2024-01-01',
});

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    
    const query = `*[_type == "coupon" && code == "${code}" && isActive == true][0]`;
    const coupon = await client.fetch(query);

    if (!coupon) {
      return NextResponse.json({ error: "Invalid or Expired Coupon" }, { status: 404 });
    }

    return NextResponse.json({ 
        success: true, 
        discount: coupon.discount, 
        code: coupon.code 
    });

  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
