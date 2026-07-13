import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { personSchema, websiteSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';
import '@/app/globals.css';

//font
import { montserrat, comfortana } from '@/lib/fonts/fonts';
// layout
import Footer from '@/components/ui/layout/footer/Footer';
import { WebVitalsCollector } from '@/components/collectors';

// SEO
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: `${siteConfig.name} Portfolio`,

  authors: [
    {
      name: 'Agung Kurniawan',
      url: 'https://github.com/agungkrs21',
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Portfolio',
    'Tailwind CSS',
    'Web Developer',
    'Indonesia',
    'UI Engineer',
  ],
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} Portfolio`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    creator: '@agungkrs21',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },

  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: 'black-translucent',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  category: 'Technology',
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: '#100f10',
    },
  ],
};

import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import NavBar from '@/components/ui/layout/navbar/Navbar';
import NextTopLoader from 'nextjs-toploader';
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
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${comfortana.variable}`}
    >
      <body>
        <NextTopLoader
          color="#f0f0f0"
          showSpinner={false}
          shadow={false}
          initialPosition={0.3}
          easing="cubic-bezier(0.22, 1, 0.36, 1)"
        />
        <NavBar locale={locale as Locale} />
        {children}
        <UtilityDock />
        <Footer locale={locale} />
        <WebVitalsCollector locale={locale as Locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, personSchema]),
          }}
        />
      </body>
    </html>
  );
}
