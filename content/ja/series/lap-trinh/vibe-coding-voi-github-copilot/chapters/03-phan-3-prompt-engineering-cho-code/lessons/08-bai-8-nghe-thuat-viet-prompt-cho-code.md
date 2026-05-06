---
id: 019f1c30-a301-7001-c001-v1b3c0d10301
title: 'レッスン 8: コードのプロンプトを書く技術 — 漠然としたものから正確なものまで'
slug: bai-8-nghe-thuat-viet-prompt-cho-code
description: >-
  優れたコード プロンプトの構造: コンテキスト、制約、例。プロンプトパターン:
  コードのゼロショット、少数ショット、思考の連鎖。要件を明確に説明する方法。反復的なプロンプト。よくある間違いとその修正方法。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: コードの迅速なエンジニアリング'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8404" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8404)"/>

  <!-- Decorations -->
  <g>
    <circle cx="798" cy="284" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="694" cy="280" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="278" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="276" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="204" x2="1100" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="234" x2="1050" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 プログラミング — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: コードのプロンプトを作成する技術 —</tspan>
      <tspan x="60" dy="42">漠然としたものから正確なものへ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: コードの迅速なエンジニアリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-prompt-engineering"><strong>1. Vibe コーディングにとってプロンプト エンジニアリングが重要なのはなぜですか?</strong></h2>

<p>バイブコーディングでは、 <strong>プロンプトはあなたのコードです</strong>。出力品質はプロンプト品質に直接依存します。適切なプロンプトは何時間もの反復作業を節約できますが、悪いプロンプトは完全に間違ったコードにつながります。</p>

<pre><code class="language-text">❌ Prompt tồi:  "Make a login page"
✅ Prompt tốt:  "Create a login page with email/password fields using React Hook Form,
                 Zod validation, error messages below each field, submit button
                 disabled until valid, loading spinner during API call,
                 redirect to /dashboard on success. Use our existing AuthContext
                 and api/auth endpoint. Follow the design system in styles/theme.ts"
</code></pre>

<h2 id="2-anatomy-of-good-prompt"><strong>2. 優れたコードプロンプトの構造</strong></h2>

<p>効果的なプロンプト コードには 5 つのコンポーネントがあります。</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│           PROMPT STRUCTURE                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. CONTEXT     → Bối cảnh (tech stack, codebase)│
│  2. TASK        → Yêu cầu cụ thể                │
│  3. CONSTRAINTS → Ràng buộc (patterns, limits)   │
│  4. EXAMPLES    → Ví dụ input/output mong muốn  │
│  5. OUTPUT FORMAT → Định dạng kết quả           │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h3>応用例：</h3>
<pre><code class="language-text">// CONTEXT
We have a Next.js 15 app with App Router, TypeScript, Prisma ORM,
and PostgreSQL. Authentication uses NextAuth v5 with JWT strategy.

// TASK
Create an API route handler for creating blog posts.

// CONSTRAINTS
- Use Zod for request body validation
- Return proper HTTP status codes (201 created, 400 validation error, 401 unauthorized)
- Only authenticated users with "author" role can create posts
- Slug should be auto-generated from title (URL-safe, Vietnamese diacritics removed)
- Include created_at timestamp

// EXAMPLES
Request body:
{
  "title": "Hướng dẫn Docker",
  "content": "Nội dung bài viết...",
  "tags": ["docker", "devops"]
}

Expected response (201):
{
  "id": "clx...",
  "title": "Hướng dẫn Docker",
  "slug": "huong-dan-docker",
  "content": "Nội dung bài viết...",
  "tags": ["docker", "devops"],
  "author_id": "user123",
  "created_at": "2026-03-31T12:00:00Z"
}

// OUTPUT FORMAT
Create the file at src/app/api/posts/route.ts following our existing API patterns.
</code></pre>

<h2 id="3-prompting-patterns"><strong>3. コードのプロンプトパターン</strong></h2>

<h3>3.1.ゼロショット — ゼロ 例</h3>
<pre><code class="language-text">// Đơn giản, nhanh. Phù hợp khi task rõ ràng:
Create a TypeScript utility function to deep merge two objects,
handling arrays by concatenation and nested objects recursively.
</code></pre>

<h3>3.2.少数のショット — 例があります</h3>
<pre><code class="language-text">// Cung cấp examples để AI hiểu pattern mong muốn:
Create a validation function following this pattern:

// Example 1:
validateEmail("test@example.com") → { valid: true }
validateEmail("invalid") → { valid: false, error: "Invalid email format" }

// Example 2:
validatePhone("+84912345678") → { valid: true }
validatePhone("abc") → { valid: false, error: "Invalid phone number" }

// Now create:
validateUsername(username) with rules:
- 3-20 characters
- Only alphanumeric and underscore
- Cannot start with number
</code></pre>

<h3>3.3.思考の連鎖 — 段階的な推論</h3>
<pre><code class="language-text">// Yêu cầu AI "think step by step":
Design a rate limiter middleware for Express.js.
Think step by step:
1. First, decide on the algorithm (token bucket vs sliding window)
2. Then, choose the storage (in-memory vs Redis)
3. Implement the middleware with configurable options
4. Add proper error responses and headers
5. Write unit tests for edge cases
</code></pre>

<h3>3.4.ロールベース — AI のロールを設定します</h3>
<pre><code class="language-text">// Cho AI một persona:
Act as a senior security engineer reviewing this authentication code.
Identify all security vulnerabilities and suggest fixes with code examples.
Focus on: injection attacks, token handling, password storage, rate limiting.
</code></pre>

