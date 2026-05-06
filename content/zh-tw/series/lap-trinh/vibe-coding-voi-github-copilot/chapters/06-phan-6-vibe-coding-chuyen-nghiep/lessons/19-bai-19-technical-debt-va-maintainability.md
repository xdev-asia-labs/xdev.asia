---
id: 019f1c30-a603-7001-c001-v1b3c0d10603
title: 第 19 課：技術債與可維護性
slug: bai-19-technical-debt-va-maintainability
description: 使用 Vibe Coding 時管理技術債。 GitClear 有關程式碼變更的資料。重構策略。死代碼檢測。文檔生成。架構決策。長期可維護性。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 19
section_title: 第 6 部分：專業 Vibe 編碼 — 品質、安全與生產
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：技術債與可維護性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：專業 Vibe 編碼 — 品質、安全與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-vibe-coding-va-tech-debt"><strong>1. Vibe 編碼和技術債務</strong></h2>

<p>Vibe Coding 可以加快程式碼編寫速度，但如果不小心就會創建 <strong>技術債</strong> 比以往任何時候都快。</p>

<h3>來自 GitClear 的數據（2025）：</h3>
<table>
<thead>
<tr>
<th>公制</th>
<th>人工智慧出現之前（2022）</th>
<th>下一個人工智慧 (2025)</th>
<th>改變</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>程式碼流失</strong></td>
<td>3.3%</td>
<td>7.1%</td>
<td>+115%</td>
</tr>
<tr>
<td><strong>新增的行數/開發/月</strong></td>
<td>1,100</td>
<td>1,800</td>
<td>+64%</td>
</tr>
<tr>
<td><strong>刪除行數/dev/月</strong></td>
<td>200</td>
<td>550</td>
<td>+175%</td>
</tr>
<tr>
<td><strong>移動/複製的程式碼</strong></td>
<td>5%</td>
<td>11%</td>
<td>+120%</td>
</tr>
</tbody>
</table>

<p><strong>程式碼流失</strong> = 寫下程式碼，然後在 2 週內編輯或刪除它。翻倍的數字顯示 <strong>AI從一開始就創建了錯誤的程式碼</strong>。</p>

<h2 id="2-nguyen-nhan"><strong>2. Vibe Coding 技術債的原因</strong></h2>

<h3>2.1.重複－重複的程式碼</h3>
<p>AI 產生新程式碼而不是重複使用：</p>
<pre><code class="language-typescript">// AI tạo helper function mới
function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN');
}

// Mặc dù project đã có:
// src/utils/date.ts → formatDate()
</code></pre>

<h3>2.2.不一致——不一致</h3>
<pre><code class="language-typescript">// File A: AI dùng async/await
const data = await fetchUsers();

// File B: AI dùng .then()
fetchUsers().then(data => { ... });

// File C: AI dùng callback
fetchUsers((err, data) => { ... });
</code></pre>

<h3>2.3.過度抽象化－複雜化</h3>
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

<h2 id="3-phat-hien-tech-debt"><strong>3. 檢測技術債</strong></h2>

<h3>3.1.死代碼檢測</h3>
<pre><code class="language-text">// Dùng knip để tìm dead code:
npx knip

// Output:
Unused files: src/utils/old-helper.ts
Unused exports: TaskBuilderFactory (src/builders/task.ts)
Unused dependencies: moment, lodash
</code></pre>

<h3>3.2.重複檢測</h3>
<pre><code class="language-text">// Dùng jscpd:
npx jscpd src/

// Output:
Found 12 clones across 8 files
Total duplicated lines: 156 (8.3% of total)
</code></pre>

<h3>3.3.複雜性分析</h3>
<pre><code class="language-text">// Dùng Copilot để phân tích:
@workspace Analyze cyclomatic complexity of all functions.
List functions with complexity > 10 and suggest refactoring.
</code></pre>

<h2 id="4-refactoring-voi-ai"><strong>4. 人工智慧重構</strong></h2>

<h3>4.1.提取重複項</h3>
<pre><code class="language-text">// Prompt:
I have similar date formatting logic in 5 files.
Extract into a shared utility module.
Show me which files to update and what to extract.
</code></pre>

