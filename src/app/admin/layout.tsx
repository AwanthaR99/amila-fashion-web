"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Active link highlight function
  const isActive = (path: string) => {
    if (path === '/admin' && pathname !== '/admin') return false;
    return pathname?.startsWith(path);
  };

  
  const navLinks = [
    { name: "Dashboard Overview", href: "/admin", icon: "📊" }, 
    { name: "Customer Orders", href: "/admin/orders", icon: "📦" },
    { name: "Product Inventory", href: "/admin/inventory", icon: "🏬" },
    { name: "Manage Products", href: "/admin/products-list", icon: "👕" },
    { name: "Add New Product", href: "/admin/products", icon: "➕" },
    { name: "Coupons & Promos", href: "/admin/coupons", icon: "🏷️" },
    { name: "Customer Reviews", href: "/admin/reviews", icon: "⭐" },
    { name: "Sanity CMS", href: "/admin/cms", icon: "🛠️" },
  ];

  return (
    
    <div className="fixed inset-0 bg-gray-100 z-[999] flex overflow-hidden font-sans">
      
      
      <aside className="w-64 bg-slate-900 text-white flex flex-col h-full shadow-2xl">
        <div className="p-8">
          <h1 className="text-xl font-black tracking-tighter uppercase border-b border-slate-700 pb-4">
            Amila <span className="text-indigo-500">Fashion</span>
          </h1>
          <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">Control Panel</p>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 font-bold text-sm ${
                isActive(link.href) 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-lg">{link.icon}</span> {link.name}
            </Link>
          ))}

          <div className="pt-8 border-t border-slate-700 mt-8 mb-4">
            <Link 
              href="/" 
              className="flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-all text-sm font-bold bg-slate-800/50 rounded-xl hover:bg-slate-800"
            >
              <span>⬅️</span> Back to Shop
            </Link>
          </div>
        </nav>

        {/* User Info Section at Bottom */}
        <div className="p-4 bg-slate-950/50 border-t border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-black text-xs text-white">A</div>
                <div className="overflow-hidden">
                    <p className="text-xs font-bold truncate text-white">Staff Member</p>
                    <p className="text-[10px] text-slate-500 truncate uppercase tracking-wider">Administrator</p>
                </div>
            </div>
        </div>
      </aside>

      
      <main className="flex-1 overflow-y-auto p-8 bg-slate-50 custom-scrollbar w-full">
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
}