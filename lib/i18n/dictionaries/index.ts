import { en } from './en';
import { id } from './id';

export type TranslationKey = keyof typeof en;

export const dictionaries: Record<'en' | 'id', Record<TranslationKey, string>> = {
  en,
  id,
};
