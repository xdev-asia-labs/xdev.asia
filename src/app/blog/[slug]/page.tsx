import { InArticleAd, SidebarAd, BannerAd } from "@/components/AdUnit";
import BackToTop from "@/components/BackToTop";
import BookmarkButton from "@/components/BookmarkButton";
import ContentGate from "@/components/ContentGate";
import ContentRenderer from "@/components/ContentRenderer";
import GiscusComments from "@/components/GiscusComments";
import { IconChevronRight, IconClock } from "@/components/Icons";
import PostCard from "@/components/PostCard";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import { formatDate, getAllPosts, getAuthorById, getPost, getPostSlugs } from "@/lib/data";
import { getValidImageUrl } from "@/utils/image";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

const SITE_URL = "https://xdev.asia";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};

    const canonicalUrl = `${SITE_URL}/blog/${slug}/`;
    const rawImageUrl = getValidImageUrl(post.featured_image ?? null, slug);
    const imageUrl = rawImageUrl.startsWith("http") ? rawImageUrl : `${SITE_URL}${rawImageUrl}`;

    return {
        title: post.title,
        description: post.excerpt || post.title,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            url: canonicalUrl,
            siteName: "xDev Asia",
            locale: "vi_VN",
            type: "article",
            ...(post.published_at ? { publishedTime: post.published_at } : {}),
            authors: [post.author.name],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || post.title,
            images: [imageUrl],
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const allPosts = getAllPosts();
    const currentIdx = allPosts.findIndex((p) => p.slug === slug);
    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug && p.category?.slug === post.category?.slug)
        .slice(0, 3);

    const fullAuthor = getAuthorById(post.author.id);

    const canonicalUrl = `${SITE_URL}/blog/${slug}/`;
    const rawImageUrl = getValidImageUrl(post.featured_image ?? null, slug);
    const imageUrl = rawImageUrl.startsWith("http") ? rawImageUrl : `${SITE_URL}${rawImageUrl}`;

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt || post.title,
        image: imageUrl,
        datePublished: post.published_at || post.created_at,
        dateModified: post.published_at || post.created_at,
        author: {
            "@type": "Person",
            name: post.author.name,
            ...(fullAuthor?.avatar ? { image: fullAuthor.avatar.startsWith("http") ? fullAuthor.avatar : `${SITE_URL}${fullAuthor.avatar}` } : {}),
            url: `${SITE_URL}/gioi-thieu/`,
        },
        publisher: {
            "@type": "Organization",
            name: "xDev Asia",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/brand/logo.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
        },
        ...(post.category ? { articleSection: post.category.name } : {}),
        inLanguage: "vi",
        ...(post.tags.length > 0 ? { keywords: post.tags.map((t) => t.name).join(", ") } : {}),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
            { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
        ],
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {/* Reading progress bar */}
            <ReadingProgress />
            <div className="relative overflow-hidden hero-gradient border-b border-zinc-100">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-8">
                        <Link href="/" className="hover:text-brand-600 transition-colors">Trang chủ</Link>
                        <IconChevronRight size={14} className="text-zinc-300" />
                        <Link href="/blog/" className="hover:text-brand-600 transition-colors">Blog</Link>
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
                        <Link href="/gioi-thieu/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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
                        </Link>
                    </div>

                    {post.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <Link key={tag.slug} href={`/tags/${tag.slug}/`} className="tag-pill">
                                    #{tag.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <div className="rounded-2xl shadow-lg border border-zinc-200 bg-surface-50 p-1.5">
                        <img
                            src={getValidImageUrl(post.featured_image, post.slug)}
                            alt={post.title}
                            className="w-full h-auto rounded-xl"
                            loading="eager"
                        />
                    </div>
                </div>
            )}

            {/* Content Area with TOC */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="relative flex gap-16">
                    {/* Main Content */}
                    <article className="min-w-0 flex-1 max-w-4xl mx-auto">
                        {/* Mobile TOC — collapsible, above content */}
                        <TableOfContents html={post.content} mobileOnly />

                        <ContentGate>
                            <ContentRenderer html={post.content} />
                        </ContentGate>

                        {/* In-article Ad */}
                        <InArticleAd />

                        {/* Share & Bookmark */}
                        <div className="mt-10 pt-8 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                            <ShareButtons title={post.title} url={`${SITE_URL}/blog/${slug}/`} />
                            <BookmarkButton
                                slug={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                featured_image={post.featured_image}
                                category={post.category?.name || null}
                            />
                        </div>

                        {/* Author Profile Card */}
                        {fullAuthor && (
                            <Link href="/gioi-thieu/" className="block mt-16 p-8 rounded-2xl glass-card hover:shadow-lg transition-shadow">
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
                            </Link>
                        )}

                        {/* Post Navigation */}
                        <div className="mt-12 pt-10 flex flex-col sm:flex-row justify-between gap-6 border-t border-zinc-100">
                            {currentIdx > 0 && (
                                <Link
                                    href={`/blog/${allPosts[currentIdx - 1].slug}/`}
                                    className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-brand-600 transition-colors"
                                >
                                    <svg className="w-5 h-5 shrink-0 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    <span className="line-clamp-1">{allPosts[currentIdx - 1].title}</span>
                                </Link>
                            )}
                            {currentIdx < allPosts.length - 1 && (
                                <Link
                                    href={`/blog/${allPosts[currentIdx + 1].slug}/`}
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
                                            {comment.user.avatar ? (
                                                <Image
                                                    src={getValidImageUrl(comment.user.avatar, comment.user.name)}
                                                    alt={comment.user.name}
                                                    width={40}
                                                    height={40}
                                                    style={{ height: "auto" }}
                                                    className="rounded-full shrink-0 object-cover ring-2 ring-white"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold ring-2 ring-surface-200 shrink-0">
                                                    {comment.user.name.charAt(0)}
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-semibold text-sm text-zinc-800">{comment.user.name}</span>
                                                    <span className="text-xs text-zinc-400">{formatDate(comment.created_at)}</span>
                                                </div>
                                                <p className="text-sm text-zinc-600 leading-relaxed">{comment.body}</p>
                                                {comment.replies && comment.replies.length > 0 && (
                                                    <div className="mt-4 ml-2 pl-4 space-y-4 border-l-2 border-brand-100">
                                                        {comment.replies.map((reply) => (
                                                            <div key={reply.id} className="flex gap-3">
                                                                {reply.user.avatar ? (
                                                                    <Image
                                                                        src={getValidImageUrl(reply.user.avatar, reply.user.name)}
                                                                        alt={reply.user.name}
                                                                        width={32}
                                                                        height={32}
                                                                        style={{ height: "auto" }}
                                                                        className="rounded-full shrink-0 object-cover"
                                                                    />
                                                                ) : (
                                                                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500 shrink-0">
                                                                        {reply.user.name.charAt(0)}
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="font-medium text-sm text-zinc-800">{reply.user.name}</span>
                                                                        <span className="text-xs text-zinc-400">{formatDate(reply.created_at)}</span>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-zinc-600">{reply.body}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Giscus Comments */}
                        <GiscusComments term={`/blog/${slug}/`} />
                    </article>

                    {/* Sidebar TOC — desktop only */}
                    <aside className="hidden xl:block w-72 shrink-0">
                        <div className="sticky top-24">
                            <TableOfContents html={post.content} />
                            <SidebarAd className="mt-8" />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Back to top */}
            <BackToTop />

            {/* Banner Ad */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <BannerAd />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 border-t border-zinc-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-8">
                            Bài viết liên quan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((p) => (
                                <PostCard key={p.id} post={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
