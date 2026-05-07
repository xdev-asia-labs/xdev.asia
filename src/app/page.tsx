import HeroBanner2026 from "@/components/HeroBanner2026";
import { IconArrowRight, IconBook, IconBrain, IconCode } from "@/components/Icons";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import PostCard from "@/components/PostCard";
import ScrollReveal from "@/components/ScrollReveal";
import SeriesCard from "@/components/SeriesCard";
import SkeletonImage from "@/components/SkeletonImage";
import { formatDate, getAllPosts, getAllSeries, getSeriesByCategory, getSettings } from "@/lib/data";
import { buildKnowledgeGraph } from "@/lib/graph";
import { DEFAULT_LOCALE, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL, jsonLdScriptContent } from "@/lib/seo";
import { getValidImageUrl } from "@/utils/image";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const HOME_COPY: Record<Locale, {
    knowledgeTitle: string;
    knowledgeSubtitle: (nodes: number, edges: number) => string;
    knowledgeCta: string;
    aiTitle: string;
    aiSubtitle: string;
    aiViewAll: string;
    featuredSeriesTitle: string;
    featuredSeriesSubtitle: string;
    latestPostsTitle: string;
    latestPostsSubtitle: string;
    ctaTitle: string;
    ctaBody: string;
    ctaSeries: string;
    ctaBlog: string;
    greetingPrefix: string;
    heroSeriesCta: string;
    heroBlogCta: string;
    postStatLabel: string;
    seriesStatLabel: string;
    minutesRead: (minutes: number) => string;
}> = {
    vi: {
        knowledgeTitle: "Bản đồ tri thức",
        knowledgeSubtitle: (nodes, edges) => `Khám phá mối liên kết giữa ${nodes} chủ đề và ${edges} liên kết.`,
        knowledgeCta: "Xem toàn màn hình",
        aiTitle: "Chuỗi bài học AI",
        aiSubtitle: "Từ Machine Learning, Deep Learning đến LLM, Fine-tuning, RAG và MLOps - tất cả đều hands-on.",
        aiViewAll: "Xem tất cả AI Series",
        featuredSeriesTitle: "Series nổi bật",
        featuredSeriesSubtitle: "Kubernetes, Nginx, PostgreSQL, Spring Boot - phát triển kỹ năng từ cơ bản đến nâng cao.",
        latestPostsTitle: "Bài viết mới nhất",
        latestPostsSubtitle: "Cập nhật tin tức, kiến thức công nghệ mới nhất.",
        ctaTitle: "Cùng nhau học hỏi tại",
        ctaBody: "Blog, series, và dự án open source - tất cả đều miễn phí. Mình viết từ kinh nghiệm thực tế hàng ngày.",
        ctaSeries: "Xem Series",
        ctaBlog: "Đọc Blog",
        greetingPrefix: "Xin chào, mình là",
        heroSeriesCta: "Khám phá Series",
        heroBlogCta: "Đọc Blog",
        postStatLabel: "Bài viết",
        seriesStatLabel: "Series",
        minutesRead: (minutes) => `${minutes} phút đọc`,
    },
    en: {
        knowledgeTitle: "Knowledge map",
        knowledgeSubtitle: (nodes, edges) => `Explore the links between ${nodes} topics and ${edges} connections.`,
        knowledgeCta: "Open full view",
        aiTitle: "AI learning paths",
        aiSubtitle: "From Machine Learning and Deep Learning to LLMs, fine-tuning, RAG and MLOps - all hands-on.",
        aiViewAll: "View all AI series",
        featuredSeriesTitle: "Featured series",
        featuredSeriesSubtitle: "Kubernetes, Nginx, PostgreSQL, Spring Boot - build skills from fundamentals to advanced practice.",
        latestPostsTitle: "Latest posts",
        latestPostsSubtitle: "Fresh updates, technical notes and practical engineering knowledge.",
        ctaTitle: "Learn together at",
        ctaBody: "Blog posts, series and open source projects - all free, written from day-to-day practical experience.",
        ctaSeries: "View series",
        ctaBlog: "Read blog",
        greetingPrefix: "Hi, I am",
        heroSeriesCta: "Explore series",
        heroBlogCta: "Read blog",
        postStatLabel: "Posts",
        seriesStatLabel: "Series",
        minutesRead: (minutes) => `${minutes} min read`,
    },
    ja: {
        knowledgeTitle: "ナレッジマップ",
        knowledgeSubtitle: (nodes, edges) => `${nodes} 個のトピックと ${edges} 個のつながりを探索します。`,
        knowledgeCta: "全画面で見る",
        aiTitle: "AI 学習シリーズ",
        aiSubtitle: "Machine Learning、Deep Learning から LLM、Fine-tuning、RAG、MLOps まで、実践中心で学べます。",
        aiViewAll: "AI シリーズをすべて見る",
        featuredSeriesTitle: "注目シリーズ",
        featuredSeriesSubtitle: "Kubernetes、Nginx、PostgreSQL、Spring Boot などを基礎から応用まで学べます。",
        latestPostsTitle: "最新記事",
        latestPostsSubtitle: "技術ニュース、実践知識、エンジニアリングの学びを更新しています。",
        ctaTitle: "一緒に学ぶ場所",
        ctaBody: "ブログ、シリーズ、オープンソースプロジェクトを無料で公開しています。日々の実務経験から書いています。",
        ctaSeries: "シリーズを見る",
        ctaBlog: "ブログを読む",
        greetingPrefix: "こんにちは、私は",
        heroSeriesCta: "シリーズを見る",
        heroBlogCta: "ブログを読む",
        postStatLabel: "記事",
        seriesStatLabel: "シリーズ",
        minutesRead: (minutes) => `${minutes}分で読めます`,
    },
    "zh-tw": {
        knowledgeTitle: "知識地圖",
        knowledgeSubtitle: (nodes, edges) => `探索 ${nodes} 個主題與 ${edges} 個連結之間的關係。`,
        knowledgeCta: "開啟全螢幕",
        aiTitle: "AI 學習系列",
        aiSubtitle: "從 Machine Learning、Deep Learning 到 LLM、Fine-tuning、RAG 與 MLOps，全部以實作為核心。",
        aiViewAll: "查看所有 AI 系列",
        featuredSeriesTitle: "精選系列",
        featuredSeriesSubtitle: "Kubernetes、Nginx、PostgreSQL、Spring Boot - 從基礎到進階逐步建立能力。",
        latestPostsTitle: "最新文章",
        latestPostsSubtitle: "更新技術新聞、實務知識與工程經驗。",
        ctaTitle: "一起在這裡學習",
        ctaBody: "部落格、系列文章與開源專案全部免費，內容來自日常實務經驗。",
        ctaSeries: "查看系列",
        ctaBlog: "閱讀文章",
        greetingPrefix: "你好，我是",
        heroSeriesCta: "探索系列",
        heroBlogCta: "閱讀文章",
        postStatLabel: "文章",
        seriesStatLabel: "系列",
        minutesRead: (minutes) => `${minutes} 分鐘閱讀`,
    },
};

