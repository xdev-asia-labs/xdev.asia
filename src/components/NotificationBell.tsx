"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IconBell } from "./Icons";
import { useNotifications } from "@/lib/useNotifications";
import { useAuth } from "./AuthProvider";

function timeAgo(dateStr: string): string {
    const now = Date.now();
    const then = new Date(dateStr).getTime();
    const diff = now - then;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Vừa xong";
    if (minutes < 60) return `${minutes} phút trước`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} giờ trước`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} ngày trước`;
    const months = Math.floor(days / 30);
    return `${months} tháng trước`;
}

export default function NotificationBell() {
    const { user, openLoginModal } = useAuth();
    const { notifications, unreadCount, loading, markAllRead } = useNotifications();
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    function handleBellClick() {
        if (!user) {
            openLoginModal();
            return;
        }
        setOpen(!open);
        if (!open && unreadCount > 0) {
            markAllRead();
        }
    }

    if (loading) {
        return <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse" />;
    }

    return (
        <div className="relative" ref={panelRef}>
            <button
                onClick={handleBellClick}
                className="relative p-2 rounded-lg text-zinc-400 hover:text-brand-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Thông báo"
            >
                <IconBell size={18} />
                {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1 animate-pulse">
                        {unreadCount > 9 ? "9+" : unreadCount}
                    </span>
                )}
            </button>

            {/* Notification dropdown */}
            {open && user && (
                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white dark:bg-zinc-900 rounded-xl shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50 border border-zinc-100 dark:border-zinc-800 z-50 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
                        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Thông báo</h3>
                        {notifications.length > 0 && (
                            <button
                                onClick={markAllRead}
                                className="text-xs text-brand-600 hover:text-brand-700 font-medium transition-colors"
                            >
                                Đánh dấu đã đọc
                            </button>
                        )}
                    </div>

                    {/* Notification list */}
                    <div className="max-h-80 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="px-4 py-8 text-center">
                                <IconBell size={32} className="mx-auto text-zinc-300 dark:text-zinc-600 mb-2" />
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Chưa có thông báo mới</p>
                            </div>
                        ) : (
                            notifications.slice(0, 10).map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/blog/${item.slug}/`}
                                    onClick={() => setOpen(false)}
                                    className="flex gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-zinc-50 dark:border-zinc-800/50 last:border-0"
                                >
                                    {item.featured_image ? (
                                        <img
                                            src={item.featured_image}
                                            alt=""
                                            className="w-12 h-12 rounded-lg object-cover shrink-0"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-lg bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                                            <IconBell size={16} className="text-brand-400" />
                                        </div>
                                    )}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug">
                                            {item.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            {item.category && (
                                                <span className="text-[10px] font-medium text-brand-600 bg-brand-50 dark:bg-brand-900/30 px-1.5 py-0.5 rounded">
                                                    {item.category}
                                                </span>
                                            )}
                                            {item.published_at && (
                                                <span className="text-[11px] text-zinc-400">
                                                    {timeAgo(item.published_at)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                        <div className="border-t border-zinc-100 dark:border-zinc-800">
                            <Link
                                href="/blog/"
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 text-center text-xs font-medium text-brand-600 hover:bg-brand-50/60 dark:hover:bg-brand-900/20 transition-colors"
                            >
                                Xem tất cả bài viết
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
