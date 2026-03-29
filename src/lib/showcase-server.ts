// Server-only showcase utilities — uses fs for GitHub data + markdown content
import fs from "fs";
import path from "path";
import { readMdxDocument, renderMdxBodyToHtml } from "./content";
import {
    defaultApps,
    defaultRepos,
    type ShowcaseApp,
    type ShowcaseRepo,
    type ShowcaseDetail,
    type ShowcaseItem,
} from "./showcase-data";

// ---------- GitHub data merge ----------

interface GitHubRepoData {
    description?: string;
    stars?: number;
    forks?: number;
    language?: string;
    languageColor?: string;
    topics?: string[];
    homepage?: string;
    archived?: boolean;
    html_url?: string;
}

function loadGitHubData(): Record<string, GitHubRepoData> {
    try {
        const filePath = path.join(process.cwd(), "data", "github-repos.json");
        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath, "utf-8"));
        }
    } catch {
        // ignore
    }
    return {};
}

const githubCache = loadGitHubData();

function enrichRepo(repo: ShowcaseRepo): ShowcaseRepo {
    const gh = githubCache[repo.slug];
    if (!gh) return repo;
    return {
        ...repo,
        description: gh.description || repo.description,
        stars: gh.stars ?? repo.stars,
        forks: gh.forks ?? repo.forks,
        language: gh.language || repo.language,
        languageColor: gh.languageColor || repo.languageColor,
        topics: gh.topics && gh.topics.length > 0 ? gh.topics : repo.topics,
        homepage: gh.homepage || repo.homepage,
        githubUrl: gh.html_url || repo.githubUrl,
        isArchived: gh.archived ?? repo.isArchived,
    };
}

// ---------- Enriched data (server-side only) ----------

export const showcaseApps: ShowcaseApp[] = defaultApps;
export const showcaseRepos: ShowcaseRepo[] = defaultRepos.map(enrichRepo);

export function getAllShowcaseItems(): ShowcaseItem[] {
    return [
        ...showcaseApps.map((app) => ({ type: "app" as const, data: app })),
        ...showcaseRepos.map((repo) => ({ type: "repo" as const, data: repo })),
    ];
}

// ---------- Detail page ----------

interface ShowcaseFrontmatter {
    featured_image?: string;
    [key: string]: unknown;
}

export function getShowcaseDetail(slug: string): ShowcaseDetail | null {
    const app = showcaseApps.find((a) => a.slug === slug) ?? null;
    const repo = showcaseRepos.find((r) => r.slug === slug) ?? null;

    if (!app && !repo) return null;

    let mdContent = "";
    let featured_image: string | undefined;

    const doc = readMdxDocument<ShowcaseFrontmatter>("showcase", slug);
    if (doc) {
        mdContent = renderMdxBodyToHtml(doc.content);
        featured_image = doc.data.featured_image || undefined;
    }

    if (app) {
        return {
            type: "app",
            slug: app.slug,
            name: app.name,
            description: app.description,
            content: mdContent,
            featured_image: featured_image || app.featured_image,
            icon: app.icon,
            category: app.category,
            appStoreUrl: app.appStoreUrl,
            playStoreUrl: app.playStoreUrl,
            rating: app.rating,
            downloads: app.downloads,
            technologies: app.technologies,
        };
    }

    const r = repo!;
    return {
        type: "repo",
        slug: r.slug,
        name: r.name,
        description: r.description,
        content: mdContent,
        featured_image: featured_image || r.featured_image,
        githubUrl: r.githubUrl,
        homepage: r.homepage,
        stars: r.stars,
        forks: r.forks,
        language: r.language,
        languageColor: r.languageColor,
        topics: r.topics,
        isArchived: r.isArchived,
    };
}
