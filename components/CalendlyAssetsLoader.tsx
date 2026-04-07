'use client';

import { useEffect } from 'react';
import { ensureCalendlyAssets } from '@/lib/calendly-loader';

/**
 * Defers Calendly payload until user intent or schedule section approaches viewport.
 */
export function CalendlyAssetsLoader() {
  useEffect(() => {
    let loaded = false;
    const loadOnce = () => {
      if (loaded) return;
      loaded = true;
      void ensureCalendlyAssets();
      observer?.disconnect();
    };

    const scheduleSection = document.getElementById('schedule');
    const observer =
      scheduleSection && 'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                loadOnce();
              }
            },
            { rootMargin: '200px 0px' },
          )
        : null;

    if (observer && scheduleSection) {
      observer.observe(scheduleSection);
    }

    const onFirstIntent = () => loadOnce();
    window.addEventListener('pointerdown', onFirstIntent, { once: true, passive: true });
    window.addEventListener('keydown', onFirstIntent, { once: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener('pointerdown', onFirstIntent);
      window.removeEventListener('keydown', onFirstIntent);
    };
  }, []);

  return null;
}
