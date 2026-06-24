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

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, title, price, description, categoryId, occasion, subCategory, stock, imageIds } = body;

    // Sanity Update (Patch) Request එක
    let patch = client.patch(id).set({
      title,
      price: Number(price),
      description,
      category: { _type: 'reference', _ref: categoryId },
      occasion,
      subCategory,
      stock: stock.map((s: any) => ({
        _key: crypto.randomUUID(),
        color: s.color,
        size: s.size,
        quantity: Number(s.quantity)
      })),
    });

    // අලුතින් පින්තූර අප්ලෝඩ් කරලා තියෙනවා නම් විතරක් පින්තූර අප්ඩේට් කරනවා
    if (imageIds && imageIds.length > 0) {
      patch = patch.set({
        images: imageIds.map((imgId: string) => ({
          _type: 'image',
          asset: { _type: 'reference', _ref: imgId }
        }))
      });
    }

    const updatedProduct = await patch.commit();
    return NextResponse.json({ success: true, product: updatedProduct });

  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}