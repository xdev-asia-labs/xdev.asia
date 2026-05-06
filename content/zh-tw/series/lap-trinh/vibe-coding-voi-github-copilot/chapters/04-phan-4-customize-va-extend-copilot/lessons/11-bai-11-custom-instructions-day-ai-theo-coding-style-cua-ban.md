---
id: 019f1c30-a401-7001-c001-v1b3c0d10401
title: 第 11 課：自訂指令 — 根據您的程式設計風格教授 AI
slug: bai-11-custom-instructions-day-ai-theo-coding-style-cua-ban
description: >-
  文件.github/copilot-instructions.md，高效的指令結構。項目級指令與用戶級指令。檔案類型特定指令
  (.instructions.md)。 /init 指令自動產生指令。團隊的最佳實踐。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：自訂和擴充 Copilot
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6707" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6707)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1095" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1090" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1085" cy="245" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1080" cy="80" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="969.6410161513776,115 969.6410161513776,155 935,175 900.3589838486224,155 900.3589838486224,115.00000000000001 935,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：自訂指令－教 AI 遵循</tspan>
      <tspan x="60" dy="42">你的程式設計風格</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：自訂和擴充 Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-custom-instructions-la-gi"><strong>1. 什麼是定制指令？</strong></h2>

<p>自訂指令是 <strong>靜態規則</strong> 您為 Copilot 編寫的檔案會自動套用到 <strong>每一次互動</strong> 在項目中。不必在每次提示時重複約定，只需寫一次，Copilot 就會遵循它。</p>

<pre><code class="language-text">Không có instructions:
  Prompt: "Create a function to validate email"
  → AI dùng style riêng, có thể khác conventions của bạn

Có instructions:
  Prompt: "Create a function to validate email"
  → AI tự động tuân theo: TypeScript strict, Zod validation,
    custom error class, JSDoc comments, đặt tên theo camelCase
</code></pre>

<h2 id="2-cac-loai-instructions"><strong>2. 自訂指令的類型</strong></h2>

<h3>2.1.專案級： <code>.github/copilot-instructions.md</code></h3>
<p>申請 <strong>整個專案</strong>，透過 Git 與整個團隊分享：</p>

<pre><code class="language-markdown"># Project Coding Guidelines

## Tech Stack
- Next.js 15 with App Router
- TypeScript 5.x (strict mode)
- Prisma ORM with PostgreSQL
- NextAuth v5 for authentication
- Zod for validation
- TailwindCSS for styling

## Code Style
- Use functional components with arrow functions
- Prefer `const` over `let`, never use `var`
- Use TypeScript strict mode, no `any` type
- Use named exports, not default exports
- Error handling with custom AppError class

## Naming Conventions
- Files: kebab-case (user-service.ts)
- Components: PascalCase (UserProfile.tsx)
- Functions/variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Database tables: snake_case
- API routes: kebab-case (/api/user-profiles)

## Testing
- Use Vitest for unit tests
- Test files alongside source: `*.test.ts`
- Use describe/it blocks with clear descriptions
- Mock external dependencies, not internal modules

## API Conventions
- RESTful endpoints with proper HTTP methods
- Response format: { data, error, meta }
- Pagination: cursor-based with `nextCursor`
- Error responses: { error: { code, message, details } }

## Git
- Conventional commits: feat|fix|docs|refactor|test(scope): message
- Branch names: feature/xxx, fix/xxx, docs/xxx
</code></pre>

<h3>2.2.文件類型特定： <code>.說明.md</code></h3>
<p>申請 <strong>特定文件類型</strong> 基於 <code>適用於</code> 圖案：</p>

<pre><code class="language-markdown">&lt;!-- .github/instructions/react-components.instructions.md --&gt;
---
applyTo: "src/components/**/*.tsx"
---
# React Component Guidelines

- Use arrow function components
- Props interface named `{ComponentName}Props`
- Destructure props in function parameter
- Use `cn()` utility for conditional classNames
- Memoize with React.memo only when necessary
- Extract hooks logic to custom hooks in src/hooks/
</code></pre>

<pre><code class="language-markdown">&lt;!-- .github/instructions/api-routes.instructions.md --&gt;
---
applyTo: "src/app/api/**/*.ts"
---
# API Route Guidelines

- Always validate request body with Zod
- Use try-catch with AppError for error handling
- Return proper HTTP status codes
- Include rate limiting middleware
- Log all requests with structured logging
</code></pre>

