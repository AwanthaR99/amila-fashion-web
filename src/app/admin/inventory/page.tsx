"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/../sanity/lib/image";

export default function InventoryPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchInventory = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        "image": images[0],
        stock
      } | order(title asc)`;
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Inventory fetch error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const updateStockQty = async (productId: string, variantKey: string, newQty: number) => {
    if (newQty < 0) return;
    setUpdatingId(variantKey);
    
    try {
      const res = await fetch("/api/update-inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, variantKey, newQty }),
      });

      if (res.ok) {
        await fetchInventory(); 
      }
    } catch (error) {
      alert("Update failed!");
    } finally {
      setUpdatingId(null);
    }
  };

  
  const groupByColor = (stock: any[]) => {
    return stock?.reduce((acc: any, curr: any) => {
      if (!acc[curr.color]) acc[curr.color] = [];
      acc[curr.color].push(curr);
      return acc;
    }, {});
  };

  if (loading) return <div className="p-10 text-center font-bold">Loading Inventory...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Inventory Control</h2>
          <p className="text-sm text-slate-500 font-medium">Manage your product stock levels by variant</p>
        </div>
        <span className="flex items-center gap-2 text-[10px] font-black text-red-600 bg-red-50 px-4 py-2 rounded-full border border-red-100 uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> Low Stock Alert (≤5)
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {products.map((product) => {
          const groupedStock = groupByColor(product.stock);

          return (
            <div key={product._id} className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[450px] transition-transform hover:scale-[1.01]">
              
              {/* Product Image Side */}
              <div className="md:w-48 bg-slate-100 relative group shrink-0">
                {product.image ? (
                  <img 
                    src={urlFor(product.image).url()} 
                    alt={product.title} 
                    className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-slate-400 text-xs font-bold uppercase">No Image</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
              </div>

              {/* Stock Details Side */}
              <div className="flex-1 p-6 flex flex-col overflow-hidden">
                <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight line-clamp-2 shrink-0">{product.title}</h3>
                
                
                <div className="space-y-6 flex-1 overflow-y-auto pr-4 custom-scrollbar pb-4">
                  {Object.keys(groupedStock || {}).map((color) => (
                    <div key={color} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">{color} Collection</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {groupedStock[color].map((variant: any) => (
                          <div key={variant._key} className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <span className="text-sm font-black text-slate-700">{variant.size}</span>
                            
                            <div className="flex items-center gap-3">
                              <span className={`text-xs font-black px-2 py-1 rounded-lg ${
                                variant.quantity <= 5 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-white text-slate-900 shadow-sm'
                              }`}>
                                {variant.quantity}
                              </span>
                              
                              <div className="flex gap-1">
                                <button 
                                  disabled={updatingId === variant._key}
                                  onClick={() => updateStockQty(product._id, variant._key, variant.quantity - 1)}
                                  className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all text-xs font-bold disabled:opacity-20 shadow-sm"
                                >-</button>
                                <button 
                                  disabled={updatingId === variant._key}
                                  onClick={() => updateStockQty(product._id, variant._key, variant.quantity + 1)}
                                  className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all text-xs font-bold disabled:opacity-20 shadow-sm"
                                >+</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}