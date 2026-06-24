"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { Ticket, PlusCircle, Trash2, Power, PowerOff } from "lucide-react";

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [applicableCategory, setApplicableCategory] = useState("all");

  const fetchCoupons = async () => {
    try {
      const data = await client.fetch(`*[_type == "coupon"] | order(_createdAt desc)`);
      setCoupons(data);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleAddCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const res = await fetch("/api/create-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, discount, applicableCategory }),
      });

      const result = await res.json(); // 🚨 UPDATE: Backend එකෙන් එන Response එක ගන්නවා

      if (res.ok) {
        alert("Coupon added successfully!");
        setCode("");
        setDiscount("");
        setApplicableCategory("all");
        fetchCoupons(); // Refresh the list
      } else {
        // 🚨 UPDATE: ඩුප්ලිකේට් නම් Backend එකෙන් එවන Error එක කෙලින්ම පෙන්වනවා
        alert(result.error || "Failed to add coupon.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add coupon.");
    } finally {
      setIsAdding(false);
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      setCoupons(coupons.map(c => c._id === id ? { ...c, isActive: !currentStatus } : c));

      await fetch("/api/toggle-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isActive: !currentStatus }),
      });
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
      fetchCoupons();
    }
  };

  const handleDelete = async (id: string, codeName: string) => {
    if (!window.confirm(`Delete coupon "${codeName}"?`)) return;
    try {
      const res = await fetch(`/api/delete-product?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchCoupons();
    } catch (error) {
      console.error(error);
      alert("Failed to delete.");
    }
  };

  if (loading) return <div className="p-10 text-center font-bold text-slate-500 animate-pulse">Loading Coupons...</div>;

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Ticket size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Coupons & Promotions</h1>
            <p className="text-slate-500 font-medium">Create and manage category-wise discount codes.</p>
          </div>
        </div>

        {/* Add Coupon Form */}
        <form onSubmit={handleAddCoupon} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-4 items-end gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Coupon Code</label>
            <input 
              required type="text" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-black text-indigo-700 uppercase" 
              placeholder="e.g. MEN20" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Discount (%)</label>
            <input 
              required type="number" min="1" max="100" value={discount} onChange={(e) => setDiscount(e.target.value)} 
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-700" 
              placeholder="e.g. 20" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Applicable Category</label>
            <select 
              value={applicableCategory} 
              onChange={(e) => setApplicableCategory(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-700 bg-white"
            >
              <option value="all">All Products</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <button 
            type="submit" disabled={isAdding}
            className="h-[58px] w-full bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <PlusCircle size={20} /> {isAdding ? "Adding..." : "Create Coupon"}
          </button>
        </form>

        {/* Coupons Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Code</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Discount</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Category</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Status</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {coupons.map((coupon) => (
                <tr key={coupon._id} className={`transition-colors ${!coupon.isActive ? 'bg-slate-50/50 opacity-75' : 'hover:bg-slate-50'}`}>
                  <td className="p-5">
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-black tracking-widest text-sm">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="p-5 font-black text-slate-900 text-lg">{coupon.discount}% OFF</td>
                  
                  <td className="p-5 font-bold text-slate-600 capitalize">
                    <span className={`px-3 py-1 rounded-full text-xs font-black ${coupon.applicableCategory === 'all' || !coupon.applicableCategory ? 'bg-slate-100 text-slate-700' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                      {coupon.applicableCategory || "All Products"}
                    </span>
                  </td>

                  <td className="p-5">
                    <button 
                      onClick={() => handleToggleStatus(coupon._id, coupon.isActive)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        coupon.isActive ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                    >
                      {coupon.isActive ? <><Power size={14} /> Active</> : <><PowerOff size={14} /> Disabled</>}
                    </button>
                  </td>
                  <td className="p-5 text-right">
                    <button 
                      onClick={() => handleDelete(coupon._id, coupon.code)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {coupons.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-10 text-center font-bold text-slate-400">No coupons available. Create one above!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}