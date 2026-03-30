import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import SeriesCard from "@/components/SeriesCard";
import HeroBanner3D from "@/components/HeroBanner3D";
import { getAllPosts, getAllSeries, getAllAISeries, getSettings, formatDate } from "@/lib/data";
import { showcaseRepos } from "@/lib/showcase-server";
import { RepoCard } from "@/components/ShowcaseCard";
import { getValidImageUrl } from "@/utils/image";
import { IconArrowRight, IconBrain, IconBook, IconCode, IconRocket, IconGitHub } from "@/components/Icons";

export default function Home() {
    const allPosts = getAllPosts();
    const allSeriesItems = getAllSeries();
    const posts = allPosts.slice(0, 6);
    const seriesItems = allSeriesItems.slice(0, 4);
    const aiSeries = getAllAISeries();
    const settings = getSettings();
    const featuredRepos = showcaseRepos.slice(0, 3);

    const featuredPost = posts[0];
    const sidePosts = posts.slice(1, 5);

    return (
        <>
            {/* ─── Hero ─── */}
            <HeroBanner3D
                siteName={settings.site_name || "xDev"}
                tagline={settings.site_tagline || settings.site_description || "Chia sẻ kiến thức lập trình, AI, DevOps và công nghệ từ kinh nghiệm thực tế"}
                postCount={allPosts.length}
                seriesCount={allSeriesItems.length}
                aiSeriesCount={aiSeries.length}
                projectCount={showcaseRepos.length}
            />

            {/* ─── AI & Machine Learning ─── */}
            {aiSeries.length > 0 && (
                <section className="ai-section-bg py-14 lg:py-18">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                    Mình tổng hợp kiến thức AI từ Machine Learning, Deep Learning đến LLM, Fine-tuning, RAG và MLOps.
                                </p>
                            </div>
                            <Link href="/ai/" className="link-brand shrink-0 self-start md:self-auto">
                                <IconBrain size={15} />
                                Xem tất cả AI Courses
                                <IconArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {aiSeries.slice(0, 8).map((series, index) => (
                                <div key={series.id} className="ai-series-card w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
                                    <SeriesCard series={series} priority={index < 2} basePath="/ai/series" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Series nổi bật ─── */}
            {seriesItems.length > 0 && (
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
                                    Phát triển kỹ năng với các series thực tế, từ cơ bản đến nâng cao.
                                </p>
                            </div>
                            <Link href="/series/" className="link-brand shrink-0 self-start md:self-auto">
                                Xem tất cả
                                <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {seriesItems.map((series, index) => (
                                <SeriesCard key={series.id} series={series} priority={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── Blog — Featured + Side ─── */}
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

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            {/* Featured post — large */}
                            {featuredPost && (
                                <div className="lg:col-span-3">
                                    <Link href={`/blog/${featuredPost.slug}/`} className="group block h-full">
                                        <article className="glass-card rounded-2xl overflow-hidden h-full">
                                            <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
                                                <Image
                                                    src={getValidImageUrl(featuredPost.featured_image, featuredPost.slug)}
                                                    alt={featuredPost.title}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                                    priority
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                />
                                                {featuredPost.category && (
                                                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm">
                                                        {featuredPost.category.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <h3 className="text-lg lg:text-xl font-bold text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                                                    {featuredPost.title}
                                                </h3>
                                                {featuredPost.excerpt && (
                                                    <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed mb-3">
                                                        {featuredPost.excerpt}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-3 text-xs text-zinc-400">
                                                    {featuredPost.author?.avatar ? (
                                                        <Image
                                                            src={getValidImageUrl(featuredPost.author.avatar, featuredPost.author.name)}
                                                            alt={featuredPost.author.name}
                                                            width={24}
                                                            height={24}
                                                            style={{ height: "auto" }}
                                                            className="rounded-full ring-2 ring-white object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white ring-2 ring-white text-[10px] font-bold">
                                                            {featuredPost.author.name.charAt(0)}
                                                        </div>
                                                    )}
                                                    <span className="font-medium text-zinc-600">{featuredPost.author.name}</span>
                                                    {featuredPost.reading_time && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                                            <span>{featuredPost.reading_time} phút đọc</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </div>
                            )}

                            {/* Side posts — stacked */}
                            <div className="lg:col-span-2 flex flex-col gap-4">
                                {sidePosts.map((post) => (
                                    <Link key={post.id} href={`/blog/${post.slug}/`} className="group block">
                                        <article className="glass-card rounded-xl overflow-hidden flex flex-row h-full">
                                            <div className="relative w-28 sm:w-36 shrink-0 bg-surface-100">
                                                <Image
                                                    src={getValidImageUrl(post.featured_image, post.slug)}
                                                    alt={post.title}
                                                    fill
                                                    sizes="144px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                                />
                                            </div>
                                            <div className="p-3.5 flex flex-col justify-center min-w-0">
                                                {post.category && (
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1">
                                                        {post.category.name}
                                                    </span>
                                                )}
                                                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug mb-1">
                                                    {post.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                                                    <span>{post.author.name}</span>
                                                    {post.reading_time && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                                            <span>{post.reading_time} phút</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
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
                                    href="/ai/"
                                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white text-blue-700 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <IconBrain size={16} />
                                    Học AI ngay
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
