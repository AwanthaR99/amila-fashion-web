
"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  
  // State: memorize choosen color and size
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  
  const availableSizes = product.stock 
    ? Array.from(new Set(product.stock.map((item: any) => item.size))).filter(Boolean)
    : (product.sizes || []);
    
  const availableColors = product.stock 
    ? Array.from(new Set(product.stock.map((item: any) => item.color))).filter(Boolean)
    : (product.colors || []);

  const handleAddToCart = () => {
    
    if (availableSizes.length > 0 && !selectedSize) {
      alert("Please select a size! 📏");
      return;
    }

    
    if (availableColors.length > 0 && !selectedColor) {
      alert("Please select a color! 🎨");
      return;
    }

    
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.imageUrl, 
      quantity: 1,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
    });

    
     
  };

  return (
    <div className="flex flex-col">
      
      {/* Selectors Section */}
      <div className="space-y-4 mb-8">
        
        {/* Sizes Selector */}
        {availableSizes.length > 0 && (
          <div>
            <span className="font-semibold text-gray-700 mr-3">Size:</span>
            <div className="inline-flex gap-2 flex-wrap mt-2">
              {availableSizes.map((size: any) => (
                <button
                  key={size as string}
                  onClick={() => setSelectedSize(size as string)}
                  className={`px-4 py-2 rounded border transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black text-gray-700"
                  }`}
                >
                  {size as string}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors Selector */}
        {availableColors.length > 0 && (
          <div className="mt-4">
            <span className="font-semibold text-gray-700 mr-3">Color:</span>
            <div className="inline-flex gap-2 flex-wrap mt-2">
              {availableColors.map((color: any) => (
                <button
                  key={color as string}
                  onClick={() => setSelectedColor(color as string)}
                  className={`px-4 py-2 rounded border transition ${
                    selectedColor === color
                      ? "bg-black text-white border-black" 
                      : "border-gray-300 hover:border-black text-gray-700" 
                  }`}
                >
                  {color as string}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition shadow-lg transform active:scale-95"
      >
        Add to Cart - Rs. {product.price?.toLocaleString()}
      </button>

    </div>
  );
}   