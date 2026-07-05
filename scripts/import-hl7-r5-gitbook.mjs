#!/usr/bin/env node
/**
 * Import the hl7.akitect.io GitBook export into a new xdev.asia series.
 *
 * Source (already extracted, GIF assets skipped):
 *   tmp/hl7-src/hl7.akitect.io-main/
 * Output:
 *   content/series/architecture/hl7-fhir-r5-chuyen-sau/
 *   public/storage/uploads/hl7-r5/{root,handson}/  (images)
 *
 * Run: node scripts/import-hl7-r5-gitbook.mjs
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "tmp/hl7-src/hl7.akitect.io-main");
const SERIES_SLUG = "hl7-fhir-r5-chuyen-sau";
const SERIES_TITLE = "HL7 FHIR R5 Chuyên Sâu — Reference & Thực hành";
const SERIES_ID = "019e3a00-0000-7001-e001-hl7r5000001";
const OUT_SERIES = path.join(ROOT, "content/series/architecture", SERIES_SLUG);
const OUT_CHAPTERS = path.join(OUT_SERIES, "chapters");
const PUB_ASSETS = path.join(ROOT, "public/storage/uploads/hl7-r5");

const AUTHOR = {
    id: "019c9616-d2b4-713f-9b2c-40e2e92a05cf",
    name: "Duy Tran",
    avatar: "avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg",
};
const CATEGORY = {
    id: "019c9616-cat7-7007-a007-000000000007",
    name: "Kiến trúc hệ thống",
    slug: "architecture",
};
const TAGS = [
    ["HL7", "hl7"],
    ["FHIR", "fhir"],
    ["FHIR R5", "fhir-r5"],
    ["healthcare", "healthcare"],
    ["interoperability", "interoperability"],
    ["RESTful API", "rest-api"],
    ["Terminology", "terminology"],
    ["HAPI-FHIR", "hapi-fhir"],
    ["SMART-on-FHIR", "smart-on-fhir"],
    ["Profiling", "profiling"],
    ["Security", "security"],
];

/* ────────────────────────── helpers ────────────────────────── */

// Remove emoji / pictographic symbols from a title line.
function stripEmoji(s) {
    return s
        .replace(/&#x20;|&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(
            /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{2190}-\u{21FF}\u{2300}-\u{23FF}]/gu,
            " "
        )
        .replace(/\s+/g, " ")
        .trim();
}

const VN_MAP = {
    a: "àáạảãâầấậẩẫăằắặẳẵ",
    e: "èéẹẻẽêềếệểễ",
    i: "ìíịỉĩ",
    o: "òóọỏõôồốộổỗơờớợởỡ",
    u: "ùúụủũưừứựửữ",
    y: "ỳýỵỷỹ",
    d: "đ",
};
function vnSlug(input) {
    let s = stripEmoji(input).toLowerCase();
    for (const [base, chars] of Object.entries(VN_MAP)) {
        for (const ch of chars) s = s.split(ch).join(base);
    }
    return s
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/&[a-z0-9#]+;/g, " ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/-+/g, "-");
}

// Sanitize an asset basename the SAME way for copy + reference.
function sanitizeAsset(name) {
    return name.replace(/[ ()]+/g, "_").replace(/_+/g, "_");
}

function pad2(n) {
    return String(n).padStart(2, "0");
}

// Truncate to <= max chars without cutting a word in half.
function smartTruncate(text, max = 220) {
    const s = String(text).replace(/\s+/g, " ").trim();
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    const lastSpace = cut.lastIndexOf(" ");
    return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).replace(/[,;:\-–—]$/, "").trim() + "…";
}

// Nicer Vietnamese section titles (fallback to the original GitBook heading).
const SECTION_TITLE_VI = {
    "Introduction to HL7 R5": "Giới thiệu HL7 R5",
    "RESTful API & FHIR": "RESTful API & FHIR",
    "FHIR Resource Model and Architecture": "Mô hình Resource & Kiến trúc FHIR",
    "FHIR R5 Search & CRUD": "Search & CRUD trong FHIR R5",
    "FHIR R5 DATA STRUCTURE": "Cấu trúc dữ liệu FHIR R5",
    "Deep Dive into Resource FHIR R5": "Đào sâu Resource FHIR R5",
    "FHIR R5 Profiling & Validation": "Profiling & Validation trong FHIR R5",
    "FHIR R5 Operations & Messaging": "Operations & Messaging trong FHIR R5",
    "Security và Privacy In FHIR R5": "Bảo mật & Quyền riêng tư trong FHIR R5",
    "Terminology In FHIR R5": "Terminology trong FHIR R5",
    "Architecture and Design (Hands-on)": "Kiến trúc & Thiết kế (Hands-on)",
    "Implementation Guide (Hands-on)": "Implementation Guide (Hands-on)",
};
function viSectionTitle(title) {
    return SECTION_TITLE_VI[title] || title;
}

