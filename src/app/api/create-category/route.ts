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
    const { title } = await req.json();
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const newCategory = {
      _type: 'category',
      title: title,
      slug: { _type: 'slug', current: slug }
    };

    await writeClient.create(newCategory);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create category" }, { status: 500 });
  }
}