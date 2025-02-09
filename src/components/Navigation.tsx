"use client";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const items = useCartStore((state: any) => state.items);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-2 z-50 shadow-lg">
      <div className="max-w-3xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>🍽️ Menu</Link>
        <Link href="/cart" className={`nav-item relative ${pathname === '/cart' ? 'active' : ''}`} style={{ position: 'relative' }}>
          🛒 Cart
          {items.length > 0 && (
            <span className="cart-badge">
              {items.reduce((total: number, item: any) => total + item.quantity, 0)}
            </span>
          )}
        </Link>
        <Link href="/bill" className="nav-item">💳 Bill</Link>
      </div>
    </div>
  );
}