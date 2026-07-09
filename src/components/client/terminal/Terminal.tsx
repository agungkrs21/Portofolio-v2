'use client';

import { LoadingSpinner } from '@/components/ui/loading-sprinner/LoadingSprinner';
import styles from './Terminal.module.css';

export function Terminal() {
  return (
    <div className={`${styles.container}`}>
      {/* <div className={`${styles.containerBtn}`}>
        <button aria-label="fullsceen">🟢</button>
        <button aria-label="close">🔴</button>
      </div> */}
      <Categories />
      <Items />
    </div>
  );
}

function Categories() {
  return (
    <ul className={`${styles.categories}`}>
      <li>
        <button aria-label="music">🎵</button>
      </li>
      <li>
        <button aria-label="theme">🌗</button>
      </li>
      <li>
        <button aria-label="web vitals">📊</button>
      </li>
      <li>
        <button aria-label="comamnd">⌘</button>
      </li>
      <li>
        <button aria-label="settings">⚙️</button>
      </li>
    </ul>
  );
}

function Items() {
  return (
    <div className={`${styles.items}`}>
      <LoadingSpinner />
    </div>
  );
}
