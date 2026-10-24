'use client';
import { useEffect, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, MapPin, CircleCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { useT } from '@/lib/i18n/LanguageProvider';
import { personal } from '@/lib/site/data';

const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 28 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 16 },
};
const panelTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

function titleOf(tab, item) {
  if (tab === 'experience') return item.role;
  if (tab === 'education') return item.degree;
  if (tab === 'organizations' || tab === 'volunteer') return item.organization;
  return item.name;
}

function subtitleOf(tab, item) {
  if (tab === 'experience') return item.company;
  if (tab === 'education') return item.institution;
  if (tab === 'organizations' || tab === 'volunteer') return item.role;
  return item.issuer;
}

/** Left, dark column: photo slider (or the logo when an entry has no photos yet). */
function Slider({ item, t }) {
  const images = item.images ?? [];
  const [i, setI] = useState(0);
  const count = images.length;
  const go = useCallback((d) => setI((v) => (v + d + count) % count), [count]);

  useEffect(() => {
    if (count < 2) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, go]);

  if (!count) {
    return (
      <div className="vm-left">
        <div className="vm-top"><span className="vm-count">0 / 0</span></div>
        <div className="vm-frame vm-frame--empty">
          {item.logo ? (
             
            <img src={item.logo} alt="" className="vm-logo" />
          ) : null}
          <p>{t('modal.noPhoto')}</p>
        </div>
        <div className="vm-controls" />
      </div>
    );
  }

  const cur = images[i];
  return (
    <div className="vm-left">
      <div className="vm-top">
        <span className="vm-count">{i + 1} / {count}</span>
        <span className="vm-caption" title={cur.caption}>{cur.caption}</span>
      </div>
      <div className="vm-frame">
        { }
        <img key={cur.src} src={cur.src} alt={cur.caption} />
      </div>
      <div className="vm-controls">
        {count > 1 && (
          <>
            <button type="button" className="vm-nav" onClick={() => go(-1)} aria-label={t('modal.prev')}>
              <ArrowLeft size={13} aria-hidden="true" /> {t('modal.prev')}
            </button>
            <div className="vm-dots" role="tablist">
              {images.map((im, k) => (
                <button key={im.src} type="button" role="tab" aria-selected={k === i} aria-label={`${k + 1}`} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} />
              ))}
            </div>
            <button type="button" className="vm-nav" onClick={() => go(1)} aria-label={t('modal.next')}>
              {t('modal.next')} <ArrowRight size={13} aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/** Right, light column: date, title, organisation, summary, highlights. */
function Details({ tab, item, t }) {
  const progressRef = useRef(null);
  // progress bar along the top edge replaces the native scrollbar (written to the DOM, no re-render)
  const onScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    progressRef.current?.style.setProperty('--sp', (max > 0 ? Math.min(1, el.scrollTop / max) : 0).toFixed(4));
  };
  const highlights = item.responsibilities?.length ? item.responsibilities : item.details;
  const date = item.period ?? item.date;
  return (
    <div className="vm-rwrap">
      <div ref={progressRef} className="vm-progress" aria-hidden="true"><i /></div>
      <div className="vm-right" onScroll={onScroll}>
      <div className="vm-tags">
        {date && <span className="vm-date">{date}</span>}
        {item.type && <span className="vm-chip">{item.type}</span>}
        {item.credentialId && <span className="vm-chip">{t('modal.id')}: {item.credentialId}</span>}
      </div>
      <div>
        <h2 className="vm-title">{titleOf(tab, item)}</h2>
        <div className="vm-sub">
          <span className="vm-org">{subtitleOf(tab, item)}</span>
          {item.location && <span className="vm-loc"><MapPin size={13} aria-hidden="true" /> {item.location}</span>}
        </div>
      </div>
      {item.description && <div className="vm-desc"><p>{item.description}</p></div>}
      {highlights?.length > 0 && (
        <div className="vm-hl">
          <h4><CircleCheck size={15} aria-hidden="true" /> {t('modal.highlights')}</h4>
          <ul>{highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
      )}
      {item.technologies?.length > 0 && (
        <div className="vm-hl">
          <h4>{t('modal.technologies')}</h4>
          <div className="vm-tech">{item.technologies.map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      )}
      {item.credentialUrl && (
        <a href={item.credentialUrl} target="_blank" rel="noreferrer" className="vm-cta">
          {t('modal.credential')} <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
      </div>
    </div>
  );
}

function ModalContent({ item, tab, onClose }) {
  const { t } = useT();
  const title = titleOf(tab, item);
  return (
    <motion.div
      className="vm-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <motion.div
        className="vm-panel"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={panelTransition}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="vm-studs" aria-hidden="true"><i /><i /><i /></div>

        <header className="vm-bar">
          <div className="vm-bar-l">
            <span className="vm-lights" aria-hidden="true"><i /><i /><i /></span>
            <span className="vm-bar-title">PORTFOLIO_VIEWER // {title}</span>
          </div>
          <div className="vm-bar-r">
            <span className="vm-kicker">{t(`modal.kicker.${tab}`)}</span>
            <button type="button" className="vm-x" onClick={onClose} aria-label={t('modal.close')}>
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="vm-body">
          <Slider item={item} t={t} />
          <Details tab={tab} item={item} t={t} />
        </div>

        <footer className="vm-foot">
          <span>PORTFOLIO SHOWCASE // {personal.name.toUpperCase()}</span>
          <button type="button" className="vm-close" onClick={onClose}>{t('modal.closeBtn')}</button>
        </footer>
      </motion.div>
    </motion.div>
  );
}

// Rendered through a portal so no parent transform/stacking context can clip it.
export default function AboutModal({ item, tab, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return createPortal(
    <AnimatePresence>
      <ModalContent key="modal" item={item} tab={tab} onClose={onClose} />
    </AnimatePresence>,
    document.body
  );
}
