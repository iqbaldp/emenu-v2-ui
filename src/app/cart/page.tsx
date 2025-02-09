"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { merchantConfig } from "@/config/merchant";
import Navigation from "@/components/Navigation";
import Header from "@/components/home/Header";

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const calculatePrices = () => {
    const subtotal = getTotalPrice();
    const serviceCharge = subtotal * 0.1; // 10% service charge
    const tax = subtotal * 0.11; // 11% tax
    const total = subtotal + serviceCharge + tax;

    return {
      subtotal,
      serviceCharge,
      tax,
      total,
    };
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container">
          <Header />
          <div className="flex flex-col items-center justify-center flex-1 p-4 mt-20">
            <div className="text-2xl font-bold text-gray-400 mb-4">
              Your cart is empty
            </div>
            <p className="text-gray-500">
              Add some delicious items to get started!
            </p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  const prices = calculatePrices();

  return (
    <div className="min-h-screen bg-gray-50 pb-[100px]">
      <div className="container">
        <Header />

        <div className="max-w-3xl mx-auto px-2">
          <div className="flex justify-between items-center mb-4 mt-2">
            <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
            <button
              onClick={clearCart}
              className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors duration-200"
            >
              Clear Cart
            </button>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-gray-100"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white border-b border-gray-100 overflow-hidden mb-3 pb-3"
              >
                <div className="flex gap-1 pt-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="font-semibold text-gray-800 min-w-[24px] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-medium text-gray-800 text-l mb-1">
                          {item.title}
                        </h3>
                        <div className="text-gray-500 text-sm">{item.price}</div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 -mt-1 -mr-1"
                      >
                        ×
                      </button>
                    </div>
                    <div className="text-[#ff6b35] font-bold text-l mt-1">
                      ${(parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)] p-6 z-20">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-between items-center text-gray-600 text-sm">
            <span>Subtotal</span>
            <span className="font-medium">${prices.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-sm">
            <span>Service Charge (10%)</span>
            <span className="font-medium">${prices.serviceCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-gray-600 text-sm">
            <span>Tax (11%)</span>
            <span className="font-medium">${prices.tax.toFixed(2)}</span>
          </div>
          <div className="h-px bg-gray-200 my-3"></div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-800 font-semibold">Total Amount</span>
            <span className="text-2xl font-bold text-[#ff6b35]">
              ${prices.total.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full bg-[#ff6b35] text-white py-4 rounded-xl font-semibold
              hover:bg-[#ff8255] transition-colors duration-200 shadow-lg
              active:transform active:scale-[0.98] transform duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div className="pb-24"></div>
    </div>
  );
}
