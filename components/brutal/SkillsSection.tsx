'use client';

import { useState } from 'react';
import { useT } from '@/lib/i18n/LanguageProvider';
import { skillCategories, skillTiles } from '@/lib/site/skillTiles';
import type { TranslationKey } from '@/lib/i18n/dictionaries';

const INITIAL = 8;

export default function SkillsSection() {
  const { t } = useT();
  const [cat, setCat] = useState<(typeof skillCategories)[number]>('All');
  const [open, setOpen] = useState(false);

  const filtered = cat === 'All' ? skillTiles : skillTiles.filter((s) => s.category === cat);
  const shown = open ? filtered : filtered.slice(0, INITIAL);
  const rest = filtered.length - INITIAL;

  return (
    <section className="bx-wrap bx-section" id="skills" aria-labelledby="skills-title">
      <p className="bx-eyebrow">{t('skills.eyebrow')}</p>
      <div className="bx-title-row">
        <h2 id="skills-title" className="bx-brick-text" data-text={t('skills.title')}>
          {t('skills.title')}
        </h2>
        <div className="bx-filters" role="group" aria-label={t('skills.filters')}>
          {skillCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={cat === c ? 'is-active' : ''}
              aria-pressed={cat === c}
              onClick={() => { setCat(c); setOpen(false); }}
            >
              {t(`skillcat.${c}` as TranslationKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="bx-skills">
        {shown.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.name} className="bx-skill">
              <span className="bx-skill-ico" style={{ color: s.color }}><Icon aria-hidden="true" /></span>
              <div>
                <h3>{s.name}</h3>
                <span className="bx-tag bx-tag--yellow">{s.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {rest > 0 && (
        <div className="bx-more">
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? `↑ ${t('card.showLess')}` : `↓ ${t('card.viewAll')} ${t('card.skills')} (${rest} ${t('card.more')})`}
          </button>
        </div>
      )}
    </section>
  );
}
