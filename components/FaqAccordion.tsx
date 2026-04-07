'use client';

import { useId, useState } from 'react';

export type FaqEntry = {
  /** Short question for the button + heading */
  question: string;
  /** Answer content */
  answer: React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqEntry[];
  /** Accessible label for the group */
  'aria-labelledby'?: string;
};

/**
 * Keyboard-accessible FAQ (replaces legacy jQuery toggle for App Router pages).
 */
export function FaqAccordion({ items, 'aria-labelledby': labelledBy }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-container" role="region" aria-labelledby={labelledBy}>
      {items.map((item, i) => {
        const panelId = `${baseId}-panel-${i}`;
        const triggerId = `${baseId}-trigger-${i}`;
        const expanded = openIndex === i;
        return (
          <div key={triggerId} className={`faq-item${expanded ? ' active' : ''}`}>
            <button
              type="button"
              id={triggerId}
              className="faq-question-button faq-question"
              aria-expanded={expanded ? 'true' : 'false'}
              aria-controls={panelId}
              onClick={() => setOpenIndex(expanded ? null : i)}
            >
              <h3>{item.question}</h3>
              <i className="fas fa-chevron-down" aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="faq-answer"
              aria-hidden={expanded ? undefined : 'true'}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
