"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  // Empty cart
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-10">
        <div className="bg-gray-50 p-6 rounded-full mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Your bag is empty</h1>
        <p className="text-gray-500 mt-2 mb-8 max-w-sm mx-auto">Looks like you haven&apos;t added anything to your cart yet. Explore our latest collections.</p>
        <Link href="/shop" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-32 pb-20 min-h-screen">

      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">Shopping Bag <span className="text-gray-400 text-lg">({items.length})</span></h1>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left: Cart Items List */}
        <div className="flex-1 space-y-6">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 border border-gray-100 p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow">
              
              
              <div className="relative w-28 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                {item.image ? (
                   <Image src={item.image} alt={item.title} fill className="object-cover" />
                ) : (
                   <div className="flex items-center justify-center w-full h-full text-xs text-gray-400">No Image</div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">{item.title}</h3>
                      <button onClick={() => removeFromCart(item.id, item.size, item.color)} className="text-gray-400 hover:text-red-500 transition p-1">
                        <Trash2 className="w-5 h-5" />
                      </button>
                  </div>
                  <p className="text-gray-900 font-bold mt-1">Rs. {item.price.toLocaleString()}</p>
                  
                  <div className="flex gap-3 text-xs font-bold text-gray-500 mt-3 uppercase tracking-wide">
                    {item.size && (
                      <span className="bg-gray-50 px-2 py-1 rounded border border-gray-200">
                        Size: <span className="text-black">{item.size}</span>
                      </span>
                    )}
                    {item.color && (
                      <span className="bg-gray-50 px-2 py-1 rounded border border-gray-200">
                        Color: <span className="text-black">{item.color}</span>
                      </span>
                    )}
                  </div>
                  
                </div>
                <div className="flex justify-between items-center mt-2">
                   {/* Quantity Controls */}
                   <div className="flex items-center border border-gray-300 rounded-lg h-9 w-24">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size!, item.color!, item.quantity - 1)}
                        className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="flex-1 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size!, item.color!, item.quantity + 1)}
                        className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                   </div>
                   
                   <p className="font-bold text-gray-900">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-[350px] flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg sticky top-32">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {cartTotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                 <span>Shipping</span>
                 <span className="text-blue-600 font-medium">Calculated at checkout</span>
              </div>

              <div className="border-t pt-4 mt-2 flex justify-between font-black text-xl text-gray-900">
                <span>Total</span>
                <span>Rs. {cartTotal.toLocaleString()}.00</span>
              </div>
            </div>

          
            <button 
              onClick={() => router.push("/checkout")}
              className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
            >
              Checkout Now <ArrowRight className="w-4 h-4" />
            </button>
            
            <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
              Secure Checkout
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}