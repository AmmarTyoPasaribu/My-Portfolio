'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { useCanHover } from './useCanHover';

/**
 * Subtle 3D tilt + lift on hover. Owns the element's `transform` inline style
 * while active — do NOT pair this with a competing `hover:-translate-y-*`
 * Tailwind class on the same element, or the CSS hover lift will be silently
 * overridden by GSAP's inline transform (a regression already hit once in the
 * original vanilla build). The lift is animated here instead.
 */
export function useTiltCard<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const canHover = useCanHover();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReduced || !canHover) return;

      gsap.set(el, { transformPerspective: 800 });

      const rotateXTo = gsap.quickTo(el, 'rotateX', { duration: 0.4, ease: 'power2.out' });
      const rotateYTo = gsap.quickTo(el, 'rotateY', { duration: 0.4, ease: 'power2.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power2.out' });

      function onMouseMove(e: MouseEvent) {
        const r = el!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rotateYTo(px * 6);
        rotateXTo(py * -6);
        yTo(-6);
      }
      function onMouseLeave() {
        rotateXTo(0);
        rotateYTo(0);
        yTo(0);
      }

      el.addEventListener('mousemove', onMouseMove);
      el.addEventListener('mouseleave', onMouseLeave);
      return () => {
        el.removeEventListener('mousemove', onMouseMove);
        el.removeEventListener('mouseleave', onMouseLeave);
      };
    },
    { dependencies: [prefersReduced, canHover], scope: ref }
  );

  return ref;
}
