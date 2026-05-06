---
id: 019c961a-aa16-7016-e016-aa1600000016
title: 第 16 課：外掛系統和 MCP 協議
slug: bai-16-plugin-mcp
description: 插件架構：載入/卸載、沙盒執行、市場。 MCP（模型上下文協定）：伺服器實作、工具公開、資源管理。第三方整合。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: 第 5 部分：技能、領域和插件
course:
  id: 019c9619-bb03-7003-c003-bb0300000003
  title: 從零開始搭建AI代理平台－與xClaw實戰
  slug: xay-dung-ai-agent-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1511" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1511)"/>

  <!-- Decorations -->
  <g>
    <circle cx="639" cy="267" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="717" cy="165" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="244" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.712812921102,131 974.712812921102,163 947,179 919.287187078898,163 919.287187078898,131 947,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 人工智慧與機器學習 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：外掛系統和 MCP 協議</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從零開始搭建AI代理平台－與xClaw實戰</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：技能、領域和插件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

插件系統允許第三方擴充平台。 MCP（模型上下文協定）是 AI 工具互通性的新標準 - xClaw 實作了 MCP 伺服器（公開工具）和 MCP 用戶端（使用外部工具）。

---

## 1. 外掛程式架構

```typescript
// packages/core/src/plugins/types.ts
export interface Plugin {
  id: string;
  name: string;
  version: string;
  description: string;

  // Lifecycle hooks
  onLoad(context: PluginContext): Promise<void>;
  onUnload(): Promise<void>;

  // What plugin provides
  tools?: AdditionalTool[];
  skills?: SkillDefinition[];
  middleware?: MiddlewareFunction[];
  routes?: RouteDefinition[];
}

export interface PluginContext {
  config: Record<string, unknown>;
  logger: Logger;
  eventBus: EventBus;
  registerTool(def: ToolDefinition, handler: ToolHandler): void;
  registerSkill(skill: SkillDefinition): void;
}
```

### 外掛程式管理器

```typescript
// packages/core/src/plugins/plugin-manager.ts
export class PluginManager {
  private plugins = new Map<string, Plugin>();
  private context: PluginContext;

  async loadPlugin(plugin: Plugin): Promise<void> {
    if (this.plugins.has(plugin.id)) {
      throw new Error(`Plugin ${plugin.id} already loaded`);
    }

    // Initialize plugin
    await plugin.onLoad(this.context);

    // Register tools
    if (plugin.tools) {
      for (const tool of plugin.tools) {
        this.context.registerTool(tool.definition, tool.handler);
      }
    }

    // Register skills
    if (plugin.skills) {
      for (const skill of plugin.skills) {
        this.context.registerSkill(skill);
      }
    }

    this.plugins.set(plugin.id, plugin);
    console.log(`Plugin loaded: ${plugin.name} v${plugin.version}`);
  }

  async unloadPlugin(pluginId: string): Promise<void> {
    const plugin = this.plugins.get(pluginId);
    if (!plugin) return;

    await plugin.onUnload();
    this.plugins.delete(pluginId);
    console.log(`Plugin unloaded: ${plugin.name}`);
  }

  listPlugins(): { id: string; name: string; version: string }[] {
    return Array.from(this.plugins.values()).map(p => ({
      id: p.id,
      name: p.name,
      version: p.version,
    }));
  }
}
```

---

## 2. 外掛程式範例：GitHub 集成

