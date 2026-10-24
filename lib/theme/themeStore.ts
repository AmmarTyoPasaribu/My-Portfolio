export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'portfolioTheme';
let listeners: Array<() => void> = [];

/** Runs before first paint (see layout.tsx) so the correct theme is set without a flash. */
export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem('${STORAGE_KEY}');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function getServerTheme(): Theme {
  return 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage can be unavailable (private mode); the theme still applies for this visit
  }
  listeners.forEach((listener) => listener());
}

export function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
