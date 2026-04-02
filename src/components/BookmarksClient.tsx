"use client";

import { useBookmarks } from "@/lib/useUserData";
import { useAuth } from "@/components/AuthProvider";
import { getValidImageUrl } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

export default function BookmarksClient() {
    const { user, loading: authLoading, openLoginModal } = useAuth();
    const { bookmarks, loading } = useBookmarks();

    if (authLoading || loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-3 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center py-20">
                <svg className="w-16 h-16 mx-auto text-zinc-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <h2 className="text-xl font-bold text-zinc-900 mb-2">Đăng nhập để xem bookmark</h2>
                <p className="text-zinc-500 mb-6 text-sm">Lưu lại bài viết yêu thích để đọc sau</p>
                <button
                    onClick={openLoginModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Đăng nhập
                </button>
            </div>
        );
    }

    if (bookmarks.length === 0) {
        return (
            <div className="text-center py-20">
                <svg className="w-16 h-16 mx-auto text-zinc-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <h2 className="text-xl font-bold text-zinc-900 mb-2">Chưa có bookmark nào</h2>
                <p className="text-zinc-500 text-sm mb-6">
                    Nhấn biểu tượng bookmark trên bài viết để lưu lại đọc sau
                </p>
                <Link href="/blog/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors">
                    Khám phá bài viết
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookmarks.map((item) => (
                <Link
                    key={item.slug}
                    href={`/blog/${item.slug}/`}
                    className="group post-card rounded-2xl overflow-hidden flex flex-col h-full"
                >
                    <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
                        <Image
                            src={getValidImageUrl(item.featured_image, item.slug)}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                        {item.category && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 mb-2">
                                {item.category}
                            </span>
                        )}
                        <h3 className="text-base font-bold text-zinc-900 leading-snug mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                            {item.title}
                        </h3>
                        {item.excerpt && (
                            <p className="text-sm text-zinc-500 line-clamp-2 mb-3">{item.excerpt}</p>
                        )}
                        <div className="mt-auto text-xs text-zinc-400">
                            Đã lưu {new Date(item.bookmarked_at).toLocaleDateString("vi-VN")}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
