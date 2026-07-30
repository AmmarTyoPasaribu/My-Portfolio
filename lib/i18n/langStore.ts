export type Lang = 'en' | 'id';

const STORAGE_KEY = 'portfolioLang';
let listeners: Array<() => void> = [];

export function getLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'id' ? 'id' : 'en';
}

export function getServerLang(): Lang {
  return 'en';
}

export function setLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  listeners.forEach((listener) => listener());
}

export function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
