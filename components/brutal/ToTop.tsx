'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n/LanguageProvider';

export default function ToTop() {
  const { t } = useT();
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button type="button" className={`bx-totop ${on ? 'is-on' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('top')}>
      <ArrowUp size={22} aria-hidden="true" />
      {t('top')}
    </button>
  );
}
