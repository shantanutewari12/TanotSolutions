import { siteContent } from '@/data/content';

export default function FAQ() {
  const { faq } = siteContent;

  return (
    <section className="sec" aria-labelledby="faq-heading">
      <div className="w faq">
        <div className="hd">
          <h2 id="faq-heading">{faq.heading}</h2>
          <p>{faq.subheading}</p>
        </div>

        {faq.items.map((item, idx) => (
          <details key={idx}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}

        <p className="c" style={{ marginTop: '32px' }}>
          <a className="btn" href={faq.cta.href}>
            {faq.cta.label}
          </a>
        </p>
      </div>
    </section>
  );
}
