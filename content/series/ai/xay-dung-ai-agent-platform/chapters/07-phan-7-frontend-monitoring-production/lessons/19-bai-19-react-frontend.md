---
id: 019c961a-aa19-7019-e019-aa1900000019
title: "Bài 19: React Frontend — Chat UI & Dashboard"
slug: bai-19-react-frontend
description: >-
  Build React frontend: Chat interface với streaming, Sidebar
  navigation, Session management, Model selector. Dashboard:
  usage analytics, workflow builder UI. Tailwind CSS, Zustand state.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 7: Frontend, Monitoring & Production"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Backend xong, cần UI để user tương tác. Bài này build React frontend với streaming chat, session management, và admin dashboard.

---

## 1. Project Setup

```bash
# packages/web — React + Vite + Tailwind
cd packages/web
npm create vite@latest . -- --template react-ts
npm install zustand react-router-dom react-markdown
npm install -D tailwindcss @tailwindcss/typography
```

### App Structure

```
packages/web/src/
├── main.tsx
├── App.tsx
├── api/
│   ├── client.ts         # HTTP client with auth
│   └── chat.ts           # Chat API + SSE streaming
├── stores/
│   ├── auth-store.ts     # Authentication state
│   ├── chat-store.ts     # Chat sessions & messages
│   └── ui-store.ts       # Sidebar, theme, modals
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── ChatInput.tsx
│   │   └── ToolCallIndicator.tsx
│   ├── Sidebar/
│   │   ├── SessionList.tsx
│   │   └── ModelSelector.tsx
│   └── Dashboard/
│       ├── UsageChart.tsx
│       └── WorkflowBuilder.tsx
└── pages/
    ├── ChatPage.tsx
    ├── DashboardPage.tsx
    ├── KnowledgePage.tsx
    └── SettingsPage.tsx
```

---

## 2. Streaming Chat Client

```typescript
// packages/web/src/api/chat.ts
export async function streamChat(
  message: string,
  sessionId: string,
  onEvent: (event: StreamEvent) => void,
): Promise<void> {
  const response = await fetch('/api/chat/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    // Parse SSE events
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const event = JSON.parse(line.slice(6));
          onEvent(event);
        } catch {
          // Skip malformed events
        }
      }
    }
  }
}
```

---

## 3. Chat Window Component

```tsx
// packages/web/src/components/Chat/ChatWindow.tsx
import { useRef, useEffect } from 'react';
import { useChatStore } from '../../stores/chat-store';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { ToolCallIndicator } from './ToolCallIndicator';

export function ChatWindow() {
  const { messages, isStreaming, streamingContent, activeToolCalls } = useChatStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Streaming response */}
        {isStreaming && streamingContent && (
          <MessageBubble
            message={{
              id: 'streaming',
              role: 'assistant',
              content: streamingContent,
              timestamp: new Date(),
            }}
            isStreaming
          />
        )}

        {/* Active tool calls */}
        {activeToolCalls.map((tc) => (
          <ToolCallIndicator key={tc.id} toolCall={tc} />
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
}
```

---

## 4. Chat Store (Zustand)

```typescript
// packages/web/src/stores/chat-store.ts
import { create } from 'zustand';
import { streamChat } from '../api/chat';

interface ChatState {
  messages: Message[];
  isStreaming: boolean;
  streamingContent: string;
  activeToolCalls: ToolCallInfo[];
  sessionId: string | null;

  sendMessage: (content: string) => Promise<void>;
  newSession: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isStreaming: false,
  streamingContent: '',
  activeToolCalls: [],
  sessionId: null,

  sendMessage: async (content: string) => {
    const sessionId = get().sessionId || crypto.randomUUID();

    // Add user message
    set((state) => ({
      sessionId,
      messages: [...state.messages, {
        id: crypto.randomUUID(),
        role: 'user',
        content,
        timestamp: new Date(),
      }],
      isStreaming: true,
      streamingContent: '',
    }));

    try {
      await streamChat(content, sessionId, (event) => {
        switch (event.type) {
          case 'text-delta':
            set((state) => ({
              streamingContent: state.streamingContent + event.delta,
            }));
            break;

          case 'tool-call-start':
            set((state) => ({
              activeToolCalls: [...state.activeToolCalls, {
                id: event.toolCallId,
                name: event.toolName,
                status: 'running',
              }],
            }));
            break;

          case 'tool-result':
            set((state) => ({
              activeToolCalls: state.activeToolCalls.filter(
                tc => tc.id !== event.toolCallId
              ),
            }));
            break;

          case 'finish':
            const finalContent = get().streamingContent;
            set((state) => ({
              messages: [...state.messages, {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: finalContent,
                timestamp: new Date(),
              }],
              isStreaming: false,
              streamingContent: '',
              activeToolCalls: [],
            }));
            break;
        }
      });
    } catch (error) {
      set({ isStreaming: false, streamingContent: '' });
    }
  },

  newSession: () => set({
    messages: [],
    sessionId: null,
    streamingContent: '',
    isStreaming: false,
  }),
}));
```

