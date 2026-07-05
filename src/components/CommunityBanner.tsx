"use client";

import { useState, useEffect } from "react";
import { IconFacebook } from "./Icons";

const DISMISS_KEY = "community-banner-dismissed";
const DISMISS_DAYS = 7; // show again after 7 days

export default function CommunityBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const dismissed = localStorage.getItem(DISMISS_KEY);
            if (dismissed) {
                const ts = parseInt(dismissed, 10);
                if (Date.now() - ts < DISMISS_DAYS * 86400000) return;
            }
            // Delay show for better UX
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        } catch {
            // SSR or storage error
        }
    }, []);

    const dismiss = () => {
        setVisible(false);
        try {
            localStorage.setItem(DISMISS_KEY, String(Date.now()));
        } catch { /* ignore */ }
    };

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
            style={{ animation: "fadeInUp 0.5s ease-out both" }}
        >
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-700/60 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg shadow-xl shadow-zinc-900/10 dark:shadow-black/30 px-5 py-4">
                {/* Dismiss */}
                <button
                    onClick={dismiss}
                    className="absolute top-2.5 right-2.5 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Đóng"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {/* Text */}
                    <div className="flex-1 min-w-0 pr-4">
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                            🚀 Tham gia cộng đồng xDev
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                            Kết nối, hỏi đáp và cập nhật kiến thức mới nhất cùng anh em dev.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href="https://www.facebook.com/profile.php?id=61584154527129"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#166FE5] transition-colors shadow-sm"
                        >
                            <IconFacebook size={14} />
                            Like Page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
