export function getYouTubeId(url: string): string {
  if (!url) return '7RUA0IOfar8'
  if (url.includes('v=')) return url.split('v=')[1].split('&')[0]
  return url.split('/').pop() ?? '7RUA0IOfar8'
}