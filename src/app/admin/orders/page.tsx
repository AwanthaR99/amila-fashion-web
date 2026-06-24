"use client";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // --- SECURITY CHECK (Admin Only) ---
  useEffect(() => {
    if (status === "authenticated") {
      
      if (session?.user?.role !== "admin") {
        router.push("/admin"); 
      }
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, session, router]);

  const fetchOrders = async () => {
    try {
      const query = `*[_type == "order"] | order(createdAt desc)`;
      const data = await client.fetch(query);
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    
    if (status === "authenticated" && session?.user?.role === "admin") {
      fetchOrders();
    }
  }, [status, session]);

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    setUpdating(true);
    try {
      const response = await fetch("/api/update-order-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, status: newStatus }),
      });

      if (!response.ok) throw new Error("Update failed");

      await fetchOrders();
      setSelectedOrder((prev: any) => ({ ...prev, status: newStatus }));
      
      alert(`Order marked as ${newStatus}`);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Status update failed. (Permission/Server Error)");
    } finally {
      setUpdating(false);
    }
  };

  if (loading || status === "loading") return <div className="flex h-screen items-center justify-center font-bold text-gray-500 animate-pulse">Loading Orders...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 tracking-tight">Customer Orders 📦</h2>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-bold text-gray-600 text-xs uppercase tracking-wider">Order ID</th>
              <th className="p-4 font-bold text-gray-600 text-xs uppercase tracking-wider">Customer</th>
              <th className="p-4 font-bold text-gray-600 text-xs uppercase tracking-wider">Status</th>
              <th className="p-4 font-bold text-gray-600 text-xs uppercase tracking-wider text-right">Amount</th>
              <th className="p-4 font-bold text-gray-600 text-xs uppercase tracking-wider text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm font-bold text-indigo-600 uppercase tracking-tighter">{order.orderId}</td>
                <td className="p-4 text-sm text-gray-700 font-medium">{order.customerName}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    order.status === 'paid' ? 'bg-green-100 text-green-700' : 
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-right font-bold text-gray-900">Rs. {order.totalAmount?.toLocaleString()}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => setSelectedOrder(order)} 
                    className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-lg hover:bg-indigo-100 font-bold text-xs transition-all active:scale-95"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- ORDER DETAILS MODAL --- */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-[1000] animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl border border-white/20">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-5 mb-6">
              <div>
                <p className="text-[10px] font-black uppercase text-indigo-500 tracking-[0.2em] mb-1">Transaction Details</p>
                <h3 className="text-2xl font-black text-gray-900 leading-none">{selectedOrder.orderId}</h3>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all text-2xl font-light">&times;</button>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="font-black text-gray-400 uppercase text-[10px] tracking-[0.15em]">Customer Info</h4>
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-sm font-bold text-gray-900">{selectedOrder.customerName}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Contact</p>
                    <p className="text-sm font-bold text-gray-900">{selectedOrder.email}</p>
                    <p className="text-sm font-bold text-gray-900">{selectedOrder.phone}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-gray-400 uppercase text-[10px] tracking-[0.15em]">Shipping Info</h4>
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-sm text-gray-700 leading-relaxed font-medium italic">
                        "{selectedOrder.address}"
                    </p>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-black text-gray-400 uppercase text-[10px] tracking-[0.15em] mb-5 text-center">Purchased Items</h4>
              <div className="space-y-3">
                {selectedOrder.items?.map((item: any, idx: number) => (
                  <div key={idx} className="flex justify-between items-center bg-gray-50/50 p-5 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-sm transition-all group">
                    <div className="flex gap-4 items-center">
                        <div className="h-10 w-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 font-black text-xs">
                            {item.quantity}x
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{item.title}</p>
                            <div className="flex gap-2 mt-1">
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-white border border-gray-200 rounded text-gray-600">{item.size}</span>
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-white border border-gray-200 rounded text-gray-600">{item.color}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-black text-gray-900 tracking-tight">Rs. {item.price?.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Update Section */}
            <div className="mt-10 p-6 bg-slate-900 rounded-[2rem] text-white">
              <h4 className="font-black text-slate-500 uppercase text-[10px] tracking-[0.2em] mb-4 text-center italic">Workflow Management</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['pending', 'paid', 'shipped', 'delivered'].map((status) => (
                  <button
                    key={status}
                    disabled={updating}
                    onClick={() => handleStatusUpdate(selectedOrder._id, status)}
                    className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                      selectedOrder.status === status 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105' 
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                    } ${updating ? 'opacity-30 cursor-wait' : ''}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Summary */}
            <div className="mt-8 pt-6 flex justify-between items-center border-t border-gray-100">
                <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Grand Total</span>
                <span className="text-3xl font-black text-gray-900 tracking-tighter">Rs. {selectedOrder.totalAmount?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}