"use client";
import { useState } from "react";

export default function CategoriesPage() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/create-category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (res.ok) {
        alert("Category Added!");
        setTitle("");
      }
    } catch (error) {
      alert("Error adding category");
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Categories</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm flex gap-4">
        <input 
          required type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="New Category Name (e.g. Accessories)" 
          className="flex-1 p-3 border rounded-lg"
        />
        <button type="submit" disabled={loading} className="bg-black text-white px-6 py-3 rounded-lg font-bold">
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>
    </div>
  );
}