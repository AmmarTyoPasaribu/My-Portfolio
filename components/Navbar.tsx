'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/content';
import { useT } from '@/lib/i18n/LanguageProvider';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { lang, toggle } = useT();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(el.id);
        }
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-10 py-4 transition-all duration-300 max-md:px-5 ${
        scrolled ? 'border-b border-border bg-bg/90 py-3 backdrop-blur-xl' : 'bg-bg/40 backdrop-blur-sm'
      }`}
    >
      <a href="#" className="font-mono text-[1.1rem] text-text-muted">
        &lt;<span className="font-semibold text-accent">Portfolio</span> /&gt;
      </a>

      <button
        className="z-[1001] hidden w-7 flex-col gap-[5px] max-md:flex"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`h-[2.5px] w-full rounded bg-text-primary transition-all ${open ? 'translate-y-[7.5px] rotate-45' : ''}`}
        />
        <span className={`h-[2.5px] w-full rounded bg-text-primary transition-all ${open ? 'opacity-0' : ''}`} />
        <span
          className={`h-[2.5px] w-full rounded bg-text-primary transition-all ${open ? '-translate-y-[7.5px] -rotate-45' : ''}`}
        />
      </button>

      <ul
        className={`flex gap-2 max-md:fixed max-md:top-0 max-md:h-screen max-md:w-3/4 max-md:max-w-[320px] max-md:flex-col max-md:items-start max-md:gap-1 max-md:border-l max-md:border-border max-md:bg-[#0a0a0a]/97 max-md:px-9 max-md:pb-10 max-md:pt-24 max-md:backdrop-blur-2xl max-md:transition-all max-md:duration-300 ${
          open ? 'max-md:right-0' : 'max-md:-right-full'
        }`}
      >
        {navLinks.map((l) => (
          <li key={l.href} className="max-md:w-full">
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-full px-[18px] py-2 text-sm font-medium transition-all max-md:w-full max-md:text-lg ${
                active === l.href.slice(1)
                  ? 'bg-bg-glass text-text-primary'
                  : 'text-text-secondary hover:bg-bg-glass hover:text-text-primary'
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[0.82rem] font-bold tracking-wider text-text-secondary transition-all hover:border-accent hover:text-accent"
        onClick={toggle}
        aria-label="Toggle language"
      >
        {lang === 'en' ? 'ID' : 'EN'}
      </button>
    </nav>
  );
}