---

## 5. Message Bubble

```tsx
// packages/web/src/components/Chat/MessageBubble.tsx
import ReactMarkdown from 'react-markdown';

interface Props {
  message: Message;
  isStreaming?: boolean;
}

export function MessageBubble({ message, isStreaming }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose dark:prose-invert prose-sm max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}

        {isStreaming && (
          <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1" />
        )}
      </div>
    </div>
  );
}
```

---

## 6. Tổng kết

- **Streaming UI** — token-by-token display, tool call indicators
- **Zustand** — lightweight state management, no boilerplate
- **SSE client** — parse Server-Sent Events trong browser
- **Markdown rendering** — AI responses với code blocks, lists, tables

**Bài tiếp theo:** Monitoring, Observability & Production Deploy.
























































































































































































































































































































































































Chúc bạn thành công trong việc xây dựng AI platform của riêng mình! 🚀**Source code tham khảo:** [github.com/xdev-asia-labs/xClaw](https://github.com/xdev-asia-labs/xClaw)| **Production** | Frontend, Monitoring, Deploy | 19-20 || **Access** | Multi-tenant, RBAC, Channels | 17-18 || **Extensibility** | Skills, Domains, Plugins, MCP | 14-16 || **Automation** | Workflow Engine, Validation | 12-13 || **Knowledge** | Documents, Embeddings, RAG | 9-11 || **AI Core** | LLM Router, Tools, Agent, Streaming | 5-8 || **Foundation** | Monorepo, Database, Gateway | 1-4 ||-------|-----------|-----|| Layer | Component | Bài |Bạn đã xây dựng một **AI Agent Platform** hoàn chỉnh:## 7. Tổng kết Series---```- [ ] Audit trail for compliance- [ ] Latency percentile tracking (p50, p99)- [ ] Error rate alerts- [ ] Token usage dashboards- [ ] LLM cost tracking per tenant### Monitoring- [ ] Log aggregation pipeline- [ ] Error alerting (Slack/email)- [ ] Database backups (daily)- [ ] Graceful shutdown handling- [ ] Health check endpoints### Reliability- [ ] Image optimization / CDN- [ ] Streaming enabled for chat endpoints- [ ] Response caching for frequent queries- [ ] Connection pooling (PostgreSQL, MongoDB, Redis)### Performance- [ ] Database credentials not in code- [ ] HTTPS only (TLS termination at load balancer)- [ ] Rate limiting enabled- [ ] CORS restricted to known origins- [ ] API keys encrypted at rest- [ ] JWT_SECRET is strong (32+ random bytes)### Security```markdown## 6. Production Checklist---```            docker system prune -f            docker compose up -d --remove-orphans            docker compose pull            cd /opt/xclaw          script: |          key: ${{ secrets.DEPLOY_KEY }}          username: ${{ secrets.DEPLOY_USER }}          host: ${{ secrets.DEPLOY_HOST }}        with:        uses: appleboy/ssh-action@v1      - name: Deploy to server    steps:    runs-on: ubuntu-latest    needs: build  deploy:          cache-to: type=gha,mode=max          cache-from: type=gha          tags: ghcr.io/${{ github.repository }}:${{ github.sha }}          push: true        with:      - uses: docker/build-push-action@v5          password: ${{ secrets.GITHUB_TOKEN }}          username: ${{ github.actor }}          registry: ghcr.io        with:      - uses: docker/login-action@v3      - uses: docker/setup-buildx-action@v3      - uses: actions/checkout@v4    steps:    runs-on: ubuntu-latest    needs: test  build:      - run: npm run test      - run: npm run lint      - run: npm ci          cache: npm          node-version: 20        with:      - uses: actions/setup-node@v4      - uses: actions/checkout@v4    steps:    runs-on: ubuntu-latest  test:jobs:    branches: [main]  push:on:name: Build & Deploy# .github/workflows/deploy.yml```yaml## 5. CI/CD Pipeline---```chatLogger.info('Chat started', { sessionId, model: 'gpt-4o' });const chatLogger = logger.child({ component: 'chat' });const logger = new Logger({ service: 'xclaw' });// Usage}  }    console.log(JSON.stringify(entry));    // JSON structured logging — parseable by log aggregators    };      ...data,      ...this.context,      message,      level,      timestamp: new Date().toISOString(),    const entry = {  private log(level: string, message: string, data?: Record<string, unknown>) {  }    });      } : undefined,        name: error.name,        stack: error.stack,        message: error.message,      error: error ? {      ...data,    this.log('error', message, {  error(message: string, error?: Error, data?: Record<string, unknown>) {  }    this.log('info', message, data);  info(message: string, data?: Record<string, unknown>) {  }    return new Logger({ ...this.context, ...additionalContext });  child(additionalContext: Record<string, unknown>) {  }    this.context = context;  constructor(context: Record<string, unknown> = {}) {  private context: Record<string, unknown>;export class Logger {// packages/core/src/logging/logger.ts```typescript## 4. Structured Logging---```}  }    return { llmStats, toolStats, costByDay };    ]);      ]).toArray(),        { $sort: { _id: 1 } },        }},          requests: { $sum: 1 },          cost: { $sum: '$cost' },          _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },        { $group: {        { $match: { tenantId, timestamp: { $gte: since } } },      this.db.collection('llm_usage').aggregate([      // Cost per day      ]).toArray(),        }},          avgDuration: { $avg: '$durationMs' },          successRate: { $avg: { $cond: ['$success', 1, 0] } },          totalCalls: { $sum: 1 },          _id: '$toolName',        { $group: {        { $match: { tenantId, timestamp: { $gte: since } } },      this.db.collection('tool_usage').aggregate([      // Tool execution stats      ]).toArray(),        }},          avgLatency: { $avg: '$latencyMs' },          totalCost: { $sum: '$cost' },          totalTokens: { $sum: { $add: ['$promptTokens', '$completionTokens'] } },          totalRequests: { $sum: 1 },          _id: '$model',        { $group: {        { $match: { tenantId, timestamp: { $gte: since } } },      this.db.collection('llm_usage').aggregate([      // Total LLM usage    const [llmStats, toolStats, costByDay] = await Promise.all([    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);  async getUsageAnalytics(tenantId: string, days: number = 30) {  // Get usage analytics  }    });      timestamp: new Date(),      ...data,    await this.db.collection('tool_usage').insertOne({  }) {    durationMs: number;    success: boolean;    toolName: string;    tenantId: string;  async recordToolExecution(data: {  // Track tool execution  }    });      timestamp: new Date(),      ...data,    await this.db.collection('llm_usage').insertOne({  }) {    cost: number;    latencyMs: number;    completionTokens: number;    promptTokens: number;    model: string;    provider: string;    userId: string;    tenantId: string;  async recordLLMUsage(data: {  // Track LLM usage  private db: Db;export class MonitoringService {// packages/core/src/monitoring/monitoring-service.ts```typescript## 3. Monitoring Service---```CMD ["node", "packages/server/dist/index.js"]EXPOSE 3000USER xclawCOPY --from=builder --chown=xclaw:nodejs /app/package.json ./COPY --from=builder --chown=xclaw:nodejs /app/packages/*/dist ./packages/COPY --from=builder --chown=xclaw:nodejs /app/node_modules ./node_modulesRUN addgroup -g 1001 -S nodejs && adduser -S xclaw -u 1001WORKDIR /appFROM node:20-alpine AS runner# Production stageRUN npm run buildCOPY . .RUN npm ci --production=falseCOPY packages/*/package.json ./packages/COPY package.json package-lock.json ./WORKDIR /appFROM node:20-alpine AS builder# Dockerfile```dockerfile## 2. Dockerfile (Multi-stage Build)---```  redisdata:  mongodata:  pgdata:volumes:      - redisdata:/data    volumes:    image: redis:7-alpine  redis:      - MONGO_INITDB_DATABASE=xclaw    environment:      - mongodata:/data/db    volumes:    image: mongo:7  mongo:      retries: 5      timeout: 5s      interval: 10s      test: ["CMD-SHELL", "pg_isready -U user"]    healthcheck:      - POSTGRES_PASSWORD=pass      - POSTGRES_USER=user      - POSTGRES_DB=xclaw    environment:      - pgdata:/var/lib/postgresql/data    volumes:    image: postgres:16-alpine  postgres:      - VITE_API_URL=http://server:3000    environment:      - "3001:3001"    ports:      dockerfile: Dockerfile      context: ./packages/web    build:  web:      retries: 3      timeout: 10s      interval: 30s      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]    healthcheck:        condition: service_started      redis:        condition: service_started      mongo:        condition: service_healthy      postgres:    depends_on:      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}      - OPENAI_API_KEY=${OPENAI_API_KEY}      - JWT_SECRET=${JWT_SECRET}      - REDIS_URL=redis://redis:6379      - MONGODB_URL=mongodb://mongo:27017/xclaw      - DATABASE_URL=postgresql://user:pass@postgres:5432/xclaw      - NODE_ENV=production    environment:      - "3000:3000"    ports:      dockerfile: Dockerfile      context: .    build:  server:services:# docker-compose.yml```yaml## 1. Docker Compose — Production Stack---Bài cuối cùng — deploy AI Agent Platform lên production. Monitoring, alerting, cost tracking, và CI/CD pipeline.## Giới thiệu---  slug: xay-dung-ai-agent-platform  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"  id: 019c9619-bb03-7003-c003-bb0300000003course:section_title: "Phần 7: Frontend, Monitoring & Production"sort_order: 19video_url: nullis_free: trueduration_minutes: 240  traces. CI/CD pipeline với GitHub Actions.  error rates. Observability: structured logging, OpenTelemetry  health checks. Monitoring: usage analytics, cost tracking,  Production deployment: Docker Compose, environment config,description: >-slug: bai-20-monitoring-deploytitle: "Bài 20: Monitoring, Observability & Production Deploy"id: 019c961a-aa20-7020-e020-aa2000000020id: 019c961a-aa19-7019-e019-aa1900000019
title: "Bài 19: React Frontend — Chat UI & Dashboard"
slug: bai-19-react-frontend
description: >-
  Build React frontend: Chat interface với streaming, Sidebar
  navigation, Session management, Model selector. Dashboard:
  usage analytics, workflow builder UI. Tailwind CSS, Zustand state.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 7: Frontend, Monitoring & Production"
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: "Xây dựng AI Agent Platform từ Zero — Thực chiến với xClaw"
  slug: xay-dung-ai-agent-platform
---

## Giới thiệu

Backend xong, cần UI để user tương tác. Bài này build React frontend với streaming chat, session management, và admin dashboard.

---

## 1. Project Setup

```bash
# packages/web — React + Vite + Tailwind
cd packages/web
npm create vite@latest . -- --template react-ts
npm install zustand react-router-dom react-markdown
npm install -D tailwindcss @tailwindcss/typography
```

### App Structure

```
packages/web/src/
├── main.tsx
├── App.tsx
├── api/
│   ├── client.ts         # HTTP client with auth
│   └── chat.ts           # Chat API + SSE streaming
├── stores/
│   ├── auth-store.ts     # Authentication state
│   ├── chat-store.ts     # Chat sessions & messages
│   └── ui-store.ts       # Sidebar, theme, modals
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── ChatInput.tsx
│   │   └── ToolCallIndicator.tsx
│   ├── Sidebar/
│   │   ├── SessionList.tsx
│   │   └── ModelSelector.tsx
│   └── Dashboard/
│       ├── UsageChart.tsx
│       └── WorkflowBuilder.tsx
└── pages/
    ├── ChatPage.tsx
    ├── DashboardPage.tsx
    ├── KnowledgePage.tsx
    └── SettingsPage.tsx
```

---

## 2. Streaming Chat Client

```typescript
// packages/web/src/api/chat.ts
export async function streamChat(
  message: string,
  sessionId: string,
  onEvent: (event: StreamEvent) => void,
): Promise<void> {
  const response = await fetch('/api/chat/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    // Parse SSE events
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        try {
          const event = JSON.parse(line.slice(6));
          onEvent(event);
        } catch {
          // Skip malformed events
        }
      }
    }
  }
}
```

---

## 3. Chat Window Component

```tsx
// packages/web/src/components/Chat/ChatWindow.tsx
import { useRef, useEffect } from 'react';
import { useChatStore } from '../../stores/chat-store';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { ToolCallIndicator } from './ToolCallIndicator';

export function ChatWindow() {
  const { messages, isStreaming, streamingContent, activeToolCalls } = useChatStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {/* Streaming response */}
        {isStreaming && streamingContent && (
          <MessageBubble
            message={{
              id: 'streaming',
              role: 'assistant',
              content: streamingContent,
              timestamp: new Date(),
            }}
            isStreaming
          />
        )}

        {/* Active tool calls */}
        {activeToolCalls.map((tc) => (
          <ToolCallIndicator key={tc.id} toolCall={tc} />
        ))}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
}
```

---

## 4. Chat Store (Zustand)

```typescript
// packages/web/src/stores/chat-store.ts
import { create } from 'zustand';
import { streamChat } from '../api/chat';

interface ChatState {
  messages: Message[];
  isStreaming: boolean;
  streamingContent: string;
  activeToolCalls: ToolCallInfo[];
  sessionId: string | null;

  sendMessage: (content: string) => Promise<void>;
  newSession: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  isStreaming: false,
  streamingContent: '',
  activeToolCalls: [],
  sessionId: null,

  sendMessage: async (content: string) => {
    const sessionId = get().sessionId || crypto.randomUUID();

    // Add user message
    set((state) => ({
      sessionId,
      messages: [...state.messages, {
        id: crypto.randomUUID(),
        role: 'user',
        content,
        timestamp: new Date(),
      }],
      isStreaming: true,
      streamingContent: '',
    }));

    try {
      await streamChat(content, sessionId, (event) => {
        switch (event.type) {
          case 'text-delta':
            set((state) => ({
              streamingContent: state.streamingContent + event.delta,
            }));
            break;

          case 'tool-call-start':
            set((state) => ({
              activeToolCalls: [...state.activeToolCalls, {
                id: event.toolCallId,
                name: event.toolName,
                status: 'running',
              }],
            }));
            break;

          case 'tool-result':
            set((state) => ({
              activeToolCalls: state.activeToolCalls.filter(
                tc => tc.id !== event.toolCallId
              ),
            }));
            break;

          case 'finish':
            const finalContent = get().streamingContent;
            set((state) => ({
              messages: [...state.messages, {
                id: crypto.randomUUID(),
                role: 'assistant',
                content: finalContent,
                timestamp: new Date(),
              }],
              isStreaming: false,
              streamingContent: '',
              activeToolCalls: [],
            }));
            break;
        }
      });
    } catch (error) {
      set({ isStreaming: false, streamingContent: '' });
    }
  },

  newSession: () => set({
    messages: [],
    sessionId: null,
    streamingContent: '',
    isStreaming: false,
  }),
}));
```

---

## 5. Message Bubble

```tsx
// packages/web/src/components/Chat/MessageBubble.tsx
import ReactMarkdown from 'react-markdown';

interface Props {
  message: Message;
  isStreaming?: boolean;
}

export function MessageBubble({ message, isStreaming }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose dark:prose-invert prose-sm max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}

        {isStreaming && (
          <span className="inline-block w-2 h-4 bg-current animate-pulse ml-1" />
        )}
      </div>
    </div>
  );
}
```

---

## 6. Tổng kết

- **Streaming UI** — token-by-token display, tool call indicators
- **Zustand** — lightweight state management, no boilerplate
- **SSE client** — parse Server-Sent Events trong browser
- **Markdown rendering** — AI responses với code blocks, lists, tables

**Bài tiếp theo:** Monitoring, Observability & Production Deploy.
