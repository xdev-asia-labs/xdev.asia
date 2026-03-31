#!/usr/bin/env node
/**
 * Auto-generates SVG→PNG diagrams for ALL architecture series lessons.
 * Reads lesson titles, selects diagram template, generates relevant diagrams.
 * Usage: node scripts/generate-architecture-series-diagrams.mjs [series-slug]
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "public", "storage", "uploads", "2026", "03");
const CONTENT_DIR = path.join(ROOT, "content", "series", "architecture");

// ─── Color palette ───
const C = {
  dark: "#1A1B2E",
  navy: "#1B365D",
  blue: "#2E86AB",
  teal: "#0E9AA7",
  green: "#3DA35D",
  orange: "#F18F01",
  red: "#E63946",
  purple: "#7C3AED",
  pink: "#EC4899",
  cyan: "#06B6D4",
  amber: "#F59E0B",
  lime: "#84CC16",
  white: "#FFFFFF",
  gray: "#94A3B8",
  lightBg: "rgba(255,255,255,0.08)",
};

const PALETTES = [
  [C.blue, C.teal, C.green, C.orange, C.purple, C.pink, C.cyan, C.amber],
  [C.teal, C.orange, C.blue, C.pink, C.green, C.purple, C.red, C.cyan],
  [C.purple, C.blue, C.teal, C.orange, C.green, C.pink, C.amber, C.red],
  [C.orange, C.green, C.blue, C.purple, C.teal, C.red, C.cyan, C.pink],
  [C.green, C.blue, C.orange, C.teal, C.purple, C.pink, C.amber, C.cyan],
];

// ─── Series configs ───
const SERIES = {
  "kien-truc-data-platform-analytics": {
    prefix: "dp",
    gradient: ["#1E3A5F", "#4FC3F7"],
    seriesLabel: "Data Platform & Analytics",
  },
  "kien-truc-edtech-lms-platform": {
    prefix: "edtech",
    gradient: ["#1A237E", "#7C4DFF"],
    seriesLabel: "EdTech & LMS Platform",
  },
  "kien-truc-event-driven-microservices-chuyen-sau": {
    prefix: "edm",
    gradient: ["#1B5E20", "#66BB6A"],
    seriesLabel: "Event-Driven Microservices",
  },
  "kien-truc-fintech-payment-platform": {
    prefix: "fintech",
    gradient: ["#0D47A1", "#42A5F5"],
    seriesLabel: "FinTech & Payment Platform",
  },
  "kien-truc-multi-tenant-saas-platform": {
    prefix: "saas",
    gradient: ["#4A148C", "#CE93D8"],
    seriesLabel: "Multi-tenant SaaS Platform",
  },
  "kien-truc-platform-engineering-internal-developer-portal": {
    prefix: "pe",
    gradient: ["#263238", "#78909C"],
    seriesLabel: "Platform Engineering & IDP",
  },
  "kien-truc-real-time-iot-platform": {
    prefix: "iot",
    gradient: ["#BF360C", "#FF7043"],
    seriesLabel: "Real-time & IoT Platform",
  },
  "cloud-native-microservices-architecture": {
    prefix: "cn",
    gradient: ["#0D1B2A", "#1B98E0"],
    seriesLabel: "Cloud Native Microservices",
  },
};

// ═══════════════════════════════════════════
// SVG HELPERS
// ═══════════════════════════════════════════
function esc(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function rect(x, y, w, h, r, fill, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" opacity="${opacity}" />`;
}

function txt(x, y, content, opts = {}) {
  const { size = 16, fill = C.white, anchor = "middle", weight = "600", opacity = 1 } = opts;
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="system-ui,-apple-system,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" opacity="${opacity}">${esc(content)}</text>`;
}

function arrow(x1, y1, x2, y2, color = C.white, op = 0.6) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="2" opacity="${op}" marker-end="url(#ah)" />`;
}

function box(x, y, w, h, label, color, textSize = 14) {
  const lines = label.includes("\n") ? label.split("\n") : [label];
  const textY = lines.length === 1 ? y + h / 2 + 5 : y + h / 2 - 4;
  return `
    ${rect(x, y, w, h, 10, color, 0.9)}
    ${lines.map((l, i) => txt(x + w / 2, textY + i * 18, l, { size: textSize, weight: i === 0 ? "700" : "500" })).join("")}
  `;
}

function wrapSVG(content, title, subtitle, gradient) {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradient[0]}" />
      <stop offset="100%" style="stop-color:${gradient[1]}" />
    </linearGradient>
    <marker id="ah" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0,10 3.5,0 7" fill="${C.white}" opacity="0.7" />
    </marker>
    <filter id="sh"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-opacity="0.2"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" />
  <g opacity="0.04">
    ${Array.from({ length: 13 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="white" stroke-width="1"/>`).join("")}
    ${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="1200" y2="${i * 100}" stroke="white" stroke-width="1"/>`).join("")}
  </g>
  <circle cx="1100" cy="80" r="120" fill="white" opacity="0.03" />
  <circle cx="100" cy="550" r="150" fill="white" opacity="0.03" />
  ${rect(40, 20, 1120, 52, 12, "white", 0.08)}
  ${txt(600, 52, title, { size: 20, weight: "800", opacity: 0.95 })}
  ${subtitle ? txt(600, 610, subtitle, { size: 13, opacity: 0.35 }) : ""}
  ${content}
</svg>`;
}

// ═══════════════════════════════════════════
// DIAGRAM TEMPLATES
// ═══════════════════════════════════════════

/** Hub-and-spoke: central node + surrounding nodes */
function hubDiagram(center, nodes, palette) {
  const cx = 600, cy = 310;
  let svg = "";
  // Center box
  svg += rect(cx - 130, cy - 40, 260, 80, 16, palette[0], 0.95);
  svg += txt(cx, cy + 8, center, { size: 22, weight: "800" });

  const positions = [
    [140, 140], [500, 120], [860, 140], [140, 460], [500, 490], [860, 460],
    [60, 300], [1000, 300],
  ];
  const usedNodes = nodes.slice(0, Math.min(nodes.length, 8));
  usedNodes.forEach((node, i) => {
    const [px, py] = positions[i % positions.length];
    const color = palette[(i + 1) % palette.length];
    svg += box(px, py, 200, 52, node, color);
    // Arrow to center
    const ax = px + 100 < cx ? px + 200 : px;
    const ay = py + 26;
    const bx = cx + (ax < cx ? -130 : 130);
    const by = cy;
    svg += arrow(ax, ay, bx, by, C.white, 0.4);
  });
  return svg;
}

