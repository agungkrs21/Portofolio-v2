import { useSiteSettings } from '@/stores/site-settings.store';
import { useEffect } from 'react';
import type { SettingsKey } from '@/stores/site-settings.store';

export function useInitializeSiteSettings({ locale }: { locale: string }) {
  const initialize = useSiteSettings((s) => s.initialize);

  useEffect(() => {
    // TODO take data from cookies or local storage
    // "pirete software" style 🤣
    initialize({
      language: locale,
      cursor: 1,
      animation: 1,
      crt_effect: 1,
    });
  }, [locale, initialize]);
}
