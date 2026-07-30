'use client';

import { useEffect, useState } from 'react';
import { IconChevronUp } from '@/lib/icons';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[#0a0a0a] transition-all duration-300 max-md:bottom-5 max-md:right-5 max-md:h-[42px] max-md:w-[42px] ${
        visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
      }`}
    >
      <IconChevronUp className="h-[22px] w-[22px]" />
    </button>
  );
}
