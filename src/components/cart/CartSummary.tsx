import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import PaymentMethodModal from "./PaymentMethodModal";

interface CartSummaryProps {
  subtotal: number;
  serviceCharge: number;
  tax: number;
  total: number;
}

export default function CartSummary({
  subtotal,
  serviceCharge,
  tax,
  total,
}: CartSummaryProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePaymentConfirm = async (paymentId: string) => {
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    router.push("/bill");
  };

  return (
    <div className="bg-white mt-5">
      <div className="h-px bg-gray-100 my-4"></div>
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>Subtotal</span>
          <span className="font-medium">{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>Service Charge (10%)</span>
          <span className="font-medium">{serviceCharge.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>Pajak (11%)</span>
          <span className="font-medium">{tax.toFixed(2)}</span>
        </div>
        <div className="h-px bg-gray-100 my-4"></div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-800 font-semibold">Grand Total</span>
          <span className="text-xl font-bold text-[#ff6b35]">
            Rp. {total.toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="w-full bg-[#ff6b35] text-white py-4 rounded-xl font-semibold
            hover:bg-[#ff8255] transition-colors duration-200 shadow-lg
            active:transform active:scale-[0.98] transform duration-200"
        >
          Bayar
        </button>
      </div>

      <AnimatePresence>
        <PaymentMethodModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          onConfirm={handlePaymentConfirm}
        />
      </AnimatePresence>

      <AnimatePresence>
        {isProcessing && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="w-16 h-16 border-4 border-[#ff6b35] border-t-transparent rounded-full animate-spin mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sedang Memproses Pembayaran
              </h3>
              <p className="text-gray-600">Mohon tunggu sebentar ya...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
