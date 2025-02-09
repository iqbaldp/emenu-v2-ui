"use client";

import { useCartStore } from "@/store/useCartStore";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Header from "@/components/home/Header";
import EmptyCart from "@/components/cart/EmptyCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } =
    useCartStore();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const calculatePrices = () => {
    const subtotal = getTotalPrice();
    const serviceCharge = subtotal * 0.1;
    const tax = subtotal * 0.11;
    const total = subtotal + serviceCharge + tax;

    return {
      subtotal,
      serviceCharge,
      tax,
      total,
    };
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const prices = calculatePrices();

  return (
    <>
      <div className="container">
        <Header />

        <div className="max-w-3xl mx-auto px-2">
          <div className="flex justify-between items-center mb-4 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">Pesanan</h2>
            <button
              onClick={clearCart}
              className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-200"
            >
              Hapus Semua
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-gray-100"
          >
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={removeItem}
              />
            ))}
          </motion.div>

          <CartSummary {...prices} />
        </div>
      </div>
      <Navigation />
    </>
  );
}
