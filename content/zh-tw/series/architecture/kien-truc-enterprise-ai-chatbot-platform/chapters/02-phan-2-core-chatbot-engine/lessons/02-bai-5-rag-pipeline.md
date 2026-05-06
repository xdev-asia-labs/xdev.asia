---
id: 019f0b20-b202-7001-e001-f2b8f9000202
title: 第 5 課：RAG 管道 — 向量儲存、分塊、混合搜尋和重新排名
slug: bai-5-rag-pipeline
description: >-
  端對端 RAG
  管道、文件攝取（PDF/HTML/DOCX/代碼）、分塊策略（語意、遞歸、句子視窗）、嵌入模型、向量儲存（Qdrant/Pgvector）、混合搜尋（BM25
  + 語意）、重新排名（Cohere/交叉編碼器）、引文產生。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：核心聊天機器人引擎
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: 企業人工智慧聊天機器人平台架構－從原型到生產
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3905" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3905)"/>

  <!-- Decorations -->
  <g>
    <circle cx="618" cy="224" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="636" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="654" cy="180" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="672" cy="158" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="164" x2="1100" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="194" x2="1050" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="947.7749907475932,94.5 947.7749907475932,133.5 914,153 880.2250092524068,133.5 880.2250092524068,94.50000000000001 914,75" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ 建築 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：RAG 管道 — 向量存儲，</tspan>
      <tspan x="60" dy="42">分塊、混合搜尋和重新排名</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">企業人工智慧聊天機器人平台架構－從原型到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：核心聊天機器人引擎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-rag-overview"><strong>1. AI 聊天機器人中的 RAG－為什麼需要它？</strong></h2>

<p>LLM只知道訓練資料。聊天機器人企業需要根據以下情況做出回應 <strong>私人數據</strong> 組織的資訊：文件、政策、產品資訊、常見問題。 RAG（檢索增強生成）解決了這個問題。</p>

<pre><code class="language-text">
┌──────────────────────── RAG PIPELINE ────────────────────────────┐
│                                                                    │
│  INGESTION (Offline)                  RETRIEVAL (Online)           │
│  ┌──────────┐                         ┌──────────┐                │
│  │ Documents│──▶ Parse ──▶ Chunk ──▶  │  Query   │                │
│  │ PDF/HTML │     │          │     │   │          │                │
│  │ DOCX/MD  │     ▼          ▼     │   └────┬─────┘                │
│  └──────────┘   Clean     Embed   │        │                      │
│                   │          │     │   ┌────▼─────┐                │
│                   ▼          ▼     │   │  Hybrid  │                │
│               ┌──────┐  ┌──────┐  │   │  Search  │                │
│               │ BM25 │  │Vector│  │   │BM25+Embd │                │
│               │Index │  │Store │  │   └────┬─────┘                │
│               └──────┘  └──────┘  │        │                      │
│                                   │   ┌────▼─────┐                │
│                                   │   │ Re-rank  │                │
│                                   │   └────┬─────┘                │
│                                   │        │                      │
│                                   │   ┌────▼─────┐ ┌──────────┐  │
│                                   │   │  Format  │─▶│ Citation │  │
│                                   │   │ Context  │ │ Generate │  │
│                                   │   └──────────┘ └──────────┘  │
└──────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-document-ingestion"><strong>2. 文件攝取管道</strong></h2>

<pre><code class="language-typescript">
interface DocumentParser {
  parse(input: Buffer, mimeType: string): Promise&lt;ParsedDocument&gt;;
}

interface ParsedDocument {
  title: string;
  content: string;         // Plain text content
  sections: Section[];     // Structured sections with headings
  metadata: {
    source: string;
    mimeType: string;
    pageCount?: number;
    lastModified?: Date;
    language?: string;
  };
}

class IngestionPipeline {
  private parsers: Map&lt;string, DocumentParser&gt; = new Map([
    ['application/pdf', new PDFParser()],
    ['text/html', new HTMLParser()],
    ['text/markdown', new MarkdownParser()],
    ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', new DOCXParser()],
    ['text/plain', new PlainTextParser()],
    ['application/json', new JSONParser()],
  ]);

