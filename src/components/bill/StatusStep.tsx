"use client";

import { motion } from "framer-motion";
import { StatusStepProps } from "@/types/payment";
import OrderStatusIcon from "./OrderStatusIcon";

export default function StatusStep({
  status,
  isActive,
  isLast,
}: StatusStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      <div className="flex items-center">
        <OrderStatusIcon icon={status.icon} isActive={isActive} />

        <div className="ml-4 flex-1">
          <h3
            className={`font-medium ${isActive ? "text-gray-900" : "text-gray-500"}`}
          >
            {status.title}
          </h3>
          <p
            className={`text-sm ${isActive ? "text-gray-600" : "text-gray-400"}`}
          >
            {status.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div
          className={`absolute left-5 top-10 w-0.5 h-8 ${isActive ? "bg-[#ff6b35]" : "bg-gray-200"}`}
          style={{ transform: "translateX(-50%)" }}
        />
      )}
    </motion.div>
  );
}
