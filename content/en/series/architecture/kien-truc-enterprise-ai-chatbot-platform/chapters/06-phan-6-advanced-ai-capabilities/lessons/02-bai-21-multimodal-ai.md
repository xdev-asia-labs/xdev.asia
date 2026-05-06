---
id: 019f0b20-b602-7001-e001-f2b8f9000602
title: >-
  Lesson 21: Multimodal AI — Image Understanding, Document OCR & Visual Question
  Answering
slug: bai-21-multimodal-ai
description: >-
  Image understanding with vision models, document OCR pipeline, chart/graph
  analysis, visual question answering, multimodal RAG, image-to-text for
  knowledge base.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 6: Advanced AI Capabilities'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Enterprise AI Chatbot Platform Architecture — From Prototype to Production
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6690" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6690)"/>

  <!-- Decorations -->
  <g>
    <circle cx="926" cy="168" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="752" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1078" cy="260" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="904" cy="46" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="730" cy="92" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="148" x2="1100" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="178" x2="1050" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.2390923627308,126.5 985.2390923627308,169.5 948,191 910.7609076372692,169.5 910.7609076372692,126.50000000000001 948,105" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: Multimodal AI — Image</tspan>
      <tspan x="60" dy="42">Understanding, Document OCR & Visual</tspan>
      <tspan x="60" dy="42">Question Answering</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Enterprise AI Chatbot Platform Architecture — From Prototype to Production</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Advanced AI Capabilities</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-multimodal-overview"><strong>1. Multimodal AI in Enterprise Chatbot</strong></h2>

<p>Enterprise users need chatbots to understand not only text but also text <strong>images, documents, charts, screenshots</strong>. Multimodal AI turns chatbots from "text-only assistant" into "visual-aware intelligent agent".</p>

<pre><code class="language-text">
┌─────────── MULTIMODAL PIPELINE ──────────────────────┐
│                                                       │
│  Input Types:                                         │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────────┐     │
│  │ Photo  │ │  PDF   │ │ Chart  │ │ Screenshot │     │
│  │        │ │  Scan  │ │ Graph  │ │            │     │
│  └───┬────┘ └───┬────┘ └───┬────┘ └─────┬──────┘     │
│      │          │          │            │             │
│  ┌───▼──────────▼──────────▼────────────▼──────┐      │
│  │         MULTIMODAL ROUTER                   │      │
│  │  (Detect content type → route to pipeline)  │      │
│  └───┬──────────┬──────────┬────────────┬──────┘      │
│      │          │          │            │             │
│      ▼          ▼          ▼            ▼             │
│  ┌──────┐  ┌──────┐  ┌──────┐    ┌──────────┐        │
│  │Vision│  │ OCR  │  │Chart │    │  Screen  │        │
│  │Model │  │Engine│  │Parser│    │ Understanding│     │
│  └──┬───┘  └──┬───┘  └──┬───┘    └─────┬────┘        │
│     └─────────┴─────────┴──────────────┘             │
│                     │                                 │
│              ┌──────▼──────┐                          │
│              │ Unified     │                          │
│              │ Context     │──▶ LLM                   │
│              └─────────────┘                          │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-vision-model"><strong>2. Vision Model Integration</strong></h2>

<pre><code class="language-typescript">
class VisionProcessor {
  async processImage(
    image: ImageInput,
    query: string,
    context: VisionContext,
  ): Promise&lt;VisionResult&gt; {
    // 1. Optimize image for vision model
    const optimized = await this.optimizeForVision(image);

    // 2. Route to appropriate vision pipeline
    const contentType = await this.classifyImageContent(optimized);

    switch (contentType) {
      case 'document':
        return this.processDocument(optimized, query);
      case 'chart':
        return this.processChart(optimized, query);
      case 'product_photo':
        return this.processProductPhoto(optimized, query);
      case 'screenshot':
        return this.processScreenshot(optimized, query);
      default:
        return this.processGeneral(optimized, query);
    }
  }

  private async classifyImageContent(image: OptimizedImage): Promise&lt;string&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: 'Classify this image into one of: document, chart, product_photo, screenshot, general. Output only the category.' },
          {
            type: 'image_url',
            image_url: {
              url: `data:${image.mimeType};base64,${image.base64}`,
              detail: 'low', // Low detail for classification (cheaper)
            },
          },
        ],
      }],
      model: 'gpt-4o-mini',
      maxTokens: 20,
    });

    return response.content.trim().toLowerCase();
  }

  private async processGeneral(
    image: OptimizedImage,
    query: string,
  ): Promise&lt;VisionResult&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: query || 'Describe this image in detail.' },
          {
            type: 'image_url',
            image_url: {
              url: `data:${image.mimeType};base64,${image.base64}`,
              detail: 'high',
            },
          },
        ],
      }],
      model: 'gpt-4o',
    });

    return {
      type: 'general',
      description: response.content,
      extractedText: null,
      structuredData: null,
    };
  }
}
</code></pre>

<h2 id="3-document-ocr"><strong>3. Document OCR Pipeline</strong></h2>

