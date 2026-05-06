import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBook, IconBrain, IconCheckCircle, IconRocket } from "@/components/Icons";
import { getRoadmapBannerPath, getRoadmapList, getUpcomingRoadmapPreviews, THEME, type RoadmapMeta } from "@/lib/roadmaps";

const imageUrl = getRoadmapBannerPath();

export const metadata: Metadata = {
    title: "Roadmaps | xDev Asia",
    description: "Lộ trình nghề nghiệp và kỹ năng cho developer, BA, DevOps, Data và AI.",
    alternates: {
        canonical: "/roadmap/",
    },
    openGraph: {
        title: "Roadmaps | xDev Asia",
        description: "Lộ trình nghề nghiệp và kỹ năng cho developer, BA, DevOps, Data và AI.",
        url: "/roadmap/",
        siteName: "xDev Asia",
        locale: "vi_VN",
        type: "website",
        images: [{ url: imageUrl, width: 1920, height: 1080, alt: "Roadmaps | xDev Asia" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Roadmaps | xDev Asia",
        description: "Lộ trình nghề nghiệp và kỹ năng cho developer, BA, DevOps, Data và AI.",
        images: [imageUrl],
    },
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
    const upcomingRoadmaps = getUpcomingRoadmapPreviews();
    const groups = groupRoadmaps(roadmaps);
    const totalPhases = roadmaps.reduce((sum, item) => sum + item.stats.phases, 0);
    const totalTags = new Set(roadmaps.flatMap((item) => item.tags)).size;

    return (
        <div className="roadmap-index-bg min-h-screen">
            <section className="roadmap-index-hero border-b border-zinc-200/70 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-10 lg:gap-14 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300/80 dark:border-zinc-700 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/80">
                                <IconRocket size={13} />
                                Career paths
                            </div>
                            <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                                Roadmap học tập rõ bước, rõ tiến độ
                            </h1>
                            <p className="mt-4 max-w-3xl text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Chọn một lộ trình theo vai trò, mở từng node để học theo checklist, tài nguyên và quiz kiểm tra kiến thức.
                            </p>

                            <div className="mt-7 grid grid-cols-3 gap-2.5 max-w-xl">
                                <div className="roadmap-hero-stat">
                                    <strong>{roadmaps.length}</strong>
                                    <span>roadmap</span>
                                </div>
                                <div className="roadmap-hero-stat">
                                    <strong>{totalPhases}</strong>
                                    <span>phase</span>
                                </div>
                                <div className="roadmap-hero-stat">
                                    <strong>{totalTags}</strong>
                                    <span>skill tag</span>
                                </div>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-2">
                                <span className="roadmap-filter-chip roadmap-filter-chip-active">Role-based</span>
                                <span className="roadmap-filter-chip">Skill-based</span>
                                <span className="roadmap-filter-chip">Best practices</span>
                                <span className="roadmap-filter-chip">Projects</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-[1.35rem] border border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/80 shadow-sm">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src={imageUrl}
                                        alt="Roadmap overview banner"
                                        fill
                                        sizes="(min-width: 1024px) 460px, 100vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/80 p-4 shadow-sm">
                                <div className="flex items-center justify-between gap-3">
                                    <h2 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">Available roadmaps</h2>
                                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{roadmaps.length} total</span>
                                </div>
                                <div className="mt-3 space-y-2">
                                    {roadmaps.slice(0, 4).map((rm) => (
                                        <Link
                                            key={rm.slug}
                                            href={`/roadmap/${rm.slug}/`}
                                            className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-3 py-2.5 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
                                        >
                                            <span className="min-w-0">
                                                <span className="block text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">{rm.title}</span>
                                                <span className="mt-0.5 block text-xs text-zinc-500 dark:text-zinc-400">{rm.stats.duration}</span>
                                            </span>
                                            <span className="shrink-0 text-xs font-bold text-brand-600 dark:text-brand-400">{rm.stats.phases} phases</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
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

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                            {items.map((rm) => {
                                const theme = THEME[rm.theme];
                                return (
                                    <Link
                                        key={rm.slug}
                                        href={`/roadmap/${rm.slug}/`}
                                        className="roadmap-index-card group"
                                    >
                                        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950">
                                            <Image
                                                src={getRoadmapBannerPath(rm.slug)}
                                                alt={`${rm.title} banner`}
                                                fill
                                                sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                            />
                                        </div>
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-start gap-3 min-w-0">
                                                <span className="roadmap-index-icon">{rm.icon}</span>
                                                <div className="min-w-0">
                                                    <h3 className="text-base md:text-lg font-extrabold text-zinc-900 dark:text-zinc-100 line-clamp-1">
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

                                        <div className="mt-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-xs">
                                            <div className="flex flex-wrap items-center gap-3 text-zinc-500 dark:text-zinc-400">
                                                <span className="inline-flex items-center gap-1.5"><IconCheckCircle size={12} /> {rm.stats.phases} phases</span>
                                                <span className="inline-flex items-center gap-1.5"><IconBrain size={12} /> {rm.stats.duration}</span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                                Open <IconArrowRight size={12} />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}

                        </div>
                    </div>
                ))}

                <section>
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <h2 className="text-lg md:text-xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                            Coming Next
                        </h2>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            {upcomingRoadmaps.length} roadmap previews
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
                        {upcomingRoadmaps.map((roadmap) => (
                            <article
                                key={roadmap.slug}
                                className="roadmap-index-card border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-900/40"
                            >
                                <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950">
                                    <Image
                                        src={roadmap.image}
                                        alt={`${roadmap.title} preview banner`}
                                        fill
                                        sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                                            {roadmap.eta}
                                        </div>
                                        <h3 className="mt-3 text-base font-extrabold text-zinc-900 dark:text-zinc-100">
                                            {roadmap.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                            {roadmap.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
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
