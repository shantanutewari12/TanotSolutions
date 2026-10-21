import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function CaseStudy() {
  const { caseStudy } = siteContent;

  return (
    <section className="sec alt" id="results" aria-labelledby="case-study-heading">
      <div className="w cs">
        <div>
          <h2 id="case-study-heading">{caseStudy.heading}</h2>
          <p>{caseStudy.description}</p>

          <div className="kp">
            {caseStudy.kpis.map((kpi, idx) => (
              <div className="card" key={idx}>
                <b>{kpi.value}</b>
                <span>{kpi.label}</span>
              </div>
            ))}
          </div>

          <div className="ctas">
            <a
              className="btn"
              href={caseStudy.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseStudy.primaryCta.label}
            </a>
            <a
              className="btn w2"
              href={caseStudy.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {caseStudy.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="card" style={{ display: 'grid', placeItems: 'center' }}>
          <Image
            src={caseStudy.image.src}
            alt={caseStudy.image.alt}
            width={caseStudy.image.width}
            height={caseStudy.image.height}
            loading="lazy"
            style={{ borderRadius: '10px', height: 'auto', maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
