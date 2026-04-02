"use client";

import { useAuth } from "@/components/AuthProvider";
import { useSubscription } from "@/lib/useUserData";

export default function SubscribeNewsletter() {
    const { user, openLoginModal } = useAuth();
    const { subscribed, loading, toggleSubscription } = useSubscription();

    if (loading) return null;

    // Not logged in — show CTA
    if (!user) {
        return (
            <div className="mt-6 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h4 className="text-sm font-bold text-white mb-1.5">Nhận bài viết mới</h4>
                <p className="text-xs mb-3" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                    Đăng nhập để nhận thông báo khi có bài viết mới
                </p>
                <button
                    onClick={openLoginModal}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                    Đăng nhập với Google
                </button>
            </div>
        );
    }

    return (
        <div className="mt-6 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <h4 className="text-sm font-bold text-white mb-1.5">Nhận bài viết mới</h4>
            <p className="text-xs mb-3" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                {subscribed
                    ? `Đang gửi thông báo tới ${user.email}`
                    : "Nhận email khi có bài viết mới"
                }
            </p>
            <button
                onClick={toggleSubscription}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${subscribed
                    ? "bg-green-500/20 text-green-300 hover:bg-red-500/20 hover:text-red-300"
                    : "bg-brand-500/20 text-brand-300 hover:bg-brand-500/30"
                    }`}
            >
                {subscribed ? (
                    <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Đã đăng ký
                    </>
                ) : (
                    <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Đăng ký nhận thông báo
                    </>
                )}
            </button>
        </div>
    );
}
