"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { MessageSquareQuote, Trash2, Star, User } from "lucide-react";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      
      const query = `*[_type == "review"] {
        _id,
        user,
        rating,
        comment,
        createdAt,
        product->{title} 
      } | order(createdAt desc)`;
      
      const data = await client.fetch(query);
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    
    try {
      
      setReviews(reviews.filter(r => r._id !== id));

      await fetch(`/api/delete-review?id=${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to delete review.");
      fetchReviews(); 
    }
  };

  if (loading) return <div className="p-10 text-center font-bold text-slate-500 animate-pulse">Loading Reviews...</div>;

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <MessageSquareQuote size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Customer Reviews</h1>
            <p className="text-slate-500 font-medium">Moderate and manage feedback from your customers.</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={16} 
                        className={star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-slate-700 text-sm font-medium leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      <User size={14} className="text-slate-400"/> {review.user}
                    </p>
                    <p className="text-[10px] font-bold text-indigo-500 mt-1 uppercase tracking-widest truncate max-w-[180px]">
                      {review.product?.title || "Unknown Product"}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => handleDelete(review._id)}
                    className="h-8 w-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                    title="Delete Review"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

            </div>
          ))}

          {reviews.length === 0 && (
            <div className="col-span-full p-10 text-center bg-white rounded-3xl border border-dashed border-slate-200">
              <MessageSquareQuote size={48} className="text-slate-300 mx-auto mb-4" />
              <p className="font-bold text-slate-500">No reviews yet. Your store is waiting for feedback!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}