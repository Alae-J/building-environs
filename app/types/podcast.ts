// app/types/podcast.ts
export interface Podcast {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  author: string;
  duration: string; // "HH:MM:SS" format only
  featuredImage: string; // Non-nullable - always present
  imageAlt: string;
  audioUrl: string;
  excerpt?: string;
  content: {
    sections: PodcastSection[];
  };
}

// Podcast-specific section types
export type PodcastSectionType =
  | 'hero_banner'
  | 'audio'
  | 'paragraph'
  | 'heading'
  | 'bullet_list'
  | 'emoji_bullet_list'  // NEW: For bullet lists with emoji bullets
  | 'ordered_list'
  | 'bold_text'
  | 'italic_text'
  | 'centered_content'
  | 'standalone_image'
  | 'call_to_action'
  | string; // Allow extensibility

// Flexible podcast section interface
export interface PodcastSection {
  type: string;
  content?: string;
  level?: number;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  caption?: string;
  items?: string[];
  
  // NEW: For emoji bullet lists
  emoji?: string; // The emoji to use as bullet point
  
  // For structured content (keeping for compatibility)
  image?: { src: string; alt: string; width?: string; height?: string };
  text?: { content: string; width?: string };
  
  // For hero banner sections
  button?: { text: string; url: string };
  publishDate?: string;
  heading?: string;
  
  // For audio sections
  title?: string;
  subtitle?: string;
  thumbnailUrl?: string;
  audioUrl?: string;
  duration?: string;
}

// Specific typed interfaces for type safety
export interface PodcastHeroBannerSection extends PodcastSection {
  type: 'hero_banner';
  button: { text: string; url: string };
  publishDate: string;
  heading: string;
  image: { src: string; alt: string };
}

export interface PodcastAudioSection extends PodcastSection {
  type: 'audio';
  audioUrl: string;
  title: string;
  subtitle: string;
  thumbnailUrl?: string; // Optional - falls back to episode featuredImage
  duration: string;
}

// NEW: Emoji bullet list section for podcasts
export interface PodcastEmojiBulletListSection extends PodcastSection {
  type: 'emoji_bullet_list';
  items: string[];
  emoji: string; // The emoji to use as bullet point (e.g., "✅")
}

// Utility function to parse duration string to seconds
// Only accepts HH:MM:SS format
export function parseDurationToSeconds(duration: string): number {
  const hhmmssPattern = /^\d{2}:\d{2}:\d{2}$/;
  
  if (!hhmmssPattern.test(duration)) {
    console.error(`Invalid duration format: "${duration}". Expected HH:MM:SS format (e.g., "01:15:30")`);
    return 0;
  }
  
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

// Utility function to format seconds back to HH:MM:SS
// Always returns HH:MM:SS format
export function formatSecondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Utility function to strip episode prefix from title
export function stripEpisodePrefix(title: string): string {
  // Remove patterns like "S4. Ep X." or "S4 Ep X" or "Season 4 Episode X"
  return title.replace(/^(S\d+\.?\s*Ep\s*\d+\.?\s*|Season\s*\d+\s*Episode\s*\d+\s*[\.:]*\s*)/i, '').trim();
}