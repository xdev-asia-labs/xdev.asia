---
id: 019f0b20-b402-7001-e001-f2b8f9000402
title: 'Bài 13: Knowledge Base Management — Document Ingestion, Lifecycle & Access Control'
slug: bai-13-knowledge-base-management
description: >-
  Document ingestion pipeline, multi-format parsing (PDF/DOCX/HTML/Confluence),
  knowledge lifecycle management, version control, access control per document,
  incremental sync, stale content detection.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Enterprise Features & Safety"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3956" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3956)"/>

  <!-- Decorations -->
  <g>
    <circle cx="600" cy="230" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="190" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 13: Knowledge Base Management —</tspan>
      <tspan x="60" dy="42">Document Ingestion, Lifecycle &amp; Access</tspan>
      <tspan x="60" dy="42">Control</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Enterprise Features &amp; Safety</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-knowledge-management"><strong>1. Knowledge Base Management — Beyond RAG</strong></h2>

<p>RAG pipeline (Bài 5) giải quyết <strong>retrieval</strong>. Nhưng enterprise cần quản lý <strong>lifecycle</strong> of knowledge — ingestion từ nhiều nguồn, versioning, access control, stale content detection, multi-tenant isolation.</p>

<pre><code class="language-text">
┌──────────── KNOWLEDGE BASE MANAGEMENT ────────────────┐
│                                                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │Confluence│ │SharePoint│ │  Google  │ │  Upload  │  │
│  │          │ │          │ │  Drive   │ │  (API)   │  │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘  │
│       └─────────────┼───────────┘             │        │
│                     ▼                         │        │
│  ┌──────────────────────────────────────────┐ │        │
│  │          CONNECTOR FRAMEWORK             │◀┘        │
│  │  (Sync, Transform, Deduplicate)          │          │
│  └─────────────────┬────────────────────────┘          │
│                    │                                   │
│  ┌─────────────────▼────────────────────────┐          │
│  │          PROCESSING PIPELINE             │          │
│  │  Parse → Clean → Chunk → Embed → Index   │          │
│  └─────────────────┬────────────────────────┘          │
│                    │                                   │
│  ┌─────────────────▼────────────────────────┐          │
│  │          KNOWLEDGE STORE                 │          │
│  │  PostgreSQL (metadata) + Vector DB       │          │
│  │  + Access Control + Version History      │          │
│  └──────────────────────────────────────────┘          │
└────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-connector-framework"><strong>2. Connector Framework — Multi-Source Ingestion</strong></h2>

<pre><code class="language-typescript">
interface KnowledgeConnector {
  id: string;
  name: string;
  type: 'confluence' | 'sharepoint' | 'gdrive' | 'notion' | 's3' | 'api';
  sync(config: ConnectorConfig): AsyncIterable&lt;RawDocument&gt;;
  getChanges(since: Date): AsyncIterable&lt;DocumentChange&gt;;
}

class ConfluenceConnector implements KnowledgeConnector {
  id = 'confluence';
  name = 'Atlassian Confluence';
  type = 'confluence' as const;

  async *sync(config: ConnectorConfig): AsyncIterable&lt;RawDocument&gt; {
    const spaces = config.spaces ?? ['ALL'];

    for (const space of spaces) {
      let start = 0;
      const limit = 50;

      while (true) {
        const response = await this.client.get(`/wiki/api/v2/spaces/${space}/pages`, {
          params: { start, limit, body_format: 'storage' },
        });

        for (const page of response.data.results) {
          yield {
            sourceId: `confluence:${page.id}`,
            title: page.title,
            content: page.body.storage.value,
            contentType: 'html',
            metadata: {
              space: space,
              author: page.version.authorId,
              lastModified: page.version.createdAt,
              version: page.version.number,
              labels: page.labels?.results?.map(l =&gt; l.name) ?? [],
              url: `${config.baseUrl}/wiki${page._links.webui}`,
            },
          };
        }

        if (response.data.results.length &lt; limit) break;
        start += limit;
      }
    }
  }

