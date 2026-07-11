import { platformInfo, PlatformInfo } from '@/collectors/platformInfo';
import styles from './CommandPanel.module.css';
import Image from 'next/image';

export default function ComamndPanel() {
  const [cssFeatures, deviceInfo]: PlatformInfo = platformInfo();
  return (
    <div className={`${styles.container}`}>
      <p>Device Info</p>
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
      <p>Browser CSS Feature Support</p>
      <div className={`${styles.device_info}`}>
        {cssFeatures.map((info) => (
          <p key={info.name}>
            <span>
              {info.name}
              <span> :</span>
            </span>
            <span>{String(info.support)}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
