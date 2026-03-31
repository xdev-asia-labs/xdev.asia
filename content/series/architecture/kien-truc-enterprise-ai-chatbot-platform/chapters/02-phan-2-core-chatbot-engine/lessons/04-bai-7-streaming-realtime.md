---
id: 019f0b20-b204-7001-e001-f2b8f9000204
title: 'Bài 7: Streaming & Real-time — SSE, WebSocket, Voice Agent & Multimodal'
slug: bai-7-streaming-realtime
description: >-
  Server-Sent Events streaming, WebSocket real-time, Whisper STT, TTS
  (ElevenLabs/OpenAI), multimodal input (image/audio/video), voice agent
  architecture, latency optimization.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Core Chatbot Engine"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-streaming-architecture"><strong>1. Streaming Architecture Overview</strong></h2>

<p>Trong chatbot production, streaming response là bắt buộc — user không chấp nhận chờ 5-10 giây để nhận full response. Streaming cho phép <strong>hiển thị từng token</strong> ngay khi LLM generate, giảm perceived latency từ ~5s xuống ~200ms.</p>

<pre><code class="language-text">
┌──────────┐     WebSocket/SSE      ┌──────────────┐     SSE Stream      ┌───────────┐
│  Client  │ ◀──────────────────── │  API Gateway  │ ◀────────────────── │ LLM       │
│ (Browser │     Token-by-token     │  (Streaming   │     Token-by-token  │ Provider  │
│  /Mobile)│                        │   Proxy)      │                     │           │
└──────────┘                        └──────┬───────┘                     └───────────┘
                                           │
                                    ┌──────▼───────┐
                                    │  Event Store │
                                    │  (Kafka)     │
                                    └──────────────┘
</code></pre>

<h2 id="2-sse-streaming"><strong>2. Server-Sent Events (SSE) Implementation</strong></h2>

<pre><code class="language-typescript">
// SSE Streaming Controller
class StreamingController {
  async streamChat(req: Request, res: Response): Promise&lt;void&gt; {
    // Set SSE headers
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no', // Disable Nginx buffering
    });

    const { conversationId, message } = req.body;

    try {
      // 1. Process input (RAG, context, etc.)
      const context = await this.chatService.prepareContext(conversationId, message);

      // 2. Stream from LLM
      const stream = await this.llmGateway.chatStream(context);
      let fullContent = '';

      for await (const chunk of stream) {
        fullContent += chunk.content;

        // Send SSE event
        const event: StreamEvent = {
          type: 'token',
          data: {
            content: chunk.content,
            tokenIndex: chunk.index,
          },
        };
        res.write(`event: token\ndata: ${JSON.stringify(event.data)}\n\n`);
      }

      // 3. Send citations after content
      if (context.citations.length &gt; 0) {
        res.write(`event: citations\ndata: ${JSON.stringify(context.citations)}\n\n`);
      }

      // 4. Send completion event
      res.write(`event: done\ndata: ${JSON.stringify({
        messageId: crypto.randomUUID(),
        totalTokens: stream.usage?.totalTokens,
      })}\n\n`);

      // 5. Persist message async (don't block stream)
      this.messageQueue.publish('message.completed', {
        conversationId,
        content: fullContent,
        citations: context.citations,
        usage: stream.usage,
      });

    } catch (error) {
      res.write(`event: error\ndata: ${JSON.stringify({
        code: 'STREAM_ERROR',
        message: 'An error occurred while generating response',
      })}\n\n`);
    } finally {
      res.end();
    }
  }
}
</code></pre>

<h2 id="3-websocket-realtime"><strong>3. WebSocket Real-time Communication</strong></h2>

<pre><code class="language-typescript">
// WebSocket Gateway with Socket.IO
class ChatWebSocketGateway {
  private io: SocketIOServer;
  private connections = new Map&lt;string, SocketConnection&gt;();

  initialize(server: HTTPServer): void {
    this.io = new SocketIOServer(server, {
      cors: { origin: process.env.ALLOWED_ORIGINS?.split(',') },
      transports: ['websocket', 'polling'],
      pingInterval: 25000,
      pingTimeout: 60000,
    });

    this.io.use(this.authMiddleware.bind(this));
    this.io.on('connection', this.handleConnection.bind(this));
  }

