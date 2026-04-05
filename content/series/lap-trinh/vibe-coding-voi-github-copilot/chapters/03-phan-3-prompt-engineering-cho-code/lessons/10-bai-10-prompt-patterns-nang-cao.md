---
id: 019f1c30-a303-7001-c001-v1b3c0d10303
title: 'Bài 10: Prompt Patterns nâng cao — Slash Commands, Participants & Variables'
slug: bai-10-prompt-patterns-nang-cao
description: >-
  Slash commands (/init, /fix, /tests, /doc, /explain).
  Chat participants (@workspace, @terminal, @vscode).
  Context variables (#file, #selection, #codebase). Combining patterns.
  Prompt templates cho các use cases phổ biến. Prompt library cá nhân.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Prompt Engineering cho Code"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Lập trình — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Prompt Patterns nâng cao — Slash</tspan>
      <tspan x="60" dy="42">Commands, Participants &amp; Variables</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Prompt Engineering cho Code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-slash-commands"><strong>1. Slash Commands</strong></h2>

<p>Slash commands là <strong>shortcuts</strong> cho các tasks thường gặp. Gõ <code>/</code> trong chat để xem danh sách:</p>

<table>
<thead>
<tr>
<th>Command</th>
<th>Chức năng</th>
<th>Ví dụ</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/init</code></td>
<td>Khởi tạo custom instructions cho project</td>
<td><code>/init</code> (phân tích codebase và tạo copilot-instructions.md)</td>
</tr>
<tr>
<td><code>/fix</code></td>
<td>Fix code hoặc error hiện tại</td>
<td><code>/fix TypeError: Cannot read property 'id' of undefined</code></td>
</tr>
<tr>
<td><code>/tests</code></td>
<td>Generate unit tests cho code</td>
<td><code>/tests for the UserService class</code></td>
</tr>
<tr>
<td><code>/doc</code></td>
<td>Generate documentation</td>
<td><code>/doc for all exported functions in this file</code></td>
</tr>
<tr>
<td><code>/explain</code></td>
<td>Giải thích code</td>
<td><code>/explain #selection</code></td>
</tr>
<tr>
<td><code>/clear</code></td>
<td>Clear chat history</td>
<td><code>/clear</code></td>
</tr>
</tbody>
</table>

<h3>1.1. /init — Setup AI cho project</h3>
<p>Slash command quan trọng nhất! Chạy <code>/init</code> khi bắt đầu dùng Copilot cho project:</p>

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

<h3>1.2. /fix — Sửa lỗi nhanh</h3>
<pre><code class="language-text">// Copy error từ terminal hoặc Problems panel:
/fix npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from some-package@1.2.3
</code></pre>

<h3>1.3. /tests — Generate tests tự động</h3>
<pre><code class="language-text">// Mở file cần test, rồi:
/tests for all public methods, include edge cases and error scenarios.
Use Jest with describe/it blocks.
</code></pre>

<h2 id="2-chat-participants"><strong>2. Chat Participants</strong></h2>

<p>Chat participants (bắt đầu bằng <code>@</code>) là các "chuyên gia" cho domain cụ thể:</p>

<table>
<thead>
<tr>
<th>Participant</th>
<th>Chuyên môn</th>
<th>Khi nào dùng</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@workspace</code></td>
<td>Hiểu toàn bộ codebase</td>
<td>Hỏi về project structure, tìm code liên quan</td>
</tr>
<tr>
<td><code>@terminal</code></td>
<td>Terminal commands</td>
<td>Giải thích command, fix terminal errors</td>
</tr>
<tr>
<td><code>@vscode</code></td>
<td>VS Code features</td>
<td>Hỏi về settings, shortcuts, extensions</td>
</tr>
</tbody>
</table>

<h3>2.1. @workspace — Codebase expert</h3>
<pre><code class="language-text">@workspace Where is the database connection configured in this project?

@workspace How is error handling done across API routes? Show me the pattern.

@workspace What testing framework and patterns are used? Show examples.
</code></pre>

<h3>2.2. @terminal — Terminal helper</h3>
<pre><code class="language-text">@terminal How to find all processes using port 3000 and kill them?

@terminal Explain this command: find . -name "*.ts" -exec grep -l "TODO" {} \;

@terminal The last command failed with permission denied. How to fix?
</code></pre>

<h3>2.3. @vscode — IDE expert</h3>
<pre><code class="language-text">@vscode How to configure auto-format on save for TypeScript files?

@vscode What's the shortcut to split editor vertically?

@vscode How to create a launch.json for debugging Node.js?
</code></pre>

<h2 id="3-combining-patterns"><strong>3. Combining Patterns — Sức mạnh thực sự</strong></h2>

<p>Kết hợp slash commands, participants, và context variables cho prompts mạnh mẽ:</p>

<h3>Pattern 1: Fix + Context</h3>
<pre><code class="language-text">/fix #terminalLastCommand
Look at #file:src/services/OrderService.ts and fix the failing test.
The error seems related to the mock setup.
</code></pre>

<h3>Pattern 2: Tests + File reference</h3>
<pre><code class="language-text">/tests for #file:src/utils/validation.ts
Follow the same pattern as #file:tests/utils/string.test.ts
Include these scenarios: empty input, null, unicode, SQL injection attempts
</code></pre>

<h3>Pattern 3: Workspace search + Implementation</h3>
<pre><code class="language-text">@workspace Find all API endpoints that don't have rate limiting.
Then add rate limiting middleware to each one, using the same
configuration as #file:src/middleware/rateLimit.ts
</code></pre>

<h2 id="4-prompt-library-ca-nhan"><strong>4. Xây dựng Prompt Library cá nhân</strong></h2>

<p>Tạo collection các prompt templates hay dùng:</p>

<h3>4.1. Lưu prompt files trong project</h3>
<p>Tạo folder <code>.github/prompts/</code> với các file <code>.prompt.md</code>:</p>

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

<h3>4.2. Sử dụng prompt files</h3>
<p>Trong Chat, reference prompt file:</p>
<pre><code class="language-text">#file:.github/prompts/new-api-endpoint.prompt.md
resource_name = "products"
</code></pre>

<h2 id="5-advanced-techniques"><strong>5. Advanced Techniques</strong></h2>

<h3>5.1. Negative prompting</h3>
<pre><code class="language-text">Create a user registration form.
DO NOT:
- Use any CSS framework (no Tailwind, no Bootstrap)
- Add client-side validation (we handle it server-side)
- Include social login buttons
- Use any external dependencies
</code></pre>

<h3>5.2. Output specification</h3>
<pre><code class="language-text">Generate a database migration for adding an "orders" table.

Output format:
1. Prisma schema addition (for schema.prisma)
2. SQL migration file (for manual review)
3. Seed data TypeScript file (5 sample records)
</code></pre>

<h3>5.3. Comparative analysis</h3>
<pre><code class="language-text">I need a caching solution for our API responses.
Compare these approaches with code examples for each:
1. In-memory cache (node-cache)
2. Redis cache
3. HTTP cache headers

For each, show: setup code, cache hit/miss handling,
cache invalidation strategy. Recommend which to use
for our use case: 100 RPS, data changes every 5 minutes.
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Tool</th>
<th>Prefix</th>
<th>Best for</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Slash Commands</strong></td>
<td><code>/</code></td>
<td>Quick actions: fix, test, doc, init</td>
</tr>
<tr>
<td><strong>Chat Participants</strong></td>
<td><code>@</code></td>
<td>Domain expertise: workspace, terminal, vscode</td>
</tr>
<tr>
<td><strong>Context Variables</strong></td>
<td><code>#</code></td>
<td>Attach specific context: file, selection, codebase</td>
</tr>
<tr>
<td><strong>Prompt Files</strong></td>
<td><code>.prompt.md</code></td>
<td>Reusable templates cho tasks lặp lại</td>
</tr>
</tbody>
</table>

<p>Kết hợp tất cả lại, bạn có một <strong>prompt toolkit</strong> đầy đủ để Vibe Coding hiệu quả. Từ Phần 4, chúng ta sẽ tùy chỉnh và mở rộng khả năng của Copilot với <strong>Custom Instructions, Custom Agents, và MCP Servers</strong>.</p>
