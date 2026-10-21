'use client';

import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function TrustedBrands() {
  const { trustedBrands } = siteContent;
  // Duplicate for seamless infinite loop
  const marqueeLogos = [...trustedBrands.logos, ...trustedBrands.logos];

  return (
    <section className="sec brands-sec" aria-labelledby="brands-heading">
      <div className="w">
        <div className="hd">
          <h2 id="brands-heading">{trustedBrands.heading}</h2>
        </div>
      </div>

      <div className="marquee-wrapper" aria-label="Brands carousel">
        <div className="marquee-track">
          {marqueeLogos.map((logo, index) => (
            <div className="marquee-tile" key={index}>
              <Image
                src={logo.src}
                alt={logo.alt || `Client brand logo ${(index % trustedBrands.logos.length) + 1}`}
                width={120}
                height={48}
                loading="lazy"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w">
        <p className="c" style={{ marginTop: '24px' }}>
          {trustedBrands.note}
        </p>
      </div>
    </section>
  );
}
