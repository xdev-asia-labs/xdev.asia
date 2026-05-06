export type RoadmapItemType = "skill" | "tool" | "cert";

export interface RoadmapQuizQuestion {
    q: string;
    options: string[];
    answer: number; // index of correct option
    explanation?: string;
}

export interface RoadmapItem {
    name: string;
    detail: string;
    type: RoadmapItemType;
    level?: "basic" | "intermediate" | "advanced";
    estimatedTime?: string;
    outcomes?: string[];
    lab?: string;
    artifact?: string;
    checklist?: string[];
    recommendedFor?: Array<"beginner" | "transitioner">;
    resources?: string[];
    resourceLinks?: Array<{ label?: string; title?: string; url: string; type?: "article" | "video" | "course" | "tool" | "doc" }>;
    learningSteps?: string[];
    quiz?: RoadmapQuizQuestion[];
}

export interface RoadmapTrack {
    id: "beginner" | "transitioner";
    label: string;
    target: string;
    weeklyHours: string;
    focusPhases: number[];
    outcomes: string[];
}

export type ThemeKey =
    | "blue"
    | "violet"
    | "emerald"
    | "cyan"
    | "amber"
    | "rose"
    | "orange"
    | "indigo"
    | "pink"
    | "teal"
    | "sky"
    | "purple";

export interface RoadmapPhase {
    phase: number;
    title: string;
    subtitle: string;
    duration: string;
    theme: ThemeKey;
    goals?: string[];
    deliverables?: string[];
    projects?: string[];
    items: RoadmapItem[];
}

export interface RoadmapStats {
    phases: number;
    duration: string;
    level: string;
    certs: string;
}

export interface RoadmapMeta {
    slug: string;
    title: string;
    description: string;
    category?: "role" | "skill" | "best-practice" | "project";
    icon: string;
    theme: ThemeKey;
    stats: RoadmapStats;
    tags: string[];
}

export interface RoadmapFaq {
    question: string;
    answer: string;
}

export interface Roadmap extends RoadmapMeta {
    headline: string;
    intro?: string;
    why_now?: string;
    faq?: RoadmapFaq[];
    tracks?: RoadmapTrack[];
    phases: RoadmapPhase[];
}

export interface ThemeConfig {
    color: string;
    bgColor: string;
    borderColor: string;
    levelColor: string;
}

export const THEME: Record<ThemeKey, ThemeConfig> = {
    blue: { color: "text-blue-700 dark:text-blue-300", bgColor: "bg-blue-50 dark:bg-blue-900/20", borderColor: "border-blue-200 dark:border-blue-800", levelColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    violet: { color: "text-violet-700 dark:text-violet-300", bgColor: "bg-violet-50 dark:bg-violet-900/20", borderColor: "border-violet-200 dark:border-violet-800", levelColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" },
    emerald: { color: "text-emerald-700 dark:text-emerald-300", bgColor: "bg-emerald-50 dark:bg-emerald-900/20", borderColor: "border-emerald-200 dark:border-emerald-800", levelColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
    cyan: { color: "text-cyan-700 dark:text-cyan-300", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", borderColor: "border-cyan-200 dark:border-cyan-800", levelColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
    amber: { color: "text-amber-700 dark:text-amber-300", bgColor: "bg-amber-50 dark:bg-amber-900/20", borderColor: "border-amber-200 dark:border-amber-800", levelColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
    rose: { color: "text-rose-700 dark:text-rose-300", bgColor: "bg-rose-50 dark:bg-rose-900/20", borderColor: "border-rose-200 dark:border-rose-800", levelColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" },
    orange: { color: "text-orange-700 dark:text-orange-300", bgColor: "bg-orange-50 dark:bg-orange-900/20", borderColor: "border-orange-200 dark:border-orange-800", levelColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
    indigo: { color: "text-indigo-700 dark:text-indigo-300", bgColor: "bg-indigo-50 dark:bg-indigo-900/20", borderColor: "border-indigo-200 dark:border-indigo-800", levelColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
    pink: { color: "text-pink-700 dark:text-pink-300", bgColor: "bg-pink-50 dark:bg-pink-900/20", borderColor: "border-pink-200 dark:border-pink-800", levelColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300" },
    teal: { color: "text-teal-700 dark:text-teal-300", bgColor: "bg-teal-50 dark:bg-teal-900/20", borderColor: "border-teal-200 dark:border-teal-800", levelColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300" },
    sky: { color: "text-sky-700 dark:text-sky-300", bgColor: "bg-sky-50 dark:bg-sky-900/20", borderColor: "border-sky-200 dark:border-sky-800", levelColor: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300" },
    purple: { color: "text-purple-700 dark:text-purple-300", bgColor: "bg-purple-50 dark:bg-purple-900/20", borderColor: "border-purple-200 dark:border-purple-800", levelColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
};

export const ITEM_TYPE_BADGE: Record<RoadmapItemType, string> = {
    skill: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    tool: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    cert: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
};

export const ITEM_TYPE_LABEL: Record<RoadmapItemType, string> = {
    skill: "Kỹ năng",
    tool: "Công cụ",
    cert: "Chứng chỉ",
};
