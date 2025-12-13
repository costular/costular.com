import getReadingTime from 'reading-time';

export function calculateReadingTime(body: string): string {
  const stats = getReadingTime(body);
  return stats.text;
}
