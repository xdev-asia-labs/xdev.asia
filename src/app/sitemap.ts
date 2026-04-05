export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import {
  getAllPosts,
  getAllSeries,
  getSeriesSlugsWithCategory,
  getSeriesCategories,
  getSeriesLessonSlugs,
  getAvailableTopics,
} from "@/lib/data";

const SITE_URL = "https://xdev.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/series/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/search/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/gioi-thieu/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Blog posts
  const posts = getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.published_at || now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Topic pages
  const topics = getAvailableTopics();
  const topicPages: MetadataRoute.Sitemap = topics.map((topic) => ({
    url: `${SITE_URL}/${topic.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Series category pages
  const seriesCategories = getSeriesCategories();
  const categoryPages: MetadataRoute.Sitemap = seriesCategories.map((cat) => ({
    url: `${SITE_URL}/series/${cat.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Series detail pages
  const seriesSlugsWithCategory = getSeriesSlugsWithCategory();
  const allSeries = getAllSeries();
  const seriesPages: MetadataRoute.Sitemap = seriesSlugsWithCategory.map(({ category, slug }) => {
    const series = allSeries.find((s) => s.slug === slug);
    return {
      url: `${SITE_URL}/series/${category}/${slug}/`,
      lastModified: series?.published_at || now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  // Lesson pages
  const lessonSlugs = getSeriesLessonSlugs();
  const lessonPages: MetadataRoute.Sitemap = lessonSlugs.map(({ seriesSlug, lessonSlug }) => ({
    url: `${SITE_URL}/lessons/${seriesSlug}/${lessonSlug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...postPages,
    ...topicPages,
    ...categoryPages,
    ...seriesPages,
    ...lessonPages,
  ];
}
