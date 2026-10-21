import { siteContent } from '@/data/content';

export default function StatsBand() {
  const { stats } = siteContent;

  const iconSymbols: Record<string, string> = {
    TrendingUp: '↗',
    Star: '★',
    Check: '✓',
    RefreshCw: '↻',
  };

  return (
    <section className="stats" aria-label="Key Performance Statistics">
      <div className="w">
        {stats.map((stat) => (
          <div key={stat.label}>
            <i aria-hidden="true">{iconSymbols[stat.icon] || '✓'}</i>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
