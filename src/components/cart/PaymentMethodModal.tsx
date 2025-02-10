import { motion } from "framer-motion";
import { useState } from "react";
import { paymentMethods } from "@/config/paymentMethods";

interface PaymentMethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (paymentId: string) => void;
}

export default function PaymentMethodModal({
  isOpen,
  onClose,
  onConfirm,
}: PaymentMethodModalProps) {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentSelect = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };

  const handlePaymentConfirm = () => {
    if (selectedPayment) {
      onConfirm(selectedPayment);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-lg bg-white rounded-t-[24px] z-50"
        style={{ height: "65vh", maxHeight: "700px" }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="p-6 h-full overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Pilih Metode Pembayaran
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                E-Wallet
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods
                  .filter((method) => method.type === "ewallet")
                  .map((method) => (
                    <button
                      key={method.id}
                      onClick={() => handlePaymentSelect(method.id)}
                      className={`flex items-center p-4 rounded-lg border ${selectedPayment === method.id ? "border-[#ff6b35] bg-orange-50" : "border-gray-200"} transition-all duration-200`}
                    >
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-medium text-gray-800">
                        {method.name}
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">
                Transfer Bank
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods
                  .filter((method) => method.type === "bank")
                  .map((method) => (
                    <button
                      key={method.id}
                      onClick={() => handlePaymentSelect(method.id)}
                      className={`flex items-center p-4 rounded-lg border ${selectedPayment === method.id ? "border-[#ff6b35] bg-orange-50" : "border-gray-200"} transition-all duration-200`}
                    >
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <span className="font-medium text-gray-800">
                        {method.name}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <button
            onClick={handlePaymentConfirm}
            disabled={!selectedPayment}
            className={`w-full mt-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${selectedPayment ? "bg-[#ff6b35] hover:bg-[#ff8255] shadow-lg" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Konfirmasi Pembayaran
          </button>
        </div>
      </motion.div>
    </>
  );
}
