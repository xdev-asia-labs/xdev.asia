import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/data";
import type { PostIndex } from "@/lib/types";
import { getValidImageUrl } from "@/utils/image";
import { IconClock } from "./Icons";

export default function PostCard({ post, priority = false }: { post: PostIndex; priority?: boolean }) {
    const imageUrl = getValidImageUrl(post.featured_image, post.slug);
    const visibleTags = post.tags?.slice(0, 3) ?? [];

    return (
        <article className="group post-card rounded-2xl overflow-hidden flex flex-col h-full">
            <Link href={`/blog/${post.slug}/`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={priority}
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {post.category && (
                        <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm shadow-sm">
                            {post.category.name}
                        </span>
                    )}
                </div>
            </Link>
            <div className="p-5 flex flex-col flex-1">
                <Link href={`/blog/${post.slug}/`}>
                    <h2 className="text-[0.95rem] font-bold text-zinc-900 group-hover:text-brand-600 transition-colors duration-200 line-clamp-2 leading-snug">
                        {post.title}
                    </h2>
                </Link>
                {post.excerpt && (
                    <p className="mt-2 text-[0.82rem] text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                        {post.excerpt}
                    </p>
                )}

                {/* Tags */}
                {visibleTags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {visibleTags.map((tag) => (
                            <span key={tag.slug} className="tag-pill text-[10px] px-2 py-0.5">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* Meta */}
                <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center gap-2.5 text-xs text-zinc-400">
                    {post.author?.avatar ? (
                        <Image
                            src={getValidImageUrl(post.author.avatar, post.author.name)}
                            alt={post.author.name}
                            width={20}
                            height={20}
                            style={{ height: "auto" }}
                            className="rounded-full ring-1 ring-zinc-200 object-cover"
                        />
                    ) : (
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white ring-1 ring-zinc-200 text-[9px] font-bold">
                            {post.author.name.charAt(0)}
                        </div>
                    )}
                    <span className="font-medium text-zinc-600 truncate">{post.author.name}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-zinc-300 shrink-0" />
                    <time dateTime={post.published_at ?? undefined} className="shrink-0">
                        {formatDate(post.published_at)}
                    </time>
                    {post.reading_time && (
                        <>
                            <span className="w-0.5 h-0.5 rounded-full bg-zinc-300 shrink-0" />
                            <span className="flex items-center gap-1 shrink-0">
                                <IconClock size={11} />
                                {post.reading_time} phút
                            </span>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}
