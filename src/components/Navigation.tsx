'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="navigation">
      <div className={`nav-item ${pathname === '/' ? 'active' : ''}`}>🍽️ Menu</div>
      <div className="nav-item">🛒 Cart</div>
      <div className="nav-item">💳 Bill</div>
    </div>
  );
}