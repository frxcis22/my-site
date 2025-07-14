'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Declare global types for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: pathname,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    };

    // Configure Google Analytics
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_title: 'Francis Bockarie Portfolio',
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 