'use client';

import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';

export default function Navigation() {
  const pathname = usePathname();
  const items = useCartStore((state: any) => state.items);

  return (
    <div className="navigation">
      <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>🍽️ Menu</div>
      <div className="nav-item relative">
        🛒 Cart
        {items.length > 0 && (
          <span className="absolute -top-0 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {items.reduce((total: number, item: any) => total + item.quantity, 0)}
          </span>
        )}
      </div>
      <div className="nav-item">💳 Bill</div>
    </div>
  );
}