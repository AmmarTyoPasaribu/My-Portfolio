'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import BtnStuds from './BtnStuds';
import { useT } from '@/lib/i18n/LanguageProvider';
import { useTheme } from '@/lib/theme/ThemeProvider';
import { personal } from '@/lib/site/data';
import type { TranslationKey } from '@/lib/i18n/dictionaries';

const links: { key: TranslationKey; id: string }[] = [
  { key: 'nav.home', id: 'home' },
  { key: 'nav.about', id: 'about' },
  { key: 'nav.experience', id: 'experience' },
  { key: 'nav.projects', id: 'projects' },
  { key: 'nav.contact', id: 'contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [active, setActive] = useState('home');
  const barRef = useRef<HTMLDivElement>(null);

  // Scroll progress: replaces the native scrollbar. Written straight to the DOM, no re-render per scroll.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      barRef.current?.style.setProperty('--sp', p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Scroll-spy: the section nearest the top third of the viewport is "active".
  useEffect(() => {
    if (!onHome) return;
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  const current = onHome ? active : pathname.startsWith('/projects') ? 'projects' : '';
  const nextIsLight = theme === 'dark';

  return (
    <header className="bx-nav">
      <a className="bx-skip" href="#main-content">{t('nav.skip')}</a>
      <div className="bx-wrap bx-nav-in">
        <Link href="/" className="bx-logo" aria-label="Ammar Tyo Pasaribu">
          AMMAR<small>.DEV</small>
        </Link>
        <nav className="bx-links" aria-label={t('nav.aria')}>
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.id === 'home' ? '/' : `/#${l.id}`}
              className={current === l.id ? 'is-active' : ''}
              aria-current={current === l.id ? 'page' : undefined}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <div className="bx-nav-right">
          <div className="bx-lang" role="group" aria-label={t('controls.language')}>
            {(['en', 'id'] as const).map((code) => (
              <button key={code} type="button" className={lang === code ? 'is-active' : ''} aria-pressed={lang === code} onClick={() => setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="bx-theme"
            onClick={toggle}
            aria-label={nextIsLight ? t('controls.toLight') : t('controls.toDark')}
            title={nextIsLight ? t('controls.toLight') : t('controls.toDark')}
          >
            {nextIsLight ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <a className="bx-btn bx-cv-btn" href={personal.cv} download style={{ position: 'relative' }}>
            <BtnStuds />
            <Download size={16} aria-hidden="true" /> {t('nav.cv').toUpperCase()}
          </a>
        </div>
      </div>
      <div ref={barRef} className="bx-progress" role="presentation" aria-hidden="true">
        <i />
      </div>
    </header>
  );
}