/** Pipeline flow: sequential steps with arrows */
function flowDiagram(steps, palette) {
  let svg = "";
  const count = Math.min(steps.length, 8);

  if (count <= 4) {
    // Single row
    const w = 220, gap = 30;
    const totalW = count * w + (count - 1) * gap;
    const startX = (1200 - totalW) / 2;
    const y = 270;
    steps.slice(0, count).forEach((step, i) => {
      const x = startX + i * (w + gap);
      svg += box(x, y, w, 80, step, palette[i % palette.length]);
      if (i < count - 1) svg += arrow(x + w, y + 40, x + w + gap, y + 40);
    });
  } else {
    // Two rows: zigzag
    const w = 200, gap = 20;
    const topCount = Math.ceil(count / 2);
    const botCount = count - topCount;

    // Top row L→R
    const topTotalW = topCount * w + (topCount - 1) * gap;
    const topStartX = (1200 - topTotalW) / 2;
    const topY = 180;
    steps.slice(0, topCount).forEach((step, i) => {
      const x = topStartX + i * (w + gap);
      svg += box(x, topY, w, 70, step, palette[i % palette.length], 13);
      if (i < topCount - 1) svg += arrow(x + w, topY + 35, x + w + gap, topY + 35);
    });

    // Connector down
    const lastTopX = topStartX + (topCount - 1) * (w + gap) + w / 2;
    svg += arrow(lastTopX, topY + 70, lastTopX, topY + 120);

    // Bottom row R→L
    const botTotalW = botCount * w + (botCount - 1) * gap;
    const botStartX = (1200 - botTotalW) / 2;
    const botY = topY + 150;
    const botSteps = steps.slice(topCount, topCount + botCount).reverse();
    botSteps.forEach((step, i) => {
      const ri = botCount - 1 - i;
      const x = botStartX + ri * (w + gap);
      svg += box(x, botY, w, 70, step, palette[(topCount + i) % palette.length], 13);
      if (i < botCount - 1) {
        const nx = botStartX + (botCount - 2 - i) * (w + gap) + w;
        svg += arrow(x, botY + 35, nx, botY + 35);
      }
    });
  }
  return svg;
}

