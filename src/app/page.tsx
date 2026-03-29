import Link from "next/link";
import PostCard from "@/components/PostCard";
import SeriesCard from "@/components/SeriesCard";
import { getAllPosts, getAllSeries, getSettings } from "@/lib/data";
import { showcaseRepos } from "@/lib/showcase-server";
import { RepoCard } from "@/components/ShowcaseCard";
import { IconArrowRight, IconCode, IconBook, IconNewspaper, IconRocket } from "@/components/Icons";

export default function Home() {
    const posts = getAllPosts().slice(0, 6);
    const seriesItems = getAllSeries().slice(0, 4);
    const settings = getSettings();
    const featuredRepos = showcaseRepos.slice(0, 3);

    return (
        <>
            {/* Hero — compact */}
            <section className="hero-gradient py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
                                <span className="block text-zinc-900 mb-1">{settings.site_name || "xDev"}</span>
                                <span className="gradient-text">Nâng tầm sự nghiệp</span>
                            </h1>
                            <p className="mt-4 text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg">
                                {settings.site_tagline || settings.site_description || "Nền tảng chia sẻ kiến thức lập trình, DevOps và công nghệ"}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/series/"
                                    className="btn-glow inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm"
                                >
                                    Khám phá Series
                                    <IconArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/blog/"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-600 transition-all duration-200 hover:text-brand-600 border border-zinc-200 hover:border-brand-300 hover:bg-brand-50"
                                >
                                    Đọc bài viết mới
                                </Link>
                            </div>
                        </div>

                        {/* Stats grid — right side */}
                        <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-xs">
                            {[
                                { icon: IconCode, value: `${posts.length}+`, label: "Bài viết" },
                                { icon: IconBook, value: `${seriesItems.length}+`, label: "Series" },
                                { icon: IconNewspaper, value: "5+", label: "Chủ đề" },
                                { icon: IconRocket, value: `${featuredRepos.length}+`, label: "Projects" },
                            ].map((stat, idx) => (
                                <div key={idx} className="glass-card rounded-xl p-4 text-center">
                                    <stat.icon size={18} className="text-brand-500 mx-auto mb-1.5" />
                                    <div className="text-2xl font-extrabold text-zinc-900">{stat.value}</div>
                                    <div className="text-xs text-zinc-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Series */}
            {seriesItems.length > 0 && (
                <section className="py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                                    Series nổi bật
                                </h2>
                                <p className="mt-2 text-zinc-500">
                                    Phát triển kỹ năng với các series thực tế.
                                </p>
                            </div>
                            <Link href="/series/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold group transition-colors text-sm">
                                Xem tất cả
                                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {seriesItems.map((series, index) => (
                                <SeriesCard key={series.id} series={series} priority={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="section-divider max-w-7xl mx-auto" />

            {/* Blog */}
            {posts.length > 0 && (
                <section className="py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                                    Bài viết mới nhất
                                </h2>
                                <p className="mt-2 text-zinc-500">
                                    Cập nhật tin tức, kiến thức công nghệ mới nhất.
                                </p>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold group transition-colors text-sm">
                                Xem tất cả
                                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {posts.map((post, index) => (
                                <PostCard key={post.id} post={post} priority={index === 0} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="section-divider max-w-7xl mx-auto" />

            {/* Showcase Preview */}
            {featuredRepos.length > 0 && (
                <section className="py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                                    Open Source Projects
                                </h2>
                                <p className="mt-2 text-zinc-500">
                                    Các dự án mã nguồn mở từ xDev.
                                </p>
                            </div>
                            <Link href="/showcase/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold group transition-colors text-sm">
                                Xem tất cả
                                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {featuredRepos.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="hero-gradient rounded-3xl p-10 md:p-14">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-3">
                            Bắt đầu hành trình cùng <span className="gradient-text">xDev</span>
                        </h2>
                        <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
                            Khám phá các series, bài viết và dự án mã nguồn mở. Nâng cao kỹ năng lập trình mỗi ngày.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/series/"
                                className="btn-glow inline-flex justify-center items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm"
                            >
                                Bắt đầu ngay
                                <IconArrowRight size={16} />
                            </Link>
                            <Link
                                href="/showcase/"
                                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-zinc-600 transition-all duration-200 hover:text-brand-600 border border-zinc-200 hover:border-brand-300 hover:bg-brand-50"
                            >
                                Xem Showcase
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
