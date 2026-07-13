import { RecentCommit } from '@/lib/github/types';
import { readFile } from 'fs/promises';
import path from 'path';

// TODO useCache, and refractor code
export async function readRecentCommits(): Promise<RecentCommit[]> {
  try {
    return await read();
  } catch (error) {
    throw new Error('Failed to read recent commits.', {
      cause: error,
    });
  }
}

async function read() {
  const filePath = path.join(process.cwd(), 'data', 'recent-commits.json');

  const json = await readFile(filePath, 'utf8');

  return JSON.parse(json) as RecentCommit[];
}

async function get() {
  const url = process.env.RECENT_COMMIT_URL;

  if (!url) {
    throw new Error('RECENT_COMMIT_URL is not configured.');
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to get recent commits');
  }
  const data = await res.json();
  return data as RecentCommit[];
}
