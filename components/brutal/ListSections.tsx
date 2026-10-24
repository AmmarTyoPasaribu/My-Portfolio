'use client';

import { ArrowRight } from 'lucide-react';
import { useLocalized, useT } from '@/lib/i18n/LanguageProvider';
import { certifications, experiences, organizations, volunteers } from '@/lib/site/data';
import { Expandable, ItemCard, useDetail } from './Cards';

/** Work and internship experience. */
export function ExperienceSection() {
  const { t } = useT();
  const items = useLocalized(experiences);
  const detail = useDetail();
  return (
    <section className="bx-wrap bx-section" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="bx-heading">{t('about.experience')}</h2>
      <Expandable
        items={items}
        initial={6}
        noun="card.experiences"
        className="bx-grid2"
        render={(x) => (
          <ItemCard
            key={x.id}
            mark={x.company}
            logo={x.logo}
            title={x.company}
            sub={x.role}
            period={x.period}
            tag={x.type}
            desc={x.description}
            images={x.images}
            detailsLabel={t('card.details')}
            onOpen={() => detail.open(x, 'experience')}
          />
        )}
      />
      {detail.modal}
    </section>
  );
}

/** Student organizations, leadership roles and scholarships. */
export function OrganizationsSection() {
  const { t } = useT();
  const items = useLocalized(organizations);
  const detail = useDetail();
  return (
    <section className="bx-wrap bx-section" id="organizations" aria-labelledby="organizations-title">
      <h2 id="organizations-title" className="bx-heading">{t('about.organizations')}</h2>
      <Expandable
        items={items}
        initial={4}
        noun="card.organizations"
        className="bx-grid2"
        render={(x) => (
          <ItemCard
            key={x.id}
            mark={x.organization}
            logo={x.logo}
            title={x.organization}
            sub={x.role}
            period={x.period}
            desc={x.description}
            images={x.images}
            detailsLabel={t('card.details')}
            onOpen={() => detail.open(x, 'organizations')}
          />
        )}
      />
      {detail.modal}
    </section>
  );
}

/** Event volunteering (Makassar Half Marathon 2024 to 2026). */
export function VolunteerSection() {
  const { t } = useT();
  const items = useLocalized(volunteers);
  const detail = useDetail();
  return (
    <section className="bx-wrap bx-section" id="volunteer" aria-labelledby="volunteer-title">
      <h2 id="volunteer-title" className="bx-heading">{t('about.volunteer')}</h2>
      <Expandable
        items={items}
        initial={4}
        noun="card.volunteers"
        className="bx-grid3"
        render={(x) => (
          <ItemCard
            key={x.id}
            mark={x.organization}
            logo={x.logo}
            title={x.organization}
            sub={x.role}
            period={x.period}
            desc={x.description}
            images={x.images}
            detailsLabel={t('card.details')}
            onOpen={() => detail.open(x, 'volunteer')}
          />
        )}
      />
      {detail.modal}
    </section>
  );
}

/** Licenses, certificates and competition awards. */
export function CertificationsSection() {
  const { t } = useT();
  const items = useLocalized(certifications);
  const detail = useDetail();
  return (
    <section className="bx-wrap bx-section" id="certifications" aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="bx-heading">{t('about.certifications')}</h2>
      <Expandable
        items={items}
        initial={3}
        noun="card.certifications"
        className="bx-grid3"
        render={(c) => (
          <article key={c.id} className="bx-box bx-card bx-cert">
            <div className="bx-dots3" aria-hidden="true"><i /><i /></div>
            <div className="bx-cert-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.images[0].src} alt={c.name} loading="lazy" />
            </div>
            <h3>{c.name}</h3>
            <p className="bx-cert-meta">{c.issuer} · {c.date}</p>
            {c.description && <p className="bx-card-desc">{c.description}</p>}
            <div className="bx-cert-foot">
              <span className="bx-cert-id">{c.credentialId ? `ID: ${c.credentialId}` : ''}</span>
              <button type="button" className="bx-btn bx-btn--ghost bx-btn--sm bx-btn--shine" onClick={() => detail.open(c, 'certifications')}>
                {t('card.detailsShort')} <ArrowRight size={14} aria-hidden="true" />
              </button>
            </div>
          </article>
        )}
      />
      {detail.modal}
    </section>
  );
}
