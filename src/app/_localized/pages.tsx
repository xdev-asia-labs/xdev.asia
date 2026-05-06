import ContentLanguageSwitcher from "@/components/ContentLanguageSwitcher";
import ContentRenderer from "@/components/ContentRenderer";
import { IconArrowRight, IconBook, IconChevronRight, IconClock, IconCode } from "@/components/Icons";
import PostCard from "@/components/PostCard";
import AISearch from "@/components/AISearch";
import SearchClient from "@/components/SearchClient";
import SeriesCard from "@/components/SeriesCard";
import {
  getActiveTagSlugs,
  buildSearchIndex,
  formatDate,
  getAllPosts,
  getAllSeries,
  getAvailableTopics,
  getLesson,
  getPost,
  getPostLanguageLinks,
  getPostSlugs,
  getPostsByTag,
  getPostsByTopic,
  getSeries,
  getSeriesCategories,
  getSeriesByTag,
  getSeriesLanguageLinks,
  getLessonLanguageLinks,
  getSeriesLessonSlugs,
  getSeriesSlugsWithCategory,
  getStaticPage,
  getStaticPageLanguageLinks,
  getTagBySlug,
  type TagStats,
} from "@/lib/data";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://xdev.asia";

function prefix(locale: Locale) {
  return `/${locale}`;
}

function href(locale: Locale, path: string) {
  return localizedPath(locale, path);
}

function itemCountLabel(locale: Locale, count: number): string {
  if (locale === "en") return `${count} items`;
  if (locale === "ja") return `${count}件`;
  if (locale === "zh-tw") return `${count} 個項目`;
  return `${count} nội dung`;
}

function minutesLabel(locale: Locale, minutes: number): string {
  if (locale === "en") return `${minutes} min`;
  if (locale === "ja") return `${minutes}分`;
  if (locale === "zh-tw") return `${minutes} 分鐘`;
  return `${minutes} phút`;
}

export function localizedBlogStaticParams(locale: Locale) {
  return getPostSlugs(locale).map((slug) => ({ slug }));
}

export function localizedTopicStaticParams(locale: Locale) {
  return getAvailableTopics(locale)
    .filter((topic) => topic.postCount > 0)
    .map((topic) => ({ topic: topic.slug }));
}

export function localizedTagStaticParams(locale: Locale) {
  return getActiveTagSlugs(locale).map((tag) => ({ tag }));
}

export function localizedSeriesCategoryStaticParams(locale: Locale) {
  return getSeriesCategories(locale).map((cat) => ({ category: cat.slug }));
}

export function localizedSeriesDetailStaticParams(locale: Locale) {
  return getSeriesSlugsWithCategory(locale).map(({ category, slug }) => ({ category, slug }));
}

export function localizedLessonStaticParams(locale: Locale) {
  return getSeriesLessonSlugs(locale).map(({ seriesSlug, lessonSlug }) => ({
    seriesSlug,
    lessonSlug,
  }));
}

export function localizedStaticPageParams() {
  return [
    { slug: "dieu-khoan-su-dung" },
    { slug: "chinh-sach-quyen-rieng-tu" },
    { slug: "privacy-policy" },
    { slug: "your-privacy-choices" },
    { slug: "xoa-du-lieu-nguoi-dung" },
    { slug: "ve-toi" },
  ];
}

export function localizedBlogMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.nav.blog,
    description: dict.home.latest_posts,
    alternates: { canonical: href(locale, "/blog/") },
  };
}

export function localizedSeriesMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.nav.series,
    description: dict.home.popular_series,
    alternates: { canonical: href(locale, "/series/") },
  };
}

export function localizedTagsMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: "Tags",
    description: dict.home.explore_topics,
    alternates: { canonical: href(locale, "/tags/") },
  };
}

export async function localizedTagMetadata(
  locale: Locale,
  params: Promise<{ tag: string }>
): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug, locale);
  if (!tag || tag.totalCount === 0) return {};
  const canonicalUrl = `${SITE_URL}${href(locale, `/tags/${tagSlug}/`)}`;
  const description = `${itemCountLabel(locale, tag.totalCount)} - ${tag.name} - xDev Asia`;
  return {
    title: `Tag: ${tag.name}`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `Tag: ${tag.name} - xDev Asia`,
      description,
      url: canonicalUrl,
      siteName: "xDev Asia",
      type: "website",
    },
  };
}

