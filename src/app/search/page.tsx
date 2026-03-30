import type { Metadata } from "next";
import { buildSearchIndex } from "@/lib/data";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = {
    title: "Tìm kiếm",
    description: "Tìm kiếm bài viết, series và nội dung trên xDev",
};

export default function SearchPage() {
    const searchItems = buildSearchIndex();

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

            {/* Search */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <SearchClient items={searchItems} />
            </section>
        </div>
    );
}
