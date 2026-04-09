"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation"; 

export default function Footer() {
  const pathname = usePathname(); 

  
  if (pathname && pathname.startsWith("/studio")) {
    return null;
  }

  
  const collectionLinks = [
    { name: "Men", href: "/shop?category=men" },
    { name: "Women", href: "/shop?category=women" },
    { name: "New Arrivals", href: "/shop" },
    { name: "Accessories", href: "/shop?category=accessories" },
    { name: "Best Sellers", href: "/shop" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact-us" },
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Returns & Exchanges", href: "/returns-exchanges" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-black text-white pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* 1. Brand & Newsletter (Left Side - Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Amila Fashion</h2>
              <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
                Redefining the modern wardrobe. Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              
              {/* Minimalist Input Field */}
              <div className="flex items-center border-b border-white/20 pb-2 max-w-md group focus-within:border-white transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-600 text-sm"
                />
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Spacer (Spans 1 column) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* 2. Shop Links (Spans 3 columns) */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/50">Collections</h4>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              {collectionLinks.map((item) => (
                <li key={item.name}>
                  
                  <Link href={item.href} className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Customer Care (Spans 3 columns) */}
          <div className="md:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-white/50">Support</h4>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  
                  <Link href={item.href} className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 4. Bottom Bar (Clean & Simple) */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 py-8 text-xs text-gray-500">
            
            {/* Copyright */}
            <p className="mb-4 md:mb-0">
              © 2026 Amila Fashion. All rights reserved.
            </p>

            {/* Social Icons (Minimal) */}
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></Link>
            </div>

            {/* Payment / Credits (Optional) */}
            <div className="hidden md:block text-gray-600">
               Sri Lanka
            </div>
        </div>

      </div>
    </footer>
  );
}