"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedCategories() {
  
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-20">
      
      {/* Header */}
      <div className="mb-8 md:mb-12 text-center md:text-left select-none">
         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Collections</span>
         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-2 text-black">
            Curated For You
         </h2>
      </div>

      {/* CONTAINER */}
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
        className={`
          flex overflow-x-auto gap-4 h-[60vh] md:h-[80vh] w-full md:grid md:grid-cols-2 
          scrollbar-hide [&::-webkit-scrollbar]:hidden
          snap-x snap-mandatory 
          ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'} 
        `}
      >
        
        {/* 1. MEN'S SECTION (Mobile Order: 1) */}
        <div className="order-1 md:order-none relative group overflow-hidden min-w-full md:min-w-0 snap-center w-full h-full block select-none">
          <Link 
            href="/shop?category=men" 
            className={`block w-full h-full ${isDragging ? 'pointer-events-none' : ''}`}
          >
            <Image
                src="/men.jpg" // Image path eka hariyatama danna
                alt="Men's Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                draggable={false} 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute bottom-8 left-8">
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Men</h3>
                <div className="flex items-center gap-2 text-white mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-sm font-bold uppercase tracking-widest">Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
                </div>
            </div>
          </Link>
        </div>

        {/* 2. RIGHT SIDE WRAPPER */}
        
        <div className="contents md:flex md:flex-col md:gap-4 md:h-full">
           
           {/* Top Box: Promo (Mobile Order: 3 - Last) */}
           <div className="order-3 md:order-none flex bg-black text-white p-8 flex-col justify-center items-center text-center relative overflow-hidden group min-w-full md:min-w-0 snap-center h-full md:h-auto md:flex-1 select-none">
              <div className="relative z-10">
                <h4 className="text-3xl font-bold uppercase tracking-tight mb-2">Summer '26</h4>
                <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                  Experience the new standard of luxury. Handpicked fabrics for the tropical climate.
                </p>
                <Link 
                  href="/shop" 
                  className={`inline-block border-b border-white pb-1 text-xs uppercase tracking-widest hover:text-gray-300 transition ${isDragging ? 'pointer-events-none' : ''}`}
                >
                  Read the Story
                </Link>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
           </div>

           {/* Bottom Box: Women's Image (Mobile Order: 2 - Middle) */}
           <div className="order-2 md:order-none relative group overflow-hidden min-w-full md:min-w-0 snap-center h-full md:h-auto md:flex-[2] block select-none">
             <Link 
               href="/shop?category=women" 
               className={`block w-full h-full ${isDragging ? 'pointer-events-none' : ''}`}
             >
                <Image
                    src="/women.jpg" 
                    alt="Women's Collection"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    draggable={false}
                />
                <div className="absolute bottom-8 right-8 text-right">
                    <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Women</h3>
                    <p className="text-white/80 text-sm font-bold tracking-widest mt-2 border-b border-white/50 inline-block pb-1">
                    Explore Looks
                    </p>
                </div>
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
}