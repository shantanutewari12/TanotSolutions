import { siteContent } from '@/data/content';

export default function CTABand() {
  const { ctaBand } = siteContent;

  return (
    <section className="sec cta" aria-labelledby="cta-band-heading">
      <div className="cta-circle" aria-hidden="true" />
      <div className="w">
        <h2 id="cta-band-heading">{ctaBand.heading}</h2>
        <div className="ctas" style={{ justifyContent: 'center' }}>
          <a className="btn cta-btn-white" href={ctaBand.primaryCta.href}>
            {ctaBand.primaryCta.label}
          </a>
          <a
            className="btn cta-btn-outline"
            href={ctaBand.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaBand.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
