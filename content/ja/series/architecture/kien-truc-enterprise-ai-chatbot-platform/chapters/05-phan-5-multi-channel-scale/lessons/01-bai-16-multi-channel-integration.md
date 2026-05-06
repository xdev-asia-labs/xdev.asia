---
id: 019f0b20-b501-7001-e001-f2b8f9000501
title: 'レッスン 16: マルチチャネル統合 — オムニチャネル ゲートウェイ、メッセンジャー、Zalo、Web ウィジェット'
slug: bai-16-multi-channel-integration
description: >-
  オムニチャネル ゲートウェイ アーキテクチャ、チャネル アダプター パターン、Facebook Messenger、Zalo OA、Web
  Widget、LINE、Slack、Microsoft Teams、モバイル SDK、メッセージ正規化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 5: マルチチャネルとスケール'
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1307" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1307)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="285" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="195" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="280" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="105" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="990.9807621135332,150 990.9807621135332,180 965,195 939.0192378864668,180 939.0192378864668,150 965,135" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: マルチチャネル統合 —</tspan>
      <tspan x="60" dy="42">オムニチャネル ゲートウェイ、メッセンジャー、Zalo、Web</tspan>
      <tspan x="60" dy="42">ウィジェット</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">エンタープライズ AI チャットボット プラットフォームのアーキテクチャ — プロトタイプから本番まで</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: マルチチャネルとスケール</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-omnichannel-architecture"><strong>1. オムニチャネル ゲートウェイ アーキテクチャ</strong></h2>

<p>エンタープライズチャットボットが取り組む必要があるのは、 <strong>複数のチャンネルを同時に</strong> — Web、メッセンジャー、Zalo、Slack、Teams — <strong>統一された会話</strong> チャネル全体で。</p>

<pre><code class="language-text">
┌────────── OMNICHANNEL GATEWAY ────────────────────────┐
│                                                        │
│  ┌────────┐ ┌────────┐ ┌──────┐ ┌──────┐ ┌─────────┐  │
│  │  Web   │ │Messengr│ │ Zalo │ │Slack │ │  Teams  │  │
│  │Widget  │ │        │ │  OA  │ │      │ │         │  │
│  └───┬────┘ └───┬────┘ └──┬───┘ └──┬───┘ └────┬────┘  │
│      │          │         │        │          │       │
│  ┌───▼──────────▼─────────▼────────▼──────────▼───┐   │
│  │            CHANNEL ADAPTER LAYER               │   │
│  │   (Normalize → Unified Message → Enrich)       │   │
│  └────────────────────┬───────────────────────────┘   │
│                       │                               │
│            ┌──────────▼──────────┐                    │
│            │  UNIFIED MESSAGE    │                    │
│            │  {text, images,     │                    │
│            │   channel, userId}  │                    │
│            └──────────┬──────────┘                    │
│                       │                               │
│            ┌──────────▼──────────┐                    │
│            │   CHAT ENGINE       │                    │
│            │   (Same for all     │                    │
│            │    channels)        │                    │
│            └─────────────────────┘                    │
└────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-channel-adapter"><strong>2. チャネルアダプターパターン</strong></h2>

<pre><code class="language-typescript">
interface UnifiedMessage {
  channelType: 'web' | 'messenger' | 'zalo' | 'slack' | 'teams' | 'line';
  channelUserId: string;
  platformMessageId: string;
  text?: string;
  images?: { url: string; mimeType: string }[];
  audio?: { url: string; duration: number }[];
  location?: { lat: number; lng: number };
  quickReplyPayload?: string;
  metadata: Record&lt;string, unknown&gt;;
}

interface ChannelAdapter {
  channelType: string;
  handleWebhook(req: Request): Promise&lt;UnifiedMessage&gt;;
  sendResponse(userId: string, response: BotResponse): Promise&lt;void&gt;;
  getCapabilities(): ChannelCapabilities;
}

interface ChannelCapabilities {
  maxTextLength: number;
  supportsImages: boolean;
  supportsButtons: boolean;
  supportsCarousel: boolean;
  supportsQuickReplies: boolean;
  supportsAudio: boolean;
  supportsMarkdown: boolean;
  supportsRichCards: boolean;
}

class ChannelRouter {
  private adapters = new Map&lt;string, ChannelAdapter&gt;();

  register(adapter: ChannelAdapter): void {
    this.adapters.set(adapter.channelType, adapter);
  }

