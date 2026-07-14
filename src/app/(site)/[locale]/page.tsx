import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Experince from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';
import { getDictionary } from '@/i18n/dictionary';
import { locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  
  const dict = await getDictionary(locale as Locale);
  return (
    <main>
      <About locale={locale} dict={dict.site.profile.about} />
      <Experince dict={dict.site.profile.experience} />
      <Projects dict={dict.site.project} locale={locale} />
      <Contact dict={dict.site.contact} />
    </main>
  );
}
