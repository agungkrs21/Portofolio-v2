import Image from 'next/image';
import { lifeStory } from '@/data/profile';
import styles from './Page.module.css';
import { timelines } from '@/data/profile';
import { parseText } from '@/utils/parseText';

export default function About() {
  return (
    <section aria-labelledby="about-heding">
      <div className={`firstPage maxwidth ${styles.container}`}>
        <AboutDetail />
        <Timeline timelines={timelines} />
      </div>
    </section>
  );
}

function AboutDetail() {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.catbg}`}></div>
      <div>
        <h1 id="about-heading" className={`${styles.title}`}>
          About
        </h1>
        {lifeStory.map((story, i) => (
          <p key={i}>{story}</p>
        ))}
      </div>
      <div className={`${styles.imageCt}`}>
        <Image
          src="/images/me-1000.png"
          alt="Agung"
          width={500}
          height={500}
          className={`${styles.profilePic}`}
        />
      </div>
    </div>
  );
}

interface TimelineProps {
  timelines: {
    time: string;
    title: string;
    summary: string;
    links: { id: string; text: string; href: string }[];
    picture: string;
  }[];
}

function Timeline({ timelines }: TimelineProps) {
  return (
    <section
      aria-labelledby="timeline-heading"
      className={`${styles.timelineCt}`}
    >
      <h2 id="timeline-heading" className={`${styles.title}`}>
        Timeline
      </h2>
      <p>A short timeline of how I became a Frontend Developer</p>

      <ol>
        {timelines.map((tl) => (
          <li key={tl.time} className={`${styles.timeline}`}>
            <div>
              <time dateTime={tl.time}>📅 {tl.time}</time>
              <h3>{tl.title}</h3>
            </div>
            <div>
              <p>{parseText({ text: tl.summary, links: tl.links })}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
