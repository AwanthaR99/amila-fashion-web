// src/app/api/toggle-coupon/route.ts
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
    const { id, isActive } = await req.json();
    
    
    await writeClient.patch(id).set({ isActive }).commit();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Toggle failed:", error);
    return NextResponse.json({ success: false, error: "Failed to update status" }, { status: 500 });
  }
}