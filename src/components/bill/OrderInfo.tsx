"use client";

import { motion } from "framer-motion";

export default function OrderInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm p-4 mb-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Nomor Pesanan</h2>
          <p className="text-[#ff6b35] font-medium mt-1">#ORD-2023112501</p>
        </div>
        <div className="bg-orange-50 p-2 rounded-lg">
          <svg
            className="w-6 h-6 text-[#ff6b35]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
