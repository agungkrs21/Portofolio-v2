import { RecentCommit } from '@/lib/github/types';
import { readFile } from 'fs/promises';
import path from 'path';

export async function readRecentCommits(): Promise<RecentCommit[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'recent-commits.json');

    const json = await readFile(filePath, 'utf8');

    return JSON.parse(json) as RecentCommit[];
  } catch (error) {
    throw new Error('Failed to read recent commits.', {
      cause: error,
    });
  }
}
