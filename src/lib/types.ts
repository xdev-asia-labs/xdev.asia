// Types matching the exported JSON data from Laravel

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  domain?: string;
}

export interface QuizDomain {
  name: string;
  weight?: number;
  lessons: { title: string; slug: string }[];
}

export interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  provider: string;
  level: string;
  duration_minutes: number;
  passing_score: number;
  questions_count: number;
  tags: string[];
  series_slug?: string;
  domains?: QuizDomain[];
  questions: QuizQuestion[];
}

export interface QuizIndex {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  provider: string;
  level: string;
  duration_minutes: number;
  passing_score: number;
  questions_count: number;
  tags: string[];
  series_slug?: string;
}

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
  comments?: Comment[];
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

export interface LessonSummary {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  duration_minutes: number | null;
  is_free: boolean;
  sort_order: number;
  video_url: string | null;
}

export interface Section {
  id: string;
  title: string;
  description: string | null;
  sort_order: number;
  lessons: LessonSummary[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string | null;
  created_at: string;
  user: Author;
}

export interface QuizAnswer {
  id: string;
  answer: string;
  is_correct: boolean;
}

export interface QuizQuestion {
  id: string;
  type: string;
  question: string;
  explanation: string | null;
  points: number;
  answers: QuizAnswer[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string | null;
  time_limit_minutes: number | null;
  passing_score: number;
  questions: QuizQuestion[];
}

export interface Series {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
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
  meta?: Record<string, unknown> | null;
  published_at: string | null;
  created_at: string;
  author: Author;
  category: { id: string; name: string; slug: string } | null;
  tags: Tag[];
  sections: Section[];
  reviews: Review[];
  quizzes: Quiz[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  duration_minutes: number | null;
  is_free: boolean;
  video_url: string | null;
  sort_order: number;
  section_title: string;
  course: { id: string; title: string; slug: string };
}

export interface Comment {
  id: string;
  body: string;
  created_at: string;
  user: Author;
  replies: Comment[];
}

export type Settings = Record<string, string>;
