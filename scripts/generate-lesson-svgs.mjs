#!/usr/bin/env node
/**
 * Generate inline SVG hero images for lessons that don't have any <img> tag.
 * 
 * Usage:
 *   node scripts/generate-lesson-svgs.mjs           # dry-run (preview count)
 *   node scripts/generate-lesson-svgs.mjs --apply    # inject SVGs into files
 *   node scripts/generate-lesson-svgs.mjs --apply --force  # re-generate all (even if already has <img>)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SERIES_DIR = path.join(ROOT, "content", "series");

const apply = process.argv.includes("--apply");
const force = process.argv.includes("--force");

// ── Category → color theme mapping ──────────────────────────────────
const CATEGORY_THEMES = {
    ai: { bg: "#0f172a", accent: "#38bdf8", icon: "🧠", label: "AI & ML" },
    "luyen-thi": { bg: "#1a1a2e", accent: "#f59e0b", icon: "📝", label: "Luyện thi" },
    architecture: { bg: "#0c1222", accent: "#a78bfa", icon: "🏗️", label: "Kiến trúc" },
    devsecops: { bg: "#0a1628", accent: "#34d399", icon: "🔒", label: "DevSecOps" },
    "lap-trinh": { bg: "#121a2b", accent: "#f472b6", icon: "💻", label: "Lập trình" },
    default: { bg: "#111827", accent: "#60a5fa", icon: "📚", label: "Series" },
};

// ── Deterministic color from string hash ────────────────────────────
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}

// Accent variant colors for visual variety
const ACCENT_VARIANTS = [
    "#38bdf8", "#a78bfa", "#f472b6", "#34d399", "#fbbf24",
    "#fb923c", "#f87171", "#818cf8", "#2dd4bf", "#c084fc"
];

function pickAccent(slug) {
    return ACCENT_VARIANTS[hashCode(slug) % ACCENT_VARIANTS.length];
}

// ── SVG geometric decorations based on slug hash ────────────────────
function generateDecorations(slug, accent) {
    const h = hashCode(slug);
    const decorations = [];

    // Floating circles
    for (let i = 0; i < 5; i++) {
        const cx = 600 + ((h * (i + 1) * 137) % 500);
        const cy = 30 + ((h * (i + 3) * 97) % 260);
        const r = 8 + ((h * (i + 2)) % 30);
        const opacity = 0.05 + ((h * (i + 1)) % 10) / 100;
        decorations.push(
            `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${accent}" opacity="${opacity}"/>`
        );
    }

    // Grid dots pattern
    for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 4; y++) {
            const px = 750 + x * 28;
            const py = 80 + y * 28;
            decorations.push(
                `<circle cx="${px}" cy="${py}" r="1.5" fill="${accent}" opacity="0.15"/>`
            );
        }
    }

    // Diagonal lines
    const lineY = 50 + (h % 200);
    decorations.push(
        `<line x1="600" y1="${lineY}" x2="1100" y2="${lineY + 80}" stroke="${accent}" stroke-width="0.5" opacity="0.1"/>`,
        `<line x1="650" y1="${lineY + 30}" x2="1050" y2="${lineY + 100}" stroke="${accent}" stroke-width="0.5" opacity="0.08"/>`
    );

    // Hexagon shape
    const hx = 900 + (h % 150);
    const hy = 100 + (h % 150);
    const hs = 25 + (h % 20);
    const hexPoints = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        hexPoints.push(`${hx + hs * Math.cos(angle)},${hy + hs * Math.sin(angle)}`);
    }
    decorations.push(
        `<polygon points="${hexPoints.join(" ")}" fill="none" stroke="${accent}" stroke-width="1" opacity="0.12"/>`
    );

    return decorations.join("\n    ");
}

// ── Escape XML special chars ────────────────────────────────────────
function escapeXml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

// ── Word-wrap text for SVG (no <foreignObject>) ─────────────────────
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

// ── Generate SVG ────────────────────────────────────────────────────
function generateSVG({ title, seriesTitle, sectionTitle, category, slug, sortOrder }) {
    const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES.default;
    const accent = pickAccent(slug);
    const decorations = generateDecorations(slug, accent);
    const titleLines = wrapText(title, 42);
    const lessonNum = sortOrder ? `Bài ${sortOrder}` : "";

    const titleTspans = titleLines
        .map((line, i) => {
            const y = titleLines.length === 1 ? 160 : 140 + i * 42;
            return `<tspan x="60" dy="${i === 0 ? 0 : 42}">${escapeXml(line)}</tspan>`;
        })
        .join("\n      ");

    const titleStartY = titleLines.length === 1 ? 160 : 140;

    const seriesY = titleStartY + titleLines.length * 42 + 20;

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-${hashCode(slug) % 9999}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.bg}"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-${hashCode(slug) % 9999})"/>

  <!-- Decorations -->
  <g>
    ${decorations}
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="${accent}"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="${(theme.label.length + 2) * 11}" height="28" rx="14" fill="${accent}" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="${accent}">${theme.icon} ${escapeXml(theme.label)}${lessonNum ? ` — ${escapeXml(lessonNum)}` : ""}</text>

  <!-- Title -->
  <text x="60" y="${titleStartY}" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      ${titleTspans}
  </text>

  <!-- Series subtitle -->
  <text x="60" y="${seriesY}" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">${escapeXml(seriesTitle || "")}</text>

  <!-- Section -->
  ${sectionTitle ? `<text x="60" y="${seriesY + 24}" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">${escapeXml(sectionTitle)}</text>` : ""}

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>`;
}

// ── Parse YAML frontmatter (simple) ─────────────────────────────────
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return { meta: {}, body: content };

    const raw = match[1];
    const body = content.slice(match[0].length);
    const meta = {};

    // Simple YAML parsing for flat + nested fields
    let currentKey = null;
    let currentIndent = 0;
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
                if (val === "" || val === ">-") {
                    // possibly nested or multiline
                } else {
                    meta[currentKey] = val.replace(/^['"]|['"]$/g, "");
                }
            }
        } else if (indent >= 2 && currentKey) {
            if (!nested) nested = {};
            const kv = line.trim().match(/^([a-z_]+):\s*(.*)$/);
            if (kv) {
                nested[kv[1]] = kv[2].replace(/^['"]|['"]$/g, "").trim();
            } else {
                // multiline description continuation
                if (typeof meta[currentKey] === "string") {
                    meta[currentKey] += " " + line.trim();
                } else if (!nested || Object.keys(nested).length === 0) {
                    meta[currentKey] = (meta[currentKey] || "") + " " + line.trim();
                }
            }
        }
    }
    if (nested && currentKey) {
        meta[currentKey] = nested;
    }

    return { meta, body };
}

// ── Detect category from file path ──────────────────────────────────
function detectCategory(filePath) {
    const rel = path.relative(SERIES_DIR, filePath);
    const parts = rel.split(path.sep);
    return parts[0] || "default"; // ai, luyen-thi, architecture, etc.
}

// ── Process all lesson files ────────────────────────────────────────
function findLessonFiles(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findLessonFiles(full));
        } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
            results.push(full);
        }
    }
    return results;
}

// ── Main ────────────────────────────────────────────────────────────
const files = findLessonFiles(SERIES_DIR);
let skipped = 0;
let processed = 0;
let errors = 0;

for (const filePath of files) {
    try {
        const content = fs.readFileSync(filePath, "utf-8");

        // Skip if already has an <img or <svg tag (unless --force)
        if (!force && (/<img\s/i.test(content) || /<svg\s/i.test(content))) {
            skipped++;
            continue;
        }

        const { meta, body } = parseFrontmatter(content);
        const category = detectCategory(filePath);
        const course = typeof meta.course === "object" ? meta.course : {};

        const svg = generateSVG({
            title: meta.title || path.basename(filePath, ".md"),
            seriesTitle: course.title || "",
            sectionTitle: meta.section_title || "",
            category,
            slug: meta.slug || path.basename(filePath, ".md"),
            sortOrder: meta.sort_order || "",
        });

        if (apply) {
            // Insert SVG right after frontmatter (before body content)
            const fmMatch = content.match(/^(---\n[\s\S]*?\n---\n)/);
            if (fmMatch) {
                const newContent = fmMatch[1] + "\n" + svg + "\n" + body.replace(/^\n+/, "\n");
                fs.writeFileSync(filePath, newContent, "utf-8");
            }
        }

        processed++;
    } catch (err) {
        console.error(`Error processing ${filePath}: ${err.message}`);
        errors++;
    }
}

console.log(`\n📊 Results:`);
console.log(`   Total lesson files: ${files.length}`);
console.log(`   Processed (${apply ? "written" : "would write"}): ${processed}`);
console.log(`   Skipped (already has image): ${skipped}`);
console.log(`   Errors: ${errors}`);

if (!apply) {
    console.log(`\n💡 Run with --apply to inject SVGs into files.`);
}
