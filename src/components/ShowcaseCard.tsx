"use client";

import Image from "next/image";
import Link from "next/link";
import type { ShowcaseApp, ShowcaseRepo } from "@/lib/showcase-data";
import { IconGitHub, IconStar, IconFork, IconExternalLink, IconAppStore } from "./Icons";

export function AppCard({ app }: { app: ShowcaseApp }) {
    return (
        <div className="glass-card rounded-2xl p-6 flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-surface-100 shrink-0 flex items-center justify-center border border-zinc-200">
                    <Image
                        src={app.icon}
                        alt={app.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <Link href={`/showcase/${app.slug}/`} className="hover:text-brand-600 transition-colors">
                        <h3 className="text-lg font-bold text-zinc-900 mb-1">{app.name}</h3>
                    </Link>
                    <span className="text-xs font-medium text-brand-600">{app.category}</span>
                </div>
            </div>

            <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-5">{app.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {app.technologies.map((tech) => (
                    <span key={tech} className="tag-pill text-[11px] px-2 py-1">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Stats & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                    {app.rating && (
                        <span className="flex items-center gap-1 text-amber-500">
                            <IconStar size={13} className="fill-current" />
                            {app.rating}
                        </span>
                    )}
                    {app.downloads && (
                        <span>{app.downloads} downloads</span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href={`/showcase/${app.slug}/`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 hover:text-white transition-colors hover:bg-brand-600 border border-brand-200"
                    >
                        Chi tiết →
                    </Link>
                    {app.appStoreUrl && (
                        <a
                            href={app.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 hover:text-white transition-colors hover:bg-brand-600 border border-brand-200"
                        >
                            <IconAppStore size={14} />
                            App Store
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export function RepoCard({ repo }: { repo: ShowcaseRepo }) {
    return (
        <div className="glass-card rounded-2xl p-6 flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                    <IconGitHub size={20} className="text-zinc-400 shrink-0" />
                    <Link href={`/showcase/${repo.slug}/`} className="hover:text-brand-600 transition-colors">
                        <h3 className="text-lg font-bold text-zinc-900 truncate">{repo.name}</h3>
                    </Link>
                </div>
                {repo.isArchived && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-amber-600 bg-amber-50 border border-amber-200 shrink-0">
                        Archived
                    </span>
                )}
            </div>

            <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-5">{repo.description}</p>

            {/* Topics */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {repo.topics.map((topic) => (
                    <span key={topic} className="tag-pill text-[11px] px-2 py-1">
                        {topic}
                    </span>
                ))}
            </div>

            {/* Stats & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                        {repo.language}
                    </span>
                    <span className="flex items-center gap-1 text-amber-500">
                        <IconStar size={13} className="fill-current" />
                        {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                        <IconFork size={13} />
                        {repo.forks}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href={`/showcase/${repo.slug}/`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-600 hover:text-white transition-colors hover:bg-brand-600 border border-brand-200"
                    >
                        Chi tiết →
                    </Link>
                    {repo.homepage && (
                        <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-zinc-400 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                            aria-label="Homepage"
                        >
                            <IconExternalLink size={14} />
                        </a>
                    )}
                    <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors hover:bg-zinc-100 border border-zinc-200"
                    >
                        <IconGitHub size={13} />
                        View
                    </a>
                </div>
            </div>
        </div>
    );
}