/** Layer stack: horizontal stacked layers */
function layersDiagram(layers, palette) {
  let svg = "";
  const count = Math.min(layers.length, 6);
  const w = 800, h = 60, gap = 12;
  const totalH = count * h + (count - 1) * gap;
  const startY = (630 - totalH) / 2 + 20;
  const startX = (1200 - w) / 2;

  layers.slice(0, count).forEach((layer, i) => {
    const y = startY + i * (h + gap);
    const color = palette[i % palette.length];
    svg += rect(startX, y, w, h, 12, color, 0.85);
    svg += txt(startX + w / 2, y + h / 2 + 6, layer, { size: 18, weight: "700" });
  });
  return svg;
}

/** Grid: 2x3 or 3x3 grid of component boxes */
function gridDiagram(items, palette) {
  let svg = "";
  const count = Math.min(items.length, 9);
  const cols = count <= 4 ? 2 : 3;
  const rows = Math.ceil(count / cols);
  const w = cols === 2 ? 340 : 240;
  const h = 80;
  const gapX = 40, gapY = 24;
  const totalW = cols * w + (cols - 1) * gapX;
  const totalH = rows * h + (rows - 1) * gapY;
  const startX = (1200 - totalW) / 2;
  const startY = (630 - totalH) / 2 + 20;

  items.slice(0, count).forEach((item, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = startX + col * (w + gapX);
    const y = startY + row * (h + gapY);
    const color = palette[i % palette.length];
    svg += box(x, y, w, h, item, color);
  });
  return svg;
}

/** Dashboard mockup: metrics cards + chart area */
function dashboardDiagram(title, metrics, palette) {
  let svg = "";
  // Metrics row
  const mCount = Math.min(metrics.length, 4);
  const mw = 200, mh = 90, mg = 30;
  const mTotalW = mCount * mw + (mCount - 1) * mg;
  const mStartX = (1200 - mTotalW) / 2;
  const mY = 120;

  metrics.slice(0, mCount).forEach((m, i) => {
    const x = mStartX + i * (mw + mg);
    svg += rect(x, mY, mw, mh, 12, "white", 0.08);
    svg += rect(x, mY, mw, mh, 12, palette[i % palette.length], 0.15);
    svg += txt(x + mw / 2, mY + 40, m.value || "━━", { size: 28, weight: "800", fill: palette[i % palette.length] });
    svg += txt(x + mw / 2, mY + 70, m.label, { size: 13, opacity: 0.7 });
  });

  // Chart area
  const chartY = mY + mh + 40;
  const chartW = 520, chartH = 280;

  // Left chart
  svg += rect(100, chartY, chartW, chartH, 12, "white", 0.06);
  svg += txt(100 + chartW / 2, chartY + 30, "Timeline", { size: 14, opacity: 0.6 });
  // Bar chart mockup
  const bars = [60, 85, 45, 95, 70, 55, 80, 90, 65, 75];
  bars.forEach((h, i) => {
    const bx = 140 + i * 45;
    const by = chartY + chartH - 40 - h * 2;
    svg += rect(bx, by, 30, h * 2, 4, palette[i % palette.length], 0.7);
  });

  // Right chart
  svg += rect(660, chartY, chartW, chartH, 12, "white", 0.06);
  svg += txt(660 + chartW / 2, chartY + 30, "Distribution", { size: 14, opacity: 0.6 });
  // Horizontal bars
  const labels = ["Category A", "Category B", "Category C", "Category D", "Category E"];
  labels.forEach((l, i) => {
    const by = chartY + 60 + i * 46;
    const bw = 100 + Math.random() * 300;
    svg += txt(700, by + 14, l, { size: 12, anchor: "start", opacity: 0.6 });
    svg += rect(700, by + 22, bw, 16, 4, palette[i % palette.length], 0.7);
  });

  return svg;
}

