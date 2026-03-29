import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAIPost, getAIPostSlugs, formatDate, getAllAIPosts, getAuthorById } from "@/lib/data";
import { getValidImageUrl } from "@/utils/image";
import ContentRenderer from "@/components/ContentRenderer";
import TableOfContents from "@/components/TableOfContents";
import { IconChevronRight, IconClock, IconBrain } from "@/components/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
    return getAIPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getAIPost(slug);
    if (!post) return {};
    return {
        title: `${post.title} — AI`,
        description: post.excerpt || post.title,
    };
}

export default async function AIBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getAIPost(slug);
    if (!post) notFound();

    const allPosts = getAllAIPosts();
    const currentIdx = allPosts.findIndex((p) => p.slug === slug);
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    const fullAuthor = getAuthorById(post.author.id);

    return (
        <div>
            {/* Hero Header */}
            <div className="relative overflow-hidden hero-gradient border-b border-zinc-100">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/ai/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
                            <IconBrain size={13} className="text-brand-600" />
                            AI
                        </Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <span className="text-zinc-400 truncate max-w-50">{post.title}</span>
                    </nav>

                    {post.category && (
                        <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 mb-5">
                            {post.category.name}
                        </span>
                    )}

                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-3xl">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-5 text-sm">
                        <div className="flex items-center gap-3">
                            {post.author.avatar ? (
                                <Image
                                    src={getValidImageUrl(post.author.avatar, post.author.name)}
                                    alt={post.author.name}
                                    width={44}
                                    height={44}
                                    style={{ height: "auto" }}
                                    className="rounded-full object-cover ring-2 ring-white shadow-sm"
                                />
                            ) : (
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                    {post.author.name.charAt(0)}
                                </div>
                            )}
                            <div>
                                <div className="font-semibold text-zinc-800">{post.author.name}</div>
                                <div className="text-xs text-zinc-500 flex items-center gap-2">
                                    <time dateTime={post.published_at ?? undefined}>
                                        {formatDate(post.published_at)}
                                    </time>
                                    {post.reading_time && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                            <span className="flex items-center gap-1">
                                                <IconClock size={12} />
                                                {post.reading_time} phút đọc
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {post.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag.slug} className="tag-pill">
                                    #{tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
                        <Image
                            src={getValidImageUrl(post.featured_image, post.slug)}
                            alt={post.title}
                            width={1200}
                            height={630}
                            style={{ height: "auto" }}
                            className="w-full h-auto aspect-2/1 object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Content Area with TOC */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="relative flex gap-16">
                    {/* Main Content */}
                    <article className="min-w-0 flex-1 max-w-4xl mx-auto">
                        <ContentRenderer html={post.content} />

                        {/* Author Profile Card */}
                        {fullAuthor && (
                            <div className="mt-16 p-8 rounded-2xl glass-card">
                                <div className="flex flex-col sm:flex-row items-start gap-5">
                                    {fullAuthor.avatar ? (
                                        <Image
                                            src={getValidImageUrl(fullAuthor.avatar, fullAuthor.name)}
                                            alt={fullAuthor.name}
                                            width={72}
                                            height={72}
                                            style={{ height: "auto" }}
                                            className="rounded-2xl object-cover ring-2 ring-white shadow-lg shrink-0"
                                        />
                                    ) : (
                                        <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold text-2xl shadow-lg shrink-0">
                                            {fullAuthor.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <div className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-1">Tác giả</div>
                                        <h3 className="text-xl font-extrabold text-zinc-900 mb-2">{fullAuthor.name}</h3>
                                        {fullAuthor.bio && (
                                            <p className="text-sm text-zinc-500 leading-relaxed">{fullAuthor.bio}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Post Navigation */}
                        <div className="mt-12 pt-10 flex flex-col sm:flex-row justify-between gap-6 border-t border-zinc-100">
                            {currentIdx > 0 && (
                                <Link
                                    href={`/ai/${allPosts[currentIdx - 1].slug}/`}
                                    className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-brand-600 transition-colors"
                                >
                                    <svg className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    <span className="line-clamp-1">{allPosts[currentIdx - 1].title}</span>
                                </Link>
                            )}
                            {currentIdx < allPosts.length - 1 && (
                                <Link
                                    href={`/ai/${allPosts[currentIdx + 1].slug}/`}
                                    className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-brand-600 transition-colors ml-auto text-right"
                                >
                                    <span className="line-clamp-1">{allPosts[currentIdx + 1].title}</span>
                                    <svg className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            )}
                        </div>

                        {/* Comments */}
                        {post.comments && post.comments.length > 0 && (
                            <section className="mt-12 pt-10 border-t border-zinc-100">
                                <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-3">
                                    <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                    Bình luận ({post.comments.length})
                                </h2>
                                <div className="space-y-6">
                                    {post.comments.map((comment) => (
                                        <div key={comment.id} className="flex gap-4 p-5 rounded-xl glass-card">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold ring-2 ring-surface-200 shrink-0">
                                                {comment.user.name.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-sm text-zinc-800">{comment.user.name}</span>
                                                    <span className="text-xs text-zinc-400">{formatDate(comment.created_at)}</span>
                                                </div>
                                                <p className="text-sm text-zinc-600 leading-relaxed">{comment.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    {/* Sidebar TOC */}
                    <aside className="hidden xl:block w-72 shrink-0">
                        <div className="sticky top-24">
                            <TableOfContents html={post.content} />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 border-t border-zinc-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-8">
                            Bài viết AI liên quan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((p) => (
                                <Link key={p.id} href={`/ai/${p.slug}/`} className="block">
                                    <div className="group glass-card rounded-2xl overflow-hidden">
                                        <div className="relative aspect-[16/10] overflow-hidden bg-surface-100">
                                            <Image
                                                src={p.featured_image ? `/storage/${p.featured_image}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(p.title)}&size=600&background=4f46e5&color=fff&bold=true&format=png`}
                                                alt={p.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-sm font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-2">{p.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
