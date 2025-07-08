// app/types/article.ts
export interface Article {
  // make everything that The Podcast JSON provides optional:
  id?: string;
  slug?: string;
  excerpt?: string;
  featuredImage?: string;
  imageAlt?: string;

  // keep these as required:
  title: string;
  publishDate: string;
  author: string;

  // still optional
  category?: string;
  readTime?: string;

  content: {
    sections: ArticleSection[];
  };
}

// Keep this flexible to accept any string since we're adding new types
export type SectionType =
  | 'hero_image'
  | 'hero_banner'
  | 'heading'
  | 'paragraph'
  | 'bullet_list'
  | 'emoji_bullet_list'  // NEW: For bullet lists with emoji bullets
  | 'ordered_list'
  | 'image_with_text'
  | 'text_with_image'
  | 'call_to_action'
  | 'centered_content'
  | 'bold_text'
  | 'bold_paragraph'
  | 'standalone_image'
  | 'italic_text'
  | 'contact_info'
  | 'audio'
  | 'two_column'
  | string; // Allow any string for future extensibility

// Main section interface - flexible to handle all current and future section types
export interface ArticleSection {
  type: string;
  content?: string;
  caption?: string;
  level?: number;
  src?: string;
  alt?: string;
  layout?: string;
  width?: string;
  height?: string;
  
  // For structured content
  image?: ImageBlock;
  text?: TextBlock;
  items?: string[];
  
  // NEW: For emoji bullet lists
  emoji?: string; // The emoji to use as bullet point
  
  // For two-column layouts
  left_column?: TextBlock | ImageBlock;
  right_column?: TextBlock | ImageBlock;
}

export interface ImageBlock {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface TextBlock {
  content: string;
  width?: string;
}

// These specific interfaces can be used for type safety when needed,
// but the main ArticleSection interface handles the JSON imports
export interface StandaloneImageSection extends ArticleSection {
  type: 'standalone_image';
  src: string;
  alt: string;
  width?: string;
  height?: string;
  caption?: string;
  layout: 'full_width';
}

export interface ItalicTextSection extends ArticleSection {
  type: 'italic_text';
  content: string;
  layout: 'full_width';
}

export interface ContactInfoSection extends ArticleSection {
  type: 'contact_info';
  content: string;
  layout: 'full_width';
}

export interface CenteredContentSection extends ArticleSection {
  type: 'centered_content';
  content: string;
  layout: 'full_width';
}

export interface BoldTextSection extends ArticleSection {
  type: 'bold_text';
  content: string;
  layout: 'full_width';
}

export interface BoldParagraphSection extends ArticleSection {
  type: 'bold_paragraph';
  content: string;
  layout: 'full_width';
}

// NEW: Emoji bullet list section
export interface EmojiBulletListSection extends ArticleSection {
  type: 'emoji_bullet_list';
  items: string[];
  emoji: string; // The emoji to use as bullet point (e.g., "✅")
  layout: 'full_width';
}

export interface AudioSection extends ArticleSection {
  type: 'audio';
  audioUrl: string;
  title?: string;        // override the default title shown above the player
  subtitle?: string;     // e.g. podcast name
  thumbnailUrl?: string; // cover art
  duration?: string;     // human-readable, e.g. "01:15:50"
}

export interface HeroBannerSection extends ArticleSection {
  type: 'hero_banner';
  button: { text: string; url: string };
  publishDate: string;
  heading: string;
  image: { src: string; alt: string };
}