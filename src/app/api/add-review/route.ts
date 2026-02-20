import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Write Token
  apiVersion: '2024-01-01',
});

export async function POST(req: Request) {
  try {
    const { productId, user, rating, comment } = await req.json();

    await client.create({
      _type: 'review',
      product: { _type: 'reference', _ref: productId },
      user: user,
      rating: rating,
      comment: comment,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Review Added" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
  }
}