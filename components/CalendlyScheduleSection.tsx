import { CalendlyInline } from '@/components/CalendlyInline';

/**
 * Full-width inline scheduler — included on every page (before footer).
 */
export function CalendlyScheduleSection() {
  return (
    <section id="schedule" className="calendly-site-section py-5" aria-labelledby="calendly-site-heading">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 id="calendly-site-heading" className="h3">
            Schedule a private 15-minute conversation
          </h2>
          <p className="text-muted mb-0">
            Pick a time that works for you — no contact form required.
          </p>
        </div>
        <CalendlyInline />
      </div>
    </section>
  );
}
