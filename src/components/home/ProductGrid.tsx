"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";
import { Product, ProductGridProps } from "@/types/product";

export default function ProductGrid({
  products,
  activeCategory,
}: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [animatingProducts, setAnimatingProducts] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setVisibleProducts(products);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateVisibility = () => {
      setAnimatingProducts(
        visibleProducts
          .filter((p) => p.category !== activeCategory)
          .map((p) => p.id)
      );

      setTimeout(() => {
        const filteredProducts = products.filter(
          (product) => product.category === activeCategory
        );
        setVisibleProducts(filteredProducts);
        setAnimatingProducts([]);
      }, 300);
    };

    updateVisibility();
  }, [activeCategory, products, mounted, visibleProducts]);

  if (!mounted) return null;

  return (
    <div className="products-grid">
      {visibleProducts.map((product, index) => (
        <div
          key={`${product.id}-${index}`}
          className={`product-card ${
            animatingProducts.includes(product.id) ? "hidden" : ""
          }`}
          data-category={product.category}
          onClick={() => {
            setSelectedProduct(product);
            setIsModalOpen(true);
          }}
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.95)",
            animation: `fadeSlideIn 0.5s ease-out ${index * 0.1}s forwards`,
          }}
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
            {product.mustTry && (
              <div className="must-try-badge">Wajib Coba</div>
            )}
            <div className="product-price">{product.price}</div>
          </div>
        </div>
      ))}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
