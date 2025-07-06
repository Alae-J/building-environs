// app/podcasts/page.tsx
import Parser from 'rss-parser'

import PageLayout from '@/app/components/Layout/PageLayout'
import PodcastBanner from '@/app/components/PodcastBanner'
import PodcastGrid from '@/app/components/PodcastGrid'

export const revalidate = 60 * 60 // re‐validate every hour

type Episode = {
  id: string
  title: string
  date: string
  image: string
  href: string
}

async function fetchEpisodes(): Promise<Episode[]> {
  const parser = new Parser({
    customFields: {
      item: [['itunes:image', 'itunesImage']]
    }
  })

  // You can point this at your CDN proxy if you want
  const feed = await parser.parseURL('https://feeds.buzzsprout.com/1850552.rss')

  return feed.items.map((item) => ({
    id: item.guid ?? item.link!,
    title: item.title ?? '',
    date: item.pubDate ?? '',
    image:
      (item.itunesImage as any)?.['@']?.href ||
      item.enclosure?.url ||
      '/images/placeholder-300x300.png',
    href: item.link ?? '#'
  }))
}

export default async function PodcastsPage() {
  const episodes = await fetchEpisodes()

  return (
    <>
    <PageLayout>
      <PodcastBanner />
      <PodcastGrid episodes={episodes} />
    </PageLayout>
    </>
  )
}
