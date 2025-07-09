'use client'

import PageLayout from '@/app/components/Layout/PageLayout'
import LoadMoreButton from '@/app/components/LoadMoreButton'
import PodcastBanner from '@/app/components/PodcastBanner'
import PodcastGrid from '@/app/components/PodcastGrid'
import { getAllPodcasts } from '@/app/lib/podcasts'
import { useMemo, useState } from 'react'

export default function PodcastsPage() {
  // full data (server‐side fetched)
  const all = useMemo(
    () =>
      getAllPodcasts().map((p) => ({
        id:    p.slug,
        title: p.title,
        date:  p.publishDate,
        image: p.featuredImage,
        href:  `/podcasts/${p.slug}`,
      })),
    []
  )

  // pagination state
  const [page, setPage] = useState(1)
  const pageSize = 10

  // slice out only what we’re showing
  const visible = useMemo(
    () => all.slice(0, page * pageSize),
    [all, page]
  )

  return (
    <PageLayout>
      <PodcastBanner />

      {/* only pass down the current “page” of episodes */}
      <PodcastGrid episodes={visible} />

      {/* show Load More if there’s more to load */}
      {visible.length < all.length && (
        <div className="flex justify-center">
          <LoadMoreButton onClick={() => setPage((p) => p + 1)} />
        </div>
      )}
    </PageLayout>
  )
}
