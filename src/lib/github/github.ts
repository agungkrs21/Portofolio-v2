import type { RecentCommit } from '@/lib/github/types';

interface GitHubEvent {
  type: 'PushEvent' | string;
  repo: {
    name: string;
  };
  payload: {
    before: string;
    head: string;
  };
}

interface GitHubCompare {
  commits: {
    html_url: string;
    commit: {
      message: string;
      author: {
        date: string;
      };
    };
  }[];
  files: {
    additions: number;
    deletions: number;
  }[];
}

const USERNAME = 'agungkrs21';
const API_VERSION = '2022-11-28';

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error('GITHUB_TOKEN is not configured.');
  }

  return {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': API_VERSION,
  };
}

async function githubFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: githubHeaders(),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`GitHub request failed (${res.status} ${res.statusText})`);
  }

  return res.json() as Promise<T>;
}

async function getCompare(
  repo: string,
  before: string,
  head: string,
): Promise<RecentCommit> {
  const compare = await githubFetch<GitHubCompare>(
    `https://api.github.com/repos/${repo}/compare/${before}...${head}`,
  );

  const latestCommit = compare.commits.at(-1);

  if (!latestCommit) {
    throw new Error(`No commits found for repository "${repo}".`);
  }

  const [, repoName] = repo.split('/');

  if (!repoName) {
    throw new Error(`Invalid repository name: ${repo}`);
  }

  return {
    repo: repoName,
    message: latestCommit.commit.message,
    date: latestCommit.commit.author.date,
    url: latestCommit.html_url,
    additions: compare.files.reduce((total, file) => total + file.additions, 0),
    deletions: compare.files.reduce((total, file) => total + file.deletions, 0),
    filesChanged: compare.files.length,
  };
}

export async function getRecentCommits(): Promise<RecentCommit[]> {
  const events = await githubFetch<GitHubEvent[]>(
    `https://api.github.com/users/${USERNAME}/events?per_page=30`,
  );

  const pushEvents = events
    .filter(
      (event): event is GitHubEvent & { type: 'PushEvent' } =>
        event.type === 'PushEvent',
    )
    .slice(0, 5);

  return Promise.all(
    pushEvents.map(({ repo, payload }) =>
      getCompare(repo.name, payload.before, payload.head),
    ),
  );
}
