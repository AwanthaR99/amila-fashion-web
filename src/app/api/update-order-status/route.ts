import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

export async function POST(req: Request) {
  try {
    const { productId, variantKey, newQty } = await req.json();

    const currentVariant = await client.fetch(
      `*[_id == $productId][0].stock[_key == $variantKey][0]`,
      { productId, variantKey }
    );

    if (!currentVariant) {
        return NextResponse.json({ error: "Variant not found" }, { status: 404 });
    }

    await client
      .patch(productId)
      .insert("replace", `stock[_key == "${variantKey}"]`, [
        { 
          ...currentVariant, 
          quantity: newQty   
        }
      ])
      .commit();

    return NextResponse.json({ message: "Stock updated successfully!" });
  } catch (error) {
    console.error("Inventory update error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
