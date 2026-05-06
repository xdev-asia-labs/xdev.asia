---
id: 019f0b20-b204-7001-e001-f2b8f9000204
title: 'レッスン 7: ストリーミングとリアルタイム — SSE、WebSocket、音声エージェント、マルチモーダル'
slug: bai-7-streaming-realtime
description: >-
  Server-Sent Events ストリーミング、WebSocket リアルタイム、Whisper STT、TTS
  (イレブンラボ/OpenAI)、マルチモーダル入力 (画像/音声/ビデオ)、音声エージェント アーキテクチャ、遅延の最適化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: コア チャットボット エンジン'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2841" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2841)"/>

  <!-- Decorations -->
  <g>
    <circle cx="999" cy="227" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="206" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="797" cy="185" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="164" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="143" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="177" x2="1100" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="207" x2="1050" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.712812921102,111 954.712812921102,143 927,159 899.287187078898,143 899.287187078898,111.00000000000001 927,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: ストリーミングとリアルタイム — SSE、</tspan>
      <tspan x="60" dy="42">WebSocket、音声エージェント、マルチモーダル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: コア チャットボット エンジン</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-streaming-architecture"><strong>1. ストリーミングアーキテクチャの概要</strong></h2>

<p>チャットボットの制作では、ストリーミング応答が必須です。ユーザーは完全な応答を受け取るまで 5 ～ 10 秒待つことを受け入れません。ストリーミング許可 <strong>各トークンを表示する</strong> LLM が生成されるとすぐに、知覚される遅延が最大 5 秒から最大 200 ミリ秒に短縮されます。</p>

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

<h2 id="2-sse-streaming"><strong>2. サーバー送信イベント (SSE) の実装</strong></h2>

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

<h2 id="3-websocket-realtime"><strong>3. WebSocketのリアルタイム通信</strong></h2>

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

<h2 id="4-streaming-resilience"><strong>4. ストリーミングの回復力 — バックプレッシャーと再接続</strong></h2>

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

<h2 id="5-voice-agent"><strong>5. 音声エージェントのアーキテクチャ — STT + TTS</strong></h2>

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

<h2 id="6-multimodal-input"><strong>6. マルチモーダル入力処理</strong></h2>

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

<h2 id="7-latency-optimization"><strong>7. レイテンシ最適化手法</strong></h2>

<table>
<thead>
<tr>
<th>テクニック</th>
<th>影響</th>
<th>実装</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>即時キャッシュ</strong></td>
<td>-40% TTFT</td>
<td>キャッシュ システム プロンプト プレフィックス (Anthropic/OpenAI)</td>
</tr>
<tr>
<td><strong>投機的デコード</strong></td>
<td>-30% 遅延</td>
<td>小さなモデルを使用してドラフトを作成し、大きなモデルを使用して検証します</td>
</tr>
<tr>
<td><strong>エッジ推論</strong></td>
<td>-80msネットワーク</td>
<td>小規模モデルをエッジにデプロイする (Cloudflare Workers AI)</td>
</tr>
<tr>
<td><strong>接続プーリング</strong></td>
<td>-100ms</td>
<td>LLM プロバイダーへのキープアライブ接続</td>
</tr>
<tr>
<td><strong>応答のキャッシュ</strong></td>
<td>-95% の遅延</td>
<td>同一/類似クエリのセマンティック キャッシュ</td>
</tr>
<tr>
<td><strong>パラレル RAG</strong></td>
<td>-50% 準備時間</td>
<td>検索と再ランキングを並行して実行する</td>
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

<h2 id="tong-ket"><strong>レッスン 7 のまとめ</strong></h2>

<ul>
<li><strong>SSE</strong> (Server-Sent Events) はサーバー→クライアントへの一方向ストリーミングに適しており、WebSocket よりもシンプルです</li>
<li><strong>Webソケット</strong> リアルタイム双方向用: タイピングインジケーター、生成停止、マルチユーザープレゼンス</li>
<li><strong>音声エージェント</strong> = STT (ウィスパー) + チャット エンジン + TTS (OpenAI/イレブンラボ)、ターゲット < 1.5 秒のエンドツーエンド</li>
<li><strong>マルチモーダル</strong>: LLM を送信する前に画像 (ビジョン モデル)、音声 (STT)、ファイル (テキスト抽出) を処理します。</li>
<li><strong>セマンティックキャッシュ</strong> 同様のクエリのレイテンシーを 95% 削減 – 非常に高い ROI</li>
</ul>

<p><strong>次の記事:</strong> 関数呼び出しとツールの使用 — 設計ツール レジストリ、安全な実行サンドボックス、出力検証、LLM が外部 API を呼び出す方法。</p>
