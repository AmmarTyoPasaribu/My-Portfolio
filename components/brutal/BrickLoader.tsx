'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { useT } from '@/lib/i18n/LanguageProvider';

export const LOADER_KEY = 'marLoaderSeen';
/** Set before first paint so a returning visitor in the same session never sees the loader flash. */
export const LOADER_INIT_SCRIPT = `try{if(sessionStorage.getItem('${LOADER_KEY}'))document.documentElement.classList.add('no-loader')}catch(e){}`;

// 5x5 pixel glyphs, same as the MaR favicon
const GLYPHS: Record<string, string[]> = {
  M: ['X...X', 'XX.XX', 'X.X.X', 'X...X', 'X...X'],
  A: ['.XXX.', 'X...X', 'XXXXX', 'X...X', 'X...X'],
  R: ['XXXX.', 'X...X', 'XXXX.', 'X..X.', 'X...X'],
};
const CELL = 3;
const GAP = 1;
const BODY = { x: 4, y: 21, w: 56, h: 37 };
const TEXT_W = (3 * 5 + 2 * GAP) * CELL;
const X0 = BODY.x + (BODY.w - TEXT_W) / 2;
const Y0 = BODY.y + (BODY.h - 5 * CELL) / 2 + 1;
const INK = '#1a1c1c';

const delay = (s: number): CSSProperties => ({ ['--d' as string]: `${s}s` });

function Letter({ ch, index, d }: { ch: string; index: number; d: number }) {
  const ox = X0 + index * (5 + GAP) * CELL;
  const cells: { x: number; y: number }[] = [];
  GLYPHS[ch].forEach((row, r) => [...row].forEach((c, k) => { if (c === 'X') cells.push({ x: ox + k * CELL, y: Y0 + r * CELL }); }));
  return (
    <g className="ld-p" style={delay(d)}>
      {cells.map((c) => <rect key={`s${c.x}-${c.y}`} x={c.x + 1} y={c.y + 1} width={CELL} height={CELL} fill={INK} />)}
      {cells.map((c) => <rect key={`l${c.x}-${c.y}`} x={c.x} y={c.y} width={CELL} height={CELL} fill="#ffd700" />)}
    </g>
  );
}

/** First-visit intro: bricks drop in and snap together into the MaR logo, then the screen splits open. */
export default function BrickLoader() {
  const { t } = useT();
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => finish(), reduce ? 700 : 2700);
    function finish() {
      try { sessionStorage.setItem(LOADER_KEY, '1'); } catch { /* storage unavailable: loader just shows again next time */ }
      setGone(true);
    }
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    // a returning visitor (loader hidden by CSS) must not get scroll locked
    const hidden = document.documentElement.classList.contains('no-loader');
    document.documentElement.classList.toggle('ld-lock', !gone && !hidden);
    return () => document.documentElement.classList.remove('ld-lock');
  }, [gone]);

  if (gone) return null;

  return (
    <div className="bx-loader" role="status" aria-live="polite" aria-label={t('loader.text')}>
      <div className="ld-half ld-half--l" />
      <div className="ld-half ld-half--r" />
      <div className="ld-stage">
        <svg className="ld-logo" viewBox="0 0 64 64" width="220" height="220" aria-hidden="true">
          <g className="ld-p" style={delay(0.25)}>
            <rect x={BODY.x + 3} y={BODY.y + 3} width={BODY.w} height={BODY.h} rx="4" fill={INK} />
            <rect x={BODY.x} y={BODY.y} width={BODY.w} height={BODY.h} rx="4" fill="#c4161f" stroke={INK} strokeWidth="3" />
            <rect x={BODY.x + 2} y={BODY.y + 2} width={BODY.w - 4} height="5" rx="2" fill="#e03a43" opacity=".7" />
          </g>
          <g className="ld-p" style={delay(0.65)}><rect x="11" y="12" width="15" height="11" rx="3" fill="#d92d36" stroke={INK} strokeWidth="3" /></g>
          <g className="ld-p" style={delay(0.8)}><rect x="38" y="12" width="15" height="11" rx="3" fill="#d92d36" stroke={INK} strokeWidth="3" /></g>
          <Letter ch="M" index={0} d={1.0} />
          <Letter ch="A" index={1} d={1.12} />
          <Letter ch="R" index={2} d={1.24} />
        </svg>
        <div className="ld-plate"><i /><i /><i /><i /><i /><i /></div>
        <div className="ld-bar" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => <i key={i} style={{ ['--i' as string]: i } as CSSProperties} />)}
        </div>
        <p className="ld-text"><span>{t('loader.text')}</span> <b className="ld-pct" aria-hidden="true" />%</p>
      </div>
    </div>
  );
}
