import { defaultLocale } from '@/i18n/config';
import type { NextRequest } from 'next/server';


export function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') ?? '';

  return acceptLanguage.toLocaleLowerCase().startsWith('id')
    ? 'id'
    : defaultLocale;
}
