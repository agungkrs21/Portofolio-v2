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
      <h2>Recent Commits</h2>
      <div className={`${styles.commitbox}`}>
        <ol>
          {commits.map((commit, i) => (
            <li key={`${i}-${commit.date}`}>
              <a
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View commit on GitHub"
              >
                <article className={`${styles.commit}`}>
                  <h3>📝 {commit.message}</h3>
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
