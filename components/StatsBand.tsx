'use client';

import { useEffect, useRef, useState } from 'react';
import { siteContent } from '@/data/content';

interface CounterState {
  [key: string]: number;
}

export default function StatsBand() {
  const { stats } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<CounterState>({
    'Clients Served': 0,
    'Client Satisfaction': 0,
    'Years of SEO Experience': 0,
  });

  const targets: Record<string, { target: number; suffix: string }> = {
    'Clients Served': { target: 150, suffix: '+' },
    'Client Satisfaction': { target: 98, suffix: '%' },
    'Years of SEO Experience': { target: 11, suffix: '+' },
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              'Clients Served': Math.round(easeOut * 150),
              'Client Satisfaction': Math.round(easeOut * 98),
              'Years of SEO Experience': Math.round(easeOut * 11),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const iconSymbols: Record<string, string> = {
    TrendingUp: '↗',
    Star: '★',
    Check: '✓',
    RefreshCw: '↻',
  };

  return (
    <section ref={sectionRef} className="stats" aria-label="Key Performance Statistics">
      <div className="w">
        {stats.map((stat) => {
          const cfg = targets[stat.label];
          const displayValue = hasAnimated && cfg
            ? `${counts[stat.label]}${cfg.suffix}`
            : stat.value;

          return (
            <div key={stat.label}>
              <i aria-hidden="true">{iconSymbols[stat.icon] || '✓'}</i>
              <b>{displayValue}</b>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
