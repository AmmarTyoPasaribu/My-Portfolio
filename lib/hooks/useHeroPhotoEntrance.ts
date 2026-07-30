'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useHeroPhotoEntrance<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || prefersReduced) return;
      gsap.from(ref.current, {
        opacity: 0,
        scale: 0.94,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3,
      });
    },
    { dependencies: [prefersReduced], scope: ref }
  );

  return ref;
}
