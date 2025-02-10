import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface OrderItem extends Product {
  quantity: number;
}

interface OrderStore {
  items: OrderItem[];
  total: number;
  serviceCharge: number;
  tax: number;
  grandTotal: number;
  paymentMethod?: string;
  setOrder: (
    items: OrderItem[],
    total: number,
    serviceCharge: number,
    tax: number,
    grandTotal: number,
  ) => void;
  setPaymentMethod: (method: string) => void;
  clearOrder: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      serviceCharge: 0,
      tax: 0,
      grandTotal: 0,
      paymentMethod: undefined,

      setOrder: (items, total, serviceCharge, tax, grandTotal) =>
        set({
          items,
          total,
          serviceCharge,
          tax,
          grandTotal,
        }),

      setPaymentMethod: (method) =>
        set({
          paymentMethod: method,
        }),

      clearOrder: () =>
        set({
          items: [],
          total: 0,
          serviceCharge: 0,
          tax: 0,
          grandTotal: 0,
          paymentMethod: undefined,
        }),
    }),
    {
      name: "order-storage",
      skipHydration: true,
    },
  ),
);
