import styles from './RecentCommitsError.module.css';

type ErrorProps = {
  error: Error;
};

export function RecentCommitsError({ error }: ErrorProps) {
  return (
    <div className={`${styles.container}`}>
      <h3>Recent Commits</h3>
      <div className={`${styles.rctcommitSkt}`}>
        <p>{error.message}</p>
      </div>
    </div>
  );
}
