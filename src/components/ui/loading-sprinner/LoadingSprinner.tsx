import styles from './LoadingSprinner.module.css';

export function LoadingSpinner() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.circle}`}></div>
      <div className={`${styles.circle}`}></div>
    </div>
  );
}
