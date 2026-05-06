---
id: 019c961a-aa18-7018-e018-aa1800000018
title: 第 18 課：聊天管道 — 多平台訊息傳遞
slug: bai-18-chat-channels
description: >-
  頻道轉接器模式：Web Chat、Telegram、Slack、Discord、Zalo、Facebook
  Messenger、LINE、WhatsApp。統一訊息格式、通道特定功能、Webhook 處理。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 17
section_title: 第 6 部分：多租戶、RBAC 和通道
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4137" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4137)"/>

  <!-- Decorations -->
  <g>
    <circle cx="850" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="30" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="850" cy="160" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="200" x2="1100" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="230" x2="1050" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="930.3108891324554,82.5 930.3108891324554,117.5 900,135 869.6891108675446,117.5 869.6891108675446,82.50000000000001 900,65" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🧠 人工智慧與機器學習 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：聊天管道 — 多平台</tspan>
      <tspan x="60" dy="42">訊息傳遞</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：多租戶、RBAC 和通道</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

人工智慧代理僅在用戶可以從熟悉的平台存取它們時才有用。聊天頻道允許代理部署到 Telegram、Slack、Discord 和許多其他平台 - 所有平台都使用相同的代理核心。

---

## 1. 通道適配器介面

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

## 2. 電報頻道

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

## 3. 頻道路由器

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

## 4. 支援的頻道

|頻道|特點|適配器|
|--------|----------|--------|
| **網頁聊天** |完整豐富的 UI、串流、檔案上傳 |內建 React 應用程式 |
| **電報** | Markdown、內嵌按鈕、群組 |機器人 API + webhooks |
| **鬆弛** |執行緒、反應、斜線指令 |事件 API |
| **不和諧** |嵌入、執行緒、斜線指令 | Discord.js |
| **扎洛** |越南語訊息、OA API | Zalo OA API |
| **Facebook Messenger** |快速回覆、模板 |圖形API |
| **線路** |豐富的選單，靈活的訊息|訊息API |
| **WhatsApp** |範本、媒體、商業 API |雲端API |

---

## 5. 總結

- **適配器模式** — 適用於所有平台的統一接口
- **Channel Router** — webhook 閘道→解析→agent.chat()→傳送回應
- **用戶映射** — 外部平台用戶→內部用戶
- **一個代理，多個頻道** - 相同的人工智慧，不同的前端

**下一篇文章：** React Frontend - 建立網路聊天介面。
