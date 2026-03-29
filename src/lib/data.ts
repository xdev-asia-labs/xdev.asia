import fs from "fs";
import path from "path";
import { listMdxRelativePaths, listMdxSlugs, readMdxDocument, readMdxDocumentByRelativePath, renderMdxBodyToHtml } from "./content";
import type {
  PostIndex,
  Post,
  SeriesIndex,
  Series,
  Lesson,
  LessonSummary,
  Section,
  Category,
  Tag,
  Author,
  Settings,
  Review,
  Comment,
} from "./types";

const dataDir = path.join(process.cwd(), "data");

function readJSON<T>(filePath: string): T {
  const raw = fs.readFileSync(path.join(dataDir, filePath), "utf-8");
  return JSON.parse(raw) as T;
}

function fileExists(filePath: string): boolean {
  return fs.existsSync(path.join(dataDir, filePath));
}

type PostFrontmatter = Omit<Post, "content" | "comments"> & {
  comments?: Comment[];
  comments_count?: number;
};

type SeriesFrontmatter = Omit<Series, "content">;
type LessonFrontmatter = Omit<Lesson, "content" | "course"> & {
  course?: Lesson["course"];
  course_id?: string;
  course_title?: string;
  course_slug?: string;
};

function normalizeLessonSlugFromPath(lessonPath: string): string {
  const fileName = lessonPath.split("/").at(-1) || lessonPath;
  return fileName.replace(/^\d+-/, "");
}

function getLessonMdxDocument(seriesSlug: string, lessonSlug: string): { data: LessonFrontmatter; content: string } | null {
  const directDoc = readMdxDocument<LessonFrontmatter>(`series/${seriesSlug}/chapters`, lessonSlug);
  if (directDoc) return directDoc;

  const lessonPaths = listMdxRelativePaths(`series/${seriesSlug}`)
    .filter((relativePath) => relativePath.includes("/lessons/") && !relativePath.endsWith("/index"));
  for (const lessonPath of lessonPaths) {
    const mdxLesson = readMdxDocumentByRelativePath<LessonFrontmatter>(`series/${seriesSlug}`, lessonPath);
    if (!mdxLesson) continue;

    const frontmatterSlug = mdxLesson.data.slug || "";
    const pathSlug = normalizeLessonSlugFromPath(lessonPath);
    if (frontmatterSlug === lessonSlug || pathSlug === lessonSlug) {
      return mdxLesson;
    }
  }

  return null;
}

function sortByPublishedDate<T extends { published_at?: string | null; created_at?: string }>(items: T[]): T[] {
  return [...items].sort((left, right) => {
    const leftValue = new Date(left.published_at || left.created_at || 0).getTime();
    const rightValue = new Date(right.published_at || right.created_at || 0).getTime();
    return rightValue - leftValue;
  });
}

function postFromDocument(data: PostFrontmatter, content?: string): PostIndex {
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    featured_image: data.featured_image,
    type: data.type,
    reading_time: data.reading_time,
    view_count: data.view_count,
    published_at: data.published_at,
    author: data.author,
    category: data.category,
    tags: data.tags,
    comments_count: data.comments_count ?? data.comments?.length ?? 0,
  } satisfies PostIndex;
}

function collectPostsFromCollection(collection: string): PostIndex[] {
  // Use recursive reading to handle category subdirectories
  const relativePaths = listMdxRelativePaths(collection);
  if (relativePaths.length === 0) return [];

  return relativePaths
    .map((relPath) => {
      const document = readMdxDocumentByRelativePath<PostFrontmatter>(collection, relPath);
      if (!document) return null;
      return postFromDocument(document.data);
    })
    .filter((post): post is PostIndex => post !== null);
}

function getAllPostsFromMdx(): PostIndex[] {
  // Try content/blog/ first (new structure), fallback to content/posts/
  let posts = collectPostsFromCollection("blog");
  if (posts.length === 0) {
    posts = collectPostsFromCollection("posts");
  }
  return sortByPublishedDate(posts);
}

