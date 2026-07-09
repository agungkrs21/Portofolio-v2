import Image from 'next/image';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';
import RecentCommits from '@/components/recent-commits/RecentCommits';
import { Suspense } from 'react';
import RecentCommitsSkeleaton from '@/components/recent-commits/RecentCommitsSkelaton';

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className={`maxwidth ${styles.container}`}>
        {/* gradient box */}
        {/* <div className={`${styles.gridColRow1} ${styles.absBox}`}>
          <div className={`${styles.gradientBox}`}></div>
        </div> */}

        {/* project left */}
        <div className={`${styles.gridColRow1} ${styles.gridL} `}>
          <div className={`${styles.wrapper}`}>
            <Featured />
            <Suspense fallback={<RecentCommitsSkeleaton />}>
              <RecentCommits />
            </Suspense>
          </div>
        </div>

        {/* project right */}
        <div className={`${styles.gridColRow1} ${styles.gridR}`}>
          {projects.featured.map((project, i) => (
            <Project key={i} item={project} />
          ))}

          <div className={`${styles.breakPoint}`}>
            <h2>Commissioned Projects</h2>
            <p>
              A showcase of custom projects created to solve the unique
              challenges and requirements of individual clients.
            </p>
          </div>

          {projects.commisionProjects.map((project, i) => (
            <Project key={i} item={project} />
          ))}

          <div className={`${styles.filler}`}></div>
        </div>
      </div>
    </section>
  );
}

type Tags = {
  name: string;
  color: string;
};

type Item = {
  title: string;
  url: string;
  gitLink: string;
  image: string;
  term: string;
  keyFeatures: string[];
  tags: Tags[];
};

type Props = {
  item: Item;
};

function Featured() {
  return (
    <section id="featured" className={`${styles.featured}`}>
      <h1>Featured Projects</h1>
      <p>{projects.summary}</p>

      <ul>
        {projects.pourpose.map((p) => (
          <li key={p.title}>
            <dl>
              <dt className={`${styles.term}`}>{p.title}</dt>
              <dd className={`${styles.description}`}>{p.body}</dd>
            </dl>
          </li>
        ))}
      </ul>

      <div className={`${styles.imgPlaceHolder}`}></div>
    </section>
  );
}

function Project({ item }: Props) {
  return (
    <section id="showcase" className={`${styles.pbox} ${styles.card}`}>
      <h2>
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
            <Image
              src="/icon/chain-link.png"
              alt="website link"
              width={30}
              height={30}
              className={`${styles.pIurl}`}
            />
          </a>
        ) : (
          <>{item.title}</>
        )}
      </h2>
      {item.gitLink && (
        <a
          href={item.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.pLicon}`}
        >
          <Image
            src="/icon/git-commit.png"
            alt="Github link"
            width={22}
            height={21}
            className={`${styles.pIgit}`}
          />
        </a>
      )}
      <p>{item.term}</p>

      <div>
        <details className={`${styles.pdetails} `}>
          <summary className={`${styles.pmore}`}> show more</summary>
          <Image
            src={item.image}
            alt={`Project ${item.title}`}
            width={1597}
            height={910}
            className={`${styles.pimage}`}
          />
          <ul>
            {item.keyFeatures.map((feature) => (
              <li key={feature}>
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
