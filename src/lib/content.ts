import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const contentRoot = path.join(process.cwd(), "content");
const legacyContentHosts = ["https://x-lms.test", "http://x-lms.test", "https://xdev.asia", "http://xdev.asia"];

type CollectionIndex = {
  slugToRelativePath: Map<string, string>;
  slugToFilePath: Map<string, string>;
  relativePaths: string[];
  relativePathSet: Set<string>;
  relativePathToFilePath: Map<string, string>;
};

const collectionIndexCache = new Map<string, CollectionIndex>();

function getCollectionDir(collection: string): string {
  if (collection === "blog" || collection === "series" || collection === "pages") {
    return path.join(contentRoot, collection);
  }

  for (const localePrefix of ["en", "ja", "zh-tw"]) {
    if (collection === `${localePrefix}/blog`) {
      return path.join(contentRoot, localePrefix, "blog");
    }
    if (collection === `${localePrefix}/series`) {
      return path.join(contentRoot, localePrefix, "series");
    }
    if (collection === `${localePrefix}/pages`) {
      return path.join(contentRoot, localePrefix, "pages");
    }
    if (collection.startsWith(`${localePrefix}/series/`)) {
      const seriesRelativePath = collection.slice(`${localePrefix}/series/`.length);
      return path.join(contentRoot, localePrefix, "series", seriesRelativePath);
    }
  }

  if (collection.startsWith("series/")) {
    return path.join(contentRoot, "series", collection.slice("series/".length));
  }

  return path.join(contentRoot, collection);
}

function walkDirectoryForMdx(rootDir: string, currentDir = rootDir): string[] {
  if (!fs.existsSync(currentDir)) return [];

  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const mdxFiles: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      mdxFiles.push(...walkDirectoryForMdx(rootDir, fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, "/").replace(/\.md$/, "");
      mdxFiles.push(relativePath);
    }
  }

  return mdxFiles;
}

function buildCollectionIndex(collection: string): CollectionIndex {
  const directory = getCollectionDir(collection);
  if (!fs.existsSync(directory)) {
    return {
      slugToRelativePath: new Map<string, string>(),
      slugToFilePath: new Map<string, string>(),
      relativePaths: [],
      relativePathSet: new Set<string>(),
      relativePathToFilePath: new Map<string, string>(),
    };
  }

  const relativePaths = walkDirectoryForMdx(directory).sort();
  const slugToRelativePath = new Map<string, string>();
  const slugToFilePath = new Map<string, string>();
  const relativePathToFilePath = new Map<string, string>();

  for (const relativePath of relativePaths) {
    relativePathToFilePath.set(relativePath, path.join(directory, `${relativePath}.md`));
  }

  for (const relativePath of relativePaths) {
    const filePath = relativePathToFilePath.get(relativePath);
    if (!filePath) continue;

    if (!relativePath.includes("/")) {
      slugToRelativePath.set(relativePath, relativePath);
      slugToFilePath.set(relativePath, filePath);
      continue;
    }

    if (relativePath.endsWith("/index")) {
      const slug = relativePath.slice(0, -"/index".length).split("/").at(-1);
      if (slug) {
        slugToRelativePath.set(slug, relativePath);
        slugToFilePath.set(slug, filePath);
      }
    }
  }

  return {
    slugToRelativePath,
    slugToFilePath,
    relativePaths,
    relativePathSet: new Set(relativePaths),
    relativePathToFilePath,
  };
}

function getCollectionIndex(collection: string): CollectionIndex {
  const cached = collectionIndexCache.get(collection);
  if (cached) return cached;

  const index = buildCollectionIndex(collection);
  collectionIndexCache.set(collection, index);
  return index;
}

export function listMdxSlugs(collection: string): string[] {
  return [...getCollectionIndex(collection).slugToRelativePath.keys()].sort();
}

export function readMdxDocument<T>(collection: string, slug: string): { data: T; content: string } | null {
  const filePath = getCollectionIndex(collection).slugToFilePath.get(slug);
  if (!filePath) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const document = matter(source);
  return {
    data: document.data as T,
    content: document.content,
  };
}

export function listMdxRelativePaths(collection: string): string[] {
  return [...getCollectionIndex(collection).relativePaths];
}

export function readMdxDocumentByRelativePath<T>(collection: string, relativePath: string): { data: T; content: string } | null {
  const index = getCollectionIndex(collection);
  const filePath = index.relativePathToFilePath.get(relativePath);
  if (!filePath) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const document = matter(source);
  return {
    data: document.data as T,
    content: document.content,
  };
}

export function renderMdxBodyToHtml(source: string): string {
  const normalizedSource = source.trim();
  if (!normalizedSource) return "";

  const html = String(
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .processSync(normalizedSource)
  );

  return legacyContentHosts.reduce((result, host) => {
    return result.replaceAll(`${host}/storage/`, "/storage/");
  }, html);
}