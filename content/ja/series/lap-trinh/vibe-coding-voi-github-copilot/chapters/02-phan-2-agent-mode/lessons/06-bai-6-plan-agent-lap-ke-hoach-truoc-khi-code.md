---
id: 019f1c30-a202-7001-c001-v1b3c0d10202
title: 'レッスン 6: プラン エージェント — コーディングの前に計画する'
slug: bai-6-plan-agent-lap-ke-hoach-truoc-khi-code
description: >-
  エージェントのワークフローを計画する: 分析 → 計画 → 引き継ぎ。構造化された実装計画を作成し、計画を確認して調整し、実行のためにエージェント
  モードに引き渡します。複雑な機能を計画するためのベスト プラクティス。プランファーストとコードファーストを比較します。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: エージェント モード — AI が自動的にコードを作成します'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: エージェントの計画 — 事前に計画を立てる</tspan>
      <tspan x="60" dy="42">コード</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: エージェント モード — AI が自動的にコードを作成します</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-can-plan-truoc"><strong>1. コードを作成する前に計画を立てる必要があるのはなぜですか?</strong></h2>

<p>Vibe コーディングで最もよくある間違いの 1 つは、計画なしにいきなりコーディングに取り掛かることです。通常、結果は次のようになります。</p>

<ul>
<li>エージェントが間違った方向に進み、最初からやり直す必要がある</li>
<li>コード構造が規模に適していない</li>
<li>重要なエッジケースが欠落している</li>
<li>多くの反復 (およびトークン/リクエスト) のコストがかかる</li>
</ul>

<p><strong>プランエージェント</strong> 段階を分けることでこの問題を解決する <strong>計画中。計画</strong> そして <strong>実装。実装</strong>。</p>

<h2 id="2-plan-agent-workflow"><strong>2. エージェントのワークフローを計画する</strong></h2>

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

<h2 id="3-su-dung-plan-agent"><strong>3. プランエージェントを使用する</strong></h2>

<h3>ステップ 1: プランエージェントを選択する</h3>
<p>チャットビューで、選択します <strong>「計画」</strong> エージェントのドロップダウンから。</p>

<h3>ステップ 2: タスクの説明</h3>
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

<h3>ステップ 3: プラン エージェントがプランを分析して返す</h3>
<p>プラン エージェントは次のような構造化されたプランを作成します。</p>

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

<h3>ステップ 4: 確認と調整</h3>
<p>次のように応答できます。</p>
<pre><code class="language-text">Good plan! But let's make these changes:
- Use Prisma instead of Sequelize
- Add a Phase 0 with unit test setup
- Skip the toast notifications for now
- Add rate limiting in Phase 2
</code></pre>

<h3>ステップ 5: エージェントに引き継ぎます</h3>
<p>プランがOKの場合は、選択してください <strong>エージェントに引き継ぎます</strong>。エージェントは計画を段階的に実行し、セッション内の進行状況を追跡できます。</p>

<h2 id="4-plan-cho-cac-scenarios-khac-nhau"><strong>4. さまざまなシナリオを計画する</strong></h2>

<h3>4.1.新機能</h3>
<pre><code class="language-text">Plan adding OAuth2 social login (Google, GitHub) to our Next.js app.
We currently use JWT with email/password auth.
Consider: NextAuth.js vs custom implementation.
</code></pre>

<h3>4.2.リファクタリング</h3>
<pre><code class="language-text">Plan migrating our REST API from Express.js to Fastify.
Current codebase has 15 route files, 8 middleware, Sequelize ORM.
We want zero downtime migration — propose a phased approach.
</code></pre>

<h3>4.3.バグ調査</h3>
<pre><code class="language-text">Plan debugging this issue: Users report that their session expires
randomly after 10-15 minutes, even though token expiry is set to 24h.
Analyze our auth flow and create a debugging plan.
</code></pre>

