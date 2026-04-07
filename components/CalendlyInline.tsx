'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_INLINE_URL } from '@/lib/calendly';
import { ensureCalendlyAssets } from '@/lib/calendly-loader';

type CalendlyInlineProps = {
  className?: string;
  minHeight?: number;
};

/**
 * Inline Calendly embed. Uses initInlineWidget so the iframe mounts reliably with Next.js
 * (root layout loads widget.js once for all pages).
 */
export function CalendlyInline({ className, minHeight = 700 }: CalendlyInlineProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    let cancelled = false;
    const mount = async () => {
      try {
        await ensureCalendlyAssets();
      } catch {
        return;
      }
      if (cancelled || !parent || !window.Calendly?.initInlineWidget) return;
      parent.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_INLINE_URL,
        parentElement: parent,
      });
    };

    void mount();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={className}
      style={{ minWidth: 320, minHeight }}
    />
  );
}
