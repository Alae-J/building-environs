// types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: string;
    imageAlt: string;
    publishedDate?: string;
    categories?: string[];
    author?: string;
  }
  
  export interface SearchFilters {
    searchTerm: string;
    categories: string[];
  }
  
  // types/index.ts
  export * from './blog';
