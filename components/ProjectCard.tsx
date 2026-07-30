'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { useT } from '@/lib/i18n/LanguageProvider';
import { useTiltCard } from '@/lib/hooks/useTiltCard';
import { useLightbox } from './Lightbox';
import { TechBadge } from './TechBadge';
import SpotlightCard from './SpotlightCard';

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useT();
  const ref = useTiltCard<HTMLDivElement>();
  const { open } = useLightbox();
  const mainImg = `/assets/screenshots/${project.slug}/${project.screenshots[0]}`;

  return (
    <SpotlightCard
      ref={ref}
      spotlightColor="rgba(255, 70, 32, 0.25)"
      className="flex flex-col rounded-lg border border-border bg-bg-card transition-[border-color,box-shadow] hover:border-border-glow hover:shadow-[0_20px_60px_rgba(255,70,32,0.12)]"
    >
      <button
        type="button"
        onClick={() => open(mainImg, project.title)}
        className="group relative aspect-video cursor-zoom-in overflow-hidden"
      >
        <Image
          src={mainImg}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </button>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <h3 className="mb-2 font-heading text-[1.1rem] font-semibold">
          {project.title} {project.emoji}
        </h3>
        <p className="mb-3.5 flex-1 text-[0.85rem] leading-[1.6] text-text-secondary">{t(project.cardDescKey)}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.cardTech.map((tech) => (
            <TechBadge key={tech.label} {...tech} />
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 rounded-sm border border-accent/35 py-2 text-center text-[0.78rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
          >
            {t('btn.detail')}
          </Link>
          {project.demoStatus === 'live' ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener"
              className="flex-1 rounded-sm border border-accent/35 py-2 text-center text-[0.78rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
            >
              {t('btn.demo')}
            </a>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 rounded-sm border border-accent/35 py-2 text-center text-[0.78rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
            >
              {t('btn.demo')}
            </Link>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener"
            className="flex-1 rounded-sm border border-accent/35 py-2 text-center text-[0.78rem] font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
          >
            {t('btn.source')}
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
