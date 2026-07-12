import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Experince from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';
import { getDictionary } from '@/i18n/dictionary';
import type { Locale } from '@/i18n/config';

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return (
    <main>
      <About locale={locale} dict={dict.site.profile.about} />
      <Experince dict={dict.site.profile.experience} />
      <Projects />
      <Contact />
    </main>
  );
}
