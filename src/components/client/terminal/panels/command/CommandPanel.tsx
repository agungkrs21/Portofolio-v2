'use client';

import styles from './CommandPanel.module.css';
import { useSiteSettings } from '@/stores/site-settings.store';
import { platformInfo, PlatformInfo } from '@/collectors/platformInfo';

const LOCALES = {
  en: {
    t1: 'Device Info',
    t2: 'Browser CSS Feature Support',
  },
  id: {
    t1: 'Perangkat',
    t2: 'Fitur CSS Browser',
  },
};

export default function ComamndPanel() {
  const [cssFeatures, deviceInfo]: PlatformInfo = platformInfo();
  const { language } = useSiteSettings((s) => s.settings);
  const locale = LOCALES[language ?? 'en'];
  return (
    <div className={`${styles.container}`}>
      <p>{locale.t1}</p>
      <div className={`${styles.device_info}`}>
        {deviceInfo.map((info) => (
          <p key={info.name}>
            <span>
              {info.name}
              <span> :</span>
            </span>
            <span>{info.value}</span>
          </p>
        ))}
      </div>
      <p>{locale.t2}</p>
      <div className={`${styles.device_info}`}>
        {cssFeatures.map((info) => (
          <p key={info.name}>
            <span>
              {info.name}
              <span> :</span>
            </span>
            <span
              className={
                info.support ? `${styles.supported}` : `${styles.not_supported}`
              }
            >
              {String(info.support)}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