/** Two-panel comparison */
function compareDiagram(leftTitle, leftItems, rightTitle, rightItems, palette) {
  let svg = "";
  const pw = 480, ph = 400, gap = 40;
  const startX = (1200 - pw * 2 - gap) / 2;
  const startY = 130;

  // Left panel
  svg += rect(startX, startY, pw, ph, 16, "white", 0.06);
  svg += rect(startX, startY, pw, 50, 16, palette[0], 0.3);
  svg += txt(startX + pw / 2, startY + 32, leftTitle, { size: 18, weight: "700" });
  leftItems.slice(0, 6).forEach((item, i) => {
    svg += rect(startX + 20, startY + 70 + i * 52, pw - 40, 42, 8, palette[(i + 1) % palette.length], 0.7);
    svg += txt(startX + pw / 2, startY + 96 + i * 52, item, { size: 14, weight: "600" });
  });

  // Right panel
  const rx = startX + pw + gap;
  svg += rect(rx, startY, pw, ph, 16, "white", 0.06);
  svg += rect(rx, startY, pw, 50, 16, palette[2], 0.3);
  svg += txt(rx + pw / 2, startY + 32, rightTitle, { size: 18, weight: "700" });
  rightItems.slice(0, 6).forEach((item, i) => {
    svg += rect(rx + 20, startY + 70 + i * 52, pw - 40, 42, 8, palette[(i + 3) % palette.length], 0.7);
    svg += txt(rx + pw / 2, startY + 96 + i * 52, item, { size: 14, weight: "600" });
  });

  // VS circle
  const vsX = startX + pw + gap / 2;
  svg += `<circle cx="${vsX}" cy="${startY + ph / 2}" r="24" fill="${C.dark}" opacity="0.9" />`;
  svg += txt(vsX, startY + ph / 2 + 6, "VS", { size: 14, weight: "800" });

  return svg;
}

// ═══════════════════════════════════════════
// SMART TITLE PARSER & DIAGRAM SELECTOR
// ═══════════════════════════════════════════

function parseTitle(fullTitle, description = "") {
  // Remove "Bài N:" prefix
  const cleaned = fullTitle.replace(/^Bài\s+\d+:\s*/, "");
  // Split by " - " (with spaces) into topic and detail, NOT bare "-"
  const parts = cleaned.split(/ - /);
  const topic = parts[0].trim();
  const detail = parts.length > 1 ? parts.slice(1).join(" - ").trim() : "";
  // Extract keywords from detail (split by , & và)
  let keywords = detail
    ? detail.split(/[,&]|\bvà\b|\bvới\b/i).map((s) => s.trim()).filter((s) => s.length > 1)
    : [];
  // If too few keywords, also extract from description
  if (keywords.length < 3 && description) {
    const descTerms = description
      .replace(/^.{0,50}(toàn diện|chi tiết|hướng dẫn|bao gồm|từ|bài này)[^.]*\.?/i, "")
      .split(/[,.]|\bvà\b/i)
      .map((s) => s.trim())
      .filter((s) => s.length > 3 && s.length < 40);
    keywords = [...keywords, ...descTerms].slice(0, 8);
  }
  return { topic, detail, keywords, full: cleaned };
}

function selectDiagramType(title) {
  const t = title.toLowerCase();
  if (/case stud|ví dụ|thực tế/.test(t)) return "grid";
  if (/tổng quan|overview|ecosystem|là gì|why.*what|domain analysis|business model/.test(t)) return "hub";
  if (/pipeline|processing|flow|ingestion|etl|elt|lifecycle|migration|onboarding|luồng|quy trình|luong/.test(t)) return "flow";
  if (/architecture.*overview|layers|stack|deep dive|platform architecture|tầng/.test(t)) return "layers";
  if (/monitoring|dashboard|analytics|observability|metrics|reporting|visualization/.test(t)) return "dashboard";
  if (/pattern|strategies|trade-off|so sánh|vs|alternatives|comparison/.test(t)) return "compare";
  if (/security|compliance|governance|access control|privacy|pci|aml|kyc/.test(t)) return "grid";
  if (/engine|system|management|framework|catalog|store/.test(t)) return "hub";
  if (/infrastructure|deployment|scaling|performance|scalability/.test(t)) return "layers";
  if (/integration|communication|protocol|api/.test(t)) return "flow";
  return "grid";
}