  private async handleConnection(socket: Socket): Promise&lt;void&gt; {
    const { userId, tenantId } = socket.data;

    // Track connection
    this.connections.set(socket.id, {
      userId,
      tenantId,
      connectedAt: Date.now(),
    });

    // Join tenant room
    socket.join(`tenant:${tenantId}`);
    socket.join(`user:${userId}`);

    // Handle events
    socket.on('chat:message', (data) =&gt; this.handleMessage(socket, data));
    socket.on('chat:typing', (data) =&gt; this.handleTyping(socket, data));
    socket.on('chat:stop', (data) =&gt; this.handleStopGeneration(socket, data));
    socket.on('disconnect', () =&gt; this.handleDisconnect(socket));
  }

  private async handleMessage(socket: Socket, data: ChatMessageEvent): Promise&lt;void&gt; {
    const { conversationId, content, attachments } = data;

    // Emit typing indicator
    socket.emit('chat:bot_typing', { conversationId, isTyping: true });

    try {
      const stream = await this.chatService.streamResponse(
        socket.data.tenantId,
        conversationId,
        content,
        attachments,
      );

      const abortController = new AbortController();
      this.activeStreams.set(`${socket.id}:${conversationId}`, abortController);

      for await (const chunk of stream) {
        if (abortController.signal.aborted) break;

        socket.emit('chat:token', {
          conversationId,
          content: chunk.content,
          index: chunk.index,
        });
      }

      socket.emit('chat:complete', { conversationId });
    } catch (error) {
      socket.emit('chat:error', { conversationId, error: 'Failed to generate response' });
    } finally {
      socket.emit('chat:bot_typing', { conversationId, isTyping: false });
      this.activeStreams.delete(`${socket.id}:${conversationId}`);
    }
  }

  private handleStopGeneration(socket: Socket, data: { conversationId: string }): void {
    const key = `${socket.id}:${data.conversationId}`;
    this.activeStreams.get(key)?.abort();
  }
}
</code></pre>

<h2 id="4-streaming-resilience"><strong>4. Streaming Resilience — Backpressure & Reconnection</strong></h2>

<pre><code class="language-typescript">
// Client-side: Auto-reconnect with EventSource
class ChatStreamClient {
  private eventSource: EventSource | null = null;
  private retryCount = 0;
  private maxRetries = 3;

  connect(conversationId: string, messageId: string): void {
    const url = `/api/chat/stream?conversationId=${conversationId}&amp;messageId=${messageId}`;

    this.eventSource = new EventSource(url);

    this.eventSource.addEventListener('token', (e) =&gt; {
      const data = JSON.parse(e.data);
      this.onToken(data.content);
      this.retryCount = 0;
    });

    this.eventSource.addEventListener('done', (e) =&gt; {
      const data = JSON.parse(e.data);
      this.onComplete(data);
      this.eventSource?.close();
    });

    this.eventSource.onerror = () =&gt; {
      if (this.retryCount &lt; this.maxRetries) {
        this.retryCount++;
        setTimeout(() =&gt; this.reconnect(conversationId, messageId), 
          1000 * Math.pow(2, this.retryCount)); // Exponential backoff
      } else {
        this.onError('Connection lost');
      }
    };
  }

  stop(): void {
    this.eventSource?.close();
  }
}

// Server-side: Backpressure handling
class BackpressureStream {
  private buffer: string[] = [];
  private highWaterMark = 100; // Max buffered chunks
  private paused = false;

  async pipe(
    source: AsyncIterable&lt;StreamChunk&gt;,
    sink: Response,
  ): Promise&lt;void&gt; {
    for await (const chunk of source) {
      if (this.buffer.length &gt;= this.highWaterMark) {
        // Backpressure: wait until drain
        await new Promise&lt;void&gt;(resolve =&gt; {
          sink.once('drain', resolve);
        });
      }

      const ok = sink.write(
        `event: token\ndata: ${JSON.stringify({ content: chunk.content })}\n\n`
      );

      if (!ok) {
        this.paused = true;
        await new Promise&lt;void&gt;(resolve =&gt; sink.once('drain', resolve));
        this.paused = false;
      }
    }
  }
}
</code></pre>

<h2 id="5-voice-agent"><strong>5. Voice Agent Architecture — STT + TTS</strong></h2>

