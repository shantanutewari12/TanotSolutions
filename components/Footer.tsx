import { siteContent } from '@/data/content';

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer aria-label="Site Footer">
      <div className="w">
        <div>
          <h3>{footer.about.title}</h3>
          <p>{footer.about.description}</p>
          <a href={`mailto:${footer.about.email}`}>{footer.about.email}</a>
        </div>

        <div>
          <h3>Company</h3>
          {footer.companyLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3>Services</h3>
          {footer.servicesLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3>Resources</h3>
          {footer.resourcesLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="cp">
          <span>{footer.copyright}</span>
          <span>
            {footer.legalLinks.map((link, idx) => (
              <span key={link.label}>
                <a
                  style={{ display: 'inline' }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
                {idx < footer.legalLinks.length - 1 && ' · '}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
