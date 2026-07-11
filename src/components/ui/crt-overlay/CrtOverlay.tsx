import { PropsWithChildren } from 'react';
import styles from './CrtOverlay.module.css';

export function CrtOverlay({ children }: PropsWithChildren) {
  return (
    <div className={`${styles.crt}`}>
      {children}

      <div
        aria-hidden
        className={`${styles.crt_overlay} ${styles.scanlines}`}
      />

      <div
        aria-hidden
        className={`mix-blend-screen ${styles.crt_overlay} ${styles.rgb_split}`}
      />

      <div
        aria-hidden
        className={`mix-blend-screen ${styles.crt_overlay} ${styles.noise}`}
      />
    </div>
  );
}
