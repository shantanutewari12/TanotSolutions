'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteContent } from '@/data/content';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { header } = siteContent;

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className="w">
        <a className="lg" href="#top" aria-label="Tanot Solutions - Back to top">
          <Image
            src={header.logo.src}
            alt={header.logo.alt}
            width={header.logo.width}
            height={header.logo.height}
            priority
          />
        </a>

        <nav
          id="nv"
          aria-label="Main"
          className={isNavOpen ? 'o' : ''}
        >
          {header.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn"
          href={header.cta.href}
          style={{ minHeight: '44px', padding: '0 20px' }}
        >
          {header.cta.label}
        </a>

        <button
          id="mb"
          type="button"
          aria-label={isNavOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          {isNavOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
