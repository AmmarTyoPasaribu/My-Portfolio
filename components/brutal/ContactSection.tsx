'use client';

import { ArrowUpRight, Download } from 'lucide-react';
import BtnStuds from './BtnStuds';
import { useT } from '@/lib/i18n/LanguageProvider';
import { personal, socials } from '@/lib/site/data';
import { socialIcons } from './social';

const order = ['Email', 'LinkedIn', 'GitHub', 'Instagram'];

export default function ContactSection() {
  const { t } = useT();
  const links = order.map((n) => socials.find((s) => s.name === n)!).filter(Boolean);

  return (
    <section className="bx-wrap bx-section" id="contact" aria-labelledby="contact-title">
      <div className="bx-contact">
        <div>
          <p className="bx-eyebrow">{t('contact.eyebrow')}</p>
          <h2 id="contact-title" className="bx-big">
            {t('contact.line1')}
            <span>{t('contact.line2')}</span>
          </h2>
          <p className="lead">{t('contact.text')}</p>
          <div className="bx-contact-actions">
            <a className="bx-btn" href={personal.cv} download style={{ position: 'relative' }}>
            <BtnStuds />
              <Download size={18} aria-hidden="true" /> {t('nav.cv').toUpperCase()}
            </a>
          </div>
        </div>
        <div className="bx-box bx-links-list" role="list" aria-label={t('contact.panel')}>
          {links.map((item) => {
            const Icon = socialIcons[item.name];
            const external = item.url.startsWith('http');
            return (
              <a
                key={item.name}
                role="listitem"
                className="bx-linkrow"
                href={item.url}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <span className="bx-icon-box"><Icon size={20} aria-hidden="true" /></span>
                <span>
                  <small>{item.name}</small>
                  <b>{item.handle}</b>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
