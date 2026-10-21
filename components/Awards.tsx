import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Awards() {
  const { awards } = siteContent;

  return (
    <section className="sec alt" id="about" aria-labelledby="awards-heading">
      <div className="w">
        <div className="hd">
          <h2 id="awards-heading">{awards.heading}</h2>
        </div>

        <div className="g3">
          {awards.items.map((item, idx) => (
            <div className="card aw" key={idx}>
              <div className="im">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={240}
                  height={180}
                  loading="lazy"
                  style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
