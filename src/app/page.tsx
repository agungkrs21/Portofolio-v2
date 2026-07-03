import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Projects from '@/components/sections/projects/Projects';

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
