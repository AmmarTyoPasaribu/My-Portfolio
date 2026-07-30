'use client';

import type { Project } from '@/lib/projects';
import type { TranslationKey } from '@/lib/i18n/dictionaries';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { TechBadge } from './TechBadge';

export function DetailHero({ project }: { project: Project }) {
  const { t } = useT();
  return (
    <section className="relative z-[1] pb-5 pt-24">
      <div className="mx-auto max-w-[900px] px-6">
        <h1 className="mb-4 text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em] text-text-primary">
          {project.title} {project.emoji}
        </h1>
        <Trans
          k={`${project.i18nPrefix}.desc` as TranslationKey}
          as="p"
          className="mb-6 max-w-[750px] text-base leading-[1.8] text-text-secondary"
        />
        <div className="mb-6 flex flex-wrap gap-2">
          {project.techBadges.map((tech) => (
            <TechBadge key={tech.label} {...tech} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 max-md:flex-col max-md:items-stretch">
          {project.demoStatus === 'live' ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener"
              className="rounded-sm border border-accent/35 px-7 py-2.5 text-center text-[0.88rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
            >
              {t('btn.demo')}
            </a>
          ) : (
            <span
              title={t('maint.desc')}
              className="rounded-sm border border-dashed border-text-muted/40 px-7 py-2.5 text-center font-mono text-[0.78rem] uppercase tracking-wide text-text-muted"
            >
              🚧 {t('maint.title')}
            </span>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener"
            className="rounded-sm border border-accent/35 px-7 py-2.5 text-center text-[0.88rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
          >
            {t('btn.source')}
          </a>
        </div>
        <div className="mt-4 h-px w-full bg-border" />
      </div>
    </section>
  );
}
