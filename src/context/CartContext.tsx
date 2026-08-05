<<<<<<< HEAD
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
=======
import { createContext, useContext, useState } from "react";
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
import type { Product } from "../types/product";

export interface CartItem {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
<<<<<<< HEAD
  stock: number;
=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
<<<<<<< HEAD
  removeFromCart: (id: number) => void;
=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

<<<<<<< HEAD
const STORAGE_KEY = "cart";

function loadInitialCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(loadInitialCart);

  // Persist the cart so a page refresh doesn't wipe it out.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        // Don't let quantity exceed available stock.
        if (existingItem.quantity >= product.stock) {
          return prev;
        }

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
=======
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
<<<<<<< HEAD
          stock: product.stock,
=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
        },
      ];
    });
  };

<<<<<<< HEAD
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
=======
  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
<<<<<<< HEAD
            ? { ...item, quantity: item.quantity - 1 }
=======
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
<<<<<<< HEAD
        removeFromCart,
=======
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
<<<<<<< HEAD
}
=======
}
>>>>>>> 23bc17ac3b69e1ea1307de726046853da4148432