export async function localizedTopicMetadata(
  locale: Locale,
  params: Promise<{ topic: string }>
): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = getAvailableTopics(locale).find((item) => item.slug === topicSlug);
  if (!topic) return {};
  const canonicalUrl = `${SITE_URL}${href(locale, `/${topicSlug}/`)}`;
  return {
    title: `${topic.name} - xDev Asia`,
    description: topic.description || topic.name,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${topic.name} - xDev Asia`,
      description: topic.description || topic.name,
      url: canonicalUrl,
      siteName: "xDev Asia",
      type: "website",
    },
  };
}

export async function localizedBlogPostMetadata(
  locale: Locale,
  params: Promise<{ slug: string }>
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
    alternates: { canonical: `${SITE_URL}${href(locale, `/blog/${slug}/`)}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `${SITE_URL}${href(locale, `/blog/${slug}/`)}`,
      siteName: "xDev Asia",
      type: "article",
    },
  };
}

export async function localizedSeriesDetailMetadata(
  locale: Locale,
  params: Promise<{ category: string; slug: string }>
): Promise<Metadata> {
  const { category, slug } = await params;
  const series = getSeries(slug, locale);
  if (!series) return {};
  return {
    title: series.title,
    description: series.description || series.title,
    alternates: { canonical: `${SITE_URL}${href(locale, `/series/${category}/${slug}/`)}` },
  };
}

export async function localizedStaticPageMetadata(
  locale: Locale,
  params: Promise<{ slug: string }>
): Promise<Metadata> {
  const { slug } = await params;
  const page = getStaticPage(slug, locale);
  if (!page) return {};
  return {
    title: page.title,
    alternates: { canonical: href(locale, `/pages/${slug}/`) },
  };
}

