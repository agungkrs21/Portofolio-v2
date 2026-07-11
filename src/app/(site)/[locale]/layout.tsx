import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';

import NavBar from '@/components/ui/layout/navbar/Navbar';
import UtilityDock from '@/components/ui/layout/utility-dock/UtilityDock';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SiteLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <>
      <NavBar locale={locale} />
      {children};
      <UtilityDock />
    </>
  );
}
