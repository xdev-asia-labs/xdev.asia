import { AnimatedCounter } from "@/components/AnimatedBackground";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { IconArrowRight, IconBook, IconCode, IconRocket } from "@/components/Icons";
import Link from "next/link";

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
            {/* Film grain texture */}
            <div className="noise-overlay" aria-hidden="true" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                    {/* Left content */}
                    <div className="max-w-2xl flex-1">
                        {/* Status badge */}
                        <div className="mb-7 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                            <span className="hero-badge-dark">
                                <span className="hero-status-dot" />
                                {profileLabel}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="hero-headline-dark animate-fade-in-up" style={{ animationDelay: "120ms" }}>
                            Xin chào, mình là{" "}
                            <span className="hero-name-highlight">{profileName}</span>
                        </h1>

                        <p className="hero-desc mt-6 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "240ms" }}>
                            {tagline}
                        </p>

                        {/* CTA Buttons with shine effect */}
                        <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "360ms" }}>
                            <Link href="/series/" className="btn-hero-primary btn-shine">
                                <IconBook size={16} />
                                Khám phá Series
                                <IconArrowRight size={14} />
                            </Link>
                            <Link href="/blog/" className="btn-hero-secondary">
                                <IconCode size={16} />
                                Đọc Blog
                            </Link>
                        </div>

                        {/* Stats with animated counters */}
                        <div className="mt-14 animate-fade-in-up" style={{ animationDelay: "480ms" }}>
                            <div className="stats-strip-dark">
                                {stats.map((stat, idx) => {
                                    const StatIcon = stat.icon;
                                    return (
                                        <div key={idx} className="stats-item-dark">
                                            <div className="stat-icon-dark">
                                                <StatIcon size={15} />
                                            </div>
                                            <div>
                                                <div className="stat-number-dark">
                                                    <AnimatedCounter value={stat.value} />
                                                </div>
                                                <div className="stat-label-dark">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right — live architecture diagram */}
                    <div className="hidden lg:block flex-1 max-w-lg animate-fade-in-up" style={{ animationDelay: "360ms" }}>
                        <div className="w-full aspect-[4/3]">
                            <ArchitectureDiagram />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
