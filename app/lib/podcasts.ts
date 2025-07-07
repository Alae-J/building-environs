// app/lib/podcasts.ts
import type { Podcast } from '@/app/types/podcast'

/**
 * This will bundle in every .json under /app/data/podcasts at build time.
 * It never tries to run `fs` at runtime.
 */
const context = (require as any).context(
  '../data/podcasts', // relative to this file
  false,              // do not recurse into subdirectories
  /\.json$/           // match only .json files
)

export function getAllPodcasts(): Podcast[] {
  const episodes: Podcast[] = context.keys().map((filePath: string) => {
    // filePath looks like "./my-slug.json"
    const slug = filePath.replace(/^\.\//, '').replace(/\.json$/, '')
    const data = context(filePath) as Omit<Podcast, 'slug'>
    return { ...data, slug }
  })
  // sort newest-first by publishDate
  return episodes.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
}

export function getPodcastBySlug(slug: string): Podcast {
  const key = `./${slug}.json`
  if (!context.keys().includes(key)) {
    throw new Error(`Podcast with slug "${slug}" not found`)
  }
  const data = context(key) as Omit<Podcast, 'slug'>
  return { ...data, slug }
}
