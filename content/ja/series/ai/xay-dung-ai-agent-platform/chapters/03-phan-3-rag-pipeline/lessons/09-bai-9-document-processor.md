---
id: 019c961a-aa09-7009-e009-aa0900000009
title: 'レッスン 9: ドキュメント プロセッサ — チャンキングと解析'
slug: bai-9-document-processor
description: >-
  RAG のドキュメント処理: PDF/DOCX/CSV/Markdown 解析。チャンク戦略:
  固定サイズ、セマンティック、再帰的。メタデータの抽出、重複排除。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: RAG パイプライン'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: AIエージェントプラットフォームをゼロから構築 — xClawとの実戦
  slug: xay-dung-ai-agent-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7622" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7622)"/>

  <!-- Decorations -->
  <g>
    <circle cx="943" cy="179" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="629" cy="105" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="68" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="89" x2="1100" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="119" x2="1050" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.1051177665154,167 1027.1051177665154,211 989,233 950.8948822334847,211 950.8948822334847,167 989,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI と ML — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: ドキュメント プロセッサ — チャンク化と</tspan>
      <tspan x="60" dy="42">解析中</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AIエージェントプラットフォームをゼロから構築 — xClawとの実戦</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: RAG パイプライン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

RAG (検索拡張生成) はドキュメント処理から始まり、埋め込みと検索のためにドキュメントを意味のある小さなチャンクに分割します。この記事では、Document Processor を最初から実装します。

---

## 1. ドキュメントタイプとパーサー

```typescript
// packages/core/src/rag/document-processor.ts
export interface DocumentChunk {
  id: string;
  content: string;
  metadata: {
    source: string;
    sourceType: 'file' | 'url' | 'text';
    title?: string;
    pageNumber?: number;
    chunkIndex: number;
    totalChunks: number;
  };
}

export class DocumentProcessor {
  private parsers: Map<string, DocumentParser> = new Map();

  constructor() {
    this.parsers.set('text/plain', new TextParser());
    this.parsers.set('text/markdown', new MarkdownParser());
    this.parsers.set('text/csv', new CsvParser());
    this.parsers.set('application/pdf', new PdfParser());
    this.parsers.set('text/html', new HtmlParser());
  }

  async process(
    input: string | Buffer,
    mimeType: string,
    options: ChunkOptions = {},
  ): Promise<DocumentChunk[]> {
    const parser = this.parsers.get(mimeType);
    if (!parser) throw new Error(`Unsupported type: ${mimeType}`);

    // Step 1: Parse to plain text
    const text = await parser.parse(input);

    // Step 2: Clean text
    const cleaned = this.cleanText(text);

    // Step 3: Chunk
    const chunks = this.chunk(cleaned, options);

    // Step 4: Add metadata
    return chunks.map((content, i) => ({
      id: crypto.randomUUID(),
      content,
      metadata: {
        source: options.source || 'unknown',
        sourceType: options.sourceType || 'text',
        chunkIndex: i,
        totalChunks: chunks.length,
      },
    }));
  }

  private cleanText(text: string): string {
    return text
      .replace(/\r\n/g, '\n')           // Normalize line endings
      .replace(/\n{3,}/g, '\n\n')       // Max 2 newlines
      .replace(/[ \t]+/g, ' ')          // Normalize whitespace
      .trim();
  }
}
```

---

## 2. チャンク戦略

### 2.1 固定サイズのチャンク化

```typescript
interface ChunkOptions {
  strategy?: 'fixed' | 'semantic' | 'recursive';
  chunkSize?: number;     // characters
  chunkOverlap?: number;  // overlap characters
  source?: string;
  sourceType?: 'file' | 'url' | 'text';
}

private chunkFixed(text: string, size: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    let end = start + size;

    // Don't break mid-word — find nearest sentence/paragraph boundary
    if (end < text.length) {
      const boundarySearch = text.slice(end - 50, end + 50);
      const sentenceEnd = boundarySearch.search(/[.!?]\s/);
      if (sentenceEnd !== -1) {
        end = end - 50 + sentenceEnd + 2;
      }
    }

    chunks.push(text.slice(start, end).trim());
    start = end - overlap;
  }

  return chunks.filter(c => c.length > 50); // Skip tiny chunks
}
```

### 2.2 再帰的チャンク化

```typescript
private chunkRecursive(text: string, size: number): string[] {
  // Try splitting by largest separator first
  const separators = ['\n\n', '\n', '. ', ', ', ' '];

  for (const sep of separators) {
    const parts = text.split(sep);
    if (parts.every(p => p.length <= size)) {
      return this.mergeParts(parts, size, sep);
    }
  }

  // Fallback: fixed-size
  return this.chunkFixed(text, size, Math.floor(size * 0.1));
}

private mergeParts(parts: string[], maxSize: number, sep: string): string[] {
  const chunks: string[] = [];
  let current = '';

  for (const part of parts) {
    if ((current + sep + part).length > maxSize && current) {
      chunks.push(current.trim());
      current = part;
    } else {
      current = current ? current + sep + part : part;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}
```

---

## 3. Web クローラー

```typescript
// packages/core/src/rag/web-crawler.ts
export class WebCrawler {
  async crawl(url: string, options: CrawlOptions = {}): Promise<string> {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'xClaw-Bot/1.0' },
      signal: AbortSignal.timeout(30_000),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const html = await response.text();
    return this.extractText(html);
  }

  private extractText(html: string): string {
    // Remove scripts, styles, nav, footer
    const cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<[^>]+>/g, ' ')          // Strip remaining tags
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ');

    return cleaned.trim();
  }
}
```

---

## 4. まとめ

|戦略 |いつ使用するか |
|----------|---------------|
| **固定サイズ** |シンプルで予測可能なチャンク — 適切なデフォルト |
| **再帰的** |構造化ドキュメント (マークダウン、コード) — 構造を保持 |
| **セマンティック** |研究論文 - 埋め込みモデルが必要 |

**次の記事:** 埋め込みとベクター ストア — テキストをベクターに変換します。
