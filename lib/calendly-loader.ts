'use client';

const CALENDLY_SCRIPT_ID = 'calendly-widget-script';
const CALENDLY_CSS_ID = 'calendly-widget-css';
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';

let calendlyPromise: Promise<void> | null = null;

export function ensureCalendlyAssets(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (calendlyPromise) return calendlyPromise;

  calendlyPromise = new Promise<void>((resolve, reject) => {
    if (!document.getElementById(CALENDLY_CSS_ID)) {
      const css = document.createElement('link');
      css.id = CALENDLY_CSS_ID;
      css.rel = 'stylesheet';
      css.href = CALENDLY_CSS_HREF;
      document.head.appendChild(css);
    }

    const existing = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Calendly script failed to load')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = CALENDLY_SCRIPT_ID;
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Calendly script failed to load'));
    document.body.appendChild(script);
  });

  return calendlyPromise;
}
