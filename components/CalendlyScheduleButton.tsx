'use client';

import type { ReactNode } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly';
import { ensureCalendlyAssets } from '@/lib/calendly-loader';

type CalendlyScheduleButtonProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * Opens Calendly popup (same event as inline/badge). Requires widget.js in layout.
 */
export function CalendlyScheduleButton({
  className,
  children = 'Schedule time with me',
}: CalendlyScheduleButtonProps) {
  return (
    <a
      href="#schedule"
      className={className}
      onClick={async (e) => {
        e.preventDefault();
        if (typeof window === 'undefined') return;

        if (!window.Calendly?.initPopupWidget) {
          try {
            await ensureCalendlyAssets();
          } catch {
            window.location.href = `${CALENDLY_EVENT_URL}`;
            return;
          }
        }

        if (window.Calendly?.initPopupWidget) {
          window.Calendly.initPopupWidget({ url: CALENDLY_EVENT_URL });
        } else {
          window.location.href = `${CALENDLY_EVENT_URL}`;
        }
      }}
    >
      {children}
    </a>
  );
}
