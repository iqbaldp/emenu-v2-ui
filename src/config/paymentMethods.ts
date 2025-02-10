interface PaymentMethod {
  id: string;
  name: string;
  type: "ewallet" | "bank";
  icon: string;
}

export const paymentMethods: PaymentMethod[] = [
  { id: "ovo", name: "OVO", type: "ewallet", icon: "💳" },
  { id: "gopay", name: "GoPay", type: "ewallet", icon: "💳" },
  { id: "dana", name: "Dana", type: "ewallet", icon: "💳" },
  { id: "mandiri", name: "Mandiri", type: "bank", icon: "🏦" },
  { id: "bca", name: "BCA", type: "bank", icon: "🏦" },
];

export type { PaymentMethod };