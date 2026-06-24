import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    
    await writeClient.delete(id);
    
    return NextResponse.json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json({ success: false, error: "Failed to delete" }, { status: 500 });
  }
}