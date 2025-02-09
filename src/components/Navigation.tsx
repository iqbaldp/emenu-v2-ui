"use client";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  const items = useCartStore((state: any) => state.items);

  return (
    <div className="navigation">
      <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>🍽️ Menu</Link>
      <Link href="/cart" className={`nav-item relative ${pathname === '/cart' ? 'active' : ''}`}>
        🛒 Cart
        {items.length > 0 && (
          <span className="absolute -top-0 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {items.reduce((total: number, item: any) => total + item.quantity, 0)}
          </span>
        )}
      </Link>
      <div className="nav-item">💳 Bill</div>
    </div>
  );
}