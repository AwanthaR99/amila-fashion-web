"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { urlFor } from "@/../sanity/lib/image";
import { Trash2, Edit, PackageSearch } from "lucide-react";
import Link from "next/link";

export default function ProductsListPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        "image": images[0],
        subCategory,
        stock
      } | order(_createdAt desc)`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/delete-product?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Product deleted successfully!");
        fetchProducts(); // Table refresh
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <div className="p-10 text-center font-bold animate-pulse text-slate-500">Loading Products...</div>;

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <PackageSearch size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Manage Products</h1>
              <p className="text-slate-500 font-medium">View, edit or delete products from your store.</p>
            </div>
          </div>
          <Link href="/admin/products" className="bg-black text-white px-6 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition-transform">
            + Add New Product
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Product</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Category</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider">Price</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider text-center">Variants</th>
                <th className="p-5 font-black text-slate-500 text-xs uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 flex items-center gap-4">
                    {product.image ? (
                      <img src={urlFor(product.image).url()} alt={product.title} className="h-12 w-12 rounded-lg object-cover bg-slate-100 border border-slate-200" />
                    ) : (
                      <div className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">No Img</div>
                    )}
                    <span className="font-bold text-slate-900">{product.title}</span>
                  </td>
                  <td className="p-5 text-sm font-bold text-slate-500 capitalize">{product.subCategory || "N/A"}</td>
                  <td className="p-5 text-sm font-black text-slate-900">Rs. {product.price?.toLocaleString()}</td>
                  <td className="p-5 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-black">
                      {product.stock?.length || 0} Options
                    </span>
                  </td>
                  <td className="p-5 text-right space-x-2">
                    
                    {/* 🚨 EDIT BUTTON ADDED HERE */}
                    <Link 
                      href={`/admin/products/edit/${product._id}`}
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors inline-flex items-center justify-center"
                      title="Edit Product"
                    >
                      <Edit size={18} />
                    </Link>

                    <button 
                      onClick={() => handleDelete(product._id, product.title)}
                      disabled={deletingId === product._id}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 inline-flex items-center justify-center"
                      title="Delete Product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-10 text-center font-bold text-slate-400">No products found. Add some!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}