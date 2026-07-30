'use client';

import Link from 'next/link';
import { useT } from '@/lib/i18n/LanguageProvider';
import { IconChevronLeft } from '@/lib/icons';

export function DetailNav({ title, backHref = '/#projects' }: { title: string; backHref?: string }) {
  const { lang, toggle, t } = useT();
  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between border-b border-border bg-bg/85 px-10 py-4 backdrop-blur-xl max-md:px-5">
      <Link href={backHref} className="flex items-center gap-2 font-mono text-[0.85rem] font-medium text-text-secondary transition-colors hover:text-accent">
        <IconChevronLeft className="h-[18px] w-[18px]" />
        <span>{t('detail.back')}</span>
      </Link>
      <span className="font-mono text-[0.95rem] font-semibold text-accent">{title}</span>
      <button
        className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[0.82rem] font-bold tracking-wider text-text-secondary transition-all hover:border-accent hover:text-accent"
        onClick={toggle}
        aria-label="Toggle language"
      >
        {lang === 'en' ? 'ID' : 'EN'}
      </button>
    </nav>
  );
}
