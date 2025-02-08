import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

export const useSimpleCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ items: [] }),
}));

export const useCartStore = create(
  persist(
    (set, get): CartStore => ({
      items: [],

      addItem: (product) => {
        set((state: { items: CartItem[] }) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },

      removeItem: (productId) => {
        set((state: { items: CartItem[] }) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 0) return;

        set((state: { items: CartItem[] }) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const state = get();
        return (state as { items: CartItem[] }).items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const state = get();
        return (state as { items: CartItem[] }).items.reduce((total, item) => {
          const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage",
      skipHydration: true,
    }
  )
);
