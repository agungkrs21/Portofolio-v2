import styles from './RecentCommits.module.css';

export default function RecentCommits() {
  return (
    <section id="recent_commits" className={`${styles.container}`}>
      <h3>Recent Commits</h3>
      <div className={`${styles.commitbox}`}>
        <ol>
          <li>
            <a href="">
              <article className={`${styles.commit}`}>
                <h4>✨ add css driven animations</h4>
                <p>repo : portofolio v2</p>
                <p>files changed : 5</p>
                <div>
                  <span>+68</span>
                  <span>/</span>
                  <span>-44</span>
                </div>
                <footer>
                  <time dateTime="2026-07-05T13:24:00Z">
                    time : Jul 5, 2026
                  </time>
                </footer>
              </article>
            </a>
          </li>
          <li>
            <a href="">
              <article className={`${styles.commit}`}>
                <h4>🚀 add css driven animations</h4>
                <p>repo : portofolio v2</p>
                <p>files changed : 5</p>
                <div>
                  <span>+68</span>
                  <span>/</span>
                  <span>-44</span>
                </div>
                <footer>
                  <time dateTime="2026-07-05T13:24:00Z">
                    time : Jul 5, 2026
                  </time>
                </footer>
              </article>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
