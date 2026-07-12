'use client';
import Image from 'next/image';
import styles from './TechCategory.module.css';
import { useState } from 'react';
import type { IdText } from '@/i18n/locales/en/site/types';
import { experienceAsset } from '@/data/site/experience';

interface TechCategoryProps {
  categories: IdText;
  items: (IdText[number] & { title: string })[];
}

export function TechCategory({ categories, items }: TechCategoryProps) {
  const [filter, setFilter] = useState<string>('all');

  function onChangeCategory(category: string) {
    if (filter === category) return;
    setFilter(category);
  }

  return (
    <div className={`${styles.container}`}>
      <ul className={`${styles.categories}`}>
        {categories.map((ct) => (
          <Categories
            key={ct.id}
            id={ct.id}
            category={ct.text}
            filter={filter}
            handleChange={onChangeCategory}
          />
        ))}
      </ul>

      <div className={`${styles.itemsContainer}`}>
        {items.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            filter={filter}
            techs={
              experienceAsset.techstacks[
                item.id as keyof typeof experienceAsset.techstacks
              ]
            }
            title={item.title}
            summary={item.text}
          />
        ))}
      </div>
    </div>
  );
}

interface CategoriesProps {
  id: string;
  category: string;
  filter: string;
  handleChange: (category: string) => void;
}

function Categories({ id, category, filter, handleChange }: CategoriesProps) {
  return (
    <li key={id}>
      <button
        className={`${filter === category ? styles.ctButtonActive : styles.ctButtonDeactive}`}
        onClick={() => handleChange(id)}
      >
        <Image
          src={`/icon/${id}.png`}
          alt=""
          width={21}
          height={21}
          className={`[image-rendering:pixelated] ${styles.ctIcon}`}
        />
        <p>{category}</p>
      </button>
    </li>
  );
}

interface ItemsProps {
  id: string;
  filter: string;
  techs: { name: string; icon: string }[];
  title: string;
  summary: string;
}

function Items({ id, filter, techs, title, summary }: ItemsProps) {
  const match = (() => {
    if (filter === 'all') return styles.show_items;

    return id === filter ? styles.show_items : 'hidden';
  })();
  return (
    <section className={`${styles.items} ${match}`}>
      <p>{title}</p>
      <p>{summary}</p>
      <ul>
        {techs.map((t) => (
          <li key={t.name}>
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
