import Image from 'next/image';
import styles from './Page.module.css';
import { timelinesAssets } from '@/data/about/timeline';
import { parseText } from '@/utils/parseText';
import { getDictionary } from '@/i18n/dictionary';
import type { Locale } from '@/i18n/config';
import type { Profile, Time_Lines } from '@/i18n/locales/en/about/type';
export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const dict = await getDictionary(locale as Locale);
  return (
    <section aria-labelledby="about-heding">
      <div className={`firstPage maxwidth ${styles.container}`}>
        <AboutDetail dict={dict.pageAbout.profile.about} />
        <Timeline dict={dict.pageAbout.profile.time_lines} />
      </div>
    </section>
  );
}

interface AboutDetailProps {
  dict: Profile;
}

function AboutDetail({ dict }: AboutDetailProps) {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.catbg}`}></div>
      <div>
        <h1 id="about-heading" className={`${styles.title}`}>
          {dict.title}
        </h1>
        {dict.life_story.map((story, i) => (
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
  dict: Time_Lines;
}

function Timeline({ dict }: TimelineProps) {
  return (
    <section
      aria-labelledby="timeline-heading"
      className={`${styles.timelineCt}`}
    >
      <h2 id="timeline-heading" className={`${styles.title}`}>
        {dict.title}
      </h2>
      <p>{dict.sub_title}</p>
      <ol>
        {dict.lines.map((tl, index) => (
          <li key={tl.time} className={`${styles.timeline}`}>
            <div>
              <time dateTime={tl.time}>📅 {tl.time}</time>
              <h3>{tl.title}</h3>
            </div>
            <div>
              <p>
                {parseText({
                  text: tl.summary,
                  links: timelinesAssets[index].links,
                })}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
