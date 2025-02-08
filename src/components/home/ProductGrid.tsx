'use client';

import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  price: string;
  category: string;
  mustTry: boolean;
}

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
}

export default function ProductGrid({ products, activeCategory }: ProductGridProps) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div 
          key={product.id} 
          className={`product-card ${activeCategory !== 'all' && product.category !== activeCategory ? 'hidden' : ''}`}
          data-category={product.category}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="product-image"
          />
          <div className="product-info">
            <div className="product-title">{product.title}</div>
            {product.mustTry && <div className="must-try-badge">Wajib Coba</div>}
            <div className="product-price">{product.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}