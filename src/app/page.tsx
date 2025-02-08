'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import DiscountBanner from '@/components/home/DiscountBanner';
import CategorySection from '@/components/home/CategorySection';
import ProductGrid from '@/components/home/ProductGrid';
import Navigation from '@/components/Navigation';
import { categories, products } from '@/data/mockData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('makanan');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => 
      activeCategory === 'all' || product.category === activeCategory
    );
    setFilteredProducts(filtered);
  }, [activeCategory]);

  return (
    <>
      <SplashScreen />

      <div className="container">
        <Header />
        <SearchBar />
        <DiscountBanner />
        <CategorySection 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProductGrid 
          products={filteredProducts}
          activeCategory={activeCategory}
        />
      </div>
      <Navigation />
    </>
  );
}