<h2 id="4-iterative-prompting"><strong>4. 反復的なプロンプト — 段階的な改善</strong></h2>

<p>効果的なバイブコーディングはその1つです <strong>会話</strong>、単一のプロンプトではありません:</p>

<pre><code class="language-text">// Round 1: Tạo cơ bản
Create a search component for our blog with debounced input.

// Round 2: Cải thiện
Good, but add these improvements:
- Show loading skeleton while fetching
- Handle empty results with a friendly message
- Add keyboard navigation (arrow keys to select, Enter to open)

// Round 3: Edge cases
Now handle these edge cases:
- Search query less than 3 characters → show "Type at least 3 characters"
- API error → show retry button
- Very long results → add pagination with "Load more"

// Round 4: Polish
Finally, add proper ARIA attributes for accessibility
and transition animations for smooth UX.
</code></pre>

<h2 id="5-common-mistakes"><strong>5. よくある間違いとその修正方法</strong></h2>

<table>
<thead>
<tr>
<th>間違い</th>
<th>たとえば</th>
<th>修正</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>曖昧すぎる</strong></td>
<td>「ダッシュボードを作る」</td>
<td>メトリクス、グラフ、データ ソース、レイアウトを指定する</td>
</tr>
<tr>
<td><strong>長すぎます</strong></td>
<td>1 つのプロンプトで 500 以上の単語</td>
<td>複数の反復に分割</td>
</tr>
<tr>
<td><strong>文脈がありません</strong></td>
<td>「認証を追加」</td>
<td>フレームワーク、戦略、既存のコードを指定する</td>
</tr>
<tr>
<td><strong>矛盾している</strong></td>
<td>「REST を使用しますが、リアルタイムで使用します」</td>
<td>明らか: リアルタイムのための REST + WebSocket</td>
</tr>
<tr>
<td><strong>制約なし</strong></td>
<td>「APIを作成する」</td>
<td>エラー処理、認証、検証を指定する</td>
</tr>
<tr>
<td><strong>ベトナム語と英語</strong></td>
<td>「妥当性をチェックする関数を作成する」</td>
<td>一貫性: 完全な英語または完全なベトナム語</td>
</tr>
</tbody>
</table>

<h2 id="6-prompt-templates"><strong>6. プロンプトテンプレートが利用可能</strong></h2>

<h3>テンプレート: 新機能</h3>
<pre><code class="language-text">Create [FEATURE_NAME] for our [FRAMEWORK] app.

Context:
- Tech stack: [STACK]
- Current architecture: [PATTERN]
- Related files: [FILE_PATHS]

Requirements:
1. [REQUIREMENT_1]
2. [REQUIREMENT_2]
3. [REQUIREMENT_3]

Constraints:
- Follow [PATTERN_NAME] pattern
- Use [LIBRARY] for [PURPOSE]
- Handle errors with [STRATEGY]
- Include [TEST_TYPE] tests
</code></pre>

<h3>テンプレート: バグ修正</h3>
<pre><code class="language-text">Fix this bug: [BUG_DESCRIPTION]

Error message: [ERROR_MESSAGE]

Steps to reproduce:
1. [STEP_1]
2. [STEP_2]

Expected behavior: [EXPECTED]
Actual behavior: [ACTUAL]

Relevant files: [FILE_PATHS]
</code></pre>

<h3>テンプレート: リファクタリング</h3>
<pre><code class="language-text">Refactor [CODE_DESCRIPTION] to improve [QUALITY_ATTRIBUTE].

Current issues:
- [ISSUE_1]
- [ISSUE_2]

Target state:
- [DESIRED_STATE_1]
- [DESIRED_STATE_2]

Constraints:
- Don't change the public API
- Maintain backward compatibility
- Keep test coverage above [X]%
</code></pre>

<h2 id="7-ngon-ngu-prompt"><strong>7. プロンプトでの英語対ベトナム語</strong></h2>

<p>AI モデル (GPT、Claude) は主に英語でトレーニングされるため、次のようになります。</p>

<ul>
<li><strong>英語でのプロンプト</strong> 多くの場合、コードにより良い結果が得られます</li>
<li><strong>丁寧なベトナム語</strong> OK: 説明、ドキュメント、コメント</li>
<li><strong>混合</strong> (ベトナム語 + コード用語英語) も Copilot とうまく連携します</li>
</ul>

<pre><code class="language-text">// OK - Mixed language:
Tạo một middleware xử lý rate limiting cho Express.js,
sử dụng sliding window algorithm với Redis.

// Better - Full English cho complex code tasks:
Create a rate limiting middleware for Express.js using
sliding window algorithm with Redis backend.
</code></pre>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>パターン</th>
<th>いつ使用するか</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ゼロショット</strong></td>
<td>タスクはシンプルかつ明確です</td>
</tr>
<tr>
<td><strong>数ショット</strong></td>
<td>特定のパターンに従って出力する必要がある</td>
</tr>
<tr>
<td><strong>思考の連鎖</strong></td>
<td>複雑なロジック、設計上の決定</td>
</tr>
<tr>
<td><strong>役割ベースの</strong></td>
<td>セキュリティレビュー、コードレビュー、特定の専門知識</td>
</tr>
<tr>
<td><strong>反復的</strong></td>
<td>すべてのタスク (常に使用する必要があります)</td>
</tr>
</tbody>
</table>

<p>次の記事ではさらに深く掘り下げていきます <strong>コンテキスト管理</strong> — AI がコードベースを理解できるように適切なコンテキストを提供する方法。</p>
