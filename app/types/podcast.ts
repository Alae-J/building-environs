// app/types/podcast.ts
import { ArticleSection } from '@/app/types/article';

export interface Podcast {
  slug:         string;
  title:        string;
  subtitle?:    string;
  featuredImage: string;          // rename from `image`
  imageAlt:     string;           // make required
  publishDate:  string;           // rename from `date`
  duration:     string;           // this will become `readTime`
  audioUrl:     string;
  excerpt:      string;
  author:       string;
  category:     string;
  content: {                        // match the nested JSON
    sections: ArticleSection[];
  };
}
