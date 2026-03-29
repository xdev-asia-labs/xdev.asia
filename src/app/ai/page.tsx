import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import SeriesCard from "@/components/SeriesCard";
import { getAllAIPosts, getAllAISeries } from "@/lib/data";
import { IconBrain, IconArrowRight, IconBook, IconCode } from "@/components/Icons";

export const metadata: Metadata = {
    title: "AI & Machine Learning",
    description: "Khám phá thế giới AI, Machine Learning, Deep Learning và các ứng dụng trí tuệ nhân tạo trong phát triển phần mềm.",
};

const AI_TOPICS = [
    {
        title: "Machine Learning",
        description: "Thuật toán ML, mô hình học máy, feature engineering",
        icon: "🤖",
        color: "from-violet-500 to-purple-600",
    },
    {
        title: "Deep Learning",
        description: "Neural networks, CNN, RNN, Transformer",
        icon: "🧠",
        color: "from-blue-500 to-cyan-600",
    },
    {
        title: "LLM & GenAI",
        description: "Large Language Models, Prompt Engineering, RAG",
        icon: "💬",
        color: "from-emerald-500 to-teal-600",
    },
    {
        title: "MLOps",
        description: "Model deployment, monitoring, CI/CD cho AI",
        icon: "⚙️",
        color: "from-orange-500 to-amber-600",
    },
    {
        title: "Computer Vision",
        description: "Xử lý ảnh, object detection, image generation",
        icon: "👁️",
        color: "from-pink-500 to-rose-600",
    },
    {
        title: "AI Engineering",
        description: "Xây dựng ứng dụng AI, API, SDK integration",
        icon: "🔧",
        color: "from-indigo-500 to-blue-600",
    },
];

/* PostCard wrapper: override link path to /ai/[slug]/ instead of /blog/[slug]/ */
function AIPostCard({ post, priority = false }: { post: Parameters<typeof PostCard>[0]["post"]; priority?: boolean }) {
    return (
        <div className="group glass-card rounded-2xl overflow-hidden">
            <Link href={`/ai/${post.slug}/`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-100">
                    <Image
                        src={post.featured_image ? `/storage/${post.featured_image}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(post.title)}&size=600&background=4f46e5&color=fff&bold=true&format=png`}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={priority}
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {post.category && (
                        <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm">
                            {post.category.name}
                        </span>
                    )}
                </div>
            </Link>
            <div className="p-5">
                <Link href={`/ai/${post.slug}/`}>
                    <h2 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                    </h2>
                </Link>
                {post.excerpt && (
                    <p className="mt-2.5 text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                )}
            </div>
        </div>
    );
}

/* SeriesCard wrapper: override link path to /ai/series/[slug]/ */
function AISeriesCard({ series, priority = false }: { series: Parameters<typeof SeriesCard>[0]["series"]; priority?: boolean }) {
    return <SeriesCard series={series} priority={priority} basePath="/ai/series" />;
}

export default function AIPage() {
    const aiPosts = getAllAIPosts();
    const aiSeries = getAllAISeries();

    return (
        <div>
            {/* Hero with Banner */}
            <section className="relative overflow-hidden">
                {/* Banner Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/banners/ai-banner.png"
                        alt="AI & Machine Learning"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/60 to-zinc-900/90" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <IconBrain size={22} className="text-cyan-400" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                                Artificial Intelligence
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
                            <span className="text-white">AI &amp; </span>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Machine Learning
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
                            Khám phá thế giới trí tuệ nhân tạo — từ nền tảng Machine Learning, Deep Learning
                            đến ứng dụng LLM, GenAI và MLOps trong thực tế.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#ai-series"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <IconBook size={16} />
                                Khám phá Series AI
                            </a>
                            <a
                                href="#ai-blog"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/90 border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                            >
                                <IconCode size={16} />
                                Đọc bài viết AI
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Topics Grid */}
            <section className="py-16 lg:py-20 bg-gradient-to-b from-zinc-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 mb-3">
                            Chủ đề <span className="gradient-text">AI</span> tại xDev
                        </h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto">
                            Các lĩnh vực AI mà chúng tôi đang nghiên cứu và chia sẻ kiến thức chuyên sâu.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {AI_TOPICS.map((topic) => (
                            <div
                                key={topic.title}
                                className="group glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl mb-4 shadow-sm`}>
                                    {topic.icon}
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-brand-600 transition-colors">
                                    {topic.title}
                                </h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {topic.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Series */}
            <section id="ai-series" className="py-16 lg:py-20 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <IconBook size={18} className="text-brand-600" />
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Series AI</span>
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                                Series về AI
                            </h2>
                            <p className="mt-2 text-zinc-500">
                                Học AI có hệ thống với các series từ cơ bản đến nâng cao.
                            </p>
                        </div>
                    </div>

                    {aiSeries.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {aiSeries.map((series, index) => (
                                <AISeriesCard key={series.id} series={series} priority={index === 0} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 glass-card rounded-2xl">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center text-3xl mx-auto mb-4">
                                🚀
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">Sắp ra mắt</h3>
                            <p className="text-sm text-zinc-500 max-w-md mx-auto">
                                Các series AI đang được xây dựng. Theo dõi xDev để cập nhật nội dung mới nhất!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <div className="section-divider max-w-7xl mx-auto" />

            {/* AI Blog Posts */}
            <section id="ai-blog" className="py-16 lg:py-20 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <IconCode size={18} className="text-brand-600" />
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Blog AI</span>
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                                Bài viết về AI
                            </h2>
                            <p className="mt-2 text-zinc-500">
                                Hướng dẫn, tutorial và kiến thức thực tế về AI.
                            </p>
                        </div>
                    </div>

                    {aiPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {aiPosts.map((post, index) => (
                                <AIPostCard key={post.id} post={post} priority={index === 0} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 glass-card rounded-2xl">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-3xl mx-auto mb-4">
                                ✍️
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">Sắp ra mắt</h3>
                            <p className="text-sm text-zinc-500 max-w-md mx-auto">
                                Các bài viết về AI đang được biên soạn. Hãy quay lại sau nhé!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="relative overflow-hidden rounded-3xl p-10 md:p-14">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950" />
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[120px]" />
                            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 border border-white/20">
                                <IconBrain size={28} className="text-cyan-400" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                Bắt đầu hành trình <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span> cùng xDev
                            </h2>
                            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                                Học AI từ cơ bản đến nâng cao với các series chất lượng, bài viết chuyên sâu và dự án thực tế.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="#ai-series"
                                    className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Khám phá ngay
                                    <IconArrowRight size={16} />
                                </a>
                                <Link
                                    href="/showcase/"
                                    className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white/90 border border-white/20 hover:bg-white/10 transition-all duration-200"
                                >
                                    Xem AI Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
