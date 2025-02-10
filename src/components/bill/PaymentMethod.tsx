"use client";

import { motion } from "framer-motion";

export default function PaymentMethod() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Metode Pembayaran</h2>
      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
        <span className="text-2xl mr-3">💳</span>
        <div>
          <p className="font-medium text-gray-800">OVO</p>
          <p className="text-sm text-gray-500">Pembayaran via e-wallet</p>
        </div>
      </div>
    </motion.div>
  );
}
