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
  const [fitler, setFilter] = useState<string>('All');
  const [animate, setAnimate] = useState<boolean>(false);

  const filteredTech =
    fitler === 'All'
      ? techstacks
      : techstacks.filter((tech) => tech.category === fitler);

  function handlerFilter(category: string) {
    setFilter(category);
    setAnimate(false);

    requestAnimationFrame(() => {
      setAnimate(true);
    });
  }

  return (
    <>
      <ul className={`${styles.categories}`}>
        <li>
          <button
            className={`${fitler === 'all' ? styles.ctButtonActive : styles.ctButtonDeactive}`}
            onClick={() => handlerFilter('All')}
          >
            <Image
              src="/icon/all.png"
              alt=""
              width={21}
              height={21}
              className={`rendring-pixelated ${styles.ctIcon}`}
            />
            <p>All</p>
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`${fitler === category ? styles.ctButtonActive : styles.ctButtonDeactive}`}
              onClick={() => handlerFilter(category)}
            >
              <Image
                src={`/icon/${category.toLowerCase()}.png`}
                alt=""
                width={21}
                height={21}
                className={`rendring-pixelated ${styles.ctIcon}`}
              />
              <p>{category}</p>
            </button>
          </li>
        ))}
      </ul>

      <div className={`${styles.itemsContainer}  `}>
        {filteredTech.map((tech) => (
          <Items key={tech.category} techs={tech} animate={animate} />
        ))}
      </div>
    </>
  );
}

interface ItemsProps {
  techs: TechStacks;
  animate: boolean;
}

function Items({ techs, animate }: ItemsProps) {
  return (
    <section className={`${styles.items}`}>
      <h6>{techs.category}</h6>
      <p>{techs.summary}</p>
      <ul>
        {techs.tech.map((t) => (
          <li key={t.name} className={`${animate ? styles.animateFedeIn : ''}`}>
            <Image
              src={`${t.icon}`}
              alt="Sprite React"
              width={63}
              height={58}
              className={`rendering-pixelated ${styles.itemIcon} ${styles.gray} `}
            />
            <p>{t.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