function generateDiagramContent(parsed, diagramType, palette) {
  const { topic, keywords, full } = parsed;
  const allTerms = [topic, ...keywords].filter(Boolean);

  switch (diagramType) {
    case "hub": {
      // For hub, use topic as center. Spokes are keywords (not including topic).
      const hubNodes = keywords.length >= 3
        ? keywords.filter((k) => k !== topic)
        : splitIntoTerms(full, 6).filter((t) => t !== topic);
      return hubDiagram(
        topic.length > 30 ? topic.slice(0, 28) + "..." : topic,
        hubNodes.length >= 2 ? hubNodes : splitIntoTerms(full, 6),
        palette
      );
    }

    case "flow":
      return flowDiagram(
        keywords.length >= 3 ? keywords : splitIntoTerms(full, 5),
        palette
      );

    case "layers":
      return layersDiagram(
        keywords.length >= 3 ? keywords : splitIntoTerms(full, 5),
        palette
      );

    case "grid":
      return gridDiagram(
        keywords.length >= 3 ? keywords : splitIntoTerms(full, 6),
        palette
      );

    case "dashboard": {
      const metrics = (keywords.length >= 2 ? keywords : splitIntoTerms(full, 4))
        .slice(0, 4)
        .map((k) => ({ label: k, value: randomMetric() }));
      return dashboardDiagram(topic, metrics, palette);
    }

    case "compare": {
      const half = Math.ceil(allTerms.length / 2);
      const left = allTerms.slice(0, Math.max(half, 2));
      const right = allTerms.slice(half);
      return compareDiagram(
        left[0] || "Pattern A",
        left.slice(1).length ? left.slice(1) : splitIntoTerms(full, 3),
        right[0] || "Pattern B",
        right.slice(1).length ? right.slice(1) : splitIntoTerms(full, 3),
        palette
      );
    }

    default:
      return gridDiagram(splitIntoTerms(full, 6), palette);
  }
}

function splitIntoTerms(text, maxCount) {
  // Split a title into meaningful terms for box labels
  // Use " - " and ", " and " & " as separators, NOT bare "-"
  const terms = text
    .replace(/[()\[\]]/g, "")
    .split(/ - |, | & |: /)
    .map((s) => s.trim())
    .filter((s) => s.length > 2 && s.length < 40);
  if (terms.length >= 3) return terms.slice(0, maxCount);

  // Try splitting by major words
  const words = text.split(/\s+/).filter((w) => w.length > 2);
  const result = [];
  for (let i = 0; i < words.length && result.length < maxCount; i += 2) {
    result.push(words.slice(i, Math.min(i + 3, words.length)).join(" "));
  }
  return result.length >= 2 ? result : [text];
}

function randomMetric() {
  const prefixes = ["99.9%", "12.5K", "3.2ms", "47.8K", "256", "1.2M", "99.5%", "842", "4.7s", "15.3K"];
  return prefixes[Math.floor(Math.random() * prefixes.length)];
}

// ═══════════════════════════════════════════
// FILESYSTEM & GENERATION
// ═══════════════════════════════════════════

function findLessonFiles(seriesDir) {
  const files = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".md") && entry.name !== "index.md") files.push(full);
    }
  }
  walk(seriesDir);
  return files.sort();
}

function extractFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const fmMatch = content.match(/^---([\s\S]*?)^---/m);
  if (!fmMatch) return { title: path.basename(filePath, ".md"), description: "" };
  const fm = fmMatch[1];
  const titleMatch = fm.match(/^title:\s*"?(.+?)"?\s*$/m);
  // Description can be multi-line YAML
  const descMatch = fm.match(/^description:\s*>?-?\s*\n((?:\s{2,}.+\n?)+)/m);
  const descSingle = fm.match(/^description:\s*['"]?(.+?)['"]?\s*$/m);
  const description = descMatch
    ? descMatch[1].replace(/\n\s*/g, " ").trim()
    : descSingle
      ? descSingle[1]
      : "";
  return {
    title: titleMatch ? titleMatch[1] : path.basename(filePath, ".md"),
    description,
  };
}

function extractLessonNumber(filename) {
  const match = filename.match(/^(\d+)-bai-(\d+)/);
  return match ? parseInt(match[2], 10) : 0;
}

async function generateDiagram(lessonFile, seriesConfig, palette) {
  const filename = path.basename(lessonFile, ".md");
  const { title, description } = extractFrontmatter(lessonFile);
  const lessonNum = extractLessonNumber(filename);
  const parsed = parseTitle(title, description);
  const diagramType = selectDiagramType(title);

  // Use different palette slice per lesson for variety
  const lessonPalette = [...palette.slice(lessonNum % palette.length), ...palette.slice(0, lessonNum % palette.length)];

  const shortTitle = `Bai ${lessonNum}: ${parsed.full.length > 55 ? parsed.full.slice(0, 53) + "..." : parsed.full}`;
  const subtitle = `${seriesConfig.seriesLabel} Series - xdev.asia`;
  const content = generateDiagramContent(parsed, diagramType, lessonPalette);
  const svg = wrapSVG(content, shortTitle, subtitle, seriesConfig.gradient);

  const outputFilename = `${seriesConfig.prefix}-bai-${lessonNum}-diagram.png`;
  const outputPath = path.join(OUTPUT_DIR, outputFilename);

  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(outputPath);

  return { outputFilename, lessonFile, lessonNum, title };
}

function embedImageInLesson(lessonFile, imageFilename, title) {
  const content = fs.readFileSync(lessonFile, "utf-8");
  const imgTag = `![${title}](/storage/uploads/2026/03/${imageFilename})`;

  // Check if image already embedded
  if (content.includes(imageFilename)) return false;

  // Insert between frontmatter close and first heading
  const updated = content.replace(
    /^(---\s*\n)\s*\n(## )/m,
    `$1\n${imgTag}\n\n$2`
  );

  if (updated !== content) {
    fs.writeFileSync(lessonFile, updated, "utf-8");
    return true;
  }
  return false;
}

async function processSeries(seriesSlug, config) {
  const seriesDir = path.join(CONTENT_DIR, seriesSlug);
  if (!fs.existsSync(seriesDir)) {
    console.log(`  ⚠ Series directory not found: ${seriesSlug}`);
    return 0;
  }

  const lessons = findLessonFiles(seriesDir);
  if (lessons.length === 0) {
    console.log(`  ⚠ No lessons found for ${seriesSlug}`);
    return 0;
  }

  const paletteIdx = Object.keys(SERIES).indexOf(seriesSlug) % PALETTES.length;
  const palette = PALETTES[paletteIdx];

  let count = 0;
  for (const lessonFile of lessons) {
    try {
      const result = await generateDiagram(lessonFile, config, palette);
      const embedded = embedImageInLesson(lessonFile, result.outputFilename, result.title);
      console.log(`  ✓ ${result.outputFilename}${embedded ? " (embedded)" : " (already embedded)"}`);
      count++;
    } catch (err) {
      console.error(`  ✗ ${path.basename(lessonFile)}: ${err.message}`);
    }
  }
  return count;
}

async function main() {
  const targetSlug = process.argv[2];

  console.log(`Output: ${OUTPUT_DIR}\n`);

  let totalGenerated = 0;

  if (targetSlug) {
    const config = SERIES[targetSlug];
    if (!config) {
      console.error(`Unknown series: ${targetSlug}`);
      console.log("Available:", Object.keys(SERIES).join("\n  "));
      process.exit(1);
    }
    console.log(`Generating diagrams for: ${config.seriesLabel}`);
    totalGenerated = await processSeries(targetSlug, config);
  } else {
    for (const [slug, config] of Object.entries(SERIES)) {
      console.log(`\n─── ${config.seriesLabel} (${slug}) ───`);
      totalGenerated += await processSeries(slug, config);
    }
  }

  console.log(`\nDone! Generated ${totalGenerated} diagrams total.`);
}

main().catch(console.error);
