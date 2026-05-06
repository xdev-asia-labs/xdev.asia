---
id: 019f1c30-a401-7001-c001-v1b3c0d10401
title: 'レッスン 11: カスタム命令 — コーディング スタイルに従って AI を教える'
slug: bai-11-custom-instructions-day-ai-theo-coding-style-cua-ban
description: >-
  ファイル
  .github/copilot-instructions.md、効率的な命令構造。プロジェクトレベルの指示とユーザーレベルの指示。ファイルタイプ固有の指示
  (.instructions.md)。 /init コマンドを使用して命令を自動的に生成します。チームのためのベストプラクティス。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: コパイロットのカスタマイズと拡張'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 プログラミング — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: カスタム命令 — AI に従うように教える</tspan>
      <tspan x="60" dy="42">あなたのコーディングスタイル</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: コパイロットのカスタマイズと拡張</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-custom-instructions-la-gi"><strong>1. カスタム命令とは何ですか?</strong></h2>

<p>カスタム手順は、 <strong>静的ルール</strong> Copilot が自動的に適用するように作成したもの <strong>あらゆるやりとり</strong> プロジェクトで。プロンプトを表示するたびに規則を繰り返す必要はなく、一度記述すれば、Copilot はその規則に従います。</p>

<pre><code class="language-text">Không có instructions:
  Prompt: "Create a function to validate email"
  → AI dùng style riêng, có thể khác conventions của bạn

Có instructions:
  Prompt: "Create a function to validate email"
  → AI tự động tuân theo: TypeScript strict, Zod validation,
    custom error class, JSDoc comments, đặt tên theo camelCase
</code></pre>

<h2 id="2-cac-loai-instructions"><strong>2. カスタム命令の種類</strong></h2>

<h3>2.1.プロジェクトレベル: <code>.github/copilot-instructions.md</code></h3>
<p>申し込む <strong>プロジェクト全体</strong>、Git 経由でチーム全体と共有されます。</p>

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

<h3>2.2.ファイルタイプ固有: <code>.instructions.md</code></h3>
<p>申し込む <strong>特定のファイルタイプ</strong> に基づいて <code>申し込む</code> パターン:</p>

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

<h3>2.3.ユーザーレベルの指示</h3>
<p>申し込む <strong>すべてのプロジェクト</strong> コンピューター上 (VS Code 設定):</p>

<pre><code class="language-json">{
  "github.copilot.chat.codeGeneration.instructions": [
    { "text": "Always use TypeScript, never plain JavaScript" },
    { "text": "Prefer functional programming patterns" },
    { "text": "Include error handling in every function" }
  ]
}
</code></pre>

<h2 id="3-dung-init"><strong>3. /init を使用して命令を自動的に作成します</strong></h2>

<p>最初から書くのではなく、実行してください。 <code>/初期化</code> チャットビュー:</p>

<ol>
<li>Copilot はコードベース全体をスキャンします</li>
<li>パターン、慣例、技術スタックを検出する</li>
<li>作成 <code>.github/copilot-instructions.md</code> 現在のコードに基づいて</li>
<li>見直して調整するのは</li>
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

<h2 id="4-cau-truc-instructions-hieu-qua"><strong>4. 指示を効果的に構成する</strong></h2>

<h3>✅ やるべきこと:</h3>
<ul>
<li><strong>短くて具体的</strong>: 「検証に Zod を使用する」は、「適切に検証することを確認する」よりも優れています。</li>
<li><strong>実用的なルール</strong>：AIがすぐにフォローできる</li>
<li><strong>参照ファイル</strong>: "src/services/UserService.ts のパターンに従います"</li>
<li><strong>セクションごとに分ける</strong>: スタイル、テスト、API、Git</li>
</ul>

<h3>❌ してはいけないこと:</h3>
<ul>
<li><strong>長すぎます</strong>: > 2000 ワードはコンテキスト ウィンドウを無駄にします</li>
<li><strong>一般的すぎる</strong>: 「クリーンなコードを書く」 — AI はコンテキスト内で「クリーン」が何を意味するのかを知りません</li>
<li><strong>矛盾している</strong>: 「クラスを使用する」+「関数型プログラミングを使用する」</li>
<li><strong>時代遅れ</strong>: 命令が現在のコードと一致しません</li>
</ul>

<h2 id="5-instructions-cho-team"><strong>5. チームへの指示</strong></h2>

<p>チームとして働くときはコミットする <code>.github/copilot-instructions.md</code> リポジトリに移動します。</p>

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

<p>メンバー全員が Copilot を使用すると、 <strong>全員が同じ指示を受ける</strong> → より一貫性のあるコード。</p>

<h2 id="6-thuc-hanh"><strong>6. 練習問題</strong></h2>

<ol>
<li>走る <code>/初期化</code> 現在のプロジェクトで</li>
<li>生成された指示ファイルを確認します。</li>
<li>追加: 命名規則、エラー処理戦略、テスト手法</li>
<li>作成する <code>.instructions.md</code> 特定のファイルタイプ (コンポーネントまたは API) 用</li>
<li>テスト: コード作成のプロンプト → AI が指示に従うかどうかを確認</li>
</ol>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>種類</th>
<th>ファイル</th>
<th>範囲</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>プロジェクトレベル</strong></td>
<td><code>.github/copilot-instructions.md</code></td>
<td>プロジェクト全体、Git 経由で共有</td>
</tr>
<tr>
<td><strong>ファイルの種類</strong></td>
<td><code>.github/instructions/*.instructions.md</code></td>
<td>特定のファイル パターン (applyTo)</td>
</tr>
<tr>
<td><strong>ユーザーレベル</strong></td>
<td>VS コードの設定</td>
<td>デバイス上のすべてのプロジェクト</td>
</tr>
</tbody>
</table>

<p>カスタム手順は次のとおりです <strong>1回限りの投資</strong> 後続のすべてのプロンプトにより、より良い結果が得られます。次の曲はカバーになります <strong>カスタムエージェントとエージェントスキル</strong> — タスクごとに特化した AI を作成します。</p>
