"use client";

import Navigation from "@/components/Navigation";
import Header from "@/components/home/Header";
import { useCartStore } from "@/store/useCartStore";
import PaymentStatusBanner from "@/components/bill/PaymentStatusBanner";
import OrderDetails from "@/components/bill/OrderDetails";
import PaymentSummary from "@/components/bill/PaymentSummary";
import PaymentMethod from "@/components/bill/PaymentMethod";

export default function BillPage() {
  const { items, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();
  const serviceCharge = subtotal * 0.1;
  const tax = subtotal * 0.11;
  const total = subtotal + serviceCharge + tax;

  return (
    <>
      <div className="min-h-screen">
        <div className="container min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 p-2 max-w-2xl mx-auto w-full overflow-y-auto">
            <PaymentStatusBanner />
            <OrderDetails items={items} />
            <PaymentSummary
              subtotal={subtotal}
              serviceCharge={serviceCharge}
              tax={tax}
              total={total}
            />
            <PaymentMethod />
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
