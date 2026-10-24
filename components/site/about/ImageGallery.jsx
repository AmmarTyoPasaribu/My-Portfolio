'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useT } from '@/lib/i18n/LanguageProvider';

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const { t } = useT();
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close" onClick={onClose} aria-label={t('gallery.close')}><X size={20} /></button>
        <img src={images[current]} alt={`Gallery image ${current + 1}`} className="lightbox-img" />
        {images.length > 1 && (
          <>
            <button className="lightbox-nav lightbox-nav--prev" onClick={prev} aria-label={t('gallery.prev')}><ChevronLeft size={22} /></button>
            <button className="lightbox-nav lightbox-nav--next" onClick={next} aria-label={t('gallery.next')}><ChevronRight size={22} /></button>
            <div className="lightbox-counter">{current + 1} / {images.length}</div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── ImageGallery ─────────────────────────────────────────────────────────────
export default function ImageGallery({ images = [] }) {
  const { t } = useT();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const trackRef = useRef(null);

  if (!images || images.length === 0) return null;

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <div className="image-gallery">
      {images.length > 1 && (
        <div className="gallery-nav">
          <button className="gallery-nav-btn" onClick={() => scrollBy(-1)} aria-label={t('gallery.prev')}><ChevronLeft size={16} /></button>
          <button className="gallery-nav-btn" onClick={() => scrollBy(1)} aria-label={t('gallery.next')}><ChevronRight size={16} /></button>
        </div>
      )}
      <div className="gallery-track" ref={trackRef}>
        {images.map((src, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setLightboxIndex(i)}
            aria-label={`${t('gallery.zoom')}: ${i + 1}`}
          >
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
            <span className="gallery-zoom"><ZoomIn size={16} /></span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
