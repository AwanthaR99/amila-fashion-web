"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { PackagePlus, Save, PlusCircle, Trash2, ImagePlus,Edit } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [categories, setCategories] = useState<any[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    title: "", price: "", description: "", categoryId: "", occasion: "", subCategory: "", 
  });

  const [stock, setStock] = useState([{ color: "Black", size: "M", quantity: 10 }]);

  // Load Initial Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const catData = await client.fetch(`*[_type == "category"]{_id, title}`);
        setCategories(catData);

        if (productId) {
          const productData = await client.fetch(`*[_type == "product" && _id == "${productId}"][0]{
            title, price, description, occasion, subCategory, stock,
            "categoryId": category._ref
          }`);
          
          if (productData) {
            setFormData({
              title: productData.title || "",
              price: productData.price || "",
              description: productData.description || "",
              categoryId: productData.categoryId || "",
              occasion: productData.occasion || "",
              subCategory: productData.subCategory || "",
            });
            if (productData.stock) setStock(productData.stock);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  // Dynamic Logic
  const accessoriesList = ['cap', 'belt', 'wallet', 'handbag', 'watch', 'sunglasses', 'perfume', 'cream', 'hair-oil'];
  const bottomWearsList = ['trouser', 'jeans', 'shorts', 'skirt'];
  const isAccessory = accessoriesList.includes(formData.subCategory);
  const isBottomWear = bottomWearsList.includes(formData.subCategory);

  const sizeOptions = isBottomWear ? ['26', '28', '30', '32', '34', '36', '38', '40', '42'] : ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'];
  const colorOptions = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple', 'Grey', 'Brown', 'Navy', 'Maroon', 'Beige', 'Printed'];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setImageFiles((prev) => [...prev, ...files]);
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (indexToRemove: number) => {
    setImageFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
    setImagePreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleVariantChange = (index: number, field: string, value: string | number) => {
    const newStock = [...stock];
    newStock[index] = { ...newStock[index], [field]: value };
    setStock(newStock);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let uploadedImageIds: string[] = [];

      if (imageFiles.length > 0) {
        setUploadingImage(true);
        const uploadPromises = imageFiles.map(async (file) => {
          const imageFormData = new FormData();
          imageFormData.append("image", file);
          const imgRes = await fetch("/api/upload-image", { method: "POST", body: imageFormData });
          return imgRes.json();
        });
        const uploadResults = await Promise.all(uploadPromises);
        uploadedImageIds = uploadResults.filter(res => res.success).map(res => res.assetId);
        setUploadingImage(false);
      }

      const finalStock = stock.map(item => isAccessory ? { ...item, color: "N/A", size: "Free Size" } : item);
      const payload = { id: productId, ...formData, stock: finalStock, imageIds: uploadedImageIds };

      const res = await fetch("/api/update-product", {
        method: "PUT", // 🚨 PUT request for updating
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("🎉 Product Updated Successfully!");
        router.push("/admin/products-list"); 
      } else {
        alert("❌ Failed to update product.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-10 text-center font-bold animate-pulse text-slate-500">Loading Product Data...</div>;

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Edit size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Edit Product</h1>
            <p className="text-slate-500 font-medium">Update details and stock for this product.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Upload */}
            <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-[350px] overflow-y-auto">
              <h2 className="text-sm font-black text-slate-800 mb-2 uppercase tracking-wider">Update Images</h2>
              <p className="text-xs text-amber-600 font-bold mb-4 bg-amber-50 p-2 rounded-lg">If no new images are added, old ones will be kept safely.</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {imagePreviews.map((src, index) => (
                  <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-200">
                    <img src={src} alt="Preview" className="w-full h-full object-cover" />
                    <button type="button" onClick={() => removeImage(index)} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white"><Trash2 size={16} /></button>
                  </div>
                ))}
                <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-2xl cursor-pointer hover:bg-indigo-50 transition-colors">
                  <ImagePlus size={24} className="text-indigo-400 mb-2" />
                  <span className="text-[10px] font-bold text-indigo-600 text-center">Add New Images</span>
                  <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>
            </div>

            {/* Basic Info */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Product Title</label>
                  <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Price (LKR)</label>
                  <input required type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-bold text-indigo-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Main Category</label>
                  <select required value={formData.categoryId} onChange={(e) => setFormData({...formData, categoryId: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-bold">
                    <option value="">Select Category...</option>
                    {categories.map((cat) => <option key={cat._id} value={cat._id}>{cat.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Sub Category</label>
                  <select value={formData.subCategory} onChange={(e) => setFormData({...formData, subCategory: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-medium">
                    {/* Simplified for code brevity, add your subcat list here if needed, or user can just use existing value */}
                    <option value={formData.subCategory}>{formData.subCategory.toUpperCase()}</option>
                    <option value="t-shirt">T-Shirt</option>
                    <option value="trouser">Trouser</option>
                    <option value="perfume">Perfume</option>
                    {/* Add more as needed */}
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Description</label>
                  <textarea rows={3} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full p-3 bg-slate-50 border rounded-xl outline-none font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Stock Variants */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider text-sm">Update Stock Management</h2>
              <button type="button" onClick={() => setStock([...stock, { color: "White", size: "M", quantity: 5 }])} className="flex items-center gap-2 text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg">
                <PlusCircle size={16} /> Add Variant
              </button>
            </div>
            <div className="space-y-4">
              {stock.map((item, index) => (
                <div key={index} className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl relative">
                  <div className="flex-1 space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Color</label>
                    <input type="text" list={`color-list-${index}`} disabled={isAccessory} value={isAccessory ? "N/A" : item.color} onChange={(e) => handleVariantChange(index, "color", e.target.value)} className="w-full p-2.5 border rounded-lg font-bold outline-none" />
                    <datalist id={`color-list-${index}`}>{colorOptions.map(c => <option key={c} value={c} />)}</datalist>
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Size</label>
                    <input type="text" list={`size-list-${index}`} disabled={isAccessory} value={isAccessory ? "Free Size" : item.size} onChange={(e) => handleVariantChange(index, "size", e.target.value)} className="w-full p-2.5 border rounded-lg font-bold outline-none" />
                    <datalist id={`size-list-${index}`}>{sizeOptions.map(s => <option key={s} value={s} />)}</datalist>
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Qty Available</label>
                    <input type="number" min="0" value={item.quantity} onChange={(e) => handleVariantChange(index, "quantity", parseInt(e.target.value) || 0)} className="w-full p-2.5 bg-white border rounded-lg font-bold outline-none text-indigo-700" />
                  </div>
                  {stock.length > 1 && (
                    <button type="button" onClick={() => setStock(stock.filter((_, i) => i !== index))} className="mt-5 p-3 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white"><Trash2 size={18} /></button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" disabled={saving || uploadingImage} className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-black text-lg bg-indigo-600 hover:bg-indigo-700 shadow-lg">
              {uploadingImage ? "Uploading..." : saving ? "Updating..." : <><Save size={20} /> Update Product</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}