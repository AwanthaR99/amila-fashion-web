"use client";

import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState, use } from "react";
import { Star, Truck, RefreshCw, ShieldCheck, AlertCircle, ChevronRight } from "lucide-react";
import Reviews from "@/components/Reviews";
import { useRouter } from "next/navigation";
import Link from "next/link";


// Color Mapping
const COLOR_MAP: { [key: string]: string } = {
  "Black": "#000000", "White": "#FFFFFF", "Red": "#E53935", "Blue": "#1E88E5",
  "Green": "#43A047", "Yellow": "#FDD835", "Pink": "#E91E63", "Purple": "#8E24AA",
  "Grey": "#757575", "Brown": "#795548", "Orange": "#FB8C00", "Navy": "#1A237E",
  "Maroon": "#880E4F", "Gold": "#FFD700", "Silver": "#C0C0C0", 
  "Olive Green": "#556B2F", "Beige": "#F5F5DC",
};

const getColorHex = (name: string) => COLOR_MAP[name] || "#CCCCCC";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { addToCart, setIsCartOpen } = useCart();
  const router = useRouter();
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);

  // Stock Logic
  const currentVariant = product?.stock?.find(
    (s: any) => s.color === selectedColor && s.size === selectedSize
  );
  
  const currentStock = currentVariant ? currentVariant.quantity : 0;
  const isOutOfStock = selectedColor && selectedSize ? currentStock === 0 : false;

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id, title, price, description, 
        stock,
        "images": images[].asset->url, 
        subCategory, occasion,
        "categoryTitle": category->title,
        "reviews": *[_type == "review" && product._ref == ^._id] | order(createdAt desc)
      }`;
      
      try {
        const data = await client.fetch(query);
        setProduct(data);
        
        if (data) {
          if (data.images?.length > 0) setSelectedImage(data.images[0]);

          if (data.stock) {
             const uniqueColors = Array.from(new Set(data.stock.map((item: any) => item.color))) as string[];
             setAvailableColors(uniqueColors);
             
             const uniqueSizes = Array.from(new Set(data.stock.map((item: any) => item.size))) as string[];
             setAvailableSizes(uniqueSizes);

             const firstAvailable = data.stock.find((s: any) => s.quantity > 0);
             if (firstAvailable) {
                setSelectedColor(firstAvailable.color);
                setSelectedSize(firstAvailable.size);
             } else if (data.stock.length > 0) {
                setSelectedColor(data.stock[0].color);
                setSelectedSize(data.stock[0].size);
             }
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedColor) { alert("Please select a color!"); return; }
    if (!selectedSize) { alert("Please select a size!"); return; }
    if (isOutOfStock) { alert("Sorry, this combination is out of stock!"); return; }
    if (quantity > currentStock) { alert(`Sorry, only ${currentStock} items left!`); return; }

    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: selectedImage || product.images?.[0],
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
    setIsCartOpen(true); 
  };

  const handleBuyNow = () => {
    if (!product) return;
    if (!selectedColor) { alert("Please select a color!"); return; }
    if (!selectedSize) { alert("Please select a size!"); return; }
    if (isOutOfStock) { alert("Sorry, this combination is out of stock!"); return; }
    
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: selectedImage || product.images?.[0],
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
    setIsCartOpen(false);
    router.push("/checkout");
  };

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="h-screen flex items-center justify-center">Product Not Found 😢</div>;

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-black">{product.categoryTitle}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="flex-1 lg:flex-[1.5] flex flex-col-reverse lg:flex-row gap-4">
            {product.images?.length > 1 && (
                <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide lg:h-[600px] lg:w-20 shrink-0">
                    {product.images.map((img: string, index: number) => (
                    <button 
                        key={index} 
                        onClick={() => setSelectedImage(img)} 
                        className={`relative w-16 h-20 lg:w-20 lg:h-24 flex-shrink-0 rounded-sm overflow-hidden border transition-all cursor-pointer ${
                            selectedImage === img ? "border-black ring-1 ring-black opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                        <Image src={img} alt="Thumbnail" fill className="object-cover" />
                    </button>
                    ))}
                </div>
            )}

            <div className="relative w-full lg:h-[650px] aspect-[3/4] lg:aspect-auto bg-gray-100 rounded-sm overflow-hidden group cursor-zoom-in">
              {selectedImage ? (
                <Image 
                    src={selectedImage} 
                    alt={product.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                    priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
              )}
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.occasion && (
                      <span className="bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                          {product.occasion}
                      </span>
                  )}
                  {isOutOfStock && (
                      <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                          Sold Out
                      </span>
                  )}
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS */}
          <div className="flex-1 lg:sticky lg:top-32 h-fit">
            
            <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2 text-gray-900 leading-tight">
                    {product.title}
                </h1>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">Rs. {product.price.toLocaleString()}.00</p>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold text-black ml-1">4.8</span>
                        <span className="text-xs text-gray-400 underline ml-1 cursor-pointer">Reviews</span>
                    </div>
                </div>
            </div>

            <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

            {/* COLOR SELECTION */}
            {availableColors.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-bold uppercase text-gray-500 mb-3 block tracking-widest">
                    Color: <span className="text-black ml-1">{selectedColor}</span>
                </span>
                <div className="flex gap-3 flex-wrap">
                  {availableColors.map((color) => (
                    <button 
                        key={color} 
                        onClick={() => setSelectedColor(color)} 
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                            selectedColor === color ? "ring-2 ring-offset-2 ring-black scale-110" : "hover:scale-110 ring-1 ring-gray-200"
                        }`}
                        title={color}
                    >
                      <span 
                        className="w-7 h-7 rounded-full border border-black/5 shadow-sm" 
                        style={{ backgroundColor: getColorHex(color) }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIZE SELECTION */}
            {availableSizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase text-gray-500 tracking-widest">
                      Size: <span className="text-black ml-1">{selectedSize}</span>
                  </span>
                  {selectedColor && selectedSize && (
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${currentStock > 0 ? "text-green-700 bg-green-50" : "text-red-600 bg-red-50"}`}>
                         {currentStock > 0 ? (currentStock < 5 ? `Only ${currentStock} Left` : "In Stock") : "Out of Stock"}
                      </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => {
                    const variantForSize = product.stock?.find((s: any) => s.color === selectedColor && s.size === size);
                    const isSizeAvailable = variantForSize ? variantForSize.quantity > 0 : false;

                    return (
                        <button
                        key={size}
                        onClick={() => { if(isSizeAvailable) { setSelectedSize(size); setQuantity(1); } }}
                        className={`min-w-[45px] h-[45px] px-2 border text-sm font-bold transition-all relative ${
                            selectedSize === size
                            ? "bg-black text-white border-black"
                            : !isSizeAvailable
                                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed decoration-slice line-through"
                                : "bg-white text-gray-700 border-gray-200 hover:border-black"
                        }`}
                        >
                        {size}
                        </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="flex flex-col gap-3 mb-8">
               <div className="flex gap-3">
                   <div className="flex items-center border border-black w-24 h-12">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-full flex items-center justify-center hover:bg-gray-100" disabled={isOutOfStock}>-</button>
                      <span className="flex-1 text-center font-bold text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(Math.min(currentStock, quantity + 1))} className="w-8 h-full flex items-center justify-center hover:bg-gray-100" disabled={isOutOfStock || quantity >= currentStock}>+</button>
                   </div>

                   <button 
                        onClick={handleAddToCart}
                        disabled={isOutOfStock}
                        className={`flex-1 h-12 font-bold uppercase tracking-widest text-sm transition-all border border-black ${
                            isOutOfStock 
                            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed" 
                            : "bg-white text-black hover:bg-black hover:text-white"
                        }`}
                    >
                        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                    
                    
               </div>

               <button 
                    onClick={handleBuyNow}
                    disabled={isOutOfStock}
                    className={`w-full h-12 font-bold uppercase tracking-widest text-sm transition-all shadow-xl ${
                        isOutOfStock 
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none" 
                        : "bg-black text-white hover:bg-gray-900"
                    }`}
                >
                    Buy It Now
                </button>
               
               {isOutOfStock && (
                   <div className="flex items-center gap-2 text-red-600 text-xs font-bold bg-red-50 p-3 mt-2">
                       <AlertCircle className="w-4 h-4" />
                       Please select a different variant.
                   </div>
               )}
            </div>

            {/* TRUST INDICATORS */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
               <div className="flex items-start gap-4">
                  <Truck className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                      <p className="font-bold text-sm uppercase">Island-wide Delivery</p>
                      <p className="text-xs text-gray-500">Receive within 3-5 business days</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <RefreshCw className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                      <p className="font-bold text-sm uppercase">Easy Returns</p>
                      <p className="text-xs text-gray-500">7 Days return policy if damaged</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                      <p className="font-bold text-sm uppercase">Secure Payment</p>
                      <p className="text-xs text-gray-500">KOKO / VISA / MasterCard / COD</p>
                  </div>
               </div>
            </div>
            
            <div className="mt-8">
               <h3 className="font-bold uppercase mb-3 text-xs tracking-widest text-gray-400">Description</h3>
               <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
               </p>
            </div>

          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="border-t border-gray-200 mt-20 pt-16">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 text-center">Customer Reviews</h2>
            <Reviews productId={product._id} existingReviews={product.reviews || []} />
        </div>
      </div>
    </div>
  );
}