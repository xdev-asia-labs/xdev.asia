import { IconCode } from "@/components/Icons";
import { InFeedAd, MultiplexAd } from "@/components/AdUnit";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllPosts, getAvailableTopics } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 12;

export const dynamicParams = false;

export function generateStaticParams() {
    const posts = getAllPosts();
    const restPosts = posts.slice(1); // first post is featured on page 1
    const totalPages = Math.ceil(restPosts.length / POSTS_PER_PAGE);
    // Page 1 is /blog/, so we generate pages 2+
    return Array.from({ length: totalPages - 1 }, (_, i) => ({
        page: String(i + 2),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
    const { page } = await params;
    return {
        title: `Blog — Trang ${page}`,
        description: `Bài viết về lập trình, AI, DevSecOps, kiến trúc hệ thống và công nghệ — Trang ${page}`,
    };
}

export default async function BlogPaginatedPage({ params }: { params: Promise<{ page: string }> }) {
    const { page: pageStr } = await params;
    const currentPage = parseInt(pageStr, 10);

    const posts = getAllPosts();
    const topics = getAvailableTopics();
    const restPosts = posts.slice(1);
    const totalPages = Math.ceil(restPosts.length / POSTS_PER_PAGE);

    if (isNaN(currentPage) || currentPage < 2 || currentPage > totalPages) {
        notFound();
    }

    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = restPosts.slice(start, start + POSTS_PER_PAGE);

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
                        {posts.length} bài viết — Trang {currentPage}/{totalPages}
                    </p>

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginatedPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} priority={index < 3} />
                    ))}
                </div>

                {/* In-feed Ad */}
                <div className="my-6">
                    <InFeedAd />
                </div>

                <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog/" />

                {/* Multiplex Ad */}
                <MultiplexAd className="mt-4" />
            </div>
        </div>
    );
}
