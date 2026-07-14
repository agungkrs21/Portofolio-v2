import type { RecentCommit } from '@/lib/github/types';
import { readFile } from 'fs/promises';
import path from 'path';

// use Redis if needed
export async function readRecentCommits(): Promise<RecentCommit[]> {
  try {
    return await getNewCommitData();
  } catch (error) {
    console.error(error);
    return readRecentCommitFromBackUp();
  }
}

async function readRecentCommitFromBackUp() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'recent-commits.json');
    const json = await readFile(filePath, 'utf8');
    return JSON.parse(json) as RecentCommit[];
  } catch (error) {
    throw new Error('Failed to read commits from backup', { cause: error });
  }
}

let pendingRequest: Promise<RecentCommit[]> | null = null;

function getNewCommitData() {
  // pevent unnecessary API request
  if (pendingRequest) return pendingRequest;

  const url = process.env.RECENT_COMMIT_URL;

  if (!url) {
    return Promise.reject(new Error('RECENT_COMMIT_URL is not configured'));
  }

  pendingRequest = fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to get recent comiits');
      }
      return res.json() as Promise<RecentCommit[]>;
    })
    .finally(() => (pendingRequest = null));

  return pendingRequest;
}
