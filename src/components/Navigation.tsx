"use client";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();
  const items = useCartStore((state: any) => state.items);
  const totalItems = items.reduce(
    (total: number, item: any) => total + item.quantity,
    0
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-2 z-50 shadow-lg">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-6">
        <Link
          href="/"
          className={`nav-item ${pathname === "/" ? "active" : ""}`}
        >
          🍽️ Menu
        </Link>
        <Link
          href="/cart"
          className={`nav-item relative ${
            pathname === "/cart" ? "active" : ""
          }`}
          style={{ position: "relative" }}
        >
          🛒 Cart
          <AnimatePresence>
            {items.length > 0 && (
              <motion.span
                className="cart-badge"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                  },
                }}
                exit={{ scale: 0.5, opacity: 0 }}
                key={totalItems}
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link
          href="/bill"
          className={`nav-item relative ${
            pathname === "/bill" ? "active" : ""
          }`}
        >
          💳 Bill
        </Link>
      </div>
    </div>
  );
}
