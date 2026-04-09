import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import TrendingSection from "@/components/TrendingSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#Fdfbf7] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. SCROLLING MARQUEE */}
      <div className="bg-black text-white py-3 overflow-hidden border-b border-white/10 relative z-20">
        
        {/* CSS Animation එක කෙලින්ම මෙතනම දාමු */}
        <style>{`
          @keyframes custom-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-custom {
            animation: custom-marquee 20s linear infinite;
          }
        `}</style>

        {/* මෙතන w-max සහ animate-marquee-custom අනිවාර්යයි */}
        <div className="animate-marquee-custom whitespace-nowrap flex gap-10 w-max">
          {[...Array(20)].map((_, i) => (
             <div key={i} className="flex items-center gap-10">
                <span className="text-xs font-bold uppercase tracking-[0.3em]">New Arrivals In Store</span>
                <span className="text-[10px] text-gray-500">♦</span>
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Islandwide Delivery Available</span>
                <span className="text-[10px] text-gray-500">♦</span>
             </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURED CATEGORIES (අර අපි හදපු Men/Women කොටස්) */}
      <FeaturedCategories />

      {/* 4. MID-PAGE PROMO BANNER */}
      <section className="w-full bg-stone-900 py-24 text-center px-4 my-10 relative overflow-hidden">
         {/* Background Pattern (Optional) */}
         <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover opacity-10 mix-blend-overlay"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto">
             <p className="text-stone-400 text-xs uppercase tracking-[0.4em] mb-4">
                Quality • Comfort • Style
             </p>
             <h2 className="text-4xl md:text-7xl text-white font-black uppercase tracking-tighter mb-6 leading-none">
                Everyday <span className="text-gray-500">Essentials</span>
             </h2>
             <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                From casual wear to formal attire, discover the perfect look for any occasion. 
                Now bringing the Amila Fashion experience to your doorstep.
             </p>
             <Link href="/shop" className="inline-block bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105">
                Browse Full Collection
             </Link>
         </div>
      </section>

      {/* 5. TRENDING PRODUCTS */}
      <TrendingSection />

    </main>
  );
}