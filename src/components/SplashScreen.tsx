'use client';

import { useEffect, useState } from 'react';
import { merchantConfig } from '@/config/merchant';

let hasShownSplashScreen = false;

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(!hasShownSplashScreen);
  const [isMounted, setIsMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!hasShownSplashScreen) {
      hasShownSplashScreen = true;
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
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