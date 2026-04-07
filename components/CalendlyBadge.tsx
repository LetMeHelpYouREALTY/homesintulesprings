'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly';
import { ensureCalendlyAssets } from '@/lib/calendly-loader';

/** Floating Calendly badge — mount once in root layout. */
export function CalendlyBadge() {
  const didInit = useRef(false);

  useEffect(() => {
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

    const start = async () => {
      try {
        await ensureCalendlyAssets();
      } catch {
        return;
      }
      init();
    };

    const onIntent = () => void start();
    window.addEventListener('pointerdown', onIntent, { once: true, passive: true });
    window.addEventListener('keydown', onIntent, { once: true });
    window.addEventListener('scroll', onIntent, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', onIntent);
      window.removeEventListener('keydown', onIntent);
      window.removeEventListener('scroll', onIntent);
    };
  }, []);

  return null;
}
