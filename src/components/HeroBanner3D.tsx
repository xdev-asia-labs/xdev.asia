import Link from "next/link";
import { IconArrowRight, IconBook, IconCode, IconRocket } from "./Icons";

interface HeroBannerProps {
    siteName: string;
    tagline: string;
    profileName?: string;
    profileLabel?: string;
    postCount: number;
    seriesCount: number;
    projectCount: number;
}

export default function HeroBanner2026({
    tagline,
    profileName = "Duy Tran",
    profileLabel = "Personal Tech Blog · 2026",
    postCount,
    seriesCount,
    projectCount,
}: HeroBannerProps) {
    const stats = [
        { value: postCount, label: "Bài viết", icon: IconCode },
        { value: seriesCount, label: "Series", icon: IconBook },
        { value: projectCount, label: "Projects", icon: IconRocket },
    ];

    return (
        <section className="hero-2026">
            {/* Background grid */}
            <div className="hero-2026-grid" aria-hidden="true" />
            {/* Noise grain */}
            <div className="noise-overlay" aria-hidden="true" />
            {/* Soft orbs */}
            <div className="hero-bg-decoration" aria-hidden="true">
                <div className="hero-gradient-orb hero-gradient-orb-1" />
                <div className="hero-gradient-orb hero-gradient-orb-2" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
                <div className="max-w-3xl">
                    {/* Status badge */}
                    <div className="mb-7">
                        <span className="hero-status-badge">
                            <span className="hero-status-dot" />
                            {profileLabel}
                        </span>
                    </div>

                    {/* Editorial headline */}
                    <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-black leading-[1.06] tracking-[-0.04em] text-zinc-900">
                        Xin chào, mình là{" "}
                        <span className="gradient-text">{profileName}</span>
                    </h1>

                    <p className="mt-5 text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl">
                        {tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/series/" className="btn-primary">
                            <IconBook size={16} />
                            Khám phá Series
                            <IconArrowRight size={14} />
                        </Link>
                        <Link href="/blog/" className="btn-secondary">
                            <IconCode size={16} />
                            Đọc Blog
                        </Link>
                    </div>
                </div>

                {/* Stats strip — horizontal, 2026 style */}
                <div className="mt-12 stats-strip">
                    {stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                            <div key={idx} className="stats-strip-item">
                                <div className="stat-card-icon shrink-0">
                                    <StatIcon size={15} />
                                </div>
                                <div>
                                    <div className="text-xl font-extrabold text-zinc-900 leading-none">{stat.value}+</div>
                                    <div className="text-[11px] font-medium text-zinc-400 mt-0.5">{stat.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