<h3>4.2.簡化複雜功能</h3>
<pre><code class="language-text">// Prompt:
This function has 15 if-else branches.
Refactor using:
- Strategy pattern for different task types
- Early returns to reduce nesting
- Extract validation into separate function
Keep the same behavior, add tests to verify.
</code></pre>

<h3>4.3.標準化模式</h3>
<pre><code class="language-text">// Prompt:
Our codebase has inconsistent error handling:
- Some files use try/catch
- Some use .catch()
- Some don't handle errors at all

Standardize all API calls to use async/await with
a shared error handler middleware. Show me the changes
needed file by file.
</code></pre>

<h2 id="5-documentation"><strong>5. 利用人工智慧產生文檔</strong></h2>

<pre><code class="language-text">// Prompt cho API documentation:
Generate OpenAPI 3.0 spec for all endpoints in src/routes/.
Include request/response schemas, auth requirements,
and example values.

// Prompt cho code documentation:
Add JSDoc comments to all exported functions in src/services/.
Include parameter descriptions, return types, and usage examples.
Explain the business logic, not just the code.
</code></pre>

<h3>架構決策記錄 (ADR)</h3>
<pre><code class="language-text">// Prompt:
Create an ADR for our decision to use Prisma ORM with PostgreSQL.
Include:
- Context: why we needed an ORM
- Options considered: Prisma, TypeORM, Knex, Drizzle
- Decision and rationale
- Consequences and trade-offs
Follow the format in docs/adr/template.md
</code></pre>

<h2 id="6-prevention"><strong>6. 防止技術債</strong></h2>

<h3>6.1.定制說明以確保一致性</h3>
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

<h3>6.2.建築護欄</h3>
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

<h3>6.3.定期債務衝刺</h3>
<pre><code class="language-text">// Dùng AI để plan refactoring sprint:
@workspace Analyze the codebase and identify:
1. Top 5 files with highest complexity
2. Most duplicated code patterns
3. Unused dependencies and dead exports
4. Files that violate our architecture boundaries
Prioritize by impact and create a refactoring plan.
</code></pre>

<h2 id="7-metrics-theo-doi"><strong>7. 指標追蹤技術債務</strong></h2>

<table>
<thead>
<tr>
<th>公制</th>
<th>工具</th>
<th>目標</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>程式碼流失</strong></td>
<td>GitClear，git日誌分析</td>
<td>2週內<5%</td>
</tr>
<tr>
<td><strong>重複</strong></td>
<td>jscpd、SonarQube</td>
<td>< 總程式碼庫的 3%</td>
</tr>
<tr>
<td><strong>死程式碼</strong></td>
<td>克尼普、ts-修剪</td>
<td>0 未使用的出口</td>
</tr>
<tr>
<td><strong>複雜性</strong></td>
<td>ESLint 複雜性規則</td>
<td>每個功能最多 15 個</td>
</tr>
<tr>
<td><strong>依賴新鮮度</strong></td>
<td>npm 過時，更新</td>
<td>沒有專業落後</td>
</tr>
<tr>
<td><strong>測試覆蓋率</strong></td>
<td>笑話報道</td>
<td>整體>80%</td>
</tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<p><strong>黃金法則</strong>：如果可以的話，Vibe Coding 是很好的選擇 <strong>閱讀理解與維護</strong> 產生的每一行人工智慧程式碼。如果你不理解人工智慧寫的程式碼，那就是技術債。</p>

<table>
<thead>
<tr>
<th>策略</th>
<th>工具</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>預防</strong></td>
<td>自訂指令、架構規則</td>
</tr>
<tr>
<td><strong>偵測</strong></td>
<td>knip、jscpd、SonarQube、AI 評論</td>
</tr>
<tr>
<td><strong>解析度</strong></td>
<td>人工智能辅助重构、债务冲刺</td>
</tr>
<tr>
<td><strong>監控</strong></td>
<td>指标仪表板、CI/CD 门</td>
</tr>
</tbody>
</table>

<p>最後發表： <strong>团队和生产中的 Vibe 编码</strong> — 企業採用、CI/CD、協作以及 Vibe Coding 的未來。</p>
