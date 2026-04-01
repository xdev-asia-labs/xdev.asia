import type { SeriesIndex } from "@/lib/types";
import { getValidImageUrl } from "@/utils/image";
import Link from "next/link";
import { IconBook, IconClock, IconStar } from "./Icons";
import SkeletonImage from "./SkeletonImage";

export default function SeriesCard({ series, priority = false, basePath }: { series: SeriesIndex; priority?: boolean; basePath?: string }) {
    const seriesPath = basePath ? `${basePath}/${series.slug}/` : `/series/${series.category?.slug || "uncategorized"}/${series.slug}/`;
    const levelLabels: Record<string, string> = {
        beginner: "Cơ bản",
        intermediate: "Trung cấp",
        advanced: "Nâng cao",
    };

    const levelColors: Record<string, string> = {
        beginner: "text-white bg-emerald-500/90",
        intermediate: "text-white bg-brand-500/90",
        advanced: "text-white bg-purple-500/90",
    };

    const imageUrl = getValidImageUrl(series.featured_image, series.slug);
    const visibleTags = series.tags?.slice(0, 2) ?? [];

    return (
        <article className="group flex flex-col h-full post-card rounded-2xl overflow-hidden">
            <Link href={seriesPath}>
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
                    <SkeletonImage
                        src={imageUrl}
                        alt={series.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={priority}
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase backdrop-blur-sm shadow-sm ${levelColors[series.level] || levelColors.beginner}`}>
                            {levelLabels[series.level] || series.level}
                        </span>
                        {!series.is_free && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase backdrop-blur-sm text-white bg-amber-500/90 shadow-sm">
                                {Number(series.price).toLocaleString("vi-VN")}đ
                            </span>
                        )}
                    </div>
                </div>
            </Link>
            <div className="p-4 flex flex-col flex-1">
                <Link href={seriesPath} className="block group-hover:text-brand-600 transition-colors duration-200">
                    <h2 className="text-[0.9rem] font-bold text-zinc-900 line-clamp-2 leading-snug">
                        {series.title}
                    </h2>
                </Link>

                {series.description && (
                    <p className="mt-2 text-[0.8rem] text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                        {series.description}
                    </p>
                )}

                {/* Tags */}
                {visibleTags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {visibleTags.map((tag) => (
                            <Link key={tag.slug} href={`/tags/${tag.slug}/`} className="tag-pill text-[10px] px-2 py-0.5">
                                {tag.name}
                            </Link>
                        ))}
                    </div>
                )}

                <div className="mt-3 pt-3 flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                        {series.lesson_count > 0 && (
                            <span className="flex items-center gap-1.5">
                                <IconBook size={13} className="text-zinc-400" />
                                {series.lesson_count} bài
                            </span>
                        )}
                        {Number(series.duration_hours) > 0 && (
                            <>
                                {series.lesson_count > 0 && <span className="w-0.5 h-0.5 rounded-full bg-zinc-300" />}
                                <span className="flex items-center gap-1.5">
                                    <IconClock size={13} className="text-zinc-400" />
                                    {series.duration_hours}h
                                </span>
                            </>
                        )}
                        {series.lesson_count === 0 && (!series.duration_hours || series.duration_hours === 0) && (
                            <span className="text-[11px] text-zinc-300 italic">Đang cập nhật</span>
                        )}
                    </div>
                    {series.average_rating > 0 && (
                        <div className="flex items-center gap-1 text-amber-500">
                            <IconStar size={13} className="fill-current" />
                            <span className="font-semibold text-[11px]">{Number(series.average_rating).toFixed(1)}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
