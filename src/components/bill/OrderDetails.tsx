"use client";

import { motion } from "framer-motion"; 
import { CartItem } from "@/types/product";

interface OrderDetailsProps {
  items: CartItem[];
}

export default function OrderDetails({ items }: OrderDetailsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Detail Pesanan</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.quantity}x @ {item.price}</p>
            </div>
            <span className="font-medium text-gray-800">
              {(parseFloat(item.price.replace('Rp. ', '')) * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}