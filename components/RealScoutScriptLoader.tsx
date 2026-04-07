'use client';

import { useEffect } from 'react';

const REALSCOUT_SCRIPT_ID = 'realscout-web-components-script';
const REALSCOUT_SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';

let realScoutPromise: Promise<void> | null = null;

function ensureRealScoutScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if ((window as Window & { customElements?: CustomElementRegistry }).customElements?.get('realscout-office-listings')) {
    return Promise.resolve();
  }
  if (realScoutPromise) return realScoutPromise;

  realScoutPromise = new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(REALSCOUT_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('RealScout script failed to load')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = REALSCOUT_SCRIPT_ID;
    script.src = REALSCOUT_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('RealScout script failed to load'));
    document.body.appendChild(script);
  });

  return realScoutPromise;
}

export function RealScoutScriptLoader() {
  useEffect(() => {
    const widgets = Array.from(document.querySelectorAll('.realscout-widget-container'));
    if (widgets.length === 0) return;

    let loaded = false;
    const loadOnce = () => {
      if (loaded) return;
      loaded = true;
      void ensureRealScoutScript();
      observer?.disconnect();
    };

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  loadOnce();
                  break;
                }
              }
            },
            { rootMargin: '300px 0px' },
          )
        : null;

    if (observer) {
      widgets.forEach((el) => observer.observe(el));
    } else {
      loadOnce();
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
