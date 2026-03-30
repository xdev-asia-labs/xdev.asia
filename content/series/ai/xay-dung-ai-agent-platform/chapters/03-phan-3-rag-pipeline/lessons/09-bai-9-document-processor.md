---
id: 019c961a-aa09-7009-e009-aa0900000009
title: "Bài 9: Document Processor — Chunking & Parsing"
slug: bai-9-document-processor
description: >-
  Xử lý tài liệu cho RAG: PDF/DOCX/CSV/Markdown parsing.
  Chunking strategies: fixed-size, semantic, recursive. Metadata
  extraction, deduplication.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: RAG Pipeline"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

RAG (Retrieval-Augmented Generation) bắt đầu từ việc xử lý tài liệu — chia documents thành chunks nhỏ có nghĩa để embedding và retrieval. Bài này implement Document Processor từ đầu.

---

## 1. Document Types & Parsers

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

## 2. Chunking Strategies

### 2.1 Fixed-size Chunking

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

### 2.2 Recursive Chunking

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

## 3. Web Crawler

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

## 4. Tổng kết

| Strategy | Khi nào dùng |
|----------|-------------|
| **Fixed-size** | Simple, predictable chunks — good default |
| **Recursive** | Structured docs (markdown, code) — preserves structure |
| **Semantic** | Research papers — needs embedding model |

**Bài tiếp theo:** Embedding & Vector Store — Chuyển text thành vectors.