  async ingest(
    tenantId: string,
    knowledgeBaseId: string,
    file: UploadedFile,
  ): Promise&lt;IngestionResult&gt; {
    // 1. Parse document
    const parser = this.parsers.get(file.mimeType);
    if (!parser) throw new UnsupportedFormatError(file.mimeType);
    const parsed = await parser.parse(file.buffer, file.mimeType);

    // 2. Clean text
    const cleaned = this.cleanText(parsed.content);

    // 3. Chunk
    const chunks = await this.chunker.chunk(cleaned, {
      strategy: 'recursive',
      chunkSize: 512,
      chunkOverlap: 50,
    });

    // 4. Generate embeddings
    const embeddings = await this.embeddingService.embedBatch(
      chunks.map(c =&gt; c.content),
    );

    // 5. Store in vector database
    const points = chunks.map((chunk, i) =&gt; ({
      id: crypto.randomUUID(),
      vector: embeddings[i],
      payload: {
        tenantId,
        knowledgeBaseId,
        documentId: file.id,
        content: chunk.content,
        chunkIndex: i,
        metadata: {
          title: parsed.title,
          section: chunk.section,
          source: file.name,
          pageNumber: chunk.pageNumber,
        },
      },
    }));

    await this.vectorStore.upsert('knowledge_chunks', points);

    // 6. Index for BM25 full-text search
    await this.bm25Index.index(points.map(p =&gt; ({
      id: p.id,
      content: p.payload.content,
      metadata: p.payload.metadata,
    })));

    return {
      documentId: file.id,
      chunksCreated: chunks.length,
      totalTokens: chunks.reduce((sum, c) =&gt; sum + c.tokenCount, 0),
    };
  }

  private cleanText(text: string): string {
    return text
      .replace(/\s+/g, ' ')           // Normalize whitespace
      .replace(/\n{3,}/g, '\n\n')     // Max 2 newlines
      .replace(/[^\S\n]+/g, ' ')      // Collapse spaces (keep newlines)
      .trim();
  }
}
</code></pre>

<h2 id="3-chunking"><strong>3. 分塊策略</strong></h2>

<table>
<thead>
<tr><th>策略</th><th>它是如何運作的</th><th>最適合</th></tr>
</thead>
<tbody>
<tr><td><strong>固定尺寸</strong></td><td>每 N 個代幣進行分割</td><td>簡單、通用</td></tr>
<tr><td><strong>遞迴</strong></td><td>按標題→段落→句子分割</td><td>結構化文件</td></tr>
<tr><td><strong>語意學</strong></td><td>當嵌入相似度下降時進行分割</td><td>非結構化的敘述性文本</td></tr>
<tr><td><strong>句子視窗</strong></td><td>塊=句子，上下文=周圍的句子</td><td>精準檢索+上下文</td></tr>
<tr><td><strong>親子</strong></td><td>用於搜尋的小塊，傳回上下文的父級</td><td>長文件</td></tr>
</tbody>
</table>

<pre><code class="language-typescript">
class RecursiveChunker {
  private readonly SEPARATORS = [
    '\n## ',   // H2 headers
    '\n### ',  // H3 headers
    '\n\n',    // Paragraphs
    '\n',      // Lines
    '. ',      // Sentences
    ' ',       // Words
  ];

  async chunk(
    text: string,
    config: { chunkSize: number; chunkOverlap: number },
  ): Promise&lt;Chunk[]&gt; {
    return this.recursiveSplit(text, this.SEPARATORS, config);
  }

