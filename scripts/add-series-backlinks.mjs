#!/usr/bin/env node

/**
 * add-series-backlinks.mjs
 *
 * Quét tất cả lesson trong một series, tự động gắn (hoặc cập nhật)
 * navigation "Bài trước / Bài tiếp theo" với proper markdown links.
 *
 * Usage:
 *   node scripts/add-series-backlinks.mjs <series-slug>
 *   node scripts/add-series-backlinks.mjs bao-mat-du-lieu-y-te-cho-microservices
 *   node scripts/add-series-backlinks.mjs --all          # chạy cho tất cả series
 *   node scripts/add-series-backlinks.mjs --dry-run <series-slug>  # preview, không ghi file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'series');

// ── Config ──────────────────────────────────────────────
const NAV_START_MARKER = '<!-- SERIES-NAV:START -->';
const NAV_END_MARKER = '<!-- SERIES-NAV:END -->';

// Regex patterns for old-style "Bài tiếp theo" lines to strip
const OLD_NAV_PATTERNS = [
    // > **Bài tiếp theo**: Bài X - ...
    /^>\s*\*\*Bài tiếp theo\*\*\s*[:：].*$/gm,
    // ### Bài tiếp theo\n\n...paragraph...
    /^#{2,4}\s*Bài tiếp theo\s*\n+((?:(?!^#).*\n)*)/gm,
    // <p>Bài tiếp theo: <strong>...</strong>...</p>
    /^<p>Bài tiếp theo\s*[:：]\s*<strong>.*?<\/strong>.*?<\/p>\s*$/gm,
    // Bài tiếp theo: **Tên bài**... (plain text with bold)
    /^Bài tiếp theo\s*[:：]\s*\*\*.*?\*\*.*$/gm,
    // **Bài tiếp theo:** [link](url) at line start
    /^\*\*Bài tiếp theo\s*[:：]?\*\*\s*\[.*?\]\(.*?\).*$/gm,
];

// ── Helpers ─────────────────────────────────────────────

/** Parse YAML frontmatter (simple parser — handles only what we need) */
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};

    const yaml = match[1];
    const meta = {};

    // Extract simple scalar fields
    for (const [, key, val] of yaml.matchAll(/^(\w[\w_]*):\s*['"]?(.*?)['"]?\s*$/gm)) {
        meta[key] = val;
    }

    // sort_order
    const sortMatch = yaml.match(/^sort_order:\s*(\d+)/m);
    if (sortMatch) meta.sort_order = parseInt(sortMatch[1], 10);

    // title (may span continuation lines with >-)
    const titleMatch = yaml.match(/^title:\s*['"]?(.*?)['"]?\s*$/m);
    if (titleMatch) meta.title = titleMatch[1].replace(/^['"]|['"]$/g, '');

    // slug
    const slugMatch = yaml.match(/^slug:\s*(.+)$/m);
    if (slugMatch) meta.slug = slugMatch[1].trim();

    // section_title
    const sectionMatch = yaml.match(/^section_title:\s*['"]?(.*?)['"]?\s*$/m);
    if (sectionMatch) meta.section_title = sectionMatch[1].replace(/^['"]|['"]$/g, '');

    return meta;
}

/** Recursively find all .md files (excluding index.md) */
function findLessonFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findLessonFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
            results.push(fullPath);
        }
    }
    return results;
}

/** Find all series directories (each contains an index.md) */
function findAllSeries() {
    const series = [];
    function walk(dir, depth = 0) {
        if (depth > 3) return; // don't go too deep
        if (!fs.existsSync(dir)) return;
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (fs.existsSync(path.join(fullPath, 'index.md'))) {
                    series.push(fullPath);
                }
                walk(fullPath, depth + 1);
            }
        }
    }
    walk(CONTENT_DIR);
    return series;
}

/** Remove old navigation patterns from content */
function stripOldNavigation(content) {
    let cleaned = content;

    // 1. Remove marked navigation block (if previously inserted by this script)
    const markerRegex = new RegExp(
        `\\n*${escapeRegex(NAV_START_MARKER)}[\\s\\S]*?${escapeRegex(NAV_END_MARKER)}\\s*$`
    );
    cleaned = cleaned.replace(markerRegex, '');

    // 2. Remove old-style "Bài tiếp theo" patterns
    for (const pattern of OLD_NAV_PATTERNS) {
        cleaned = cleaned.replace(pattern, '');
    }

    // 3. Remove trailing consecutive --- separators (leftover from old nav)
    cleaned = cleaned.replace(/(\n---\s*){2,}$/g, '\n');

    // 4. Clean trailing whitespace/newlines
    cleaned = cleaned.replace(/\n{3,}$/g, '\n');

    return cleaned;
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Build navigation markdown block */
function buildNavBlock(prev, next, seriesSlug) {
    const lines = [];
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(NAV_START_MARKER);

    if (prev && next) {
        // Both prev and next
        lines.push(`| ◀ Bài trước | Bài tiếp theo ▶ |`);
        lines.push(`|:---|---:|`);
        lines.push(`| [${prev.title}](/series/${seriesSlug}/${prev.slug}) | [${next.title}](/series/${seriesSlug}/${next.slug}) |`);
    } else if (next) {
        // First lesson — only next
        lines.push(`**Bài tiếp theo:** [${next.title}](/series/${seriesSlug}/${next.slug}) ▶`);
    } else if (prev) {
        // Last lesson — only prev
        lines.push(`◀ **Bài trước:** [${prev.title}](/series/${seriesSlug}/${prev.slug})`);
        lines.push('');
        lines.push(`🎉 **Chúc mừng!** Bạn đã hoàn thành series. Hãy quay lại [trang tổng quan](/series/${seriesSlug}) để ôn tập.`);
    }

    lines.push(NAV_END_MARKER);
    lines.push('');

    return lines.join('\n');
}

// ── Main ────────────────────────────────────────────────

function processSeries(seriesDir, dryRun = false) {
    const indexPath = path.join(seriesDir, 'index.md');
    if (!fs.existsSync(indexPath)) {
        console.error(`  ✗ index.md not found in ${seriesDir}`);
        return { updated: 0, skipped: 0 };
    }

    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const indexMeta = parseFrontmatter(indexContent);
    const seriesSlug = indexMeta.slug;

    if (!seriesSlug) {
        console.error(`  ✗ Could not parse slug from index.md`);
        return { updated: 0, skipped: 0 };
    }

    console.log(`\n📚 Series: ${indexMeta.title || seriesSlug}`);
    console.log(`   Slug:   ${seriesSlug}`);

    // Find & parse all lesson files
    const chaptersDir = path.join(seriesDir, 'chapters');
    const lessonFiles = findLessonFiles(chaptersDir);

    const lessons = lessonFiles
        .map(filePath => {
            const content = fs.readFileSync(filePath, 'utf-8');
            const meta = parseFrontmatter(content);
            return { filePath, content, meta };
        })
        .filter(l => l.meta.sort_order !== undefined)
        .sort((a, b) => a.meta.sort_order - b.meta.sort_order);

    console.log(`   Lessons: ${lessons.length}`);

    let updated = 0;
    let skipped = 0;

    for (let i = 0; i < lessons.length; i++) {
        const lesson = lessons[i];
        const prev = i > 0 ? lessons[i - 1].meta : null;
        const next = i < lessons.length - 1 ? lessons[i + 1].meta : null;

        // Strip old navigation
        let cleaned = stripOldNavigation(lesson.content);

        // Ensure file ends with single newline before nav block
        cleaned = cleaned.trimEnd() + '\n';

        // Build and append new navigation
        const navBlock = buildNavBlock(prev, next, seriesSlug);
        const newContent = cleaned + navBlock;

        // Check if content actually changed
        if (newContent === lesson.content) {
            skipped++;
            continue;
        }

        const relPath = path.relative(ROOT, lesson.filePath);

        if (dryRun) {
            console.log(`   🔍 [dry-run] Would update: ${relPath}`);
            console.log(`      Nav: ${prev ? '◀ ' + prev.sort_order : '  '} ← [${lesson.meta.sort_order}] → ${next ? next.sort_order + ' ▶' : '  '}`);
        } else {
            fs.writeFileSync(lesson.filePath, newContent, 'utf-8');
            console.log(`   ✅ Updated: ${relPath}`);
        }
        updated++;
    }

    return { updated, skipped };
}

// ── CLI ─────────────────────────────────────────────────

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const filteredArgs = args.filter(a => a !== '--dry-run');

if (filteredArgs.length === 0) {
    console.log(`
Usage:
  node scripts/add-series-backlinks.mjs <series-slug>
  node scripts/add-series-backlinks.mjs --all
  node scripts/add-series-backlinks.mjs --dry-run <series-slug>

Examples:
  node scripts/add-series-backlinks.mjs bao-mat-du-lieu-y-te-cho-microservices
  node scripts/add-series-backlinks.mjs --dry-run --all
`);
    process.exit(0);
}

const isAll = filteredArgs.includes('--all');

if (dryRun) {
    console.log('🔍 DRY RUN mode — no files will be modified\n');
}

let totalUpdated = 0;
let totalSkipped = 0;

if (isAll) {
    const allSeries = findAllSeries();
    console.log(`Found ${allSeries.length} series\n`);
    for (const seriesDir of allSeries) {
        const { updated, skipped } = processSeries(seriesDir, dryRun);
        totalUpdated += updated;
        totalSkipped += skipped;
    }
} else {
    // Find series by slug
    const slug = filteredArgs[0];
    const allSeries = findAllSeries();
    const target = allSeries.find(dir => {
        const indexPath = path.join(dir, 'index.md');
        if (!fs.existsSync(indexPath)) return false;
        const content = fs.readFileSync(indexPath, 'utf-8');
        return content.includes(`slug: ${slug}`);
    });

    if (!target) {
        console.error(`✗ Series not found: ${slug}`);
        console.log(`\nAvailable series:`);
        for (const dir of allSeries) {
            const indexContent = fs.readFileSync(path.join(dir, 'index.md'), 'utf-8');
            const meta = parseFrontmatter(indexContent);
            console.log(`  - ${meta.slug || path.basename(dir)}`);
        }
        process.exit(1);
    }

    const { updated, skipped } = processSeries(target, dryRun);
    totalUpdated += updated;
    totalSkipped += skipped;
}

console.log(`\n── Summary ────────────────────────────`);
console.log(`   Updated: ${totalUpdated}`);
console.log(`   Skipped: ${totalSkipped} (no changes needed)`);
console.log(`   Mode:    ${dryRun ? 'DRY RUN' : 'APPLIED'}`);
