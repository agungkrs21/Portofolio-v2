'use client';
import { useSiteSettings } from '@/stores/site-settings.store';
import styles from './SettingsPanel.module.css';
import { LanguageSwitcher } from '@/components/client/terminal/panels/settings/LanguaSwitter';
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
  const locale = LOCALES[language ?? 'en'];

  return (
    <div className={`${styles.container}`}>
      <p>{locale.t1}</p>
      <section>
        <div>
          <p>{locale.category[0]}</p>
          <LanguageSwitcher state={language} />
        </div>
        <div>
          <p>{locale.category[1]}</p>
        </div>
      </section>

      <p>{locale.t2}</p>
      <section>
        <div>
          <p>{locale.category[2]}</p>
        </div>
        <div>
          <p>{locale.category[3]}</p>
        </div>
      </section>
    </div>
  );
}
