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
  relativePaths: string[];
  relativePathSet: Set<string>;
};

const collectionIndexCache = new Map<string, CollectionIndex>();

function getCollectionDir(collection: string): string {
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
      relativePaths: [],
      relativePathSet: new Set<string>(),
    };
  }

  const relativePaths = walkDirectoryForMdx(directory).sort();
  const slugToRelativePath = new Map<string, string>();

  for (const relativePath of relativePaths) {
    if (!relativePath.includes("/")) {
      slugToRelativePath.set(relativePath, relativePath);
      continue;
    }

    if (relativePath.endsWith("/index")) {
      const slug = relativePath.slice(0, -"/index".length).split("/").at(-1);
      if (slug) slugToRelativePath.set(slug, relativePath);
    }
  }

  return {
    slugToRelativePath,
    relativePaths,
    relativePathSet: new Set(relativePaths),
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
  const collectionDir = getCollectionDir(collection);
  const relativePath = getCollectionIndex(collection).slugToRelativePath.get(slug);
  if (!relativePath) return null;

  const filePath = path.join(collectionDir, `${relativePath}.md`);
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
  if (!index.relativePathSet.has(relativePath)) return null;

  const filePath = path.join(getCollectionDir(collection), `${relativePath}.md`);
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