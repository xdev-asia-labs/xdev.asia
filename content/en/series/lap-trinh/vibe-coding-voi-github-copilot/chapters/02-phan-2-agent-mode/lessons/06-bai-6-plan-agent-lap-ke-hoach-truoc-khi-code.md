---
id: 019f1c30-a202-7001-c001-v1b3c0d10202
title: 'Lesson 6: Plan Agent — Plan before coding'
slug: bai-6-plan-agent-lap-ke-hoach-truoc-khi-code
description: >-
  Plan Agent workflow: analyze → plan → hand off. Create structured
  implementation plan, review and adjust plan, hand off to Agent mode for
  execution. Best practices for planning complex features. Compare plan-first vs
  code-first.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Agent Mode — AI automatically writes code'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Plan Agent — Plan in advance</tspan>
      <tspan x="60" dy="42">code</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Agent Mode — AI automatically writes code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-can-plan-truoc"><strong>1. Why is it necessary to Plan before Code?</strong></h2>

<p>One of the most common mistakes when Vibe Coding is jumping straight into coding without a plan. The results are usually:</p>

<ul>
<li>Agent goes in the wrong direction and has to redo from the beginning</li>
<li>Code structure is not suitable for scale</li>
<li>Missing important edge cases</li>
<li>Costs many iterations (and tokens/requests)</li>
</ul>

<p><strong>Plan Agent</strong> Solve this problem by separating the stages <strong>planning. planning</strong> and <strong>implementation. implementation</strong>.</p>

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

<h2 id="3-su-dung-plan-agent"><strong>3. Use Plan Agent</strong></h2>

<h3>Step 1: Select Plan Agent</h3>
<p>In Chat view, select <strong>"Plan"</strong> from agent dropdown.</p>

<h3>Step 2: Describe the task</h3>
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

<h3>Step 3: Plan Agent analyzes and returns the plan</h3>
<p>Plan Agent will create a structured plan like:</p>

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

<h3>Step 4: Review and adjust</h3>
<p>You can respond:</p>
<pre><code class="language-text">Good plan! But let's make these changes:
- Use Prisma instead of Sequelize
- Add a Phase 0 with unit test setup
- Skip the toast notifications for now
- Add rate limiting in Phase 2
</code></pre>

<h3>Step 5: Hand off to Agent</h3>
<p>When plan is OK, select <strong>hand off to Agent</strong>. The agent will execute the plan step-by-step, and you can track progress within the session.</p>

<h2 id="4-plan-cho-cac-scenarios-khac-nhau"><strong>4. Plan for different scenarios</strong></h2>

<h3>4.1. New Features</h3>
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
<th>Criteria</th>
<th>Plan-First</th>
<th>Code-First (Direct Agent)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>When to use</strong></td>
<td>Tasks are complex, multi-file, affecting architecture</td>
<td>Tasks are simple, single feature, well-defined</td>
</tr>
<tr>
<td><strong>Setup time</strong></td>
<td>Longer (plan + review)</td>
<td>Fast (code now)</td>
</tr>
<tr>
<td><strong>Output quality</strong></td>
<td>Higher, less redo</td>
<td>Depends on prompt quality</td>
</tr>
<tr>
<td><strong>Risk</strong></td>
<td>Low (catch issues early)</td>
<td>Higher (possibly in the wrong direction)</td>
</tr>
<tr>
<td><strong>Token efficiency</strong></td>
<td>Better (fewer iterations)</td>
<td>May take many iterations</td>
</tr>
</tbody>
</table>

<p><strong>Rule of thumb:</strong></p>
<ul>
<li>Task < 30 minutes → Code-First (Direct Agent mode)</li>
<li>Task > 30 minutes or affecting many files → Plan-First</li>
<li>Migration or refactoring → Always Plan-First</li>
</ul>

<h2 id="6-tips-plan-hieu-qua"><strong>6. Tips for effective planning</strong></h2>

<ul>
<li><strong>Provide full context</strong>: tech stack, current conventions, constraints</li>
<li><strong>Clearly state the trade-offs you know about</strong>: helps Plan Agent focus on the right decisions</li>
<li><strong>Request risk analysis</strong>: "What could go wrong?" or "What are the edge cases?"</li>
<li><strong>Ask about alternatives</strong>: "Compare approach A vs B" before committing</li>
<li><strong>Review the plan carefully before handing off</strong>: Editing a plan is easier than editing implemented code</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. Practice exercises</strong></h2>

<ol>
<li>Open Chat view → select <strong>Plan</strong> agent. agent</li>
<li>Prompt: <em>"Plan building a markdown blog engine with: file-based posts, tags, categories, search, RSS feed, dark mode. Use Next.js 15 and Tailwind."</em></li>
<li>Review plan from Plan Agent</li>
<li>Requires at least a 2-point adjustment</li>
<li>Hand off to Agent to implement Phase 1</li>
</ol>

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<p>Plan Agent is the "architect" — it helps you <strong>think before acting</strong>. In this series, we will use the Plan-First approach for all real-life projects in Part 5.</p>

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

<p>The next song will be a cover <strong>Cloud Agent & Copilot CLI</strong> — how to run agents anywhere: local, background, cloud, and via pull requests.</p>
