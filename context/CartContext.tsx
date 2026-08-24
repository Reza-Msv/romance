"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MenuItem } from "@/components/home/components/MenuData";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (barcode: string) => void;
  updateQuantity: (barcode: string, quantity: number) => void;
  getItemQuantity: (barcode: string) => number;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("romance_cafe_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("romance_cafe_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cartItems]);

  const addToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((ci) => ci.item.barcode === item.barcode);
      if (existing) {
        return prevItems.map((ci) =>
          ci.item.barcode === item.barcode
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prevItems, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (barcode: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((ci) => ci.item.barcode !== barcode)
    );
  };

  const updateQuantity = (barcode: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(barcode);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((ci) =>
        ci.item.barcode === barcode ? { ...ci, quantity } : ci
      )
    );
  };

  const getItemQuantity = (barcode: string): number => {
    const found = cartItems.find((ci) => ci.item.barcode === barcode);
    return found ? found.quantity : 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        totalCount,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
