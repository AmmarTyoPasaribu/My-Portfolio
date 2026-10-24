import type { Lang } from './langStore';

/** A string that exists in both languages. Used inside the portfolio data files. */
export type LText = { readonly en: string; readonly id: string };

/** Shorthand constructor: L('English', 'Indonesia'). */
export function L(en: string, id: string): LText {
  return { en, id };
}

/** Recursively replaces every LText in T with a plain string. */
export type Localized<T> = T extends LText
  ? string
  : T extends ReadonlyArray<infer U>
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

function isLText(value: unknown): value is LText {
  if (typeof value !== 'object' || value === null) return false;
  const keys = Object.keys(value);
  return (
    keys.length === 2 &&
    typeof (value as Record<string, unknown>).en === 'string' &&
    typeof (value as Record<string, unknown>).id === 'string'
  );
}

/** Walks any plain data structure and picks the requested language for every LText. */
export function localize<T>(value: T, lang: Lang): Localized<T> {
  if (isLText(value)) return value[lang] as Localized<T>;
  if (Array.isArray(value)) return value.map((item) => localize(item, lang)) as Localized<T>;
  if (typeof value === 'object' && value !== null) {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) out[key] = localize(item, lang);
    return out as Localized<T>;
  }
  return value as Localized<T>;
}
