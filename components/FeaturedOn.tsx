import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function FeaturedOn() {
  const { featuredOn } = siteContent;

  return (
    <section className="sec alt fo" aria-labelledby="featured-on-heading">
      <div className="w">
        <div className="hd" style={{ marginBottom: '28px' }}>
          <h2 id="featured-on-heading">{featuredOn.heading}</h2>
        </div>

        <div className="logos">
          {featuredOn.publications.map((pub, idx) => (
            <div key={idx}>
              <Image
                src={pub.image}
                alt={pub.alt}
                width={140}
                height={50}
                loading="lazy"
                style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
