import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getAllNews } from "@/lib/data";
import { IconNewspaper } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Tin tức",
    description: "Tin tức công nghệ, cập nhật mới nhất từ xDev",
};

export default function NewsPage() {
    const posts = getAllNews();

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconNewspaper size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">News</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Tin tức <span className="gradient-text">Công nghệ</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        Cập nhật tin tức, xu hướng và kiến thức công nghệ mới nhất.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {posts.length > 0 && (
                    <div className="mb-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <PostCard post={posts[0]} priority />
                            {posts[1] && <PostCard post={posts[1]} />}
                        </div>
                    </div>
                )}

                {posts.length > 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {posts.slice(2).map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                )}

                {posts.length === 0 && (
                    <div className="text-center py-20">
                        <IconNewspaper size={48} className="text-zinc-300 mx-auto mb-4" />
                        <p className="text-zinc-500">Chưa có tin tức nào.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
