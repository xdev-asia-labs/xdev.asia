---
id: 019f1c30-a401-7001-c001-v1b3c0d10401
title: 'Bài 11: Custom Instructions — Dạy AI theo coding style của bạn'
slug: bai-11-custom-instructions-day-ai-theo-coding-style-cua-ban
description: >-
  File .github/copilot-instructions.md, cấu trúc instructions hiệu quả.
  Project-level vs user-level instructions. File-type specific instructions (.instructions.md).
  /init command để tự động tạo instructions. Best practices cho team.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Customize & Extend Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Lập trình — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Custom Instructions — Dạy AI theo</tspan>
      <tspan x="60" dy="42">coding style của bạn</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Customize &amp; Extend Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-custom-instructions-la-gi"><strong>1. Custom Instructions là gì?</strong></h2>

<p>Custom Instructions là các <strong>quy tắc tĩnh</strong> mà bạn viết để Copilot tự động áp dụng cho <strong>mọi tương tác</strong> trong project. Thay vì phải nhắc lại conventions mỗi lần prompt, bạn viết một lần và Copilot tuân theo.</p>

<pre><code class="language-text">Không có instructions:
  Prompt: "Create a function to validate email"
  → AI dùng style riêng, có thể khác conventions của bạn

Có instructions:
  Prompt: "Create a function to validate email"
  → AI tự động tuân theo: TypeScript strict, Zod validation,
    custom error class, JSDoc comments, đặt tên theo camelCase
</code></pre>

<h2 id="2-cac-loai-instructions"><strong>2. Các loại Custom Instructions</strong></h2>

<h3>2.1. Project-level: <code>.github/copilot-instructions.md</code></h3>
<p>Áp dụng cho <strong>toàn bộ project</strong>, chia sẻ qua Git cho cả team:</p>

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

<h3>2.2. File-type specific: <code>.instructions.md</code></h3>
<p>Áp dụng cho <strong>file types cụ thể</strong> dựa trên <code>applyTo</code> pattern:</p>

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

<h3>2.3. User-level instructions</h3>
<p>Áp dụng cho <strong>mọi project</strong> trên máy bạn (VS Code Settings):</p>

<pre><code class="language-json">{
  "github.copilot.chat.codeGeneration.instructions": [
    { "text": "Always use TypeScript, never plain JavaScript" },
    { "text": "Prefer functional programming patterns" },
    { "text": "Include error handling in every function" }
  ]
}
</code></pre>

<h2 id="3-dung-init"><strong>3. Dùng /init để tự động tạo Instructions</strong></h2>

<p>Thay vì viết từ đầu, chạy <code>/init</code> trong Chat view:</p>

<ol>
<li>Copilot scan toàn bộ codebase</li>
<li>Phát hiện patterns, conventions, tech stack</li>
<li>Tạo <code>.github/copilot-instructions.md</code> dựa trên code hiện tại</li>
<li>Bạn review và điều chỉnh</li>
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

<h2 id="4-cau-truc-instructions-hieu-qua"><strong>4. Cấu trúc Instructions hiệu quả</strong></h2>

<h3>✅ DO:</h3>
<ul>
<li><strong>Ngắn gọn, cụ thể</strong>: "Use Zod for validation" tốt hơn "Make sure to validate properly"</li>
<li><strong>Actionable rules</strong>: AI có thể follow ngay</li>
<li><strong>Reference files</strong>: "Follow pattern in src/services/UserService.ts"</li>
<li><strong>Chia theo section</strong>: Style, Testing, API, Git</li>
</ul>

<h3>❌ DON'T:</h3>
<ul>
<li><strong>Quá dài</strong>: > 2000 words làm tốn context window</li>
<li><strong>Quá chung chung</strong>: "Write clean code" — AI không biết "clean" nghĩa gì trong context bạn</li>
<li><strong>Contradictory</strong>: "Use classes" + "Use functional programming"</li>
<li><strong>Outdated</strong>: instructions không match code hiện tại</li>
</ul>

<h2 id="5-instructions-cho-team"><strong>5. Instructions cho Team</strong></h2>

<p>Khi làm team, commit <code>.github/copilot-instructions.md</code> vào repo:</p>

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

<p>Khi mọi thành viên dùng Copilot, <strong>tất cả nhận cùng instructions</strong> → code nhất quán hơn.</p>

<h2 id="6-thuc-hanh"><strong>6. Bài tập thực hành</strong></h2>

<ol>
<li>Chạy <code>/init</code> trong project hiện tại</li>
<li>Review file instructions được tạo</li>
<li>Bổ sung: naming conventions, error handling strategy, testing approach</li>
<li>Tạo một <code>.instructions.md</code> cho file-type cụ thể (components hoặc API)</li>
<li>Test: prompt tạo code → xem AI có follow instructions không</li>
</ol>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Loại</th>
<th>File</th>
<th>Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Project-level</strong></td>
<td><code>.github/copilot-instructions.md</code></td>
<td>Toàn project, shared qua Git</td>
</tr>
<tr>
<td><strong>File-type</strong></td>
<td><code>.github/instructions/*.instructions.md</code></td>
<td>Specific file patterns (applyTo)</td>
</tr>
<tr>
<td><strong>User-level</strong></td>
<td>VS Code Settings</td>
<td>Mọi project trên máy</td>
</tr>
</tbody>
</table>

<p>Custom Instructions là <strong>đầu tư một lần</strong> giúp mọi prompt sau đó cho kết quả tốt hơn. Bài tiếp theo sẽ cover <strong>Custom Agents & Agent Skills</strong> — tạo AI chuyên biệt cho từng task.</p>
