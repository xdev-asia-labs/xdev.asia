---
id: 019f0b20-b304-7001-e001-f2b8f9000304
title: >-
  Lesson 11: Structured Data Querying — Text-to-SQL, Knowledge Graph & Database
  Agent
slug: bai-11-structured-data-querying
description: >-
  Text-to-SQL pipeline, schema injection, SQL validation & sanitization,
  knowledge graph querying, database agent pattern, result formatting, natural
  language BI.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Agentic Architecture'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Enterprise AI Chatbot Platform Architecture — From Prototype to Production
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2351" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2351)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1085" cy="165" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1070" cy="210" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1055" cy="255" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1040" cy="40" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="85" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="55" x2="1100" y2="135" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="85" x2="1050" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="930.9807621135332,90 930.9807621135332,120 905,135 879.0192378864668,120 879.0192378864668,90.00000000000001 905,75" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Architecture — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Structured Data Querying —</tspan>
      <tspan x="60" dy="42">Text-to-SQL, Knowledge Graph & Database</tspan>
      <tspan x="60" dy="42">Agent</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Enterprise AI Chatbot Platform Architecture — From Prototype to Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Agentic Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-text-to-sql-overview"><strong>1. Text-to-SQL — Turn questions into queries</strong></h2>

<p>Text-to-SQL allows chatbots to query the database directly from natural language — "What is the revenue this month?" → <code>SELECT SUM(amount) FROM orders WHERE...</code>.</p>

<pre><code class="language-text">
┌────────────── TEXT-TO-SQL PIPELINE ───────────────────┐
│                                                       │
│  "Doanh thu tháng này?"                               │
│         │                                             │
│    ┌────▼────┐   ┌──────────┐   ┌──────────────┐     │
│    │ Intent  │──▶│ Schema   │──▶│ SQL          │     │
│    │ Detect  │   │ Selector │   │ Generator    │     │
│    └─────────┘   └──────────┘   └──────┬───────┘     │
│                                        │              │
│                                   ┌────▼────┐        │
│                                   │SQL      │        │
│                                   │Validator│        │
│                                   └────┬────┘        │
│                                        │              │
│    ┌──────────┐   ┌──────────┐   ┌────▼────┐        │
│    │ Format   │◀──│ Execute  │◀──│Sanitize │        │
│    │ Response │   │ Query    │   │& Limit  │        │
│    └──────────┘   └──────────┘   └─────────┘        │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-schema-injection"><strong>2. Schema Injection — Providing Database Context to LLM</strong></h2>

<pre><code class="language-typescript">
interface TableSchema {
  tableName: string;
  description: string;
  columns: ColumnSchema[];
  sampleData?: Record&lt;string, unknown&gt;[];
  relationships: Relationship[];
}

class SchemaManager {
  private schemaCache = new Map&lt;string, TableSchema[]&gt;();

  async getRelevantSchema(
    tenantId: string,
    userQuery: string,
  ): Promise&lt;TableSchema[]&gt; {
    const allSchemas = await this.loadSchemas(tenantId);

    // Use embedding similarity to find relevant tables
    const queryEmbedding = await this.embedder.embed(userQuery);
    const scored = await Promise.all(
      allSchemas.map(async (schema) =&gt; {
        const schemaText = `${schema.tableName}: ${schema.description}. Columns: ${
          schema.columns.map(c =&gt; `${c.name} (${c.type}): ${c.description}`).join(', ')
        }`;
        const schemaEmbedding = await this.embedder.embed(schemaText);
        return {
          schema,
          score: this.cosineSimilarity(queryEmbedding, schemaEmbedding),
        };
      }),
    );

    // Return top-K relevant tables
    return scored
      .sort((a, b) =&gt; b.score - a.score)
      .slice(0, 5)
      .map(s =&gt; s.schema);
  }

  formatSchemaForLLM(schemas: TableSchema[]): string {
    return schemas.map(s =&gt; `
-- Table: ${s.tableName}
-- Description: ${s.description}
CREATE TABLE ${s.tableName} (
${s.columns.map(c =&gt; `  ${c.name} ${c.type}${c.nullable ? '' : ' NOT NULL'} -- ${c.description}`).join(',\n')}
);
${s.relationships.map(r =&gt; `-- FK: ${s.tableName}.${r.column} -> ${r.refTable}.${r.refColumn}`).join('\n')}
${s.sampleData ? `-- Sample: ${JSON.stringify(s.sampleData[0])}` : ''}
`).join('\n');
  }
}
</code></pre>

