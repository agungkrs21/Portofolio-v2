export interface RecentCommit {
  repo: string;
  message: string;
  url: string;
  date: string;
  additions: number;
  deletions: number;
  filesChanged: number;
}
