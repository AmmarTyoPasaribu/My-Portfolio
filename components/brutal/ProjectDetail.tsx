'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import ImageGallery from '../site/about/ImageGallery.jsx';
import { useLocalized, useT } from '@/lib/i18n/LanguageProvider';
import { projects, type Project } from '@/lib/site/data';

export default function ProjectDetail({ project: source }: { project: Project }) {
  const { t } = useT();
  const project = useLocalized(source);
  const index = projects.findIndex((p) => p.id === source.id);
  const num = String(index + 1).padStart(2, '0');

  return (
    <main id="main-content" className="bx-wrap bx-detail">
      <Link href="/#projects" className="bx-back">
        <ArrowLeft size={16} aria-hidden="true" /> {t('detail.back')}
      </Link>

      <header className="bx-detail-head">
        <span className="bx-eyebrow">
          {t('detail.label')} / {num} · {project.category.toUpperCase()}
          {project.year ? ` · ${project.year}` : ''}
        </span>
        <h1 className="bx-big">{project.title}</h1>
        {project.role && <p className="bx-detail-role">{project.role}</p>}
      </header>

      <div className="bx-detail-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={`${project.title} cover`} />
      </div>

      <div className="bx-detail-body">
        <div className="bx-detail-main">
          <div>
            <span className="bx-label">{t('detail.overview')}</span>
            <p>{project.overview}</p>
          </div>
          {project.problem && (
            <div>
              <span className="bx-label">{t('detail.problem')}</span>
              <p>{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <span className="bx-label">{t('detail.solution')}</span>
              <p>{project.solution}</p>
            </div>
          )}
          {project.features.length > 0 && (
            <div>
              <span className="bx-label">{t('detail.features')}</span>
              <ul className="bx-features">
                {project.features.map((feature, i) => {
                  const [head, ...rest] = feature.split(' — ');
                  return (
                    <li key={i}>
                      {rest.length ? (
                        <>
                          <strong>{head}</strong> — {rest.join(' — ')}
                        </>
                      ) : (
                        feature
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {project.images.length > 0 && (
            <div>
              <span className="bx-label">{t('detail.gallery')}</span>
              <ImageGallery images={project.images} />
            </div>
          )}
        </div>

        <aside className="bx-aside">
          <div className="bx-box">
            <span className="bx-label" style={{ marginBottom: 0 }}>{t('detail.tech')}</span>
            <div className="bx-chips" style={{ marginTop: 0 }}>
              {project.technologies.map((x) => (
                <span key={x} className="bx-tag">{x}</span>
              ))}
            </div>
            {project.demoStatus === 'maintenance' && (
              <div className="bx-badge">
                <strong>{t('detail.maint.title')}</strong>
                {t('detail.maint.desc')}
              </div>
            )}
            {project.links.demo && project.demoStatus === 'live' && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="bx-btn">
                {t('detail.live')} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="bx-btn bx-btn--ghost">
                <Github size={16} aria-hidden="true" /> {t('detail.repo')}
              </a>
            )}
          </div>
        </aside>
      </div>

      <div className="bx-detail-foot">
        <Link href="/#projects" className="bx-btn bx-btn--ghost">{t('detail.all')}</Link>
      </div>
    </main>
  );
}