<pre><code class="language-text">
┌────────────────── VOICE AGENT PIPELINE ──────────────────┐
│                                                           │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐  │
│  │  Audio  │──▶│ Whisper │──▶│ Chat    │──▶│  TTS    │  │
│  │  Input  │   │  STT    │   │ Engine  │   │ Engine  │  │
│  │ (WebRTC)│   │         │   │         │   │         │  │
│  └─────────┘   └─────────┘   └────┬────┘   └────┬────┘  │
│                                    │             │       │
│                              ┌─────▼─────┐  ┌───▼─────┐  │
│                              │  Text     │  │  Audio  │  │
│                              │  Response │  │  Output │  │
│                              └───────────┘  └─────────┘  │
│                                                           │
│  Latency Target: STT ~500ms, LLM ~200ms, TTS ~300ms     │
│  Total: &lt; 1.5s end-to-end                                │
└───────────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-typescript">
class VoiceAgent {
  constructor(
    private sttEngine: STTEngine,
    private chatEngine: ChatEngine,
    private ttsEngine: TTSEngine,
  ) {}

  async processVoiceStream(
    audioStream: ReadableStream&lt;Uint8Array&gt;,
    context: VoiceContext,
  ): Promise&lt;ReadableStream&lt;Uint8Array&gt;&gt; {
    // 1. Speech-to-Text (streaming)
    const transcript = await this.sttEngine.transcribe(audioStream);
    console.log(`STT result: "${transcript.text}" (${transcript.language})`);

    // 2. Chat response (streaming)
    const textStream = this.chatEngine.streamResponse(
      context.conversationId,
      transcript.text,
    );

    // 3. Text-to-Speech (streaming — process sentence by sentence)
    return this.ttsEngine.synthesizeStream(textStream, {
      voice: context.voiceId ?? 'vi-VN-female-1',
      speed: context.speed ?? 1.0,
      format: 'opus', // Low latency codec
    });
  }
}

class WhisperSTTEngine implements STTEngine {
  async transcribe(audio: ReadableStream&lt;Uint8Array&gt;): Promise&lt;TranscriptResult&gt; {
    const audioBuffer = await this.collectStream(audio);

    const response = await this.openai.audio.transcriptions.create({
      file: new File([audioBuffer], 'audio.webm', { type: 'audio/webm' }),
      model: 'whisper-1',
      language: 'vi',
      response_format: 'verbose_json',
      timestamp_granularities: ['segment'],
    });

    return {
      text: response.text,
      language: response.language,
      segments: response.segments,
      duration: response.duration,
    };
  }
}

class OpenAITTSEngine implements TTSEngine {
  async synthesizeStream(
    textStream: AsyncIterable&lt;string&gt;,
    options: TTSOptions,
  ): Promise&lt;ReadableStream&lt;Uint8Array&gt;&gt; {
    // Buffer text by sentence for natural speech
    const sentenceBuffer = new SentenceBuffer();

    return new ReadableStream({
      start: async (controller) =&gt; {
        for await (const chunk of textStream) {
          sentenceBuffer.append(chunk);

          while (sentenceBuffer.hasSentence()) {
            const sentence = sentenceBuffer.flush();
            const audioChunk = await this.synthesize(sentence, options);
            controller.enqueue(audioChunk);
          }
        }

        // Flush remaining text
        const remaining = sentenceBuffer.flushAll();
        if (remaining) {
          const audioChunk = await this.synthesize(remaining, options);
          controller.enqueue(audioChunk);
        }
        controller.close();
      },
    });
  }

  private async synthesize(text: string, options: TTSOptions): Promise&lt;Uint8Array&gt; {
    const response = await this.openai.audio.speech.create({
      model: 'tts-1',
      voice: options.voice as 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer',
      input: text,
      speed: options.speed,
      response_format: options.format,
    });

    return new Uint8Array(await response.arrayBuffer());
  }
}
</code></pre>

<h2 id="6-multimodal-input"><strong>6. Multimodal Input Processing</strong></h2>

<pre><code class="language-typescript">
interface MultimodalMessage {
  text?: string;
  images?: ImageAttachment[];
  audio?: AudioAttachment;
  files?: FileAttachment[];
}

