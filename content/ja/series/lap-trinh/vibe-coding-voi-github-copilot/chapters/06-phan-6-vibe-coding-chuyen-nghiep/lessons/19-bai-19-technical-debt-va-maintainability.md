---
id: 019f1c30-a603-7001-c001-v1b3c0d10603
title: 'レッスン 19: 技術的負債と保守性'
slug: bai-19-technical-debt-va-maintainability
description: >-
  Vibe コーディングを使用する際の技術的負債を管理します。コード チャーンに関する GitClear
  データ。リファクタリング戦略。デッドコード検出。ドキュメントの生成。アーキテクチャ上の決定。長期的なメンテナンス性。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 19
section_title: 'パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7836" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7836)"/>

  <!-- Decorations -->
  <g>
    <circle cx="891" cy="283" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="682" cy="194" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="973" cy="105" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="764" cy="276" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="1055" cy="187" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="93" x2="1100" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="123" x2="1050" y2="193" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.2487113059643,179 1017.2487113059643,207 993,221 968.7512886940357,207 968.7512886940357,179 993,165" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 プログラミング — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: 技術的負債と保守性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: プロフェッショナルな Vibe コーディング — 品質、セキュリティ、プロダクション</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vibe-coding-va-tech-debt"><strong>1. Vibe コーディングと技術的負債</strong></h2>

<p>Vibe コーディングを使用するとコードの作成が高速化されますが、注意しないと <strong>技術的負債</strong> これまでよりも速く。</p>

<h3>GitClear からのデータ (2025):</h3>
<table>
<thead>
<tr>
<th>メトリック</th>
<th>AI以前（2022年）</th>
<th>次のAI（2025年）</th>
<th>変更</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>コードチャーン</strong></td>
<td>3.3%</td>
<td>7.1%</td>
<td>+115%</td>
</tr>
<tr>
<td><strong>追加された行数/開発数/月</strong></td>
<td>1,100</td>
<td>1,800</td>
<td>+64%</td>
</tr>
<tr>
<td><strong>削除された行数/開発者/月</strong></td>
<td>200</td>
<td>550</td>
<td>+175%</td>
</tr>
<tr>
<td><strong>コードを移動/コピーしました</strong></td>
<td>5%</td>
<td>11%</td>
<td>+120%</td>
</tr>
</tbody>
</table>

<p><strong>コードチャーン</strong> = コードを書き留めてから 2 週間以内に編集または削除してください。倍増の数字は次のことを示しています <strong>AIは最初から間違ったコードを作成しました</strong>。</p>

<h2 id="2-nguyen-nhan"><strong>2. Vibeコーディングによる技術的負債の原因</strong></h2>

<h3>2.1.重複 — 重複したコード</h3>
<p>AI は以下のコードを再利用する代わりに新しいコードを生成します。</p>
<pre><code class="language-typescript">// AI tạo helper function mới
function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN');
}

// Mặc dù project đã có:
// src/utils/date.ts → formatDate()
</code></pre>

<h3>2.2.不一致 — 不一致</h3>
<pre><code class="language-typescript">// File A: AI dùng async/await
const data = await fetchUsers();

// File B: AI dùng .then()
fetchUsers().then(data => { ... });

// File C: AI dùng callback
fetchUsers((err, data) => { ... });
</code></pre>

<h3>2.3.過度の抽象化 - 複雑化</h3>
<pre><code class="language-typescript">// AI hay tạo Factory + Strategy + Builder cho task đơn giản:
class TaskBuilderFactory {
  createBuilder(type: string): TaskBuilder {
    // 50 lines of over-engineering
  }
}

// Thực tế chỉ cần:
function createTask(data: CreateTaskInput): Task {
  return prisma.task.create({ data });
}
</code></pre>

<h2 id="3-phat-hien-tech-debt"><strong>3. 技術的負債の検出</strong></h2>

<h3>3.1.デッドコード検出</h3>
<pre><code class="language-text">// Dùng knip để tìm dead code:
npx knip

// Output:
Unused files: src/utils/old-helper.ts
Unused exports: TaskBuilderFactory (src/builders/task.ts)
Unused dependencies: moment, lodash
</code></pre>

<h3>3.2.重複検出</h3>
<pre><code class="language-text">// Dùng jscpd:
npx jscpd src/

// Output:
Found 12 clones across 8 files
Total duplicated lines: 156 (8.3% of total)
</code></pre>

<h3>3.3.複雑さの分析</h3>
<pre><code class="language-text">// Dùng Copilot để phân tích:
@workspace Analyze cyclomatic complexity of all functions.
List functions with complexity > 10 and suggest refactoring.
</code></pre>

<h2 id="4-refactoring-voi-ai"><strong>4. AIによるリファクタリング</strong></h2>

<h3>4.1.重複を抽出する</h3>
<pre><code class="language-text">// Prompt:
I have similar date formatting logic in 5 files.
Extract into a shared utility module.
Show me which files to update and what to extract.
</code></pre>

