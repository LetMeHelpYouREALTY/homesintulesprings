'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

/** Floating Calendly badge — mount once in root layout. */
export function CalendlyBadge() {
  const didInit = useRef(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const init = () => {
      if (typeof window === 'undefined' || !window.Calendly?.initBadgeWidget || didInit.current) return;
      didInit.current = true;
      window.Calendly.initBadgeWidget({
        url: CALENDLY_EVENT_URL,
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: false,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    interval = setInterval(() => {
      if (window.Calendly) {
        if (interval) clearInterval(interval);
        init();
      }
    }, 50);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
}
