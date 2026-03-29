#!/usr/bin/env node
/**
 * Fetch GitHub repo data at build time.
 * Stores result in data/github-repos.json for use by showcase-data.ts.
 *
 * Usage: node scripts/fetch-github.mjs
 * Env (optional): GITHUB_TOKEN for higher rate limits (5000/hr vs 60/hr)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "data", "github-repos.json");

const REPOS = [
  { slug: "xclaw", repo: "tdduydev/xclaw" },
  { slug: "x-postgres-backup", repo: "tdduydev/x-postgres-backup" },
  { slug: "xdev-asia", repo: "tdduydev/xdev.asia" },
  { slug: "autox", repo: "tdduydev/autox" },
  { slug: "x-lms", repo: "tdduydev/x-lms" },
];

const LANGUAGE_COLORS = {
  Swift: "#F05138",
  Python: "#3572A5",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  PHP: "#4F5D95",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#701516",
  "C#": "#178600",
  "C++": "#F34B7D",
  C: "#555555",
  Shell: "#89E051",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

async function fetchRepo(owner_repo) {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "xdev-asia-builder",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const url = `https://api.github.com/repos/${owner_repo}`;
  const res = await fetch(url, { headers });

  if (!res.ok) {
    console.warn(`⚠️  Failed to fetch ${owner_repo}: ${res.status} ${res.statusText}`);
    return null;
  }

  const data = await res.json();
  return {
    description: data.description || "",
    stars: data.stargazers_count || 0,
    forks: data.forks_count || 0,
    language: data.language || "",
    languageColor: LANGUAGE_COLORS[data.language] || "#333333",
    topics: data.topics || [],
    homepage: data.homepage || "",
    archived: data.archived || false,
    default_branch: data.default_branch || "main",
    html_url: data.html_url || "",
    updated_at: data.updated_at || "",
  };
}

async function main() {
  console.log("🔄 Fetching GitHub repo data...");

  // Load existing data as fallback
  let existing = {};
  if (fs.existsSync(outputPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    } catch {
      // ignore parse errors
    }
  }

  const result = { ...existing };

  for (const { slug, repo } of REPOS) {
    try {
      const data = await fetchRepo(repo);
      if (data) {
        result[slug] = {
          ...data,
          fetched_at: new Date().toISOString(),
        };
        console.log(`  ✅ ${repo} → ⭐${data.stars} 🍴${data.forks} (${data.language})`);
      } else {
        console.log(`  ⚠️  ${repo} — using cached data`);
      }
    } catch (err) {
      console.warn(`  ❌ ${repo} — error: ${err.message}`);
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), "utf-8");
  console.log(`\n✅ Saved to ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((err) => {
  console.error("❌ Fatal error:", err);
  process.exit(1);
});
