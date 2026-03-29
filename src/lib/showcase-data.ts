// Client-safe showcase data — NO server-side imports (no fs, no content.ts)
// GitHub data merging happens in showcase-server.ts

export interface ShowcaseApp {
    id: string;
    slug: string;
    name: string;
    description: string;
    icon: string;
    category: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    rating?: number;
    downloads?: string;
    screenshots?: string[];
    technologies: string[];
    featured_image?: string;
}

export interface ShowcaseRepo {
    id: string;
    slug: string;
    name: string;
    description: string;
    githubUrl: string;
    homepage?: string;
    stars: number;
    forks: number;
    language: string;
    languageColor: string;
    topics: string[];
    isArchived?: boolean;
    featured_image?: string;
}

export interface ShowcaseDetail {
    type: "app" | "repo";
    slug: string;
    name: string;
    description: string;
    content: string;
    featured_image?: string;
    icon?: string;
    category?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    rating?: number;
    downloads?: string;
    technologies?: string[];
    githubUrl?: string;
    homepage?: string;
    stars?: number;
    forks?: number;
    language?: string;
    languageColor?: string;
    topics?: string[];
    isArchived?: boolean;
}

export type ShowcaseItem =
    | { type: "app"; data: ShowcaseApp }
    | { type: "repo"; data: ShowcaseRepo };

// ---------- Hardcoded defaults (fallback if GitHub API unavailable) ----------

export const defaultApps: ShowcaseApp[] = [
    {
        id: "app-xclaw",
        slug: "xclaw-app",
        name: "xClaw",
        description: "AI-powered chat assistant app with multiple AI models. Clean, intuitive interface for daily AI conversations.",
        icon: "/images/logo.png",
        category: "Productivity",
        appStoreUrl: "https://apps.apple.com",
        rating: 4.8,
        downloads: "1K+",
        technologies: ["Swift", "SwiftUI", "Core Data", "AI/ML"],
    },
    {
        id: "app-xdev",
        slug: "xdev-reader",
        name: "xDev Reader",
        description: "Tech blog reader app with offline support. Read articles, series, and courses on the go.",
        icon: "/images/logo.png",
        category: "Education",
        appStoreUrl: "https://apps.apple.com",
        rating: 4.6,
        downloads: "500+",
        technologies: ["Swift", "UIKit", "Combine", "Core Data"],
    },
];

export const defaultRepos: ShowcaseRepo[] = [
    {
        id: "repo-xclaw",
        slug: "xclaw",
        name: "xClaw",
        description: "🐱 AI Chat Application — A modern, multi-model AI chat client built with Swift and SwiftUI, featuring a beautiful liquid glass design.",
        githubUrl: "https://github.com/tdduydev/xclaw",
        homepage: "https://xclaw.xdev.asia",
        stars: 42,
        forks: 8,
        language: "Swift",
        languageColor: "#F05138",
        topics: ["swift", "swiftui", "ai", "chatbot", "macos"],
    },
    {
        id: "repo-x-postgres-backup",
        slug: "x-postgres-backup",
        name: "x-postgres-backup",
        description: "🐘 Automated PostgreSQL backup solution with Docker. Supports multiple PG versions, S3 upload, and cron scheduling.",
        githubUrl: "https://github.com/tdduydev/x-postgres-backup",
        stars: 28,
        forks: 5,
        language: "Python",
        languageColor: "#3572A5",
        topics: ["postgresql", "backup", "docker", "devops", "automation"],
    },
    {
        id: "repo-xdev-asia",
        slug: "xdev-asia",
        name: "xdev.asia",
        description: "🌐 Personal tech blog & knowledge sharing platform built with Next.js. Features blog, series, courses, and showcase sections.",
        githubUrl: "https://github.com/tdduydev/xdev.asia",
        homepage: "https://xdev.asia",
        stars: 15,
        forks: 3,
        language: "TypeScript",
        languageColor: "#3178C6",
        topics: ["nextjs", "blog", "typescript", "tailwindcss"],
    },
    {
        id: "repo-autox",
        slug: "autox",
        name: "AutoX",
        description: "🤖 AI Agent Platform — Build, deploy and manage autonomous AI agents. Multi-agent orchestration with plugin architecture.",
        githubUrl: "https://github.com/tdduydev/autox",
        stars: 35,
        forks: 7,
        language: "TypeScript",
        languageColor: "#3178C6",
        topics: ["ai-agent", "automation", "typescript", "llm"],
    },
    {
        id: "repo-x-lms",
        slug: "x-lms",
        name: "x-lms",
        description: "📚 Learning Management System built with Laravel. Full-featured LMS with courses, lessons, quizzes, and certificates.",
        githubUrl: "https://github.com/tdduydev/x-lms",
        stars: 22,
        forks: 6,
        language: "PHP",
        languageColor: "#4F5D95",
        topics: ["laravel", "lms", "education", "php"],
    },
];

export function getShowcaseSlugs(): string[] {
    return [
        ...defaultApps.map((a) => a.slug),
        ...defaultRepos.map((r) => r.slug),
    ];
}
