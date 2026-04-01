import { IconClock, IconCode } from "@/components/Icons";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import SkeletonImage from "@/components/SkeletonImage";
import { formatDate, getAllPosts, getAvailableTopics } from "@/lib/data";
import { getValidImageUrl } from "@/utils/image";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
    title: "Blog",
    description: "Bài viết về lập trình, AI, DevSecOps, kiến trúc hệ thống và công nghệ",
};

export default function BlogPage() {
    const posts = getAllPosts();
    const topics = getAvailableTopics();
    const featuredPost = posts[0];
    const restPosts = posts.slice(1);
    const paginatedPosts = restPosts.slice(0, POSTS_PER_PAGE);
    const totalPages = Math.ceil(restPosts.length / POSTS_PER_PAGE);

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-10 lg:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
                            <IconCode size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Blog</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-zinc-900 mb-2">
                        Bài viết <span className="gradient-text">mới nhất</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
                        {posts.length} bài viết về lập trình, AI, DevSecOps, kiến trúc hệ thống và công nghệ.
                    </p>

                    {/* Topic filter tabs */}
                    {topics.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Link href="/blog/" className="topic-tab topic-tab-active">
                                Tất cả
                                <span className="topic-tab-count">{posts.length}</span>
                            </Link>
                            {topics.map((topic) => (
                                <Link key={topic.slug} href={`/${topic.slug}/`} className="topic-tab">
                                    {topic.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Featured hero post — full-width horizontal banner */}
                {featuredPost && (
                    <Link href={`/blog/${featuredPost.slug}/`} className="group block mb-8">
                        <article className="post-card rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5 min-h-[220px] md:h-72">
                            {/* Thumbnail */}
                            <div className="relative md:col-span-2 aspect-[16/9] md:aspect-auto bg-surface-100">
                                <SkeletonImage
                                    src={getValidImageUrl(featuredPost.featured_image, featuredPost.slug)}
                                    alt={featuredPost.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    priority
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 md:to-white/30 hidden md:block" />
                                {featuredPost.category && (
                                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm shadow-sm">
                                        {featuredPost.category.name}
                                    </span>
                                )}
                            </div>
                            {/* Content */}
                            <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-600 mb-3">
                                    <span className="w-1 h-1 rounded-full bg-brand-500" />
                                    Bài viết nổi bật
                                </div>
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[-0.02em] text-zinc-900 group-hover:text-brand-600 transition-colors duration-200 leading-snug mb-3">
                                    {featuredPost.title}
                                </h2>
                                {featuredPost.excerpt && (
                                    <p className="text-zinc-500 text-sm md:text-base line-clamp-2 leading-relaxed mb-4">
                                        {featuredPost.excerpt}
                                    </p>
                                )}
                                <div className="flex items-center gap-3 text-xs text-zinc-400 mt-auto">
                                    {featuredPost.author?.avatar ? (
                                        <Image
                                            src={getValidImageUrl(featuredPost.author.avatar, featuredPost.author.name)}
                                            alt={featuredPost.author.name}
                                            width={24}
                                            height={24}
                                            style={{ height: "auto" }}
                                            className="rounded-full ring-1 ring-zinc-200 object-cover"
                                        />
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-[9px] font-bold">
                                            {featuredPost.author.name.charAt(0)}
                                        </div>
                                    )}
                                    <span className="font-medium text-zinc-600">{featuredPost.author.name}</span>
                                    <span className="w-0.5 h-0.5 rounded-full bg-zinc-300" />
                                    <time dateTime={featuredPost.published_at ?? undefined}>
                                        {formatDate(featuredPost.published_at)}
                                    </time>
                                    {featuredPost.reading_time && (
                                        <>
                                            <span className="w-0.5 h-0.5 rounded-full bg-zinc-300" />
                                            <span className="flex items-center gap-1">
                                                <IconClock size={11} />
                                                {featuredPost.reading_time} phút đọc
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </article>
                    </Link>
                )}

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginatedPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} priority={index < 3} />
                    ))}
                </div>
                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <IconCode size={48} className="text-zinc-300 mx-auto mb-4" />
                        <p className="text-zinc-500">Chưa có bài viết nào.</p>
                    </div>
                )}
                <Pagination currentPage={1} totalPages={totalPages} basePath="/blog/" />
            </div>
        </div>
    );
}

