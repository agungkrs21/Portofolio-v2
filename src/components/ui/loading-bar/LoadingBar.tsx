import styles from './LoadingBar.module.css';

export function LoadingBar({ percent }: { percent: number }) {
  const normalize = Math.min((percent / 10) * 100, 100);
  if (normalize >= 100) return null;
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.bar}`}></div>
      <div
        className={`${styles.progresBar}`}
        style={{ width: `${normalize}%` }}
      ></div>
    </div>
  );
}
