import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { siteConfig } from '@/config/site';
import './globals.css';

//font
import { montserrat, comfortana } from '@/lib/fonts/fonts';
// layout
import NavBar from '@/components/ui/layout/navbar/Navbar';
import Footer from '@/components/ui/layout/footer/Footer';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${comfortana.variable}`}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
