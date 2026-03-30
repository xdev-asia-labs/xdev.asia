---
id: 019c961a-aa11-7011-e011-aa1100000011
title: "Bài 11: RAG Engine — Retrieval-Augmented Generation"
slug: bai-11-rag-engine
description: >-
  Tích hợp RAG vào Agent: retrieve, rerank, inject context.
  Collections management, hybrid search, web ingestion.
  Analytics & quality metrics.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: RAG Pipeline"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

RAG Engine là orchestrator kết nối Document Processor, Embedding Provider, và Vector Store thành một pipeline hoàn chỉnh. Bài này implement full RAG Engine với ingestion, retrieval, và reranking.

---

## 1. RAG Engine Class

```typescript
// packages/core/src/rag/rag-engine.ts
export class RagEngine {
  private docProcessor: DocumentProcessor;
  private embedding: EmbeddingProvider;
  private vectorStore: VectorStore;
  private webCrawler: WebCrawler;

  constructor(
    docProcessor: DocumentProcessor,
    embedding: EmbeddingProvider,
    vectorStore: VectorStore,
  ) {
    this.docProcessor = docProcessor;
    this.embedding = embedding;
    this.vectorStore = vectorStore;
    this.webCrawler = new WebCrawler();
  }

  // Ingest plain text
  async ingestText(
    text: string,
    collectionId: string,
    metadata?: Record<string, unknown>,
  ): Promise<{ chunksCreated: number }> {
    const chunks = await this.docProcessor.process(text, 'text/plain', {
      source: 'direct-text',
      sourceType: 'text',
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const vectors = await this.embedding.embed(chunks.map(c => c.content));
    const documents: VectorDocument[] = chunks.map((chunk, i) => ({
      id: chunk.id,
      vector: vectors[i],
      content: chunk.content,
      metadata: { ...chunk.metadata, ...metadata, collectionId },
    }));

    await this.vectorStore.upsert(documents);
    return { chunksCreated: chunks.length };
  }

  // Ingest from URL
  async ingestUrl(
    url: string,
    collectionId: string,
  ): Promise<{ chunksCreated: number }> {
    const text = await this.webCrawler.crawl(url);
    const chunks = await this.docProcessor.process(text, 'text/html', {
      source: url,
      sourceType: 'url',
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const vectors = await this.embedding.embed(chunks.map(c => c.content));
    const documents: VectorDocument[] = chunks.map((chunk, i) => ({
      id: chunk.id,
      vector: vectors[i],
      content: chunk.content,
      metadata: { ...chunk.metadata, collectionId },
    }));

    await this.vectorStore.upsert(documents);
    return { chunksCreated: chunks.length };
  }
}
```

---

## 2. Retrieval & Reranking

```typescript
// Retrieve relevant documents
async retrieve(
  query: string,
  collectionId: string,
  options: { topK?: number; minScore?: number } = {},
): Promise<SearchResult[]> {
  const [queryVector] = await this.embedding.embed([query]);

  const results = await this.vectorStore.search(queryVector, {
    collection: collectionId,
    topK: options.topK || 5,
    minScore: options.minScore || 0.7,
    filter: { 'metadata.collectionId': collectionId },
  });

  return results;
}

// Search with reranking — better accuracy
async searchWithReranking(
  query: string,
  collectionId: string,
  options: { topK?: number; rerankTopK?: number } = {},
): Promise<SearchResult[]> {
  // Step 1: Retrieve more candidates
  const candidates = await this.retrieve(query, collectionId, {
    topK: options.rerankTopK || 20,
    minScore: 0.5, // Lower threshold for candidates
  });

  if (candidates.length === 0) return [];

  // Step 2: Rerank using cross-encoder or LLM
  const reranked = await this.rerankResults(query, candidates);

  // Step 3: Return top K
  return reranked.slice(0, options.topK || 5);
}

private async rerankResults(
  query: string,
  candidates: SearchResult[],
): Promise<SearchResult[]> {
  // Simple reranking: score by keyword overlap + vector score
  return candidates
    .map(result => {
      const queryTerms = query.toLowerCase().split(/\s+/);
      const contentLower = result.content.toLowerCase();
      const keywordScore = queryTerms.filter(t => contentLower.includes(t)).length / queryTerms.length;
      const combinedScore = result.score * 0.7 + keywordScore * 0.3;

      return { ...result, score: combinedScore };
    })
    .sort((a, b) => b.score - a.score);
}
```

---

## 3. Collections Management

```typescript
// Collection CRUD
async createCollection(name: string, tenantId: string): Promise<string> {
  const collectionId = crypto.randomUUID();

  await this.vectorStore.createCollection(collectionId);

  // Save metadata to MongoDB
  await this.db.collection('rag_collections').insertOne({
    _id: collectionId,
    name,
    tenantId,
    documentCount: 0,
    chunkCount: 0,
    createdAt: new Date(),
  });

  return collectionId;
}

async listCollections(tenantId: string) {
  return this.db.collection('rag_collections')
    .find({ tenantId })
    .sort({ createdAt: -1 })
    .toArray();
}

async deleteCollection(collectionId: string) {
  await this.vectorStore.delete(
    await this.getChunkIds(collectionId),
  );
  await this.db.collection('rag_collections').deleteOne({ _id: collectionId });
}
```

---

## 4. RAG trong Agent Flow

```typescript
// Khi Agent nhận được message, RAG context được inject:
const ragContext = await ragEngine.searchWithReranking(
  userMessage,
  activeCollectionId,
  { topK: 5 },
);

if (ragContext.length > 0) {
  messages.push({
    role: 'system',
    content: [
      '### Relevant Knowledge Base Context',
      '',
      ...ragContext.map((r, i) =>
        `**[${i + 1}]** (score: ${r.score.toFixed(2)})\n${r.content}`
      ),
      '',
      'Use the above context to answer the user\'s question. Cite sources using [1], [2], etc.',
    ].join('\n'),
  });
}
```

---

## 5. Tổng kết

| Component | Vai trò |
|-----------|---------|
| **DocumentProcessor** | Parse & chunk documents |
| **EmbeddingProvider** | Text → vectors |
| **VectorStore** | Store & search vectors |
| **RAG Engine** | Orchestrate pipeline |
| **Reranking** | Improve retrieval accuracy |

**Bài tiếp theo:** Workflow Engine — Visual automation cho AI tasks.
