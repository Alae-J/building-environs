// app/podcasts/[slug]/EpisodeClient.tsx
'use client';

import ArticleRenderer from '@/app/components/ArticleRenderer';
import PodcastBanner from '@/app/components/PodcastBanner';
import PodcastSlider from '@/app/components/PodcastSlider';
import type { Podcast } from '@/app/types/podcast';

interface Props {
  podcast: Podcast;
}

export default function EpisodeClient({ podcast }: Props) {
  return (
    <>
      <ArticleRenderer content={podcast} />
      <PodcastBanner />
      <PodcastSlider excludeSlug={podcast.slug} />
    </>
  );
}
