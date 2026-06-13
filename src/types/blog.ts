// Sanity has been removed – simplified types without Sanity imports

export type Author = {
  name: string;
  image?: string;
  bio?: string;
  slug?: string;
  _id?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug: string;
  metadata?: string;
  body?: any; // Simplified – no longer depends on PortableTextBlock
  mainImage?: string;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};