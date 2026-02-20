"use client";

import { useState } from "react";
import { Star, User } from "lucide-react";
import { useSession } from "next-auth/react";

interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface Props {
  productId: string;
  existingReviews: Review[];
}

export default function Reviews({ productId, existingReviews }: Props) {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState<Review[]>(existingReviews);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return alert("Please login to write a review!");
    if (rating === 0) return alert("Please select a rating!");

    setLoading(true);
    try {
      const res = await fetch("/api/add-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          user: session.user?.name || "Anonymous",
          rating,
          comment,
        }),
      });

      if (res.ok) {
        
        const newReview = {
            _id: Date.now().toString(),
            user: session.user?.name || "Anonymous",
            rating,
            comment,
            createdAt: new Date().toISOString()
        };
        setReviews([newReview, ...reviews]);
        setComment("");
        setRating(0);
        alert("Review Submitted! ⭐");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 border-t pt-10">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews ({reviews.length})</h2>

      {/* Review Form */}
      <div className="bg-gray-50 p-6 rounded-xl mb-10">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => setRating(star)} type="button">
              <Star className={`w-6 h-6 ${rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us about your experience..."
          className="w-full p-3 border rounded-lg mb-4"
          rows={3}
        />
        <button 
            onClick={handleSubmit} 
            disabled={loading || !session}
            className="bg-black text-white px-6 py-2 rounded-lg font-medium disabled:bg-gray-400"
        >
            {loading ? "Submitting..." : "Submit Review"}
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="border-b pb-6">
            <div className="flex items-center gap-2 mb-2">
                <div className="bg-gray-200 p-2 rounded-full">
                    <User className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm">{review.user}</span>
                <span className="text-xs text-gray-400 ml-2">{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}