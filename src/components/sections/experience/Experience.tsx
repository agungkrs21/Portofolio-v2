import Image from 'next/image';
import styles from './Experience.module.css';
import { experienceAsset } from '@/data/site/experience';
import type { Experience } from '@/i18n/locales/en/site/types';
import { TechCategory } from '@/components/client/tech-category/TechCategory';

interface ExperienceProps {
  dict: Experience;
}

export default function Experince({ dict }: ExperienceProps) {
  return (
    <section id="experience" className={`${styles.experience}`}>
      <div className={`maxwidth ${styles.container}`}>
        <p>{dict.title}</p>
        <p>{dict.sub_heading}</p>

        <TechCategory categories={dict.categories} items={dict.items} />
      </div>

      <div className={` maxwidth ${styles.scriptCT}`}>
        {dict.environtment.map((env, index) => (
          <Enviroment
            key={env.id}
            title={env.title}
            summary={env.summary}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

interface EnviromentProps {
  title: string;
  summary: string;
  index: number;
}

function Enviroment({ title, summary, index }: EnviromentProps) {
  return (
    <div>
      <p>{title}</p>
      <p>{summary}</p>
      <Image
        src={`${experienceAsset.environment[index]}`}
        alt=""
        width={300}
        height={120}
        className={`[image-rendering:pixelated] ${styles.gray}`}
        unoptimized
      />
    </div>
  );
}
