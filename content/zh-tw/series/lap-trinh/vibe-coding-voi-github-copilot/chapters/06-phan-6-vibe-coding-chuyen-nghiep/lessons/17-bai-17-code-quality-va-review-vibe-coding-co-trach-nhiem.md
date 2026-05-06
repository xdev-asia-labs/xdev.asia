---
id: 019f1c30-a601-7001-c001-v1b3c0d10601
title: 第 17 課：程式碼品質與審查 — Vibe Responsible Coding
slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
description: >-
  使用 Vibe Coding 時確保程式碼品質。程式碼審查人工智慧產生的程式碼。語法檢查、格式化、型別安全。指標和 KPI。應避免反模式。 Vibe
  Coding 工作流程中程式碼品質的最佳實務。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 17
section_title: 第 6 部分：專業 Vibe 編碼 — 品質、安全與生產
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6972" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6972)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：程式碼品質與審查 — Vibe</tspan>
      <tspan x="60" dy="42">負責任地編碼</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：專業 Vibe 編碼 — 品質、安全與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-van-de-chat-luong"><strong>1. Vibe Coding 的品質問題</strong></h2>

<p>Andrej Karpathy 在介紹 Vibe Coding 時說： <em>「我只是看東西、說東西、運行東西、複製貼上東西，而且大部分都有效。”</em> 但是 <strong>“大部分有效”</strong> 不足以用於生產代碼。</p>

<p>實際數據（2025-2026）：</p>
<table>
<thead>
<tr>
<th>來源</th>
<th>偵測</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>亞特清除 (2025)</strong></td>
<td>應用人工智慧後「程式碼流失」增加——編寫更多程式碼，然後編輯/刪除</td>
</tr>
<tr>
<td><strong>維拉代碼 (2026)</strong></td>
<td>72% 使用人工智慧產生程式碼的應用程式至少存在 1 個安全漏洞</td>
</tr>
<tr>
<td><strong>碼兔 (2026)</strong></td>
<td>人工智慧程式碼審查可以檢測人類審查人員遺漏的錯誤</td>
</tr>
</tbody>
</table>

<h2 id="2-review-ai-code"><strong>2. 如何檢視人工智慧產生的程式碼</strong></h2>

<h3>2.1. AI 程式碼檢查清單審查</h3>
<ul>
<li>✅ <strong>邏輯正確性</strong>: 代碼能滿足要求嗎？</li>
<li>✅ <strong>邊緣情況</strong>：AI常會漏掉null、empty、邊界情況</li>
<li>✅ <strong>錯誤處理</strong>: 捕獲錯誤是否合適？</li>
<li>✅ <strong>安全性</strong>：輸入驗證、驗證檢查、SQL 注入</li>
<li>✅ <strong>效能</strong>：N+1次查詢，不必要的重新渲染</li>
<li>✅ <strong>命名</strong>：變數、函數有意義嗎？</li>
<li>✅ <strong>重複</strong>：人工智慧經常產生而不是重複使用現有程式碼</li>
</ul>

<h3>2.2.使用Copilot檢視自己的程式碼</h3>
<pre><code class="language-text">// Prompt:
Review this code for:
1. Security vulnerabilities
2. Performance issues
3. Edge cases not handled
4. Code that doesn't follow our project conventions
5. Potential bugs

Be critical and thorough. List every issue found.
</code></pre>

<h3>2.3.反模式在人工智慧程式碼中很常見</h3>

<table>
<thead>
<tr>
<th>反模式</th>
<th>例如</th>
<th>修復</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>神功能</strong></td>
<td>一個 200 行的函數可以完成所有事情</td>
<td>分成更小的功能</td>
</tr>
<tr>
<td><strong>複製貼上程式碼</strong></td>
<td>重複邏輯而不是提取</td>
<td>提取共享實用程式</td>
</tr>
<tr>
<td><strong>硬編碼值</strong></td>
<td>神奇數字、程式碼中的 URL</td>
<td>移至配置/環境</td>
</tr>
<tr>
<td><strong>錯誤處理能力弱</strong></td>
<td>無提示捕獲或一般錯誤</td>
<td>具體錯誤處理</td>
</tr>
<tr>
<td><strong>缺少驗證</strong></td>
<td>完全信任使用者輸入</td>
<td>在邊界處驗證</td>
</tr>
<tr>
<td><strong>過度設計</strong></td>
<td>抽象太早，工廠模式1個案例</td>
<td>YAGNI — 僅在需要時構建</td>
</tr>
</tbody>
</table>

<h2 id="3-automated-quality"><strong>3. 自動化品質門</strong></h2>

