'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Splits the element's text into per-character spans and animates them in,
 * WITHOUT flattening nested elements (e.g. the <em>Pasaribu</em> accent word).
 * Ported from effects.js's splitChars()/splitInto() DOM-walk.
 */
export function useSplitTextReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReduced) return;

      function splitInto(node: ChildNode, container: HTMLElement) {
        if (node.nodeType === Node.TEXT_NODE) {
          (node.textContent ?? '').split('').forEach((ch) => {
            const span = document.createElement('span');
            span.textContent = ch;
            span.style.display = 'inline-block';
            container.appendChild(span);
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const wrapper = (node as HTMLElement).cloneNode(false) as HTMLElement;
          container.appendChild(wrapper);
          Array.from(node.childNodes).forEach((child) => splitInto(child, wrapper));
        }
      }

      const originalChildren = Array.from(el.childNodes);
      el.textContent = '';
      originalChildren.forEach((node) => splitInto(node, el));

      const chars = el.querySelectorAll('span');
      gsap.from(chars, {
        opacity: 0,
        y: 24,
        rotateX: -40,
        duration: 0.6,
        stagger: 0.015,
        ease: 'expo.out',
        delay: 0.15,
      });
    },
    { dependencies: [prefersReduced], scope: ref }
  );

  return ref;
}