<h3>4.4.アーキテクチャの決定</h3>
<pre><code class="language-text">Plan the data layer for our e-commerce app. Compare these options:
1. PostgreSQL + Prisma
2. MongoDB + Mongoose
3. PostgreSQL + Drizzle ORM
Consider: our team knows SQL, we need transactions, Vercel deployment.
</code></pre>

<h2 id="5-plan-first-vs-code-first"><strong>5. プランファーストとコードファースト</strong></h2>

<table>
<thead>
<tr>
<th>基準</th>
<th>計画第一</th>
<th>コードファースト (ダイレクトエージェント)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>いつ使用するか</strong></td>
<td>タスクは複雑で複数のファイルがあり、アーキテクチャに影響を与える</td>
<td>タスクはシンプルで、単一の機能があり、明確に定義されています</td>
</tr>
<tr>
<td><strong>セットアップ時間</strong></td>
<td>長期 (計画 + レビュー)</td>
<td>高速 (今すぐコーディング)</td>
</tr>
<tr>
<td><strong>出力品質</strong></td>
<td>高いほどやり直しが少なくなる</td>
<td>迅速な品質に依存します</td>
</tr>
<tr>
<td><strong>リスク</strong></td>
<td>低い（問題を早期に発見）</td>
<td>より高い（おそらく間違った方向に）</td>
</tr>
<tr>
<td><strong>トークンの効率</strong></td>
<td>より良い（反復回数が少なくなる）</td>
<td>何度も繰り返しがかかる場合がある</td>
</tr>
</tbody>
</table>

<p><strong>経験則:</strong></p>
<ul>
<li>タスク < 30 分 → コードファースト (ダイレクト エージェント モード)</li>
<li>タスク > 30 分、または多くのファイルに影響する → 計画優先</li>
<li>移行またはリファクタリング → 常に計画を優先する</li>
</ul>

<h2 id="6-tips-plan-hieu-qua"><strong>6. 効果的な計画を立てるためのヒント</strong></h2>

<ul>
<li><strong>完全なコンテキストを提供する</strong>: 技術スタック、現在の規約、制約</li>
<li><strong>あなたが知っているトレードオフを明確に述べてください</strong>: プラン エージェントが正しい決定に集中できるように支援します。</li>
<li><strong>リスク分析をリクエストする</strong>: 「何が問題になる可能性がありますか?」または「エッジケースは何ですか?」</li>
<li><strong>代替案について尋ねる</strong>: コミットする前に「アプローチ A と B を比較」</li>
<li><strong>引き継ぎを行う前に計画を注意深く確認してください</strong>: 計画の編集は、実装されたコードを編集するよりも簡単です</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. 練習問題</strong></h2>

<ol>
<li>チャットビューを開く → 選択 <strong>計画</strong> エージェント。エージェント</li>
<li>プロンプト: <em>「ファイルベースの投稿、タグ、カテゴリー、検索、RSS フィード、ダーク モードを備えたマークダウン ブログ エンジンの構築を計画してください。Next.js 15 と Tailwind を使用してください。」</em></li>
<li>プランエージェントからのプランのレビュー</li>
<li>少なくとも 2 点の調整が必要です</li>
<li>フェーズ 1 を実装するためにエージェントに引き継ぎます</li>
</ol>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<p>Plan Agent は「アーキテクト」です - それはあなたを助けます <strong>行動する前に考える</strong>。このシリーズの第 5 回では、すべての実際のプロジェクトに対してプランファーストのアプローチを使用します。</p>

<table>
<thead>
<tr>
<th>ワークフロー</th>
<th>ステップ</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>計画第一</strong></td>
<td>説明→計画→レビュー→調整→引き継ぎ→実装</td>
</tr>
<tr>
<td><strong>コードファースト</strong></td>
<td>説明→実装→レビュー→反復</td>
</tr>
</tbody>
</table>

<p>次の曲はカバーになります <strong>クラウドエージェントとCopilot CLI</strong> — ローカル、バックグラウンド、クラウド、プル リクエスト経由など、どこでもエージェントを実行する方法。</p>
