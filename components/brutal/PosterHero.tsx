'use client';

import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useT } from '@/lib/i18n/LanguageProvider';
import { personal } from '@/lib/site/data';
import BtnStuds from './BtnStuds';

/**
 * Poster-style intro: giant brick-textured "PORTFOLIO" lettering behind a cut-out portrait, with the
 * name, role, short pitch and key numbers around it. Scroll progress drives a light parallax
 * through CSS variables (no re-render).
 */
export default function PosterHero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, el.offsetHeight)));
      el.style.setProperty('--p', p.toFixed(4));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
    };
  }, []);

  const [first, second, ...rest] = personal.name.split(' ');

  return (
    <section ref={ref} className="bx-poster" id="home" aria-label={personal.name}>
      <div className="bx-poster-word" aria-hidden="true">PORTFOLIO</div>
      <i className="bx-poster-brick bx-poster-brick--1" aria-hidden="true" />
      <i className="bx-poster-brick bx-poster-brick--2" aria-hidden="true" />
      <i className="bx-poster-brick bx-poster-brick--3" aria-hidden="true" />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bx-poster-photo" src="/media/profile/ammar-cutout.webp" alt={t('hero.portrait')} width={659} height={1800} fetchPriority="high" />

      <div className="bx-poster-left">
        <p className="bx-poster-hello">{t('poster.hello')}</p>
        <h1 id="hero-title" className="bx-poster-name bx-big">
          {first} {second}<br />{rest.join(' ')}
        </h1>
        <p className="bx-poster-role">{t('poster.role')}</p>
        <span className="bx-poster-avail">
          <i /> {t('poster.avail')}
        </span>
      </div>

      <div className="bx-poster-right">
        <div className="bx-poster-tag">
          <BtnStuds />
          {t('poster.tagline')}
        </div>
        <ul className="bx-poster-stats">
          <li><b>3.93</b><span>{t('poster.s1')}</span></li>
          <li><b>12</b><span>{t('poster.s2')}</span></li>
          <li><b>22</b><span>{t('poster.s3')}</span></li>
        </ul>
      </div>

      <a className="bx-poster-scroll" href="#intro">
        <span>{t('hero.scroll')}</span>
        <ArrowDown size={16} strokeWidth={3} aria-hidden="true" />
      </a>
    </section>
  );
}
