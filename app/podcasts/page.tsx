// app/podcasts/page.tsx  (a Server Component)
import PageLayout from '@/app/components/Layout/PageLayout'
import PodcastBanner from '@/app/components/PodcastBanner'
import PodcastGrid from '@/app/components/PodcastGrid'
import { getAllPodcasts } from '@/app/lib/podcasts'

export default function PodcastsPage() {
  const podcasts = getAllPodcasts()
  return (
    <PageLayout>
      <PodcastBanner />
      <PodcastGrid episodes={podcasts.map(p => ({
        id:    p.slug,
        title: p.title,
        date:  p.publishDate,
        image: p.featuredImage,
        href:  `/podcasts/${p.slug}`
      }))}/>
    </PageLayout>
)
}
