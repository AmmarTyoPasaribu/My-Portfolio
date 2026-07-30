'use client';

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react';
import { dictionaries, type TranslationKey } from './dictionaries';
import { getLang, getServerLang, setLang as setLangStore, subscribe } from './langStore';

interface LanguageContextValue {
  lang: 'en' | 'id';
  toggle: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, getServerLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty(
      '--cert-view-label',
      JSON.stringify(dictionaries[lang]['cert.view'])
    );
  }, [lang]);

  const toggle = useCallback(() => {
    setLangStore(lang === 'en' ? 'id' : 'en');
  }, [lang]);

  const t = useCallback((key: TranslationKey) => dictionaries[lang][key] ?? key, [lang]);

  return <LanguageContext.Provider value={{ lang, toggle, t }}>{children}</LanguageContext.Provider>;
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useT must be used within LanguageProvider');
  return ctx;
}
