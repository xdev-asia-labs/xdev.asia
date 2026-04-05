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
        icon: "/images/logo/logo-vertical-light.svg",
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
        icon: "/images/logo/logo-vertical-light.svg",
        category: "Education",
        appStoreUrl: "https://apps.apple.com",
        rating: 4.6,
        downloads: "500+",
        technologies: ["Swift", "UIKit", "Combine", "Core Data"],
    },
];

export const defaultRepos: ShowcaseRepo[] = [
    {
        id: "repo-xinsight",
        slug: "xinsight",
        name: "xInsight",
        description: "📊 Analytics and observability platform for modern applications. Unified dashboard for metrics, logs, and insights.",
        githubUrl: "https://github.com/xdev-asia-labs/xInsight",
        stars: 0,
        forks: 0,
        language: "TypeScript",
        languageColor: "#3178C6",
        topics: ["analytics", "observability", "typescript", "dashboard"],
    },
    {
        id: "repo-xbrew",
        slug: "xbrew",
        name: "xBrew",
        description: "🍺 Modern Homebrew Package Manager for macOS. Beautiful, fast, and intuitive GUI for managing Homebrew packages, casks, and taps.",
        githubUrl: "https://github.com/xdev-asia-labs/xBrew",
        stars: 0,
        forks: 0,
        language: "Swift",
        languageColor: "#F05138",
        topics: ["swift", "swiftui", "macos", "homebrew", "package-manager"],
    },
    {
        id: "repo-xclaw",
        slug: "xclaw",
        name: "xClaw",
        description: "🐱 Open-source AI Agent platform with Gateway architecture, multi-channel support (Telegram, Discord), drag-and-drop Workflow Builder, and CLI interface.",
        githubUrl: "https://github.com/xdev-asia-labs/xClaw",
        homepage: "https://xclaw.xdev.asia",
        stars: 1,
        forks: 0,
        language: "TypeScript",
        languageColor: "#3178C6",
        topics: ["ai-agent", "typescript", "workflow", "telegram", "discord"],
    },
    {
        id: "repo-openvpn-install",
        slug: "openvpn-install",
        name: "openvpn-install",
        description: "🔒 Automated OpenVPN road warrior installer and management script for Linux servers.",
        githubUrl: "https://github.com/xdev-asia-labs/openvpn-install",
        homepage: "https://xdev.asia/blog/cai-dat-openvpn-tren-ubuntu-24-04",
        stars: 3,
        forks: 3,
        language: "Shell",
        languageColor: "#89e051",
        topics: ["openvpn", "vpn", "linux", "automation", "security", "bash"],
    },
    {
        id: "repo-postgres-patroni-etcd",
        slug: "postgres-patroni-etcd-install",
        name: "postgres-patroni-etcd-install",
        description: "🐘 Ansible playbooks to automate the installation and configuration of a PostgreSQL High Availability cluster using Patroni and etcd.",
        githubUrl: "https://github.com/xdev-asia-labs/postgres-patroni-etcd-install",
        homepage: "https://xdev.asia/blog/xay-dung-postgresql-high-availability-cluster-voi-ansible/",
        stars: 29,
        forks: 21,
        language: "Jinja",
        languageColor: "#a52a22",
        topics: ["postgresql", "patroni", "etcd", "ansible", "high-availability", "devops"],
    },
    {
        id: "repo-kubernetes-cookbook",
        slug: "kubernetes-cookbook",
        name: "kubernetes-cookbook",
        description: "⚙️ Ansible playbooks for deploying a production-ready RKE2 Kubernetes cluster with High Availability (HA) configuration.",
        githubUrl: "https://github.com/xdev-asia-labs/kubernetes-cookbook",
        stars: 2,
        forks: 1,
        language: "Jinja",
        languageColor: "#a52a22",
        topics: ["kubernetes", "rke2", "ansible", "high-availability", "devops"],
    },
];

export function getShowcaseSlugs(): string[] {
    return [
        ...defaultApps.map((a) => a.slug),
        ...defaultRepos.map((r) => r.slug),
    ];
}
