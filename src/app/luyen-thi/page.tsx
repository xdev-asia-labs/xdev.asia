import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllQuizzes, getSeriesByCategory } from "@/lib/data";
import { IconAward, IconClock, IconArrowRight, IconBook } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Luyện thi chứng chỉ | xDev Asia",
    description: "Luyện thi trắc nghiệm các chứng chỉ AI, Cloud, DevOps — AWS, Google Cloud, Azure",
};

const PROVIDER_COLORS: Record<string, string> = {
    AWS: "bg-amber-100 text-amber-700",
    "Google Cloud": "bg-blue-100 text-blue-700",
    Azure: "bg-sky-100 text-sky-700",
};

const LEVEL_COLORS: Record<string, string> = {
    "Nền tảng": "bg-emerald-100 text-emerald-700",
    "Chuyên nghiệp": "bg-violet-100 text-violet-700",
    "Chuyên gia": "bg-rose-100 text-rose-700",
};

export default function LuyenThiPage() {
    const quizzes = getAllQuizzes();
    const certSeries = getSeriesByCategory("luyen-thi");

    // Build cert cards: merge series + quiz data by series_slug
    const certCards = quizzes.map((quiz) => {
        const series = certSeries.find((s) => s.slug === quiz.series_slug);
        return { quiz, series };
    });

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconAward size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Luyện thi</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
                        Luyện thi <span className="gradient-text">Chứng chỉ</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
                        Học lộ trình ôn tập theo từng chứng chỉ, sau đó thi thử trắc nghiệm để kiểm tra kiến thức trước khi thi thật.
                    </p>

                    {/* How it works */}
                    <div className="flex items-center gap-3 mt-6 text-sm">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                            <IconBook size={14} />
                            1. Học lộ trình
                        </span>
                        <IconArrowRight size={14} className="text-zinc-300" />
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-medium">
                            <IconAward size={14} />
                            2. Thi thử
                        </span>
                        <IconArrowRight size={14} className="text-zinc-300" />
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
                            ✓ Sẵn sàng thi thật
                        </span>
                    </div>
                </div>
            </section>

            {/* Cert Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {certCards.map(({ quiz, series }) => (
                        <div
                            key={quiz.id}
                            className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
                        >
                            {/* Banner image */}
                            {series?.featured_image && (
                                <div className="relative w-full aspect-[16/9] bg-zinc-100 dark:bg-zinc-800">
                                    <Image
                                        src={`/${series.featured_image}`}
                                        alt={quiz.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                </div>
                            )}

                            {/* Header with provider & level */}
                            <div className="px-6 pt-6 pb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${PROVIDER_COLORS[quiz.provider] || "bg-zinc-100 text-zinc-600"}`}>
                                        {quiz.provider}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${LEVEL_COLORS[quiz.level] || "bg-zinc-100 text-zinc-600"}`}>
                                        {quiz.level}
                                    </span>
                                </div>

                                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                    {quiz.title}
                                </h2>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                    {quiz.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {quiz.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800 divide-x divide-zinc-100 dark:divide-zinc-800 grid grid-cols-2">
                                {/* Study link */}
                                {series ? (
                                    <Link
                                        href={`/series/${series.category?.slug || "luyen-thi"}/${series.slug}/`}
                                        className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <IconBook size={15} />
                                        Học lộ trình
                                    </Link>
                                ) : (
                                    <span className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-zinc-300 dark:text-zinc-600 cursor-not-allowed">
                                        <IconBook size={15} />
                                        Sắp có
                                    </span>
                                )}

                                {/* Quiz link */}
                                <Link
                                    href={`/luyen-thi/${quiz.slug}/`}
                                    className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
                                >
                                    <IconAward size={15} />
                                    Thi thử
                                    <span className="text-xs text-zinc-400 font-normal">
                                        {quiz.questions_count} câu · {quiz.duration_minutes}p
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {certCards.length === 0 && (
                    <div className="text-center py-20">
                        <IconAward size={48} className="mx-auto text-zinc-300 mb-4" />
                        <h2 className="text-xl font-bold text-zinc-400 mb-2">Chưa có đề thi nào</h2>
                        <p className="text-zinc-400">Các đề thi trắc nghiệm sẽ sớm được cập nhật.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