```typescript
// packages/integrations/src/github-plugin.ts
export const githubPlugin: Plugin = {
  id: 'github',
  name: 'GitHub Integration',
  version: '1.0.0',
  description: 'GitHub issues, PRs, and repository management',

  async onLoad(ctx: PluginContext) {
    const token = ctx.config.githubToken as string;
    if (!token) throw new Error('GitHub token required');
  },

  async onUnload() {},

  tools: [
    {
      definition: {
        name: 'github_list_issues',
        description: 'List issues in a GitHub repository',
        parameters: {
          type: 'object',
          properties: {
            repo: { type: 'string', description: 'owner/repo format' },
            state: { type: 'string', enum: ['open', 'closed', 'all'] },
          },
          required: ['repo'],
        },
      },
      handler: async (args) => {
        const { repo, state = 'open' } = args as { repo: string; state?: string };
        const response = await fetch(
          `https://api.github.com/repos/${repo}/issues?state=${state}`,
          { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } },
        );
        return response.json();
      },
    },
    {
      definition: {
        name: 'github_create_issue',
        description: 'Create a new issue',
        parameters: {
          type: 'object',
          properties: {
            repo: { type: 'string', description: 'owner/repo' },
            title: { type: 'string', description: 'Issue title' },
            body: { type: 'string', description: 'Issue body' },
          },
          required: ['repo', 'title'],
        },
      },
      handler: async (args) => {
        const { repo, title, body } = args as { repo: string; title: string; body?: string };
        const response = await fetch(
          `https://api.github.com/repos/${repo}/issues`,
          {
            method: 'POST',
            headers: {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, body }),
          },
        );
        return response.json();
      },
    },
  ],
};
```

---

## 3. MCP 伺服器實現

```typescript
// packages/core/src/mcp/mcp-server.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

export class MCPServer {
  private server: Server;
  private toolRegistry: ToolRegistry;

  constructor(toolRegistry: ToolRegistry) {
    this.toolRegistry = toolRegistry;

    this.server = new Server(
      { name: 'xclaw-mcp', version: '1.0.0' },
      { capabilities: { tools: {} } },
    );

    this.setupHandlers();
  }

  private setupHandlers() {
    // List available tools
    this.server.setRequestHandler('tools/list', async () => {
      const tools = this.toolRegistry.getDefinitions();

      return {
        tools: tools.map(t => ({
          name: t.name,
          description: t.description,
          inputSchema: t.parameters,
        })),
      };
    });

    // Execute a tool
    this.server.setRequestHandler('tools/call', async (request) => {
      const { name, arguments: args } = request.params;

      const result = await this.toolRegistry.execute(
        name,
        args as Record<string, unknown>,
        { tenantId: 'mcp', userId: 'mcp', sessionId: 'mcp' },
      );

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(result.result),
        }],
        isError: !result.success,
      };
    });
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.log('MCP Server started on stdio');
  }
}
```

---

## 4. MCP 用戶端 — 使用外部工具

```typescript
// packages/core/src/mcp/mcp-client.ts
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

export class MCPClient {
  private client: Client;

  async connect(command: string, args: string[]) {
    const transport = new StdioClientTransport({ command, args });
    this.client = new Client({ name: 'xclaw', version: '1.0.0' });
    await this.client.connect(transport);
  }

  // Import external MCP tools into xClaw's ToolRegistry
  async importTools(registry: ToolRegistry) {
    const { tools } = await this.client.listTools();

    for (const tool of tools) {
      registry.register(
        {
          name: `mcp_${tool.name}`,
          description: tool.description || '',
          parameters: tool.inputSchema as ToolDefinition['parameters'],
        },
        async (args) => {
          const result = await this.client.callTool({
            name: tool.name,
            arguments: args,
          });
          return result.content;
        },
      );
    }

    console.log(`Imported ${tools.length} MCP tools`);
  }
}
```

---

## 5. 總結

- **插件系統** — 生命週期掛鉤（加載/卸載），提供工具+技能+路線
- **MCP 伺服器** — 將 xClaw 工具公開給 Claude Desktop、Cursor 等。
- **MCP 用戶端** — 將外部 MCP 工具匯入 xClaw
- **雙向** — xClaw 既是 MCP 伺服器也是 MCP 用戶端

**下一篇文章：** 多租用戶 RBAC — 具有精細權限的隔離租用戶。
