import { profile } from '@/data/profile';
import styles from './Experience.module.css';
import { TechCategory } from '@/components/client/tech-category/TechCategory';
import { techstacks } from '@/data/techstack';
import Image from 'next/image';

export default function Experince() {
  return (
    <section id="experience" className={`${styles.experience}`}>
      <div className={`maxwidth ${styles.container}`}>
        <p>{profile.about}</p>
        <p>Some technologies I&apos;ve worked with:</p>

        <TechCategory techstacks={techstacks} />
      </div>
      <div className={` maxwidth ${styles.scriptCT}`}>
        <div>
          <p>TypeScript</p>
          <p>
            I am proficient in TypeScript, whether I&apos;m working with React
            or Node.js, using it to build scalable, maintainable, and type-safe
            applications.
          </p>

          <Image
            src="/images/tstext-logo.png"
            alt=""
            width={300}
            height={120}
            className={`[image-rendering:pixelated] ${styles.gray}`}
            unoptimized
          />
        </div>
        <div>
          <p>Arch Linux</p>
          <p>
            Comfortable working in Linux environments, with Arch Linux as my
            primary operating system for daily development.
          </p>

          <Image
            src="/images/archtext-logo.png"
            alt=""
            width={300}
            height={120}
            className={`[image-rendering:pixelated] ${styles.gray}`}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
