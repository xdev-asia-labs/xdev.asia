---
id: 019f1c30-a201-7001-c001-v1b3c0d10201
title: 'Bài 5: Agent Mode — Để AI tự viết code cho bạn'
slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
description: >-
  Agent là gì, cách Agent hoạt động (plan → execute → verify), Agent Loop,
  Chat view (Ctrl+Cmd+I), so sánh Agent vs Ask vs Plan mode.
  Permission levels: Default, Bypass Approvals, Autopilot.
  Hands-on: xây dựng web app đầu tiên với Agent.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Agent Mode — AI tự động viết code"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-824" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-824)"/>

  <!-- Decorations -->
  <g>
    <circle cx="661" cy="193" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="783" cy="215" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="237" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: Agent Mode — Để AI tự viết code cho</tspan>
      <tspan x="60" dy="42">bạn</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Agent Mode — AI tự động viết code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-agent-la-gi"><strong>1. Agent là gì?</strong></h2>

<p>Trong GitHub Copilot, một <strong>Agent</strong> là trợ lý AI hoạt động <strong>tự chủ (autonomously)</strong> để hoàn thành một task lập trình hoàn chỉnh. Khác với inline suggestions chỉ gợi ý vài dòng, Agent có khả năng:</p>

<ul>
<li>📋 <strong>Lập kế hoạch</strong> (break down task thành steps)</li>
<li>📝 <strong>Tạo và chỉnh sửa nhiều files</strong> cùng lúc</li>
<li>💻 <strong>Chạy terminal commands</strong> (install packages, build, test)</li>
<li>🔄 <strong>Tự sửa lỗi</strong> khi gặp error (self-correct)</li>
<li>🔧 <strong>Sử dụng tools</strong> (read files, search, web, extensions)</li>
</ul>

<p>Đây chính là nền tảng của <strong>Vibe Coding thực thụ</strong> — bạn mô tả yêu cầu, Agent thực hiện toàn bộ.</p>

<h2 id="2-agent-loop"><strong>2. Agent Loop — Cách Agent hoạt động</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              AGENT LOOP                          │
├─────────────────────────────────────────────────┤
│                                                  │
│  User Prompt: "Build a REST API for blog posts"  │
│           ↓                                      │
│  ┌─── PLAN ───┐                                  │
│  │ 1. Setup project                              │
│  │ 2. Create models                              │
│  │ 3. Create routes                              │
│  │ 4. Add middleware                             │
│  │ 5. Test                                       │
│  └────────────┘                                  │
│           ↓                                      │
│  ┌─── EXECUTE ──┐                                │
│  │ Create files  │ ←─ Tool: createFile           │
│  │ Write code    │ ←─ Tool: editFile             │
│  │ Run commands  │ ←─ Tool: runInTerminal        │
│  └──────────────┘                                │
│           ↓                                      │
│  ┌─── VERIFY ───┐                                │
│  │ Check errors  │ ←─ Tool: getErrors            │
│  │ Run tests     │ ←─ Tool: runInTerminal        │
│  │ Self-correct  │ → Quay lại EXECUTE nếu fail   │
│  └──────────────┘                                │
│           ↓                                      │
│  ✅ Complete → User review                       │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-ba-built-in-agents"><strong>3. Ba Built-in Agents</strong></h2>

<h3>3.1. Agent (default)</h3>
<p>Tự chủ plan và implement changes, tạo files, chạy commands, sử dụng tools. Đây là agent bạn dùng nhiều nhất cho Vibe Coding.</p>

<h3>3.2. Plan</h3>
<p>Tạo structured implementation plan nhưng <strong>không viết code</strong>. Sau khi plan OK, bạn hand off sang Agent để thực thi.</p>

<h3>3.3. Ask</h3>
<p>Trả lời câu hỏi về code, concepts, codebase mà <strong>không thay đổi files</strong>. Dùng khi cần hiểu trước khi code.</p>