  private recursiveSplit(
    text: string,
    separators: string[],
    config: { chunkSize: number; chunkOverlap: number },
  ): Chunk[] {
    if (text.length &lt;= config.chunkSize) {
      return [{ content: text, tokenCount: this.estimateTokens(text) }];
    }

    const separator = separators[0];
    const parts = text.split(separator);

    const chunks: Chunk[] = [];
    let currentChunk = '';

    for (const part of parts) {
      const candidate = currentChunk
        ? currentChunk + separator + part
        : part;

      if (this.estimateTokens(candidate) &gt; config.chunkSize) {
        if (currentChunk) {
          chunks.push({
            content: currentChunk.trim(),
            tokenCount: this.estimateTokens(currentChunk),
          });
        }

        if (this.estimateTokens(part) &gt; config.chunkSize &amp;&amp; separators.length &gt; 1) {
          // Recursively split with next separator
          chunks.push(...this.recursiveSplit(part, separators.slice(1), config));
        } else {
          currentChunk = part;
        }
      } else {
        currentChunk = candidate;
      }
    }

    if (currentChunk) {
      chunks.push({
        content: currentChunk.trim(),
        tokenCount: this.estimateTokens(currentChunk),
      });
    }

    return this.addOverlap(chunks, config.chunkOverlap);
  }

  private estimateTokens(text: string): number {
    return Math.ceil(text.length / 4); // Rough estimate
  }
}
</code></pre>

<h2 id="4-hybrid-search"><strong>4. 混合搜尋——BM25 + 語意</strong></h2>

<pre><code class="language-typescript">
class HybridSearchEngine {
  constructor(
    private vectorStore: VectorStore,   // Qdrant
    private bm25Index: BM25Index,       // Elasticsearch/Meilisearch
    private embeddingService: EmbeddingService,
  ) {}

  async search(
    query: string,
    options: SearchOptions,
  ): Promise&lt;SearchResult[]&gt; {
    // Run both searches in parallel
    const queryEmbedding = await this.embeddingService.embed(query);

    const [semanticResults, bm25Results] = await Promise.all([
      this.vectorStore.search({
        collection: 'knowledge_chunks',
        vector: queryEmbedding,
        filter: {
          tenantId: options.tenantId,
          knowledgeBaseId: options.knowledgeBaseId,
        },
        limit: options.topK * 2,
      }),
      this.bm25Index.search({
        query,
        filter: {
          tenantId: options.tenantId,
          knowledgeBaseId: options.knowledgeBaseId,
        },
        limit: options.topK * 2,
      }),
    ]);

    // Reciprocal Rank Fusion (RRF) to combine results
    return this.reciprocalRankFusion(semanticResults, bm25Results, options.topK);
  }

  private reciprocalRankFusion(
    semanticResults: SearchResult[],
    bm25Results: SearchResult[],
    topK: number,
    k: number = 60, // RRF constant
  ): SearchResult[] {
    const scoreMap = new Map&lt;string, { result: SearchResult; score: number }&gt;();

    // Score semantic results
    semanticResults.forEach((result, rank) =&gt; {
      const rrf = 1 / (k + rank + 1);
      const existing = scoreMap.get(result.id);
      if (existing) {
        existing.score += rrf;
      } else {
        scoreMap.set(result.id, { result, score: rrf });
      }
    });

    // Score BM25 results
    bm25Results.forEach((result, rank) =&gt; {
      const rrf = 1 / (k + rank + 1);
      const existing = scoreMap.get(result.id);
      if (existing) {
        existing.score += rrf;
      } else {
        scoreMap.set(result.id, { result, score: rrf });
      }
    });

    // Sort by combined RRF score
    return Array.from(scoreMap.values())
      .sort((a, b) =&gt; b.score - a.score)
      .slice(0, topK)
      .map(entry =&gt; ({ ...entry.result, score: entry.score }));
  }
}
</code></pre>

<h2 id="5-reranking"><strong>5. 重新排序－交叉編碼器</strong></h2>

<pre><code class="language-typescript">
interface ReRanker {
  rerank(query: string, documents: SearchResult[], topK: number): Promise&lt;SearchResult[]&gt;;
}

class CohereReRanker implements ReRanker {
  constructor(private apiKey: string) {}

