export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: string;
  category: string;
  mustTry: boolean;
}

export interface ProductGridProps {
  products: Product[];
  activeCategory: string;
}

export interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}
