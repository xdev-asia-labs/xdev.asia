import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/data";
import type { PostIndex } from "@/lib/types";
import { getValidImageUrl } from "@/utils/image";
import { IconClock } from "./Icons";

export default function PostCard({ post, priority = false }: { post: PostIndex; priority?: boolean }) {
    const imageUrl = getValidImageUrl(post.featured_image, post.slug);

    return (
        <article className="group glass-card rounded-2xl overflow-hidden">
            <Link href={`/blog/${post.slug}/`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-100">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={priority}
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {post.category && (
                        <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white bg-brand-600/90 backdrop-blur-sm">
                            {post.category.name}
                        </span>
                    )}
                </div>
            </Link>
            <div className="p-5">
                <Link href={`/blog/${post.slug}/`}>
                    <h2 className="text-base font-bold text-zinc-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                    </h2>
                </Link>
                {post.excerpt && (
                    <p className="mt-2.5 text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                    </p>
                )}
                <div className="mt-4 flex items-center gap-3 text-xs font-medium text-zinc-400">
                    {post.author?.avatar ? (
                        <Image
                            src={getValidImageUrl(post.author.avatar, post.author.name)}
                            alt={post.author.name}
                            width={22}
                            height={22}
                            style={{ height: "auto" }}
                            className="rounded-full ring-2 ring-white object-cover"
                        />
                    ) : (
                        <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white ring-2 ring-white text-[10px] font-bold">
                            {post.author.name.charAt(0)}
                        </div>
                    )}
                    <span className="text-zinc-600">{post.author.name}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <time dateTime={post.published_at ?? undefined}>
                        {formatDate(post.published_at)}
                    </time>
                    {post.reading_time && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                            <span className="flex items-center gap-1">
                                <IconClock size={12} />
                                {post.reading_time} phút
                            </span>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}
