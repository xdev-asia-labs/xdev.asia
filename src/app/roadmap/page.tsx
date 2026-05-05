import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconBook, IconRocket } from "@/components/Icons";
import { getRoadmapList, THEME, type RoadmapMeta } from "@/lib/roadmaps";

export const metadata: Metadata = {
    title: "Roadmaps | xDev Asia",
    description: "Lộ trình nghề nghiệp và kỹ năng cho developer, BA, DevOps, Data và AI.",
};

const CATEGORY_LABEL: Record<string, string> = {
    role: "Role-based Roadmaps",
    skill: "Skill-based Roadmaps",
    "best-practice": "Best Practice Roadmaps",
    project: "Project-based Roadmaps",
};

function groupRoadmaps(roadmaps: RoadmapMeta[]) {
    const map = new Map<string, RoadmapMeta[]>();
    for (const roadmap of roadmaps) {
        const key = roadmap.category || "role";
        const existing = map.get(key) || [];
        existing.push(roadmap);
        map.set(key, existing);
    }
    return map;
}

export default function RoadmapPage() {
    const roadmaps = getRoadmapList();
    const groups = groupRoadmaps(roadmaps);

    return (
        <div className="roadmap-index-bg min-h-screen">
            <section className="roadmap-index-hero border-b border-zinc-200/70 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300/80 dark:border-zinc-700 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/80">
                        <IconRocket size={13} />
                        Career Paths
                    </div>
                    <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                        Developer Roadmaps
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Lộ trình học tập theo vai trò và kỹ năng, thiết kế theo định dạng checklist trực quan để bạn biết chính xác học gì tiếp theo.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                        <span className="roadmap-filter-chip roadmap-filter-chip-active">Role-based</span>
                        <span className="roadmap-filter-chip">Skill-based</span>
                        <span className="roadmap-filter-chip">Best Practices</span>
                        <span className="roadmap-filter-chip">Projects</span>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 space-y-10">
                {Array.from(groups.entries()).map(([category, items]) => (
                    <div key={category}>
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <h2 className="text-lg md:text-xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                                {CATEGORY_LABEL[category] || "Roadmaps"}
                            </h2>
                            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                                {items.length} roadmap{items.length > 1 ? "s" : ""}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                            {items.map((rm) => {
                                const theme = THEME[rm.theme];
                                return (
                                    <Link
                                        key={rm.slug}
                                        href={`/roadmap/${rm.slug}/`}
                                        className="roadmap-index-card group"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-start gap-3 min-w-0">
                                                <span className="text-2xl leading-none mt-0.5">{rm.icon}</span>
                                                <div className="min-w-0">
                                                    <h3 className="text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100 truncate">
                                                        {rm.title}
                                                    </h3>
                                                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                                                        {rm.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className={`shrink-0 text-[11px] font-semibold px-2 py-1 rounded-md ${theme.levelColor}`}>
                                                {rm.stats.level}
                                            </span>
                                        </div>

                                        <div className="mt-3 flex flex-wrap gap-1.5">
                                            {rm.tags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
                                                <span>🗂 {rm.stats.phases} phases</span>
                                                <span>⏱ {rm.stats.duration}</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                                Open <IconArrowRight size={12} />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}

                            {category === "role" && (
                                <div className="roadmap-index-card border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-900/40">
                                    <div className="flex flex-col h-full items-center justify-center text-center py-2">
                                        <div className="text-2xl">➕</div>
                                        <h3 className="mt-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                                            More Roadmaps Coming
                                        </h3>
                                        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-[22ch]">
                                            DevOps, Data Engineer, Product Manager, AI Engineer...
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-16">
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8">
                    <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Build your own learning path
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        Bắt đầu từ roadmap phù hợp vai trò hiện tại, sau đó mở rộng bằng các skill roadmap để tăng tốc lên level senior.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/series/" className="btn-primary">
                            <IconBook size={15} />
                            Học theo series
                        </Link>
                        <Link href="/blog/" className="btn-ghost">
                            Đọc guides
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
