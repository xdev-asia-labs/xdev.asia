"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { useSubscription } from "@/lib/useUserData";
import { IconBell, IconBellOff } from "./Icons";

export default function UserMenu() {
    const { user, loading, signOut, openLoginModal } = useAuth();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (loading) {
        return <div className="w-8 h-8 rounded-full bg-zinc-100 animate-pulse" />;
    }

    // Not logged in → show login button that opens modal
    if (!user) {
        return (
            <button
                onClick={openLoginModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                Đăng nhập
            </button>
        );
    }

    // Logged in → show avatar dropdown
    const { subscribed, toggleSubscription } = useSubscription();

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-full transition-all hover:ring-2 hover:ring-brand-200"
            >
                {user.photoURL ? (
                    <Image
                        src={user.photoURL}
                        alt={user.displayName || "Avatar"}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm font-bold">
                        {(user.displayName || user.email || "U")[0].toUpperCase()}
                    </div>
                )}
            </button>
            {open && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-zinc-900 rounded-xl shadow-xl shadow-zinc-200/50 dark:shadow-zinc-900/50 border border-zinc-100 dark:border-zinc-800 py-2 z-50">
                    <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">{user.displayName}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{user.email}</p>
                    </div>
                    <Link
                        href="/bookmarks/"
                        onClick={() => setOpen(false)}
                        className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                        Bài viết đã lưu
                    </Link>
                    <button
                        onClick={toggleSubscription}
                        className="w-full text-left px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
                    >
                        {subscribed ? <IconBellOff size={16} /> : <IconBell size={16} />}
                        {subscribed ? "Tắt nhận thông báo" : "Bật nhận thông báo"}
                    </button>
                    <div className="border-t border-zinc-100 dark:border-zinc-800 mt-1 pt-1">
                        <button
                            onClick={() => { signOut(); setOpen(false); }}
                            className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            Đăng xuất
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
