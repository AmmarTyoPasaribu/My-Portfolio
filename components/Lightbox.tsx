'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxContextValue {
  open: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

/**
 * Single reusable lightbox modal, mounted once in the root layout.
 * Replaces the site's two previously-duplicated implementations
 * (homepage #certLightbox vs. each detail page's inline #lightbox).
 */
export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);

  const open = useCallback((src: string, alt: string) => setImage({ src, alt }), []);
  const close = useCallback(() => setImage(null), []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = image ? 'hidden' : '';
  }, [image]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div
          className="fixed inset-0 z-[2000] flex cursor-zoom-out items-center justify-center bg-black/92 p-10"
          onClick={close}
        >
          <button
            className="absolute top-5 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}
