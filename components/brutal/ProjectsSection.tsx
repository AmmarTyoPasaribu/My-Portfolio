'use client';

import { ArrowUpRight, Play } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { useState } from 'react';
import { useLocalized, useT } from '@/lib/i18n/LanguageProvider';
import { projectCategories, projects as projectData } from '@/lib/site/data';
import type { TranslationKey } from '@/lib/i18n/dictionaries';

const CAT_TONE: Record<string, string> = { 'AI / ML': 'red', Web: 'blue', Tools: 'yellow', Games: 'yellow' };
const INITIAL = 6;

export default function ProjectsSection() {
  const { t } = useT();
  const projects = useLocalized(projectData);
  const [filter, setFilter] = useState<string>('All');
  const [open, setOpen] = useState(false);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const shown = open ? filtered : filtered.slice(0, INITIAL);
  const rest = filtered.length - INITIAL;

  return (
    <section className="bx-wrap bx-section" id="projects" aria-labelledby="projects-title">
      <p className="bx-eyebrow">{t('projects.eyebrow')}</p>
      <div className="bx-title-row">
        <h2 id="projects-title" className="bx-brick-text" data-text={t('projects.title')}>
          {t('projects.title')}
        </h2>
        <div className="bx-filters" role="group" aria-label={t('projects.filters')}>
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={filter === c ? 'is-active' : ''}
              aria-pressed={filter === c}
              onClick={() => { setFilter(c); setOpen(false); }}
            >
              {t(`filter.${c}` as TranslationKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="bx-grid3">
        {shown.map((p) => (
          <article key={p.id} className="bx-box bx-proj">
            <Link href={`/projects/${p.slug}`} className="bx-proj-img" aria-label={p.title}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
              <span className={`bx-tag bx-tag--${CAT_TONE[p.category] ?? 'yellow'} bx-proj-cat`}>{p.category.toUpperCase()}</span>
              {p.year && <span className="bx-tag bx-proj-year">{p.year}</span>}
            </Link>
            <div className="bx-proj-body">
              <h3>{p.title}</h3>
              <p className="bx-card-desc">{p.description}</p>
              <div className="bx-chips" style={{ marginTop: 0 }}>
                {p.technologies.slice(0, 4).map((x) => (
                  <span key={x} className="bx-tag">{x}</span>
                ))}
                {p.technologies.length > 4 && <span className="bx-tag bx-tag--yellow">+{p.technologies.length - 4}</span>}
              </div>
              <div className="bx-proj-foot">
                <Link href={`/projects/${p.slug}`} className="case">
                  <span>{t('projects.case')}</span> <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <div className="bx-proj-icons">
                  {p.links.github && (
                    <a className="bx-chip-link bx-chip-link--github" href={p.links.github} target="_blank" rel="noreferrer" aria-label={`${p.title}: ${t('projects.github')}`} title={t('projects.github')}>
                      <SiGithub size={14} aria-hidden="true" /> {t('projects.codeShort')}
                    </a>
                  )}
                  {p.links.demo && p.demoStatus === 'live' && (
                    <a className="bx-chip-link bx-chip-link--demo" href={p.links.demo} target="_blank" rel="noreferrer" aria-label={`${p.title}: ${t('projects.live')}`} title={t('projects.live')}>
                      <Play size={13} fill="currentColor" aria-hidden="true" /> {t('projects.demoShort')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && <div className="bx-empty">{t('projects.empty')}</div>}

      {rest > 0 && (
        <div className="bx-more">
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? `↑ ${t('card.showLess')}` : `↓ ${t('card.viewAll')} ${t('nav.projects').toUpperCase()} (${rest} ${t('card.more')})`}
          </button>
        </div>
      )}
    </section>
  );
}
