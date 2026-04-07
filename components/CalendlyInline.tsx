'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_INLINE_URL } from '@/lib/calendly';

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
    let interval: ReturnType<typeof setInterval> | undefined;

    const mount = () => {
      if (cancelled || !parent) return false;
      if (!window.Calendly?.initInlineWidget) return false;
      parent.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_INLINE_URL,
        parentElement: parent,
      });
      return true;
    };

    if (mount()) return () => { cancelled = true; };

    interval = setInterval(() => {
      if (mount() && interval) {
        clearInterval(interval);
        interval = undefined;
      }
    }, 100);

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
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