function getPostFromMdx(slug: string): Post | null {
  // Search in content/blog/ recursively, then fallback to content/posts/
  for (const collection of ["blog", "posts"]) {
    const relativePaths = listMdxRelativePaths(collection);
    for (const relPath of relativePaths) {
      const document = readMdxDocumentByRelativePath<PostFrontmatter>(collection, relPath);
      if (!document) continue;
      if (document.data.slug === slug) {
        return {
          ...document.data,
          comments: document.data.comments ?? [],
          content: renderMdxBodyToHtml(document.content),
        } satisfies Post;
      }
    }
  }
  return null;
}

// News (content/news/)
function getAllNewsFromMdx(): PostIndex[] {
  const posts = collectPostsFromCollection("news");
  return sortByPublishedDate(posts);
}

function getNewsFromMdx(slug: string): Post | null {
  const document = readMdxDocument<PostFrontmatter>("news", slug);
  if (!document) return null;
  return {
    ...document.data,
    comments: document.data.comments ?? [],
    content: renderMdxBodyToHtml(document.content),
  } satisfies Post;
}

function getAllSeriesFromMdx(): SeriesIndex[] {
  const series = listMdxSlugs("series")
    .map((slug) => {
      const document = readMdxDocument<SeriesFrontmatter>("series", slug);
      if (!document) return null;

      const data = document.data;
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        description: data.description,
        featured_image: data.featured_image,
        level: data.level,
        duration_hours: data.duration_hours,
        lesson_count: data.lesson_count,
        price: data.price,
        is_free: data.is_free,
        view_count: data.view_count,
        average_rating: data.average_rating,
        review_count: data.review_count,
        enrollment_count: data.enrollment_count,
        published_at: data.published_at,
        author: data.author,
        category: data.category,
        tags: data.tags,
      } satisfies SeriesIndex;
    })
    .filter((item): item is SeriesIndex => item !== null);

  return sortByPublishedDate(series);
}

function getSeriesFromMdx(slug: string): Series | null {
  const document = readMdxDocument<SeriesFrontmatter>("series", slug);
  if (!document) return null;

  return normalizeSeries({
    ...document.data,
    content: renderMdxBodyToHtml(document.content),
  } satisfies Series);
}

function createFallbackSections(series: Series): Section[] {
  if (series.sections.length > 0) return series.sections;

  const totalLessons = Math.max(series.lesson_count || 0, series.content ? 1 : 0);
  if (totalLessons <= 0) return [];

  const totalMinutes = Math.max(0, Math.round((series.duration_hours || 0) * 60));
  const durationPerLesson = totalMinutes > 0 ? Math.max(5, Math.round(totalMinutes / totalLessons)) : null;

  const lessons: LessonSummary[] = Array.from({ length: totalLessons }, (_, idx) => {
    const number = idx + 1;
    return {
      id: `${series.id}-lesson-${number}`,
      title: number === 1 ? "Bai 1: Tong quan khoa hoc" : `Bai ${number}`,
      slug: number === 1 ? "tong-quan" : `bai-${number}`,
      description: number === 1 ? (series.description || "Tong quan khoa hoc") : `Noi dung bai ${number} cua series ${series.title}.`,
      duration_minutes: durationPerLesson,
      is_free: series.is_free,
      sort_order: idx,
      video_url: null,
    };
  });

  return [
    {
      id: `${series.id}-section-1`,
      title: "Lo trinh bai hoc",
      description: "Danh sach bai hoc tu dong tao tu du lieu series.",
      sort_order: 0,
      lessons,
    },
  ];
}

function normalizeSeries(series: Series): Series {
  return {
    ...series,
    sections: createFallbackSections(series),
  };
}

// Settings
export function getSettings(): Settings {
  return readJSON<Settings>("settings.json");
}

// Categories
export function getCategories(): Category[] {
  return readJSON<Category[]>("categories.json");
}

export function getBlogCategories(): Category[] {
  return getCategories().filter((c) => c.type === "blog");
}

