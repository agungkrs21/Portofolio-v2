import { techstacks } from '@/data/techstack';
import { profile } from '@/data/profile';
import Image from 'next/image';
import styles from './Experience.module.css';
const techCategory = techstacks.map((l) => l.category);

export default function Experince() {
  return (
    <section>
      <div className={`maxwidth ${styles.container}`}>
        <p>{profile.about}</p>
        <p>Some technologies I&apos;ve worked with:</p>

        {/* categories */}
        <ul className={`${styles.categoriebox}`}>
          <Category category="all" />
          {techCategory.map((name) => (
            <Category key={name} category={name} />
          ))}
        </ul>

        {/* category item */}
        <div className={`${styles.categorydetail}`}>
          <ul>
            {techstacks.map((t) => (
              <li key={t.category}>
                <dl className={styles.item}>
                  <dt>
                    <h6>{t.category}</h6>
                    {t.summary}
                  </dt>
                  <div className={styles.items}>
                    {t.tech.map((i) => (
                      <Item key={i.name} icon={i.icon} name={i.name} />
                    ))}
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Category({ category }: { category: string }) {
  return (
    <li className={`${styles.category}`}>
      <Image
        src={`/icon/${category.toLowerCase()}.png`}
        alt="Sprite Icon"
        width={40}
        height={40}
        style={{ imageRendering: 'pixelated' }}
        className={`rendering-pixelated ${styles.cticon}`}
      />
      <h6>{category}</h6>
    </li>
  );
}

function Item({ icon, name }: { icon: string; name: string }) {
  return (
    <dd className={`${styles.itembox}`}>
      <img
        src={icon}
        alt={`Sprite ${name}`}
        width={0}
        height={0}
        style={{ imageRendering: 'pixelated' }}
        className={`rendering-pixelated h-[50px] w-auto ${styles.gray}`}
      />
      {name}
    </dd>
  );
}
