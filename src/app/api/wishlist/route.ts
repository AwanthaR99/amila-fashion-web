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
    const { productId, userEmail, action } = await req.json();

    const userQuery = `*[_type == "user" && email == "${userEmail}"][0]`;
    let user = await client.fetch(userQuery);

    if (!user) {
      user = await client.create({
        _type: 'user',
        email: userEmail,
        name: 'New User', 
        wishlist: []
      });
    }

    // 3. Add or Remove Logic
    if (action === 'add') {
      await client
        .patch(user._id)
        .setIfMissing({ wishlist: [] })
        .insert('after', 'wishlist[-1]', [{ _type: 'reference', _ref: productId, _key: productId }])
        .commit();
        
      return NextResponse.json({ message: "Added to wishlist" });

    } else {
   
      await client
        .patch(user._id)
        .unset([`wishlist[_ref=="${productId}"]`]) 
        .commit();

      return NextResponse.json({ message: "Removed from wishlist" });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update wishlist" }, { status: 500 });
  }
}
