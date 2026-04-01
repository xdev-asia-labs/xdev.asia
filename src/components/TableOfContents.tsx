"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ html, mobileOnly = false }: { html: string; mobileOnly?: boolean }) {
    const [items, setItems] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        // Parse headings from HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const headings = doc.querySelectorAll("h2, h3");
        const tocItems: TocItem[] = [];

        headings.forEach((h) => {
            const id = h.id || h.textContent?.toLowerCase().replace(/[^a-z0-9\u00C0-\u024F]+/gi, "-").replace(/^-|-$/g, "") || "";
            tocItems.push({
                id,
                text: h.textContent?.trim() || "",
                level: parseInt(h.tagName[1]),
            });
        });

        setItems(tocItems);
    }, [html]);

    useEffect(() => {
        if (items.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        break;
                    }
                }
            },
            { rootMargin: "-80px 0px -80% 0px" }
        );

        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [items]);

    if (items.length < 3) return null;

    const tocList = (
        <ul className="space-y-1">
            {items.map((item) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        className={`block text-[13px] leading-relaxed py-1 border-l-2 transition-all duration-200 ${item.level === 3 ? "pl-5" : "pl-3"
                            } ${activeId === item.id
                                ? "border-brand-600 text-brand-600 font-medium"
                                : "border-transparent text-zinc-500 hover:text-zinc-800 hover:border-zinc-300"
                            }`}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            {/* Mobile collapsible TOC */}
            <details className="xl:hidden mb-8 rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none text-xs font-bold uppercase tracking-widest text-brand-600 list-none">
                    <span>Mục lục</span>
                    <svg className="w-4 h-4 transition-transform duration-200 toc-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div className="px-4 pb-4 pt-1">
                    {tocList}
                </div>
            </details>

            {/* Desktop sidebar TOC — suppressed when mobileOnly */}
            {!mobileOnly && (
                <nav className="toc hidden xl:block">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-4">
                        Mục lục
                    </h4>
                    {tocList}
                </nav>
            )}
        </>
    );
}
