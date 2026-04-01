import ContentRenderer from "@/components/ContentRenderer";
import { IconAppStore, IconChevronRight, IconExternalLink, IconFork, IconGitHub, IconStar } from "@/components/Icons";
import { getShowcaseSlugs } from "@/lib/showcase-data";
import { getShowcaseDetail, showcaseApps, showcaseRepos } from "@/lib/showcase-server";
import { getValidImageUrl } from "@/utils/image";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
    return getShowcaseSlugs().map((slug) => ({ slug }));
}

const SITE_URL = "https://xdev.asia";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getShowcaseDetail(slug);
    if (!project) return {};

    const canonicalUrl = `${SITE_URL}/showcase/${slug}/`;
    const rawImageUrl = getValidImageUrl(project.featured_image ?? null, slug);
    const imageUrl = rawImageUrl.startsWith("http") ? rawImageUrl : `${SITE_URL}${rawImageUrl}`;

    return {
        title: `${project.name} — Showcase`,
        description: project.description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: `${project.name} — xDev Asia Showcase`,
            description: project.description,
            url: canonicalUrl,
            siteName: "xDev Asia",
            locale: "vi_VN",
            type: "website",
            images: [{ url: imageUrl, width: 1200, height: 630, alt: project.name }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.name} — xDev Asia Showcase`,
            description: project.description,
            images: [imageUrl],
        },
    };
}

export default async function ShowcaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getShowcaseDetail(slug);
    if (!project) notFound();

    // Get other projects for "Related" section
    const allProjects = [
        ...showcaseApps.map((a) => ({ slug: a.slug, name: a.name, description: a.description, type: "app" as const })),
        ...showcaseRepos.map((r) => ({ slug: r.slug, name: r.name, description: r.description, type: "repo" as const })),
    ].filter((p) => p.slug !== slug).slice(0, 4);

    return (
        <div>
            {/* Hero */}
            <div className="hero-gradient border-b border-zinc-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/showcase/" className="hover:text-brand-600 transition-colors">Showcase</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <span className="text-zinc-400 truncate max-w-50">{project.name}</span>
                    </nav>

                    <div className="flex items-start gap-5 mb-6">
                        {/* App icon or GitHub icon */}
                        {project.type === "app" && project.icon ? (
                            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shadow-lg border border-zinc-200 shrink-0">
                                <Image
                                    src={project.icon}
                                    alt={project.name}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 shadow-lg">
                                <IconGitHub size={32} className="text-white" />
                            </div>
                        )}
                        <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-brand-500">
                                    {project.type === "app" ? (project.category || "App") : "Open Source"}
                                </span>
                                {project.language && (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200">
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.languageColor }} />
                                        {project.language}
                                    </span>
                                )}
                                {project.isArchived && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-amber-600 bg-amber-50 border border-amber-200">
                                        Archived
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                                {project.name}
                            </h1>
                        </div>
                    </div>

                    <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-3xl">
                        {project.description}
                    </p>

                    {/* Stats & Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Stats */}
                        {project.stars !== undefined && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-amber-600 bg-amber-50 border border-amber-200">
                                <IconStar size={14} className="fill-current" />
                                {project.stars} stars
                            </span>
                        )}
                        {project.forks !== undefined && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-600 bg-zinc-100 border border-zinc-200">
                                <IconFork size={14} />
                                {project.forks} forks
                            </span>
                        )}
                        {project.rating !== undefined && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-amber-600 bg-amber-50 border border-amber-200">
                                <IconStar size={14} className="fill-current" />
                                {project.rating}
                            </span>
                        )}
                        {project.downloads && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-600 bg-zinc-100 border border-zinc-200">
                                {project.downloads} downloads
                            </span>
                        )}

                        <div className="flex-1" />

                        {/* Action buttons */}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-sm"
                            >
                                <IconGitHub size={16} />
                                GitHub
                            </a>
                        )}
                        {project.homepage && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors border border-brand-200"
                            >
                                <IconExternalLink size={14} />
                                Website
                            </a>
                        )}
                        {project.appStoreUrl && (
                            <a
                                href={project.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 transition-colors border border-brand-200"
                            >
                                <IconAppStore size={14} />
                                App Store
                            </a>
                        )}
                    </div>

                    {/* Tech tags */}
                    {(project.topics || project.technologies) && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {(project.topics || project.technologies || []).map((tag) => (
                                <span key={tag} className="tag-pill">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Featured Image */}
            {project.featured_image && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                        <Image
                            src={getValidImageUrl(project.featured_image, project.slug)}
                            alt={project.name}
                            width={1200}
                            height={630}
                            style={{ height: "auto" }}
                            className="w-full h-auto aspect-2/1 object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            {project.content && (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <article className="min-w-0">
                        <ContentRenderer html={project.content} />
                    </article>
                </div>
            )}

            {/* Related Projects */}
            {allProjects.length > 0 && (
                <section className="border-t border-zinc-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-8">
                            Dự án khác
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {allProjects.map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/showcase/${p.slug}/`}
                                    className="glass-card rounded-2xl p-5 hover:shadow-md transition-shadow group"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white bg-brand-500">
                                            {p.type === "app" ? "App" : "Repo"}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors mb-1">
                                        {p.name}
                                    </h3>
                                    <p className="text-xs text-zinc-500 line-clamp-2">
                                        {p.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
