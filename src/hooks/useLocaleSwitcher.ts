import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { usePathname } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';

export function useLocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  function cangeLanguage(locale: Locale) {
    const segments = pathname.split('/');

    if (locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    router.push(segments.join('/'));
  }

  return cangeLanguage;
}
