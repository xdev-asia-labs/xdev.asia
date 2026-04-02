"use client";

import { useState, useCallback } from "react";
import { useAuth } from "@/components/AuthProvider";
import { gemini } from "@/lib/firebase";

interface AISummaryProps {
    html: string;
    title: string;
}

export default function AISummary({ html, title }: AISummaryProps) {
    const { user, openLoginModal } = useAuth();
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSummarize = useCallback(async () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (summary) {
            setSummary(null);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            const plainText = tempDiv.textContent || tempDiv.innerText || "";

            const prompt = `Bạn là trợ lý AI chuyên tóm tắt bài viết kỹ thuật. Hãy tóm tắt bài viết sau trong 3-5 câu ngắn gọn, súc tích bằng tiếng Việt. Giữ lại các thuật ngữ kỹ thuật quan trọng. Trả về dạng plain text, không dùng markdown.

Tiêu đề: ${title}

Nội dung:
${plainText.slice(0, 8000)}`;

            const result = await gemini.generateContent(prompt);
            const text = result.response.text();

            if (!text) throw new Error("Empty response");
            setSummary(text);
        } catch (err) {
            console.error("Summary error:", err);
            setError("Không thể tóm tắt bài viết. Vui lòng thử lại sau.");
        } finally {
            setLoading(false);
        }
    }, [html, title, user, openLoginModal, summary]);

    return (
        <div>
            <button
                onClick={handleSummarize}
                disabled={loading}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${summary
                        ? "bg-brand-50 text-brand-600 border border-brand-200"
                        : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 border border-transparent"
                    } ${loading ? "opacity-60 cursor-wait" : ""}`}
                title="AI tóm tắt bài viết"
            >
                {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                    </svg>
                )}
                {summary ? "Ẩn tóm tắt" : "Tóm tắt AI"}
            </button>

            {error && (
                <div className="mt-3 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
                    {error}
                </div>
            )}

            {summary && !loading && (
                <div className="mt-4 p-5 rounded-xl bg-brand-50/50 border border-brand-200">
                    <div className="flex items-center gap-2 text-xs font-medium text-brand-600 mb-3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                        </svg>
                        Tóm tắt bởi AI
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">{summary}</p>
                </div>
            )}
        </div>
    );
}
