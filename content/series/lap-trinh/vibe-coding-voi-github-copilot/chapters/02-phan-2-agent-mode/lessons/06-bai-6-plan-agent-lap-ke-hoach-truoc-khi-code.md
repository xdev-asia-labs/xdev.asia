---
id: 019f1c30-a202-7001-c001-v1b3c0d10202
title: 'Bài 6: Plan Agent — Lập kế hoạch trước khi code'
slug: bai-6-plan-agent-lap-ke-hoach-truoc-khi-code
description: >-
  Plan Agent workflow: analyze → plan → hand off. Tạo structured implementation plan,
  review và điều chỉnh plan, hand off sang Agent mode để thực thi.
  Best practices cho planning complex features. So sánh plan-first vs code-first.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Agent Mode — AI tự động viết code"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5389" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5389)"/>

  <!-- Decorations -->
  <g>
    <circle cx="747" cy="231" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="894" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1041" cy="105" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="688" cy="172" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="239" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="181" x2="1100" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="211" x2="1050" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.1769145362398,113 962.1769145362398,149 931,167 899.8230854637602,149 899.8230854637602,113.00000000000001 931,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Lập trình — Bài 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 6: Plan Agent — Lập kế hoạch trước khi</tspan>
      <tspan x="60" dy="42">code</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Agent Mode — AI tự động viết code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-can-plan-truoc"><strong>1. Tại sao cần Plan trước khi Code?</strong></h2>

<p>Một trong những sai lầm phổ biến nhất khi Vibe Coding là nhảy thẳng vào code mà không có plan. Kết quả thường là:</p>

<ul>
<li>Agent đi sai hướng, phải redo từ đầu</li>
<li>Code structure không phù hợp cho scale</li>
<li>Thiếu edge cases quan trọng</li>
<li>Tốn nhiều iterations (và tokens/requests)</li>
</ul>

<p><strong>Plan Agent</strong> giải quyết vấn đề này bằng cách tách riêng giai đoạn <strong>planning</strong> và <strong>implementation</strong>.</p>

<h2 id="2-plan-agent-workflow"><strong>2. Plan Agent Workflow</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│            PLAN-FIRST WORKFLOW                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. 📝 USER: Mô tả feature/task                 │
│           ↓                                      │
│  2. 🔍 PLAN AGENT: Phân tích codebase           │
│     - Đọc files liên quan                       │
│     - Hiểu architecture hiện tại                │
│     - Hỏi clarifying questions nếu cần          │
│           ↓                                      │
│  3. 📋 PLAN AGENT: Tạo implementation plan      │
│     - Step-by-step tasks                        │
│     - Files cần tạo/sửa                         │
│     - Dependencies cần install                  │
│     - Potential risks/trade-offs                │
│           ↓                                      │
│  4. 👀 USER: Review + điều chỉnh plan           │
│           ↓                                      │
│  5. 🚀 HAND OFF: Plan → Agent để implement      │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-su-dung-plan-agent"><strong>3. Sử dụng Plan Agent</strong></h2>

<h3>Bước 1: Chọn Plan Agent</h3>
<p>Trong Chat view, chọn <strong>"Plan"</strong> từ agent dropdown.</p>

<h3>Bước 2: Mô tả task</h3>
<pre><code class="language-text">I want to add a real-time notification system to our Express.js app.
Requirements:
- WebSocket-based (Socket.IO)
- Notification types: info, warning, error, success
- Persist notifications in PostgreSQL
- Mark as read/unread
- Bell icon with unread count badge
- Dropdown showing recent notifications
- API endpoints for CRUD operations
- Only authenticated users receive notifications
</code></pre>

<h3>Bước 3: Plan Agent phân tích và trả về plan</h3>
<p>Plan Agent sẽ tạo một structured plan như:</p>

<pre><code class="language-markdown">## Implementation Plan: Real-time Notification System

### Phase 1: Database & Models
1. Create `notifications` table migration
   - Fields: id, user_id, type, title, message, is_read, created_at
2. Create Notification model (Sequelize/Prisma)
3. Add relations to User model

### Phase 2: Backend API
4. Install socket.io dependency
5. Create NotificationService (create, getByUser, markAsRead, delete)
6. Create NotificationController with REST endpoints
   - GET /api/notifications (with pagination)
   - PATCH /api/notifications/:id/read
   - DELETE /api/notifications/:id
7. Add authentication middleware to notification routes

### Phase 3: WebSocket Integration
8. Setup Socket.IO server alongside Express
9. Implement auth for WebSocket connections (JWT verification)
10. Create room-per-user pattern for targeted notifications
11. Emit events on notification create/update

### Phase 4: Frontend Components
12. Create NotificationBell component (badge with unread count)
13. Create NotificationDropdown component
14. Setup Socket.IO client with auto-reconnect
15. Add toast notifications for new incoming notifications

### Trade-offs & Risks:
- Socket.IO adds complexity; consider SSE for simpler use case
- Need Redis adapter for multi-server deployment
- Consider rate limiting notification creation
</code></pre>

