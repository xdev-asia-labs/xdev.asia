import { readFileSync, readdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Path resolution for dual mode:
 * - npm package: dist/ → ../content/ (bundled alongside dist)
 * - workspace:   dist/ → ../../content/ (parent repo)
 */
const BUNDLED_CONTENT = resolve(__dirname, "../content");
const WORKSPACE_CONTENT = resolve(__dirname, "../../content");
const CONTENT_ROOT = existsSync(BUNDLED_CONTENT) ? BUNDLED_CONTENT : WORKSPACE_CONTENT;

const BUNDLED_DATA = resolve(__dirname, "../data");
const WORKSPACE_DATA = resolve(__dirname, "../../data");
const DATA_ROOT = existsSync(BUNDLED_DATA) ? BUNDLED_DATA : WORKSPACE_DATA;

const SERIES_ROOT = join(CONTENT_ROOT, "series");
const BLOG_ROOT = join(CONTENT_ROOT, "blog");
const SHOWCASE_ROOT = join(CONTENT_ROOT, "showcase");
const PAGES_ROOT = join(CONTENT_ROOT, "pages");

// =====================================================
// Types
// =====================================================

export interface SeriesMeta {
  slug: string;
  title: string;
  description: string;
  category: string; // ai, architecture, devsecops, lap-trinh
  lessonCount: number;
  level: string;
  tags: string[];
  filePath: string;
}

export interface LessonMeta {
  slug: string;
  title: string;
  description: string;
  section: string;
  seriesSlug: string;
  seriesCategory: string;
  sortOrder: number;
  filePath: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  topic: string; // ai, architecture, cloud, database, devops, linux, programming, security
  filePath: string;
}

export interface ShowcaseMeta {
  slug: string;
  title: string;
  description: string;
  filePath: string;
}

// =====================================================
// Load ALL series
// =====================================================

export function loadAllSeries(): SeriesMeta[] {
  if (!existsSync(SERIES_ROOT)) return [];

  const categories = readdirSync(SERIES_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  const series: SeriesMeta[] = [];

  for (const cat of categories) {
    const catDir = join(SERIES_ROOT, cat.name);
    const seriesDirs = readdirSync(catDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const s of seriesDirs) {
      const indexPath = join(catDir, s.name, "index.md");
      if (!existsSync(indexPath)) continue;

      const content = readFileSync(indexPath, "utf-8");
      const meta = parseFrontmatter(content);

      series.push({
        slug: meta.slug || s.name,
        title: meta.title || s.name,
        description: meta.description || "",
        category: cat.name,
        lessonCount: meta.lesson_count || 0,
        level: meta.level || "beginner",
        tags: [], // Tags are nested YAML, simplified
        filePath: indexPath,
      });
    }
  }

  return series;
}

// =====================================================
// Load lessons for a specific series
// =====================================================

export function loadLessonsForSeries(seriesSlug: string): LessonMeta[] {
  // Find the series directory
  const allSeries = loadAllSeries();
  const found = allSeries.find((s) => s.slug === seriesSlug);
  if (!found) return [];

  const seriesDir = dirname(found.filePath);
  const chaptersDir = join(seriesDir, "chapters");

  if (!existsSync(chaptersDir)) return [];

  return loadLessonsFromChapters(chaptersDir, seriesSlug, found.category);
}

function loadLessonsFromChapters(
  chaptersDir: string,
  seriesSlug: string,
  seriesCategory: string
): LessonMeta[] {
  const lessons: LessonMeta[] = [];
  const chapters = readdirSync(chaptersDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const chapter of chapters) {
    const lessonsDir = join(chaptersDir, chapter.name, "lessons");
    if (!existsSync(lessonsDir)) continue;

    const files = readdirSync(lessonsDir)
      .filter((f) => f.endsWith(".md"))
      .sort();

    for (const file of files) {
      const filePath = join(lessonsDir, file);
      const content = readFileSync(filePath, "utf-8");
      const meta = parseFrontmatter(content);

      lessons.push({
        slug: meta.slug || file.replace(".md", ""),
        title: meta.title || file,
        description: meta.description || "",
        section: meta.section_title || chapter.name,
        seriesSlug,
        seriesCategory,
        sortOrder: meta.sort_order || 0,
        filePath,
      });
    }
  }

  return lessons;
}

// =====================================================
// Load ALL lessons across all series
// =====================================================

export function loadAllLessons(): LessonMeta[] {
  if (!existsSync(SERIES_ROOT)) return [];

  const allLessons: LessonMeta[] = [];
  const categories = readdirSync(SERIES_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  for (const cat of categories) {
    const catDir = join(SERIES_ROOT, cat.name);
    const seriesDirs = readdirSync(catDir, { withFileTypes: true })
      .filter((d) => d.isDirectory());

    for (const s of seriesDirs) {
      const chaptersDir = join(catDir, s.name, "chapters");
      if (!existsSync(chaptersDir)) continue;

      const indexPath = join(catDir, s.name, "index.md");
      let seriesSlug = s.name;
      if (existsSync(indexPath)) {
        const meta = parseFrontmatter(readFileSync(indexPath, "utf-8"));
        seriesSlug = meta.slug || s.name;
      }

      allLessons.push(
        ...loadLessonsFromChapters(chaptersDir, seriesSlug, cat.name)
      );
    }
  }

  return allLessons;
}

// =====================================================
// Load blog posts
// =====================================================

export function loadBlogPosts(topic?: string): BlogMeta[] {
  if (!existsSync(BLOG_ROOT)) return [];

  const topics = topic
    ? [topic]
    : readdirSync(BLOG_ROOT, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort();

  const posts: BlogMeta[] = [];

  for (const t of topics) {
    const topicDir = join(BLOG_ROOT, t);
    if (!existsSync(topicDir)) continue;

    const files = readdirSync(topicDir)
      .filter((f) => f.endsWith(".md"))
      .sort();

    for (const file of files) {
      const filePath = join(topicDir, file);
      const content = readFileSync(filePath, "utf-8");
      const meta = parseFrontmatter(content);

      posts.push({
        slug: meta.slug || file.replace(".md", ""),
        title: meta.title || file,
        description: meta.description || "",
        topic: t,
        filePath,
      });
    }
  }

  return posts;
}

// =====================================================
// Load showcase
// =====================================================

export function loadShowcases(): ShowcaseMeta[] {
  if (!existsSync(SHOWCASE_ROOT)) return [];

  const files = readdirSync(SHOWCASE_ROOT)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const filePath = join(SHOWCASE_ROOT, file);
    const content = readFileSync(filePath, "utf-8");
    const meta = parseFrontmatter(content);

    return {
      slug: meta.slug || file.replace(".md", ""),
      title: meta.title || file,
      description: meta.description || "",
      filePath,
    };
  });
}

// =====================================================
// Read content by path or slug
// =====================================================

export function readSeriesIndex(seriesSlug: string): string | null {
  const series = loadAllSeries().find((s) => s.slug === seriesSlug);
  if (!series) return null;
  return readFileSync(series.filePath, "utf-8");
}

export function readLessonContent(slug: string): string | null {
  const lessons = loadAllLessons();
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return null;
  return readFileSync(lesson.filePath, "utf-8");
}

export function readContentFile(relativePath: string): string | null {
  const fullPath = join(CONTENT_ROOT, relativePath);
  if (!existsSync(fullPath)) return null;
  return readFileSync(fullPath, "utf-8");
}

// =====================================================
// Search across everything
// =====================================================

export function searchAllContent(
  query: string,
  maxResults = 20
): Array<{ path: string; title: string; excerpt: string; type: string }> {
  const results: Array<{ path: string; title: string; excerpt: string; type: string }> = [];
  const queryLower = query.toLowerCase();
  const queryTerms = queryLower.split(/\s+/).filter((t) => t.length > 2);

  if (queryTerms.length === 0) return results;

  // Search all content directories
  const dirs: Array<{ dir: string; type: string }> = [
    { dir: SERIES_ROOT, type: "series" },
    { dir: BLOG_ROOT, type: "blog" },
    { dir: SHOWCASE_ROOT, type: "showcase" },
    { dir: PAGES_ROOT, type: "page" },
  ];

  for (const { dir, type } of dirs) {
    if (existsSync(dir)) {
      searchDirectory(dir, queryTerms, results, type, maxResults);
      if (results.length >= maxResults) break;
    }
  }

  return results.slice(0, maxResults);
}

function searchDirectory(
  dir: string,
  queryTerms: string[],
  results: Array<{ path: string; title: string; excerpt: string; type: string }>,
  type: string,
  maxResults: number
) {
  if (!existsSync(dir) || results.length >= maxResults) return;

  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (results.length >= maxResults) break;

    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDirectory(fullPath, queryTerms, results, type, maxResults);
    } else if (entry.name.endsWith(".md")) {
      try {
        const content = readFileSync(fullPath, "utf-8");
        const contentLower = content.toLowerCase();
        const matchCount = queryTerms.filter((t) => contentLower.includes(t)).length;

        if (matchCount >= Math.ceil(queryTerms.length * 0.5)) {
          const meta = parseFrontmatter(content);

          // Find best excerpt
          let excerpt = "";
          for (const term of queryTerms) {
            const idx = contentLower.indexOf(term);
            if (idx !== -1) {
              const start = Math.max(0, idx - 100);
              const end = Math.min(content.length, idx + 200);
              excerpt = content.slice(start, end).trim();
              break;
            }
          }

          results.push({
            path: fullPath.replace(CONTENT_ROOT + "/", ""),
            title: meta.title || entry.name,
            excerpt: excerpt.slice(0, 300),
            type,
          });
        }
      } catch {
        // Skip unreadable files
      }
    }
  }
}

