'use client';

import { personal, socials } from '@/lib/site/data';
import { useT } from '@/lib/i18n/LanguageProvider';
import { socialIcons } from './social';

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="bx-footer">
      <div className="bx-wrap bx-footer-in">
        <div>
          <strong>{t('footer.copy')} {new Date().getFullYear()} {personal.name}</strong>
        </div>
        <div className="bx-socials">
          {socials.map((item) => {
            const Icon = socialIcons[item.name];
            const external = item.url.startsWith('http');
            return (
              <a key={item.name} href={item.url} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={item.name}>
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
