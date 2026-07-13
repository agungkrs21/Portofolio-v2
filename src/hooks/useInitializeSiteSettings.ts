import { useSiteSettings } from '@/stores/site-settings.store';
import { useEffect } from 'react';
import type { SettingsKey } from '@/stores/site-settings.store';
import { Locale } from '@/i18n/config';

export function useInitializeSiteSettings({ locale }: { locale: Locale }) {
  const initialize = useSiteSettings((s) => s.initialize);

  useEffect(() => {
    // TODO take data from cookies or local storage
    // "pirete software" style 🤣
    initialize({
      language: locale,
      cursor: 0,
      animation: 1,
      crt_effect: 1,
    });
  }, [locale, initialize]);
}
