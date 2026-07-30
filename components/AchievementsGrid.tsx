'use client';

import { achievements, type AchievementItem } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { useTiltCard } from '@/lib/hooks/useTiltCard';
import { Container } from './Container';
import { Reveal } from './Reveal';

export function AchievementsGrid() {
  const { t } = useT();
  return (
    <section id="achievements" className="relative z-[1] bg-bg-secondary py-24 max-md:py-[70px]">
      <Container>
        <Reveal className="mb-3 text-center">
          <Trans
            k="ach.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>
        <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
          {t('ach.sub')}
        </Reveal>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {achievements.map((a, i) => (
            <Reveal key={i}>
              <AchievementCard item={a} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AchievementCard({ item }: { item: AchievementItem }) {
  const ref = useTiltCard<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="relative flex gap-5 overflow-hidden rounded-lg border border-border bg-bg-card p-8 transition-colors hover:border-amber-500/30 hover:bg-bg-card-hover max-md:flex-col max-md:text-center"
    >
      <div className="flex-shrink-0 text-[2.2rem] leading-none">{item.icon}</div>
      <div>
        <h3 className="mb-1.5 font-heading text-[1.1rem] font-semibold">{item.title}</h3>
        <span className="mb-2.5 inline-block rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-0.5 text-[0.75rem] font-semibold text-amber-500">
          {item.year}
        </span>
        <p className="text-[0.88rem] leading-[1.6] text-text-secondary">
          {/* achievement descriptions are plain text, no HTML */}
          <Desc k={item.descKey} />
        </p>
      </div>
    </div>
  );
}

function Desc({ k }: { k: AchievementItem['descKey'] }) {
  const { t } = useT();
  return <>{t(k)}</>;
}
