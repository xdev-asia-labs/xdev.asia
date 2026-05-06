---
id: 019f1c30-a303-7001-c001-v1b3c0d10303
title: 'レッスン 10: 高度なプロンプト パターン — スラッシュ コマンド、参加者、変数'
slug: bai-10-prompt-patterns-nang-cao
description: >-
  スラッシュ コマンド (/init、/fix、/tests、/doc、/explain)。チャット参加者
  (@workspace、@terminal、@vscode)。コンテキスト変数
  (#file、#selection、#codebase)。パターンを組み合わせる。一般的な使用例のプロンプト テンプレート。個人用プロンプトライブラリ。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: コードの迅速なエンジニアリング'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9792" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9792)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.507041555162,115.5 971.507041555162,156.5 936,177 900.492958444838,156.5 900.492958444838,115.50000000000001 936,95" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: 高度なプロンプト パターン — スラッシュ</tspan>
      <tspan x="60" dy="42">コマンド、参加者、変数</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: コードの迅速なエンジニアリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-slash-commands"><strong>1. スラッシュコマンド</strong></h2>

<p>スラッシュコマンドは、 <strong>ショートカット</strong> 一般的なタスク用。種類 <code>/</code> チャットでリストを表示するには:</p>

<table>
<thead>
<tr>
<th>コマンド</th>
<th>機能</th>
<th>たとえば</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/初期化</code></td>
<td>プロジェクトのカスタム指示を作成する</td>
<td><code>/初期化</code> (コードベースを分析し、copilot-instructions.md を作成します)</td>
</tr>
<tr>
<td><code>/修正</code></td>
<td>現在のコードまたはエラーを修正する</td>
<td><code>/fix TypeError: 未定義のプロパティ 'id' を読み取れません</code></td>
</tr>
<tr>
<td><code>/テスト</code></td>
<td>コードの単体テストを生成する</td>
<td><code>UserService クラスの /tests</code></td>
</tr>
<tr>
<td><code>/doc</code></td>
<td>ドキュメントの生成</td>
<td><code>このファイル内のエクスポートされたすべての関数の /doc</code></td>
</tr>
<tr>
<td><code>/説明する</code></td>
<td>コードの説明</td>
<td><code>/explain #selection</code></td>
</tr>
<tr>
<td><code>/クリア</code></td>
<td>チャット履歴をクリアする</td>
<td><code>/クリア</code></td>
</tr>
</tbody>
</table>

<h3>1.1. /init — プロジェクトの AI をセットアップする</h3>
<p>最も重要なスラッシュコマンド!走る <code>/初期化</code> プロジェクトで Copilot の使用を開始する場合:</p>

<pre><code class="language-text">// Trong Chat view, gõ:
/init

// Copilot phân tích codebase và tạo:
// .github/copilot-instructions.md với:
// - Project structure description
// - Tech stack
// - Coding conventions phát hiện từ codebase
// - Testing patterns
// - Naming conventions
</code></pre>

<h3>1.2. /fix — クイックフィックス</h3>
<pre><code class="language-text">// Copy error từ terminal hoặc Problems panel:
/fix npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from some-package@1.2.3
</code></pre>

<h3>1.3. /tests — テストを自動的に生成します</h3>
<pre><code class="language-text">// Mở file cần test, rồi:
/tests for all public methods, include edge cases and error scenarios.
Use Jest with describe/it blocks.
</code></pre>

<h2 id="2-chat-participants"><strong>2. チャット参加者</strong></h2>

<p>チャット参加者（から始まる） <code>@</code>) は特定のドメインの「専門家」です。</p>

<table>
<thead>
<tr>
<th>参加者</th>
<th>専門知識</th>
<th>いつ使用するか</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@ワークスペース</code></td>
<td>コードベース全体を理解する</td>
<td>プロジェクトの構造について質問し、関連するコードを見つける</td>
</tr>
<tr>
<td><code>@ターミナル</code></td>
<td>ターミナルコマンド</td>
<td>コマンドの説明、ターミナルエラーを修正</td>
</tr>
<tr>
<td><code>@vscode</code></td>
<td>VS コードの機能</td>
<td>設定、ショートカット、拡張機能について質問する</td>
</tr>
</tbody>
</table>

<h3>2.1. @workspace — コードベースのエキスパート</h3>
<pre><code class="language-text">@workspace Where is the database connection configured in this project?

@workspace How is error handling done across API routes? Show me the pattern.

@workspace What testing framework and patterns are used? Show examples.
</code></pre>

<h3>2.2. @terminal — ターミナルヘルパー</h3>
<pre><code class="language-text">@terminal How to find all processes using port 3000 and kill them?

@terminal Explain this command: find . -name "*.ts" -exec grep -l "TODO" {} \;

@terminal The last command failed with permission denied. How to fix?
</code></pre>

