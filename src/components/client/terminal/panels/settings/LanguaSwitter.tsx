'use client';

import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { Locale } from '@/i18n/config';
import {
  SettingsKey,
  Toggle,
  useSiteSettings,
} from '@/stores/site-settings.store';
import styles from './SettingsPanel.module.css';
import { useDebounceCallback } from '@/hooks/useDebounceCallback';

interface LanguageSwitcherProps {
  state: Toggle | Locale | undefined;
}

export function LanguageSwitcher({ state }: LanguageSwitcherProps) {
  const changeLanguage = useLocaleSwitcher();
  const debouncedCallback = useDebounceCallback(changeLanguage);
  const setSettings = useSiteSettings((s) => s.setSettings);

  function onChangeLanguage(key: SettingsKey, value: Locale) {
    setSettings(key, value);
    debouncedCallback(value);
  }

  return (
    <div className={styles.button_ct}>
      <button onClick={() => onChangeLanguage('language', 'en')}>en</button>
      <button onClick={() => onChangeLanguage('language', 'id')}>id</button>
      <div className={state === 'id' ? styles.button_off : styles.button_on} />
    </div>
  );
}
