import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getAllPosts, getAvailableTopics } from "@/lib/data";
import { IconCode } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Blog",
    description: "Bài viết về lập trình, AI, DevSecOps, kiến trúc hệ thống và công nghệ",
};

export default function BlogPage() {
    const posts = getAllPosts();
    const topics = getAvailableTopics();

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconCode size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Blog</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Bài viết <span className="gradient-text">mới nhất</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        Bài viết về lập trình, AI, DevSecOps, kiến trúc hệ thống và công nghệ.
                    </p>

                    {/* Topic filter tabs */}
                    {topics.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-600 text-white">
                                Tất cả
                            </span>
                            {topics.map((topic) => (
                                <Link
                                    key={topic.slug}
                                    href={`/blog/topic/${topic.slug}/`}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-500 bg-white border border-zinc-200 hover:border-brand-300 hover:text-brand-600 transition-colors"
                                >
                                    {topic.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Posts Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {posts.map((post, index) => (
                        <PostCard key={post.id} post={post} priority={index === 0} />
                    ))}
                </div>
                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <IconCode size={48} className="text-zinc-300 mx-auto mb-4" />
                        <p className="text-zinc-500">Chưa có bài viết nào.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
