"use client";

import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function WishlistButton({ productId }: { productId: string }) {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleWishlist = async () => {
    if (!session?.user?.email) {
      alert("Please login to save items! ❤️");
      return;
    }

    setLoading(true);
    const action = isLiked ? "remove" : "add";

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userEmail: session.user.email,
          action,
        }),
      });

      if (res.ok) {
        setIsLiked(!isLiked); 
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      disabled={loading}
      className={`p-3 rounded-full border transition-all ${
        isLiked 
          ? "bg-red-50 border-red-200 text-red-500" 
          : "bg-white border-gray-200 text-gray-400 hover:bg-gray-100"
      }`}
    >
      <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
    </button>
  );
}
