import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Experince from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  return (
    <main>
      <About locale={locale} />
      <Experince />
      <Projects />
      <Contact />
    </main>
  );
}
