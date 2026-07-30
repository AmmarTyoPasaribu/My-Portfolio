'use client';

import { aboutTags } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { AboutPhotoCard } from './AboutPhotoCard';
import { AboutStats } from './AboutStats';

export function About() {
  return (
    <section id="about" className="relative z-[1] bg-bg-secondary py-24 max-md:py-[70px]">
      <Container>
        <Reveal className="mb-14 text-center">
          <Trans
            k="about.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>

        <div className="grid grid-cols-[minmax(0,300px)_1fr] items-start gap-16 max-md:grid-cols-1 max-md:justify-items-center max-md:gap-10">
          <Reveal className="w-full">
            <AboutPhotoCard />
          </Reveal>

          <Reveal delay={0.1}>
            <AboutText />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function AboutText() {
  const { t } = useT();
  return (
    <div className="max-md:text-center">
      <Trans k="about.p1" as="p" className="mb-7 text-[1.05rem] leading-[1.85] text-text-secondary" />

      <AboutStats />

      <div className="mt-8">
        <h4 className="mb-4 font-mono text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-text-muted">
          {t('about.skill')}
        </h4>
        <div className="flex flex-wrap gap-2.5 max-md:justify-center">
          {aboutTags.map((tag, i) => (
            <Reveal key={tag} delay={i * 0.05}>
              <span className="group flex items-center gap-2 rounded-md border border-border bg-bg-card px-4 py-2 text-[0.75rem] font-medium text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-text-primary hover:shadow-[0_8px_20px_rgba(255,70,32,0.15)]">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50 transition-colors group-hover:bg-accent" />
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