class MultimodalProcessor {
  async processInput(
    input: MultimodalMessage,
    modelCapabilities: ModelCapabilities,
  ): Promise&lt;LLMMessage&gt; {
    const contentParts: ContentPart[] = [];

    // Text
    if (input.text) {
      contentParts.push({ type: 'text', text: input.text });
    }

    // Images — resize &amp; optimize for vision models
    if (input.images?.length) {
      for (const img of input.images) {
        if (!modelCapabilities.vision) {
          // Fallback: describe image via a vision model
          const description = await this.describeImage(img);
          contentParts.push({
            type: 'text',
            text: `[Image description: ${description}]`,
          });
        } else {
          const optimized = await this.optimizeImage(img, {
            maxWidth: 1024,
            maxHeight: 1024,
            quality: 85,
          });
          contentParts.push({
            type: 'image_url',
            image_url: {
              url: `data:${optimized.mimeType};base64,${optimized.base64}`,
              detail: img.size &gt; 500_000 ? 'high' : 'low', // Cost optimization
            },
          });
        }
      }
    }

    // Audio — transcribe via STT
    if (input.audio) {
      const transcript = await this.sttEngine.transcribe(input.audio.data);
      contentParts.push({
        type: 'text',
        text: `[Audio transcript]: ${transcript.text}`,
      });
    }

    // Files — extract text
    if (input.files?.length) {
      for (const file of input.files) {
        const text = await this.extractText(file);
        contentParts.push({
          type: 'text',
          text: `[File: ${file.name}]\n${text}`,
        });
      }
    }

    return { role: 'user', content: contentParts };
  }
}
</code></pre>

<h2 id="7-latency-optimization"><strong>7. Latency Optimization Techniques</strong></h2>

<table>
<thead>
<tr>
<th>Technique</th>
<th>Impact</th>
<th>Implementation</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Prompt caching</strong></td>
<td>-40% TTFT</td>
<td>Cache system prompt prefix (Anthropic/OpenAI)</td>
</tr>
<tr>
<td><strong>Speculative decoding</strong></td>
<td>-30% latency</td>
<td>Use small model to draft, large model to verify</td>
</tr>
<tr>
<td><strong>Edge inference</strong></td>
<td>-80ms network</td>
<td>Deploy small models at edge (Cloudflare Workers AI)</td>
</tr>
<tr>
<td><strong>Connection pooling</strong></td>
<td>-100ms</td>
<td>Keep-alive connections to LLM providers</td>
</tr>
<tr>
<td><strong>Response caching</strong></td>
<td>-95% latency</td>
<td>Semantic cache for identical/similar queries</td>
</tr>
<tr>
<td><strong>Parallel RAG</strong></td>
<td>-50% prep time</td>
<td>Run retrieval + reranking in parallel</td>
</tr>
</tbody>
</table>

<pre><code class="language-typescript">
// Semantic Cache — cache responses for similar queries
class SemanticCache {
  constructor(
    private vectorStore: VectorStore,
    private similarityThreshold = 0.95,
    private ttlSeconds = 3600,
  ) {}

  async get(query: string, tenantId: string): Promise&lt;CachedResponse | null&gt; {
    const embedding = await this.embedder.embed(query);

    const results = await this.vectorStore.search({
      vector: embedding,
      filter: { tenantId },
      topK: 1,
    });

    if (results.length === 0) return null;
    if (results[0].score &lt; this.similarityThreshold) return null;

    // Check TTL
    const cached = results[0].metadata as CachedResponse;
    if (Date.now() - cached.cachedAt &gt; this.ttlSeconds * 1000) {
      return null;
    }

    return cached;
  }

  async set(query: string, response: string, tenantId: string): Promise&lt;void&gt; {
    const embedding = await this.embedder.embed(query);

    await this.vectorStore.upsert({
      id: `cache:${tenantId}:${this.hashQuery(query)}`,
      vector: embedding,
      metadata: {
        tenantId,
        query,
        response,
        cachedAt: Date.now(),
      },
    });
  }
}
</code></pre>

<h2 id="tong-ket"><strong>Tổng kết Bài 7</strong></h2>

<ul>
<li><strong>SSE</strong> (Server-Sent Events) phù hợp cho one-way streaming từ server → client, đơn giản hơn WebSocket</li>
<li><strong>WebSocket</strong> cho real-time bidirectional: typing indicator, stop generation, multi-user presence</li>
<li><strong>Voice Agent</strong> = STT (Whisper) + Chat Engine + TTS (OpenAI/ElevenLabs), target &lt; 1.5s end-to-end</li>
<li><strong>Multimodal</strong>: xử lý image (vision model), audio (STT), files (text extraction) trước khi gửi LLM</li>
<li><strong>Semantic Cache</strong> giảm 95% latency cho similar queries — ROI rất cao</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Function Calling & Tool Use — thiết kế tool registry, safe execution sandbox, output validation, và cách LLM gọi external APIs.</p>