export const metadata: Metadata = {
    title: "xDev Asia — Blog lập trình, AI, DevOps & Công nghệ",
    description:
        "Blog cá nhân chia sẻ kiến thức lập trình, AI, Machine Learning, DevOps, kiến trúc hệ thống và công nghệ từ kinh nghiệm thực tế. Series học miễn phí từ cơ bản đến nâng cao.",
    keywords: [
        "lập trình", "AI", "machine learning", "DevOps", "kiến trúc hệ thống",
        "web development", "golang", "spring boot", "postgresql", "kubernetes",
        "LLM", "deep learning", "blog công nghệ", "xdev asia",
    ],
    alternates: {
        canonical: SITE_URL,
        types: { "application/rss+xml": "/feed.xml/" },
    },
    openGraph: {
        title: "xDev Asia — Blog lập trình, AI, DevOps & Công nghệ",
        description:
            "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế. Series học miễn phí từ cơ bản đến nâng cao.",
        url: SITE_URL,
        siteName: "xDev Asia",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "xDev Asia — Blog lập trình, AI, DevOps & Công nghệ",
        description:
            "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế.",
    },
    robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
    },
};

export default function Home() {
    return <HomePage locale={DEFAULT_LOCALE} />;
}

export function HomePage({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
    const allPosts = getAllPosts(locale);
    const allSeriesItems = getAllSeries(locale);
    const posts = allPosts.slice(0, 6);
    const dict = getDictionary(locale);
    const copy = HOME_COPY[locale];
    const href = (path: string) => localizedPath(locale, path);
    const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

    // AI series — highlighted
    const aiSeries = getSeriesByCategory("ai-machine-learning", locale);

    // Featured series — non-AI, sorted by enrollment/rating
    const otherSeries = allSeriesItems
        .filter((s) => s.category?.slug !== "ai-machine-learning")
        .sort((a, b) => (b.enrollment_count + b.view_count) - (a.enrollment_count + a.view_count))
        .slice(0, 4);
    const settings = getSettings();
    const profileName = settings.profile_name || "Duy Tran";
    const profileUrl = settings.profile_url || `${SITE_URL}/gioi-thieu/`;

    const featuredPost = posts[0];
    const sidePosts = posts.slice(1);

    const graphData = buildKnowledgeGraph();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "xDev Asia",
        url: `${SITE_URL}${href("/")}`,
        description:
            locale === DEFAULT_LOCALE
                ? "Blog cá nhân chia sẻ kiến thức lập trình, AI, Machine Learning, DevOps, kiến trúc hệ thống và công nghệ từ kinh nghiệm thực tế."
                : dict.home.hero_subtitle,
        inLanguage: locale,
        publisher: {
            "@type": "Person",
            name: profileName,
            url: profileUrl,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}${href("/search/")}?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdScriptContent(jsonLd) }}
            />
            {/* ─── Hero ─── */}
            <HeroBanner2026
                siteName={settings.site_name || "xDev"}
                tagline={
                    locale === DEFAULT_LOCALE
                        ? settings.site_tagline || settings.site_description || "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế"
                        : dict.home.hero_subtitle
                }
                profileName={settings.profile_name || "Duy Tran"}
                profileLabel={settings.profile_label || "Personal Tech Blog · 2026"}
                postCount={allPosts.length}
                seriesCount={allSeriesItems.length}
                greetingPrefix={copy.greetingPrefix}
                primaryHref={href("/series/")}
                primaryLabel={copy.heroSeriesCta}
                secondaryHref={href("/blog/")}
                secondaryLabel={copy.heroBlogCta}
                postStatLabel={copy.postStatLabel}
                seriesStatLabel={copy.seriesStatLabel}
            />

            {/* ─── Knowledge Graph Preview ─── */}
            {graphData.nodes.length > 0 && (
                <section className="relative bg-[#0a0e1a] py-14 lg:py-18 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" aria-hidden="true" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 mb-3">
                                    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="2" />
                                        <circle cx="5" cy="6" r="1.5" />
                                        <circle cx="19" cy="6" r="1.5" />
                                        <circle cx="5" cy="18" r="1.5" />
                                        <circle cx="19" cy="18" r="1.5" />
                                        <line x1="12" y1="10" x2="5" y2="7.5" />
                                        <line x1="12" y1="10" x2="19" y2="7.5" />
                                        <line x1="12" y1="14" x2="5" y2="16.5" />
                                        <line x1="12" y1="14" x2="19" y2="16.5" />
                                    </svg>
                                    Knowledge Graph
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{copy.knowledgeTitle}</h2>
                                <p className="text-sm text-slate-400 max-w-md mx-auto">
                                    {copy.knowledgeSubtitle(graphData.nodes.length, graphData.edges.length)}
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="relative rounded-2xl border border-white/6 bg-[#0d1117] overflow-hidden shadow-2xl shadow-black/40">
                                <KnowledgeGraph data={graphData} className="h-90 sm:h-105 lg:h-120" />
                                <Link
                                    href="/knowledge-graph/"
                                    className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 py-3 bg-linear-to-t from-[#0d1117] via-[#0d1117]/90 to-transparent text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
                                >
                                    {copy.knowledgeCta}
                                    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 3 21 3 21 9" />
                                        <polyline points="9 21 3 21 3 15" />
                                        <line x1="21" y1="3" x2="14" y2="10" />
                                        <line x1="3" y1="21" x2="10" y2="14" />
                                    </svg>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* ─── AI & Machine Learning — Dark accent section ─── */}
            {aiSeries.length > 0 && (
                <section className="ai-section-dark py-14 lg:py-20">
                    <div className="aurora-effect" aria-hidden="true" />
                    <div className="ai-dark-grid" aria-hidden="true" />
                    <div className="ai-dark-glow ai-dark-glow-1" aria-hidden="true" />
                    <div className="ai-dark-glow ai-dark-glow-2" aria-hidden="true" />
                    <div className="noise-overlay" aria-hidden="true" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                <div>
                                    <div className="ai-section-badge mb-3">
                                        <IconBrain size={14} />
                                        AI & Machine Learning
                                    </div>
                                    <h2 className="section-title">
                                        {copy.aiTitle}
                                    </h2>
                                    <p className="section-subtitle">
                                        {copy.aiSubtitle}
                                    </p>
                                </div>
                                <Link href={href("/series/ai-machine-learning/")} className="link-brand shrink-0 self-start md:self-auto">
                                    <IconBrain size={15} />
                                    {copy.aiViewAll}
                                    <IconArrowRight size={14} />
                                </Link>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {aiSeries.slice(0, 8).map((series, index) => (
                                <ScrollReveal key={series.id} delay={index * 80}>
                                    <SeriesCard
                                        series={series}
                                        priority={index < 2}
                                        basePath={`${prefix}/series/${series.category?.slug || "uncategorized"}`}
                                        localePrefix={prefix}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Series nổi bật ─── */}
            {otherSeries.length > 0 && (
                <section className="py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                <div>
                                    <div className="section-label">
                                        <IconBook size={14} />
                                        Series
                                    </div>
                                    <h2 className="section-title">{copy.featuredSeriesTitle}</h2>
                                    <p className="section-subtitle">
                                        {copy.featuredSeriesSubtitle}
                                    </p>
                                </div>
                                <Link href={href("/series/")} className="link-brand shrink-0 self-start md:self-auto">
                                    {dict.common.view_all}
                                    <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {otherSeries.map((series, index) => (
                                <ScrollReveal key={series.id} delay={index * 80}>
                                    <SeriesCard
                                        series={series}
                                        priority={index === 0}
                                        basePath={`${prefix}/series/${series.category?.slug || "uncategorized"}`}
                                        localePrefix={prefix}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Blog — Bento Grid 2026 ─── */}
            {posts.length > 0 && (
                <section className="section-alt py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                <div>
                                    <div className="section-label">
                                        <IconCode size={14} />
                                        Blog
                                    </div>
                                    <h2 className="section-title">{copy.latestPostsTitle}</h2>
                                    <p className="section-subtitle">
                                        {copy.latestPostsSubtitle}
                                    </p>
                                </div>
                                <Link href={href("/blog/")} className="link-brand shrink-0 self-start md:self-auto">
                                    {dict.common.view_all}
                                    <IconArrowRight size={14} />
                                </Link>
                            </div>
                        </ScrollReveal>

                        {/* Bento grid */}
                        <div className="bento-grid">
                            {/* Featured — large, spans 2 rows on lg */}
                            {featuredPost && (
                                <Link href={href(`/blog/${featuredPost.slug}/`)} className="bento-featured group block">
                                    <article className="post-card rounded-2xl overflow-hidden h-full flex flex-col">
                                        <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 overflow-hidden bg-surface-100 min-h-48">
                                            <SkeletonImage
                                                src={getValidImageUrl(featuredPost.featured_image, featuredPost.slug)}
                                                alt={featuredPost.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 58vw"
                                                priority
                                                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                                            {featuredPost.category && (
                                                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm shadow-sm">
                                                    {featuredPost.category.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="p-5 flex flex-col">
                                            <h3 className="text-lg lg:text-xl font-bold text-zinc-900 group-hover:text-brand-600 transition-colors duration-200 leading-snug mb-2">
                                                {featuredPost.title}
                                            </h3>
                                            {featuredPost.excerpt && (
                                                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed mb-3">
                                                    {featuredPost.excerpt}
                                                </p>
                                            )}
                                            {featuredPost.tags?.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 mb-3">
                                                    {featuredPost.tags.slice(0, 3).map((tag) => (
                                                        <span key={tag.slug} className="tag-pill text-[10px] px-2 py-0.5">{tag.name}</span>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="pt-3 border-t border-zinc-100 flex items-center gap-2.5 text-xs text-zinc-400">
                                                {featuredPost.author?.avatar ? (
                                                    <Image src={getValidImageUrl(featuredPost.author.avatar, featuredPost.author.name)} alt={featuredPost.author.name} width={20} height={20} style={{ height: "auto" }} className="rounded-full ring-1 ring-zinc-200 object-cover" />
                                                ) : (
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white ring-1 ring-zinc-200 text-[9px] font-bold">{featuredPost.author.name.charAt(0)}</div>
                                                )}
                                                <span className="font-medium text-zinc-600">{featuredPost.author.name}</span>
                                                <span className="w-0.5 h-0.5 rounded-full bg-zinc-300" />
                                                <time dateTime={featuredPost.published_at ?? undefined}>{formatDate(featuredPost.published_at, locale)}</time>
                                                {featuredPost.reading_time && (
                                                    <><span className="w-0.5 h-0.5 rounded-full bg-zinc-300" /><span>{copy.minutesRead(featuredPost.reading_time)}</span></>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )}

                            {/* Side posts (2) — stack next to featured on lg */}
                            {sidePosts.slice(0, 2).map((post) => (
                                <Link key={post.id} href={href(`/blog/${post.slug}/`)} className="bento-side group block">
                                    <article className="post-card rounded-xl overflow-hidden flex flex-row h-full">
                                        <div className="relative w-28 sm:w-32 lg:w-36 shrink-0 bg-surface-100">
                                            <SkeletonImage
                                                src={getValidImageUrl(post.featured_image, post.slug)}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 1024px) 128px, 144px"
                                                className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                        <div className="p-3.5 flex flex-col justify-center min-w-0 flex-1">
                                            {post.category && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1">{post.category.name}</span>
                                            )}
                                            <h3 className="text-sm font-bold text-zinc-900 group-hover:text-brand-600 transition-colors duration-200 line-clamp-2 leading-snug mb-1.5">
                                                {post.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                                                <span className="font-medium text-zinc-500">{post.author.name}</span>
                                                {post.reading_time && (
                                                    <><span className="w-0.5 h-0.5 rounded-full bg-zinc-300" /><span>{copy.minutesRead(post.reading_time)}</span></>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}

                            {/* Bottom small posts (3) */}
                            {sidePosts.slice(2, 5).map((post) => (
                                <div key={post.id} className="bento-small">
                                    <PostCard post={post} localePrefix={prefix} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── CTA — Gradient 2026 ─── */}
            <section className="py-10 lg:py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="cta-2026 p-8 md:p-12 text-center">
                            <div className="cta-blue-orb cta-blue-orb-1" />
                            <div className="cta-blue-orb cta-blue-orb-2" />
                            <div className="noise-overlay" aria-hidden="true" />

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                    {copy.ctaTitle}{" "}
                                    <span className="text-blue-200">xDev</span>
                                </h2>
                                <p className="text-blue-200/80 mb-6 max-w-xl mx-auto text-sm md:text-base">
                                    {copy.ctaBody}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Link
                                        href={href("/series/")}
                                        className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white text-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <IconBook size={16} />
                                        {copy.ctaSeries}
                                    </Link>
                                    <Link
                                        href={href("/blog/")}
                                        className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/90 border border-white/25 hover:bg-white/10 transition-all duration-200"
                                    >
                                        {copy.ctaBlog}
                                        <IconArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
