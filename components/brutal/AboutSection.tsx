'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import { useMemo } from 'react';
import { useLocalized, useT } from '@/lib/i18n/LanguageProvider';
import { certifications, education, personal, projects } from '@/lib/site/data';
import { LogoBox, useDetail } from './Cards';

/** A tiny LEGO minifigure waving on a baseplate, with floating bricks and a speech bubble. */
function MinifigScene({ text }: { text: string }) {
  return (
    <div className="bx-scene" aria-hidden="true">
      <i className="bx-scene-brick bx-scene-brick--r" />
      <i className="bx-scene-brick bx-scene-brick--b" />
      <i className="bx-scene-brick bx-scene-brick--g" />
      <svg className="bx-minifig" viewBox="0 0 200 200" width="170" height="170">
        <g className="mf-body">
          {/* baseplate */}
          <rect x="8" y="170" width="184" height="22" fill="#00852b" stroke="#1a1c1c" strokeWidth="4" />
          {[22, 58, 94, 130, 166].map((x) => (
            <rect key={x} x={x - 9} y="162" width="18" height="8" rx="2" fill="#00a63a" stroke="#1a1c1c" strokeWidth="3" />
          ))}
          {/* legs */}
          <rect x="68" y="124" width="64" height="38" fill="#0055a4" stroke="#1a1c1c" strokeWidth="4" />
          <path d="M100 130v32" stroke="#1a1c1c" strokeWidth="4" />
          {/* left arm */}
          <rect x="44" y="82" width="20" height="44" rx="5" fill="#c4161f" stroke="#1a1c1c" strokeWidth="4" />
          <circle cx="54" cy="130" r="8" fill="#ffd700" stroke="#1a1c1c" strokeWidth="3.5" />
          {/* torso */}
          <rect x="62" y="78" width="76" height="50" rx="5" fill="#c4161f" stroke="#1a1c1c" strokeWidth="4" />
          <rect x="66" y="82" width="68" height="8" rx="3" fill="#e8565e" opacity=".55" />
          <text x="100" y="116" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="monospace" fill="#ffd700">{'</>'}</text>
          {/* waving arm */}
          <g className="mf-wave">
            <rect x="136" y="82" width="20" height="44" rx="5" fill="#c4161f" stroke="#1a1c1c" strokeWidth="4" />
            <circle cx="146" cy="130" r="8" fill="#ffd700" stroke="#1a1c1c" strokeWidth="3.5" />
          </g>
          {/* head */}
          <rect x="91" y="20" width="18" height="10" rx="3" fill="#ffd700" stroke="#1a1c1c" strokeWidth="3.5" />
          <rect x="74" y="28" width="52" height="48" rx="10" fill="#ffd700" stroke="#1a1c1c" strokeWidth="4" />
          <path d="M76 44c0-12 10-16 24-16s24 4 24 16c-10-6-38-6-48 0z" fill="#1a1c1c" />
          <circle cx="90" cy="54" r="3.6" fill="#1a1c1c" />
          <circle cx="110" cy="54" r="3.6" fill="#1a1c1c" />
          <path d="M88 63q12 10 24 0" fill="none" stroke="#1a1c1c" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </svg>
      <p className="bx-scene-bubble">{text}</p>
    </div>
  );
}

/** "About me": the intro card, education and the headline numbers. */
export default function AboutSection() {
  const { t } = useT();
  const me = useLocalized(personal);
  const edu = useLocalized(education);
  const detail = useDetail();

  const stats = useMemo(
    () => [
      { n: String(projects.length), l: t('stat.projects') },
      { n: '3.93', l: t('stat.gpa') },
      { n: String(certifications.length), l: t('stat.certs') },
      { n: '4+', l: t('stat.years') },
    ],
    [t],
  );

  return (
    <section className="bx-wrap bx-section" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="bx-heading">{t('about.title')}</h2>

      <div className="bx-about">
        <div className="bx-about-left">
          <div className="bx-box bx-about-card">
            <div className="bx-dots3" aria-hidden="true"><i /><i /><i /></div>
            <p className="bx-about-lead">{me.about.intro}</p>
            <p className="body">{me.about.description}</p>
            <div className="bx-about-foot">
              <div><MapPin size={15} aria-hidden="true" /> {me.about.location}</div>
            </div>
          </div>
          <MinifigScene text={t('about.hello')} />
        </div>

        <div className="bx-stack">
          <h3 className="bx-heading bx-heading--plain">{t('about.education')}</h3>
          <div className="bx-edu">
            {edu.map((e) => (
              <article key={e.id} className="bx-box bx-card">
                <div className="bx-card-top">
                  <LogoBox logo={e.logo} mark={e.institution} alt={e.institution} />
                  <div className="bx-card-head">
                    <div className="bx-card-row">
                      <h4 className="bx-card-title">{e.institution}</h4>
                      <span className="bx-tag bx-tag--yellow">{e.period}</span>
                    </div>
                    <p className="bx-card-sub">{e.degree}</p>
                  </div>
                </div>
                <p className="bx-card-desc bx-card-desc--2">{e.description}</p>
                <div className="bx-card-foot">
                  <button type="button" className="bx-btn bx-btn--ghost bx-btn--sm bx-btn--shine" onClick={() => detail.open(e, 'education')}>
                    {t('card.details')} <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="bx-stats">
            {stats.map((s) => (
              <div key={s.l} className="bx-box bx-stat">
                <b>{s.n}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {detail.modal}
    </section>
  );
}
