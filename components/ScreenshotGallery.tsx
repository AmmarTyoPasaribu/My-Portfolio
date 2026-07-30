'use client';

import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { Trans } from '@/lib/i18n/Trans';
import { useLightbox } from './Lightbox';

export function ScreenshotGallery({ project }: { project: Project }) {
  const { open } = useLightbox();

  return (
    <section className="relative z-[1] pt-12">
      <div className="mx-auto max-w-[1100px] px-6">
        <Trans
          k="detail.screenshots"
          as="h2"
          className="mb-5 text-[1.35rem] font-bold [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
        />
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {project.screenshots.map((file, i) => {
            const src = `/assets/screenshots/${project.slug}/${file}`;
            return (
              <button
                key={file}
                type="button"
                onClick={() => open(src, `${project.title} — Screenshot ${i + 1}`)}
                className="relative aspect-video cursor-zoom-in overflow-hidden rounded-md border border-border transition-all hover:border-border-glow"
              >
                <Image src={src} alt={`${project.title} — Screenshot ${i + 1}`} fill className="object-cover object-top" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
