"use client";
import { createContext, useContext, useState } from "react";
const CartContext = createContext<any>(null);
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [totalItems] = useState(0); 
  return <CartContext.Provider value={{ totalItems }}>{children}</CartContext.Provider>;
}
export function useCart() { return useContext(CartContext); }
