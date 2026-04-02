import BookmarksClient from "@/components/BookmarksClient";
import { IconBook } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bookmark",
    description: "Bài viết đã lưu",
};

export default function BookmarksPage() {
    return (
        <div>
            <section className="hero-gradient py-10 lg:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
                            <IconBook size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Bookmark</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-zinc-900 mb-2">
                        Bài viết <span className="gradient-text">đã lưu</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
                        Các bài viết bạn đã đánh dấu để đọc sau.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <BookmarksClient />
            </section>
        </div>
    );
}