export function getSeriesCategories(): Category[] {
  return getCategories().filter((c) => c.type === "course");
}

// Tags
export function getTags(): Tag[] {
  return readJSON<Tag[]>("tags.json");
}

// Authors
export function getAuthors(): Author[] {
  return readJSON<Author[]>("authors.json");
}

export function getAuthorById(id: string): Author | null {
  const authors = getAuthors();
  return authors.find((a) => a.id === id) ?? null;
}

// Posts (content/blog/)
export function getAllPosts(): PostIndex[] {
  return getAllPostsFromMdx();
}

export function getPost(slug: string): Post | null {
  return getPostFromMdx(slug);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

// News (content/news/)
export function getAllNews(): PostIndex[] {
  return getAllNewsFromMdx();
}

export function getNews(slug: string): Post | null {
  return getNewsFromMdx(slug);
}

export function getNewsSlugs(): string[] {
  return getAllNews().map((p) => p.slug);
}

// AI Blog (content/ai/blog/)
function getAllAIPostsFromMdx(): PostIndex[] {
  const posts = collectPostsFromCollection("ai/blog");
  return sortByPublishedDate(posts);
}

function getAIPostFromMdx(slug: string): Post | null {
  for (const relPath of listMdxRelativePaths("ai/blog")) {
    const document = readMdxDocumentByRelativePath<PostFrontmatter>("ai/blog", relPath);
    if (!document) continue;
    if (document.data.slug === slug) {
      return {
        ...document.data,
        comments: document.data.comments ?? [],
        content: renderMdxBodyToHtml(document.content),
      } satisfies Post;
    }
  }
  return null;
}

export function getAllAIPosts(): PostIndex[] {
  return getAllAIPostsFromMdx();
}

export function getAIPost(slug: string): Post | null {
  return getAIPostFromMdx(slug);
}

export function getAIPostSlugs(): string[] {
  return getAllAIPosts().map((p) => p.slug);
}

// AI Series (content/ai/series/)
function getAllAISeriesFromMdx(): SeriesIndex[] {
  const series = listMdxSlugs("ai/series")
    .map((slug) => {
      const document = readMdxDocument<SeriesFrontmatter>("ai/series", slug);
      if (!document) return null;

      const data = document.data;
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        description: data.description,
        featured_image: data.featured_image,
        level: data.level,
        duration_hours: data.duration_hours,
        lesson_count: data.lesson_count,
        price: data.price,
        is_free: data.is_free,
        view_count: data.view_count,
        average_rating: data.average_rating,
        review_count: data.review_count,
        enrollment_count: data.enrollment_count,
        published_at: data.published_at,
        author: data.author,
        category: data.category,
        tags: data.tags,
      } satisfies SeriesIndex;
    })
    .filter((item): item is SeriesIndex => item !== null);

  return sortByPublishedDate(series);
}

function getAISeriesFromMdx(slug: string): Series | null {
  const document = readMdxDocument<SeriesFrontmatter>("ai/series", slug);
  if (!document) return null;

  return normalizeSeries({
    ...document.data,
    content: renderMdxBodyToHtml(document.content),
  } satisfies Series);
}

export function getAllAISeries(): SeriesIndex[] {
  return getAllAISeriesFromMdx();
}

export function getAISeries(slug: string): Series | null {
  return getAISeriesFromMdx(slug);
}

export function getAISeriesSlugs(): string[] {
  return getAllAISeries().map((item) => item.slug);
}

function getAILessonMdxDocument(seriesSlug: string, lessonSlug: string): { data: LessonFrontmatter; content: string } | null {
  const directDoc = readMdxDocument<LessonFrontmatter>(`ai/series/${seriesSlug}/chapters`, lessonSlug);
  if (directDoc) return directDoc;

  const relativePaths = listMdxRelativePaths(`ai/series/${seriesSlug}`)
    .filter((p) => p.includes("/lessons/") && !p.endsWith("/index"));

  for (const lessonPath of relativePaths) {
    const mdxLesson = readMdxDocumentByRelativePath<LessonFrontmatter>(`ai/series/${seriesSlug}`, lessonPath);
    if (!mdxLesson) continue;
    const frontmatterSlug = mdxLesson.data.slug;
    const pathSlug = normalizeLessonSlugFromPath(lessonPath);
    if (frontmatterSlug === lessonSlug || pathSlug === lessonSlug) {
      return mdxLesson;
    }
  }

  return null;
}

