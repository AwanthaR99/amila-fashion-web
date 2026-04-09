import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


async function getTrendingProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc)[0..3] {
    _id,
    title,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
    category->{title}
  }`;
  return await client.fetch(query);
}

export default async function TrendingSection() {
  const products = await getTrendingProducts();

  return (
    <section className="py-24 md:py-32 px-4 w-full bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Section Header - Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-3">
              This Week's Favorites
            </h4>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black tracking-tighter leading-none">
              Trending <br className="hidden md:block" /> Now
            </h2>
          </div>
          
          <div className="hidden md:block mb-2">
             <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
                View All Products
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
             </Link>
          </div>
        </div>

        {/* 2. Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {products.map((product: any) => (
            <Link href={`/product/${product.slug}`} key={product._id} className="group cursor-pointer block">
              
              {/* Product Image Card */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                {/* Badge (Optional) */}
                <div className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] font-bold uppercase px-2 py-1 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  New
                </div>

                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              {/* Product Info - Minimalist */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                   <h3 className="text-base font-bold uppercase tracking-tight text-black group-hover:underline decoration-1 underline-offset-4 transition-all">
                     {product.title}
                   </h3>
                </div>
                
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {product.category?.title}
                </p>
                
                <p className="text-sm font-medium text-black mt-2">
                  LKR {product.price.toLocaleString()}
                </p>
              </div>

            </Link>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <Link href="/shop" className="inline-block border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
               View All Arrivals
            </Link>
        </div>

      </div>
    </section>
  );
}