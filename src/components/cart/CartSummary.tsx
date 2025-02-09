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
          className="w-full bg-[#ff6b35] text-white py-4 rounded-xl font-semibold
            hover:bg-[#ff8255] transition-colors duration-200 shadow-lg
            active:transform active:scale-[0.98] transform duration-200"
        >
          Bayar
        </button>
      </div>
    </div>
  );
}