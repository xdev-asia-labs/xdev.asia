#!/usr/bin/env node
/**
 * Migrate content from content/posts/ → content/blog/{category}/.
 * Reads category.slug from frontmatter and moves files accordingly.
 * Posts without a category go to content/blog/uncategorized/.
 *
 * Usage: node scripts/migrate-content.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, "..", "content", "posts");
const blogDir = path.join(__dirname, "..", "content", "blog");
const newsDir = path.join(__dirname, "..", "content", "news");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created ${path.relative(process.cwd(), dir)}/`);
  }
}

function main() {
  if (!fs.existsSync(postsDir)) {
    console.log("⚠️  content/posts/ does not exist. Nothing to migrate.");
    return;
  }

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.log("⚠️  No .md files found in content/posts/. Nothing to migrate.");
    return;
  }

  console.log(`🔄 Migrating ${files.length} posts from content/posts/ → content/blog/...\n`);

  ensureDir(blogDir);
  ensureDir(newsDir);

  let moved = 0;
  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);

    // Determine type (blog vs news)
    const type = data.type || "blog";

    if (type === "news") {
      const dest = path.join(newsDir, file);
      fs.copyFileSync(filePath, dest);
      console.log(`  📰 ${file} → content/news/`);
      moved++;
      continue;
    }

    // For blog posts, group by category
    const categorySlug = data.category?.slug || "uncategorized";
    const categoryDir = path.join(blogDir, categorySlug);
    ensureDir(categoryDir);

    const dest = path.join(categoryDir, file);
    fs.copyFileSync(filePath, dest);
    console.log(`  📝 ${file} → content/blog/${categorySlug}/`);
    moved++;
  }

  console.log(`\n✅ Migrated ${moved}/${files.length} files.`);
  console.log(`\n⚠️  Original files in content/posts/ are preserved. You can delete them manually after verifying.`);
}

main();
