export interface Podcast {
  title: string;
  date: string;       // ISO date string
  image: string;      // URL to the art
  slug: string;       // used for the [slug] folder
}

export interface Blog {
  title: string;
  date: string;
  image: string;
  slug: string;
  content: string; // or whatever field you use for body
}


