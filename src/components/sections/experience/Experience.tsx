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
          <h3>TypeScript</h3>
          <p>
            I am proficient in TypeScript, whether I&apos;m working with React
            or Node.js.
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
          <h3>Arch Linux</h3>
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
