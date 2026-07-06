import Image from 'next/image';
import styles from './Projects.module.css';
import { projects } from '@/data/projects';

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
          <Featured />
        </div>

        {/* project right */}
        <div className={`${styles.gridColRow1} ${styles.gridR}`}>
          {projects.featured.map((project, i) => (
            <Project key={i} item={project} />
          ))}
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
    <div className={`${styles.wrapper}`}>
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

      {/* recent commit box */}
      <section id="recent_commits" className={`${styles.commitbox}`}>
        <h3>Recent Commits</h3>
        <ol>
          <li>
            <article>
              <h4>
                <a href="#">Improve navbar acessibility</a>
              </h4>
              <p>Add aria labels and keyboard navigation</p>
              <footer>
                <time dateTime="2026-07-05T13:24:00Z">Jul 5, 2026</time>
              </footer>
            </article>
          </li>
        </ol>
      </section>
    </div>
  );
}

function Project({ item }: Props) {
  return (
    <section className={`${styles.pbox} ${styles.card} `}>
      <Image
        src={item.image}
        alt={`Project ${item.title}`}
        width={1597}
        height={910}
        className={`${styles.pimage}`}
      />
      <h2>{item.title}</h2>
      <p>{item.term}</p>
      <span className={`${styles.pmore}`}>show more</span>
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
