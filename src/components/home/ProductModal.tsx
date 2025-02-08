"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductModalProps } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";

export default function ProductModal({
  product,
  isOpen,
  onClose,
}: ProductModalProps) {
  const addItem = useCartStore((state: any) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product) {
      addItem(product);
      onClose();
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-50"
            style={{ height: "70vh" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-6 h-full overflow-auto">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg"
                />
                {product.mustTry && (
                  <div className="must-try-badge">Wajib Coba</div>
                )}
              </div>

              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex justify-between items-center mt-auto">
                <div className="text-[#ff6b35] font-bold text-xl">
                  {product.price}
                </div>
                <button
                  className="bg-[#ff6b35] text-white px-6 py-2 rounded-lg font-semibold
                    hover:bg-[#ff8255] transition-colors duration-200"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>

              <button
                className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center
                  bg-white rounded-full shadow-md"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
