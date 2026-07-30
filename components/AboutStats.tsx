import { projects } from '@/lib/projects';
import { certGroups } from '@/lib/content';
import CountUp from './CountUp';

const totalCerts = certGroups.reduce((sum, g) => sum + g.items.length, 0);

const stats = [
  { to: 3.93, label: 'GPA / 4.00' },
  { to: projects.length, label: 'Projects Built' },
  { to: totalCerts, label: 'Certifications' },
  { to: 4, label: 'Years Learning', suffix: '+' },
];

export function AboutStats() {
  return (
    <div className="mb-8 flex flex-wrap items-stretch gap-x-8 gap-y-4 border-y border-border py-5 max-md:justify-center">
      {stats.map((s, i) => (
        <div key={s.label} className={`flex items-baseline gap-2 ${i > 0 ? 'border-l border-border pl-8 max-md:border-l-0 max-md:pl-0' : ''}`}>
          <span className="font-mono text-2xl font-semibold text-accent">
            <CountUp to={s.to} duration={1.6} />
            {s.suffix ?? ''}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-wide text-text-muted">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
