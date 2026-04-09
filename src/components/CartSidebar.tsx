"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2, CreditCard, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();

  
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex justify-end">
      
      
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* 2. Sidebar Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-black uppercase tracking-tighter flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Shopping Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                 <ShoppingBag className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-black underline font-bold hover:text-gray-600"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                {/* Image */}
                <div className="relative w-24 h-32 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-gray-900 line-clamp-2">{item.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-1">
                      {item.color} / {item.size}
                    </p>
                    <p className="font-bold text-sm mt-2">Rs. {item.price.toLocaleString()}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300 w-24 h-8 rounded-sm">
                    <button 
                      onClick={() => updateQuantity(item.id, item.size!, item.color!, item.quantity - 1)}
                      className="w-8 h-full flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="flex-1 text-center text-xs font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.size!, item.color!, item.quantity + 1)}
                      className="w-8 h-full flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-xl font-black">Rs. {cartTotal.toLocaleString()}.00</span>
            </div>
            
            <p className="text-xs text-gray-500 mb-4 text-center">
              Shipping, taxes, and discounts calculated at checkout.
            </p>

            <Link 
               href="/checkout"
               onClick={() => setIsCartOpen(false)}
               className="block w-full bg-black text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-all rounded-sm mb-3"
            >
              Checkout
            </Link>
            
            <Link 
               href="/cart" 
               onClick={() => setIsCartOpen(false)}
               className="block w-full text-center py-2 text-xs font-bold uppercase tracking-widest hover:underline"
            >
              View Cart
            </Link>

            {/* Payment Icons (Fake Icons for Trust) */}
            <div className="flex justify-center gap-3 mt-6 opacity-50 grayscale">
               <CreditCard className="w-6 h-6" /> {/* Placeholder icons */}
               <span className="font-bold text-xs border px-1 rounded">VISA</span>
               <span className="font-bold text-xs border px-1 rounded">MASTER</span>
               <span className="font-bold text-xs border px-1 rounded">KOKO</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}