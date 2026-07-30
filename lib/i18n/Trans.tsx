'use client';

import { createElement } from 'react';
import { useT } from './LanguageProvider';
import type { TranslationKey } from './dictionaries';

interface TransProps {
  k: TranslationKey;
  as?: React.ElementType;
  className?: string;
}

/** Renders a translation value that contains HTML (e.g. <span>, <strong>, <br>). */
export function Trans({ k, as: Tag = 'span', className }: TransProps) {
  const { t } = useT();
  // createElement (not JSX) avoids TS collapsing props to `never` when Tag
  // is a broad React.ElementType union.
  return createElement(Tag, { className, dangerouslySetInnerHTML: { __html: t(k) } });
}
