import Image from 'next/image';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';
import RecentCommits from '@/components/recent-commits/RecentCommits';
import { ReactNode, Suspense } from 'react';
import RecentCommitsSkeleaton from '@/components/recent-commits/RecentCommitsSkelaton';
import { Video } from '@/components/ui/video/Video';
import { parseText } from '@/utils/parseText';
import type { Projects } from '@/i18n/locales/en/site/types';
import { projectsAssets } from '@/data/site/projects';

interface ProjectsProps {
  dict: Projects;
  locale: string;
}

export default function Projects({ dict, locale }: ProjectsProps) {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className={`maxwidth ${styles.container}`}>
        {/* project left */}
        <div className={`${styles.gridColRow1} ${styles.gridL} `}>
          <div className={`${styles.wrapper}`}>
            <Featured dict={dict.heading} locale={locale} />
            <Suspense fallback={<RecentCommitsSkeleaton />}>
              <RecentCommits />
            </Suspense>
          </div>
        </div>

        {/* project right */}
        <div className={`${styles.gridColRow1} ${styles.gridR}`}>
          {dict.featured.map((work, index) => (
            <Project
              key={work.title}
              item={{ ...work, ...projectsAssets.featured_link[index] }}
            />
          ))}

          <div className={`${styles.breakPoint}`}>
            <h2>{dict.commision_projects.title}</h2>
            <p>{dict.commision_projects.summary}</p>
          </div>

          {dict.commision_projects.works.map((work, index) => (
            <Project
              key={work.title}
              item={{ ...work, ...projectsAssets.commision_link[index] }}
            />
          ))}

          <div className={`${styles.filler}`}></div>
        </div>
      </div>
    </section>
  );
}

interface FeaturedProps {
  dict: {
    title: string;
    summary: string;
    porpose: {
      title: string;
      summary: string;
    }[];
  };
  locale: string;
}

function Featured({ dict, locale }: FeaturedProps) {
  return (
    <section id="featured" className={`${styles.featured}`}>
      <h1>{dict.title}</h1>
      <p>
        {parseText({
          text: dict.summary,
          links: projectsAssets.sum_link,
          locale,
        })}
      </p>

      <ul>
        {dict.porpose.map((p) => (
          <li key={p.title}>
            <dl>
              <dt className={`${styles.term}`}>{p.title}</dt>
              <dd className={`${styles.description}`}>{p.summary}</dd>
            </dl>
          </li>
        ))}
      </ul>

      <div className={`${styles.video_ct}`}>
        <Video source="/video/bw-portofolio-game.mp4" />
      </div>
    </section>
  );
}

interface ProjectProps {
  item: {
    url: string;
    git_link: string;
    img_link: string;
    title: string;
    summary: string;
    key_feature: string[];
    tags: { name: string; color: string }[];
  };
}

function Project({ item }: ProjectProps) {
  return (
    <section id="showcase" className={`${styles.pbox} ${styles.card}`}>
      <h2>{makeLinkIfNeeded({ url: item.url, title: item.title })}</h2>

      {item.git_link && <GitLink link={item.git_link} />}

      <p>{item.summary}</p>

      <div>
        <details className={`${styles.pdetails} `}>
          <summary className={`${styles.pmore}`}> show more</summary>
          <Image
            src={item.img_link}
            alt={`Project ${item.title}`}
            width={1597}
            height={910}
            className={`${styles.pimage}`}
          />
          <ul>
            {item.key_feature.map((feature, index) => (
              <li key={index}>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className={`${styles.tags}`}>
        {item.tags.map((tag) => (
          <span
            key={item.title + tag.name}
            className={`${styles.tag}`}
            style={{
              color: `var(--${tag.color})`,
              backgroundColor: `var(--black-900)`,
            }}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
}

function GitLink({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.pLicon}`}
      aria-label="View source code on GitHub"
    >
      <Image
        src="/icon/git-commit.png"
        alt=""
        width={22}
        height={21}
        className={`${styles.pIgit}`}
      />
    </a>
  );
}

function makeLinkIfNeeded({
  url,
  title,
}: {
  url: string;
  title: string;
}): ReactNode {
  if (!url) return title;

  const props = {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': 'View Project Website',
  };
  const Icon = (
    <Image
      src="/icon/chain-link.png"
      alt=""
      width={30}
      height={30}
      className={`${styles.pIurl}`}
    />
  );

  return (
    <a {...props}>
      {' '}
      {title} {Icon}
    </a>
  );
}
