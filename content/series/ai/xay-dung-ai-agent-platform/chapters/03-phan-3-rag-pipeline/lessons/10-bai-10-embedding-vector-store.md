---
id: 019c961a-aa10-7010-e010-aa1000000010
title: "Bài 10: Embedding & Vector Store"
slug: bai-10-embedding-vector-store
description: >-
  Text embeddings: OpenAI, local models. Vector store abstraction
  với MongoDB Atlas Search hoặc ChromaDB. Similarity search,
  indexing strategies, batch embedding.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: RAG Pipeline"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Sau khi chunk documents, cần chuyển text thành vectors (embeddings) và lưu vào vector store để similarity search. Bài này implement embedding pipeline và vector store abstraction.

---

## 1. Embedding Interface

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

## 2. Vector Store Abstraction

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

## 3. MongoDB Atlas Vector Search

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

## 4. Batch Embedding Pipeline

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

## 5. Tổng kết

- **Embedding Provider** — abstraction cho OpenAI, Cohere, local models
- **Vector Store** — MongoDB Atlas Search hoặc ChromaDB
- **Batch processing** — xử lý chunks theo batches để tránh rate limits
- **Cosine similarity** — distance metric phổ biến nhất cho text embeddings

**Bài tiếp theo:** RAG Engine — Tích hợp retrieval vào Agent flow.
