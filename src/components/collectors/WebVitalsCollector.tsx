'use client';

import { useCollectWebVitals } from '@/hooks/useCollectWebVitals';
import { useInitializeSiteSettings } from '@/hooks/useInitializeSiteSettings';
import { Locale } from '@/i18n/config';

export function WebVitalsCollector({ locale }: { locale: Locale }) {
  useCollectWebVitals();
  useInitializeSiteSettings({ locale: locale });
  return null;
}
