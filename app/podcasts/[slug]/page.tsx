// app/podcasts/[slug]/page.tsx
import PageLayout from '@/app/components/Layout/PageLayout';
import { getAllPodcasts, getPodcastBySlug } from '@/app/lib/data.server';
import type { Podcast } from '@/app/types/podcast';
import { notFound } from 'next/navigation';
import EpisodeClient from './EpisodeClient'; // <-- only import

export async function generateStaticParams() {
  const pods = await getAllPodcasts();
  return pods.map(p => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export default async function EpisodePage({ params }: Props) {
  let podcast: Podcast;
  try {
    podcast = await getPodcastBySlug(params.slug);
  } catch {
    return notFound();
  }

  return (
    <PageLayout>
      <EpisodeClient podcast={podcast} />
    </PageLayout>
  );
}
