import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = 'content/series/devsecops/hashicorp-vault-tu-co-ban-den-nang-cao';
const LOCALES = ['en', 'ja', 'zh-tw'];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && p.endsWith('.md')) out.push(p);
  }
  return out;
}

function collectIdMap(base) {
  const map = new Map();
  if (!fs.existsSync(base)) return map;
  for (const p of walk(base)) {
    const t = fs.readFileSync(p, 'utf8');
    const m = t.match(/^id:\s*(.+)$/m);
    if (m) map.set(m[1].trim(), p);
  }
  return map;
}

function getMissing() {
  const maps = {
    en: collectIdMap('content/en/series'),
    ja: collectIdMap('content/ja/series'),
    'zh-tw': collectIdMap('content/zh-tw/series')
  };
  const out = [];
  for (const p of walk(ROOT)) {
    const t = fs.readFileSync(p, 'utf8');
    const m = t.match(/^id:\s*(.+)$/m);
    if (!m) continue;
    const id = m[1].trim();
    const lacks = LOCALES.filter((l) => !maps[l].has(id));
    if (lacks.length) out.push({ source: p, id, lacks });
  }
  out.sort((a, b) => a.source.localeCompare(b.source));
  return out;
}

const translCache = new Map();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function googleTranslate(text, source, target) {
  const key = `${source}|${target}|${text}`;
  if (translCache.has(key)) return translCache.get(key);

  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client', 'gtx');
  url.searchParams.set('sl', source);
  url.searchParams.set('tl', target);
  url.searchParams.set('dt', 't');
  url.searchParams.set('q', text);

  for (let i = 0; i < 1; i += 1) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const translated = (json?.[0] || []).map((row) => row?.[0] || '').join('');
      translCache.set(key, translated);
      return translated;
    } catch {
      if (i === 0) {
        translCache.set(key, text);
        return text;
      }
      await sleep(300 * (i + 1));
    }
  }
  return text;
}

function protectSegments(text) {
  const tokens = [];
  let out = text;
  const patterns = [
    /`[^`]*`/g,
    /https?:\/\/\S+/g,
    /\/storage\/\S+/g,
    /\/images\/\S+/g
  ];

  for (const re of patterns) {
    out = out.replace(re, (m) => {
      const token = `__XDEVTOK${tokens.length}__`;
      tokens.push(m);
      return token;
    });
  }
  return { out, tokens };
}

function restoreSegments(text, tokens) {
  let out = text;
  tokens.forEach((tok, i) => {
    out = out.replaceAll(`__XDEVTOK${i}__`, tok);
  });
  return out;
}

async function translateText(text, source, target) {
  if (!text || !text.trim()) return text;
  const { out, tokens } = protectSegments(text);
  const chunks = [];
  let current = '';
  for (const part of out.split(/(\n\n+)/)) {
    if ((current + part).length > 3200 && current) {
      chunks.push(current);
      current = part;
    } else {
      current += part;
    }
  }
  if (current) chunks.push(current);

  let translated = '';
  for (const c of chunks) {
    translated += await googleTranslate(c, source, target);
  }
  return restoreSegments(translated, tokens);
}

function shouldTranslateKey(pathKeys) {
  const last = pathKeys[pathKeys.length - 1];
  if (last === 'section_title') return true;
  if (pathKeys.length === 1 && ['title', 'description', 'excerpt'].includes(last)) return true;
  if (pathKeys.length >= 2 && pathKeys[pathKeys.length - 2] === 'course' && last === 'title') return true;
  if (pathKeys.includes('sections') && ['title', 'description'].includes(last)) return true;
  return false;
}

async function translateObject(obj, source, target, pathKeys = []) {
  if (Array.isArray(obj)) {
    const out = [];
    for (const item of obj) out.push(await translateObject(item, source, target, [...pathKeys, '[]']));
    return out;
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'locale') {
        out[k] = target === 'zh-TW' ? 'zh-tw' : target;
      } else if (v && typeof v === 'object') {
        out[k] = await translateObject(v, source, target, [...pathKeys, k]);
      } else if (typeof v === 'string' && shouldTranslateKey([...pathKeys, k])) {
        out[k] = await translateText(v, source, target);
      } else {
        out[k] = v;
      }
    }
    return out;
  }
  return obj;
}

async function translateBody(content, source, target) {
  let text = content;
  const protectedTokens = [];

  // Protect fenced code blocks entirely.
  text = text.replace(/```[\s\S]*?```/g, (m) => {
    const token = `__XDEVBLOCK${protectedTokens.length}__`;
    protectedTokens.push(m);
    return token;
  });

  // Protect command-style lines outside code fences.
  text = text.replace(
    /^(\s*(?:\$\s+|kubectl\b|vault\b|docker\b|helm\b|terraform\b|ansible\b|curl\b|aws\b|gcloud\b|az\b).*)$/gm,
    (m) => {
      const token = `__XDEVCMD${protectedTokens.length}__`;
      protectedTokens.push(m);
      return token;
    }
  );

  const translated = await translateText(text, source, target);

  let restored = translated;
  protectedTokens.forEach((tok, i) => {
    restored = restored.replaceAll(`__XDEVBLOCK${i}__`, tok);
    restored = restored.replaceAll(`__XDEVCMD${i}__`, tok);
  });
  return restored;
}

function applyImmutableFields(newData, viData) {
  for (const k of ['id', 'slug', 'sort_order', 'duration_minutes', 'is_free', 'video_url']) {
    if (Object.prototype.hasOwnProperty.call(viData, k)) {
      newData[k] = viData[k];
    }
  }
  if (viData?.course && typeof viData.course === 'object' && Object.prototype.hasOwnProperty.call(viData.course, 'slug')) {
    if (!newData.course || typeof newData.course !== 'object') newData.course = {};
    newData.course.slug = viData.course.slug;
  }
}

async function run() {
  const missing = getMissing();
  let created = 0;

  for (const loc of ['en', 'ja', 'zh-tw']) {
    const pending = missing.filter((x) => x.lacks.includes(loc));
    if (!pending.length) continue;

    const targetLang = loc === 'zh-tw' ? 'zh-TW' : loc;
    console.log(`Locale ${loc}: ${pending.length} files`);

    for (let i = 0; i < pending.length; i += 1) {
      const item = pending[i];
      const rel = path.relative('content/series', item.source);
      const dst = path.join(`content/${loc}/series`, rel);
      if (fs.existsSync(dst)) continue;

      console.log(`  ${loc}: translating ${i + 1}/${pending.length} -> ${rel}`);

      const viRaw = fs.readFileSync(item.source, 'utf8');
      const viParsed = matter(viRaw);

      let sourceRaw = viRaw;
      let sourceLang = 'vi';
      const enPath = path.join('content/en/series', rel);
      if ((loc === 'ja' || loc === 'zh-tw') && fs.existsSync(enPath)) {
        sourceRaw = fs.readFileSync(enPath, 'utf8');
        sourceLang = 'en';
      }

      const srcParsed = matter(sourceRaw);
      const newData = await translateObject(srcParsed.data || {}, sourceLang, targetLang, []);
      applyImmutableFields(newData, viParsed.data || {});
      newData.locale = loc;

      const translatedBody = await translateBody(srcParsed.content || '', sourceLang, targetLang);
      const out = matter.stringify(translatedBody, newData);

      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.writeFileSync(dst, out, 'utf8');
      created += 1;

      if ((i + 1) % 4 === 0 || i + 1 === pending.length) {
        console.log(`  ${loc}: ${i + 1}/${pending.length}`);
      }
    }
  }

  console.log(`CREATED_TOTAL=${created}`);
}

run();
