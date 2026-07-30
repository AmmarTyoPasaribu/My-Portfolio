'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useHeroParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || prefersReduced) return;
      // Use the element itself as the trigger (not a '.hero-section' string
      // selector) — GSAP's scoped selector lookup only searches the scope's
      // descendants, and the hero section is an ancestor of this ref, not a
      // descendant, so the string form silently failed to resolve.
      const section = ref.current.closest('section') ?? ref.current;
      gsap.to(ref.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    },
    { dependencies: [prefersReduced], scope: ref }
  );

  return ref;
}
