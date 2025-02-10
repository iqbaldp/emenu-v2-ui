import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface CartItemProps extends Product {
  quantity: number;
  onQuantityChange: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}

export default function CartItem({
  id,
  title,
  price,
  image,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white pb-3 overflow-hidden"
    >
      <div className="flex gap-1 pt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="flex items-center gap-1 mt-1">
            <button
              onClick={() => onQuantityChange(id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
            >
              -
            </button>
            <span className="font-semibold text-gray-800 min-w-[24px] text-center text-sm">
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-medium text-gray-800 text-l mb-1">{title}</h3>
              <div className="text-gray-500 text-sm">{price}</div>
            </div>
            <button
              onClick={() => onRemove(id)}
              className="text-gray-400 hover:text-red-500 p-1 -mt-1 -mr-1"
            >
              ×
            </button>
          </div>
          <div className="text-[#ff6b35] font-bold text-l mt-1">
            Rp.{" "}
            {(parseFloat(price.replace(/[^0-9.-]+/g, "")) * quantity).toFixed(
              2,
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