export function getAILesson(seriesSlug: string, lessonSlug: string): Lesson | null {
  const mdxLesson = getAILessonMdxDocument(seriesSlug, lessonSlug);
  if (mdxLesson) {
    const frontmatter = mdxLesson.data;
    const course = frontmatter.course ?? {
      id: frontmatter.course_id ?? "",
      title: frontmatter.course_title ?? "",
      slug: frontmatter.course_slug ?? seriesSlug,
    };
    return {
      id: frontmatter.id,
      title: frontmatter.title,
      slug: frontmatter.slug,
      description: frontmatter.description,
      content: renderMdxBodyToHtml(mdxLesson.content),
      duration_minutes: frontmatter.duration_minutes,
      is_free: frontmatter.is_free,
      video_url: frontmatter.video_url,
      sort_order: frontmatter.sort_order,
      section_title: frontmatter.section_title ?? "",
      course,
    } satisfies Lesson;
  }

  // Fallback: from series sections
  const series = getAISeries(seriesSlug);
  if (!series) return null;

  for (const section of series.sections) {
    const lesson = section.lessons.find((l) => l.slug === lessonSlug);
    if (!lesson) continue;

    const generatedContent =
      lesson.slug === "tong-quan" && series.content
        ? series.content
        : `<h2>${lesson.title}</h2><p>Nội dung bài học đang được cập nhật.</p><p><a href="/ai/series/${series.slug}/">Mở trang series</a></p>`;

    return {
      id: lesson.id,
      title: lesson.title,
      slug: lesson.slug,
      description: lesson.description,
      content: generatedContent,
      duration_minutes: lesson.duration_minutes,
      is_free: lesson.is_free,
      video_url: lesson.video_url,
      sort_order: lesson.sort_order,
      section_title: section.title,
      course: {
        id: series.id,
        title: series.title,
        slug: series.slug,
      },
    };
  }

  return null;
}

export function getAISeriesLessonSlugs(): { seriesSlug: string; lessonSlug: string }[] {
  const seriesItems = getAllAISeries();
  const slugs: { seriesSlug: string; lessonSlug: string }[] = [];

  for (const series of seriesItems) {
    const mdxLessonPaths = listMdxRelativePaths(`ai/series/${series.slug}`)
      .filter((relativePath) => relativePath.includes("/lessons/") && !relativePath.endsWith("/index"));
    if (mdxLessonPaths.length > 0) {
      const uniqueSlugs = new Set<string>();
      for (const lessonPath of mdxLessonPaths) {
        const mdxLesson = readMdxDocumentByRelativePath<LessonFrontmatter>(`ai/series/${series.slug}`, lessonPath);
        if (!mdxLesson) continue;
        const lessonSlug = mdxLesson.data.slug || normalizeLessonSlugFromPath(lessonPath) || "";
        if (!lessonSlug) continue;
        uniqueSlugs.add(lessonSlug);
      }
      for (const lessonSlug of uniqueSlugs) {
        slugs.push({ seriesSlug: series.slug, lessonSlug });
      }
      continue;
    }

    const fullSeries = getAISeries(series.slug);
    if (!fullSeries) continue;
    for (const section of fullSeries.sections) {
      for (const lesson of section.lessons) {
        slugs.push({ seriesSlug: series.slug, lessonSlug: lesson.slug });
      }
    }
  }
  return slugs;
}

// Series (content/series/)
export function getAllSeries(): SeriesIndex[] {
  return getAllSeriesFromMdx();
}

export function getSeries(slug: string): Series | null {
  return getSeriesFromMdx(slug);
}

