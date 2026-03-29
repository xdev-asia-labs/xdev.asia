import type { Metadata } from "next";
import SeriesCard from "@/components/SeriesCard";
import { getAllSeries } from "@/lib/data";
import { IconBook } from "@/components/Icons";

export const metadata: Metadata = {
    title: "Series",
    description: "Danh sách series học theo lộ trình",
};

export default function SeriesPage() {
    const seriesItems = getAllSeries();

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
                        Quản lý nội dung theo từng series để dễ theo dõi và học theo lộ trình.
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
                        <p className="text-zinc-500">Chưa có series nào.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
