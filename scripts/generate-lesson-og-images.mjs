#!/usr/bin/env node
/**
 * Generate OG PNG images (1200x630) for each lesson.
 * Re-uses the same design language as generate-lesson-svgs.mjs but renders
 * to 1200x630 PNG via sharp and saves to public/images/og/lessons/<category>/<seriesSlug>/<lessonSlug>.png
 *
 * Usage:
 *   node scripts/generate-lesson-og-images.mjs           # dry-run
 *   node scripts/generate-lesson-og-images.mjs --apply    # generate PNGs
 *   node scripts/generate-lesson-og-images.mjs --apply --force  # regenerate all
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SERIES_DIR = path.join(ROOT, "content", "series");
const OUTPUT_DIR = path.join(ROOT, "public", "images", "og", "lessons");

const apply = process.argv.includes("--apply");
const force = process.argv.includes("--force");

// OG image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// ── Category → color theme mapping ──────────────────────────────────
const CATEGORY_THEMES = {
    ai: { bg: "#0f172a", bg2: "#1e293b", accent: "#38bdf8", icon: "🧠", label: "AI & ML" },
    "luyen-thi": { bg: "#1a1a2e", bg2: "#16213e", accent: "#f59e0b", icon: "📝", label: "Luyện thi" },
    architecture: { bg: "#0c1222", bg2: "#1a1f36", accent: "#a78bfa", icon: "🏗️", label: "Kiến trúc" },
    devsecops: { bg: "#0a1628", bg2: "#132237", accent: "#34d399", icon: "🔒", label: "DevSecOps" },
    "lap-trinh": { bg: "#121a2b", bg2: "#1b2540", accent: "#f472b6", icon: "💻", label: "Lập trình" },
    default: { bg: "#111827", bg2: "#1e293b", accent: "#60a5fa", icon: "📚", label: "Series" },
};

// ── Deterministic hash ──────────────────────────────────────────────
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

const ACCENT_VARIANTS = [
    "#38bdf8", "#a78bfa", "#f472b6", "#34d399", "#fbbf24",
    "#fb923c", "#f87171", "#818cf8", "#2dd4bf", "#c084fc"
];

function pickAccent(slug) {
    return ACCENT_VARIANTS[hashCode(slug) % ACCENT_VARIANTS.length];
}

// ── Escape XML ──────────────────────────────────────────────────────
function escapeXml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

// ── Word-wrap for SVG text ──────────────────────────────────────────
function wrapText(text, maxChars) {
    const words = text.split(/\s+/);
    const lines = [];
    let current = "";
    for (const word of words) {
        if ((current + " " + word).trim().length > maxChars) {
            if (current) lines.push(current.trim());
            current = word;
        } else {
            current = current ? current + " " + word : word;
        }
    }
    if (current) lines.push(current.trim());
    return lines.slice(0, 3); // max 3 lines
}

// ── Geometric decorations ───────────────────────────────────────────
function generateDecorations(slug, accent) {
    const h = hashCode(slug);
    const decs = [];

    // Large decorative circles
    for (let i = 0; i < 6; i++) {
        const cx = 700 + ((h * (i + 1) * 137) % 450);
        const cy = 80 + ((h * (i + 3) * 97) % 450);
        const r = 15 + ((h * (i + 2)) % 60);
        const opacity = 0.04 + ((h * (i + 1)) % 8) / 100;
        decs.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${accent}" opacity="${opacity}"/>`);
    }

    // Grid dots
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 6; y++) {
            decs.push(`<circle cx="${780 + x * 32}" cy="${120 + y * 32}" r="2" fill="${accent}" opacity="0.12"/>`);
        }
    }

    // Diagonal lines
    const lineY = 80 + (h % 350);
    decs.push(
        `<line x1="650" y1="${lineY}" x2="1150" y2="${lineY + 120}" stroke="${accent}" stroke-width="0.8" opacity="0.08"/>`,
        `<line x1="700" y1="${lineY + 50}" x2="1100" y2="${lineY + 150}" stroke="${accent}" stroke-width="0.5" opacity="0.06"/>`
    );

    // Hexagon
    const hx = 950 + (h % 150);
    const hy = 180 + (h % 250);
    const hs = 35 + (h % 25);
    const pts = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        pts.push(`${hx + hs * Math.cos(angle)},${hy + hs * Math.sin(angle)}`);
    }
    decs.push(`<polygon points="${pts.join(" ")}" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.1"/>`);

    // Triangle
    const tx = 800 + (h % 200);
    const ty = 400 + (h % 100);
    const ts = 30 + (h % 20);
    decs.push(`<polygon points="${tx},${ty - ts} ${tx - ts},${ty + ts * 0.6} ${tx + ts},${ty + ts * 0.6}" fill="none" stroke="${accent}" stroke-width="1" opacity="0.08"/>`);

    return decs.join("\n    ");
}

// ── Generate OG SVG (1200x630) ──────────────────────────────────────
function generateOgSvg({ title, seriesTitle, sectionTitle, category, slug, sortOrder }) {
    const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES.default;
    const accent = pickAccent(slug);
    const decorations = generateDecorations(slug, accent);
    const titleLines = wrapText(title, 38);
    const lessonNum = sortOrder ? `Bài ${sortOrder}` : "";

    const titleFontSize = titleLines.length > 2 ? 38 : 44;
    const titleLineHeight = titleLines.length > 2 ? 46 : 54;
    const titleStartY = titleLines.length === 1 ? 280 : titleLines.length === 2 ? 250 : 230;

    const titleTspans = titleLines
        .map((line, i) => `<tspan x="80" dy="${i === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`)
        .join("\n      ");

    const seriesY = titleStartY + titleLines.length * titleLineHeight + 30;

    const gradId = `og-bg-${hashCode(slug) % 9999}`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.bg}"/>
      <stop offset="100%" style="stop-color:${theme.bg2}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#${gradId})"/>

  <!-- Decorations -->
  <g>
    ${decorations}
  </g>

  <!-- Top accent line -->
  <rect x="0" y="0" width="${WIDTH}" height="4" fill="${accent}"/>

  <!-- Left accent bar -->
  <rect x="80" y="100" width="5" height="80" rx="2.5" fill="${accent}"/>

  <!-- Category badge -->
  <rect x="100" y="100" width="${(theme.label.length + 2) * 14 + (lessonNum ? (lessonNum.length + 3) * 10 : 0)}" height="34" rx="17" fill="${accent}" opacity="0.15"/>
  <text x="116" y="123" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="15" font-weight="600" fill="${accent}">${escapeXml(theme.label)}${lessonNum ? ` · ${escapeXml(lessonNum)}` : ""}</text>

  <!-- Title -->
  <text x="80" y="${titleStartY}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="${titleFontSize}" font-weight="700" fill="#f1f5f9">
      ${titleTspans}
  </text>

  <!-- Series subtitle -->
  <text x="80" y="${seriesY}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="18" fill="#94a3b8" opacity="0.9">${escapeXml(seriesTitle || "")}</text>

  <!-- Section -->
  ${sectionTitle ? `<text x="80" y="${seriesY + 28}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="14" fill="#64748b" opacity="0.7">${escapeXml(sectionTitle)}</text>` : ""}

  <!-- Bottom bar -->
  <rect x="0" y="${HEIGHT - 60}" width="${WIDTH}" height="60" fill="${theme.bg}" opacity="0.6"/>
  <text x="80" y="${HEIGHT - 28}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="16" font-weight="600" fill="#94a3b8">xdev.asia</text>
  <text x="1120" y="${HEIGHT - 28}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="13" fill="#475569" text-anchor="end">Học lập trình · AI · Cloud</text>
</svg>`;
}

// ── Parse frontmatter ───────────────────────────────────────────────
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return { meta: {} };

    const raw = match[1];
    const meta = {};
    let currentKey = null;
    let nested = null;

    for (const line of raw.split("\n")) {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1].length : 0;

        if (indent === 0) {
            if (nested && currentKey) {
                meta[currentKey] = nested;
                nested = null;
            }
            const kv = line.match(/^([a-z_]+):\s*(.*)$/);
            if (kv) {
                currentKey = kv[1];
                const val = kv[2].trim();
                if (val !== "" && val !== ">-") {
                    meta[currentKey] = val.replace(/^['"]|['"]$/g, "");
                }
            }
        } else if (indent >= 2 && currentKey) {
            if (!nested) nested = {};
            const kv = line.trim().match(/^([a-z_]+):\s*(.*)$/);
            if (kv) {
                nested[kv[1]] = kv[2].replace(/^['"]|['"]$/g, "").trim();
            } else if (typeof meta[currentKey] === "string") {
                meta[currentKey] += " " + line.trim();
            } else if (!nested || Object.keys(nested).length === 0) {
                meta[currentKey] = (meta[currentKey] || "") + " " + line.trim();
            }
        }
    }
    if (nested && currentKey) meta[currentKey] = nested;
    return { meta };
}

// ── Detect category ─────────────────────────────────────────────────
function detectCategory(filePath) {
    const rel = path.relative(SERIES_DIR, filePath);
    return rel.split(path.sep)[0] || "default";
}

// ── Find lesson files ───────────────────────────────────────────────
function findLessonFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) results.push(...findLessonFiles(full));
        else if (entry.name.endsWith(".md") && entry.name !== "index.md") results.push(full);
    }
    return results;
}

// ── Detect series slug from path ────────────────────────────────────
function detectSeriesSlug(filePath) {
    // Path: content/series/<category>/<seriesSlug>/lessons/<file>.md
    const rel = path.relative(SERIES_DIR, filePath);
    const parts = rel.split(path.sep);
    return parts[1] || "unknown";
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
    const files = findLessonFiles(SERIES_DIR);
    let processed = 0;
    let skipped = 0;
    let errors = 0;

    console.log(`Found ${files.length} lesson files`);
    if (!apply) console.log("DRY-RUN mode. Use --apply to generate PNGs.\n");

    for (const filePath of files) {
        try {
            const content = fs.readFileSync(filePath, "utf-8");
            const { meta } = parseFrontmatter(content);

            const category = detectCategory(filePath);
            const seriesSlug = detectSeriesSlug(filePath);
            // Use slug from frontmatter (matches URL) not filename
            const lessonSlug = meta.slug || path.basename(filePath, ".md");

            const outDir = path.join(OUTPUT_DIR, category, seriesSlug);
            const outFile = path.join(outDir, `${lessonSlug}.png`);

            // Skip if file exists (unless --force)
            if (!force && fs.existsSync(outFile)) {
                skipped++;
                continue;
            }
            const course = typeof meta.course === "object" ? meta.course : {};

            const svg = generateOgSvg({
                title: meta.title || lessonSlug,
                seriesTitle: course.title || "",
                sectionTitle: meta.section_title || "",
                category,
                slug: meta.slug || lessonSlug,
                sortOrder: meta.sort_order || "",
            });

            if (apply) {
                fs.mkdirSync(outDir, { recursive: true });
                await sharp(Buffer.from(svg))
                    .resize(WIDTH, HEIGHT)
                    .png({ quality: 85, compressionLevel: 9 })
                    .toFile(outFile);
            }

            processed++;
            if (processed % 100 === 0) console.log(`  ... ${processed} processed`);
        } catch (err) {
            console.error(`Error: ${filePath}: ${err.message}`);
            errors++;
        }
    }

    console.log(`\n📊 Results:`);
    console.log(`   Total: ${files.length}`);
    console.log(`   ${apply ? "Generated" : "Would generate"}: ${processed}`);
    console.log(`   Skipped (exists): ${skipped}`);
    console.log(`   Errors: ${errors}`);

    if (apply && processed > 0) {
        // Calculate total size
        let totalBytes = 0;
        const countFiles = (dir) => {
            if (!fs.existsSync(dir)) return;
            for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
                const p = path.join(dir, entry.name);
                if (entry.isDirectory()) countFiles(p);
                else totalBytes += fs.statSync(p).size;
            }
        };
        countFiles(OUTPUT_DIR);
        console.log(`   Total size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
    }
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
