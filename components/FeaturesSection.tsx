'use client';

import type { Project } from '@/lib/projects';
import type { TranslationKey } from '@/lib/i18n/dictionaries';
import { Trans } from '@/lib/i18n/Trans';

export function FeaturesSection({ project }: { project: Project }) {
  const featureKeys = Array.from(
    { length: project.featureCount },
    (_, i) => `${project.i18nPrefix}.f${i + 1}` as TranslationKey
  );

  return (
    <section className="relative z-[1] pt-12">
      <div className="mx-auto max-w-[900px] px-6">
        <Trans
          k="detail.features"
          as="h2"
          className="mb-5 text-[1.35rem] font-bold [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
        />
        <div className="grid grid-cols-2 gap-2.5 max-md:grid-cols-1">
          {featureKeys.map((key) => (
            <div
              key={key}
              className="flex items-start gap-3 rounded-md border border-border bg-bg-card p-5 text-[0.88rem] leading-[1.6] text-text-secondary transition-colors hover:border-border-glow hover:bg-bg-card-hover"
            >
              <span className="mt-1 flex-shrink-0 text-[0.7rem] text-accent">✦</span>
              <Trans k={key} as="div" className="[&_strong]:text-text-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
