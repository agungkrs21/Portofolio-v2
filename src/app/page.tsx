import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Experince from '@/components/sections/experience/Experience';
import Projects from '@/components/sections/projects/Projects';

export default function Home() {
  return (
    <main>
      <About />
      <Experince />
      <Projects />
      <Contact />
    </main>
  );
}
