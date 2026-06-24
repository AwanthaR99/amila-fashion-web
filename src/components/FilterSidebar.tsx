"use client";

import { useState } from "react";
import { X, Minus, Plus } from "lucide-react";

interface FilterProps {
  filters: any;
  setFilters: (filters: any) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function FilterSidebar({ filters, setFilters, isOpen, setIsOpen }: FilterProps) {
  
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    size: true,
    color: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  const toggleCategory = (category: string) => {
    const currentCategories = filters.categories || [];
    if (currentCategories.includes(category)) {
      handleFilterChange("categories", currentCategories.filter((c: string) => c !== category));
    } else {
      handleFilterChange("categories", [...currentCategories, category]);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        md:relative md:translate-x-0 md:shadow-none md:w-64 md:block md:border-r md:border-gray-100 md:h-[calc(100vh-100px)] md:sticky md:top-24 md:overflow-y-auto scrollbar-hide
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-6 border-b md:hidden">
          <h2 className="text-lg font-bold uppercase tracking-wider">Filters</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          
          {/* 1. CATEGORY FILTER */}
          <div className="border-b border-gray-100 pb-6">
            <button 
              onClick={() => toggleSection("category")} 
              className="flex justify-between items-center w-full mb-4 group"
            >
              <h3 className="font-bold text-sm uppercase tracking-wider">Category</h3>
              {openSections.category ? <Minus className="w-4 h-4 text-gray-400 group-hover:text-black" /> : <Plus className="w-4 h-4 text-gray-400 group-hover:text-black" />}
            </button>
            
            {openSections.category && (
              <div className="space-y-3 animate-fade-in">
                
                {["Men", "Women", "Kids", "Accessories"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 border rounded flex items-center justify-center transition ${
                      filters.categories.includes(cat) ? "bg-black border-black" : "border-gray-300 group-hover:border-black"
                    }`}>
                      {filters.categories.includes(cat) && <span className="text-white text-xs">✓</span>}
                    </div>
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={filters.categories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className={`text-sm transition ${filters.categories.includes(cat) ? "font-semibold text-black" : "text-gray-600 group-hover:text-black"}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* 2. PRICE FILTER */}
          <div className="border-b border-gray-100 pb-6">
            <button onClick={() => toggleSection("price")} className="flex justify-between items-center w-full mb-4 group">
              <h3 className="font-bold text-sm uppercase tracking-wider">Price Range</h3>
              {openSections.price ? <Minus className="w-4 h-4 text-gray-400 group-hover:text-black" /> : <Plus className="w-4 h-4 text-gray-400 group-hover:text-black" />}
            </button>
            
            {openSections.price && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-4 text-sm font-medium">
                  <span className="text-gray-500">Rs. 0</span>
                  <span className="text-black bg-gray-100 px-2 py-1 rounded">Rs. {filters.maxPrice.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="20000" 
                  step="500" 
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            )}
          </div>

          {/* 3. SIZE FILTER */}
          <div className="border-b border-gray-100 pb-6">
            <button onClick={() => toggleSection("size")} className="flex justify-between items-center w-full mb-4 group">
              <h3 className="font-bold text-sm uppercase tracking-wider">Size</h3>
              {openSections.size ? <Minus className="w-4 h-4 text-gray-400 group-hover:text-black" /> : <Plus className="w-4 h-4 text-gray-400 group-hover:text-black" />}
            </button>
            
            {openSections.size && (
              <div className="grid grid-cols-3 gap-2 animate-fade-in">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFilterChange("size", filters.size === size ? "" : size)}
                    className={`py-2 text-sm border transition-all duration-200 ${
                      filters.size === size 
                        ? "bg-black text-white border-black font-bold" 
                        : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. COLOR FILTER */}
          <div className="pb-6">
            <button onClick={() => toggleSection("color")} className="flex justify-between items-center w-full mb-4 group">
              <h3 className="font-bold text-sm uppercase tracking-wider">Color</h3>
              {openSections.color ? <Minus className="w-4 h-4 text-gray-400 group-hover:text-black" /> : <Plus className="w-4 h-4 text-gray-400 group-hover:text-black" />}
            </button>
            
            {openSections.color && (
              <div className="flex flex-wrap gap-3 animate-fade-in">
                {["Black", "White", "Red", "Blue", "Green"].map((color) => (
                  <button
                    key={color}
                    onClick={() => handleFilterChange("color", filters.color === color ? "" : color)}
                    className={`w-8 h-8 rounded-full border shadow-sm transition-all duration-200 relative ${
                      filters.color === color ? "ring-2 ring-offset-2 ring-black scale-110" : "hover:scale-110 border-gray-200"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  >
                    {color === "White" && <span className="absolute inset-0 rounded-full border border-gray-200"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear Button */}
          <button 
              onClick={() => setFilters({ categories: [], maxPrice: 20000, size: "", color: "" })}
              className="w-full py-3 text-sm font-bold uppercase tracking-widest text-gray-500 border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
              Clear All Filters
          </button>
        </div>

        {/* Mobile View Results Button */}
        <div className="p-4 border-t bg-white md:hidden sticky bottom-0">
            <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-sm"
            >
                View Results
            </button>
        </div>

      </aside>
    </>
  );
}