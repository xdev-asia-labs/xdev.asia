---
id: 019f1c30-a403-7001-c001-v1b3c0d10403
title: 第 13 課：MCP 伺服器 — 將 AI 連接到外部世界
slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
description: >-
  什麼是模型上下文協定 (MCP)。在 VS Code 中安裝 MCP 伺服器。 Figma MCP、GitHub MCP、資料庫 MCP。建立自訂 MCP
  伺服器。安全考慮。實際用例：設計到程式碼、資料庫查詢、API 整合。用於自動化的副駕駛掛鉤。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：自訂和擴充 Copilot
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="221" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="175" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="152" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="129" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 程式設計 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：MCP 伺服器 — 將 AI 連接到世界</tspan>
      <tspan x="60" dy="42">外面的世界</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：自訂和擴充 Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-mcp-la-gi"><strong>1.什麼是模型上下文協定（MCP）？</strong></h2>

<p><strong>MCP</strong> 是一個標準協議，允許人工智慧代理與 <strong>外部工具和服務</strong>。您無需自行編寫整合程式碼，而是安裝 MCP 伺服器來擴充 Copilot 的功能。</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              MCP ARCHITECTURE                    │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐     ┌────────────┐                │
│  │ Copilot  │────▶│ MCP Server │                │
│  │ Agent    │◀────│ (Figma)    │                │
│  └──────────┘     └────────────┘                │
│       │                                          │
│       │           ┌────────────┐                │
│       └──────────▶│ MCP Server │                │
│       ◀───────────│ (Database) │                │
│                   └────────────┘                │
│       │                                          │
│       │           ┌────────────┐                │
│       └──────────▶│ MCP Server │                │
│       ◀───────────│ (GitHub)   │                │
│                   └────────────┘                │
│                                                  │
│  Copilot dùng tools từ MCP servers              │
│  như dùng built-in tools                        │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-cai-dat-mcp-servers"><strong>2. 在 VS Code 中安裝 MCP 伺服器</strong></h2>

<h3>2.1. settings.json 中的配置</h3>
<pre><code class="language-json">{
  "mcp": {
    "servers": {
      "figma": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-figma"],
        "env": {
          "FIGMA_ACCESS_TOKEN": "${env:FIGMA_ACCESS_TOKEN}"
        }
      },
      "github": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-github"],
        "env": {
          "GITHUB_TOKEN": "${env:GITHUB_TOKEN}"
        }
      },
      "postgres": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-postgres"],
        "env": {
          "DATABASE_URL": "${env:DATABASE_URL}"
        }
      }
    }
  }
}
</code></pre>

<h3>2.2.每個專案的配置 (.vscode/mcp.json)</h3>
<pre><code class="language-json">{
  "servers": {
    "project-db": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-postgres"],
      "env": {
        "DATABASE_URL": "postgresql://dev:password@localhost:5432/myapp_dev"
      }
    }
  }
}
</code></pre>

<h2 id="3-mcp-servers-pho-bien"><strong>3. 流行的MCP伺服器</strong></h2>

<h3>3.1. Figma MCP－從設計到程式碼</h3>
<p>將 Figma 與 Copilot 連接，將設計轉換為程式碼：</p>

<pre><code class="language-text">// Prompt ví dụ:
Look at the Figma design for the login page and create
a React component that matches it exactly.
Use TailwindCSS for styling.
</code></pre>

<p>2026 年 3 月：Figma MCP 伺服器成為可能 <strong>直接從 VS Code 產生設計層</strong>。</p>

<h3>3.2. GitHub MCP — 儲存庫操作</h3>
<pre><code class="language-text">// Copilot có thể:
- Tìm và phân tích issues
- Đọc pull request comments
- Tạo issues từ code analysis
- Review PR changes
</code></pre>

<h3>3.3.資料庫 MCP — 查詢與架構</h3>
<pre><code class="language-text">// Prompt ví dụ:
Show me the schema of the users table and write a query
to find all users who registered in the last 30 days
but haven't made any purchases.
</code></pre>

