---
id: 019f0b20-b501-7001-e001-f2b8f9000501
title: 'Bài 16: Multi-Channel Integration — Omnichannel Gateway, Messenger, Zalo, Web Widget'
slug: bai-16-multi-channel-integration
description: >-
  Omnichannel gateway architecture, channel adapter pattern, Facebook Messenger,
  Zalo OA, Web Widget, LINE, Slack, Microsoft Teams, mobile SDK, message
  normalization.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Multi-Channel & Scale"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-omnichannel-architecture"><strong>1. Omnichannel Gateway Architecture</strong></h2>

<p>Enterprise chatbot cần hoạt động trên <strong>nhiều channel đồng thời</strong> — Web, Messenger, Zalo, Slack, Teams — với <strong>unified conversation</strong> xuyên suốt các channel.</p>

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

<h2 id="2-channel-adapter"><strong>2. Channel Adapter Pattern</strong></h2>

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

<h2 id="3-messenger-adapter"><strong>3. Facebook Messenger Adapter</strong></h2>

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

<h2 id="4-zalo-adapter"><strong>4. Zalo OA Adapter (Vietnam-specific)</strong></h2>

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

<h2 id="5-web-widget"><strong>5. Embeddable Web Widget</strong></h2>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 16</strong></h2>

<ul>
<li><strong>Channel Adapter Pattern</strong>: Mỗi channel có adapter riêng — normalize → unified message → chat engine</li>
<li><strong>Response Adaptation</strong>: Auto-adjust output theo channel capabilities (markdown, buttons, text length)</li>
<li><strong>Messenger</strong>: Webhook verification, quick replies, carousel templates</li>
<li><strong>Zalo OA</strong>: MAC verification, text + image messages, list templates (Vietnam-focused)</li>
<li><strong>Web Widget</strong>: WebSocket-based, full markdown + file upload + voice, 1-line embed</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Human Handoff & Hybrid Support — escalation triggers, agent routing, live chat integration, seamless handoff UX.</p>
