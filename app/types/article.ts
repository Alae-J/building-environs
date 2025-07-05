export interface Article {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: string;
    imageAlt: string;
    publishDate: string;
    author: string;
    content: {
      sections: ArticleSection[];
    };
  }
  
  export interface ArticleSection {
    type: string;
    content?: string;
    level?: number;
    src?: string;
    alt?: string;
    layout?: string;
    image?: any;
    text?: any;
    left_column?: any;
    right_column?: any;
  }