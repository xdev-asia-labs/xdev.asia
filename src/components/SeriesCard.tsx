import Link from "next/link";
import Image from "next/image";
import type { SeriesIndex } from "@/lib/types";
import { getValidImageUrl } from "@/utils/image";
import { IconBook, IconClock, IconStar } from "./Icons";

export default function SeriesCard({ series, priority = false, basePath = "/series" }: { series: SeriesIndex; priority?: boolean; basePath?: string }) {
    const levelLabels: Record<string, string> = {
        beginner: "Cơ bản",
        intermediate: "Trung cấp",
        advanced: "Nâng cao",
    };

    const levelColors: Record<string, string> = {
        beginner: "text-white bg-emerald-500",
        intermediate: "text-white bg-brand-500",
        advanced: "text-white bg-purple-500",
    };

    const imageUrl = getValidImageUrl(series.featured_image, series.slug);

    return (
        <article className="group flex flex-col h-full glass-card rounded-2xl overflow-hidden">
            <Link href={`${basePath}/${series.slug}/`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-100">
                    <Image
                        src={imageUrl}
                        alt={series.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={priority}
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase backdrop-blur-sm ${levelColors[series.level] || levelColors.beginner}`}>
                            {levelLabels[series.level] || series.level}
                        </span>
                        {!series.is_free && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase backdrop-blur-sm text-white bg-amber-500">
                                {Number(series.price).toLocaleString("vi-VN")}đ
                            </span>
                        )}
                    </div>
                </div>
            </Link>
            <div className="p-5 flex flex-col flex-1">
                <Link href={`${basePath}/${series.slug}/`} className="block group-hover:text-brand-600 transition-colors">
                    <h2 className="text-base font-bold text-zinc-900 line-clamp-2 leading-tight">
                        {series.title}
                    </h2>
                </Link>

                {series.description && (
                    <p className="mt-2.5 text-sm text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                        {series.description}
                    </p>
                )}

                <div className="mt-4 pt-3 flex items-center justify-between text-sm font-medium text-zinc-400 border-t border-zinc-100">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5">
                            <IconBook size={14} className="text-zinc-400" />
                            {series.lesson_count} bài
                        </span>
                        {series.duration_hours && (
                            <>
                                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                <span className="flex items-center gap-1.5">
                                    <IconClock size={14} className="text-zinc-400" />
                                    {series.duration_hours}h
                                </span>
                            </>
                        )}
                    </div>
                    {series.average_rating > 0 && (
                        <div className="flex items-center gap-1 text-amber-500">
                            <IconStar size={14} className="fill-current" />
                            <span className="font-semibold text-xs">{Number(series.average_rating).toFixed(1)}</span>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
