// app/lib/data.server.ts
import type { Podcast } from '@/app/types/podcast'
import { promises as fs } from 'fs'
import path from 'path'

// point at the real folder
const PODCAST_DIR = path.join(process.cwd(), 'app', 'data', 'podcasts')

export async function getAllPodcasts(): Promise<Podcast[]> {
  const files = await fs.readdir(PODCAST_DIR)
  const episodes: Podcast[] = []

  for (const file of files) {
    if (!file.endsWith('.json')) continue

    // strip ".json" → slug
    const slug = file.replace(/\.json$/, '')
    const raw  = await fs.readFile(path.join(PODCAST_DIR, file), 'utf-8')
    const data = JSON.parse(raw) as Omit<Podcast, 'slug'>

    episodes.push({ ...data, slug })
  }

  // sort newest-first by publishDate
  episodes.sort((a, b) => {
    const aTime = new Date(a.publishDate).getTime()
    const bTime = new Date(b.publishDate).getTime()
    return bTime - aTime
  })

  return episodes
}

export async function getPodcastBySlug(slug: string): Promise<Podcast> {
  const filePath = path.join(PODCAST_DIR, `${slug}.json`)
  const raw      = await fs.readFile(filePath, 'utf-8')
  const data     = JSON.parse(raw) as Omit<Podcast, 'slug'>
  return { ...data, slug }
}
