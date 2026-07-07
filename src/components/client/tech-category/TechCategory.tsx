'use client';

import Image from 'next/image';
import styles from './TechCategory.module.css';
import { useState } from 'react';

interface Tech {
  name: string;
  icon: string;
}

interface TechStacks {
  category: string;
  summary: string;
  tech: Tech[];
}

interface TechCategoryProps {
  techstacks: TechStacks[];
}

export function TechCategory({ techstacks }: TechCategoryProps) {
  const categories = techstacks.map((tech) => tech.category);
  return (
    <div className={`${styles.container}`}>
      <Categories categories={categories} techstacks={techstacks} />
    </div>
  );
}

interface CategoriesProps {
  categories: string[];
  techstacks: TechStacks[];
}

function Categories({ categories, techstacks }: CategoriesProps) {
  const [filtered, setFiltered] = useState<TechStacks[]>(techstacks);

  return (
    <>
      <ul className={`${styles.categories}`}>
        <li>
          <Image
            src="/icon/all.png"
            alt=""
            width={21}
            height={21}
            className={`rendring-pixelated ${styles.ctIcon}`}
          />
          <p>All</p>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Image
              src={`/icon/${category.toLowerCase()}.png`}
              alt=""
              width={21}
              height={21}
              className={`rendring-pixelated ${styles.ctIcon}`}
            />
            <p>{category}</p>
          </li>
        ))}
      </ul>

      <div className={`${styles.itemsContainer}`}>
        {filtered.map((tech) => (
          <Items key={tech.category} techs={tech} />
        ))}
      </div>
    </>
  );
}

interface ItemsProps {
  techs: TechStacks;
}

function Items({ techs }: ItemsProps) {
  return (
    <section className={`${styles.items}`}>
      <h6>{techs.category}</h6>
      <p>{techs.summary}</p>
      <ul>
        {techs.tech.map((t) => (
          <li key={t.name}>
            <Image
              src={`${t.icon}`}
              alt="Sprite React"
              width={63}
              height={58}
              className={`rendering-pixelated ${styles.itemIcon} ${styles.gray}`}
            />
            <p>{t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
