import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function TrustedBrands() {
  const { trustedBrands } = siteContent;

  return (
    <section className="sec" aria-labelledby="brands-heading">
      <div className="w">
        <div className="hd">
          <h2 id="brands-heading">{trustedBrands.heading}</h2>
        </div>

        <div className="logos">
          {trustedBrands.logos.map((logo, index) => (
            <div key={index}>
              <Image
                src={logo.src}
                alt={logo.alt || `Client brand logo ${index + 1}`}
                width={120}
                height={48}
                loading="lazy"
                style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        <p className="c" style={{ marginTop: '20px' }}>
          {trustedBrands.note}
        </p>
      </div>
    </section>
  );
}