// =====================================================
// Stats
// =====================================================

export function getContentStats(): {
  seriesCount: number;
  lessonCount: number;
  blogPostCount: number;
  showcaseCount: number;
  categories: string[];
  blogTopics: string[];
} {
  const series = loadAllSeries();
  const blogPosts = loadBlogPosts();
  const showcases = loadShowcases();

  // Count lessons across all series
  let lessonCount = 0;
  for (const s of series) {
    lessonCount += s.lessonCount || 0;
  }

  const categories = [...new Set(series.map((s) => s.category))].sort();
  const blogTopics = [...new Set(blogPosts.map((p) => p.topic))].sort();

  return {
    seriesCount: series.length,
    lessonCount,
    blogPostCount: blogPosts.length,
    showcaseCount: showcases.length,
    categories,
    blogTopics,
  };
}

// =====================================================
// Frontmatter parser
// =====================================================

function parseFrontmatter(content: string): Record<string, any> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const yaml = match[1];
  const result: Record<string, any> = {};

  for (const line of yaml.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    if (key.startsWith("-") || key.startsWith(" ")) continue; // Skip nested YAML
    let value = line.slice(colonIdx + 1).trim();

    if (!value || value === ">-" || value === ">") continue; // Skip multi-line values

    // Remove quotes
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1);
    }

    // Parse numbers
    if (/^\d+$/.test(value)) {
      result[key] = parseInt(value, 10);
    } else {
      result[key] = value;
    }
  }

  return result;
}
