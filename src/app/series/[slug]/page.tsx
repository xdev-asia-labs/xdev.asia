import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getSeries, getSeriesSlugs, formatDate, getAuthorById } from "@/lib/data";
import { getValidImageUrl } from "@/utils/image";
import ContentRenderer from "@/components/ContentRenderer";
import TableOfContents from "@/components/TableOfContents";
import { IconChevronRight, IconBook, IconClock, IconEye, IconStar } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
    return getSeriesSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const series = getSeries(slug);
    if (!series) return {};
    return {
        title: series.title,
        description: series.description || series.title,
    };
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const series = getSeries(slug);
    if (!series) notFound();

    const fullAuthor = getAuthorById(series.author.id);

    const levelLabels: Record<string, string> = {
        beginner: "Cơ bản",
        intermediate: "Trung cấp",
        advanced: "Nâng cao",
    };

    const levelColors: Record<string, string> = {
        beginner: "text-white bg-emerald-500 border-emerald-500",
        intermediate: "text-white bg-brand-500 border-brand-500",
        advanced: "text-white bg-purple-500 border-purple-500",
    };

    const totalLessons = series.sections.reduce((sum, s) => sum + s.lessons.length, 0);
    const displayLessons = totalLessons || series.lesson_count || 0;

    return (
        <div>
            {/* Series Hero */}
            <div className="hero-gradient border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/series/" className="hover:text-brand-600 transition-colors">Series</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <span className="text-zinc-400 truncate max-w-50">{series.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Left: Series Info */}
                        <div className="lg:col-span-3">
                            <div className="flex flex-wrap items-center gap-2 mb-6">
                                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border backdrop-blur-sm ${levelColors[series.level] || levelColors.beginner}`}>
                                    {levelLabels[series.level] || series.level}
                                </span>
                                {!series.is_free && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-amber-500 border border-amber-500">
                                        {Number(series.price).toLocaleString("vi-VN")}đ
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.15] text-zinc-900 mb-5">
                                {series.title}
                            </h1>

                            {series.description && (
                                <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-2xl">
                                    {series.description}
                                </p>
                            )}

                            {/* Stats row */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-[10px] font-bold">
                                        {series.author.name.charAt(0)}
                                    </div>
                                    <span className="text-zinc-600">{series.author.name}</span>
                                </div>
                                {displayLessons > 0 && (
                                    <div className="flex items-center gap-1.5">
                                        <IconBook size={15} className="text-zinc-400" />
                                        <span>{displayLessons} bài học</span>
                                    </div>
                                )}
                                {series.duration_hours && (
                                    <div className="flex items-center gap-1.5">
                                        <IconClock size={15} className="text-zinc-400" />
                                        <span>{series.duration_hours} giờ</span>
                                    </div>
                                )}
                                {series.enrollment_count > 0 && (
                                    <div className="flex items-center gap-1.5">
                                        <IconEye size={15} className="text-zinc-400" />
                                        <span>{series.enrollment_count} học viên</span>
                                    </div>
                                )}
                                {series.average_rating > 0 && (
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <IconStar key={star} size={14} className={star <= Math.round(Number(series.average_rating)) ? "text-amber-500 fill-current" : "text-zinc-300"} />
                                            ))}
                                        </div>
                                        <span>{Number(series.average_rating).toFixed(1)} ({series.review_count})</span>
                                    </div>
                                )}
                            </div>

                            {series.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {series.tags.map((tag) => (
                                        <span key={tag.slug} className="tag-pill">
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right: Featured Image */}
                        <div className="lg:col-span-2">
                            {series.featured_image && (
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                                    <Image
                                        src={getValidImageUrl(series.featured_image, series.slug)}
                                        alt={series.title}
                                        width={800}
                                        height={450}
                                        style={{ height: "auto" }}
                                        className="w-full h-auto aspect-video object-cover"
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="relative flex gap-16">
                    {/* Main Content */}
                    <article className="min-w-0 flex-1 max-w-4xl">
                        {/* Curriculum Section */}
                        {series.sections.length > 0 && (
                            <section className="mb-16">
                                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-2 flex items-center gap-3">
                                    <span className="w-1 h-6 rounded-full bg-brand-500" />
                                    Nội dung series
                                </h2>
                                <p className="text-sm text-zinc-600 mb-6 ml-4">
                                    {series.sections.length} phần &middot; {totalLessons} bài học
                                </p>
                                <div className="space-y-3">
                                    {series.sections.map((section, sIdx) => (
                                        <div key={section.id} className="rounded-xl overflow-hidden glass-card" style={{ transform: "none" }}>
                                            <div className="px-5 py-4 flex items-center justify-between border-b border-zinc-100">
                                                <h3 className="font-semibold text-zinc-800">
                                                    <span className="text-brand-600 mr-2">{sIdx + 1}.</span>
                                                    {section.title}
                                                </h3>
                                                <span className="text-xs text-zinc-400 shrink-0 ml-3">{section.lessons.length} bài</span>
                                            </div>
                                            <ul>
                                                {section.lessons.map((lesson, lIdx) => (
                                                    <li key={lesson.id} className={lIdx < section.lessons.length - 1 ? "border-b border-zinc-50" : ""}>
                                                        <Link href={`/lessons/${series.slug}/${lesson.slug}/`} className="flex items-center gap-3 px-5 py-3 text-sm hover:bg-brand-50 transition-colors group">
                                                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-zinc-500 shrink-0 bg-brand-50 border border-brand-100">
                                                                {lesson.sort_order + 1}
                                                            </span>
                                                            <span className="flex-1 text-zinc-600 group-hover:text-brand-600 transition-colors">{lesson.title}</span>
                                                            {lesson.duration_minutes && (
                                                                <span className="text-xs text-zinc-400 shrink-0">{lesson.duration_minutes} phút</span>
                                                            )}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Series Content (HTML) */}
                        {series.content && (
                            <ContentRenderer html={series.content} />
                        )}

                        {/* Author Profile Card */}
                        {fullAuthor && (
                            <div className="mt-16 p-8 rounded-2xl glass-card" style={{ transform: "none" }}>
                                <div className="flex flex-col sm:flex-row items-start gap-5">
                                    {fullAuthor.avatar ? (
                                        <Image
                                            src={getValidImageUrl(fullAuthor.avatar, fullAuthor.name)}
                                            alt={fullAuthor.name}
                                            width={72}
                                            height={72}
                                            style={{ height: "auto" }}
                                            className="rounded-2xl object-cover ring-2 ring-white shadow-lg shrink-0"
                                        />
                                    ) : (
                                        <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                                            {fullAuthor.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <div className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-1">Giảng viên</div>
                                        <h3 className="text-xl font-extrabold text-zinc-900 mb-2">{fullAuthor.name}</h3>
                                        {fullAuthor.bio && (
                                            <p className="text-sm text-zinc-500 leading-relaxed">{fullAuthor.bio}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Reviews */}
                        {series.reviews.length > 0 && (
                            <section className="mt-12 pt-10 border-t border-zinc-100">
                                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-8 flex items-center gap-3">
                                    <IconStar size={24} className="text-amber-500 fill-current" />
                                    Đánh giá ({series.reviews.length})
                                </h2>

                                {/* Rating summary */}
                                <div className="flex items-center gap-6 mb-10 p-6 rounded-2xl glass-card" style={{ transform: "none" }}>
                                    <div className="text-center">
                                        <div className="text-5xl font-extrabold text-zinc-900">{Number(series.average_rating).toFixed(1)}</div>
                                        <div className="flex items-center gap-0.5 mt-2 justify-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <IconStar key={star} size={18} className={star <= Math.round(Number(series.average_rating)) ? "text-amber-500 fill-current" : "text-zinc-300"} />
                                            ))}
                                        </div>
                                        <div className="text-xs text-zinc-400 mt-1">{series.review_count} đánh giá</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {series.reviews.map((review) => (
                                        <div key={review.id} className="flex gap-4 p-5 rounded-xl glass-card" style={{ transform: "none" }}>
                                            {review.user.avatar ? (
                                                <Image
                                                    src={getValidImageUrl(review.user.avatar, review.user.name)}
                                                    alt={review.user.name}
                                                    width={40}
                                                    height={40}
                                                    style={{ height: "auto" }}
                                                    className="rounded-full shrink-0 object-cover ring-2 ring-white"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold ring-2 ring-white shrink-0">
                                                    {review.user.name.charAt(0)}
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-sm text-zinc-800">{review.user.name}</span>
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <IconStar key={star} size={12} className={star <= review.rating ? "text-amber-500 fill-current" : "text-zinc-300"} />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-zinc-400">{formatDate(review.created_at)}</span>
                                                </div>
                                                {review.comment && (
                                                    <p className="text-sm text-zinc-600 leading-relaxed">{review.comment}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    {/* Sidebar TOC */}
                    {series.content && (
                        <aside className="hidden xl:block w-72 shrink-0">
                            <div className="sticky top-24">
                                <TableOfContents html={series.content} />
                            </div>
                        </aside>
                    )}
                </div>
            </div>
        </div>
    );
}
