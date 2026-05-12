import BookmarkButton from "@/components/BookmarkButton";
import ContentLanguageSwitcher from "@/components/ContentLanguageSwitcher";
import ContentRenderer from "@/components/ContentRenderer";
import GiscusComments from "@/components/GiscusComments";
import { IconBook, IconChevronRight, IconClock } from "@/components/Icons";
import { LessonCheckbox, SeriesProgressBar } from "@/components/SeriesProgress";
import ShareButtons from "@/components/ShareButtons";
import { getSeriesLanguageLinks } from "@/lib/data";
import type { Series, Author } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { getValidImageUrl } from "@/utils/image";

interface Props {
    series: Series;
    category: string;
    categoryName: string;
    fullAuthor: Author | null;
    siteUrl: string;
}

// Strip "Phần N: " prefix to get clean section header
function cleanSectionTitle(title: string): string {
    return title.replace(/^(Phần|Part|Chapter)\s*\d+\s*[:.\-–—]?\s*/i, "").trim() || title;
}

export default function DomainSeriesLayout({ series, category, categoryName, fullAuthor, siteUrl }: Props) {
    const totalLessons = series.sections.reduce((sum, s) => sum + s.lessons.length, 0);
    const totalMinutes = series.sections.reduce(
        (sum, s) => sum + s.lessons.reduce((a, l) => a + (l.duration_minutes || 0), 0),
        0,
    );
    const canonicalUrl = `${siteUrl}/series/${category}/${series.slug}/`;

    return (
        <div className="bg-white">
            {/* Compact hero strip */}
            <div className="border-b border-zinc-200/70 bg-zinc-50/40">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={12} className="text-zinc-300" />
                        <Link href="/series/" className="hover:text-brand-600 transition-colors">Series</Link>
                        <IconChevronRight size={12} className="text-zinc-300" />
                        <Link href={`/series/${category}/`} className="hover:text-brand-600 transition-colors">
                            {categoryName}
                        </Link>
                        <IconChevronRight size={12} className="text-zinc-300" />
                        <span className="text-zinc-700 truncate max-w-80">{series.title}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex gap-10 xl:gap-14 py-10">
                    {/* === LEFT SIDEBAR === */}
                    <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
                        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 -mr-2 scrollbar-thin">
                            {/* Series title block */}
                            <Link href={`/series/${category}/${series.slug}/`} className="group flex items-center gap-3 mb-6 pb-5 border-b border-zinc-100">
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <IconBook size={18} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-600">{categoryName}</div>
                                    <div className="text-sm font-bold text-zinc-900 truncate group-hover:text-brand-600 transition-colors">
                                        {series.title.split("—")[0]?.trim() || series.title}
                                    </div>
                                </div>
                            </Link>

                            {/* Sections list */}
                            <nav className="space-y-6">
                                {series.sections.map((section) => (
                                    <div key={section.id}>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-2 px-2">
                                            {cleanSectionTitle(section.title)}
                                        </div>
                                        <ul className="space-y-0.5">
                                            {section.lessons.map((lesson) => (
                                                <li key={lesson.id}>
                                                    <Link
                                                        href={`/lessons/${series.slug}/${lesson.slug}/`}
                                                        className="flex items-start gap-2 px-2 py-1.5 rounded-md text-[13px] leading-snug text-zinc-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                                                    >
                                                        <span className="mt-0.5 w-3.5 h-3.5 rounded-sm border border-zinc-300 shrink-0" />
                                                        <span className="line-clamp-2">{lesson.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* === MAIN === */}
                    <main className="flex-1 min-w-0 max-w-3xl">
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-400 mb-3">
                            {categoryName}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-4 flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-9 h-9 mt-1 rounded-lg bg-brand-50 text-brand-600 shrink-0">
                                <IconBook size={20} />
                            </span>
                            <span className="leading-tight">{series.title}</span>
                        </h1>

                        {series.description && (
                            <p className="text-base text-zinc-600 leading-relaxed mb-6">
                                {series.description}
                            </p>
                        )}

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 mb-8">
                            {fullAuthor && (
                                <Link href="/gioi-thieu/" className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                                    {fullAuthor.avatar ? (
                                        <Image
                                            src={getValidImageUrl(fullAuthor.avatar, fullAuthor.name)}
                                            alt={fullAuthor.name}
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 rounded-full object-cover ring-1 ring-zinc-200"
                                        />
                                    ) : (
                                        <div className="w-5 h-5 rounded-full bg-brand-500" />
                                    )}
                                    <span>{fullAuthor.name}</span>
                                </Link>
                            )}
                            <span className="flex items-center gap-1.5">
                                <IconBook size={13} className="text-zinc-400" />
                                {totalLessons} bài
                            </span>
                            {totalMinutes > 0 && (
                                <span className="flex items-center gap-1.5">
                                    <IconClock size={13} className="text-zinc-400" />
                                    {Math.round(totalMinutes / 60)} giờ
                                </span>
                            )}
                            <ContentLanguageSwitcher
                                links={getSeriesLanguageLinks(series)}
                                currentLocale="vi"
                                className=""
                            />
                        </div>

                        {/* Progress bar */}
                        {totalLessons > 0 && (
                            <div className="mb-8">
                                <SeriesProgressBar seriesSlug={series.slug} totalLessons={totalLessons} />
                            </div>
                        )}

                        {/* Section cards grid (GitBook style) */}
                        {series.sections.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {series.sections.map((section, sIdx) => {
                                    const firstLesson = section.lessons[0];
                                    if (!firstLesson) return null;
                                    return (
                                        <Link
                                            key={section.id}
                                            href={`/lessons/${series.slug}/${firstLesson.slug}/`}
                                            className="group relative flex flex-col rounded-xl border border-zinc-200 bg-white overflow-hidden hover:border-brand-300 hover:shadow-md transition-all"
                                        >
                                            <div className="aspect-[16/9] bg-gradient-to-br from-brand-50 via-zinc-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, #ea580c 0%, transparent 40%), radial-gradient(circle at 70% 70%, #6366f1 0%, transparent 40%)" }} />
                                                <div className="relative w-14 h-14 rounded-2xl bg-white/90 shadow-sm border border-white flex items-center justify-center text-brand-600 font-extrabold text-xl">
                                                    {sIdx + 1}
                                                </div>
                                            </div>
                                            <div className="px-4 py-3.5">
                                                <div className="font-semibold text-sm text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                                                    {cleanSectionTitle(section.title)}
                                                </div>
                                                <div className="text-xs text-zinc-500 mt-1">
                                                    {section.lessons.length} bài học
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}

                        {/* Full curriculum collapse (lessons list) */}
                        {series.sections.length > 0 && (
                            <details className="mb-12 rounded-xl border border-zinc-200 bg-zinc-50/40 overflow-hidden">
                                <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 text-sm font-semibold text-zinc-800 hover:bg-zinc-100/60 transition-colors">
                                    <span className="flex items-center gap-2">
                                        <IconChevronRight size={14} className="text-zinc-400 transition-transform" />
                                        Xem toàn bộ {totalLessons} bài học
                                    </span>
                                    <span className="text-xs text-zinc-500 font-normal">{series.sections.length} phần</span>
                                </summary>
                                <div className="divide-y divide-zinc-100 bg-white">
                                    {series.sections.map((section, sIdx) => (
                                        <div key={section.id} className="px-5 py-3">
                                            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                                                {sIdx + 1}. {cleanSectionTitle(section.title)}
                                            </div>
                                            <ul className="space-y-0.5">
                                                {section.lessons.map((lesson) => (
                                                    <li key={lesson.id}>
                                                        <div className="flex items-center gap-3 py-1.5 text-sm group">
                                                            <LessonCheckbox seriesSlug={series.slug} lessonSlug={lesson.slug} />
                                                            <Link
                                                                href={`/lessons/${series.slug}/${lesson.slug}/`}
                                                                className="flex-1 text-zinc-700 group-hover:text-brand-600 transition-colors"
                                                            >
                                                                {lesson.title}
                                                            </Link>
                                                            {lesson.duration_minutes && (
                                                                <span className="text-xs text-zinc-400 shrink-0">{lesson.duration_minutes} ph</span>
                                                            )}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        )}

                        {/* Series intro content */}
                        {series.content && (
                            <div className="mb-12">
                                <ContentRenderer html={series.content} />
                            </div>
                        )}

                        {/* Tags */}
                        {series.tags.length > 0 && (
                            <div className="mb-10 pb-8 border-b border-zinc-100">
                                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Chủ đề</div>
                                <div className="flex flex-wrap gap-2">
                                    {series.tags.map((tag) => (
                                        <Link key={tag.slug} href={`/tags/${tag.slug}/`} className="tag-pill">
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Comments */}
                        <GiscusComments term={`/series/${category}/${series.slug}/`} />
                    </main>

                    {/* === RIGHT RAIL === */}
                    <aside className="hidden xl:block w-56 shrink-0">
                        <div className="sticky top-24 space-y-6">
                            <div>
                                <div className="text-xs font-semibold text-zinc-700 mb-3">Bài viết hữu ích?</div>
                                <div className="flex items-center gap-2">
                                    <button type="button" aria-label="Hữu ích" className="w-9 h-9 rounded-full border border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-base">😀</button>
                                    <button type="button" aria-label="Bình thường" className="w-9 h-9 rounded-full border border-zinc-200 hover:border-amber-300 hover:bg-amber-50 transition-colors text-base">😐</button>
                                    <button type="button" aria-label="Chưa hài lòng" className="w-9 h-9 rounded-full border border-zinc-200 hover:border-rose-300 hover:bg-rose-50 transition-colors text-base">🙁</button>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-zinc-100">
                                <div className="text-xs font-semibold text-zinc-700 mb-3">Lưu &amp; Chia sẻ</div>
                                <div className="space-y-3">
                                    <BookmarkButton
                                        slug={`series-${series.slug}`}
                                        title={series.title}
                                        excerpt={series.description}
                                        featured_image={series.featured_image}
                                        category={categoryName}
                                    />
                                    <ShareButtons title={series.title} url={canonicalUrl} />
                                </div>
                            </div>

                            {fullAuthor && (
                                <div className="pt-6 border-t border-zinc-100">
                                    <div className="text-xs font-semibold text-zinc-700 mb-3">Tác giả</div>
                                    <Link href="/gioi-thieu/" className="flex items-center gap-3 group">
                                        {fullAuthor.avatar ? (
                                            <Image
                                                src={getValidImageUrl(fullAuthor.avatar, fullAuthor.name)}
                                                alt={fullAuthor.name}
                                                width={36}
                                                height={36}
                                                className="w-9 h-9 rounded-full object-cover ring-1 ring-zinc-200"
                                            />
                                        ) : (
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-700" />
                                        )}
                                        <div className="min-w-0">
                                            <div className="text-sm font-semibold text-zinc-800 truncate group-hover:text-brand-600 transition-colors">{fullAuthor.name}</div>
                                            {fullAuthor.bio && (
                                                <div className="text-[11px] text-zinc-500 line-clamp-2">{fullAuthor.bio}</div>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
