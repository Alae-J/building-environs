'use client'
import ArticleRenderer from '@/app/components/ArticleRenderer'
import PodcastBanner from '@/app/components/PodcastBanner'
import PodcastSlider from '@/app/components/PodcastSlider'
import type { Podcast } from '@/app/types/podcast'

export default function EpisodeClient({ podcast }: { podcast: Podcast }) {
  return (
    <>
      <ArticleRenderer podcast={podcast} />
      <PodcastBanner />
      <PodcastSlider excludeSlug={podcast.slug} />
    </>
  )
}
