'use client';

import { educationItems } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { Timeline } from './Timeline';

export function EducationSection() {
  return (
    <section id="education" className="relative z-[1] py-24 max-md:py-[70px]">
      <Container>
        <SectionHead />
        <Timeline items={educationItems} />
      </Container>
    </section>
  );
}

function SectionHead() {
  const { t } = useT();
  return (
    <>
      <Reveal className="mb-3 text-center">
        <Trans
          k="edu.title"
          as="h2"
          className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
        />
      </Reveal>
      <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
        {t('edu.sub')}
      </Reveal>
    </>
  );
}
