"use client";

import { motion } from "framer-motion";

interface OrderStatusIconProps {
  icon: React.ReactNode;
  isActive: boolean;
}

export default function OrderStatusIcon({
  icon,
  isActive,
}: OrderStatusIconProps) {
  return (
    <motion.div
      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isActive ? "bg-[#ff6b35]" : "bg-gray-200"}`}
      initial={false}
      animate={{
        scale: isActive ? [1, 1.2, 1] : 1,
        transition: { duration: 0.3 },
      }}
    >
      <div className={isActive ? "text-white" : "text-gray-400"}>{icon}</div>
    </motion.div>
  );
}
