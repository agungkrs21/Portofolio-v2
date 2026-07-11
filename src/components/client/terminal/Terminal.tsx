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
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleOpenWindow(state: boolean) {
    if (isActive === state) return;
    setIsActive(state);
  }

  function onCategoryChange(panel: PanelKey) {
    setActivePanel(panel);
  }
  return (
    <div
      aria-label="open terminal"
      className={`${styles.container} `}
      onClick={() => handleOpenWindow(true)}
    >
      <div
        className={`${styles.wrapper}  ${isActive ? styles.wActive : styles.wDeactive}`}
      >
        <div
          className={`${styles.topbar}`}
          style={{ height: `${isActive ? '22px' : '8px'}` }}
        >
          <p
            className={`${styles.wIcon}  ${isActive ? styles.iActive : styles.iDeactive}`}
          >
            {'>'}
            <span>_</span>
          </p>
        </div>
        {isActive && (
          <div className={`${styles.panelCt} ${isActive ? styles.fadeIn : ''}`}>
            <button
              aria-label="close terminal"
              onClick={() => handleOpenWindow(false)}
            >
              ✖
            </button>
            <Categories
              activePanel={activePanel}
              categories={panelItems}
              handleCLick={onCategoryChange}
            />
            <Items activePanel={activePanel} />
          </div>
        )}
      </div>
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
