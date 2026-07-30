'use client';

import { projects } from '@/lib/projects';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';

export function ProjectsGrid() {
  const { t } = useT();
  return (
    <section id="projects" className="relative z-[1] bg-bg-secondary py-24 max-md:py-[70px]">
      <Container wide>
        <Reveal className="mb-3 text-center">
          <Trans
            k="proj.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>
        <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
          {t('proj.sub')}
        </Reveal>

        <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
