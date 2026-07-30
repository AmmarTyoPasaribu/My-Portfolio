'use client';

import type { TimelineItem } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Reveal } from './Reveal';

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-[700px] pl-10">
      <div className="absolute bottom-0 left-3.5 top-0 w-0.5 bg-accent/30" />
      {items.map((item, i) => (
        <Reveal key={i} className={i < items.length - 1 ? 'mb-10' : ''}>
          <TimelineRow item={item} />
        </Reveal>
      ))}
    </div>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  const { t } = useT();
  return (
    <div className="relative">
      <div className="absolute -left-[33px] top-2 z-[1] h-4 w-4 rounded-full bg-accent shadow-[0_0_12px_rgba(255,70,32,0.4)]">
        <div className="absolute inset-[3px] rounded-full bg-bg" />
      </div>
      <div className="rounded-lg border border-border bg-bg-card p-7 px-8 transition-all hover:translate-x-1.5 hover:border-border-glow hover:shadow-[0_12px_40px_rgba(255,70,32,0.1)]">
        <div className="mb-3.5 inline-block rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[0.72rem] tracking-[0.03em] text-accent">
          {item.period}
        </div>
        <h3 className="mb-1.5 font-heading text-[1.2rem] font-semibold">{item.org}</h3>
        <p className="mb-3 text-[0.9rem] font-medium text-accent">{t(item.roleKey)}</p>
        {item.descHtml ? (
          <Trans k={item.descKey} as="p" className="text-[0.9rem] leading-[1.7] text-text-secondary" />
        ) : (
          <p className="text-[0.9rem] leading-[1.7] text-text-secondary">{t(item.descKey)}</p>
        )}
      </div>
    </div>
  );
}
