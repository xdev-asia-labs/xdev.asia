"use client";

import { useState } from "react";
import { defaultApps as showcaseApps, defaultRepos as showcaseRepos } from "@/lib/showcase-data";
import { AppCard, RepoCard } from "@/components/ShowcaseCard";
import { IconRocket } from "@/components/Icons";

type FilterTab = "all" | "apps" | "repos";

export default function ShowcasePage() {
    const [activeTab, setActiveTab] = useState<FilterTab>("all");

    const tabs: { key: FilterTab; label: string; count: number }[] = [
        { key: "all", label: "Tất cả", count: showcaseApps.length + showcaseRepos.length },
        { key: "apps", label: "Apps", count: showcaseApps.length },
        { key: "repos", label: "Repositories", count: showcaseRepos.length },
    ];

    return (
        <div>
            {/* Hero */}
            <section className="hero-gradient py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-brand-100 flex items-center justify-center">
                            <IconRocket size={18} className="text-brand-600" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Showcase</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">
                        Apps & <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-zinc-500 max-w-2xl">
                        Các ứng dụng trên App Store và dự án mã nguồn mở trên GitHub từ xDev.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <div className="sticky top-16 md:top-[72px] z-40 bg-white/80 backdrop-blur-lg border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`filter-tab whitespace-nowrap ${activeTab === tab.key ? "active" : ""}`}
                            >
                                {tab.label}
                                <span className="ml-1.5 text-xs opacity-60">({tab.count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {(activeTab === "all" || activeTab === "apps") && showcaseApps.length > 0 && (
                    <div className="mb-12">
                        {activeTab === "all" && (
                            <h2 className="text-lg font-bold text-zinc-900 mb-5 flex items-center gap-2">
                                <span className="w-1 h-5 rounded-full bg-brand-500" />
                                Ứng dụng
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {showcaseApps.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                    </div>
                )}

                {(activeTab === "all" || activeTab === "repos") && showcaseRepos.length > 0 && (
                    <div>
                        {activeTab === "all" && (
                            <h2 className="text-lg font-bold text-zinc-900 mb-5 flex items-center gap-2">
                                <span className="w-1 h-5 rounded-full bg-brand-500" />
                                Open Source
                            </h2>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {showcaseRepos.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}
