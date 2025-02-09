'use client';

import { useEffect, useState } from 'react';
import { merchantConfig } from '@/config/merchant';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasShownSplash, setHasShownSplash] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasShown = localStorage.getItem('hasShownSplash');
    
    if (hasShown) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('hasShownSplash', 'true');
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;
  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-logo">{merchantConfig.logo}</div>
      <div className="splash-title">{merchantConfig.name}</div>
      <div className="spinner"></div>
    </div>
  );
}