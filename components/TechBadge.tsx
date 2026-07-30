import type { TechKind } from '@/lib/projects';

const kindClasses: Record<TechKind, string> = {
  front: 'bg-tech-front/12 text-tech-front border-tech-front/20',
  back: 'bg-tech-back/12 text-tech-back border-tech-back/20',
  db: 'bg-tech-db/12 text-tech-db border-tech-db/20',
  ai: 'bg-tech-ai/12 text-tech-ai border-tech-ai/20',
  other: 'bg-tech-other/10 text-tech-other border-tech-other/15',
};

export function TechBadge({ label, kind }: { label: string; kind: TechKind }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-[0.72rem] font-semibold tracking-[0.02em] ${kindClasses[kind]}`}>
      {label}
    </span>
  );
}
