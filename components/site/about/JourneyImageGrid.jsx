'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { createPortal } from 'react-dom';
import TiltedCard from '../reactbits/TiltedCard/TiltedCard';
import { useT } from '@/lib/i18n/LanguageProvider';

// ─── Lightbox (portal-based) ──────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const { t } = useT();
  const [idx, setIdx] = useState(startIndex);
  const total = images.length;

  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);

  // Arrow key navigation
  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') onClose();
  };

  return createPortal(
    <motion.div
      className="jig-lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label={t('gallery.photo')}
      // biome-ignore lint: auto-focus needed for keyboard nav
      ref={(el) => el?.focus()}
    >
      <motion.div
        className="jig-lightbox-inner"
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className="jig-lightbox-close" onClick={onClose} aria-label={t('gallery.close')}>
          <X size={18} />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx].src || images[idx]}
            alt={images[idx].caption || `Image ${idx + 1}`}
            className="jig-lightbox-img"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22 }}
          />
        </AnimatePresence>

        {/* Caption */}
        {(images[idx].caption) && (
          <p className="jig-lightbox-caption">{images[idx].caption}</p>
        )}

        {/* Navigation */}
        {total > 1 && (
          <>
            <button className="jig-lightbox-nav jig-lightbox-nav--prev" onClick={prev} aria-label={t('gallery.prev')}>
              <ChevronLeft size={22} />
            </button>
            <button className="jig-lightbox-nav jig-lightbox-nav--next" onClick={next} aria-label={t('gallery.next')}>
              <ChevronRight size={22} />
            </button>
            <span className="jig-lightbox-counter">{idx + 1} / {total}</span>
          </>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
}

// ─── Normalize images array ───────────────────────────────────────────────────
// Supports both string URLs and { src, caption } objects
function normalize(images) {
  return images.map((img) =>
    typeof img === 'string' ? { src: img, caption: '' } : img
  );
}

// ─── JourneyImageGrid ─────────────────────────────────────────────────────────
export default function JourneyImageGrid({ images }) {
  const { t } = useT();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  if (!images?.length) return null;

  const items = normalize(images);

  return (
    <div className="jig-root">
      <div
        className={`jig-grid jig-grid--${Math.min(items.length, 3)}`}
        role="list"
        aria-label={t('gallery.photo')}
      >
        {items.map((img, i) => (
          <motion.div
            key={i}
            className="jig-item"
            role="listitem"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.38, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltedCard
              imageSrc={img.src}
              altText={img.caption || `Gallery image ${i + 1}`}
              captionText={img.caption}
              containerClassName="jig-tilted"
            >
              {/* Zoom hint overlay */}
              <button
                className="jig-zoom-btn"
                onClick={() => setLightboxIdx(i)}
                aria-label={`${t('gallery.zoom')}: ${img.caption || i + 1}`}
              >
                <ZoomIn size={16} />
              </button>
            </TiltedCard>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            key="lightbox"
            images={items}
            startIndex={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
