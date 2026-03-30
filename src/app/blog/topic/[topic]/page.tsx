import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getPostsByTopic, getAvailableTopics } from "@/lib/data";
import { IconCode, IconChevronRight } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
    return getAvailableTopics().map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
    const { topic: topicSlug } = await params;
    const topics = getAvailableTopics();
    const topic = topics.find((t) => t.slug === topicSlug);
    const name = topic?.name || topicSlug;
    return {
        title: `${name} - Blog`,
        description: topic?.description || `Bài viết về ${name}`,
    };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const { topic: topicSlug } = await params;
    const topics = getAvailableTopics();
    const currentTopic = topics.find((t) => t.slug === topicSlug);
    const posts = getPostsByTopic(topicSlug);

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/blog/" className="hover:text-brand-600 transition-colors">Blog</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <span className="text-zinc-400">{currentTopic?.name || topicSlug}</span>
                    </nav>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconCode size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">{currentTopic?.name || topicSlug}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        {currentTopic?.name || topicSlug}
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        {currentTopic?.description || `${posts.length} bài viết về ${currentTopic?.name || topicSlug}.`}
                    </p>

                    {/* Topic tabs */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link
                            href="/blog/"
                            className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-500 bg-white border border-zinc-200 hover:border-brand-300 hover:text-brand-600 transition-colors"
                        >
                            Tất cả
                        </Link>
                        {topics.map((t) => (
                            <Link
                                key={t.slug}
                                href={`/blog/topic/${t.slug}/`}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${t.slug === topicSlug
                                    ? "bg-brand-600 text-white"
                                    : "text-zinc-500 bg-white border border-zinc-200 hover:border-brand-300 hover:text-brand-600"
                                    }`}
                            >
                                {t.name}
                            </Link>
                        ))}
                    </div>
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
                        <p className="text-zinc-500">Chưa có bài viết nào trong chủ đề này.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
