// type 2026-07-05T15:59:12Z
export function formatDate(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    -days,
    'day',
  );
}
