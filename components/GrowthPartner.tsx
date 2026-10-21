import { siteContent } from '@/data/content';

export default function GrowthPartner() {
  const { growthPartner } = siteContent;

  return (
    <section className="sec" aria-labelledby="growth-partner-heading">
      <div className="w">
        <div className="hd">
          <h2 id="growth-partner-heading">{growthPartner.heading}</h2>
          <p>{growthPartner.subheading}</p>
        </div>

        <div className="g3">
          {growthPartner.cards.map((card, idx) => (
            <div className="card" key={idx}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <p className="c" style={{ marginTop: '32px' }}>
          <a className="btn" href={growthPartner.cta.href}>
            {growthPartner.cta.label}
          </a>
        </p>
      </div>
    </section>
  );
}
