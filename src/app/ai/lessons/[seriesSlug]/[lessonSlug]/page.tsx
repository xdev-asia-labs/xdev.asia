import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAILesson, getAISeriesLessonSlugs, getAISeries, formatDuration } from "@/lib/data";
import ContentRenderer from "@/components/ContentRenderer";
import { IconChevronRight, IconClock, IconBrain } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
    return getAISeriesLessonSlugs().map(({ seriesSlug, lessonSlug }) => ({
        seriesSlug,
        lessonSlug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ seriesSlug: string; lessonSlug: string }>;
}): Promise<Metadata> {
    const { seriesSlug, lessonSlug } = await params;
    const lesson = getAILesson(seriesSlug, lessonSlug);
    if (!lesson) return {};
    return {
        title: `${lesson.title} — ${lesson.course.title} — AI`,
        description: lesson.description || lesson.title,
    };
}

export default async function AILessonPage({
    params,
}: {
    params: Promise<{ seriesSlug: string; lessonSlug: string }>;
}) {
    const { seriesSlug, lessonSlug } = await params;
    const lesson = getAILesson(seriesSlug, lessonSlug);
    if (!lesson) notFound();

    const series = getAISeries(seriesSlug);

    // Flat list of all lessons across sections for prev/next nav
    const allLessons = series
        ? series.sections.flatMap((s) => s.lessons.map((l) => ({ ...l, sectionTitle: s.title })))
        : [];
    const currentIdx = allLessons.findIndex((l) => l.slug === lessonSlug);
    const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
    const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
                    <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                    <IconChevronRight size={14} className="text-zinc-300" />
                    <Link href="/ai/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
                        <IconBrain size={13} className="text-brand-600" />
                        AI
                    </Link>
                    <IconChevronRight size={14} className="text-zinc-300" />
                    <Link href={`/ai/series/${seriesSlug}/`} className="hover:text-brand-600 transition-colors truncate max-w-40">
                        {lesson.course.title}
                    </Link>
                    <IconChevronRight size={14} className="text-zinc-300 shrink-0" />
                    <span className="text-zinc-400 truncate max-w-50">{lesson.title}</span>
                </nav>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
                    {/* Main content */}
                    <div className="xl:col-span-3 min-w-0">
                        {/* Video player */}
                        {lesson.video_url && (
                            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg aspect-video border border-zinc-200">
                                <iframe
                                    src={lesson.video_url}
                                    title={lesson.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        )}

                        {/* Lesson header */}
                        <div className="mb-10">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="text-xs font-medium text-brand-600 px-3 py-1 rounded-lg bg-brand-50 border border-brand-200">
                                    {lesson.section_title}
                                </span>
                                {lesson.duration_minutes && (
                                    <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                                        <IconClock size={13} />
                                        {formatDuration(lesson.duration_minutes)}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-4">
                                {lesson.title}
                            </h1>
                            {lesson.description && (
                                <p className="text-lg text-zinc-500 leading-relaxed">
                                    {lesson.description}
                                </p>
                            )}
                        </div>

                        {/* Lesson content */}
                        {lesson.content && (
                            <ContentRenderer html={lesson.content} />
                        )}

                        {/* Prev / Next */}
                        <div className="mt-12 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100">
                            {prevLesson ? (
                                <Link
                                    href={`/ai/lessons/${seriesSlug}/${prevLesson.slug}/`}
                                    className="group flex items-center gap-4 p-5 rounded-xl glass-card"
                                    style={{ transform: "none" }}
                                >
                                    <svg className="w-5 h-5 text-zinc-600 shrink-0 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    <div className="min-w-0">
                                        <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1">Bài trước</div>
                                        <div className="text-sm font-semibold text-zinc-700 line-clamp-2 group-hover:text-brand-600 transition-colors">{prevLesson.title}</div>
                                    </div>
                                </Link>
                            ) : <div />}

                            {nextLesson ? (
                                <Link
                                    href={`/ai/lessons/${seriesSlug}/${nextLesson.slug}/`}
                                    className="group flex items-center gap-4 p-5 rounded-xl glass-card text-right ml-auto w-full justify-end"
                                    style={{ transform: "none" }}
                                >
                                    <div className="min-w-0">
                                        <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1">Bài tiếp</div>
                                        <div className="text-sm font-semibold text-zinc-700 line-clamp-2 group-hover:text-brand-600 transition-colors">{nextLesson.title}</div>
                                    </div>
                                    <svg className="w-5 h-5 text-zinc-600 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            ) : <div />}
                        </div>
                    </div>

                    {/* Sidebar — series curriculum */}
                    {series && series.sections.length > 0 && (
                        <aside className="xl:col-span-1">
                            <div className="sticky top-24 rounded-2xl overflow-hidden glass-card" style={{ transform: "none" }}>
                                <div className="px-5 py-4 border-b border-zinc-100">
                                    <Link href={`/ai/series/${seriesSlug}/`} className="text-xs font-bold uppercase tracking-wider text-brand-600 hover:underline">
                                        ← {lesson.course.title}
                                    </Link>
                                    <h2 className="text-sm font-bold text-zinc-900 mt-1">Nội dung series</h2>
                                </div>
                                <div className="max-h-[70vh] overflow-y-auto">
                                    {series.sections.map((section) => (
                                        <div key={section.id}>
                                            <div className="px-5 py-3 bg-surface-50 border-b border-zinc-100">
                                                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wide">{section.title}</h3>
                                            </div>
                                            <ul>
                                                {section.lessons.map((l) => {
                                                    const isActive = l.slug === lessonSlug;
                                                    return (
                                                        <li key={l.id} className="border-b border-zinc-50">
                                                            <Link
                                                                href={`/ai/lessons/${seriesSlug}/${l.slug}/`}
                                                                className={`flex items-start gap-3 px-5 py-3 text-[13px] transition-colors ${isActive
                                                                    ? "bg-brand-50 text-brand-600 font-semibold"
                                                                    : "text-zinc-500 hover:bg-brand-50/50 hover:text-zinc-800"
                                                                    }`}
                                                            >
                                                                <span className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${isActive
                                                                    ? "bg-brand-400 text-white"
                                                                    : "text-zinc-600"
                                                                    }`}
                                                                    style={!isActive ? { border: "1px solid #e2e8f0" } : undefined}
                                                                >
                                                                    {l.sort_order + 1}
                                                                </span>
                                                                <span className="flex-1 leading-snug">{l.title}</span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    )}
                </div>
            </div>
        </div>
    );
}
