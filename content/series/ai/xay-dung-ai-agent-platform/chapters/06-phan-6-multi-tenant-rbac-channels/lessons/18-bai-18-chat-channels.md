---
id: 019c961a-aa18-7018-e018-aa1800000018
title: "Bài 18: Chat Channels — Multi-platform Messaging"
slug: bai-18-chat-channels
description: >-
  Channel adapter pattern: Web Chat, Telegram, Slack, Discord,
  Zalo, Facebook Messenger, LINE, WhatsApp. Unified message
  format, channel-specific features, webhook handling.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 6: Multi-tenant, RBAC & Channels"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

AI agent chỉ hữu ích khi user có thể access nó từ familiar platforms. Chat Channels cho phép deploy agent lên Telegram, Slack, Discord, và nhiều platform khác — tất cả dùng cùng một Agent core.

---

## 1. Channel Adapter Interface

```typescript
// packages/channels/src/types.ts
export interface ChannelAdapter {
  readonly channelType: string;

  // Initialize channel (set up webhooks, etc.)
  initialize(config: ChannelConfig): Promise<void>;

  // Send message to channel
  sendMessage(channelId: string, message: ChannelMessage): Promise<void>;

  // Parse incoming webhook to unified format
  parseIncoming(rawPayload: unknown): IncomingMessage;

  // Cleanup
  shutdown(): Promise<void>;
}

export interface ChannelMessage {
  text: string;
  markdown?: string;
  images?: string[];
  buttons?: { label: string; action: string }[];
  metadata?: Record<string, unknown>;
}

export interface IncomingMessage {
  channelType: string;
  channelId: string;        // channel/group ID
  userId: string;           // user ID on the platform
  userName: string;
  text: string;
  images?: string[];
  replyToMessageId?: string;
  raw: unknown;             // Original payload
}

export interface ChannelConfig {
  token: string;
  webhookUrl?: string;
  additionalConfig?: Record<string, unknown>;
}
```

---

## 2. Telegram Channel

```typescript
// packages/channels/telegram/src/telegram-adapter.ts
export class TelegramAdapter implements ChannelAdapter {
  readonly channelType = 'telegram';
  private bot: TelegramBot;

  async initialize(config: ChannelConfig) {
    this.bot = new TelegramBot(config.token);

    if (config.webhookUrl) {
      await this.bot.setWebhook(config.webhookUrl);
    }
  }

  parseIncoming(payload: unknown): IncomingMessage {
    const update = payload as TelegramUpdate;
    const msg = update.message!;

    return {
      channelType: 'telegram',
      channelId: String(msg.chat.id),
      userId: String(msg.from!.id),
      userName: msg.from!.first_name,
      text: msg.text || '',
      images: msg.photo?.map(p => p.file_id),
      replyToMessageId: msg.reply_to_message
        ? String(msg.reply_to_message.message_id)
        : undefined,
      raw: payload,
    };
  }

  async sendMessage(chatId: string, message: ChannelMessage) {
    if (message.markdown) {
      await this.bot.sendMessage(chatId, message.markdown, {
        parse_mode: 'MarkdownV2',
      });
    } else {
      await this.bot.sendMessage(chatId, message.text);
    }

    // Send images if any
    if (message.images) {
      for (const image of message.images) {
        await this.bot.sendPhoto(chatId, image);
      }
    }
  }

  async shutdown() {
    await this.bot.deleteWebhook();
  }
}
```

---

## 3. Channel Router

```typescript
// packages/gateway/src/channels/channel-router.ts
export class ChannelRouter {
  private channels = new Map<string, ChannelAdapter>();
  private agent: Agent;

  register(adapter: ChannelAdapter) {
    this.channels.set(adapter.channelType, adapter);
  }

  // Webhook handler — receives messages from all channels
  async handleWebhook(channelType: string, payload: unknown): Promise<void> {
    const adapter = this.channels.get(channelType);
    if (!adapter) throw new Error(`Unknown channel: ${channelType}`);

    // Parse to unified format
    const incoming = adapter.parseIncoming(payload);

    // Find or create user mapping
    const user = await this.resolveUser(incoming);

    // Chat with agent
    const response = await this.agent.chat(
      incoming.text,
      {
        tenantId: user.tenantId,
        userId: user.id,
        sessionId: `${channelType}:${incoming.channelId}`,
      },
    );

    // Send response back through the same channel
    await adapter.sendMessage(incoming.channelId, {
      text: response,
      markdown: response,
    });
  }
}

// Webhook routes
app.post('/webhooks/telegram', async (c) => {
  const payload = await c.req.json();
  await channelRouter.handleWebhook('telegram', payload);
  return c.json({ ok: true });
});

app.post('/webhooks/slack', async (c) => {
  const payload = await c.req.json();
  await channelRouter.handleWebhook('slack', payload);
  return c.json({ ok: true });
});
```

---

## 4. Supported Channels

| Channel | Features | Adapter |
|---------|----------|---------|
| **Web Chat** | Full rich UI, streaming, file upload | Built-in React app |
| **Telegram** | Markdown, inline buttons, groups | Bot API + webhooks |
| **Slack** | Threads, reactions, slash commands | Events API |
| **Discord** | Embeds, threads, slash commands | Discord.js |
| **Zalo** | Vietnamese messaging, OA API | Zalo OA API |
| **Facebook Messenger** | Quick replies, templates | Graph API |
| **LINE** | Rich menus, flex messages | Messaging API |
| **WhatsApp** | Templates, media, business API | Cloud API |

---

## 5. Tổng kết

- **Adapter Pattern** — unified interface cho tất cả platforms
- **Channel Router** — webhook gateway → parse → agent.chat() → send response
- **User mapping** — external platform user → internal user
- **One agent, many channels** — same AI, different frontends

**Bài tiếp theo:** React Frontend — Build the web chat interface.