function yamlQuote(s) {
    return `'${String(s).replace(/'/g, "''")}'`;
}

function newId() {
    return crypto.randomUUID();
}

/* ────────────────────────── SUMMARY parsing ────────────────────────── */

/**
 * Parse a GitBook SUMMARY.md into ordered sections.
 * Returns: [{ title, lessons: [{ title, relPath }] }]
 * - `## Heading` starts a new section.
 * - `* [Text](path.md)` (any indent) is a lesson under the current section.
 * - README.md / Welcome links are skipped.
 */
function parseSummary(summaryPath) {
    const raw = fs.readFileSync(summaryPath, "utf8");
    const lines = raw.split(/\r?\n/);
    const sections = [];
    let current = null;
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/;

    for (const line of lines) {
        const h2 = line.match(/^##\s+(.*)$/);
        if (h2) {
            current = { title: stripEmoji(h2[1]), lessons: [] };
            sections.push(current);
            continue;
        }
        const bullet = line.match(/^\s*\*\s+(.*)$/);
        if (!bullet) continue;
        const m = bullet[1].match(linkRe);
        if (!m) continue;
        const title = stripEmoji(m[1]);
        let rel = m[2].trim();
        if (rel.startsWith("<") && rel.endsWith(">")) rel = rel.slice(1, -1);
        if (!rel.endsWith(".md")) continue;
        if (/(^|\/)README\.md$/i.test(rel) || /welcome/i.test(title)) continue;
        // Sections without a preceding `##` (rare) go into an implicit section.
        if (!current) {
            current = { title: "Giới thiệu", lessons: [] };
            sections.push(current);
        }
        current.lessons.push({ title, relPath: rel });
    }
    return sections.filter((s) => s.lessons.length > 0);
}

/* ────────────────────────── content transform ────────────────────────── */

function splitFrontmatter(raw) {
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!m) return { fm: {}, body: raw };
    const fmBlock = m[1];
    const body = raw.slice(m[0].length);
    const fm = {};
    // Only need `description` (may be folded with >-)
    const descFolded = fmBlock.match(/^description:\s*>-?\s*\n([\s\S]*?)(?=\n\S|\n?$)/m);
    if (descFolded) {
        fm.description = descFolded[1]
            .split(/\n/)
            .map((l) => l.trim())
            .filter(Boolean)
            .join(" ");
    } else {
        const descInline = fmBlock.match(/^description:\s*(.+)$/m);
        if (descInline) fm.description = descInline[1].replace(/^["']|["']$/g, "").trim();
    }
    return { fm, body };
}

function firstParagraph(body) {
    const cleaned = body
        .replace(/<figure[\s\S]*?<\/figure>/gi, "")
        .replace(/<table[\s\S]*?<\/table>/gi, "")
        .replace(/^#+\s.*$/gm, "");
    for (const block of cleaned.split(/\n\s*\n/)) {
        const text = block
            .replace(/<[^>]+>/g, "")
            .replace(/[*_`>#-]/g, "")
            .replace(/\s+/g, " ")
            .trim();
        if (text.length > 40) return text;
    }
    return "";
}

/**
 * Rewrite GitBook <figure> blocks:
 *  - image assets that we copied  → point to /storage/uploads/hl7-r5/<scope>/<sanitized>
 *  - gif / missing assets         → drop the image, keep caption as italic line
 */
function rewriteFigures(body, scope, copiedSet) {
    return body.replace(/<figure>([\s\S]*?)<\/figure>/gi, (full, inner) => {
        const srcM = inner.match(/<img[^>]*src="([^"]+)"[^>]*>/i);
        const capM = inner.match(/<figcaption>([\s\S]*?)<\/figcaption>/i);
        const captionText = capM
            ? capM[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
            : "";
        if (!srcM) {
            return captionText ? `\n*${captionText}*\n` : "";
        }
        const rawSrc = srcM[1];
        const assetM = rawSrc.match(/\.gitbook\/assets\/(.+)$/);
        if (!assetM) {
            return captionText ? `\n*${captionText}*\n` : "";
        }
        const base = decodeURIComponent(assetM[1]);
        const sanitized = sanitizeAsset(base);
        const key = `${scope}/${sanitized}`;
        if (!copiedSet.has(key)) {
            // asset not available (e.g. a GIF) — keep the caption only
            return captionText ? `\n*${captionText}*\n` : "";
        }
        const url = `/storage/uploads/hl7-r5/${scope}/${sanitized}`;
        const alt = captionText || "HL7 FHIR R5";
        const caption = captionText ? `\n*${captionText}*\n` : "\n";
        return `\n![${alt}](${url})\n${caption}`;
    });
}

function transformBody(body, scope, copiedSet) {
    let out = body;
    // Drop the first H1 (title is rendered from frontmatter)
    out = out.replace(/^\s*#\s+.+\n/, "");
    out = rewriteFigures(out, scope, copiedSet);
    // Collapse 3+ blank lines
    out = out.replace(/\n{3,}/g, "\n\n").trim();
    return out + "\n";
}

function estimateMinutes(body) {
    const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.min(90, Math.max(15, Math.round(words / 150)));
}

/* ────────────────────────── asset copy ────────────────────────── */

function copyAssets() {
    fs.mkdirSync(path.join(PUB_ASSETS, "root"), { recursive: true });
    fs.mkdirSync(path.join(PUB_ASSETS, "handson"), { recursive: true });
    const copied = new Set();
    const jobs = [
        [path.join(SRC, ".gitbook/assets"), "root"],
        [path.join(SRC, "hands-on-practice/.gitbook/assets"), "handson"],
    ];
    for (const [dir, scope] of jobs) {
        if (!fs.existsSync(dir)) continue;
        for (const name of fs.readdirSync(dir)) {
            const full = path.join(dir, name);
            if (!fs.statSync(full).isFile()) continue;
            if (/\.gif$/i.test(name)) continue;
            const sanitized = sanitizeAsset(name);
            fs.copyFileSync(full, path.join(PUB_ASSETS, scope, sanitized));
            copied.add(`${scope}/${sanitized}`);
        }
    }
    return copied;
}

/* ────────────────────────── main ────────────────────────── */

function build() {
    if (!fs.existsSync(SRC)) {
        console.error(`Source not found: ${SRC}`);
        process.exit(1);
    }

    const copied = copyAssets();
    console.log(`Copied ${copied.size} image assets.`);

    // Fresh output
    fs.rmSync(OUT_SERIES, { recursive: true, force: true });
    fs.mkdirSync(OUT_CHAPTERS, { recursive: true });

    // Build combined section list from both SUMMARY files.
    const mainSections = parseSummary(path.join(SRC, "SUMMARY.md")).map((s) => ({
        ...s,
        baseDir: SRC,
        scope: "root",
    }));
    const handsPath = path.join(SRC, "hands-on-practice/SUMMARY.md");
    const handsSections = fs.existsSync(handsPath)
        ? parseSummary(handsPath).map((s) => ({
            ...s,
            title: `${s.title} (Hands-on)`,
            baseDir: path.join(SRC, "hands-on-practice"),
            scope: "handson",
        }))
        : [];
    const allSections = [...mainSections, ...handsSections];

    const indexSections = [];
    let totalLessons = 0;
    let totalMinutes = 0;

    allSections.forEach((section, si) => {
        const sectionNo = si + 1;
        const niceTitle = viSectionTitle(section.title);
        const sectionTitle = `Phần ${sectionNo}: ${niceTitle}`;
        const chapterFolder = `${pad2(sectionNo)}-phan-${sectionNo}-${vnSlug(niceTitle)}`;
        const lessonsDir = path.join(OUT_CHAPTERS, chapterFolder, "lessons");
        fs.mkdirSync(lessonsDir, { recursive: true });

        const indexLessons = [];

        section.lessons.forEach((lesson, li) => {
            const lessonNo = li + 1;
            const srcFile = path.join(section.baseDir, lesson.relPath);
            if (!fs.existsSync(srcFile)) {
                console.warn(`  ! missing source: ${lesson.relPath}`);
                return;
            }
            const raw = fs.readFileSync(srcFile, "utf8");
            const { fm, body } = splitFrontmatter(raw);
            const transformed = transformBody(body, section.scope, copied);
            if (transformed.replace(/\s/g, "").length < 30) {
                // Skip near-empty stub pages
                return;
            }

            const baseName = path.basename(lesson.relPath, ".md");
            const slugCore =
                baseName.toLowerCase() === "readme"
                    ? vnSlug(path.basename(path.dirname(lesson.relPath)))
                    : vnSlug(baseName);
            const lessonSlug = slugCore || vnSlug(lesson.title);
            const description = smartTruncate(
                fm.description || firstParagraph(body) || lesson.title,
                220
            );
            const minutes = estimateMinutes(transformed);
            totalLessons += 1;
            totalMinutes += minutes;

            const id = newId();
            const fmOut = [
                "---",
                `id: ${id}`,
                `title: ${yamlQuote(lesson.title)}`,
                `slug: ${lessonSlug}`,
                `description: ${yamlQuote(description)}`,
                `duration_minutes: ${minutes}`,
                "is_free: true",
                "video_url: null",
                `sort_order: ${lessonNo}`,
                `section_title: ${yamlQuote(sectionTitle)}`,
                "course:",
                `  id: ${SERIES_ID}`,
                `  title: ${yamlQuote(SERIES_TITLE)}`,
                `  slug: ${SERIES_SLUG}`,
                "---",
                "",
            ].join("\n");

            const outFile = path.join(lessonsDir, `${pad2(lessonNo)}-${lessonSlug}.md`);
            fs.writeFileSync(outFile, fmOut + transformed);
            indexLessons.push({
                id,
                title: lesson.title,
                slug: lessonSlug,
                description,
                duration_minutes: minutes,
                sort_order: lessonNo,
            });
        });

        if (indexLessons.length > 0) {
            indexSections.push({ no: sectionNo, title: sectionTitle, lessons: indexLessons });
        }
    });

    writeIndex(indexSections, totalLessons, totalMinutes);
    console.log(
        `Done: ${indexSections.length} sections, ${totalLessons} lessons, ~${Math.round(
            totalMinutes / 60
        )}h.`
    );
}

function writeIndex(sections, totalLessons, totalMinutes) {
    const now = "2026-07-05T14:00:00.000000Z";
    const tagsYaml = TAGS.map(([name, slug]) => `  - name: ${yamlQuote(name)}\n    slug: ${slug}`).join(
        "\n"
    );
    const sectionsYaml = sections
        .map((s) => {
            const lessonsYaml = s.lessons
                .map((l) =>
                    [
                        `      - id: ${l.id}`,
                        `        title: ${yamlQuote(l.title)}`,
                        `        slug: ${l.slug}`,
                        `        description: ${yamlQuote(l.description)}`,
                        `        duration_minutes: ${l.duration_minutes}`,
                        "        is_free: true",
                        `        sort_order: ${l.sort_order}`,
                        "        video_url: null",
                    ].join("\n")
                )
                .join("\n");
            return [
                `  - id: section-${pad2(s.no)}`,
                `    title: ${yamlQuote(s.title)}`,
                `    sort_order: ${s.no}`,
                "    lessons:",
                lessonsYaml,
            ].join("\n");
        })
        .join("\n");

    const description =
        "Khóa học chuyên sâu HL7 FHIR R5 (Fast Healthcare Interoperability Resources): " +
        "nguyên tắc thiết kế FHIR, RESTful API, Resource Model & Architecture, Search/CRUD, " +
        "Data Types, Deep-dive Resources (Clinical/Administrative/Specialized/Infrastructure), " +
        "Profiling & Validation, Operations & Messaging, Security & Privacy, Terminology, và " +
        "phần Hands-on xây dựng hệ thống FHIR microservices với HAPI FHIR. Cập nhật theo FHIR R5 (v5.0.0).";

    const front = [
        "---",
        `id: ${SERIES_ID}`,
        `title: ${yamlQuote(SERIES_TITLE)}`,
        `slug: ${SERIES_SLUG}`,
        `description: ${yamlQuote(description)}`,
        "featured_image: uploads/2026/03/hl7-fhir-series-banner.png",
        "level: intermediate",
        `duration_hours: ${Math.max(1, Math.round(totalMinutes / 60))}`,
        `lesson_count: ${totalLessons}`,
        "price: '0.00'",
        "is_free: true",
        "view_count: 0",
        "average_rating: '0.00'",
        "review_count: 0",
        "enrollment_count: 0",
        "meta: null",
        `published_at: '2026-07-05T14:00:00.000000Z'`,
        `created_at: '${now}'`,
        "author:",
        `  id: ${AUTHOR.id}`,
        `  name: ${yamlQuote(AUTHOR.name)}`,
        `  avatar: ${AUTHOR.avatar}`,
        "category:",
        `  id: ${CATEGORY.id}`,
        `  name: ${yamlQuote(CATEGORY.name)}`,
        `  slug: ${CATEGORY.slug}`,
        "tags:",
        tagsYaml,
        "sections:",
        sectionsYaml,
        "---",
        "",
        `# ${SERIES_TITLE}`,
        "",
        description,
        "",
        "> Nội dung được biên soạn từ tài liệu HL7 FHIR R5 (hl7.akitect.io), cập nhật theo phiên bản chính thức FHIR R5 (v5.0.0) của HL7 International.",
        "",
    ].join("\n");

    fs.writeFileSync(path.join(OUT_SERIES, "index.md"), front);
}

build();
