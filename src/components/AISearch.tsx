"use client";

import { useState, useCallback } from "react";
import { gemini } from "@/lib/firebase";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";

interface AISearchResult {
    slug: string;
    title: string;
    excerpt: string;
    url: string;
    relevance: string;
}

interface AISearchProps {
    /** JSON string of all search items (title, slug, excerpt, category, tags, url) */
    itemsJson: string;
}

export default function AISearch({ itemsJson }: AISearchProps) {
    const { user, openLoginModal } = useAuth();
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<AISearchResult[]>([]);
    const [aiAnswer, setAiAnswer] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = useCallback(async () => {
        if (!query.trim()) return;
        if (!user) {
            openLoginModal();
            return;
        }

        setLoading(true);
        setError(null);
        setSearched(true);

        try {
            const prompt = `Bạn là trợ lý tìm kiếm cho blog kỹ thuật xDev Asia. Người dùng hỏi: "${query}"

Dưới đây là danh sách các bài viết (JSON). Hãy:
1. Tìm các bài viết liên quan nhất đến câu hỏi (tối đa 5 bài)
2. Giải thích ngắn gọn (2-3 câu) vì sao những bài này liên quan

Trả về JSON hợp lệ theo format:
{"answer": "Câu trả lời ngắn gọn cho câu hỏi", "results": [{"slug": "...", "title": "...", "excerpt": "...", "url": "...", "relevance": "Lý do liên quan"}]}

Nếu không tìm thấy bài nào liên quan, trả về results rỗng và answer giải thích.

Danh sách bài viết:
${itemsJson.slice(0, 12000)}`;

            const result = await gemini.generateContent(prompt);
            const text = result.response.text();
            if (!text) throw new Error("Empty response");

            // Extract JSON from response (handle markdown code blocks)
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) throw new Error("Invalid JSON response");

            const parsed = JSON.parse(jsonMatch[0]);
            setAiAnswer(parsed.answer || null);
            setResults(parsed.results || []);
        } catch (err) {
            console.error("AI Search error:", err);
            setError("Không thể tìm kiếm. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    }, [query, user, openLoginModal, itemsJson]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="max-w-2xl mx-auto">
            {/* AI Search Input */}
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Hỏi AI: Cách cài Docker trên Ubuntu? Học Go bắt đầu từ đâu?"
                    className="w-full pl-12 pr-24 py-4 text-base rounded-2xl border border-brand-200 bg-brand-50/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-zinc-400 transition-shadow"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading || !query.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                    ) : (
                        "Tìm AI"
                    )}
                </button>
            </div>

            {/* Error */}
            {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200 mb-4">
                    {error}
                </div>
            )}

            {/* AI Answer */}
            {aiAnswer && !loading && (
                <div className="p-5 rounded-xl bg-brand-50/50 border border-brand-200 mb-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-brand-600 mb-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                        </svg>
                        Trả lời bởi AI
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">{aiAnswer}</p>
                </div>
            )}

            {/* Results */}
            {results.length > 0 && !loading && (
                <div className="space-y-3">
                    {results.map((item, i) => (
                        <Link
                            key={`${item.slug}-${i}`}
                            href={item.url}
                            className="block glass-card rounded-xl p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                        >
                            <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                                {item.title}
                            </h3>
                            {item.excerpt && (
                                <p className="mt-1 text-sm text-zinc-500 line-clamp-2">{item.excerpt}</p>
                            )}
                            {item.relevance && (
                                <p className="mt-2 text-xs text-brand-600 italic">{item.relevance}</p>
                            )}
                        </Link>
                    ))}
                </div>
            )}

            {/* No results */}
            {searched && !loading && results.length === 0 && !error && (
                <div className="text-center py-8 text-zinc-400 text-sm">
                    Không tìm thấy bài viết phù hợp.
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="flex items-center justify-center gap-3 py-8 text-sm text-zinc-500">
                    <svg className="animate-spin h-5 w-5 text-brand-600" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    AI đang tìm kiếm và phân tích...
                </div>
            )}
        </div>
    );
}
