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
  }, [products]);

  useEffect(() => {
    if (!mounted) return;

    setAnimatingProducts(
      visibleProducts
        .filter((p) => p.category !== activeCategory)
        .map((p) => p.id)
    );

    const timeoutId = setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === activeCategory
      );
      setVisibleProducts(filteredProducts);
      setAnimatingProducts([]);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [activeCategory, products, mounted, visibleProducts]);

  if (!mounted) return null;

  return (
    <div className="products-grid">
      {visibleProducts.map((product, index) => (
        <div
          key={`${product.id}-${index}`}
          className={`product-card ${
            animatingProducts.includes(product.id) ? "fade-out" : ""
          }`}
          data-category={product.category}
          onClick={() => {
            setSelectedProduct(product);
            setIsModalOpen(true);
          }}
          style={{
            opacity: 0,
            transform: "translateY(30px) scale(0.95)",
            animation: `fadeSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
              index * 0.08
            }s forwards`,
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