<h2 id="3-sql-generator"><strong>3. SQL Generator with Safety</strong></h2>

<pre><code class="language-typescript">
class TextToSQLAgent {
  async generateSQL(
    query: string,
    tenantId: string,
    context: QueryContext,
  ): Promise&lt;SQLResult&gt; {
    // 1. Get relevant schema
    const schemas = await this.schemaManager.getRelevantSchema(tenantId, query);
    const schemaText = this.schemaManager.formatSchemaForLLM(schemas);

    // 2. Generate SQL
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `You are a SQL expert. Generate PostgreSQL queries based on user questions.

DATABASE SCHEMA:
${schemaText}

RULES:
1. Only use SELECT statements (no INSERT, UPDATE, DELETE, DROP, etc.)
2. Always include WHERE tenant_id = '${tenantId}' for multi-tenant safety
3. Add LIMIT 100 to prevent large result sets
4. Use CTEs for complex queries  
5. Handle NULL values appropriately
6. Format dates in Vietnamese locale

Output JSON:
{
  "sql": "SELECT ...",
  "explanation": "brief explanation of the query",
  "expectedColumns": ["col1", "col2"]
}`,
      }, {
        role: 'user',
        content: query,
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o',
      temperature: 0,
    });

    const generated = JSON.parse(response.content);

    // 3. Validate SQL
    const validation = this.validateSQL(generated.sql, tenantId);
    if (!validation.safe) {
      throw new Error(`Unsafe SQL detected: ${validation.reason}`);
    }

    // 4. Execute
    const results = await this.executeQuery(generated.sql, tenantId);

    // 5. Format results
    const formattedResponse = await this.formatResults(query, results, generated);

    return {
      sql: generated.sql,
      results,
      explanation: generated.explanation,
      formattedResponse,
    };
  }

  private validateSQL(sql: string, tenantId: string): ValidationResult {
    const upperSQL = sql.toUpperCase().trim();

    // Block dangerous statements
    const blocked = ['INSERT', 'UPDATE', 'DELETE', 'DROP', 'ALTER', 'TRUNCATE',
      'CREATE', 'GRANT', 'REVOKE', 'EXEC', 'EXECUTE'];
    for (const keyword of blocked) {
      if (upperSQL.startsWith(keyword)) {
        return { safe: false, reason: `${keyword} statements are not allowed` };
      }
    }

    // Must include tenant filter
    if (!sql.includes(tenantId)) {
      return { safe: false, reason: 'Missing tenant_id filter' };
    }

    // Must have LIMIT
    if (!upperSQL.includes('LIMIT')) {
      return { safe: false, reason: 'Missing LIMIT clause' };
    }

    // Block subqueries that could bypass tenant filter
    const subqueryCount = (sql.match(/SELECT/gi) ?? []).length;
    if (subqueryCount &gt; 3) {
      return { safe: false, reason: 'Too many subqueries' };
    }

    return { safe: true };
  }
}
</code></pre>

<h2 id="4-read-only-execution"><strong>4. Read-Only Execution Layer</strong></h2>

<pre><code class="language-typescript">
class SafeQueryExecutor {
  private readOnlyPool: Pool;

  constructor(config: PoolConfig) {
    // Use read-only replica with limited permissions
    this.readOnlyPool = new Pool({
      ...config,
      user: 'chatbot_readonly',     // Read-only user
      database: config.database,
      max: 10,                       // Limited connections
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });
  }