  async *getChanges(since: Date): AsyncIterable&lt;DocumentChange&gt; {
    // Use Confluence audit log for incremental sync
    const auditRecords = await this.client.get('/wiki/rest/api/audit', {
      params: {
        startDate: since.toISOString(),
        searchString: 'page',
      },
    });

    for (const record of auditRecords.data.results) {
      yield {
        type: record.action === 'page_removed' ? 'deleted' : 'updated',
        sourceId: `confluence:${record.affectedObject.objectId}`,
        timestamp: new Date(record.creationDate),
      };
    }
  }
}

class ConnectorOrchestrator {
  async syncAll(tenantId: string): Promise&lt;SyncReport&gt; {
    const connectors = await this.getConnectors(tenantId);
    const report: SyncReport = { processed: 0, created: 0, updated: 0, deleted: 0, errors: 0 };

    for (const connector of connectors) {
      const lastSync = await this.getLastSyncTime(tenantId, connector.id);

      if (lastSync) {
        // Incremental sync
        for await (const change of connector.getChanges(lastSync)) {
          try {
            if (change.type === 'deleted') {
              await this.knowledgeStore.softDelete(change.sourceId);
              report.deleted++;
            } else {
              await this.processDocument(tenantId, change.sourceId, connector);
              report.updated++;
            }
            report.processed++;
          } catch (error) {
            report.errors++;
          }
        }
      } else {
        // Full sync
        for await (const doc of connector.sync(connector.config)) {
          await this.processDocument(tenantId, doc.sourceId, connector, doc);
          report.created++;
          report.processed++;
        }
      }

      await this.setLastSyncTime(tenantId, connector.id, new Date());
    }

    return report;
  }
}
</code></pre>

<h2 id="3-document-processor"><strong>3. Multi-Format Document Processor</strong></h2>

<pre><code class="language-typescript">
class DocumentProcessor {
  private parsers = new Map&lt;string, DocumentParser&gt;([
    ['pdf', new PDFParser()],
    ['docx', new DocxParser()],
    ['html', new HTMLParser()],
    ['md', new MarkdownParser()],
    ['csv', new CSVParser()],
    ['xlsx', new ExcelParser()],
  ]);

  async process(rawDoc: RawDocument, tenantId: string): Promise&lt;ProcessedDocument&gt; {
    // 1. Parse content
    const parser = this.parsers.get(rawDoc.contentType);
    if (!parser) throw new Error(`Unsupported format: ${rawDoc.contentType}`);

    const parsed = await parser.parse(rawDoc.content);

    // 2. Clean & normalize
    const cleaned = this.cleanContent(parsed);

    // 3. Extract metadata via LLM
    const enrichedMetadata = await this.enrichMetadata(cleaned, rawDoc.metadata);

    // 4. Chunk with metadata preservation
    const chunks = await this.chunker.chunk(cleaned, {
      strategy: 'recursive',
      chunkSize: 512,
      overlap: 50,
      preserveMetadata: true,
    });

    // 5. Generate embeddings
    const embeddings = await this.embedder.embedBatch(
      chunks.map(c =&gt; c.content),
    );

    // 6. Create document record
    return {
      id: crypto.randomUUID(),
      tenantId,
      sourceId: rawDoc.sourceId,
      title: rawDoc.title,
      content: cleaned,
      chunks: chunks.map((chunk, i) =&gt; ({
        id: `${rawDoc.sourceId}:chunk:${i}`,
        content: chunk.content,
        embedding: embeddings[i],
        metadata: { ...enrichedMetadata, chunkIndex: i },
      })),
      metadata: enrichedMetadata,
      status: 'active',
      version: 1,
    };
  }

