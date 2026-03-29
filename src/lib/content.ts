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

export function listMdxSlugs(collection: string): string[] {
  const directory = getCollectionDir(collection);
  if (!fs.existsSync(directory)) return [];

  const slugs = new Set<string>();
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      slugs.add(entry.name.replace(/\.md$/, ""));
      continue;
    }

    if (entry.isDirectory()) {
      const indexPath = path.join(directory, entry.name, "index.md");
      if (fs.existsSync(indexPath)) {
        slugs.add(entry.name);
      }
    }
  }

  return [...slugs].sort();
}

export function readMdxDocument<T>(collection: string, slug: string): { data: T; content: string } | null {
  const collectionDir = getCollectionDir(collection);
  const directPath = path.join(collectionDir, `${slug}.md`);
  const indexPath = path.join(collectionDir, slug, "index.md");
  const filePath = fs.existsSync(directPath) ? directPath : indexPath;
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const document = matter(source);
  return {
    data: document.data as T,
    content: document.content,
  };
}

export function listMdxRelativePaths(collection: string): string[] {
  const directory = getCollectionDir(collection);
  if (!fs.existsSync(directory)) return [];
  return walkDirectoryForMdx(directory).sort();
}

export function readMdxDocumentByRelativePath<T>(collection: string, relativePath: string): { data: T; content: string } | null {
  const filePath = path.join(getCollectionDir(collection), `${relativePath}.md`);
  if (!fs.existsSync(filePath)) return null;

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