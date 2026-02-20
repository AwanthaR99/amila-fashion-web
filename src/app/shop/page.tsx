"use client";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo, Suspense } from "react";
import { Filter, ChevronRight } from "lucide-react";
import FilterSidebar from "@/components/FilterSidebar";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category"); // men, women
  const urlSubCategory = searchParams.get("sub");   // t-shirt, saree
  const urlOccasion = searchParams.get("occasion"); // casual, office
  const urlSearch = searchParams.get("search");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Filters State
  const [filters, setFilters] = useState({
    categories: [] as string[],
    subCategory: "", 
    occasion: "",
    maxPrice: 20000,
    size: "",
    color: "",
  });

  //  Dynamic Banner Logic
  const getBannerInfo = () => {
    if (urlSearch) return { title: `Search: "${urlSearch}"`, image: "/shop-banner.jpg", subtitle: "Search Results" };
    
    const mainTitle = urlCategory ? urlCategory.toUpperCase() : "ALL PRODUCTS";
    
    let subTitle = "";
    if (urlOccasion) subTitle += `: ${urlOccasion.toUpperCase()} WEAR`;
    if (urlSubCategory) subTitle += ` - ${urlSubCategory.toUpperCase()}`;
    if (!urlOccasion && !urlSubCategory) subTitle = " COLLECTION";

    switch (urlCategory) {
      case "men":
        return { 
            title: mainTitle + subTitle, 
            image: "/men-banner.jpg", 
            subtitle: "Timeless Style for Him" 
        };
      case "women":
        return { 
            title: mainTitle + subTitle, 
            image: "/women-banner.jpg", 
            subtitle: "Elegance & Grace" 
        };
      default:
        return { 
            title: "ALL PRODUCTS", 
            image: "/shop-banner.jpg", 
            subtitle: "Explore Our Latest Drops" 
        };
    }
  };

  const banner = getBannerInfo();

  //  URL Change Handler
  useEffect(() => {
    setFilters(prev => ({ ...prev, categories: [], subCategory: "", occasion: "" }));

    if (urlCategory) {
      const formattedCategory = urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1);
      
      setFilters((prev) => ({ 
        ...prev, 
        categories: [formattedCategory],
        subCategory: urlSubCategory || "",
        occasion: urlOccasion || ""
      }));
    }
  }, [urlCategory, urlSubCategory, urlOccasion]);

  //  Data Fetching 
  useEffect(() => {
    const fetchProducts = async () => {
      
      const query = `*[_type == "product"]{
        _id, title, price, "slug": slug.current,
        "imageUrl": images[0].asset->url,
        "categoryName": category->title,
        subCategory, 
        occasion, 
        stock //  (size, color, quantity)
      }`;
      const data = await client.fetch(query);
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // 4. Filtering Logic 
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      
      // Search Filter
      if (urlSearch) {
        const s = urlSearch.toLowerCase();
        if (!product.title.toLowerCase().includes(s) && 
            !product.categoryName?.toLowerCase().includes(s) &&
            !product.subCategory?.toLowerCase().includes(s)) return false;
      }

      // Main Category Filter
      if (filters.categories.length > 0) {
        if (!product.categoryName || !filters.categories.includes(product.categoryName)) {
           return false;
        }
      }

      // Sub Category Filter
      if (filters.subCategory) {
        if (!product.subCategory || product.subCategory !== filters.subCategory) {
            return false;
        }
      }

      // Occasion Filter
      if (filters.occasion) {
        if (!product.occasion || product.occasion !== filters.occasion) {
            return false;
        }
      }

      // Price Filter
      if (product.price > filters.maxPrice) return false;

      //  SIZE FILTER (New Stock Logic)
      if (filters.size) {
        
        const hasSize = Array.isArray(product.stock) && product.stock.some(
           (item: any) => item.size === filters.size && item.quantity > 0
        );
        if (!hasSize) return false;
      }

      //  COLOR FILTER (New Stock Logic)
      if (filters.color) {
        
        const hasColor = Array.isArray(product.stock) && product.stock.some(
           (item: any) => item.color === filters.color && item.quantity > 0
        );
        if (!hasColor) return false;
      }

      return true;
    });
  }, [products, filters, urlSearch]);

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO BANNER */}
      <div className="relative w-full h-[35vh] md:h-[45vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-80">
           {/* Fallback image logic included */}
           <Image 
             src={banner.image} 
             alt={banner.title} 
             fill 
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 mt-8">
           <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2 animate-fade-in-up">
              {banner.subtitle}
           </p>
           <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tighter leading-tight animate-fade-in-up delay-100 mb-4">
              {banner.title}
           </h1>
           
           {/* Breadcrumbs */}
           <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] md:text-xs text-white/80 uppercase tracking-widest bg-black/20 backdrop-blur-sm py-2 px-4 rounded-full inline-flex">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/50" />
              <Link href="/shop" className="hover:text-white transition">Shop</Link>
              
              {urlCategory && (
                <>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <span className="text-white font-bold">{urlCategory}</span>
                </>
              )}

              {urlOccasion && (
                <>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <span className="text-gray-300">{urlOccasion} Wear</span>
                </>
              )}
              
              {urlSubCategory && (
                <>
                  <ChevronRight className="w-3 h-3 text-white/50" />
                  <span className="text-white font-bold border-b border-white">{urlSubCategory}</span>
                </>
              )}
           </div>
        </div>
      </div>


      {/* MAIN CONTENT */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Left: Sidebar */}
          <FilterSidebar 
              filters={filters} 
              setFilters={setFilters} 
              isOpen={isSidebarOpen} 
              setIsOpen={setIsSidebarOpen} 
          />

          {/* Right: Products */}
          <div className="flex-1">
            
            {/* Control Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <span className="text-gray-500 font-medium text-sm">
                  Showing {filteredProducts.length} results
              </span>
              
              <button 
                  className="md:hidden flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide"
                  onClick={() => setIsSidebarOpen(true)}
              >
                  <Filter className="w-4 h-4" /> Filter
              </button>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-32 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                  <p className="text-gray-500 mb-6">We couldn&apos;t find any items matching your filters.</p>
                  <button 
                      onClick={() => setFilters({ categories: [], subCategory: "", occasion: "", maxPrice: 20000, size: "", color: "" })}
                      className="text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition"
                  >
                      Clear All Filters
                  </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6">
                  {filteredProducts.map((product) => (
                  <Link href={`/product/${product.slug}`} key={product._id} className="group cursor-pointer">
                      
                      {/* Image Card */}
                      <div className="relative aspect-[3/4] w-full bg-gray-200 overflow-hidden rounded-sm mb-4">
                          {product.imageUrl ? (
                             <Image 
                                src={product.imageUrl} 
                                alt={product.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                             />
                          ) : (
                             <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                          )}
                          
                          {/* Quick Add Button */}
                          <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <button className="w-full bg-white text-black font-bold py-3 uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg">
                                View Details
                             </button>
                          </div>

                          {/* Occasion Badge */}
                          {product.occasion && (
                             <span className="absolute top-2 left-2 bg-black/70 text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                                {product.occasion}
                             </span>
                          )}
                      </div>

                      {/* Info */}
                      <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                             {product.categoryName} {product.subCategory && `• ${product.subCategory}`}
                          </p>
                          <h3 className="font-bold text-base text-gray-900 leading-tight mb-2 group-hover:underline decoration-1 underline-offset-4">
                             {product.title}
                          </h3>
                          <span className="text-sm font-semibold">Rs. {product.price.toLocaleString()}</span>
                      </div>
                  </Link>
                  ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}