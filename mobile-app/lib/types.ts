// Shared types for mobile app
export interface Author {
  id: string;
  name: string;
  avatar: string | null;
  bio?: string | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon?: string;
  type: string;
  parent_id: string | null;
  sort_order: number;
  posts_count: number;
  courses_count: number;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  type: string;
  reading_time: number | null;
  view_count: number;
  meta?: Record<string, unknown> | null;
  published_at: string | null;
  created_at: string;
  author: Author;
  category: { id: string; name: string; slug: string } | null;
  tags: Tag[];
  comments_count?: number;
}

export interface PostIndex {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  type: string;
  reading_time: number | null;
  view_count: number;
  published_at: string | null;
  author: Author;
  category: { id: string; name: string; slug: string } | null;
  tags: Tag[];
  comments_count: number;
}

export interface SeriesIndex {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  featured_image: string | null;
  level: string;
  duration_hours: number | null;
  lesson_count: number;
  price: string;
  is_free: boolean;
  view_count: number;
  average_rating: number;
  review_count: number;
  enrollment_count: number;
  published_at: string | null;
  author: Author;
  category: { id: string; name: string; slug: string } | null;
  tags: Tag[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured_image: string | null;
  demo_url: string | null;
  github_url: string | null;
  tech_stack: string[];
  published_at: string | null;
}

export interface Bookmark {
  id: string;
  type: 'post' | 'series' | 'showcase';
  itemId: string;
  userId: string;
  createdAt: number;
}
