"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useAuth } from "@/components/AuthProvider";
import { gemini } from "@/lib/firebase";

export default function CodeExplainer() {
    const { user, openLoginModal } = useAuth();
    const [explaining, setExplaining] = useState<string | null>(null);
    const [explanation, setExplanation] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    const handleExplain = useCallback(
        async (code: string, lang: string, rect: DOMRect) => {
            if (!user) {
                openLoginModal();
                return;
            }

            setExplaining(code);
            setExplanation(null);
            setError(null);
            setPosition({ top: rect.bottom + window.scrollY + 8, left: rect.left });

            try {
                const prompt = `Bạn là trợ lý chuyên giải thích code cho lập trình viên. Hãy giải thích đoạn code ${lang || ""} sau đây bằng tiếng Việt, ngắn gọn, dễ hiểu. Giải thích từng phần quan trọng. Trả về dạng plain text, không dùng markdown.

\`\`\`${lang}
${code.slice(0, 4000)}
\`\`\``;

                const result = await gemini.generateContent(prompt);
                const text = result.response.text();
                if (!text) throw new Error("Empty response");
                setExplanation(text);
            } catch (err) {
                console.error("Code explain error:", err);
                setError("Không thể giải thích code. Vui lòng thử lại.");
            } finally {
                setExplaining(null);
            }
        },
        [user, openLoginModal],
    );

    const handleClose = () => {
        setExplanation(null);
        setError(null);
        setPosition(null);
    };

    // Inject "Giải thích" buttons into code blocks
    useEffect(() => {
        const injectButtons = () => {
            const headers = document.querySelectorAll(".code-header");
            headers.forEach((header) => {
                if (header.querySelector(".ai-explain-btn")) return;

                const pre = header.parentElement;
                const code = pre?.querySelector("code");
                if (!pre || !code) return;

                const langLabel = header.querySelector(".code-lang");
                const lang = langLabel?.textContent || "";

                const btn = document.createElement("button");
                btn.className = "ai-explain-btn";
                btn.title = "AI giải thích code";
                btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg> Giải thích`;

                btn.addEventListener("click", () => {
                    const codeText = code.textContent || "";
                    const rect = pre.getBoundingClientRect();
                    handleExplain(codeText, lang, rect);
                });

                // Insert before the copy button
                const copyBtn = header.querySelector(".copy-btn");
                if (copyBtn) {
                    header.insertBefore(btn, copyBtn);
                } else {
                    header.appendChild(btn);
                }
            });
        };

        // Wait for ContentRenderer to finish adding code headers
        const timer = setTimeout(injectButtons, 1000);
        // Re-check periodically for dynamically loaded content
        const interval = setInterval(injectButtons, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [handleExplain]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                handleClose();
            }
        };
        if (explanation || error) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [explanation, error]);

    if (!position || (!explaining && !explanation && !error)) return null;

    return (
        <div
            ref={panelRef}
            className="fixed z-50 max-w-lg w-[calc(100vw-2rem)] rounded-xl shadow-2xl border border-zinc-200 bg-white p-5 dark:bg-zinc-900 dark:border-zinc-700"
            style={{
                top: Math.min(position.top, window.innerHeight - 300),
                left: Math.min(position.left, window.innerWidth - 450),
                position: "absolute",
            }}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-brand-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                    </svg>
                    AI Giải thích code
                </div>
                <button onClick={handleClose} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            {explaining && (
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <svg className="animate-spin h-4 w-4 text-brand-600" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Đang phân tích code...
                </div>
            )}

            {error && (
                <div className="text-sm text-red-600">{error}</div>
            )}

            {explanation && (
                <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-h-72 overflow-y-auto whitespace-pre-wrap">
                    {explanation}
                </div>
            )}
        </div>
    );
}
