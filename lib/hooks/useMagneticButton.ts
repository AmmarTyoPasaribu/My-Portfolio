'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { useCanHover } from './useCanHover';

export function useMagneticButton<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  const canHover = useCanHover();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReduced || !canHover) return;

      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'elastic.out(1,0.4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'elastic.out(1,0.4)' });

      function onMouseMove(e: MouseEvent) {
        const r = el!.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.3);
      }
      function onMouseLeave() {
        xTo(0);
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
