import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function FounderTeam() {
  const { founder } = siteContent;

  return (
    <section className="sec" aria-labelledby="founder-heading">
      <div className="w">
        {/* Founder Block */}
        <div className="fd">
          <Image
            src={founder.image.src}
            alt={founder.image.alt}
            width={founder.image.width}
            height={founder.image.height}
            loading="lazy"
            style={{ width: '280px', height: 'auto', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '16px' }}
          />

          <div>
            <h2 id="founder-heading">{founder.heading}</h2>
            <p>{founder.bio}</p>
            <p style={{ margin: '0 0 20px' }}>
              <b style={{ color: 'var(--ink)' }}>{founder.name}</b>
              <br />
              {founder.role}
            </p>
            <div className="ctas">
              <a className="btn" href={founder.ctaPrimary.href}>
                {founder.ctaPrimary.label}
              </a>
              <a
                className="btn w2"
                style={{ borderColor: 'var(--line)' }}
                href={founder.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {founder.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>

        {/* Team Sub-band */}
        <div className="hd">
          <h2>{founder.teamHeading}</h2>
        </div>

        <div className="g4">
          {founder.team.map((member, idx) => (
            <div className="card tm" key={idx}>
              {/* TODO: Swap in real headshot photos once photographed by the Tanot Solutions team */}
              <div className="av" aria-label={`Avatar initials for ${member.name}`}>
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
