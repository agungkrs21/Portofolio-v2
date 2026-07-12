import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'About',
    template: '%s | About',
  },
  description: 'Learn more about Agung Kurniawan',
  keywords: [
    'About Agung Kurniawan',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Engineer',
    'Portfolio',
  ],
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