  async handleIncoming(channelType: string, req: Request): Promise&lt;void&gt; {
    const adapter = this.adapters.get(channelType);
    if (!adapter) throw new Error(`Unknown channel: ${channelType}`);

    // 1. Parse incoming message
    const message = await adapter.handleWebhook(req);

    // 2. Resolve or create conversation
    const conversation = await this.resolveConversation(message);

    // 3. Process through chat engine (channel-agnostic)
    const response = await this.chatEngine.processMessage(
      conversation.id,
      message.text ?? '',
      { images: message.images, audio: message.audio },
    );

    // 4. Adapt response to channel capabilities
    const adaptedResponse = this.adaptResponse(response, adapter.getCapabilities());

    // 5. Send back via channel
    await adapter.sendResponse(message.channelUserId, adaptedResponse);
  }

  private adaptResponse(
    response: BotResponse,
    capabilities: ChannelCapabilities,
  ): BotResponse {
    let adapted = { ...response };

    // Truncate text if exceeds channel limit
    if (adapted.text &amp;&amp; adapted.text.length &gt; capabilities.maxTextLength) {
      adapted.text = adapted.text.slice(0, capabilities.maxTextLength - 3) + '...';
    }

    // Convert markdown to plain text if not supported
    if (!capabilities.supportsMarkdown &amp;&amp; adapted.text) {
      adapted.text = this.stripMarkdown(adapted.text);
    }

    // Remove buttons if not supported
    if (!capabilities.supportsButtons) {
      adapted.buttons = undefined;
    }

    return adapted;
  }
}
</code></pre>

<h2 id="3-messenger-adapter"><strong>3. Facebookメッセンジャーアダプター</strong></h2>

<pre><code class="language-typescript">
class MessengerAdapter implements ChannelAdapter {
  channelType = 'messenger';

  async handleWebhook(req: Request): Promise&lt;UnifiedMessage&gt; {
    const body = req.body;

    // Verify signature
    this.verifySignature(req.headers['x-hub-signature-256'], req.rawBody);

    const entry = body.entry[0];
    const event = entry.messaging[0];

    return {
      channelType: 'messenger',
      channelUserId: event.sender.id,
      platformMessageId: event.message.mid,
      text: event.message?.text,
      images: event.message?.attachments
        ?.filter(a =&gt; a.type === 'image')
        .map(a =&gt; ({ url: a.payload.url, mimeType: 'image/jpeg' })),
      quickReplyPayload: event.message?.quick_reply?.payload,
      metadata: { pageId: entry.id },
    };
  }

  async sendResponse(userId: string, response: BotResponse): Promise&lt;void&gt; {
    const messages = this.formatForMessenger(response);

    for (const msg of messages) {
      await this.client.post('/me/messages', {
        recipient: { id: userId },
        message: msg,
        messaging_type: 'RESPONSE',
      });
    }
  }

  private formatForMessenger(response: BotResponse): MessengerMessage[] {
    const messages: MessengerMessage[] = [];

    // Text message
    if (response.text) {
      messages.push({ text: response.text });
    }

    // Quick replies
    if (response.quickReplies?.length) {
      messages.push({
        text: response.quickReplyPrompt ?? 'Chọn một tùy chọn:',
        quick_replies: response.quickReplies.map(qr =&gt; ({
          content_type: 'text',
          title: qr.label,
          payload: qr.value,
        })),
      });
    }

    // Carousel
    if (response.cards?.length) {
      messages.push({
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: response.cards.map(card =&gt; ({
              title: card.title,
              subtitle: card.subtitle,
              image_url: card.imageUrl,
              buttons: card.buttons?.map(btn =&gt; ({
                type: btn.url ? 'web_url' : 'postback',
                title: btn.label,
                url: btn.url,
                payload: btn.payload,
              })),
            })),
          },
        },
      });
    }

    return messages;
  }

  getCapabilities(): ChannelCapabilities {
    return {
      maxTextLength: 2000,
      supportsImages: true,
      supportsButtons: true,
      supportsCarousel: true,
      supportsQuickReplies: true,
      supportsAudio: true,
      supportsMarkdown: false,
      supportsRichCards: true,
    };
  }
}
</code></pre>

<h2 id="4-zalo-adapter"><strong>4. Zalo OA アダプター (ベトナム固有)</strong></h2>

<pre><code class="language-typescript">
class ZaloOAAdapter implements ChannelAdapter {
  channelType = 'zalo';

