---
id: 019f1c30-a303-7001-c001-v1b3c0d10303
title: 第 10 課：進階提示模式 — 斜線指令、參與者與變數
slug: bai-10-prompt-patterns-nang-cao
description: >-
  斜杠指令（/init、/fix、/tests、/doc、/explain）。聊天參與者（@workspace、@terminal、@vscode）。上下文變數（#file、#selection、#codebase）。組合模式。常見用例的提示範本。個人提示庫。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：快速程式碼工程
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：進階提示模式 — 斜線</tspan>
      <tspan x="60" dy="42">命令、參與者和變量</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：快速程式碼工程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-slash-commands"><strong>1. 斜杠命令</strong></h2>

<p>斜杠命令是 <strong>捷徑</strong> 用於常見任務。類型 <code>/</code> 在聊天中查看清單：</p>

<table>
<thead>
<tr>
<th>命令</th>
<th>功能</th>
<th>例如</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/初始化</code></td>
<td>為專案建立自訂說明</td>
<td><code>/初始化</code> （分析程式碼庫並建立 copilot-instructions.md）</td>
</tr>
<tr>
<td><code>/修復</code></td>
<td>修復當前程式碼或錯誤</td>
<td><code>/修復類型錯誤：無法讀取未定義的屬性“id”</code></td>
</tr>
<tr>
<td><code>/測試</code></td>
<td>為程式碼產生單元測試</td>
<td><code>UserService 類別的 /tests</code></td>
</tr>
<tr>
<td><code>/文件</code></td>
<td>產生文件</td>
<td><code>/doc 用於此文件中的所有匯出函數</code></td>
</tr>
<tr>
<td><code>/解釋</code></td>
<td>程式碼解釋</td>
<td><code>/解釋#選擇</code></td>
</tr>
<tr>
<td><code>/清除</code></td>
<td>清除聊天記錄</td>
<td><code>/清除</code></td>
</tr>
</tbody>
</table>

<h3>1.1. /init — 為項目設定 AI</h3>
<p>最重要的 Slash 指令！運行 <code>/初始化</code> 開始在專案中使用 Copilot 時：</p>

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

<h3>1.2. /fix — 快速修復</h3>
<pre><code class="language-text">// Copy error từ terminal hoặc Problems panel:
/fix npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from some-package@1.2.3
</code></pre>

<h3>1.3. /tests — 自動產生測試</h3>
<pre><code class="language-text">// Mở file cần test, rồi:
/tests for all public methods, include edge cases and error scenarios.
Use Jest with describe/it blocks.
</code></pre>

<h2 id="2-chat-participants"><strong>2. 聊天參與者</strong></h2>

<p>聊天參與者（從 <code>@</code>）是特定領域的「專家」：</p>

<table>
<thead>
<tr>
<th>參加者</th>
<th>專業知識</th>
<th>何時使用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@工作空間</code></td>
<td>了解整個程式碼庫</td>
<td>詢問專案結構，尋找相關程式碼</td>
</tr>
<tr>
<td><code>@終端</code></td>
<td>終端命令</td>
<td>命令解釋，修復終端錯誤</td>
</tr>
<tr>
<td><code>@vscode</code></td>
<td>VS 程式碼功能</td>
<td>詢問設定、快捷方式、擴展</td>
</tr>
</tbody>
</table>

<h3>2.1. @workspace — 程式庫專家</h3>
<pre><code class="language-text">@workspace Where is the database connection configured in this project?

@workspace How is error handling done across API routes? Show me the pattern.

@workspace What testing framework and patterns are used? Show examples.
</code></pre>

<h3>2.2. @terminal — 終端助手</h3>
<pre><code class="language-text">@terminal How to find all processes using port 3000 and kill them?

@terminal Explain this command: find . -name "*.ts" -exec grep -l "TODO" {} \;

@terminal The last command failed with permission denied. How to fix?
</code></pre>

<h3>2.3. @vscode — IDE 專家</h3>
<pre><code class="language-text">@vscode How to configure auto-format on save for TypeScript files?

@vscode What's the shortcut to split editor vertically?

@vscode How to create a launch.json for debugging Node.js?
</code></pre>

<h2 id="3-combining-patterns"><strong>3. 組合模式－真正的力量</strong></h2>

<p>結合斜線命令、參與者和上下文變數以獲得強大的提示：</p>

<h3>模式 1：修復 + 上下文</h3>
<pre><code class="language-text">/fix #terminalLastCommand
Look at #file:src/services/OrderService.ts and fix the failing test.
The error seems related to the mock setup.
</code></pre>

<h3>模式 2：測試 + 檔案參考</h3>
<pre><code class="language-text">/tests for #file:src/utils/validation.ts
Follow the same pattern as #file:tests/utils/string.test.ts
Include these scenarios: empty input, null, unicode, SQL injection attempts
</code></pre>

<h3>模式3：工作區搜尋+實施</h3>
<pre><code class="language-text">@workspace Find all API endpoints that don't have rate limiting.
Then add rate limiting middleware to each one, using the same
configuration as #file:src/middleware/rateLimit.ts
</code></pre>

<h2 id="4-prompt-library-ca-nhan"><strong>4. 建立個人提示庫</strong></h2>

<p>建立常用提示範本集合：</p>

<h3>4.1.在專案中儲存提示文件</h3>
<p>建立資料夾 <code>.github/提示/</code> 有文件 <code>.提示.md</code>：</p>

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

<h3>4.2.使用提示文件</h3>
<p>在聊天中，參考提示檔：</p>
<pre><code class="language-text">#file:.github/prompts/new-api-endpoint.prompt.md
resource_name = "products"
</code></pre>

<h2 id="5-advanced-techniques"><strong>5. 先進技術</strong></h2>

<h3>5.1.負面提示</h3>
<pre><code class="language-text">Create a user registration form.
DO NOT:
- Use any CSS framework (no Tailwind, no Bootstrap)
- Add client-side validation (we handle it server-side)
- Include social login buttons
- Use any external dependencies
</code></pre>

<h3>5.2.輸出規格</h3>
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

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<table>
<thead>
<tr>
<th>工具</th>
<th>前綴</th>
<th>最適合</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>斜線指令</strong></td>
<td><code>/</code></td>
<td>快速操作：修復、測試、文件、初始化</td>
</tr>
<tr>
<td><strong>聊天參與者</strong></td>
<td><code>@</code></td>
<td>領域專業：工作區、終端、vscode</td>
</tr>
<tr>
<td><strong>情境變數</strong></td>
<td><code>#</code></td>
<td>附加特定上下文：文件、選擇、程式碼庫</td>
</tr>
<tr>
<td><strong>提示文件</strong></td>
<td><code>.提示.md</code></td>
<td>用於重複任務的可重複使用的模板</td>
</tr>
</tbody>
</table>

<p>將這一切結合起來，你就擁有了一個 <strong>提示工具包</strong> 完成有效的 Vibe 編碼。從第 4 部分開始，我們將自訂和擴充 Copilot 的功能： <strong>自訂指令、自訂代理程式和 MCP 伺服器</strong>。</p>
