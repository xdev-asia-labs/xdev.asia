import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";

const LOCALES = ["en", "ja", "zh-tw"];
const TARGET_LANG = {
  en: "en",
  ja: "ja",
  "zh-tw": "zh-TW",
};

const SOURCE_LANG = "vi";
const VI_CHAR_RE =
  /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;
const TRANSLATABLE_FRONTMATTER_KEYS = new Set([
  "title",
  "description",
  "excerpt",
  "section_title",
  "meta_title",
  "meta_description",
]);
const IMMUTABLE_KEYS = new Set([
  "id",
  "slug",
  "sort_order",
  "duration_minutes",
  "duration_hours",
  "lesson_count",
  "price",
  "is_free",
  "video_url",
  "featured_image",
  "published_at",
  "created_at",
  "updated_at",
  "view_count",
  "average_rating",
  "review_count",
  "enrollment_count",
  "reading_time",
  "type",
  "level",
]);

const translationCache = new Map();

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    roots: [],
    locales: [],
    series: [],
    limit: Infinity,
    progressEvery: 1,
    concurrency: 1,
    dryRun: false,
    fixViLeftovers: false,
    onlyUntracked: false,
    includes: [],
    refresh: false,
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--root" || arg === "--roots") {
      options.roots.push(...(args[++i] || "").split(",").filter(Boolean));
    } else if (arg === "--locale" || arg === "--locales") {
      options.locales.push(...(args[++i] || "").split(",").filter(Boolean));
    } else if (arg === "--series") {
      options.series.push(...(args[++i] || "").split(",").filter(Boolean));
    } else if (arg === "--limit") {
      options.limit = Number(args[++i] || "0") || Infinity;
    } else if (arg === "--progress-every") {
      options.progressEvery = Math.max(1, Number(args[++i] || "1") || 1);
    } else if (arg === "--concurrency") {
      options.concurrency = Math.max(1, Number(args[++i] || "1") || 1);
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--fix-vi-leftovers") {
      options.fixViLeftovers = true;
    } else if (arg === "--only-untracked") {
      options.onlyUntracked = true;
    } else if (arg === "--include" || arg === "--includes") {
      options.includes.push(...(args[++i] || "").split(",").filter(Boolean));
    } else if (arg === "--refresh") {
      options.refresh = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (options.roots.length === 0) options.roots = ["blog", "pages", "series"];
  if (options.locales.length === 0) options.locales = LOCALES;

  for (const root of options.roots) {
    if (!["blog", "pages", "series"].includes(root)) {
      throw new Error(`Unsupported root: ${root}`);
    }
  }
  for (const locale of options.locales) {
    if (!LOCALES.includes(locale)) {
      throw new Error(`Unsupported locale: ${locale}`);
    }
  }

  return options;
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function hasVietnameseText(text) {
  return VI_CHAR_RE.test(text || "");
}

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkMarkdown(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      out.push(fullPath);
    }
  }
  return out.sort((a, b) => a.localeCompare(b));
}

function collectIds(root, locale = null) {
  const base = locale ? path.join("content", locale, root) : path.join("content", root);
  const map = new Map();
  for (const filePath of walkMarkdown(base)) {
    const parsed = matter(fs.readFileSync(filePath, "utf8"));
    const id = parsed.data?.id;
    if (id) map.set(String(id), filePath);
  }
  return map;
}

