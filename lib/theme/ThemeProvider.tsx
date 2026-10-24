'use client';

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from 'react';
import { getServerTheme, getTheme, setTheme as setThemeStore, subscribe, type Theme } from './themeStore';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = useCallback(() => {
    setThemeStore(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme: setThemeStore, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