<h3>Bước 4: Review và điều chỉnh</h3>
<p>Bạn có thể respond:</p>
<pre><code class="language-text">Good plan! But let's make these changes:
- Use Prisma instead of Sequelize
- Add a Phase 0 with unit test setup
- Skip the toast notifications for now
- Add rate limiting in Phase 2
</code></pre>

<h3>Bước 5: Hand off sang Agent</h3>
<p>Khi plan OK, chọn <strong>hand off to Agent</strong>. Agent sẽ thực thi plan step-by-step, và bạn có thể theo dõi progress trong session.</p>

<h2 id="4-plan-cho-cac-scenarios-khac-nhau"><strong>4. Plan cho các scenarios khác nhau</strong></h2>

<h3>4.1. New Feature</h3>
<pre><code class="language-text">Plan adding OAuth2 social login (Google, GitHub) to our Next.js app.
We currently use JWT with email/password auth.
Consider: NextAuth.js vs custom implementation.
</code></pre>

<h3>4.2. Refactoring</h3>
<pre><code class="language-text">Plan migrating our REST API from Express.js to Fastify.
Current codebase has 15 route files, 8 middleware, Sequelize ORM.
We want zero downtime migration — propose a phased approach.
</code></pre>

<h3>4.3. Bug Investigation</h3>
<pre><code class="language-text">Plan debugging this issue: Users report that their session expires
randomly after 10-15 minutes, even though token expiry is set to 24h.
Analyze our auth flow and create a debugging plan.
</code></pre>

<h3>4.4. Architecture Decision</h3>
<pre><code class="language-text">Plan the data layer for our e-commerce app. Compare these options:
1. PostgreSQL + Prisma
2. MongoDB + Mongoose
3. PostgreSQL + Drizzle ORM
Consider: our team knows SQL, we need transactions, Vercel deployment.
</code></pre>

<h2 id="5-plan-first-vs-code-first"><strong>5. Plan-First vs Code-First</strong></h2>

<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Plan-First</th>
<th>Code-First (Agent trực tiếp)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Khi nào dùng</strong></td>
<td>Tasks phức tạp, multi-file, ảnh hưởng architecture</td>
<td>Tasks đơn giản, single feature, well-defined</td>
</tr>
<tr>
<td><strong>Thời gian setup</strong></td>
<td>Lâu hơn (plan + review)</td>
<td>Nhanh (code ngay)</td>
</tr>
<tr>
<td><strong>Chất lượng output</strong></td>
<td>Cao hơn, ít phải redo</td>
<td>Tùy thuộc prompt quality</td>
</tr>
<tr>
<td><strong>Rủi ro</strong></td>
<td>Thấp (catch issues sớm)</td>
<td>Cao hơn (có thể sai hướng)</td>
</tr>
<tr>
<td><strong>Token efficiency</strong></td>
<td>Tốt hơn (ít iterations)</td>
<td>Có thể tốn nhiều iterations</td>
</tr>
</tbody>
</table>

<p><strong>Rule of thumb:</strong></p>
<ul>
<li>Task &lt; 30 phút → Code-First (Agent mode trực tiếp)</li>
<li>Task &gt; 30 phút hoặc ảnh hưởng nhiều files → Plan-First</li>
<li>Migration hoặc refactoring → Luôn Plan-First</li>
</ul>

<h2 id="6-tips-plan-hieu-qua"><strong>6. Tips để Plan hiệu quả</strong></h2>

<ul>
<li><strong>Cung cấp context đầy đủ</strong>: tech stack, conventions hiện tại, constraints</li>
<li><strong>Nêu rõ trade-offs bạn đã biết</strong>: giúp Plan Agent focus vào quyết định đúng</li>
<li><strong>Yêu cầu phân tích risks</strong>: "What could go wrong?" hoặc "What are the edge cases?"</li>
<li><strong>Hỏi về alternatives</strong>: "Compare approach A vs B" trước khi commit</li>
<li><strong>Review plan kỹ trước hand off</strong>: sửa plan dễ hơn sửa code đã implement</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. Bài tập thực hành</strong></h2>

<ol>
<li>Mở Chat view → chọn <strong>Plan</strong> agent</li>
<li>Prompt: <em>"Plan building a markdown blog engine with: file-based posts, tags, categories, search, RSS feed, dark mode. Use Next.js 15 and Tailwind."</em></li>
<li>Review plan từ Plan Agent</li>
<li>Yêu cầu điều chỉnh ít nhất 2 điểm</li>
<li>Hand off sang Agent để implement Phase 1</li>
</ol>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<p>Plan Agent là "kiến trúc sư" — nó giúp bạn <strong>tư duy trước khi hành động</strong>. Trong series này, chúng ta sẽ dùng Plan-First approach cho tất cả dự án thực chiến ở Phần 5.</p>

<table>
<thead>
<tr>
<th>Workflow</th>
<th>Steps</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Plan-First</strong></td>
<td>Describe → Plan → Review → Adjust → Hand off → Implement</td>
</tr>
<tr>
<td><strong>Code-First</strong></td>
<td>Describe → Implement → Review → Iterate</td>
</tr>
</tbody>
</table>

<p>Bài tiếp theo sẽ cover <strong>Cloud Agent & Copilot CLI</strong> — cách chạy agent ở mọi nơi: local, background, cloud, và qua pull requests.</p>