  async handleWebhook(req: Request): Promise&lt;UnifiedMessage&gt; {
    const event = req.body;

    // Verify MAC
    this.verifyMAC(event, req.headers['x-zalo-mac']);

    if (event.event_name === 'user_send_text') {
      return {
        channelType: 'zalo',
        channelUserId: event.sender.id,
        platformMessageId: event.message.msg_id,
        text: event.message.text,
        metadata: { oaId: event.recipient.id },
      };
    }

    if (event.event_name === 'user_send_image') {
      return {
        channelType: 'zalo',
        channelUserId: event.sender.id,
        platformMessageId: event.message.msg_id,
        images: [{ url: event.message.url, mimeType: 'image/jpeg' }],
        metadata: { oaId: event.recipient.id },
      };
    }

    throw new Error(`Unsupported Zalo event: ${event.event_name}`);
  }

  async sendResponse(userId: string, response: BotResponse): Promise&lt;void&gt; {
    if (response.text) {
      await this.client.post('/oa/message/cs', {
        recipient: { user_id: userId },
        message: { text: response.text },
      });
    }

    if (response.cards?.length) {
      await this.client.post('/oa/message/cs', {
        recipient: { user_id: userId },
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'list',
              elements: response.cards.map(card =&gt; ({
                title: card.title,
                subtitle: card.subtitle,
                image_url: card.imageUrl,
                default_action: { type: 'oa.open.url', url: card.url },
              })),
            },
          },
        },
      });
    }
  }

  getCapabilities(): ChannelCapabilities {
    return {
      maxTextLength: 2000,
      supportsImages: true,
      supportsButtons: true,
      supportsCarousel: true,
      supportsQuickReplies: true,
      supportsAudio: false,
      supportsMarkdown: false,
      supportsRichCards: true,
    };
  }
}
</code></pre>

<h2 id="5-web-widget"><strong>5. 埋め込み可能な Web ウィジェット</strong></h2>

<pre><code class="language-typescript">
// Widget embed script (1-line integration)
// &lt;script src="https://chatbot.example.com/widget.js" data-tenant="tenant-id"&gt;&lt;/script&gt;

class WebWidgetAdapter implements ChannelAdapter {
  channelType = 'web';

  // Web widget uses WebSocket directly (no webhook needed)
  async handleWebhook(req: Request): Promise&lt;UnifiedMessage&gt; {
    // Not used — web widget connects via WebSocket
    throw new Error('Web widget uses WebSocket, not webhooks');
  }

  // Widget configuration per tenant
  getWidgetConfig(tenantId: string): WidgetConfig {
    return {
      position: 'bottom-right',
      theme: {
        primaryColor: '#0066FF',
        botAvatar: '/avatar.png',
        headerText: 'Hỗ trợ khách hàng',
      },
      features: {
        fileUpload: true,
        voiceInput: true,
        quickReplies: true,
        typing: true,
        readReceipts: true,
      },
      i18n: { locale: 'vi' },
    };
  }

  getCapabilities(): ChannelCapabilities {
    return {
      maxTextLength: 10000,
      supportsImages: true,
      supportsButtons: true,
      supportsCarousel: true,
      supportsQuickReplies: true,
      supportsAudio: true,
      supportsMarkdown: true,    // Web supports full markdown
      supportsRichCards: true,
    };
  }
}
</code></pre>

<h2 id="tong-ket"><strong>レッスン 16 のまとめ</strong></h2>

<ul>
<li><strong>チャネルアダプターパターン</strong>: 各チャネルには独自のアダプターがあります - 正規化 → 統合メッセージ → チャット エンジン</li>
<li><strong>応答の適応</strong>: チャンネルの機能 (マークダウン、ボタン、テキストの長さ) に応じて出力を自動調整します</li>
<li><strong>メッセンジャー</strong>: Webhook 検証、クイック返信、カルーセル テンプレート</li>
<li><strong>ザロOA</strong>: MAC 検証、テキスト + 画像メッセージ、リスト テンプレート (ベトナム中心)</li>
<li><strong>ウェブウィジェット</strong>: WebSocket ベース、フルマークダウン + ファイルアップロード + 音声、1 行埋め込み</li>
</ul>

<p><strong>次の記事:</strong> ヒューマン ハンドオフとハイブリッド サポート — エスカレーション トリガー、エージェント ルーティング、ライブ チャット統合、シームレスなハンドオフ UX。</p>
