"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "./AuthProvider";

export default function LoginModal() {
    const { showLoginModal, closeLoginModal, signInWithGoogle, signInWithGitHub, loading } = useAuth();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (showLoginModal) {
            if (!dialog.open) dialog.showModal();
        } else {
            dialog.close();
        }
    }, [showLoginModal]);

    // Close on backdrop click
    function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
        if (e.target === dialogRef.current) {
            closeLoginModal();
        }
    }

    // Close on Escape
    function handleCancel(e: React.SyntheticEvent) {
        e.preventDefault();
        closeLoginModal();
    }

    async function handleGoogle() {
        try {
            await signInWithGoogle();
            closeLoginModal();
        } catch {
            // auth error handled elsewhere
        }
    }

    async function handleGitHub() {
        try {
            await signInWithGitHub();
            closeLoginModal();
        } catch {
            // auth error handled elsewhere
        }
    }

    if (loading) return null;

    return (
        <dialog
            ref={dialogRef}
            onCancel={handleCancel}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-[100] m-auto p-0 bg-transparent backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex items-center justify-center"
        >
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="relative px-8 pt-8 pb-6 text-center">
                    <button
                        onClick={closeLoginModal}
                        className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
                        aria-label="Đóng"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>

                    <h2 className="text-xl font-bold text-zinc-900 mb-1">Đăng nhập</h2>
                    <p className="text-sm text-zinc-500">
                        Đăng nhập để bookmark bài viết và nhận thông báo
                    </p>
                </div>

                {/* Login buttons */}
                <div className="px-8 pb-8 space-y-3">
                    <button
                        onClick={handleGoogle}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all active:scale-[0.98]"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Đăng nhập với Google
                    </button>

                    <button
                        onClick={handleGitHub}
                        className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-all active:scale-[0.98]"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Đăng nhập với GitHub
                    </button>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 bg-zinc-50 border-t border-zinc-100 text-center">
                    <p className="text-xs text-zinc-400">
                        Bằng việc đăng nhập, bạn đồng ý với{" "}
                        <a href="/dieu-khoan-su-dung/" className="text-brand-600 hover:underline">Điều khoản</a>
                        {" "}và{" "}
                        <a href="/chinh-sach-quyen-rieng-tu/" className="text-brand-600 hover:underline">Chính sách bảo mật</a>
                    </p>
                </div>
            </div>
        </dialog>
    );
}
