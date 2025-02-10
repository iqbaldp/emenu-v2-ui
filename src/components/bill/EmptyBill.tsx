"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EmptyBill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col items-center justify-center h-[70vh] px-6 text-center"
    >
      <Image
        src="/empty-bill.svg"
        alt="Empty Bill"
        width={200}
        height={200}
        className="mb-6 opacity-80"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Yaah, order kamu belum di submit
      </h2>
      <p className="text-gray-500 text-lg">
        Silahkan order dulu ya untuk lihat bill
      </p>
    </motion.div>
  );
}
