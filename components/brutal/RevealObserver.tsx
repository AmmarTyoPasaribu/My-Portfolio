'use client';

import { useEffect } from 'react';

const TARGETS: { selector: string; variant: string }[] = [
  { selector: '.bx-heading, .bx-eyebrow, .bx-title-row', variant: 'reveal-left' },
  { selector: '.bx-box, .bx-skill, .bx-stat, .bx-proj', variant: 'reveal-pop' },
];

/** Fades and springs elements in as they scroll into view (skipped for reduced motion). */
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    const nodes: Element[] = [];
    for (const { selector, variant } of TARGETS) {
      document.querySelectorAll(`main ${selector}`).forEach((el, i) => {
        if (el.classList.contains('reveal') || el.closest('.bx-hero-sec')) return;
        el.classList.add('reveal', variant);
        (el as HTMLElement).style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
        nodes.push(el);
        observer.observe(el);
      });
    }

    // Hero pieces animate in right away.
    document.querySelectorAll('.bx-hero-sec .reveal').forEach((el) => {
      requestAnimationFrame(() => el.classList.add('reveal-visible'));
    });

    return () => {
      observer.disconnect();
      nodes.forEach((el) => {
        el.classList.remove('reveal', 'reveal-left', 'reveal-pop', 'reveal-visible');
        (el as HTMLElement).style.transitionDelay = '';
      });
    };
  }, []);

  return null;
}
