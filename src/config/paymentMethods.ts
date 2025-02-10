interface PaymentMethod {
  id: string;
  name: string;
  type: "ewallet" | "bank";
  icon: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "ovo",
    name: "OVO",
    type: "ewallet",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg",
  },
  {
    id: "gopay",
    name: "GoPay",
    type: "ewallet",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg",
  },
  {
    id: "dana",
    name: "Dana",
    type: "ewallet",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg",
  },
  {
    id: "shopeepay",
    name: "ShopeePay",
    type: "ewallet",
    icon: "https://i.pinimg.com/736x/a6/cb/e6/a6cbe6a3c5e9b03ef09ebfc0969323d2.jpg",
  },
  {
    id: "mandiri",
    name: "Mandiri",
    type: "bank",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg",
  },
  {
    id: "bca",
    name: "BCA",
    type: "bank",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg",
  },
];

export type { PaymentMethod };
