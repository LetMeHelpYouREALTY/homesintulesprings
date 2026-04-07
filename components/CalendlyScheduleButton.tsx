'use client';

import type { ReactNode } from 'react';
import { CALENDLY_EVENT_URL } from '@/lib/calendly';

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
      onClick={(e) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
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