export function getSeriesSlugs(): string[] {
  return getAllSeries().map((item) => item.slug);
}

// Lessons
export function getLesson(
  seriesSlug: string,
  lessonSlug: string
): Lesson | null {
  const mdxLesson = getLessonMdxDocument(seriesSlug, lessonSlug);
  if (mdxLesson) {
    const frontmatter = mdxLesson.data;
    const course = frontmatter.course ?? {
      id: frontmatter.course_id ?? "",
      title: frontmatter.course_title ?? "",
      slug: frontmatter.course_slug ?? seriesSlug,
    };

    return {
      id: frontmatter.id,
      title: frontmatter.title,
      slug: frontmatter.slug,
      description: frontmatter.description,
      content: renderMdxBodyToHtml(mdxLesson.content),
      duration_minutes: frontmatter.duration_minutes,
      is_free: frontmatter.is_free,
      video_url: frontmatter.video_url,
      sort_order: frontmatter.sort_order,
      section_title: frontmatter.section_title,
      course,
    } satisfies Lesson;
  }

  const filePath = `lessons/${seriesSlug}/${lessonSlug}.json`;
  if (fileExists(filePath)) {
    return readJSON<Lesson>(filePath);
  }

  const series = getSeries(seriesSlug);
  if (!series) return null;

  for (const section of series.sections) {
    const lesson = section.lessons.find((l) => l.slug === lessonSlug);
    if (!lesson) continue;

    const generatedContent =
      lesson.slug === "tong-quan" && series.content
        ? series.content
          : `<h2>${lesson.title}</h2><p>Noi dung bai hoc dang duoc cap nhat. Trong thoi gian cho doi, ban co the tham khao trang series de theo lo trinh day du.</p><p><a href=\"/series/${series.slug}/\">Mo trang series</a></p>`;

    return {
      id: lesson.id,
      title: lesson.title,
      slug: lesson.slug,
      description: lesson.description,
      content: generatedContent,
      duration_minutes: lesson.duration_minutes,
      is_free: lesson.is_free,
      video_url: lesson.video_url,
      sort_order: lesson.sort_order,
      section_title: section.title,
      course: {
        id: series.id,
        title: series.title,
        slug: series.slug,
      },
    };
  }

  return null;
}

export function getSeriesLessonSlugs(): { seriesSlug: string; lessonSlug: string }[] {
  const seriesItems = getAllSeries();
  const slugs: { seriesSlug: string; lessonSlug: string }[] = [];

  for (const series of seriesItems) {
    const mdxLessonPaths = listMdxRelativePaths(`series/${series.slug}`)
      .filter((relativePath) => relativePath.includes("/lessons/") && !relativePath.endsWith("/index"));
    if (mdxLessonPaths.length > 0) {
      const uniqueSlugs = new Set<string>();
      for (const lessonPath of mdxLessonPaths) {
        const mdxLesson = readMdxDocumentByRelativePath<LessonFrontmatter>(`series/${series.slug}`, lessonPath);
        if (!mdxLesson) continue;

        const lessonSlug = mdxLesson.data.slug || normalizeLessonSlugFromPath(lessonPath) || "";
        if (!lessonSlug) continue;
        uniqueSlugs.add(lessonSlug);
      }

      for (const lessonSlug of uniqueSlugs) {
        slugs.push({ seriesSlug: series.slug, lessonSlug });
      }
      continue;
    }

    const fullSeries = getSeries(series.slug);
    if (!fullSeries) continue;
    for (const section of fullSeries.sections) {
      for (const lesson of section.lessons) {
        slugs.push({ seriesSlug: series.slug, lessonSlug: lesson.slug });
      }
    }
  }
  return slugs;
}

// Reviews
export function getAllReviews(): Review[] {
  return readJSON<Review[]>("reviews.json");
}

// Helpers
export function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDuration(minutes: number | null): string {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} phút`;
  if (m === 0) return `${h} giờ`;
  return `${h} giờ ${m} phút`;
}