  async execute(sql: string, tenantId: string): Promise&lt;QueryResult&gt; {
    const client = await this.readOnlyPool.connect();

    try {
      // Set statement timeout (prevent long-running queries)
      await client.query('SET statement_timeout = 10000'); // 10s max

      // Set row security policy context
      await client.query('SET app.tenant_id = $1', [tenantId]);

      // Execute in read-only transaction
      await client.query('BEGIN READ ONLY');
      const result = await client.query(sql);
      await client.query('COMMIT');

      return {
        rows: result.rows,
        rowCount: result.rowCount ?? 0,
        fields: result.fields.map(f =&gt; ({ name: f.name, dataType: f.dataTypeID })),
      };
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}
</code></pre>

<h2 id="5-knowledge-graph"><strong>5. Knowledge Graph Querying</strong></h2>

<pre><code class="language-typescript">
class KnowledgeGraphAgent {
  async query(
    naturalLanguageQuery: string,
    tenantId: string,
  ): Promise&lt;GraphQueryResult&gt; {
    // 1. Detect entities
    const entities = await this.extractEntities(naturalLanguageQuery);

    // 2. Generate Cypher query (Neo4j)
    const cypherQuery = await this.generateCypher(
      naturalLanguageQuery,
      entities,
      tenantId,
    );

    // 3. Execute on graph DB
    const graphResults = await this.neo4j.run(cypherQuery, { tenantId });

    // 4. Combine with vector search for richer context
    const vectorResults = await this.vectorStore.search({
      query: naturalLanguageQuery,
      filter: { tenantId },
      topK: 5,
    });

    // 5. Merge and format
    return this.mergeResults(graphResults, vectorResults, naturalLanguageQuery);
  }

  private async generateCypher(
    query: string,
    entities: Entity[],
    tenantId: string,
  ): Promise&lt;string&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Generate a Cypher query for Neo4j.
Graph schema:
- (Product {name, price, category, tenantId})
- (Customer {name, email, segment, tenantId})
- (Order {id, date, total, tenantId})
- (Product)-[:BELONGS_TO]->(Category)
- (Customer)-[:PLACED]->(Order)
- (Order)-[:CONTAINS]->(Product)

RULES:
1. Always filter by tenantId = $tenantId
2. LIMIT 50
3. Return meaningful properties`,
      }, {
        role: 'user',
        content: `Query: ${query}\nEntities detected: ${JSON.stringify(entities)}`,
      }],
      temperature: 0,
    });

    return response.content;
  }
}
</code></pre>

<h2 id="6-result-formatting"><strong>6. Natural Language Result Formatting</strong></h2>

<pre><code class="language-typescript">
class ResultFormatter {
  async format(
    originalQuery: string,
    results: QueryResult,
    context: FormatContext,
  ): Promise&lt;FormattedResponse&gt; {
    // Determine best format based on data shape
    const formatType = this.detectBestFormat(results);

    const response = await this.llm.chat({
      messages: [{
        role: 'system',
        content: `Convert query results to a natural language response in Vietnamese.
Format the data as: ${formatType}

Rules:
- Use Vietnamese number formatting (dấu chấm ngàn: 1.000.000)
- Format currency as VNĐ
- Format dates as DD/MM/YYYY
- If data is tabular, use markdown table
- Highlight key metrics
- Be concise but complete`,
      }, {
        role: 'user',
        content: `Question: ${originalQuery}\n\nQuery results:\n${JSON.stringify(results.rows, null, 2)}`,
      }],
    });

    return {
      text: response.content,
      format: formatType,
      rawData: results.rows,
      chartSuggestion: this.suggestChart(results),
    };
  }

  private detectBestFormat(results: QueryResult): string {
    if (results.rowCount === 1 &amp;&amp; results.fields.length &lt;= 3) return 'single_value';
    if (results.rowCount &lt;= 5) return 'bullet_list';
    if (results.fields.some(f =&gt; f.name.includes('date'))) return 'time_series';
    return 'table';
  }

  private suggestChart(results: QueryResult): ChartSuggestion | null {
    const hasNumeric = results.fields.some(f =&gt; [23, 20, 701].includes(f.dataType));
    const hasDate = results.fields.some(f =&gt; [1082, 1114].includes(f.dataType));

    if (hasDate &amp;&amp; hasNumeric) return { type: 'line', xAxis: 'date', yAxis: 'value' };
    if (hasNumeric &amp;&amp; results.rowCount &lt;= 10) return { type: 'bar' };
    return null;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Summary of Lesson 11</strong></h2>

<ul>
<li><strong>Text-to-SQL</strong>: Schema injection → SQL generation → Validation → Read-only execution</li>
<li><strong>Safety</strong>: Read-only user, statement timeout, tenant filter, blocked keywords, LIMIT required</li>
<li><strong>Knowledge Graph</strong>: Entity extraction → Cypher generation → Graph query + vector hybrid</li>
<li><strong>Result Formatting</strong>: Auto-detect format (single value, table, time series) → Vietnamese localization</li>
<li><strong>Row-Level Security</strong>:PostgreSQL RLS+ <code>SET app.tenant_id</code> Ensure data isolation</li>
</ul>

<p><strong>Next article:</strong> Guardrails & AI Safety — input/output filtering, toxicity detection, PII masking, content moderation, jailbreak prevention.</p>
