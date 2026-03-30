import type { Metadata } from "next";
import Link from "next/link";
import SeriesCard from "@/components/SeriesCard";
import { getAllSeries, getSeriesCategories } from "@/lib/data";
import { IconBook, IconArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Series",
    description: "Danh sách series học theo lộ trình",
};

export default function SeriesPage() {
    const seriesItems = getAllSeries();
    const categories = getSeriesCategories();

    // Group series by category
    const grouped = categories.map((cat) => ({
        ...cat,
        items: seriesItems.filter((s) => s.category?.slug === cat.slug),
    })).filter((g) => g.items.length > 0);

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconBook size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Series</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Học theo <span className="gradient-text">lộ trình</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        {seriesItems.length} series được chia theo từng chủ đề để dễ theo dõi và học theo lộ trình.
                    </p>

                    {/* Category tabs */}
                    {categories.length > 1 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/series/${cat.slug}/`}
                                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white border border-zinc-200 text-zinc-600 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50 transition-all"
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Series grouped by category */}
            {grouped.map((group) => (
                <section key={group.slug} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-zinc-900">{group.name}</h2>
                        <Link href={`/series/${group.slug}/`} className="link-brand text-sm">
                            Xem tất cả
                            <IconArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {group.items.map((series, index) => (
                            <SeriesCard key={series.id} series={series} priority={index === 0} />
                        ))}
                    </div>
                </section>
            ))}

            {seriesItems.length === 0 && (
                <div className="text-center py-20">
                    <IconBook size={48} className="text-zinc-300 mx-auto mb-4" />
                    <p className="text-zinc-500">Chưa có series nào.</p>
                </div>
            )}
        </div>
    );
}
