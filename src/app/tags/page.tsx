import { IconCode } from "@/components/Icons";
import { getTagStats } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tags",
  description: "Danh sach tag va noi dung lien quan tren xDev Asia",
};

export default function TagsPage() {
  const tags = getTagStats().filter((tag) => tag.totalCount > 0);

  return (
    <div>
      <section className="hero-gradient py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <IconCode size={18} className="text-brand-600" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Tags</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
            Kham pha theo <span className="gradient-text">tag</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-sm md:text-base">
            {tags.length} tag dang co noi dung tren he thong.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <Link key={tag.slug} href={`/tags/${tag.slug}/`} className="tag-pill text-sm px-3 py-1.5">
                #{tag.name}
                <span className="ml-1 text-zinc-400">({tag.totalCount})</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <IconCode size={48} className="text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500">Chua co tag nao co noi dung.</p>
          </div>
        )}
      </section>
    </div>
  );
}