function normalizeSeriesFilter(value) {
  return value.replace(/^content\/series\//, "").replace(/^series\//, "").replace(/\/$/, "");
}

function shouldIncludeSource(filePath, root, seriesFilters) {
  if (root !== "series" || seriesFilters.length === 0) return true;
  const rel = path.relative(path.join("content", "series"), filePath).replaceAll(path.sep, "/");
  return seriesFilters.some((series) => rel === series || rel.startsWith(`${series}/`));
}

function shouldIncludeRelPath(relPath, includes) {
  if (includes.length === 0) return true;
  const normalized = relPath.replaceAll(path.sep, "/");
  return includes.some((include) => {
    const value = include.replaceAll(path.sep, "/").replace(/^content\/blog\//, "");
    return normalized === value || normalized.endsWith(`/${value}`);
  });
}

function localeFromPath(filePath) {
  const normalized = toPosixPath(filePath);
  const match = normalized.match(/^content\/(en|ja|zh-tw)\//);
  return match?.[1] || null;
}

function rootFromLocalizedPath(filePath) {
  const normalized = toPosixPath(filePath);
  const match = normalized.match(/^content\/(?:en|ja|zh-tw)\/([^/]+)\//);
  return match?.[1] || null;
}

function shouldIncludeTarget(filePath, root, seriesFilters) {
  if (root !== "series" || seriesFilters.length === 0) return true;
  const normalized = toPosixPath(filePath);
  const match = normalized.match(/^content\/(?:en|ja|zh-tw)\/series\/(.+)$/);
  const rel = match?.[1] || "";
  return seriesFilters.some((series) => rel === series || rel.startsWith(`${series}/`));
}

function findMissing(options) {
  const missing = [];
  const seriesFilters = options.series.map(normalizeSeriesFilter);

  for (const root of options.roots) {
    const sourceBase = path.join("content", root);
    const sourceFiles = walkMarkdown(sourceBase).filter((filePath) =>
      shouldIncludeSource(filePath, root, seriesFilters)
    );

    const localeMaps = Object.fromEntries(
      options.locales.map((locale) => [locale, collectIds(root, locale)])
    );

    for (const sourcePath of sourceFiles) {
      const parsed = matter(fs.readFileSync(sourcePath, "utf8"));
      const id = parsed.data?.id;
      if (!id) continue;

      const relPath = path.relative(sourceBase, sourcePath);
      if (!shouldIncludeRelPath(relPath, options.includes)) continue;
      for (const locale of options.locales) {
        if (!options.refresh && localeMaps[locale].has(String(id))) continue;
        missing.push({
          root,
          locale,
          sourcePath,
          relPath,
          targetPath: path.join("content", locale, root, relPath),
        });
      }
    }
  }

  return missing.sort((a, b) => {
    return `${a.root}/${a.locale}/${a.relPath}`.localeCompare(`${b.root}/${b.locale}/${b.relPath}`);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function googleTranslate(text, targetLang) {
  if (!text || !text.trim()) return text;

  const key = `${SOURCE_LANG}|${targetLang}|${text}`;
  if (translationCache.has(key)) return translationCache.get(key);

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", SOURCE_LANG);
  url.searchParams.set("tl", targetLang);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      const translated = (json?.[0] || []).map((row) => row?.[0] || "").join("");
      translationCache.set(key, translated || text);
      return translated || text;
    } catch (error) {
      if (attempt === 3) {
        console.warn(`WARN translate failed (${targetLang}): ${String(error?.message || error)}`);
        translationCache.set(key, text);
        return text;
      }
      await sleep(400 * attempt);
    }
  }

  return text;
}

function splitIntoChunks(text, limit = 3200) {
  if (text.length <= limit) return [text];

  const chunks = [];
  const placeholderPattern =
    /<xdev-(?:protect|tag)\s+data-id=["']\d+["']\s*><\/xdev-(?:protect|tag)>/gi;

  if (placeholderPattern.test(text)) {
    placeholderPattern.lastIndex = 0;
    const parts = [];
    let lastIndex = 0;

    for (const match of text.matchAll(placeholderPattern)) {
      if (match.index > lastIndex) {
        parts.push({ value: text.slice(lastIndex, match.index), placeholder: false });
      }
      parts.push({ value: match[0], placeholder: true });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push({ value: text.slice(lastIndex), placeholder: false });
    }

    let current = "";
    const flush = () => {
      if (current) {
        chunks.push(current);
        current = "";
      }
    };

    const appendText = (value) => {
      let rest = value;
      while (rest.length > 0) {
        const room = limit - current.length;
        if (room <= 0) {
          flush();
          continue;
        }

        if (rest.length <= room) {
          current += rest;
          break;
        }

        let cut = rest.lastIndexOf("\n\n", room);
        if (cut < Math.floor(room * 0.5)) cut = rest.lastIndexOf(". ", room);
        if (cut < Math.floor(room * 0.5)) cut = rest.lastIndexOf(" ", room);
        if (cut < Math.floor(room * 0.5)) cut = room;
        current += rest.slice(0, cut);
        flush();
        rest = rest.slice(cut);
      }
    };

    for (const part of parts) {
      if (part.placeholder) {
        if (current.length + part.value.length > limit) flush();
        current += part.value;
      } else {
        appendText(part.value);
      }
    }
    flush();
    return chunks;
  }

  let current = "";
  for (const part of text.split(/(\n\n+)/)) {
    if ((current + part).length > limit && current) {
      chunks.push(current);
      current = part;
    } else {
      current += part;
    }
  }
  if (current) chunks.push(current);

  return chunks.flatMap((chunk) => {
    if (chunk.length <= limit) return [chunk];
    const pieces = [];
    for (let i = 0; i < chunk.length; i += limit) {
      pieces.push(chunk.slice(i, i + limit));
    }
    return pieces;
  });
}

function splitByProtectedInline(text) {
  const protectedPattern =
    /(`[^`]*`|\[[^\]]+\]\([^)]+\)|!\[[^\]]*\]\([^)]+\)|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|https?:\/\/[^\s)"']+|\/(?:storage|images|uploads|public)\/[^\s)"']+|&[a-zA-Z0-9#]+;)/g;
  const parts = [];
  let lastIndex = 0;
  for (const match of text.matchAll(protectedPattern)) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), protected: false });
    }
    parts.push({ text: match[0], protected: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), protected: false });
  }
  return parts;
}

async function translatePlainText(text, targetLang) {
  if (!text || !text.trim()) return text;
  const chunks = splitIntoChunks(text);
  let out = "";
  for (const chunk of chunks) {
    out += await googleTranslate(chunk, targetLang);
  }
  return out;
}

async function translateInline(text, targetLang) {
  const parts = splitByProtectedInline(text);
  let out = "";
  for (const part of parts) {
    out += part.protected ? part.text : await translatePlainText(part.text, targetLang);
  }
  return out;
}

function splitBodyParts(body) {
  const tokenPattern =
    /```[\s\S]*?```|<pre\b[\s\S]*?<\/pre>|`[^`]*`|!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\)|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|https?:\/\/[^\s)"']+|\/(?:storage|images|uploads|public)\/[^\s)"']+|<!--[\s\S]*?-->|<\/?[A-Za-z][A-Za-z0-9:-]*(?:\s[^<>]*?)?>/gi;
  const parts = [];
  let lastIndex = 0;

  for (const match of body.matchAll(tokenPattern)) {
    if (match.index > lastIndex) {
      parts.push({ value: body.slice(lastIndex, match.index), protected: false });
    }
    parts.push({
      value: match[0],
      protected: true,
      markdownLink: /^!?\[[^\]]*\]\([^)]+\)$/.test(match[0]),
    });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < body.length) {
    parts.push({ value: body.slice(lastIndex), protected: false });
  }

  return parts;
}

function splitOuterWhitespace(text) {
  const leading = text.match(/^\s*/)?.[0] || "";
  const trailing = text.match(/\s*$/)?.[0] || "";
  const core = text.slice(leading.length, text.length - trailing.length);
  return { leading, core, trailing };
}

async function translateMarkdownLabelParts(parts, targetLang, onlyVietnamese = false) {
  for (const part of parts) {
    if (!part.markdownLink) continue;

    const match = part.value.match(/^(!?)\[([^\]]*)\]\(([^)]*)\)$/);
    if (!match) continue;

    const [, bang, label, url] = match;
    if (!label.trim()) continue;
    if (onlyVietnamese && !hasVietnameseText(label)) continue;

    const translatedLabel = await translateInline(label, targetLang);
    part.value = `${bang}[${translatedLabel}](${url})`;
  }
}

async function translateVietnameseLines(text, targetLang) {
  const pieces = text.split(/(\r?\n)/);
  let out = "";

  for (const piece of pieces) {
    if (!piece || /^\r?\n$/.test(piece) || !hasVietnameseText(piece)) {
      out += piece;
      continue;
    }

    out += await translatePlainText(piece, targetLang);
  }

  return out;
}

async function translateBodyTextEntries(parts, targetLang, onlyVietnamese = false) {
  const delimiter = "\n⟬XDEVSEG⟭\n";
  const entries = [];

  parts.forEach((part, index) => {
    if (part.protected || !part.value.trim()) return;
    const split = splitOuterWhitespace(part.value);
    if (!split.core) return;
    if (onlyVietnamese && !hasVietnameseText(split.core)) return;
    entries.push({ index, ...split });
  });

  if (onlyVietnamese) {
    for (const entry of entries) {
      const translated = await translateVietnameseLines(entry.core, targetLang);
      parts[entry.index].value = `${entry.leading}${translated}${entry.trailing}`;
    }
    return;
  }

  for (let i = 0; i < entries.length; ) {
    const batch = [];
    let length = 0;

    while (i < entries.length) {
      const next = entries[i];
      const nextLength = next.core.length + (batch.length > 0 ? delimiter.length : 0);
      if (batch.length > 0 && length + nextLength > 2800) break;
      batch.push(next);
      length += nextLength;
      i += 1;
      if (next.core.length > 2800) break;
    }

    const source = batch.map((entry) => entry.core).join(delimiter);
    const translated = await googleTranslate(source, targetLang);
    let translatedParts = translated.split(delimiter);

    if (translatedParts.length !== batch.length) {
      translatedParts = [];
      for (const entry of batch) {
        translatedParts.push(await googleTranslate(entry.core, targetLang));
      }
    }

    batch.forEach((entry, batchIndex) => {
      parts[entry.index].value = `${entry.leading}${translatedParts[batchIndex] || entry.core}${entry.trailing}`;
    });
  }
}

async function translateBody(body, targetLang, options = {}) {
  const parts = splitBodyParts(body);
  await translateMarkdownLabelParts(parts, targetLang, options.onlyVietnamese);
  await translateBodyTextEntries(parts, targetLang, options.onlyVietnamese);
  return parts.map((part) => part.value).join("");
}

function isTranslatableObjectKey(pathKeys, key) {
  if (TRANSLATABLE_FRONTMATTER_KEYS.has(key)) return true;
  if (pathKeys.at(-1) === "course" && key === "title") return true;
  if (pathKeys.includes("sections") && (key === "title" || key === "description")) return true;
  if (pathKeys.includes("lessons") && (key === "title" || key === "description")) return true;
  if (pathKeys.at(-1) === "category" && key === "name") return true;
  if (pathKeys.includes("tags") && key === "name") return true;
  return false;
}

async function translateFrontmatterValue(
  value,
  targetLang,
  locale,
  pathKeys = [],
  key = "",
  options = {}
) {
  if (key === "locale") return locale;
  if (IMMUTABLE_KEYS.has(key)) return value;

  if (Array.isArray(value)) {
    const out = [];
    for (const item of value) {
      out.push(
        await translateFrontmatterValue(item, targetLang, locale, [...pathKeys, key], "", options)
      );
    }
    return out;
  }

  if (value && typeof value === "object") {
    const out = {};
    for (const [childKey, childValue] of Object.entries(value)) {
      out[childKey] = await translateFrontmatterValue(
        childValue,
        targetLang,
        locale,
        [...pathKeys, key].filter(Boolean),
        childKey,
        options
      );
    }
    return out;
  }

  if (typeof value === "string" && isTranslatableObjectKey(pathKeys, key)) {
    if (options.onlyVietnamese && !hasVietnameseText(value)) return value;
    return translateInline(value, targetLang);
  }

  return value;
}

async function translateDocument(raw, targetLang, locale, options = {}) {
  const parsed = matter(raw);
  const data = {};
  for (const [key, value] of Object.entries(parsed.data || {})) {
    data[key] = await translateFrontmatterValue(value, targetLang, locale, [], key, options);
  }
  data.locale = locale;

  const body = await translateBody(parsed.content || "", targetLang, options);
  return matter.stringify(body, data);
}

function untrackedMarkdownFiles() {
  const output = execFileSync("git", ["ls-files", "--others", "--exclude-standard", "--", "*.md"], {
    encoding: "utf8",
  });
  return output
    .split(/\r?\n/)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function collectFixFiles(options) {
  const seriesFilters = options.series.map(normalizeSeriesFilter);
  const files = options.onlyUntracked
    ? untrackedMarkdownFiles()
    : options.locales.flatMap((locale) =>
        options.roots.flatMap((root) => walkMarkdown(path.join("content", locale, root)))
      );

  return files
    .filter((filePath) => {
      const locale = localeFromPath(filePath);
      if (!locale || !options.locales.includes(locale)) return false;

      const root = rootFromLocalizedPath(filePath);
      if (!root || !options.roots.includes(root)) return false;

      return shouldIncludeTarget(filePath, root, seriesFilters);
    })
    .sort((a, b) => a.localeCompare(b));
}

async function runFixLeftovers(options) {
  const allFiles = collectFixFiles(options);
  const selected = allFiles.slice(0, options.limit);

  console.log(`Fix scan total: ${allFiles.length}`);
  if (options.onlyUntracked) console.log("Scope: untracked markdown only");
  if (options.dryRun) {
    for (const filePath of selected) {
      console.log(`DRY ${filePath}`);
    }
    return;
  }

  let updated = 0;
  let completed = 0;
  let cursor = 0;

  async function fixFile(filePath) {
    const locale = localeFromPath(filePath);
    const targetLang = TARGET_LANG[locale];
    const raw = fs.readFileSync(filePath, "utf8");
    const translated = await translateDocument(raw, targetLang, locale, {
      onlyVietnamese: true,
    });

    if (translated !== raw) {
      fs.writeFileSync(filePath, translated, "utf8");
      updated += 1;
    }

    completed += 1;
    if (
      completed === 1 ||
      completed === selected.length ||
      completed % options.progressEvery === 0
    ) {
      console.log(`[${completed}/${selected.length}] ${filePath}`);
    }
  }

  async function worker() {
    while (cursor < selected.length) {
      const index = cursor;
      cursor += 1;
      await fixFile(selected[index]);
    }
  }

  const workers = Array.from(
    { length: Math.min(options.concurrency, selected.length) },
    () => worker()
  );
  await Promise.all(workers);

  console.log(`Updated: ${updated}`);
  if (selected.length < allFiles.length) {
    console.log(`Skipped by limit: ${allFiles.length - selected.length}`);
  }
}

async function run() {
  const options = parseArgs();
  if (options.fixViLeftovers) {
    await runFixLeftovers(options);
    return;
  }

  const missing = findMissing(options);
  const selected = missing.slice(0, options.limit);

  const byLocale = new Map();
  for (const item of missing) {
    const key = `${item.root}:${item.locale}`;
    byLocale.set(key, (byLocale.get(key) || 0) + 1);
  }
  console.log(`Missing total: ${missing.length}`);
  for (const [key, count] of [...byLocale.entries()].sort()) {
    console.log(`  ${key}: ${count}`);
  }

  if (options.dryRun) {
    for (const item of selected) {
      console.log(`DRY ${item.locale} ${item.root}/${item.relPath}`);
    }
    return;
  }

  let created = 0;
  let completed = 0;
  let cursor = 0;

  async function translateItem(item) {
    const targetLang = TARGET_LANG[item.locale];
    const raw = fs.readFileSync(item.sourcePath, "utf8");
    const translated = await translateDocument(raw, targetLang, item.locale);
    fs.mkdirSync(path.dirname(item.targetPath), { recursive: true });
    fs.writeFileSync(item.targetPath, translated, "utf8");
    created += 1;
    completed += 1;

    if (
      completed === 1 ||
      completed === selected.length ||
      completed % options.progressEvery === 0
    ) {
      console.log(
        `[${completed}/${selected.length}] ${item.locale} ${item.root}/${item.relPath}`
      );
    }
  }

  async function worker() {
    while (cursor < selected.length) {
      const index = cursor;
      cursor += 1;
      await translateItem(selected[index]);
    }
  }

  const workers = Array.from(
    { length: Math.min(options.concurrency, selected.length) },
    () => worker()
  );
  await Promise.all(workers);

  console.log(`Created: ${created}`);
  if (selected.length < missing.length) {
    console.log(`Skipped by limit: ${missing.length - selected.length}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
