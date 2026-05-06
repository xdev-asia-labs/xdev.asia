import fs from 'node:fs';
import matter from 'gray-matter';

const src = 'content/en/series/devsecops/hashicorp-vault-tu-co-ban-den-nang-cao/index.md';
const dst = 'content/zh-tw/series/devsecops/hashicorp-vault-tu-co-ban-den-nang-cao/index.md';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function tr(text) {
  if (!text || !text.trim()) return text;
  const chunks = [];
  let cur = '';
  for (const part of text.split(/(\n\n+)/)) {
    if ((cur + part).length > 3200 && cur) { chunks.push(cur); cur = part; }
    else cur += part;
  }
  if (cur) chunks.push(cur);

  let out = '';
  for (const c of chunks) {
    const url = new URL('https://translate.googleapis.com/translate_a/single');
    url.searchParams.set('client','gtx');
    url.searchParams.set('sl','en');
    url.searchParams.set('tl','zh-TW');
    url.searchParams.set('dt','t');
    url.searchParams.set('q',c);
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timer);
      const json = await res.json();
      out += (json?.[0] || []).map(r => r?.[0] || '').join('');
    } catch {
      out += c;
      await sleep(100);
    }
  }
  return out;
}

async function main() {
  const raw = fs.readFileSync(src, 'utf8');
  const parsed = matter(raw);
  const d = parsed.data;
  d.locale = 'zh-tw';
  if (d.title) d.title = await tr(d.title);
  if (d.description) d.description = await tr(d.description);
  if (d.section_title) d.section_title = await tr(d.section_title);
  if (d.course?.title) d.course.title = await tr(d.course.title);
  if (Array.isArray(d.sections)) {
    for (const s of d.sections) {
      if (s.title) s.title = await tr(s.title);
      if (Array.isArray(s.lessons)) {
        for (const l of s.lessons) {
          if (l.title) l.title = await tr(l.title);
          if (l.description) l.description = await tr(l.description);
        }
      }
    }
  }
  const content = await tr(parsed.content || '');
  fs.mkdirSync('content/zh-tw/series/devsecops/hashicorp-vault-tu-co-ban-den-nang-cao', { recursive: true });
  fs.writeFileSync(dst, matter.stringify(content, d), 'utf8');
  console.log('done');
}

main();
