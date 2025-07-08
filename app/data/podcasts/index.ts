// app/data/podcasts/index.ts
import { Podcast } from '@/app/types/podcast';

// This will be populated with actual podcast imports
// Following the same pattern as news articles
export const podcastMap: Record<string, Podcast> = {
  // Episodes will be imported and mapped here
  // Example:
  // "episode-1-property-investment": episode1,
  // "episode-2-construction-trends": episode2,
};

// Get all podcasts sorted by publish date (newest first)
export function getAllPodcasts(): Podcast[] {
  return Object.values(podcastMap).sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// Get a specific podcast by slug
export function getPodcastBySlug(slug: string): Podcast | null {
  return podcastMap[slug] || null;
}

// Get all podcast slugs for static generation
export function getAllPodcastSlugs(): string[] {
  return Object.keys(podcastMap);
}

// Get featured podcasts (first 3 most recent)
export function getFeaturedPodcasts(): Podcast[] {
  return getAllPodcasts().slice(0, 3);
}

// Get podcast metadata for listing (without full content)
export function getPodcastMetadata(): Array<{
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  author: string;
  duration: string;
  featuredImage: string;
  imageAlt: string;
  excerpt?: string;
}> {
  return getAllPodcasts().map(podcast => ({
    id: podcast.id,
    title: podcast.title,
    slug: podcast.slug,
    publishDate: podcast.publishDate,
    author: podcast.author,
    duration: podcast.duration,
    featuredImage: podcast.featuredImage,
    imageAlt: podcast.imageAlt,
    excerpt: podcast.excerpt,
  }));
}