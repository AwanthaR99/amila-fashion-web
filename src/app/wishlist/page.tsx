"use client";

import { useSession } from "next-auth/react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Trash2, ShoppingBag, Heart } from "lucide-react";

export default function WishlistPage() {
  const { data: session, status } = useSession();
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") redirect("/");
  }, [status]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (session?.user?.email) {
        const query = `*[_type == "user" && email == "${session.user.email}"][0].wishlist[]->{
            _id,
            title,
            price,
            "slug": slug.current,
            "imageUrl": images[0].asset->url,
            "categoryName": category->title
        }`;
        const data = await client.fetch(query);
        setWishlistItems(data || []);
        setLoading(false);
      }
    };
    if (status === "authenticated") fetchWishlist();
  }, [session, status]);

  // Remove Function
  const removeItem = async (productId: string, e: React.MouseEvent) => {
    e.preventDefault(); 
    if (!session?.user?.email) return;

    // Optimistic UI Update
    setWishlistItems((prev) => prev.filter((item) => item._id !== productId));

    try {
      await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userEmail: session.user.email,
          action: "remove",
        }),
      });
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading Wishlist...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12 px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-center md:text-left">
           My Wishlist <span className="text-red-500">❤️</span>
        </h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product, index) => (
              <Link 
                href={`/product/${product.slug}`} 
                key={`${product._id}-${index}`} 
                className="group relative block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                
                {/* 1. Remove Button (Floating) */}
                <button
                  onClick={(e) => removeItem(product._id, e)}
                  className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow-sm hover:bg-red-500 hover:text-white transition-colors group-hover:opacity-100 opacity-0 md:opacity-0 transition-opacity duration-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* 2. Image */}
                <div className="relative h-72 w-full bg-gray-100">
                  {product.imageUrl ? (
                     <Image 
                        src={product.imageUrl} 
                        alt={product.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                  ) : (
                     <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                  )}
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 3. Details */}
                <div className="p-5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                     {product.categoryName || "Fashion"}
                  </p>
                  <h3 className="font-bold text-lg text-gray-900 truncate mb-1">{product.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                     <span className="font-bold text-lg">Rs. {product.price}</span>
                     
                     <div className="bg-black text-white p-2 rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ShoppingBag className="w-4 h-4" />
                     </div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-32 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
               <Heart className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Explore our latest collections and save your favorites.</p>
            <Link 
               href="/shop" 
               className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