  private async enrichMetadata(
    content: string,
    existingMetadata: Record&lt;string, unknown&gt;,
  ): Promise&lt;EnrichedMetadata&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Extract metadata from this document content:
- summary (1-2 sentences)
- topics (list of main topics)
- documentType (policy, procedure, faq, guide, reference)
- language
- targetAudience
Output JSON.`,
      }, {
        role: 'user',
        content: content.slice(0, 2000), // First 2000 chars
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o-mini',
    });

    return { ...existingMetadata, ...JSON.parse(response.content) };
  }
}
</code></pre>

<h2 id="4-access-control"><strong>4. Document-Level Access Control</strong></h2>

<pre><code class="language-typescript">
interface DocumentACL {
  documentId: string;
  rules: ACLRule[];
}

interface ACLRule {
  principal: { type: 'user' | 'group' | 'role'; id: string };
  permission: 'read' | 'write' | 'admin';
}

class KnowledgeAccessControl {
  async filterSearchResults(
    results: SearchResult[],
    userId: string,
    tenantId: string,
  ): Promise&lt;SearchResult[]&gt; {
    // Get user's groups and roles
    const userContext = await this.getUserContext(userId, tenantId);

    return results.filter(result =&gt; {
      const acl = result.metadata.acl as DocumentACL | undefined;

      // No ACL = public within tenant
      if (!acl?.rules.length) return true;

      return acl.rules.some(rule =&gt; {
        if (rule.permission !== 'read') return false;

        switch (rule.principal.type) {
          case 'user':
            return rule.principal.id === userId;
          case 'group':
            return userContext.groups.includes(rule.principal.id);
          case 'role':
            return userContext.roles.includes(rule.principal.id);
          default:
            return false;
        }
      });
    });
  }

  // Sync ACLs from source system (Confluence, SharePoint)
  async syncACLs(connector: KnowledgeConnector, documentId: string): Promise&lt;DocumentACL&gt; {
    const sourceACL = await connector.getPermissions(documentId);

    return {
      documentId,
      rules: sourceACL.map(acl =&gt; ({
        principal: { type: acl.principalType, id: acl.principalId },
        permission: this.mapPermission(acl.sourcePermission),
      })),
    };
  }
}
</code></pre>

<h2 id="5-stale-detection"><strong>5. Stale Content Detection & Lifecycle Management</strong></h2>

<pre><code class="language-typescript">
class KnowledgeLifecycleManager {
  async detectStaleContent(tenantId: string): Promise&lt;StaleReport&gt; {
    const staleDocuments: StaleDocument[] = [];

    // Strategy 1: Time-based staleness
    const oldDocs = await this.db.document.findMany({
      where: {
        tenantId,
        updatedAt: { lt: new Date(Date.now() - 90 * 24 * 3600 * 1000) }, // 90 days
        status: 'active',
      },
    });
    staleDocuments.push(...oldDocs.map(d =&gt; ({
      ...d, reason: 'not_updated_90_days',
    })));

    // Strategy 2: Source deleted
    for (const doc of await this.db.document.findActive(tenantId)) {
      const sourceExists = await this.checkSourceExists(doc.sourceId);
      if (!sourceExists) {
        staleDocuments.push({ ...doc, reason: 'source_deleted' });
      }
    }

    // Strategy 3: Low retrieval score (nobody finds this useful)
    const lowScoreDocs = await this.analytics.getDocumentsWithLowRetrievalScore(
      tenantId,
      { minQueries: 100, maxAvgScore: 0.3 },
    );
    staleDocuments.push(...lowScoreDocs.map(d =&gt; ({
      ...d, reason: 'low_retrieval_relevance',
    })));

    return {
      staleDocuments,
      recommendations: this.generateRecommendations(staleDocuments),
    };
  }

  async archiveDocument(documentId: string): Promise&lt;void&gt; {
    // Soft delete — keep history
    await this.db.document.update(documentId, { status: 'archived' });

    // Remove from vector store
    await this.vectorStore.deleteByFilter({ documentId });

    // Log for audit
    await this.auditLog.log({
      action: 'document_archived',
      documentId,
      timestamp: new Date(),
    });
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 13</strong></h2>

<ul>
<li><strong>Connector Framework</strong>: Confluence, SharePoint, Google Drive — full sync + incremental sync</li>
<li><strong>Document Processing</strong>: Multi-format parsing → cleaning → chunking → embedding → indexing</li>
<li><strong>Access Control</strong>: Document-level ACL (user/group/role), sync from source system</li>
<li><strong>Lifecycle Management</strong>: Stale detection (time-based, source-deleted, low-relevance) → archive</li>
<li><strong>Incremental Sync</strong>: Chỉ process changes, không cần full re-index mỗi lần sync</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Multi-Tenant Architecture — tenant isolation, configuration per tenant, resource quotas, billing metering.</p>
