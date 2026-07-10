import styles from './PerfomancePanel.module.css';

export default function PerfomancePanel() {
  return (
    <div className={`${styles.container}`}>
      <p>Real User Metrics</p>
      <div>
        <p>LCP</p>
        <p>INP</p>
        <p>CLS</p>
        <p>FCP</p>
        <p>TTFB</p>
      </div>
      <div>
        <p>1.42 s</p>
        <p>97 ms</p>
        <p>0.03 </p>
        <p>856 ms</p>
        <p>184 ms</p>
      </div>
      <div>
        <p>
          <span
            className={`${styles.circle}`}
            style={{ background: 'var(--green)' }}
          ></span>{' '}
          Good
        </p>
        <p>
          <span
            className={`${styles.circle}`}
            style={{ background: 'var(--green)' }}
          ></span>{' '}
          Good
        </p>
        <p>
          <span
            className={`${styles.circle}`}
            style={{ background: 'var(--green)' }}
          ></span>{' '}
          Good
        </p>
        <p>
          <span
            className={`${styles.circle}`}
            style={{ background: 'var(--green)' }}
          ></span>{' '}
          Good
        </p>
        <p>
          <span
            className={`${styles.circle}`}
            style={{ background: 'var(--green)' }}
          ></span>{' '}
          Good
        </p>
      </div>
    </div>
  );
}
