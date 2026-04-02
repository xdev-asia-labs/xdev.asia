"use client";

import { useEffect, useRef, useState } from "react";
import { useAuth } from "./AuthProvider";

/**
 * Wraps blog content and gates it behind login after the user scrolls past
 * a percentage of the article. Shows the first portion freely, then fades
 * into a login prompt.
 */
export default function ContentGate({ children }: { children: React.ReactNode }) {
    const { user, loading, openLoginModal } = useAuth();
    const [gated, setGated] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    // Don't gate if user is logged in
    const shouldGate = !loading && !user;

    useEffect(() => {
        if (!shouldGate || !sentinelRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setGated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [shouldGate]);

    // Logged in or still loading — show everything
    if (!shouldGate) {
        return <>{children}</>;
    }

    return (
        <div className="relative">
            <div className={gated ? "max-h-[60vh] overflow-hidden" : ""}>
                {children}
            </div>

            {/* Invisible sentinel placed ~30% down via CSS */}
            <div
                ref={sentinelRef}
                className="absolute left-0 w-full h-px pointer-events-none"
                style={{ top: "30%" }}
                aria-hidden="true"
            />

            {/* Fade overlay + CTA */}
            {gated && (
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    {/* Gradient fade */}
                    <div className="h-48 bg-linear-to-t from-white via-white/95 to-transparent dark:from-zinc-950 dark:via-zinc-950/95" />

                    {/* Login CTA */}
                    <div className="bg-white dark:bg-zinc-950 pb-12 pt-2 text-center">
                        <div className="max-w-md mx-auto px-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/30 mb-4">
                                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                Đăng nhập để đọc tiếp
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                                Đăng nhập miễn phí để đọc toàn bộ bài viết, lưu bài và nhận nhiều tính năng hơn.
                            </p>
                            <button
                                onClick={openLoginModal}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/25"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                                Đăng nhập ngay
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
