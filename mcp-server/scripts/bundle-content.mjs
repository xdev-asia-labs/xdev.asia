#!/usr/bin/env node

/**
 * Bundle content/ and data/ from parent repo into mcp-server/
 * for npm publishing. Content is copied alongside dist/.
 */

import { cpSync, rmSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const REPO_ROOT = resolve(ROOT, "..");

const targets = [
  { src: resolve(REPO_ROOT, "content"), dest: resolve(ROOT, "content") },
  { src: resolve(REPO_ROOT, "data"), dest: resolve(ROOT, "data") },
];

for (const { src, dest } of targets) {
  if (!existsSync(src)) {
    console.error(`❌ Source not found: ${src}`);
    process.exit(1);
  }

  // Clean previous copy
  if (existsSync(dest)) {
    rmSync(dest, { recursive: true });
  }

  cpSync(src, dest, { recursive: true });
  console.log(`✅ Copied ${src} → ${dest}`);
}

console.log("📦 Content bundled for publishing");
