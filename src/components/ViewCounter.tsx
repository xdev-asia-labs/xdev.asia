"use client";

import { useViewCount } from "@/lib/useViewCount";

export default function ViewCounter({ slug, className = "" }: { slug: string; className?: string }) {
    const views = useViewCount(slug);

    if (views === null) return null;

    return (
        <span className={`inline-flex items-center gap-1 text-zinc-500 ${className}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
            {views.toLocaleString("vi-VN")}
        </span>
    );
}
