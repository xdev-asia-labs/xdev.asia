import type { Metadata } from "next";
import { buildSearchIndex } from "@/lib/data";
import SearchClient from "@/components/SearchClient";
import AISearch from "@/components/AISearch";

export const metadata: Metadata = {
    title: "Tìm kiếm",
    description: "Tìm kiếm bài viết, series và nội dung trên xDev",
};

export default function SearchPage() {
    const searchItems = buildSearchIndex();
    const itemsJson = JSON.stringify(
        searchItems.map(({ title, slug, excerpt, category, tags, url }) => ({
            title, slug, excerpt, category, tags, url,
        }))
    );

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Tìm <span className="gradient-text">kiếm</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        Tìm kiếm nhanh bài viết, series và nội dung trên toàn bộ website.
                    </p>
                </div>
            </section>

            {/* AI Search */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
                <h2 className="text-lg font-bold text-zinc-800 mb-4 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
                    </svg>
                    Tìm kiếm AI
                </h2>
                <AISearch itemsJson={itemsJson} />
            </section>

            <div className="max-w-2xl mx-auto px-4">
                <div className="border-t border-zinc-200 my-2" />
            </div>

            {/* Regular Search */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
                <h2 className="text-lg font-bold text-zinc-800 mb-4">Tìm kiếm thông thường</h2>
                <SearchClient items={searchItems} />
            </section>
        </div>
    );
}
