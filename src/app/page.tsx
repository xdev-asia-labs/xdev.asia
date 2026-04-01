import HeroBanner3D from "@/components/HeroBanner3D";
import { IconArrowRight, IconBook, IconBrain, IconCode, IconRocket } from "@/components/Icons";
import PostCard from "@/components/PostCard";
import SeriesCard from "@/components/SeriesCard";
import { RepoCard } from "@/components/ShowcaseCard";
import SkeletonImage from "@/components/SkeletonImage";
import { formatDate, getAllPosts, getAllSeries, getSeriesByCategory, getSettings } from "@/lib/data";
import { showcaseApps, showcaseRepos } from "@/lib/showcase-server";
import { getValidImageUrl } from "@/utils/image";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://xdev.asia";

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
    const allPosts = getAllPosts();
    const allSeriesItems = getAllSeries();
    const posts = allPosts.slice(0, 6);

    // AI series — highlighted
    const aiSeries = getSeriesByCategory("ai-machine-learning");

    // Featured series — non-AI, sorted by enrollment/rating
    const otherSeries = allSeriesItems
        .filter((s) => s.category?.slug !== "ai-machine-learning")
        .sort((a, b) => (b.enrollment_count + b.view_count) - (a.enrollment_count + a.view_count))
        .slice(0, 4);
    const settings = getSettings();
    const featuredRepos = showcaseRepos.slice(0, 3);

    const featuredPost = posts[0];
    const sidePosts = posts.slice(1, 5);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "xDev Asia",
        url: SITE_URL,
        description: "Blog cá nhân chia sẻ kiến thức lập trình, AI, Machine Learning, DevOps, kiến trúc hệ thống và công nghệ từ kinh nghiệm thực tế.",
        inLanguage: "vi",
        publisher: {
            "@type": "Person",
            name: "Duy Tran",
            url: `${SITE_URL}/gioi-thieu/`,
        },
        potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/search/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* ─── Hero ─── */}
            <HeroBanner3D
                siteName={settings.site_name || "xDev"}
                tagline={settings.site_tagline || settings.site_description || "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế"}
                postCount={allPosts.length}
                seriesCount={allSeriesItems.length}
                projectCount={showcaseApps.length + showcaseRepos.length}
            />

            {/* ─── AI & Machine Learning — Dark accent section ─── */}
            {aiSeries.length > 0 && (
                <section className="ai-section-dark py-14 lg:py-20">
                    <div className="ai-dark-grid" aria-hidden="true" />
                    <div className="ai-dark-glow ai-dark-glow-1" aria-hidden="true" />
                    <div className="ai-dark-glow ai-dark-glow-2" aria-hidden="true" />
                    <div className="noise-overlay" aria-hidden="true" />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="ai-section-badge mb-3">
                                    <IconBrain size={14} />
                                    AI & Machine Learning
                                </div>
                                <h2 className="section-title">
                                    Chuỗi bài học AI
                                </h2>
                                <p className="section-subtitle">
                                    Từ Machine Learning, Deep Learning đến LLM, Fine-tuning, RAG và MLOps — tất cả đều hands-on.
                                </p>
                            </div>
                            <Link href="/series/ai-machine-learning/" className="link-brand shrink-0 self-start md:self-auto">
                                <IconBrain size={15} />
                                Xem tất cả AI Series
                                <IconArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {aiSeries.slice(0, 8).map((series, index) => (
                                <SeriesCard key={series.id} series={series} priority={index < 2} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Series nổi bật ─── */}
            {otherSeries.length > 0 && (
                <section className="py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="section-label">
                                    <IconBook size={14} />
                                    Series
                                </div>
                                <h2 className="section-title">Series nổi bật</h2>
                                <p className="section-subtitle">
                                    Kubernetes, Nginx, PostgreSQL, Spring Boot — phát triển kỹ năng từ cơ bản đến nâng cao.
                                </p>
                            </div>
                            <Link href="/series/" className="link-brand shrink-0 self-start md:self-auto">
                                Xem tất cả
                                <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {otherSeries.map((series, index) => (
                                <SeriesCard key={series.id} series={series} priority={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Blog — Bento Grid 2026 ─── */}
            {posts.length > 0 && (
                <section className="section-alt py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="section-label">
                                    <IconCode size={14} />
                                    Blog
                                </div>
                                <h2 className="section-title">Bài viết mới nhất</h2>
                                <p className="section-subtitle">
                                    Cập nhật tin tức, kiến thức công nghệ mới nhất.
                                </p>
                            </div>
                            <Link href="/blog/" className="link-brand shrink-0 self-start md:self-auto">
                                Xem tất cả
                                <IconArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Bento grid */}
                        <div className="bento-grid">
                            {/* Featured — large, spans 2 rows on lg */}
                            {featuredPost && (
                                <Link href={`/blog/${featuredPost.slug}/`} className="bento-featured group block">
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
                                                <time dateTime={featuredPost.published_at ?? undefined}>{formatDate(featuredPost.published_at)}</time>
                                                {featuredPost.reading_time && (
                                                    <><span className="w-0.5 h-0.5 rounded-full bg-zinc-300" /><span>{featuredPost.reading_time} phút đọc</span></>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )}

                            {/* Side posts (2) — stack next to featured on lg */}
                            {sidePosts.slice(0, 2).map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}/`} className="bento-side group block">
                                    <article className="post-card rounded-xl overflow-hidden flex flex-row h-full">
                                        <div className="relative w-28 sm:w-32 shrink-0 bg-surface-100">
                                            <SkeletonImage
                                                src={getValidImageUrl(post.featured_image, post.slug)}
                                                alt={post.title}
                                                fill
                                                sizes="128px"
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
                                                    <><span className="w-0.5 h-0.5 rounded-full bg-zinc-300" /><span>{post.reading_time} phút</span></>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}

                            {/* Bottom small posts (3) */}
                            {sidePosts.slice(2, 5).map((post) => (
                                <div key={post.id} className="bento-small">
                                    <PostCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Open Source ─── */}
            {featuredRepos.length > 0 && (
                <section className="py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="section-label">
                                    <IconRocket size={14} />
                                    Open Source
                                </div>
                                <h2 className="section-title">Open Source Projects</h2>
                                <p className="section-subtitle">
                                    Các dự án mã nguồn mở mình đã xây dựng.
                                </p>
                            </div>
                            <Link href="/showcase/" className="link-brand shrink-0 self-start md:self-auto">
                                Xem tất cả
                                <IconArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {featuredRepos.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── CTA — Blue gradient ─── */}
            <section className="py-10 lg:py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="cta-blue p-8 md:p-12 text-center">
                        <div className="cta-blue-orb cta-blue-orb-1" />
                        <div className="cta-blue-orb cta-blue-orb-2" />

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                Cùng nhau học hỏi tại{" "}
                                <span className="text-blue-200">xDev</span>
                            </h2>
                            <p className="text-blue-200/80 mb-6 max-w-xl mx-auto text-sm md:text-base">
                                Blog, series, và dự án open source — tất cả đều miễn phí. Mình viết từ kinh nghiệm thực tế hàng ngày.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/series/"
                                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white text-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <IconBook size={16} />
                                    Xem Series
                                </Link>
                                <Link
                                    href="/series/"
                                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/90 border border-white/25 hover:bg-white/10 transition-all duration-200"
                                >
                                    Khám phá Series
                                    <IconArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
