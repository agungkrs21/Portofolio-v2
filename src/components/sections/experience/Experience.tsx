import { profile } from '@/data/profile';
import styles from './Experience.module.css';
import { TechCategory } from '@/components/client/tech-category/TechCategory';
import { techstacks } from '@/data/techstack';



export default function Experince() {
  return (
    <section id="experience" className={`${styles.experience}`}>
      <div className={`maxwidth ${styles.container}`}>
        <p>{profile.about}</p>
        <p>Some technologies I&apos;ve worked with:</p>

        <TechCategory techstacks={techstacks}  />
      </div>
    </section>
  );
}
