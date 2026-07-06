import styles from './RecentCommits.module.css';
import { RecentCommit } from '@/lib/github/types';
import { getRecentCommits } from '@/lib/github/read-recent-commits';
import { RecentCommitsError } from '@/components/recent-commits/RecentCommitsError';
import { formatDate } from '@/utils/format-date';

export default async function RecentCommits() {
  // Avoid linter warning
  let commits = null;
  try {
    commits = await getRecentCommits();
  } catch (error) {
    console.log(error);
    return <RecentCommitsError error={error as Error} />;
  }
  if (commits) {
    return <CommitList commits={commits} />;
  }
}

function CommitList({ commits }: { commits: RecentCommit[] }) {
  return (
    <section id="recent_commits" className={`${styles.container}`}>
      <h3>Recent Commits</h3>
      <div className={`${styles.commitbox}`}>
        <ol>
          {commits.map((commit, i) => (
            <li key={`${i}-${commit.date}`}>
              <a href={commit.url} target="_blank" rel="noopener noreferrer">
                <article className={`${styles.commit}`}>
                  <h4>📝 {commit.message}</h4>
                  <p>repo : {commit.repo}</p>
                  <p>files changed : {commit.filesChanged}</p>
                  <div>
                    <span>+{commit.additions}</span>
                    <span>/</span>
                    <span>-{commit.deletions}</span>
                  </div>
                  <footer>
                    <time dateTime={commit.date}>
                      {formatDate(commit.date)}
                    </time>
                  </footer>
                </article>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
