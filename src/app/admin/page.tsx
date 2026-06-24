"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, AlertTriangle, Users, DollarSign, PlusCircle, Box } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [orders, setOrders] = useState<any[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const userRole = session?.user?.role as string;

  // 1. Security Check (Role-Based)
  useEffect(() => {
    if (status === "authenticated") {
      if (userRole !== "admin" && userRole !== "staff") {
        router.push("/"); 
      }
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, userRole, router]);

  // 2. Fetch Data from Sanity
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const productsData = await client.fetch(`*[_type == "product"] { title, stock }`);

        // Calculate Low Stock Items 
        let lowStockItems = 0;
        productsData.forEach((product: any) => {
          if (product.stock) {
            product.stock.forEach((variant: any) => {
              if (variant.quantity <= 5) lowStockItems++;
            });
          }
        });
        setLowStockCount(lowStockItems);

     
        if (userRole === "admin") {
          
          const ordersData = await client.fetch(`*[_type == "order" && status in ['paid', 'shipped', 'delivered']] | order(createdAt desc)`);
          setOrders(ordersData);

          
          const revenue = ordersData.reduce((acc: number, order: any) => acc + (order.totalAmount || order.amount || 0), 0);
          setTotalRevenue(revenue);

          const productSales: Record<string, number> = {};
          ordersData.forEach((order: any) => {
            order.items?.forEach((item: any) => {
              if (item.title) {
                productSales[item.title] = (productSales[item.title] || 0) + item.quantity;
              }
            });
          });

          const sortedTopProducts = Object.entries(productSales)
            .map(([title, qty]) => ({ title, qty }))
            .sort((a, b) => (b.qty as number) - (a.qty as number))
            .slice(0, 5);
          
          setTopProducts(sortedTopProducts);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    if (status === "authenticated" && (userRole === "admin" || userRole === "staff")) {
      fetchDashboardData();
    }
  }, [status, userRole]);

  if (loading || status === "loading") {
    return <div className="flex h-screen items-center justify-center font-bold text-gray-500 animate-pulse">Loading Dashboard...</div>;
  }

  // --- STAFF VIEW ---
  if (userRole === "staff") {
    return (
      <div className="p-8 bg-[#F8FAFC] min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Staff Workspace</h1>
            <p className="text-slate-500 font-medium mt-1">Manage inventory and product listings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="admin/products" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-indigo-500 hover:shadow-md transition-all group">
              <div className="h-16 w-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                <PlusCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Add New Product</h3>
            </Link>

            <Link href="/admin/inventory" className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:shadow-md transition-all group">
              <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Box size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Manage Stock Variants</h3>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Low Stock Alerts</p>
              <h3 className="text-2xl font-black text-red-600">{lowStockCount} Variants need restocking</h3>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 animate-pulse">
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- ADMIN VIEW ---
 
  const chartData = orders.slice(0, 7).reverse().map(order => ({
    name: new Date(order.createdAt).toLocaleDateString('en-US', { weekday: 'short' }),
    amount: order.totalAmount || order.amount || 0
  }));

  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 font-medium mt-1">Welcome back, Admin! Here's what's happening today.</p>
        </div>

        {/* Admin Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-indigo-500 transition-colors">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</p>
              <h3 className="text-2xl font-black text-slate-800">Rs. {totalRevenue.toLocaleString()}</h3>
            </div>
            <div className="h-12 w-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
              <DollarSign size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-blue-500 transition-colors">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Completed Orders</p>
              <h3 className="text-2xl font-black text-slate-800">{orders.length}</h3>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <Package size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-red-500 transition-colors">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Low Stock Alerts</p>
              <h3 className="text-2xl font-black text-red-600">{lowStockCount} Variants</h3>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform animate-pulse">
              <AlertTriangle size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-green-500 transition-colors">
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Customers</p>
              <h3 className="text-2xl font-black text-slate-800">Active</h3>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Admin Charts & Top Sellers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-500"/> Revenue Trend
            </h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0"/>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="amount" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-black text-slate-800 mb-6">Top Selling Items 🔥</h2>
            <div className="space-y-4">
              {topProducts.length > 0 ? (
                topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-sm">
                        {index + 1}
                      </div>
                      <p className="font-bold text-slate-700 text-sm">{product.title}</p>
                    </div>
                    <span className="text-xs font-black bg-white px-2 py-1 rounded-md border border-slate-200 text-slate-600">
                      {product.qty} Sold
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 text-center py-10">No sales data yet.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}