<h3>3.1. ESLint + Prettier + Copilot Hooks</h3>
<pre><code class="language-json">// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "github.copilot.chat.hooks": {
    "postSave": [
      {
        "command": "npx eslint --fix ${file}",
        "pattern": "**/*.{ts,tsx}"
      }
    ]
  }
}
</code></pre>

<h3>3.2.預提交掛鉤</h3>
<pre><code class="language-json">// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  }
}
</code></pre>

<h3>3.3. CI/CD 品質檢查</h3>
<pre><code class="language-yaml"># .github/workflows/quality.yml
name: Code Quality
on: [pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx tsc --noEmit          # Type check
      - run: npx eslint .              # Lint
      - run: npm test -- --coverage    # Tests + coverage
      - run: npx knip                  # Dead code detection
</code></pre>

<h2 id="4-type-safety"><strong>4. 類型安全－第一道防線</strong></h2>

<p>TypeScript 嚴格模式捕捉了 AI 創建的許多錯誤：</p>

<pre><code class="language-json">// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
</code></pre>

<pre><code class="language-text">// Prompt mẫu yêu cầu type safety:
Ensure all functions have explicit return types.
Use discriminated unions for API responses.
No 'any' types — use 'unknown' with type guards instead.
</code></pre>

<h2 id="5-test-coverage"><strong>5. 測試覆蓋率策略</strong></h2>

<p>需要AI程式碼 <strong>測試更多</strong>，不少於：</p>

<pre><code class="language-text">// Prompt:
Write tests for the TaskService focusing on:
1. Happy path for each method
2. Edge cases: empty input, null values, max length
3. Authorization: user can only access own projects
4. Concurrent modifications
5. Database constraint violations
</code></pre>

<h3>最低覆蓋目標：</h3>
<table>
<thead>
<tr>
<th>圖層</th>
<th>目標</th>
<th>原因</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>業務邏輯</strong></td>
<td>90%+</td>
<td>核心域需要準確</td>
</tr>
<tr>
<td><strong>API端點</strong></td>
<td>80%+</td>
<td>合約整合測試</td>
</tr>
<tr>
<td><strong>使用者介面組件</strong></td>
<td>70%+</td>
<td>使用者體驗互動測試</td>
</tr>
<tr>
<td><strong>公用事業</strong></td>
<td>95%+</td>
<td>純函數易於測試</td>
</tr>
</tbody>
</table>

<h2 id="6-metrics-va-kpis"><strong>6. Vibe 編碼的指標和 KPI</strong></h2>

<table>
<thead>
<tr>
<th>公制</th>
<th>測量什麼？</th>
<th>目標</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>錄取率</strong></td>
<td>接受人工智慧建議的百分比</td>
<td>30-40%（太高=沒審查）</td>
</tr>
<tr>
<td><strong>程式碼流失</strong></td>
<td>兩週內編輯/刪除的程式碼百分比</td>
<td><25%</td>
</tr>
<tr>
<td><strong>蟲子密度</strong></td>
<td>每 1000 個 LOC 的錯誤</td>
<td>與AI之前相比減少或保持不變</td>
</tr>
<tr>
<td><strong>審核意見</strong></td>
<td>審閱者要求修復 AI 代碼的次數</td>
<td>隨著時間的推移而減少</td>
</tr>
<tr>
<td><strong>PR 合併時間</strong></td>
<td>從 PR 建立到合併的時間</td>
<td>減少但不是因為跳過審核</td>
</tr>
</tbody>
</table>

<h2 id="7-best-practices"><strong>7. 最佳實務總結</strong></h2>

<ol>
<li><strong>不要盲目接受</strong>：讀取每個AI生成的行</li>
<li><strong>請AI解釋一下</strong>：“解釋一下你為什麼選擇這種方法”</li>
<li><strong>盡可能先測試</strong>：先寫測試，用AI來實現</li>
<li><strong>增量生成</strong>：產生每個小部分，在繼續之前檢查一下</li>
<li><strong>客製說明</strong>：透過強制執行編碼標準 <code>副駕駛指令.md</code></li>
<li><strong>自動門</strong>：CI/CD 捕捉人類審閱者錯過的錯誤</li>
<li><strong>衡量品質</strong>：追蹤指標以了解人工智慧是有幫助還是有害</li>
</ol>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<p><strong>負責任地進行 Vibe 編碼</strong> =利用人工智慧的速度+維持人體工學的品質。</p>

<p>產生的AI程式碼需要審核 <strong>更仔細地</strong> 人類編寫的程式碼，因為：</p>
<ul>
<li>人工智慧不理解業務背景</li>
<li>人工智慧優先考慮「看起來正確」的程式碼而不是「運行正確」的程式碼</li>
<li>AI不知道專案中目前有哪些程式碼</li>
</ul>

<p>下一篇： <strong>Vibe 編碼的安全性</strong> — 常見的安全漏洞以及如何避免它們。</p>
