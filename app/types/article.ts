// app/types/article.ts
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  publishDate: string;
  author: string;

  // these were missing
  category?: string;
  readTime?: string;

  content: {
    sections: ArticleSection[];
  };
}

// broaden this to accept any string (or at least your new two_column)
export type SectionType =
  | 'hero_image'
  | 'heading'
  | 'paragraph'
  | 'bullet_list'
  | 'image_with_text'
  | 'text_with_image'
  | 'call_to_action'
  | 'two_column'    // <-- if you actually use a two-column section
  ;

// each JSON import will have a raw `string` here, so let's accept that
export interface ArticleSection {
  type: string
  content?: string
  caption?: string
  level?: number
  src?: string
  alt?: string
  layout?: string
  width?: string
  height?: string

  image?: ImageBlock
  text?: TextBlock
  items?: string[]
  left_column?: TextBlock | ImageBlock
  right_column?: TextBlock | ImageBlock
}


export interface ImageBlock {
  src: string;
  alt: string;
  width?: string;
}

export interface TextBlock {
  content: string;
  width?: string;
}