<h3>2.3. @vscode — IDE エキスパート</h3>
<pre><code class="language-text">@vscode How to configure auto-format on save for TypeScript files?

@vscode What's the shortcut to split editor vertically?

@vscode How to create a launch.json for debugging Node.js?
</code></pre>

<h2 id="3-combining-patterns"><strong>3. パターンの組み合わせ — 本当の力</strong></h2>

<p>スラッシュ コマンド、参加者、およびコンテキスト変数を組み合わせて、強力なプロンプトを作成します。</p>

<h3>パターン 1: 修正 + コンテキスト</h3>
<pre><code class="language-text">/fix #terminalLastCommand
Look at #file:src/services/OrderService.ts and fix the failing test.
The error seems related to the mock setup.
</code></pre>

<h3>パターン 2: テスト + ファイル参照</h3>
<pre><code class="language-text">/tests for #file:src/utils/validation.ts
Follow the same pattern as #file:tests/utils/string.test.ts
Include these scenarios: empty input, null, unicode, SQL injection attempts
</code></pre>

<h3>パターン 3: ワークスペースの検索 + 実装</h3>
<pre><code class="language-text">@workspace Find all API endpoints that don't have rate limiting.
Then add rate limiting middleware to each one, using the same
configuration as #file:src/middleware/rateLimit.ts
</code></pre>

<h2 id="4-prompt-library-ca-nhan"><strong>4. 個人用プロンプト ライブラリを構築する</strong></h2>

<p>よく使用されるプロンプト テンプレートのコレクションを作成します。</p>

<h3>4.1.プロンプト ファイルをプロジェクトに保存する</h3>
<p>フォルダーの作成 <code>.github/プロンプト/</code> ファイル付き <code>.prompt.md</code>:</p>

<pre><code class="language-markdown">&lt;!-- .github/prompts/new-api-endpoint.prompt.md --&gt;
---
description: Create a new REST API endpoint
---
Create a new API endpoint for {{resource_name}}.

Requirements:
- CRUD operations (GET list, GET by id, POST, PUT, DELETE)
- Zod validation for request bodies
- Prisma queries following our repository pattern
- Error handling with our AppError class
- Authentication middleware on all routes
- Pagination for list endpoint (cursor-based)

Follow patterns in:
- Route: src/routes/userRoutes.ts
- Service: src/services/UserService.ts
- Schema: src/schemas/userSchema.ts
</code></pre>

<h3>4.2.プロンプトファイルを使用する</h3>
<p>チャットで、プロンプト ファイルを参照します。</p>
<pre><code class="language-text">#file:.github/prompts/new-api-endpoint.prompt.md
resource_name = "products"
</code></pre>

<h2 id="5-advanced-techniques"><strong>5. 高度なテクニック</strong></h2>

<h3>5.1.否定的なプロンプト</h3>
<pre><code class="language-text">Create a user registration form.
DO NOT:
- Use any CSS framework (no Tailwind, no Bootstrap)
- Add client-side validation (we handle it server-side)
- Include social login buttons
- Use any external dependencies
</code></pre>

<h3>5.2.出力仕様</h3>
<pre><code class="language-text">Generate a database migration for adding an "orders" table.

Output format:
1. Prisma schema addition (for schema.prisma)
2. SQL migration file (for manual review)
3. Seed data TypeScript file (5 sample records)
</code></pre>

<h3>5.3.比較分析</h3>
<pre><code class="language-text">I need a caching solution for our API responses.
Compare these approaches with code examples for each:
1. In-memory cache (node-cache)
2. Redis cache
3. HTTP cache headers

For each, show: setup code, cache hit/miss handling,
cache invalidation strategy. Recommend which to use
for our use case: 100 RPS, data changes every 5 minutes.
</code></pre>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>ツール</th>
<th>プレフィックス</th>
<th>こんな方に最適</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>スラッシュコマンド</strong></td>
<td><code>/</code></td>
<td>クイックアクション: 修正、テスト、ドキュメント、初期化</td>
</tr>
<tr>
<td><strong>チャット参加者</strong></td>
<td><code>@</code></td>
<td>専門分野: ワークスペース、ターミナル、vscode</td>
</tr>
<tr>
<td><strong>コンテキスト変数</strong></td>
<td><code>#</code></td>
<td>特定のコンテキストを添付: ファイル、選択、コードベース</td>
</tr>
<tr>
<td><strong>プロンプトファイル</strong></td>
<td><code>.prompt.md</code></td>
<td>定期的なタスク用の再利用可能なテンプレート</td>
</tr>
</tbody>
</table>

<p>すべてを組み合わせると、1 つになります <strong>プロンプトツールキット</strong> 効果的なバイブコーディングを実現します。パート 4 からは、Copilot の機能をカスタマイズして拡張します。 <strong>カスタム命令、カスタム エージェント、および MCP サーバー</strong>。</p>
