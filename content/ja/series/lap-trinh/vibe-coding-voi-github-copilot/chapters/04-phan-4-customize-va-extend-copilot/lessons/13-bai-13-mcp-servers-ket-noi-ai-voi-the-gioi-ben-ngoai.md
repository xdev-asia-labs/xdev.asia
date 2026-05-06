---
id: 019f1c30-a403-7001-c001-v1b3c0d10403
title: 'レッスン 13: MCP サーバー — AI を外部世界に接続する'
slug: bai-13-mcp-servers-ket-noi-ai-voi-the-gioi-ben-ngoai
description: >-
  モデル コンテキスト プロトコル (MCP) とは何ですか。 VS Code に MCP サーバーをインストールします。 Figma MCP、GitHub
  MCP、データベース MCP。カスタム MCP サーバーを作成します。セキュリティに関する考慮事項。実際の使用例: デザインからコードまで、DB
  クエリ、API 統合。自動化のための Copilot フック。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: コパイロットのカスタマイズと拡張'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: MCP サーバー — AI を世界に接続する</tspan>
      <tspan x="60" dy="42">外の世界</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: コパイロットのカスタマイズと拡張</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-mcp-la-gi"><strong>1. モデル コンテキスト プロトコル (MCP) とは何ですか?</strong></h2>

<p><strong>MCP</strong> AI エージェントが通信できるようにする標準プロトコルです。 <strong>外部ツールとサービス</strong>。統合コードを自分で記述する代わりに、MCP サーバーをインストールして Copilot の機能を拡張します。</p>

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

<h2 id="2-cai-dat-mcp-servers"><strong>2. VS Code に MCP サーバーをインストールする</strong></h2>

<h3>2.1. settings.json での構成</h3>
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

<h3>2.2.プロジェクトごとの構成 (.vscode/mcp.json)</h3>
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

<h2 id="3-mcp-servers-pho-bien"><strong>3. 人気のある MCP サーバー</strong></h2>

<h3>3.1. Figma MCP — デザインからコードまで</h3>
<p>Figma を Copilot に接続して、設計をコードに変換します。</p>

<pre><code class="language-text">// Prompt ví dụ:
Look at the Figma design for the login page and create
a React component that matches it exactly.
Use TailwindCSS for styling.
</code></pre>

<p>2026 年 3 月: Figma MCP サーバーの可能性 <strong>VS Code から直接デザインレイヤーを生成</strong>。</p>

<h3>3.2. GitHub MCP — リポジトリ操作</h3>
<pre><code class="language-text">// Copilot có thể:
- Tìm và phân tích issues
- Đọc pull request comments
- Tạo issues từ code analysis
- Review PR changes
</code></pre>

<h3>3.3.データベース MCP — クエリとスキーマ</h3>
<pre><code class="language-text">// Prompt ví dụ:
Show me the schema of the users table and write a query
to find all users who registered in the last 30 days
but haven't made any purchases.
</code></pre>

<h3>3.4.他の MCP サーバー</h3>
<table>
<thead>
<tr>
<th>MCPサーバー</th>
<th>機能</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ファイルシステム</strong></td>
<td>ワークスペース外のファイルの読み取り/書き込み</td>
</tr>
<tr>
<td><strong>ブレイブサーチ</strong></td>
<td>Copilot 内からの Web 検索</td>
</tr>
<tr>
<td><strong>人形遣い</strong></td>
<td>ブラウザの自動化とスクリーンショット</td>
</tr>
<tr>
<td><strong>たるみ</strong></td>
<td>Slack からメッセージを送信し、問題を作成する</td>
</tr>
<tr>
<td><strong>記憶</strong></td>
<td>会話の永続的な記憶</td>
</tr>
<tr>
<td><strong>GitKraken</strong></td>
<td>高度な Git 操作</td>
</tr>
</tbody>
</table>

<h2 id="4-tao-custom-mcp-server"><strong>4. カスタム MCP サーバーの作成</strong></h2>

<p>内部ツール用に別の MCP サーバーを作成できます。</p>

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

<h2 id="5-copilot-hooks"><strong>5. コパイロットフック — ライフサイクルイベントでの自動化</strong></h2>

<p>フックを使用すると、特定のイベントでカスタム コマンドを実行できます。</p>

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

<p>フックにより AI コードが常に生成されるようにする <strong>フォーマットとリントを自動的に行う</strong>。</p>

<h2 id="6-security-considerations"><strong>6. セキュリティに関する考慮事項</strong></h2>

<p><strong>⚠️ MCP サーバーには強力なアクセス権があります。</strong></p>

<ul>
<li>データベース MCP: データベースの読み取り/書き込みが可能 → 開発データベースでのみ使用</li>
<li>ファイルシステム MCP: ワークスペース外のファイルにアクセス可能</li>
<li>MCP API: 資格情報を使用して外部 API を呼び出すことができます</li>
</ul>

<h3>ベストプラクティス:</h3>
<ul>
<li>使用する <strong>環境変数</strong> ハードコードではなく秘密の場合</li>
<li><strong>範囲を制限する</strong>: MCP サーバーに必要な権限のみを付与します</li>
<li><strong>MCP ソースを確認する</strong>: インストールする前に MCP サーバー コードを確認してください</li>
<li><strong>別々の環境</strong>: 開発データベースは実稼働データベースとは異なります</li>
<li><strong>監査ログ</strong>: MCP サーバーのアクティビティを監視します</li>
</ul>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<p>MCP サーバーは Copilot を <strong>コードジェネレーター</strong> に <strong>フル開発アシスタント</strong> 設計ツール、データベース、API、外部サービスと対話できます。</p>

<table>
<thead>
<tr>
<th>MCPサーバー</th>
<th>Vibe コーディングの使用例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>フィグマ</strong></td>
<td>「このデザインをビルドする」 → コード</td>
</tr>
<tr>
<td><strong>データベース</strong></td>
<td>「このスキーマの API を作成」 → 完全な CRUD</td>
</tr>
<tr>
<td><strong>GitHub</strong></td>
<td>「自分に割り当てられた問題を修正する」 → 自動実装</td>
</tr>
<tr>
<td><strong>カスタム</strong></td>
<td>「CRMとの統合」 → ドメイン固有のツール</td>
</tr>
</tbody>
</table>

<p>パート 5 からは、学んだすべての知識を応用していきます <strong>実戦プロジェクト</strong> — Vibe コーディングを使用して完全なフルスタック アプリを構築します。</p>
