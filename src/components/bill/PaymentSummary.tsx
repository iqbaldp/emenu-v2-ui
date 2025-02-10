"use client";

import { motion } from "framer-motion";

interface PaymentSummaryProps {
  subtotal: number;
  serviceCharge: number;
  tax: number;
  total: number;
}

export default function PaymentSummary({
  subtotal,
  serviceCharge,
  tax,
  total,
}: PaymentSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Ringkasan Pembayaran</h2>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Service Charge (10%)</span>
          <span>{serviceCharge.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Pajak (11%)</span>
          <span>{tax.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gray-100 my-2"></div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span className="text-[#ff6b35]">Rp. {total.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}
