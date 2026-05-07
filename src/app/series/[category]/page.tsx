import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SeriesCard from "@/components/SeriesCard";
import { getSeriesCategories, getSeriesByCategory } from "@/lib/data";
import { IconBook, IconChevronRight } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
    return getSeriesCategories().map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const { category } = await params;
    const categories = getSeriesCategories();
    const cat = categories.find((c) => c.slug === category);
    if (!cat) return {};
    return {
        title: `${cat.name} — Series`,
        description: `Tất cả series về ${cat.name}`,
    };
}

export default async function SeriesCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const categories = getSeriesCategories();
    const cat = categories.find((c) => c.slug === category);
    if (!cat) notFound();

    const seriesItems = getSeriesByCategory(category);

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/series/" className="hover:text-brand-600 transition-colors">Series</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <span className="text-zinc-400">{cat.name}</span>
                    </nav>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconBook size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">{cat.name}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Series <span className="gradient-text">{cat.name}</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        {seriesItems.length} series về {cat.name}
                    </p>
                </div>
            </section>

            {/* Series Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {seriesItems.map((series, index) => (
                        <SeriesCard key={series.id} series={series} priority={index === 0} />
                    ))}
                </div>
                {seriesItems.length === 0 && (
                    <div className="text-center py-20">
                        <IconBook size={48} className="text-zinc-300 mx-auto mb-4" />
                        <p className="text-zinc-500">Chưa có series nào trong danh mục này.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
