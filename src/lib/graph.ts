import { getAllPosts, getAllSeries, getCategories, getTags } from "./data";

export interface GraphNode {
  id: string;
  label: string;
  type: "category" | "tag";
  slug: string;
  weight: number; // number of connections → controls size
  color: string;
  href: string;
  icon: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  weight: number; // number of shared items → controls thickness
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const CATEGORY_COLORS: Record<string, string> = {
  ai: "#8b5cf6",
  "ai-machine-learning": "#8b5cf6",
  "lap-trinh": "#3b82f6",
  programming: "#3b82f6",
  devops: "#10b981",
  cloud: "#06b6d4",
  database: "#f59e0b",
  security: "#ef4444",
  linux: "#22c55e",
  architecture: "#ec4899",
};

const CATEGORY_ICONS: Record<string, string> = {
  ai: "brain",
  "ai-machine-learning": "brain",
  "lap-trinh": "code",
  programming: "code",
  devops: "gear",
  devsecops: "gear",
  cloud: "cloud",
  database: "database",
  security: "shield",
  linux: "terminal",
  architecture: "arch",
  "luyen-thi": "exam",
};

function getCategoryColor(slug: string): string {
  return CATEGORY_COLORS[slug] ?? "#6366f1";
}

// lighter version of category color for tags
function getTagColor(catSlug: string | null): string {
  if (!catSlug) return "#94a3b8";
  const base = CATEGORY_COLORS[catSlug];
  return base ?? "#94a3b8";
}

export function buildKnowledgeGraph(): GraphData {
  const categories = getCategories();
  const allPosts = getAllPosts();
  const allSeries = getAllSeries();

  // Count tag usage per category
  // tagSlug → { categorySlug → count }
  const tagCategoryMap = new Map<string, Map<string, number>>();
  const tagTotalCount = new Map<string, number>();

  for (const post of allPosts) {
    const catSlug = post.category?.slug;
    if (!catSlug) continue;
    for (const tag of post.tags) {
      if (!tagCategoryMap.has(tag.slug)) tagCategoryMap.set(tag.slug, new Map());
      const catMap = tagCategoryMap.get(tag.slug)!;
      catMap.set(catSlug, (catMap.get(catSlug) ?? 0) + 1);
      tagTotalCount.set(tag.slug, (tagTotalCount.get(tag.slug) ?? 0) + 1);
    }
  }

  for (const series of allSeries) {
    const catSlug = series.category?.slug;
    if (!catSlug) continue;
    for (const tag of series.tags) {
      if (!tagCategoryMap.has(tag.slug)) tagCategoryMap.set(tag.slug, new Map());
      const catMap = tagCategoryMap.get(tag.slug)!;
      catMap.set(catSlug, (catMap.get(catSlug) ?? 0) + 2); // series count more
      tagTotalCount.set(tag.slug, (tagTotalCount.get(tag.slug) ?? 0) + 2);
    }
  }

  // Build category nodes
  const catSlugsUsed = new Set<string>();
  for (const [, catMap] of tagCategoryMap) {
    for (const catSlug of catMap.keys()) catSlugsUsed.add(catSlug);
  }

  const nodes: GraphNode[] = [];
  const nodeIds = new Set<string>();

  for (const cat of categories) {
    if (!catSlugsUsed.has(cat.slug)) continue;
    const id = `cat:${cat.slug}`;
    nodes.push({
      id,
      label: cat.name,
      type: "category",
      slug: cat.slug,
      weight: (cat.posts_count ?? 0) + (cat.courses_count ?? 0),
      color: getCategoryColor(cat.slug),
      href: cat.type === "course" ? `/series/${cat.slug}/` : `/${cat.slug}/`,
      icon: CATEGORY_ICONS[cat.slug] ?? "code",
    });
    nodeIds.add(id);
  }

  // Only include top tags (by total usage), capped at ~30 to keep graph readable
  const topTags = [...tagTotalCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30);

  const topTagSlugs = new Set(topTags.map(([slug]) => slug));

  // Determine primary category for each tag (most associated)
  for (const [tagSlug, count] of topTags) {
    const catMap = tagCategoryMap.get(tagSlug);
    let primaryCat: string | null = null;
    let maxCount = 0;
    if (catMap) {
      for (const [catSlug, c] of catMap) {
        if (c > maxCount) {
          maxCount = c;
          primaryCat = catSlug;
        }
      }
    }

    // Find the tag name from our data
    const tagData = allPosts.flatMap((p) => p.tags).find((t) => t.slug === tagSlug)
      ?? allSeries.flatMap((s) => s.tags).find((t) => t.slug === tagSlug);

    const id = `tag:${tagSlug}`;
    nodes.push({
      id,
      label: tagData?.name ?? tagSlug,
      type: "tag",
      slug: tagSlug,
      weight: count,
      color: getTagColor(primaryCat),
      href: `/tags/${tagSlug}/`,
      icon: "",
    });
    nodeIds.add(id);
  }

  // Build edges: tag → category connections
  const edges: GraphEdge[] = [];
  const edgeSet = new Set<string>();

  for (const [tagSlug, catMap] of tagCategoryMap) {
    if (!topTagSlugs.has(tagSlug)) continue;
    const tagId = `tag:${tagSlug}`;
    for (const [catSlug, count] of catMap) {
      const catId = `cat:${catSlug}`;
      if (!nodeIds.has(catId)) continue;
      const key = `${tagId}|${catId}`;
      if (edgeSet.has(key)) continue;
      edgeSet.add(key);
      edges.push({ source: tagId, target: catId, weight: count });
    }
  }

  return { nodes, edges };
}
