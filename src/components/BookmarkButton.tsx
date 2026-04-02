"use client";

import { useState } from "react";
import { useBookmarks } from "@/lib/useUserData";
import { useAuth } from "@/components/AuthProvider";

interface BookmarkButtonProps {
    slug: string;
    title: string;
    excerpt: string | null;
    featured_image: string | null;
    category: string | null;
}

export default function BookmarkButton({ slug, title, excerpt, featured_image, category }: BookmarkButtonProps) {
    const { user, openLoginModal } = useAuth();
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const [animating, setAnimating] = useState(false);

    const saved = isBookmarked(slug);

    async function handleClick() {
        if (!user) {
            openLoginModal();
            return;
        }
        setAnimating(true);
        await toggleBookmark({ slug, title, excerpt, featured_image, category });
        setTimeout(() => setAnimating(false), 300);
    }

    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${saved
                ? "bg-brand-50 text-brand-600 border border-brand-200"
                : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-transparent"
                } ${animating ? "scale-110" : ""}`}
            title={saved ? "Bỏ bookmark" : "Bookmark bài viết"}
        >
            <svg
                className={`w-4 h-4 transition-colors ${saved ? "fill-current" : ""}`}
                fill={saved ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            {saved ? "Đã lưu" : "Lưu"}
        </button>
    );
}
