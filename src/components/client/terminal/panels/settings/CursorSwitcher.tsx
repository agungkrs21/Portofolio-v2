'use client';

import {
  useSiteSettings,
  type SettingsKey,
  type Toggle,
} from '@/stores/site-settings.store';
import styles from './SettingsPanel.module.css';

interface CursorSwitcherProps {
  state: Toggle | undefined;
}
export function CursorSwitcher({ state }: CursorSwitcherProps) {
  const setSettings = useSiteSettings((s) => s.setSettings);
  function onChangeCursor(key: SettingsKey, value: Toggle) {
    setSettings(key, value);

    document.body.classList.toggle('custom-cursor', value === 1 ? true : false);
  }
  if (state === undefined) return null;
  return (
    <div className={styles.button_ct}>
      <button onClick={() => onChangeCursor('cursor', 1)}>on</button>
      <button onClick={() => onChangeCursor('cursor', 0)}>off</button>
      <div className={state === 0 ? styles.button_off : styles.button_on} />
    </div>
  );
}
