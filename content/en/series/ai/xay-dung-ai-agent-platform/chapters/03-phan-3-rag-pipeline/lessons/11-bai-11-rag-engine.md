---
id: 019c961a-aa11-7011-e011-aa1100000011
title: 'Lesson 11: RAG Engine — Retrieval-Augmented Generation'
slug: bai-11-rag-engine
description: >-
  Integrate RAG into Agent: retrieve, rerank, inject context. Collections
  management, hybrid search, web ingestion. Analytics & quality metrics.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: RAG Pipeline'
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: Building AI Agent Platform from Zero — Real battle with xClaw
  slug: xay-dung-ai-agent-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9537" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9537)"/>

  <!-- Decorations -->
  <g>
    <circle cx="743" cy="259" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="886" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1029" cy="65" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="672" cy="228" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="131" r="32" fill="#c084fc" opacity="0.1"/>
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
    <polygon points="977.1051177665153,117 977.1051177665153,161 939,183 900.8948822334847,161 900.8948822334847,117.00000000000001 939,95" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🧠 AI & ML — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: RAG Engine — Retrieval-Augmented</tspan>
      <tspan x="60" dy="42">Generation</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Building AI Agent Platform from Zero — Real battle with xClaw</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: RAG Pipeline</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

RAG Engine is the orchestrator that connects the Document Processor, Embedding Provider, and Vector Store into a complete pipeline. This article implements the full RAG Engine with ingestion, retrieval, and reranking.

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

## 4. RAG in Agent Flow

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

## 5. Summary

| Components | Role |
|-----------|---------|
| **DocumentProcessor** | Parse & chunk documents |
| **EmbeddingProvider** | Text → vectors |
| **VectorStore** | Store & search vectors |
| **RAG Engine** | Orchestrate pipeline |
| **Reranking** | Improve retrieval accuracy |

**Next article:** Workflow Engine — Visual automation for AI tasks.
