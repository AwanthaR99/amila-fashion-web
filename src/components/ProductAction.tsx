"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductActionsProps {
  product: any;
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0] || "");

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
        alert("Please select a size!");
        return;
    }

    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
      size: selectedSize,   
      color: selectedColor, 
    });
    
    alert("Added to Cart! 🛒");
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <div className="flex gap-3 mt-2">
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 2. Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900">Color</h3>
          <div className="flex gap-3 mt-2">
            {product.colors.map((color: string) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                  selectedColor === color
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition shadow-lg active:scale-95"
      >
        Add to Cart - Rs. {product.price}
      </button>
    </div>
  );
}
