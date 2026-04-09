import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* 1. Background Image (Slightly Darker for Text Contrast) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" //image
          alt="Amila Fashion New Era"
          fill
          className="object-cover opacity-80"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* 2. Main Content - Aligned Bottom Left (New Layout) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-10 flex flex-col md:flex-row items-end justify-between gap-10">
        
        {/* Left Side: Massive Brand Name */}
        <div className="flex flex-col">
          {/* Small Tagline */}
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold mb-2 md:mb-4 pl-1">
            The 2026 Collection
          </span>

          {/* Big Typography with "Outline" Effect */}
          <h1 className="text-6xl md:text-[9rem] font-black uppercase leading-none tracking-tighter">
            {/* "Amila" - Solid White */}
            <span className="block text-white">Amila</span>
            {/* "Fashion" - Hollow Text (Stroke Only) */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 md:text-stroke-white text-stroke-thin opacity-80">
              Fashion
            </span>
          </h1>
        </div>

        {/* Right Side: Description & CTA Button */}
        <div className="max-w-md pb-2 md:pb-6">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-white/20 pl-6">
            Experience the fusion of tradition and modernity. 
            Designed for those who dare to stand out. 
            Elevate your wardrobe with our exclusive new arrivals.
          </p>

          <Link 
            href="/shop" 
            className="group flex items-center gap-4 text-white uppercase tracking-widest text-sm font-bold hover:text-gray-300 transition-colors"
          >
            <span className="border-b border-white pb-1 group-hover:border-gray-300 transition-all">
              Start Shopping
            </span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
               <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </Link>
        </div>

      </div>

      {/* 3. Decorative Elements (Optional for Premium Feel) */}
      
      {/* Top Right: Year */}
      <div className="absolute top-10 right-6 md:right-16 z-10">
        <span className="text-white/30 text-xl md:text-2xl font-black tracking-widest vertically-oriented md:writing-mode-initial">
          '26
        </span>
      </div>

      {/* Left Side Vertical Line */}
      <div className="absolute top-0 bottom-0 left-6 md:left-10 w-[1px] bg-white/10 z-0 hidden md:block"></div>

    </section>
  );
}