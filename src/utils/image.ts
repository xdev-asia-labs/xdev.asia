export const TECH_IMAGES = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800"
];

export function getFallbackImage(seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % TECH_IMAGES.length;
    return TECH_IMAGES[index];
}

export function getValidImageUrl(path: string | null | undefined, fallbackSeed: string): string {
    if (!path) return getFallbackImage(fallbackSeed);
    if (path.startsWith("http://") || path.startsWith("https://")) return path;

    const normalizedPath = path.replace(/^\/+/, "");

    if (normalizedPath.startsWith("avatars/")) {
        return `/${normalizedPath}`;
    }

    if (normalizedPath.startsWith("uploads/")) {
        return `/storage/${normalizedPath}`;
    }

    if (normalizedPath.startsWith("storage/")) {
        return `/${normalizedPath}`;
    }

    return `/${normalizedPath}`;
}
