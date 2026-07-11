import { Locale } from '@/i18n/config';
import type enDictionary from '@/i18n/locales/en';

export type Dictionary = typeof enDictionary;
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/i18n/locales/en').then((module) => module.default),
  id: () => import('@/i18n/locales/id').then((module) => module.default),
};

// Sekarang fungsi ini tidak akan memicu error lagi!
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
