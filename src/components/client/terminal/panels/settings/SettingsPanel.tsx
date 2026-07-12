'use client';
import { useSiteSettings } from '@/stores/site-settings.store';
import styles from './SettingsPanel.module.css';
import type { SettingsKey, Toggle } from '@/stores/site-settings.store';
import type { Locale } from '@/i18n/config';
// probably in the futre if i complete my panels i will make dedicated locales
const LOCALES = {
  en: {
    t1: 'Currently Available',
    t2: 'Game Feature.',
    category: ['Language', 'Cursor', 'Animation', 'CRT Effect'],
  },
  id: {
    t1: 'Tersedia Saat Ini',
    t2: 'Fitur Game',
    category: ['Bahasa', 'Kursor', 'Animasi', 'Efek CRT'],
  },
};

export default function SettingsPanel() {
  const { language, cursor, animation, crt_effect } = useSiteSettings(
    (s) => s.settings,
  );
  const setSettings = useSiteSettings((s) => s.setSettings);
  const locale = LOCALES[language ?? 'en'];

  function handleClick(key: SettingsKey, value: Toggle | Locale) {
    setSettings(key, value);
  }

  return (
    <div className={`${styles.container}`}>
      <p>{locale.t1}</p>
      <section>
        <div>
          <p>{locale.category[0]}</p>
          <div className={`${styles.button_ct}`}>
            <button onClick={() => handleClick('language', 'en')}>en</button>
            <button onClick={() => handleClick('language', 'id')}>id</button>
            <div
              className={
                language === 'id'
                  ? `${styles.button_off}`
                  : `${styles.button_on}`
              }
            />
          </div>
        </div>
        <div>
          <p>{locale.category[1]}</p>
          <div className={`${styles.button_ct}`}>
            <button onClick={() => handleClick('cursor', 1)}>on</button>
            <button onClick={() => handleClick('cursor', 0)}>off</button>
            <div
              className={
                cursor === 0 ? `${styles.button_off}` : `${styles.button_on}`
              }
            />
          </div>
        </div>
      </section>

      <p>{locale.t2}</p>
      <section>
        <div>
          <p>{locale.category[2]}</p>
          <div className={`${styles.button_ct}`}>
            <button>on</button>
            <button>off</button>
          </div>
        </div>
        <div>
          <p>{locale.category[3]}</p>
          <div className={`${styles.button_ct}`}>
            <button>on</button>
            <button>off</button>
          </div>
        </div>
      </section>
    </div>
  );
}
