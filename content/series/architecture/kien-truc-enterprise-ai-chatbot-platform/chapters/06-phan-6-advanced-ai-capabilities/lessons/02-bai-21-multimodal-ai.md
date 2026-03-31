---
id: 019f0b20-b602-7001-e001-f2b8f9000602
title: 'Bài 21: Multimodal AI — Image Understanding, Document OCR & Visual Question Answering'
slug: bai-21-multimodal-ai
description: >-
  Image understanding with vision models, document OCR pipeline, chart/graph
  analysis, visual question answering, multimodal RAG, image-to-text
  for knowledge base.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Advanced AI Capabilities"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-multimodal-overview"><strong>1. Multimodal AI trong Enterprise Chatbot</strong></h2>

<p>Enterprise users cần chatbot hiểu không chỉ text mà cả <strong>images, documents, charts, screenshots</strong>. Multimodal AI biến chatbot từ "text-only assistant" thành "visual-aware intelligent agent".</p>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 21</strong></h2>

<ul>
<li><strong>Vision Router</strong>: Auto-classify image type (document, chart, photo, screenshot) → route to pipeline</li>
<li><strong>Document OCR</strong>: Vision model + Tesseract fallback, table/form extraction, multi-page support</li>
<li><strong>Chart Analysis</strong>: Identify chart type, extract data points, detect trends, answer questions</li>
<li><strong>Multimodal RAG</strong>: Index images as text descriptions → searchable alongside text documents</li>
<li><strong>Cost Optimization</strong>: Use <code>detail: 'low'</code> for classification, <code>detail: 'high'</code> for extraction</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Workflow Automation — Chatbot-triggered workflows, approval flows, integration with n8n/Temporal, event-driven automation.</p>
