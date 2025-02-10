import { motion } from "framer-motion";
import { useState } from "react";
import { paymentMethods } from "@/config/paymentMethods";
import Image from "next/image";

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
        style={{ height: "auto", maxHeight: "80vh", marginBottom: "50px" }}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Metode Pembayaran
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
                        className={`flex items-center justify-center p-4 rounded-lg border ${selectedPayment === method.id ? "border-[#ff6b35] bg-orange-50" : "border-gray-200"} transition-all duration-200 w-full h-16`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={method.icon}
                            alt={method.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
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
                        className={`flex items-center justify-center p-4 rounded-lg border ${selectedPayment === method.id ? "border-[#ff6b35] bg-orange-50" : "border-gray-200"} transition-all duration-200 w-full h-16`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={method.icon}
                            alt={method.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 p-6 pb-8 bg-white border-t border-gray-100">
            <button
              onClick={handlePaymentConfirm}
              disabled={!selectedPayment}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${selectedPayment ? "bg-[#ff6b35] hover:bg-[#ff8255] shadow-lg" : "bg-gray-300 cursor-not-allowed"}`}
            >
              Konfirmasi Pembayaran
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
