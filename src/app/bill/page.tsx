"use client";

import Navigation from "@/components/Navigation";
import Header from "@/components/home/Header";
import { useOrderStore } from "@/store/useOrderStore";
import PaymentStatusBanner from "@/components/bill/PaymentStatusBanner";
import OrderDetails from "@/components/bill/OrderDetails";
import PaymentSummary from "@/components/bill/PaymentSummary";
import PaymentMethod from "@/components/bill/PaymentMethod";
import EmptyBill from "@/components/bill/EmptyBill";

export default function BillPage() {
  const { items, total, serviceCharge, tax, grandTotal } = useOrderStore();

  return (
    <>
      <div className="min-h-screen pb-10">
        <div className="container min-h-screen flex flex-col">
          <Header />
          {items.length === 0 ? (
            <EmptyBill />
          ) : (
            <div className="flex-1 p-2 max-w-2xl mx-auto w-full overflow-y-auto">
              <PaymentStatusBanner />
              <OrderDetails items={items} />
              <PaymentSummary
                subtotal={total}
                serviceCharge={serviceCharge}
                tax={tax}
                total={grandTotal}
              />
              <PaymentMethod />
            </div>
          )}
        </div>
      </div>
      <Navigation />
    </>
  );
}
