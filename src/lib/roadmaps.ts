import fs from "fs";
import path from "path";
import type { Roadmap, RoadmapMeta } from "@/lib/roadmap-shared";

export {
    THEME,
    ITEM_TYPE_BADGE,
    ITEM_TYPE_LABEL,
    type RoadmapItemType,
    type ThemeKey,
    type ThemeConfig,
    type RoadmapItem,
    type RoadmapPhase,
    type RoadmapStats,
    type RoadmapFaq,
    type RoadmapMeta,
    type Roadmap,
} from "@/lib/roadmap-shared";

const DATA_DIR = path.join(process.cwd(), "data");

export function getRoadmapList(): RoadmapMeta[] {
    const raw = fs.readFileSync(path.join(DATA_DIR, "roadmaps.json"), "utf-8");
    return JSON.parse(raw) as RoadmapMeta[];
}

export function getRoadmap(slug: string): Roadmap | null {
    const filePath = path.join(DATA_DIR, "roadmaps", `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as Roadmap;
}

export function getAllRoadmapSlugs(): string[] {
    return getRoadmapList().map((r) => r.slug);
}
