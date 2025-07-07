'use client'
import ArticleRenderer from '@/app/components/ArticleRenderer'
import PodcastBanner from '@/app/components/PodcastBanner'
import type { Podcast } from '@/app/types/podcast'

export default function EpisodeClient({ podcast }: { podcast: Podcast }) {
  return (
    <>
      <ArticleRenderer
        article={{
          id:            podcast.slug,
          slug:          podcast.slug,
          title:         podcast.title,
          excerpt:       podcast.excerpt,
          featuredImage: podcast.featuredImage,
          imageAlt:      podcast.imageAlt,
          publishDate:   podcast.publishDate,
          author:        podcast.author,
          category:      podcast.category,
          readTime:      podcast.duration,
          content:       { sections: podcast.content.sections }
        }}
      />
      <PodcastBanner />
    </>
  )
}
