'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { dictionaries, type TranslationKey } from './dictionaries';
import { getLang, getServerLang, setLang as setLangStore, subscribe, type Lang } from './langStore';
import { localize, type Localized } from './localize';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, getServerLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLangStore(lang === 'en' ? 'id' : 'en');
  }, [lang]);

  const t = useCallback((key: TranslationKey) => dictionaries[lang][key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang: setLangStore, toggle, t }), [lang, toggle, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used within LanguageProvider');
  return ctx;
}

/** Resolves every { en, id } pair in a data structure to the active language (memoized). */
export function useLocalized<T>(data: T): Localized<T> {
  const { lang } = useT();
  return useMemo(() => localize(data, lang), [data, lang]);
}