  async rerank(
    query: string,
    documents: SearchResult[],
    topK: number,
  ): Promise&lt;SearchResult[]&gt; {
    const response = await fetch('https://api.cohere.ai/v1/rerank', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'rerank-english-v3.0',
        query,
        documents: documents.map(d =&gt; d.content),
        top_n: topK,
        return_documents: false,
      }),
    });

    const data = await response.json();

    return data.results.map((r: { index: number; relevance_score: number }) =&gt; ({
      ...documents[r.index],
      score: r.relevance_score,
    }));
  }
}
</code></pre>

<h2 id="6-citation"><strong>6. 引文生成</strong></h2>

<pre><code class="language-typescript">
class CitationGenerator {
  formatContextWithCitations(results: SearchResult[]): {
    context: string;
    citations: Citation[];
  } {
    const citations: Citation[] = [];

    const context = results
      .map((result, index) =&gt; {
        const citationId = `[${index + 1}]`;
        citations.push({
          id: citationId,
          documentId: result.metadata.documentId,
          chunkId: result.id,
          content: result.content.substring(0, 200),
          source: result.metadata.source,
          pageNumber: result.metadata.pageNumber,
          score: result.score,
        });

        return `${citationId} ${result.content}`;
      })
      .join('\n\n');

    return { context, citations };
  }

  // System prompt instruction for citation
  getCitationInstruction(): string {
    return `When answering, cite sources using [1], [2], etc.
Only cite information that directly comes from the provided context.
If the context doesn't contain the answer, say you don't have enough information.
Do NOT make up information or citations.`;
  }
}
</code></pre>

<h2 id="7-full-rag-pipeline"><strong>7. 完整的RAG管道服務</strong></h2>

<pre><code class="language-typescript">
class RAGPipeline {
  constructor(
    private searchEngine: HybridSearchEngine,
    private reRanker: ReRanker,
    private citationGenerator: CitationGenerator,
    private queryTransformer: QueryTransformer,
  ) {}

  async search(
    query: string,
    options: RAGOptions,
  ): Promise&lt;RAGResult&gt; {
    // 1. Query transformation (expand, decompose, HyDE)
    const transformedQuery = await this.queryTransformer.transform(query);

    // 2. Hybrid search (BM25 + Semantic)
    const searchResults = await this.searchEngine.search(transformedQuery, {
      tenantId: options.tenantId,
      knowledgeBaseId: options.knowledgeBaseId,
      topK: 20, // Retrieve more for re-ranking
    });

    // 3. Re-rank
    const reranked = await this.reRanker.rerank(query, searchResults, options.topK ?? 5);

    // 4. Format with citations
    const { context, citations } = this.citationGenerator.formatContextWithCitations(reranked);

    return { context, citations, totalResults: searchResults.length };
  }
}
</code></pre>

<h2 id="tong-ket"><strong>第 5 課總結</strong></h2>

<table>
<thead>
<tr><th>舞台</th><th>組件</th><th>關鍵決策</th></tr>
</thead>
<tbody>
<tr><td><strong>食入</strong></td><td>解析器 + 分塊器 + 嵌入器</td><td>區塊大小 512 個標記，50 個重疊</td></tr>
<tr><td><strong>儲存</strong></td><td>向量存儲 + BM25 索引</td><td>Qdrant 用於語義，Meilisearch 用於關鍵字</td></tr>
<tr><td><strong>檢索</strong></td><td>混合搜尋</td><td>用於合併分數的 RRF 融合 (k=60)</td></tr>
<tr><td><strong>重新排名</strong></td><td>交叉編碼器</td><td>Cohere rerank-v3 或本地交叉編碼器</td></tr>
<tr><td><strong>引文</strong></td><td>引文產生器</td><td>內嵌引用 [1][2] 以及來源鏈接</td></tr>
</tbody>
</table>

<p><strong>下一篇：</strong> 提示工程引擎－模板系統、思維鏈、動態提示組裝、角色管理和提示A/B測試。</p>