export function LocalizedBlogPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const posts = getAllPosts(locale);
  const topics = getAvailableTopics(locale).filter((topic) => topic.postCount > 0);
  const localePrefix = prefix(locale);

  return (
    <div>
      <section className="hero-gradient py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <IconCode size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {dict.nav.blog}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {dict.home.latest_posts}
          </h1>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
            {posts.length} {dict.nav.blog.toLowerCase()}
          </p>

          {topics.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              <Link href={href(locale, "/blog/")} className="topic-tab topic-tab-active">
                {dict.common.view_all}
                <span className="topic-tab-count">{posts.length}</span>
              </Link>
              {topics.map((topic) => (
                <Link key={topic.slug} href={href(locale, `/${topic.slug}/`)} className="topic-tab">
                  {topic.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              priority={index < 3}
              localePrefix={localePrefix}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export function LocalizedTagsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const tags = getActiveTagSlugs(locale)
    .map((slug) => getTagBySlug(slug, locale))
    .filter((tag): tag is TagStats => Boolean(tag));

  return (
    <div>
      <section className="hero-gradient py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <IconCode size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Tags</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            Tags
          </h1>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
            {tags.length} tags
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <Link key={tag.slug} href={href(locale, `/tags/${tag.slug}/`)} className="tag-pill text-sm px-3 py-1.5">
                #{tag.name}
                <span className="ml-1 text-zinc-400">({tag.totalCount})</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <IconCode size={48} className="text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500">{dict.search.no_results}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export async function LocalizedTagDetailPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagSlug } = await params;
  const tagData = getTagBySlug(tagSlug, locale);
  const posts = getPostsByTag(tagSlug, locale);
  const series = getSeriesByTag(tagSlug, locale);
  const dict = getDictionary(locale);
  const localePrefix = prefix(locale);

  if (!tagData || (posts.length === 0 && series.length === 0)) {
    notFound();
  }

  return (
    <div>
      <section className="hero-gradient py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6">
            <Link href={href(locale, "/")} className="hover:text-brand-600 transition-colors">xDev</Link>
            <IconChevronRight size={14} className="text-zinc-300" />
            <Link href={href(locale, "/tags/")} className="hover:text-brand-600 transition-colors">Tags</Link>
            <IconChevronRight size={14} className="text-zinc-300" />
            <span className="text-zinc-400">{tagData.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <IconCode size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Tag</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">#{tagData.name}</h1>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
            {itemCountLabel(locale, tagData.totalCount)}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <IconCode size={18} className="text-brand-600" />
            <h2 className="text-xl font-bold text-zinc-900">{dict.nav.blog} ({posts.length})</h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} priority={index < 3} localePrefix={localePrefix} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">{dict.search.no_results}</p>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-5">
            <IconBook size={18} className="text-brand-600" />
            <h2 className="text-xl font-bold text-zinc-900">{dict.nav.series} ({series.length})</h2>
          </div>

          {series.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {series.map((item, index) => (
                <SeriesCard
                  key={item.id}
                  series={item}
                  priority={index < 2}
                  basePath={`${localePrefix}/series/${item.category?.slug || "uncategorized"}`}
                  localePrefix={localePrefix}
                />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">{dict.search.no_results}</p>
          )}
        </div>
      </section>
    </div>
  );
}

export async function LocalizedTopicPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicSlug } = await params;
  const topics = getAvailableTopics(locale).filter((topic) => topic.postCount > 0);
  const currentTopic = topics.find((topic) => topic.slug === topicSlug);
  if (!currentTopic) notFound();

  const dict = getDictionary(locale);
  const allPosts = getAllPosts(locale);
  const posts = getPostsByTopic(topicSlug, locale);
  const localePrefix = prefix(locale);

  return (
    <div>
      <section className="hero-gradient py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6">
            <Link href={href(locale, "/")} className="hover:text-brand-600 transition-colors">xDev</Link>
            <IconChevronRight size={14} className="text-zinc-300" />
            <span className="text-zinc-400">{currentTopic.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <IconCode size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">{currentTopic.name}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {currentTopic.name}
          </h1>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
            {currentTopic.description || `${posts.length} ${dict.nav.blog.toLowerCase()}`}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link href={href(locale, "/blog/")} className="topic-tab">
              {dict.common.view_all}
              <span className="topic-tab-count">{allPosts.length}</span>
            </Link>
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={href(locale, `/${topic.slug}/`)}
                className={`topic-tab ${topic.slug === topicSlug ? "topic-tab-active" : ""}`}
              >
                {topic.name}
                {topic.slug === topicSlug && (
                  <span className="topic-tab-count">{posts.length}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} priority={index < 3} localePrefix={localePrefix} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <IconCode size={48} className="text-zinc-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-zinc-700 mb-2">{dict.search.no_results}</h3>
            <Link href={href(locale, "/blog/")} className="link-brand">
              {dict.nav.view_all_posts}
              <IconArrowRight size={14} />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export async function LocalizedBlogPostPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug, locale);
  if (!post) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
        <Link href={href(locale, "/")} className="hover:text-brand-600 transition-colors">
          xDev
        </Link>
        <IconChevronRight size={14} className="text-zinc-300" />
        <Link href={href(locale, "/blog/")} className="hover:text-brand-600 transition-colors">
          {dict.nav.blog}
        </Link>
      </nav>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
        <span>{post.author.name}</span>
        {post.published_at && <time dateTime={post.published_at}>{formatDate(post.published_at, locale)}</time>}
        {post.reading_time && (
          <span className="inline-flex items-center gap-1">
            <IconClock size={14} />
            {minutesLabel(locale, post.reading_time)}
          </span>
        )}
      </div>
      <ContentLanguageSwitcher
        links={getPostLanguageLinks(post)}
        currentLocale={locale}
        className="mb-8"
      />
      <ContentRenderer html={post.content} />
    </article>
  );
}

export function LocalizedSeriesPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const seriesItems = getAllSeries(locale);
  const categories = getSeriesCategories(locale);
  const localePrefix = prefix(locale);

  return (
    <div>
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
              <IconBook size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {dict.nav.series}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {dict.home.popular_series}
          </h1>
          <p className="text-zinc-500 max-w-2xl">{seriesItems.length} {dict.nav.series}</p>
        </div>
      </section>

      {categories.map((cat) => {
        const items = seriesItems.filter((s) => s.category?.slug === cat.slug);
        if (items.length === 0) return null;
        return (
          <section key={cat.slug} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-900">{cat.name}</h2>
              <Link href={href(locale, `/series/${cat.slug}/`)} className="link-brand text-sm">
                {dict.common.view_all}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {items.map((series, index) => (
                <SeriesCard
                  key={series.id}
                  series={series}
                  priority={index === 0}
                  basePath={`${localePrefix}/series/${series.category?.slug || "uncategorized"}`}
                  localePrefix={localePrefix}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function LocalizedSearchPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const searchItems = buildSearchIndex(locale);
  const itemsJson = JSON.stringify(
    searchItems.map(({ title, slug, excerpt, category, tags, url }) => ({
      title,
      slug,
      excerpt,
      category,
      tags,
      url,
    }))
  );

  return (
    <div>
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {dict.nav.search}
          </h1>
          <p className="text-zinc-500 max-w-2xl">{dict.search.placeholder}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <AISearch itemsJson={itemsJson} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        <SearchClient items={searchItems} />
      </section>
    </div>
  );
}

export async function LocalizedSeriesCategoryPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categories = getSeriesCategories(locale);
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();
  const seriesItems = getAllSeries(locale).filter((s) => s.category?.slug === category);
  const localePrefix = prefix(locale);
  const dict = getDictionary(locale);

  return (
    <div>
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            {cat.name}
          </h1>
          <p className="text-zinc-500 max-w-2xl">{seriesItems.length} {dict.nav.series}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {seriesItems.map((series, index) => (
            <SeriesCard
              key={series.id}
              series={series}
              priority={index === 0}
              basePath={`${localePrefix}/series/${series.category?.slug || "uncategorized"}`}
              localePrefix={localePrefix}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function LocalizedSeriesDetailPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const series = getSeries(slug, locale);
  if (!series) notFound();
  if ((series.category?.slug || "uncategorized") !== category) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
        <Link href={href(locale, "/series/")} className="hover:text-brand-600 transition-colors">
          {dict.nav.series}
        </Link>
        <IconChevronRight size={14} className="text-zinc-300" />
        <span>{series.category?.name}</span>
      </nav>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
        {series.title}
      </h1>
      {series.description && <p className="text-lg text-zinc-500 mb-8">{series.description}</p>}
      <ContentLanguageSwitcher
        links={getSeriesLanguageLinks(series)}
        currentLocale={locale}
        className="mb-8"
      />
      {series.content && <ContentRenderer html={series.content} />}
      {series.sections.length > 0 && (
        <div className="mt-10 space-y-5">
          {series.sections.map((section) => (
            <section key={section.id} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h2 className="text-lg font-bold text-zinc-900 mb-3">{section.title}</h2>
              <div className="space-y-2">
                {section.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={href(locale, `/lessons/${series.slug}/${lesson.slug}/`)}
                    className="flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-brand-600"
                  >
                    <span>{lesson.title}</span>
                    {lesson.duration_minutes && (
                      <span className="text-xs text-zinc-400">{minutesLabel(locale, lesson.duration_minutes)}</span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}

export async function LocalizedLessonPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ seriesSlug: string; lessonSlug: string }>;
}) {
  const { seriesSlug, lessonSlug } = await params;
  const lesson = getLesson(seriesSlug, lessonSlug, locale);
  if (!lesson) notFound();
  const dict = getDictionary(locale);
  const series = getSeries(seriesSlug, locale);
  const seriesHref = series
    ? href(locale, `/series/${series.category?.slug || "uncategorized"}/${series.slug}/`)
    : href(locale, "/series/");

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
        <Link href={href(locale, `/series/`)} className="hover:text-brand-600 transition-colors">
          {dict.nav.series}
        </Link>
        <IconChevronRight size={14} className="text-zinc-300" />
        <Link
          href={seriesHref}
          className="hover:text-brand-600 transition-colors"
        >
          {lesson.course.title}
        </Link>
      </nav>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
        {lesson.title}
      </h1>
      {lesson.description && <p className="text-lg text-zinc-500 mb-8">{lesson.description}</p>}
      {series && (
        <ContentLanguageSwitcher
          links={getLessonLanguageLinks(series, lesson)}
          currentLocale={locale}
          className="mb-8"
        />
      )}
      <ContentRenderer html={lesson.content} />
    </article>
  );
}

export async function LocalizedStaticPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getStaticPage(slug, locale);
  if (!page) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-8">
        {page.title}
      </h1>
      <ContentLanguageSwitcher
        links={getStaticPageLanguageLinks(slug)}
        currentLocale={locale}
        className="mb-8"
      />
      <ContentRenderer html={page.content} />
    </article>
  );
}
