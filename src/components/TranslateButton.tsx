"use client";

import { useState, useCallback } from "react";
import { useAuth } from "@/components/AuthProvider";
import { gemini } from "@/lib/firebase";

interface TranslateButtonProps {
    /** The raw HTML content of the blog post */
    html: string;
}

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "zh", label: "中文" },
] as const;

export default function TranslateButton({ html }: TranslateButtonProps) {
    const { user, openLoginModal } = useAuth();
    const [open, setOpen] = useState(false);
    const [translating, setTranslating] = useState(false);
    const [translated, setTranslated] = useState<string | null>(null);
    const [activeLang, setActiveLang] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleTranslate = useCallback(
        async (langCode: string, langLabel: string) => {
            if (!user) {
                openLoginModal();
                return;
            }

            setTranslating(true);
            setError(null);
            setActiveLang(langCode);
            setOpen(false);

            try {
                // Strip HTML tags to get plain text — keeps the content shorter for the model
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;
                const plainText = tempDiv.textContent || tempDiv.innerText || "";

                const prompt = `Translate the following Vietnamese article to ${langLabel}. Keep the original meaning, tone, and technical terms. Return ONLY the translated text in well-formatted HTML (use <h2>, <h3>, <p>, <ul>, <ol>, <li>, <code>, <pre> tags as appropriate). Do not add any introduction or explanation.\n\n${plainText}`;

                const result = await gemini.generateContent(prompt);
                const text = result.response.text();

                if (!text) {
                    throw new Error("Empty response from AI");
                }

                setTranslated(text);
            } catch (err) {
                console.error("Translation error:", err);
                setError("Không thể dịch bài viết. Vui lòng thử lại sau.");
                setActiveLang(null);
            } finally {
                setTranslating(false);
            }
        },
        [html, user, openLoginModal],
    );

    const handleReset = () => {
        setTranslated(null);
        setActiveLang(null);
        setError(null);
    };

    return (
        <div className="relative">
            {/* Translate toggle / language picker */}
            {!activeLang ? (
                <div className="relative">
                    <button
                        onClick={() => {
                            if (!user) {
                                openLoginModal();
                                return;
                            }
                            setOpen((v) => !v);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-transparent transition-all"
                        title="Dịch bài viết bằng AI"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 8l6 6" />
                            <path d="M4 14l6-6 2-3" />
                            <path d="M2 5h12" />
                            <path d="M7 2h1" />
                            <path d="M22 22l-5-10-5 10" />
                            <path d="M14 18h6" />
                        </svg>
                        Dịch bài
                    </button>

                    {open && (
                        <div className="absolute bottom-full mb-2 left-0 bg-white rounded-xl shadow-lg border border-zinc-200 py-2 min-w-[140px] z-50">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleTranslate(lang.code, lang.label)}
                                    className="w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-brand-50 text-brand-600 border border-brand-200 transition-all"
                    title="Xem bản gốc"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 8l6 6" />
                        <path d="M4 14l6-6 2-3" />
                        <path d="M2 5h12" />
                        <path d="M7 2h1" />
                        <path d="M22 22l-5-10-5 10" />
                        <path d="M14 18h6" />
                    </svg>
                    Xem bản gốc
                </button>
            )}

            {/* Loading state */}
            {translating && (
                <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
                    <svg className="animate-spin h-4 w-4 text-brand-600" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Đang dịch bài viết bằng AI...
                </div>
            )}

            {/* Error state */}
            {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
                    {error}
                </div>
            )}

            {/* Translated content */}
            {translated && !translating && (
                <div className="mt-6">
                    <div className="mb-4 flex items-center gap-2 text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-200 w-fit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20" />
                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                        Bản dịch AI — {LANGUAGES.find((l) => l.code === activeLang)?.label}
                    </div>
                    <div
                        className="prose prose-zinc max-w-none"
                        dangerouslySetInnerHTML={{ __html: translated }}
                    />
                </div>
            )}
        </div>
    );
}
