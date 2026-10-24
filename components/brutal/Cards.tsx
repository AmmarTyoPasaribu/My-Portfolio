'use client';

import { ArrowRight } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import AboutModal from '../site/about/AboutModal.jsx';
import { useT } from '@/lib/i18n/LanguageProvider';
import type { TranslationKey } from '@/lib/i18n/dictionaries';
import { initials } from './social';

export type DetailTab = 'experience' | 'education' | 'organizations' | 'volunteer' | 'certifications';
export type Img = { src: string; caption: string };

/** Holds the "view details" modal state for a section. Render `modal` once inside the section. */
export function useDetail() {
  const [selected, setSelected] = useState<{ item: unknown; tab: DetailTab } | null>(null);
  return {
    open: (item: unknown, tab: DetailTab) => setSelected({ item, tab }),
    modal: selected ? <AboutModal item={selected.item} tab={selected.tab} onClose={() => setSelected(null)} /> : null,
  };
}

export function Thumbs({ images }: { images?: Img[] }) {
  if (!images?.length) return null;
  return (
    <div className="bx-thumbs">
      {images.slice(0, 3).map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={img.src} src={img.src} alt={img.caption} loading="lazy" />
      ))}
    </div>
  );
}

export function LogoBox({ logo, mark, alt }: { logo?: string; mark: string; alt: string }) {
  if (!logo) return <div className="bx-icon-box" aria-hidden="true">{initials(mark)}</div>;
  return (
    <div className="bx-icon-box bx-icon-box--logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt={alt} width={64} height={64} loading="lazy" />
    </div>
  );
}

export function ItemCard({
  mark, logo, title, sub, period, tag, desc, images, onOpen, detailsLabel,
}: {
  mark: string; logo?: string; title: string; sub: string; period: string; tag?: string; desc: string;
  images?: Img[]; onOpen: () => void; detailsLabel: string;
}) {
  return (
    <article className="bx-box bx-card">
      <div className="bx-card-top">
        <LogoBox logo={logo} mark={mark} alt={title} />
        <div className="bx-card-head">
          <div className="bx-card-row">
            {tag ? <span className="bx-tag">{tag}</span> : <span />}
            <span className="bx-tag bx-tag--yellow">{period}</span>
          </div>
          <h3 className="bx-card-title">{title}</h3>
          <p className="bx-card-sub">{sub}</p>
        </div>
      </div>
      <p className="bx-card-desc">{desc}</p>
      <Thumbs images={images} />
      <div className="bx-card-foot">
        <button type="button" className="bx-btn bx-btn--ghost bx-btn--sm bx-btn--shine" onClick={onOpen}>
          {detailsLabel} <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

/** Shows the first `initial` items and a "view all (n more)" toggle for the rest. */
export function Expandable<T>({
  items, initial, noun, className, render,
}: {
  items: T[]; initial: number; noun: TranslationKey; className: string; render: (item: T) => ReactNode;
}) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const shown = open ? items : items.slice(0, initial);
  const rest = items.length - initial;
  return (
    <>
      <div className={className}>{shown.map(render)}</div>
      {rest > 0 && (
        <div className="bx-more">
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? `↑ ${t('card.showLess')}` : `↓ ${t('card.viewAll')} ${t(noun)} (${rest} ${t('card.more')})`}
          </button>
        </div>
      )}
    </>
  );
}
