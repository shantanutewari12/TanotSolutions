'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    document.documentElement.classList.add('js-loaded');

    const elements = document.querySelectorAll<HTMLElement>(
      '.hd, .card, .fd, details, .stats .w > div'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((el, index) => {
      el.classList.add('reveal-item');
      // Stagger up to 4 items in a row
      const delay = (index % 4) * 75;
      el.style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
