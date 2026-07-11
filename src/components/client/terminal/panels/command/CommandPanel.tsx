import { platformInfo } from '@/collectors/platformInfo';
import styles from './CommandPanel.module.css';

import Image from 'next/image';

export default function ComamndPanel() {
  console.log(platformInfo());
  return (
    <div className={`${styles.container}`}>
      <Image
        src="/images/me-desk-200.png"
        alt="Work In Progress"
        width={208}
        height={166}
        className="[image-rendering:pixelated] h-auto w-[208px]"
      />
    </div>
  );
}
