"use client";

import Link from "next/link";
import { IconArrowRight, IconBook, IconCode, IconRocket } from "./Icons";

interface HeroBannerProps {
    siteName: string;
    tagline: string;
    postCount: number;
    seriesCount: number;
    projectCount: number;
}

export default function HeroBanner3D({
    siteName,
    tagline,
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
        <section className="hero-section">
            {/* Decorative background */}
            <div className="hero-bg-decoration" aria-hidden="true">
                <div className="hero-gradient-orb hero-gradient-orb-1" />
                <div className="hero-gradient-orb hero-gradient-orb-2" />
                <div className="hero-grid-dots" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
                <div className="max-w-3xl">
                    {/* Greeting */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl md:text-4xl">👋</span>
                        <span className="hero-badge">
                            Personal Tech Blog
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12] text-zinc-900">
                        Xin chào, mình là{" "}
                        <span className="gradient-text">Duy</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl">
                        {tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/series/"
                            className="btn-primary"
                        >
                            <IconBook size={16} />
                            Khám phá Series
                            <IconArrowRight size={14} />
                        </Link>
                        <Link
                            href="/blog/"
                            className="btn-secondary"
                        >
                            <IconCode size={16} />
                            Đọc Blog
                        </Link>
                    </div>
                </div>

                {/* Stats Strip */}
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                    {stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                            <div key={idx} className="stat-card">
                                <div className="stat-card-icon">
                                    <StatIcon size={16} />
                                </div>
                                <div>
                                    <div className="text-2xl font-extrabold text-zinc-900">{stat.value}+</div>
                                    <div className="text-xs font-medium text-zinc-400">{stat.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