<h3>2.3.用戶級指令</h3>
<p>申請 <strong>每個項目</strong> 在您的電腦上（VS Code 設定）：</p>

<pre><code class="language-json">{
  "github.copilot.chat.codeGeneration.instructions": [
    { "text": "Always use TypeScript, never plain JavaScript" },
    { "text": "Prefer functional programming patterns" },
    { "text": "Include error handling in every function" }
  ]
}
</code></pre>

<h2 id="3-dung-init"><strong>3.使用/init自動建立指令</strong></h2>

<p>不要從頭開始編寫，而是運行 <code>/初始化</code> 在聊天視圖中：</p>

<ol>
<li>Copilot 掃描整個程式碼庫</li>
<li>檢測模式、約定、技術堆疊</li>
<li>創建 <code>.github/copilot-instructions.md</code> 基於當前代碼</li>
<li>你回顧並調整</li>
</ol>

<pre><code class="language-text">// Trong Chat view:
/init

// Copilot output:
"I've analyzed your codebase and created .github/copilot-instructions.md
with the following conventions detected:
- Next.js 15 App Router with TypeScript
- Prisma ORM patterns...
- Testing with Vitest...
Please review and adjust as needed."
</code></pre>

<h2 id="4-cau-truc-instructions-hieu-qua"><strong>4. 有效的結構指令</strong></h2>

<h3>✅ 做：</h3>
<ul>
<li><strong>簡短而具體</strong>：「使用 Zod 進行驗證」比「確保正確驗證」更好</li>
<li><strong>可操作的規則</strong>：AI可以立即跟隨</li>
<li><strong>參考文件</strong>：“遵循 src/services/UserService.ts 中的模式”</li>
<li><strong>按部分劃分</strong>：樣式、測試、API、Git</li>
</ul>

<h3>❌ 不要：</h3>
<ul>
<li><strong>太長</strong>: > 2000 字浪費了上下文窗口</li>
<li><strong>太一般了</strong>：「編寫乾淨的程式碼」——人工智慧不知道「乾淨」在你的上下文中意味著什麼</li>
<li><strong>自相矛盾</strong>：“使用類別”+“使用函數式程式設計”</li>
<li><strong>過時的</strong>: 指令與目前程式碼不匹配</li>
</ul>

<h2 id="5-instructions-cho-team"><strong>5. 團隊須知</strong></h2>

<p>當作為一個團隊工作時，承諾 <code>.github/copilot-instructions.md</code> 轉到倉庫：</p>

<pre><code class="language-text">project/
├── .github/
│   ├── copilot-instructions.md      ← Main instructions
│   ├── instructions/
│   │   ├── react.instructions.md    ← React-specific
│   │   ├── api.instructions.md      ← API-specific
│   │   └── testing.instructions.md  ← Testing-specific
│   ├── prompts/
│   │   ├── new-feature.prompt.md    ← Prompt templates
│   │   └── code-review.prompt.md
│   └── agents/
│       └── Reviewer.agent.md        ← Custom agents
</code></pre>

<p>當每個成員使用Copilot時， <strong>所有人都收到相同的指示</strong> → 程式碼更加一致。</p>

<h2 id="6-thuc-hanh"><strong>6.練習練習</strong></h2>

<ol>
<li>運行 <code>/初始化</code> 在目前專案中</li>
<li>查看產生的說明文件</li>
<li>附加：命名約定、錯誤處理策略、測試方法</li>
<li>創建一個 <code>.說明.md</code> 對於特定文件類型（元件或 API）</li>
<li>測試：提示建立程式碼→查看AI是否遵循指令</li>
</ol>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<table>
<thead>
<tr>
<th>類型</th>
<th>文件</th>
<th>適用範圍</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>專案級</strong></td>
<td><code>.github/copilot-instructions.md</code></td>
<td>整個項目，透過 Git 分享</td>
</tr>
<tr>
<td><strong>文件類型</strong></td>
<td><code>.github/說明/*.instructions.md</code></td>
<td>特定檔案模式 (applyTo)</td>
</tr>
<tr>
<td><strong>使用者級</strong></td>
<td>VS 代碼設定</td>
<td>設備上的每個項目</td>
</tr>
</tbody>
</table>

<p>自訂指令是 <strong>一次性投資</strong> 幫助後續的每個提示給出更好的結果。下一首歌曲將是翻唱歌曲 <strong>客製化代理和代理技能</strong> — 為每項任務創建專門的人工智慧。</p>
