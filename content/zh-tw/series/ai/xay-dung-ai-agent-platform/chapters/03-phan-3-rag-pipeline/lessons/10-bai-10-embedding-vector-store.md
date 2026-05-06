---
id: 019c961a-aa10-7010-e010-aa1000000010
title: 第 10 課：嵌入與向量存儲
slug: bai-10-embedding-vector-store
description: 文字嵌入：OpenAI、本地模型。使用 MongoDB Atlas Search 或 ChromaDB 進行向量儲存抽象化。相似性搜尋、索引策略、批次嵌入。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：RAG 管道
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9856" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9856)"/>

  <!-- Decorations -->
  <g>
    <circle cx="808" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1016" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="724" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="932" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="234" x2="1100" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="264" x2="1050" y2="334" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="959.1147367097487,119.5 959.1147367097487,148.5 934,163 908.8852632902513,148.5 908.8852632902513,119.50000000000001 934,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🧠 人工智慧與機器學習 — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：嵌入與向量存儲</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：RAG 管道</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

對文件進行分塊後，需要將文字轉換為向量（嵌入）並將其儲存到向量儲存中以進行相似性搜尋。本文實現了嵌入管道和向量存儲抽象。

---

## 1. 嵌入接口

```typescript
// packages/core/src/rag/embedding.ts
export interface EmbeddingProvider {
  embed(texts: string[]): Promise<number[][]>;
  readonly dimensions: number;
  readonly model: string;
}

export class OpenAIEmbedding implements EmbeddingProvider {
  readonly dimensions = 1536;
  readonly model = 'text-embedding-3-small';
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({ apiKey });
  }

  async embed(texts: string[]): Promise<number[][]> {
    // Batch processing — max 2048 texts per request
    const batches: string[][] = [];
    for (let i = 0; i < texts.length; i += 2048) {
      batches.push(texts.slice(i, i + 2048));
    }

    const allEmbeddings: number[][] = [];
    for (const batch of batches) {
      const response = await this.client.embeddings.create({
        model: this.model,
        input: batch,
      });
      allEmbeddings.push(...response.data.map(d => d.embedding));
    }

    return allEmbeddings;
  }
}
```

---

## 2.向量儲存抽象

```typescript
// packages/core/src/rag/vector-store.ts
export interface VectorStore {
  upsert(documents: VectorDocument[]): Promise<void>;
  search(query: number[], options: SearchOptions): Promise<SearchResult[]>;
  delete(ids: string[]): Promise<void>;
  createCollection(name: string): Promise<void>;
}

export interface VectorDocument {
  id: string;
  vector: number[];
  content: string;
  metadata: Record<string, unknown>;
}

export interface SearchResult {
  id: string;
  content: string;
  score: number;
  metadata: Record<string, unknown>;
}

export interface SearchOptions {
  collection: string;
  topK: number;
  filter?: Record<string, unknown>;
  minScore?: number;
}
```

---

## 3. MongoDB Atlas向量搜尋

```typescript
// packages/core/src/rag/stores/mongodb-vector-store.ts
export class MongoDBVectorStore implements VectorStore {
  private db: Db;

  constructor(db: Db) {
    this.db = db;
  }

  async createCollection(name: string): Promise<void> {
    const collection = this.db.collection(name);

    // Create vector search index
    await collection.createSearchIndex({
      name: 'vector_index',
      definition: {
        mappings: {
          dynamic: true,
          fields: {
            vector: {
              type: 'knnVector',
              dimensions: 1536,
              similarity: 'cosine',
            },
          },
        },
      },
    });
  }

  async upsert(documents: VectorDocument[]): Promise<void> {
    const ops = documents.map(doc => ({
      updateOne: {
        filter: { _id: doc.id },
        update: {
          $set: {
            vector: doc.vector,
            content: doc.content,
            metadata: doc.metadata,
            updatedAt: new Date(),
          },
        },
        upsert: true,
      },
    }));

    await this.db.collection('vectors').bulkWrite(ops);
  }

  async search(query: number[], options: SearchOptions): Promise<SearchResult[]> {
    const results = await this.db.collection(options.collection).aggregate([
      {
        $vectorSearch: {
          index: 'vector_index',
          path: 'vector',
          queryVector: query,
          numCandidates: options.topK * 10,
          limit: options.topK,
          filter: options.filter,
        },
      },
      {
        $project: {
          content: 1,
          metadata: 1,
          score: { $meta: 'vectorSearchScore' },
        },
      },
    ]).toArray();

    return results
      .filter(r => !options.minScore || r.score >= options.minScore)
      .map(r => ({
        id: r._id.toString(),
        content: r.content,
        score: r.score,
        metadata: r.metadata,
      }));
  }

  async delete(ids: string[]): Promise<void> {
    await this.db.collection('vectors').deleteMany({
      _id: { $in: ids },
    });
  }
}
```

---

## 4. 批次嵌入管道

```typescript
export async function embedAndStore(
  chunks: DocumentChunk[],
  embedding: EmbeddingProvider,
  vectorStore: VectorStore,
  collection: string,
): Promise<void> {
  // Embed in batches of 100
  const BATCH_SIZE = 100;

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const texts = batch.map(c => c.content);

    console.log(`Embedding batch ${i / BATCH_SIZE + 1}/${Math.ceil(chunks.length / BATCH_SIZE)}`);

    const vectors = await embedding.embed(texts);

    const documents: VectorDocument[] = batch.map((chunk, j) => ({
      id: chunk.id,
      vector: vectors[j],
      content: chunk.content,
      metadata: chunk.metadata,
    }));

    await vectorStore.upsert(documents);
  }
}
```

---

## 5. 總結

- **Embedding Provider** — OpenAI、Cohere、本地模型的抽象
- **向量儲存** — MongoDB Atlas 搜尋或 ChromaDB
- **批次** — 批次處理區塊以避免速率限制
- **餘弦相似度** - 文字嵌入最常見的距離測量

**下一篇文章：** RAG 引擎 — 將檢索整合到代理流程中。