<pre><code class="language-typescript">
class DocumentOCRPipeline {
  async process(document: DocumentInput): Promise&lt;OCRResult&gt; {
    const pages: PageResult[] = [];

    // 1. Convert document to images (if PDF)
    const images = document.type === 'pdf'
      ? await this.pdfToImages(document.data)
      : [{ data: document.data, mimeType: document.mimeType }];

    // 2. OCR each page
    for (let i = 0; i &lt; images.length; i++) {
      // Strategy A: Vision model OCR (higher accuracy, slower)
      const visionOCR = await this.visionModelOCR(images[i]);

      // Strategy B: Tesseract OCR (faster, good for clear text)
      const tesseractOCR = await this.tesseractOCR(images[i]);

      // 3. Merge results (use vision for complex layouts, Tesseract for simple)
      const mergedText = this.mergeOCRResults(visionOCR, tesseractOCR);

      // 4. Structure extraction (tables, forms, lists)
      const structured = await this.extractStructure(images[i], mergedText);

      pages.push({
        pageNumber: i + 1,
        text: mergedText,
        tables: structured.tables,
        formFields: structured.formFields,
        confidence: structured.confidence,
      });
    }

    return {
      totalPages: pages.length,
      fullText: pages.map(p =&gt; p.text).join('\n\n---\n\n'),
      pages,
      language: await this.detectLanguage(pages[0].text),
    };
  }

  private async visionModelOCR(image: ImageData): Promise&lt;string&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Extract ALL text from this document image. 
Preserve the original formatting and structure.
For tables, use markdown table format.
For forms, extract field labels and values as "Label: Value".
Output the raw extracted text only.`,
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:${image.mimeType};base64,${Buffer.from(image.data).toString('base64')}`,
              detail: 'high',
            },
          },
        ],
      }],
      model: 'gpt-4o',
      maxTokens: 4096,
    });

    return response.content;
  }

  private async extractStructure(
    image: ImageData,
    text: string,
  ): Promise&lt;StructuredContent&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this document and extract structured data.
Return JSON with: tables (as arrays), formFields (key-value pairs), lists.`,
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:${image.mimeType};base64,${Buffer.from(image.data).toString('base64')}`,
              detail: 'high',
            },
          },
        ],
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o',
    });

    return JSON.parse(response.content);
  }
}
</code></pre>

<h2 id="4-chart-analysis"><strong>4. Chart & Graph Analysis</strong></h2>

<pre><code class="language-typescript">
class ChartAnalyzer {
  async analyzeChart(
    chartImage: ImageInput,
    question: string,
  ): Promise&lt;ChartAnalysis&gt; {
    const response = await this.llm.chat({
      messages: [{
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this chart/graph and answer the question.

1. Identify chart type (bar, line, pie, scatter, etc.)
2. Extract data points and labels
3. Identify trends and insights
4. Answer the specific question

Question: ${question || 'What are the key insights from this chart?'}

Output JSON:
{
  "chartType": "...",
  "title": "...",
  "dataPoints": [{"label": "...", "value": N}],
  "trends": ["..."],
  "insights": ["..."],
  "answer": "..."
}`,
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:${chartImage.mimeType};base64,${chartImage.base64}`,
              detail: 'high',
            },
          },
        ],
      }],
      response_format: { type: 'json_object' },
      model: 'gpt-4o',
    });

    return JSON.parse(response.content);
  }
}
</code></pre>

<h2 id="5-multimodal-rag"><strong>5. Multimodal RAG — Indexing Images in Knowledge Base</strong></h2>

<pre><code class="language-typescript">
class MultimodalRAG {
  // Index images alongside text in knowledge base
  async indexDocumentWithImages(
    document: DocumentWithImages,
    tenantId: string,
  ): Promise&lt;void&gt; {
    // 1. Index text chunks as usual
    for (const chunk of document.textChunks) {
      const embedding = await this.textEmbedder.embed(chunk.content);
      await this.vectorStore.upsert({
        id: `${document.id}:text:${chunk.index}`,
        vector: embedding,
        metadata: {
          tenantId,
          documentId: document.id,
          type: 'text',
          content: chunk.content,
        },
      });
    }

    // 2. Generate descriptions for images → index as text
    for (const image of document.images) {
      const description = await this.describeImage(image);

      const embedding = await this.textEmbedder.embed(description);
      await this.vectorStore.upsert({
        id: `${document.id}:image:${image.index}`,
        vector: embedding,
        metadata: {
          tenantId,
          documentId: document.id,
          type: 'image',
          content: description,
          imageUrl: image.url,
          pageNumber: image.pageNumber,
        },
      });
    }
  }

  // Retrieve with image context
  async retrieve(
    query: string,
    tenantId: string,
  ): Promise&lt;MultimodalSearchResult[]&gt; {
    const results = await this.vectorStore.search({
      vector: await this.textEmbedder.embed(query),
      filter: { tenantId },
      topK: 10,
    });

    return results.map(r =&gt; ({
      content: r.metadata.content as string,
      type: r.metadata.type as 'text' | 'image',
      imageUrl: r.metadata.type === 'image' ? r.metadata.imageUrl as string : undefined,
      score: r.score,
      documentId: r.metadata.documentId as string,
    }));
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Summary of Lesson 21</strong></h2>

<ul>
<li><strong>Vision Router</strong>: Auto-classify image type (document, chart, photo, screenshot) → route to pipeline</li>
<li><strong>Document OCR</strong>: Vision model + Tesseract fallback, table/form extraction, multi-page support</li>
<li><strong>Chart Analysis</strong>: Identify chart type, extract data points, detect trends, answer questions</li>
<li><strong>Multimodal RAG</strong>: Index images as text descriptions → searchable alongside text documents</li>
<li><strong>Cost Optimization</strong>: Use <code>detail: 'low'</code> for classification, <code>details: 'high'</code> for extraction</li>
</ul>

<p><strong>Next article:</strong> Workflow Automation — Chatbot-triggered workflows, approval flows, integration with n8n/Temporal, event-driven automation.</p>
