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
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    
    const buffer = Buffer.from(await file.arrayBuffer());
    
    const asset = await writeClient.assets.upload("image", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    
    return NextResponse.json({ success: true, assetId: asset._id, url: asset.url });
  } catch (error) {
    console.error("Image upload failed:", error);
    return NextResponse.json({ success: false, error: "Image upload failed" }, { status: 500 });
  }
}