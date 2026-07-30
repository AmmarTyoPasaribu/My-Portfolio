'use client';

import { useEffect, useState } from 'react';

/** Plain JS type/delete state machine — ports script.js's typeEffect() 1:1, not GSAP-driven. */
export function useTypewriter(words: string[]): string {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = words[titleIndex];
      let typeSpeed = 80;

      if (isDeleting) {
        setDisplay(current.substring(0, charIndex - 1));
        charIndex--;
        typeSpeed = 40;
      } else {
        setDisplay(current.substring(0, charIndex + 1));
        charIndex++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % words.length;
        typeSpeed = 400;
      }

      timeoutId = setTimeout(tick, typeSpeed);
    }

    tick();
    return () => clearTimeout(timeoutId);
  }, [words]);

  return display;
}
