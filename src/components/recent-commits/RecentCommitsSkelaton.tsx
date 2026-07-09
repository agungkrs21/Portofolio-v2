import styles from './RecentCommitsSkelaton.module.css';
export default function RecentCommitsSkeleaton() {
  return (
    <div className={`${styles.container}`}>
      <h2>Recent Commits</h2>
      <div className={`${styles.rctcommitSkt}`}>
        <ol>
          <li>
            <div className={`${styles.flexDummy}`}>
              <div className={`${styles.textDummy}`}></div>
              <div className={`${styles.textDummy}`}></div>
            </div>
            <div className={`${styles.textDummy}`}></div>
            <div className={`${styles.textDummy}`}></div>
            <div className={`${styles.textDummy}`}></div>
          </li>
        </ol>
      </div>
    </div>
  );
}
