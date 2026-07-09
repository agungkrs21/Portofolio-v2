'use client';

import styles from './Terminal.module.css';
import { Suspense, useState } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-sprinner/LoadingSprinner';
import { PANELS } from '@/components/client/terminal/panels/registry';

type PanelKey = keyof typeof PANELS;

const panelItems: Array<{
  key: PanelKey;
  title: string;
  icon: string;
}> = Object.entries(PANELS).map(([key, panel]) => ({
  key: key as PanelKey,
  title: panel.title,
  icon: panel.icon,
}));

export function Terminal() {
  const [activePanel, setActivePanel] = useState<PanelKey>('performance');

  function onCategoryChange(panel: PanelKey) {
    setActivePanel(panel);
  }

  return (
    <div className={`${styles.container}`}>
      <Categories
        activePanel={activePanel}
        categories={panelItems}
        handleCLick={onCategoryChange}
      />
      <Items activePanel={activePanel} />
    </div>
  );
}

type CategoriesProps = {
  activePanel: PanelKey;
  categories: typeof panelItems;
  handleCLick: (panel: PanelKey) => void;
};

function Categories({ activePanel, categories, handleCLick }: CategoriesProps) {
  return (
    <ul className={`${styles.categories}`}>
      {categories.map((panel) => (
        <li
          key={panel.key}
          className={activePanel === panel.key ? `${styles.active}` : ''}
        >
          <button
            aria-label={`${panel.title}`}
            onClick={() => handleCLick(panel.key)}
          >
            {panel.icon}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Items({ activePanel }: { activePanel: PanelKey }) {
  const ActivePanel = PANELS[activePanel].component;
  return (
    <div className={`${styles.items}`}>
      <Suspense fallback={<LoadingSpinner />}>
        <ActivePanel />
      </Suspense>
    </div>
  );
}
