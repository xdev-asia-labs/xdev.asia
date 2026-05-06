---
id: 019f1c30-a301-7001-c001-v1b3c0d10301
title: 第 8 課：寫 Prompt for Code 的藝術 — 從模糊到精確
slug: bai-8-nghe-thuat-viet-prompt-cho-code
description: 良好程式碼提示的剖析：上下文、限制、範例。提示模式：程式碼的零樣本、少樣本、思考鏈。如何清楚描述需求。迭代提示。常見錯誤以及如何修復它們。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：快速程式碼工程
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：寫 Prompt for Code 的藝術 —</tspan>
      <tspan x="60" dy="42">從模糊到精確</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：快速程式碼工程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-tai-sao-prompt-engineering"><strong>1. 為什麼即時工程對 Vibe Coding 很重要？</strong></h2>

<p>在 Vibe 編碼中， <strong>提示是你的程式碼</strong>。輸出品質直接取決於提示品質。好的提示可以節省迭代時間，而壞的提示會導致完全錯誤的程式碼。</p>

<pre><code class="language-text">❌ Prompt tồi:  "Make a login page"
✅ Prompt tốt:  "Create a login page with email/password fields using React Hook Form,
                 Zod validation, error messages below each field, submit button
                 disabled until valid, loading spinner during API call,
                 redirect to /dashboard on success. Use our existing AuthContext
                 and api/auth endpoint. Follow the design system in styles/theme.ts"
</code></pre>

<h2 id="2-anatomy-of-good-prompt"><strong>2. 剖析良好的程式碼提示</strong></h2>

<p>有效的提示代碼有 5 個組成部分：</p>

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

<h3>應用實例：</h3>
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

<h2 id="3-prompting-patterns"><strong>3. 代碼提示模式</strong></h2>

<h3>3.1.零射擊－零例如</h3>
<pre><code class="language-text">// Đơn giản, nhanh. Phù hợp khi task rõ ràng:
Create a TypeScript utility function to deep merge two objects,
handling arrays by concatenation and nested objects recursively.
</code></pre>

<h3>3.2.很少的鏡頭－有例子</h3>
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

<h3>3.3.思考鏈－逐步推理</h3>
<pre><code class="language-text">// Yêu cầu AI "think step by step":
Design a rate limiter middleware for Express.js.
Think step by step:
1. First, decide on the algorithm (token bucket vs sliding window)
2. Then, choose the storage (in-memory vs Redis)
3. Implement the middleware with configurable options
4. Add proper error responses and headers
5. Write unit tests for edge cases
</code></pre>

<h3>3.4.基於角色－為 AI 設定角色</h3>
<pre><code class="language-text">// Cho AI một persona:
Act as a senior security engineer reviewing this authentication code.
Identify all security vulnerabilities and suggest fixes with code examples.
Focus on: injection attacks, token handling, password storage, rate limiting.
</code></pre>

<h2 id="4-iterative-prompting"><strong>4. 迭代提示－逐步改進</strong></h2>

<p>有效的振動編碼就是其中之一 <strong>談話</strong>，沒有任何提示：</p>

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

<h2 id="5-common-mistakes"><strong>5. 常見錯誤及其解決方法</strong></h2>

<table>
<thead>
<tr>
<th>錯誤</th>
<th>例如</th>
<th>修復</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>太模糊了</strong></td>
<td>“製作一個儀表板”</td>
<td>指定指標、圖表、資料來源、佈局</td>
</tr>
<tr>
<td><strong>太長</strong></td>
<td>1 個提示超過 500 個單字</td>
<td>分為多次迭代</td>
</tr>
<tr>
<td><strong>沒有上下文</strong></td>
<td>“新增身份驗證”</td>
<td>指定框架、策略、現有程式碼</td>
</tr>
<tr>
<td><strong>自相矛盾</strong></td>
<td>“使用 REST 但實時”</td>
<td>顯而易見：REST + WebSocket 實作即時</td>
</tr>
<tr>
<td><strong>無限制</strong></td>
<td>“創建 API”</td>
<td>指定錯誤處理、身份驗證、驗證</td>
</tr>
<tr>
<td><strong>越南語和英語</strong></td>
<td>“創建一個函數來檢查有效性”</td>
<td>一致性：全英語或全越南語</td>
</tr>
</tbody>
</table>

<h2 id="6-prompt-templates"><strong>6. 提供提示模板</strong></h2>

<h3>範本：新功能</h3>
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

<h3>範本：錯誤修復</h3>
<pre><code class="language-text">Fix this bug: [BUG_DESCRIPTION]

Error message: [ERROR_MESSAGE]

Steps to reproduce:
1. [STEP_1]
2. [STEP_2]

Expected behavior: [EXPECTED]
Actual behavior: [ACTUAL]

Relevant files: [FILE_PATHS]
</code></pre>

<h3>模板：重構</h3>
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

<h2 id="7-ngon-ngu-prompt"><strong>7. 提示中的英語與越南語</strong></h2>

<p>AI模型（GPT、Claude）主要以英語訓練，因此：</p>

<ul>
<li><strong>英文提示</strong> 通常可以為程式碼提供更好的結果</li>
<li><strong>越南語提示</strong> 適用於：解釋、文件、評論</li>
<li><strong>混合</strong> （越南語 + 代碼術語英語）也適用於 Copilot</li>
</ul>

<pre><code class="language-text">// OK - Mixed language:
Tạo một middleware xử lý rate limiting cho Express.js,
sử dụng sliding window algorithm với Redis.

// Better - Full English cho complex code tasks:
Create a rate limiting middleware for Express.js using
sliding window algorithm with Redis backend.
</code></pre>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<table>
<thead>
<tr>
<th>圖案</th>
<th>何時使用</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>零射擊</strong></td>
<td>任務簡單明了</td>
</tr>
<tr>
<td><strong>少射</strong></td>
<td>需要按照特定模式輸出</td>
</tr>
<tr>
<td><strong>思想鏈</strong></td>
<td>複雜的邏輯、設計決策</td>
</tr>
<tr>
<td><strong>基於角色</strong></td>
<td>安全審查、程式碼審查、特定專業知識</td>
</tr>
<tr>
<td><strong>迭代</strong></td>
<td>每個任務（應該始終使用）</td>
</tr>
</tbody>
</table>

<p>下一篇文章會更深入 <strong>情境管理</strong> — 如何為人工智慧提供正確的上下文來理解您的程式碼庫。</p>