<h3>3.4.其他 MCP 伺服器</h3>
<table>
<thead>
<tr>
<th>MCP伺服器</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>檔案系統</strong></td>
<td>讀/寫工作區外的文件</td>
</tr>
<tr>
<td><strong>勇敢的搜索</strong></td>
<td>從 Copilot 內進行網路搜尋</td>
</tr>
<tr>
<td><strong>傀儡師</strong></td>
<td>瀏覽器自動化和螢幕截圖</td>
</tr>
<tr>
<td><strong>鬆弛</strong></td>
<td>從 Slack 發送訊息、建立問題</td>
</tr>
<tr>
<td><strong>記憶體</strong></td>
<td>對話持久記憶</td>
</tr>
<tr>
<td><strong>吉特克拉肯</strong></td>
<td>Git高級操作</td>
</tr>
</tbody>
</table>

<h2 id="4-tao-custom-mcp-server"><strong>4. 建立自訂 MCP 伺服器</strong></h2>

<p>您可以為內部工具建立單獨的 MCP 伺服器：</p>

<pre><code class="language-typescript">// custom-mcp-server/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
  name: 'internal-api',
  version: '1.0.0',
}, {
  capabilities: {
    tools: {},
  },
});

// Register tool
server.setRequestHandler('tools/list', async () => ({
  tools: [{
    name: 'get_customer',
    description: 'Lấy thông tin khách hàng từ CRM',
    inputSchema: {
      type: 'object',
      properties: {
        customerId: { type: 'string', description: 'Customer ID' },
      },
      required: ['customerId'],
    },
  }],
}));

server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'get_customer') {
    const { customerId } = request.params.arguments;
    // Call internal API
    const customer = await fetchCustomer(customerId);
    return { content: [{ type: 'text', text: JSON.stringify(customer) }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
</code></pre>

<h2 id="5-copilot-hooks"><strong>5. Copilot Hooks－生命週期事件的自動化</strong></h2>

<p>掛鉤允許在特定事件時運行自訂命令：</p>

<pre><code class="language-json">{
  "github.copilot.chat.hooks": {
    "postSave": [
      {
        "command": "npm run lint:fix",
        "pattern": "**/*.{ts,tsx}"
      }
    ],
    "postCreate": [
      {
        "command": "npx prettier --write",
        "pattern": "**/*.{ts,tsx,css}"
      }
    ]
  }
}
</code></pre>

<p>Hooks 確保始終產生 AI 程式碼 <strong>自動格式化和 lint</strong>。</p>

<h2 id="6-security-considerations"><strong>6. 安全考慮</strong></h2>

<p><strong>⚠️MCP伺服器擁有強大的存取權限：</strong></p>

<ul>
<li>資料庫MCP：可以讀取/寫入資料庫→僅與開發資料庫一起使用</li>
<li>文件系統MCP：可以存取工作區之外的文件</li>
<li>MCP API：可以使用您的憑證呼叫外部 API</li>
</ul>

<h3>最佳實踐：</h3>
<ul>
<li>使用 <strong>環境變數</strong> 用於秘密，而不是硬編碼</li>
<li><strong>限制範圍</strong>：只授予MCP伺服器必要的權限</li>
<li><strong>查看 MCP 原始碼</strong>：安裝前檢查MCP伺服器程式碼</li>
<li><strong>獨立的環境</strong>：開發資料庫與生產資料庫不同</li>
<li><strong>審核日誌</strong>：監控MCP伺服器活動</li>
</ul>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<p>MCP 伺服器將副駕駛從 <strong>程式碼產生器</strong> 進入 <strong>全面開發助理</strong> 可以與設計工具、資料庫、API 和外部服務互動。</p>

<table>
<thead>
<tr>
<th>MCP伺服器</th>
<th>Vibe 編碼用例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>菲格瑪</strong></td>
<td>「建置此設計」→ 程式碼</td>
</tr>
<tr>
<td><strong>資料庫</strong></td>
<td>「為此模式建立 API」→ 完整的 CRUD</td>
</tr>
<tr>
<td><strong>GitHub</strong></td>
<td>「修復分配給我的問題」→ 自動實施</td>
</tr>
<tr>
<td><strong>客製化</strong></td>
<td>「與我們的 CRM 整合」→ 特定領域的工具</td>
</tr>
</tbody>
</table>

<p>從第 5 部分開始，我們將運用所學的所有知識 <strong>實戰項目</strong> — 使用 Vibe Coding 建立完整的全端應用程式。</p>
