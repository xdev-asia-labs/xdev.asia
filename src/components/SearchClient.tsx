"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { IconSearch, IconCode, IconBook } from "@/components/Icons";
import type { SearchItem } from "@/lib/data";

const typeLabels: Record<string, string> = {
    post: "Bài viết",
    series: "Series",
};

const typeIcons: Record<string, typeof IconCode> = {
    post: IconCode,
    series: IconBook,
};

const typeColors: Record<string, string> = {
    post: "bg-blue-50 text-blue-600",
    series: "bg-emerald-50 text-emerald-600",
};

export default function SearchClient({ items }: { items: SearchItem[] }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const fuse = useMemo(
        () =>
            new Fuse(items, {
                keys: [
                    { name: "title", weight: 0.4 },
                    { name: "excerpt", weight: 0.25 },
                    { name: "category", weight: 0.15 },
                    { name: "tags", weight: 0.2 },
                ],
                threshold: 0.4,
                includeScore: true,
                minMatchCharLength: 2,
            }),
        [items]
    );

    const results = useMemo(() => {
        if (!query.trim()) return [];
        return fuse.search(query).slice(0, 20);
    }, [fuse, query]);

    return (
        <div>
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto mb-10">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconSearch size={20} className="text-zinc-400" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm kiếm bài viết, series, chủ đề..."
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border border-zinc-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-zinc-400 transition-shadow"
                />
                {query && (
                    <button
                        onClick={() => setQuery("")}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                        <span className="text-sm">Xoá</span>
                    </button>
                )}
            </div>

            {/* Results */}
            {query.trim() && (
                <div className="max-w-2xl mx-auto">
                    <p className="text-sm text-zinc-500 mb-4">
                        {results.length > 0
                            ? `Tìm thấy ${results.length} kết quả cho "${query}"`
                            : `Không tìm thấy kết quả nào cho "${query}"`}
                    </p>

                    <div className="space-y-3">
                        {results.map(({ item }) => {
                            const TypeIcon = typeIcons[item.type] || IconCode;
                            return (
                                <Link
                                    key={`${item.type}-${item.slug}`}
                                    href={item.url}
                                    className="block glass-card rounded-xl p-5 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${typeColors[item.type]}`}>
                                            <TypeIcon size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${typeColors[item.type]}`}>
                                                    {typeLabels[item.type]}
                                                </span>
                                                {item.category && (
                                                    <span className="text-[10px] text-zinc-400">{item.category}</span>
                                                )}
                                            </div>
                                            <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                                                {item.title}
                                            </h3>
                                            {item.excerpt && (
                                                <p className="mt-1 text-sm text-zinc-500 line-clamp-2">
                                                    {item.excerpt}
                                                </p>
                                            )}
                                            {item.tags.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-1">
                                                    {item.tags.slice(0, 4).map((tag) => (
                                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-500">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Default state */}
            {!query.trim() && (
                <div className="text-center py-16">
                    <IconSearch size={48} className="text-zinc-200 mx-auto mb-4" />
                    <p className="text-zinc-400">Nhập từ khoá để tìm kiếm bài viết, series và nội dung.</p>
                    <p className="text-sm text-zinc-300 mt-2">{items.length} nội dung có sẵn</p>
                </div>
            )}
        </div>
    );
}