<h3>4.2.複雑な機能を簡素化する</h3>
<pre><code class="language-text">// Prompt:
This function has 15 if-else branches.
Refactor using:
- Strategy pattern for different task types
- Early returns to reduce nesting
- Extract validation into separate function
Keep the same behavior, add tests to verify.
</code></pre>

<h3>4.3.パターンの標準化</h3>
<pre><code class="language-text">// Prompt:
Our codebase has inconsistent error handling:
- Some files use try/catch
- Some use .catch()
- Some don't handle errors at all

Standardize all API calls to use async/await with
a shared error handler middleware. Show me the changes
needed file by file.
</code></pre>

<h2 id="5-documentation"><strong>5. AIによるドキュメント生成</strong></h2>

<pre><code class="language-text">// Prompt cho API documentation:
Generate OpenAPI 3.0 spec for all endpoints in src/routes/.
Include request/response schemas, auth requirements,
and example values.

// Prompt cho code documentation:
Add JSDoc comments to all exported functions in src/services/.
Include parameter descriptions, return types, and usage examples.
Explain the business logic, not just the code.
</code></pre>

<h3>アーキテクチャ決定記録 (ADR)</h3>
<pre><code class="language-text">// Prompt:
Create an ADR for our decision to use Prisma ORM with PostgreSQL.
Include:
- Context: why we needed an ORM
- Options considered: Prisma, TypeORM, Knex, Drizzle
- Decision and rationale
- Consequences and trade-offs
Follow the format in docs/adr/template.md
</code></pre>

<h2 id="6-prevention"><strong>6. 技術的負債の防止</strong></h2>

<h3>6.1.一貫性を保つためのカスタム指示</h3>
<pre><code class="language-markdown"><!-- .github/copilot-instructions.md -->
## Code Consistency Rules

- Use async/await for all asynchronous operations
- Import from @/utils for shared utilities
- Follow barrel export pattern (index.ts)
- Error handling: use AppError class with status codes
- Date formatting: use dayjs, never native Date methods
- API responses: use { data, error, meta } format
- Check existing utilities before creating new ones
</code></pre>

<h3>6.2.建築用ガードレール</h3>
<pre><code class="language-text">// eslint-plugin-boundaries — enforce architecture:
{
  "rules": {
    "boundaries/element-types": [2, {
      "default": "disallow",
      "rules": [
        // Controllers can import services, not other controllers
        { "from": "controllers", "allow": ["services", "types"] },
        // Services can import repositories, not controllers
        { "from": "services", "allow": ["repositories", "types"] },
      ]
    }]
  }
}
</code></pre>

<h3>6.3.定期的なデットスプリント</h3>
<pre><code class="language-text">// Dùng AI để plan refactoring sprint:
@workspace Analyze the codebase and identify:
1. Top 5 files with highest complexity
2. Most duplicated code patterns
3. Unused dependencies and dead exports
4. Files that violate our architecture boundaries
Prioritize by impact and create a refactoring plan.
</code></pre>

<h2 id="7-metrics-theo-doi"><strong>7. 技術的負債を追跡する指標</strong></h2>

<table>
<thead>
<tr>
<th>メトリック</th>
<th>ツール</th>
<th>ターゲット</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>コードチャーン</strong></td>
<td>GitClear、git ログ分析</td>
<td>2週間で5%未満</td>
</tr>
<tr>
<td><strong>重複</strong></td>
<td>jscpd、SonarQube</td>
<td>コードベースの合計が 3% 未満</td>
</tr>
<tr>
<td><strong>デッドコード</strong></td>
<td>クニップ、TSプルーン</td>
<td>0 未使用のエクスポート</td>
</tr>
<tr>
<td><strong>複雑さ</strong></td>
<td>ESLint の複雑さのルール</td>
<td>機能ごとに最大 15 個</td>
</tr>
<tr>
<td><strong>依存関係の鮮度</strong></td>
<td>npm が古い、改修する</td>
<td>後ろにメジャーはいない</td>
</tr>
<tr>
<td><strong>テストカバレッジ</strong></td>
<td>冗談の報道</td>
<td>全体で 80% 以上</td>
</tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<p><strong>黄金律</strong>: できるときは Vibe コーディングが最適です <strong>読解力と維持力</strong> 生成された AI コードの各行。 AI が書くコードを理解していなければ、それは技術的負債になります。</p>

<table>
<thead>
<tr>
<th>戦略</th>
<th>ツール</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>予防</strong></td>
<td>カスタム命令、アーキテクチャルール</td>
</tr>
<tr>
<td><strong>検出</strong></td>
<td>knip、jscpd、SonarQube、AI レビュー</td>
</tr>
<tr>
<td><strong>解像度</strong></td>
<td>AI 支援リファクタリング、デット スプリント</td>
</tr>
<tr>
<td><strong>モニタリング</strong></td>
<td>メトリクス ダッシュボード、CI/CD ゲート</td>
</tr>
</tbody>
</table>

<p>最後の投稿: <strong>チームとプロダクションでのバイブコーディング</strong> — 企業での導入、CI/CD、コラボレーション、Vibe コーディングの将来。</p>