<pre><code class="language-text">Chọn agent trong Chat view:

┌────────────────────────────┐
│  Agent ▼                   │  ← Click dropdown
├────────────────────────────┤
│  ● Agent    (implement)    │
│  ○ Plan     (plan only)    │
│  ○ Ask      (Q&A only)     │
│  ○ Reviewer (custom)       │
└────────────────────────────┘
</code></pre>

<h2 id="4-permission-levels"><strong>4. Permission Levels — Kiểm soát quyền Agent</strong></h2>

<p>Agent cần chạy commands và thay đổi files — bạn quyết định mức autonomy:</p>

<table>
<thead>
<tr>
<th>Level</th>
<th>Mô tả</th>
<th>Phù hợp khi</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Default Approvals</strong></td>
<td>Hỏi xác nhận cho write/run tools</td>
<td>Lần đầu dùng, production code</td>
</tr>
<tr>
<td><strong>Bypass Approvals</strong></td>
<td>Auto-approve tất cả tool calls</td>
<td>Trusted tasks, prototype</td>
</tr>
<tr>
<td><strong>Autopilot (Preview)</strong></td>
<td>Auto-approve + auto-respond questions</td>
<td>Fully autonomous, side projects</td>
</tr>
</tbody>
</table>

<p><strong>⚠️ Lưu ý bảo mật:</strong> Ở level Autopilot, Agent có thể chạy bất kỳ command nào — chỉ dùng cho trusted projects trên local machine.</p>

<h2 id="5-hands-on-xay-dung-web-app"><strong>5. Hands-on: Xây dựng Web App với Agent Mode</strong></h2>

<h3>Bước 1: Mở Chat View</h3>
<p>Nhấn <code>Ctrl+Cmd+I</code> (macOS) hoặc <code>Ctrl+Alt+I</code> (Windows/Linux)</p>

<h3>Bước 2: Chọn Agent mode</h3>
<p>Từ dropdown, chọn <strong>"Agent"</strong></p>

<h3>Bước 3: Viết prompt</h3>
<pre><code class="language-text">Create a modern expense tracker web application with:
- Add expenses with amount, category, and date
- View expenses in a table with sorting
- Dashboard with summary charts (total by category)
- Filter expenses by date range and category
- Local storage to persist data
- Modern dark theme UI with smooth animations
- Responsive design for mobile

Use vanilla HTML, CSS, and JavaScript. No frameworks needed.
</code></pre>

<h3>Bước 4: Quan sát Agent làm việc</h3>
<p>Agent sẽ:</p>
<ol>
<li>Phân tích requirements</li>
<li>Tạo file structure: <code>index.html</code>, <code>styles.css</code>, <code>app.js</code></li>
<li>Viết HTML semantic structure</li>
<li>Viết CSS với dark theme và responsive</li>
<li>Viết JavaScript cho logic CRUD, charts, filters</li>
<li>Có thể chạy preview</li>
</ol>

<h3>Bước 5: Review và Accept</h3>
<p>Xem diff cho mỗi file → nhấn <strong>"Keep"</strong> để accept, hoặc request changes.</p>

<h3>Bước 6: Iterate</h3>
<p>Tiếp tục conversation để thêm features:</p>
<pre><code class="language-text">Add an export to CSV button and a monthly budget feature with progress bar
</code></pre>

<h2 id="6-agent-session-management"><strong>6. Agent Session Management</strong></h2>

<p>Mỗi task chạy trong một <strong>session</strong> riêng biệt:</p>

<ul>
<li><strong>Sessions List</strong>: xem tất cả sessions (active, paused, completed) trong Chat panel</li>
<li><strong>Multiple sessions</strong>: chạy nhiều sessions song song cho nhiều tasks khác nhau</li>
<li><strong>Resume session</strong>: quay lại session cũ để tiếp tục iterate</li>
<li><strong>Review changes</strong>: xem tất cả file changes trong một session</li>
</ul>

