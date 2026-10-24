'use client';

import { ArrowRight, Brain, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useLocalized, useT } from '@/lib/i18n/LanguageProvider';
import { personal } from '@/lib/site/data';
import BtnStuds from './BtnStuds';
import ToyCar from './ToyCar';

const MARQUEE = ['CODE', 'PRAY', 'BUILD', 'DEPLOY', 'LEARN', 'SHIP'];

type Side = 'top' | 'bottom' | 'left' | 'right';
const SIDE: Record<Side, { tone: string; cls: string }> = {
  top: { tone: 'y', cls: 'bx-row bx-row--top' },
  bottom: { tone: 'r', cls: 'bx-row bx-row--bottom' },
  left: { tone: 'b', cls: 'bx-col bx-col--left' },
  right: { tone: 'g', cls: 'bx-col bx-col--right' },
};

function StudRow({ side }: { side: Side }) {
  const { tone, cls } = SIDE[side];
  return (
    <div className={cls} aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className={`bx-stud bx-stud--${tone}`} />
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useT();
  const me = useLocalized(personal);

  return (
    <section className="bx-wrap bx-hero-sec" id="intro" aria-label={personal.name}>
      <div className="bx-hero">
        <div className="bx-hero-left reveal reveal-left">
          <div className="bx-status"><i /> {t('hero.status')}</div>
          <div className="bx-box bx-intro">
            <p>{me.description}</p>
            <div className="bx-chips">
              {(['hero.chip1', 'hero.chip2', 'hero.chip3', 'hero.chip4'] as const).map((k) => (
                <span key={k} className="bx-chip">{t(k)}</span>
              ))}
            </div>
          </div>
          <div className="bx-hero-cta">
            <Link className="bx-btn" href="/#projects" style={{ position: 'relative' }}>
              <BtnStuds />
              {t('hero.cta')} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="bx-hero-right reveal reveal-right" style={{ transitionDelay: '150ms' }}>
          <div className="bx-float">
            <div className="bx-frame">
              <StudRow side="top" />
              <StudRow side="bottom" />
              <StudRow side="left" />
              <StudRow side="right" />
              <div className="bx-frame-in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/profile/portrait.jpg" alt={t('hero.portrait')} width={1388} height={1851} />
                <span className="bx-corner bx-corner--tl" />
                <span className="bx-corner bx-corner--tr" />
                <span className="bx-corner bx-corner--bl" />
                <span className="bx-corner bx-corner--br" />
              </div>
            </div>
            <ToyCar />
            <div className="bx-badge-float bx-badge-float--1">
              <BtnStuds />
              <Code2 size={20} aria-hidden="true" />
              <span>{t('hero.tag1')}</span>
            </div>
            <div className="bx-badge-float bx-badge-float--2">
              <BtnStuds />
              <Brain size={20} aria-hidden="true" />
              <span>{t('hero.tag2')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="bx-marquee" aria-hidden="true">
      <div className="bx-marquee-track">
        {[0, 1].map((k) => (
          <span key={k}>
            {row.map((w, i) => (
              <span key={`${k}-${i}`}>
                {w} <b>▦</b>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