<h2 id="7-tools-agent-su-dung"><strong>7. Tools mà Agent sử dụng</strong></h2>

<p>Agent có quyền truy cập các tools built-in:</p>

<table>
<thead>
<tr>
<th>Tool</th>
<th>Chức năng</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>read</code></td>
<td>Đọc files trong workspace</td>
</tr>
<tr>
<td><code>editFile</code></td>
<td>Tạo/chỉnh sửa files</td>
</tr>
<tr>
<td><code>runInTerminal</code></td>
<td>Chạy shell commands</td>
</tr>
<tr>
<td><code>search</code></td>
<td>Tìm kiếm trong codebase</td>
</tr>
<tr>
<td><code>listDir</code></td>
<td>Liệt kê files trong thư mục</td>
</tr>
<tr>
<td><code>getErrors</code></td>
<td>Lấy compile/lint errors</td>
</tr>
<tr>
<td><code>web</code></td>
<td>Tìm kiếm trên web</td>
</tr>
<tr>
<td><code>usages</code></td>
<td>Tìm references của symbol</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices-agent-mode"><strong>8. Best Practices cho Agent Mode</strong></h2>

<h3>✅ Nên:</h3>
<ul>
<li><strong>Mô tả rõ ràng, chi tiết</strong>: include tech stack, patterns, constraints</li>
<li><strong>Chia nhỏ tasks lớn</strong>: "Add auth" trước, "Add CRUD" sau, thay vì "Build everything"</li>
<li><strong>Review từng step</strong>: đọc code Agent sinh ra, đặc biệt logic quan trọng</li>
<li><strong>Dùng /init trước</strong>: tạo custom instructions để Agent hiểu conventions</li>
<li><strong>Iterate, không redo</strong>: tiếp tục session thay vì bắt đầu lại</li>
</ul>

<h3>❌ Không nên:</h3>
<ul>
<li>Dùng Autopilot cho production code</li>
<li>Accept all mà không review bất kỳ file nào</li>
<li>Prompt quá mơ hồ: "Make it better"</li>
<li>Để Agent install packages mà bạn không biết</li>
<li>Skip error messages — đọc và cung cấp cho Agent</li>
</ul>

<h2 id="9-debugging-voi-agent"><strong>9. Debugging với Agent Mode</strong></h2>

<p>Agent đặc biệt mạnh cho debugging vì nó có thể:</p>
<ol>
<li>Đọc error message</li>
<li>Trace root cause qua nhiều files</li>
<li>Apply fix</li>
<li>Re-run test để verify</li>
</ol>

<pre><code class="language-text">// Prompt ví dụ:
The test in tests/auth.test.ts is failing with "TypeError: Cannot read properties
of undefined (reading 'token')". Find the root cause and fix it.
</code></pre>

<h2 id="10-tong-ket"><strong>10. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Concept</th>
<th>Key Takeaway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent</td>
<td>AI assistant tự chủ: plan → execute → verify</td>
</tr>
<tr>
<td>3 built-in agents</td>
<td>Agent (implement), Plan (plan), Ask (Q&A)</td>
</tr>
<tr>
<td>Permission levels</td>
<td>Default → Bypass → Autopilot (tăng dần autonomy)</td>
</tr>
<tr>
<td>Agent Loop</td>
<td>Lặp lại execute + verify cho đến khi task hoàn thành</td>
</tr>
<tr>
<td>Sessions</td>
<td>Mỗi task = 1 session, có thể chạy song song</td>
</tr>
<tr>
<td>Best practice</td>
<td>Clear prompt + review code + iterate</td>
</tr>
</tbody>
</table>

<p>Bài tiếp theo sẽ đi sâu vào <strong>Plan Agent</strong> — kỹ thuật lập kế hoạch trước khi code, giúp bạn kiểm soát tốt hơn output của AI.</p>
