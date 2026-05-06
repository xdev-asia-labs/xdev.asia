---
id: 019f1c30-a201-7001-c001-v1b3c0d10201
title: 第5課：代理模式－讓AI為你寫程式碼
slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
description: >-
  什麼是代理，代理如何運作（計劃→執行→驗證），代理循環，聊天視圖（Ctrl+Cmd+I），比較代理與詢問與計劃模式。權限等級：預設、繞過批准、自動駕駛。動手實作：使用
  Agent 建立第一個 Web 應用程式。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 第二部分：代理模式－AI自動編寫程式碼
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-824" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-824)"/>

  <!-- Decorations -->
  <g>
    <circle cx="661" cy="193" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="783" cy="215" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="237" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第5課：代理模式－讓AI自己寫程式碼</tspan>
      <tspan x="60" dy="42">你</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第二部分：代理模式－AI自動編寫程式碼</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-agent-la-gi"><strong>1.什麼是代理人？</strong></h2>

<p>在 GitHub Copilot 中，一 <strong>代理商</strong> 是一位活躍的人工智慧助手 <strong>自主地</strong> 完成一次完整的程式設計任務。與僅建議幾行的內聯建議不同，Agent 能夠：</p>

<ul>
<li>📋 <strong>制定計劃</strong> （將任務分解為步驟）</li>
<li>📝 <strong>建立和編輯多個文件</strong> 同時</li>
<li>💻 <strong>運行終端命令</strong> （安裝套件、建置、測試）</li>
<li>🔄 <strong>自我修正</strong> 遇到錯誤時（自我修正）</li>
<li>🔧 <strong>使用工具</strong> （讀取檔案、搜尋、網路、擴充）</li>
</ul>

<p>這是基礎 <strong>真實氛圍編碼</strong> — 您描述請求，代理執行這一切。</p>

<h2 id="2-agent-loop"><strong>2. 代理循環－代理如何運作</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              AGENT LOOP                          │
├─────────────────────────────────────────────────┤
│                                                  │
│  User Prompt: "Build a REST API for blog posts"  │
│           ↓                                      │
│  ┌─── PLAN ───┐                                  │
│  │ 1. Setup project                              │
│  │ 2. Create models                              │
│  │ 3. Create routes                              │
│  │ 4. Add middleware                             │
│  │ 5. Test                                       │
│  └────────────┘                                  │
│           ↓                                      │
│  ┌─── EXECUTE ──┐                                │
│  │ Create files  │ ←─ Tool: createFile           │
│  │ Write code    │ ←─ Tool: editFile             │
│  │ Run commands  │ ←─ Tool: runInTerminal        │
│  └──────────────┘                                │
│           ↓                                      │
│  ┌─── VERIFY ───┐                                │
│  │ Check errors  │ ←─ Tool: getErrors            │
│  │ Run tests     │ ←─ Tool: runInTerminal        │
│  │ Self-correct  │ → Quay lại EXECUTE nếu fail   │
│  └──────────────┘                                │
│           ↓                                      │
│  ✅ Complete → User review                       │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-ba-built-in-agents"><strong>3. 三個內建代理</strong></h2>

<h3>3.1.代理（預設）</h3>
<p>自主規劃和實施變更、建立檔案、運行命令、使用工具。這是您在 Vibe Coding 中最常使用的代理程式。</p>

<h3>3.2.計劃</h3>
<p>創建一個結構化的實施計劃，但是 <strong>不要寫程式碼</strong>。計劃確定後，交給Agent執行。</p>

<h3>3.3.詢問</h3>
<p>回答有關程式碼、概念、程式碼庫的問題 <strong>不要更改文件</strong>。當您在編碼之前需要理解時使用。</p>

<pre><code class="language-text">Chọn agent trong Chat view:

┌────────────────────────────┐
│  Agent ▼                   │  ← Click dropdown
├────────────────────────────┤
│  ● Agent    (implement)    │
│  ○ Plan     (plan only)    │
│  ○ Ask      (Q&A only)     │
│  ○ Reviewer (custom)       │
└────────────────────────────┘
</code></pre>

<h2 id="4-permission-levels"><strong>4. 權限等級－控制代理權限</strong></h2>

<p>代理需要運行命令並更改檔案 - 您決定自治級別：</p>

<table>
<thead>
<tr>
<th>等級</th>
<th>描述</th>
<th>適合當</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>預設批准</strong></td>
<td>請求確認寫入/運行工具</td>
<td>第一次使用，生產代碼</td>
</tr>
<tr>
<td><strong>繞過批准</strong></td>
<td>自動批准所有工具調用</td>
<td>可信任務，原型</td>
</tr>
<tr>
<td><strong>自動駕駛儀（預覽版）</strong></td>
<td>自動批准+自動回答問題</td>
<td>完全自主的副業項目</td>
</tr>
</tbody>
</table>

<p><strong>⚠️安全說明：</strong> 在 Autopilot 級別，代理可以運行任何命令 - 僅用於本機電腦上的受信任項目。</p>

<h2 id="5-hands-on-xay-dung-web-app"><strong>5. 實作：使用代理模式建立 Web 應用程式</strong></h2>

<h3>第 1 步：開啟聊天視圖</h3>
<p>新聞 <code>Ctrl+Cmd+I</code> (macOS) 或 <code>Ctrl+Alt+I</code> （Windows/Linux）</p>

<h3>第二步：選擇代理模式</h3>
<p>從下拉清單中選擇 <strong>“代理人”</strong></p>

<h3>第三步：寫提示</h3>
<pre><code class="language-text">Create a modern expense tracker web application with:
- Add expenses with amount, category, and date
- View expenses in a table with sorting
- Dashboard with summary charts (total by category)
- Filter expenses by date range and category
- Local storage to persist data
- Modern dark theme UI with smooth animations
- Responsive design for mobile

Use vanilla HTML, CSS, and JavaScript. No frameworks needed.
</code></pre>

<h3>第 4 步：觀察 Agent 工作</h3>
<p>代理人將：</p>
<ol>
<li>分析需求</li>
<li>建立文件結構： <code>索引.html</code>, <code>樣式.css</code>, <code>應用程式.js</code></li>
<li>編寫 HTML 語意結構</li>
<li>編寫具有深色主題和響應式的 CSS</li>
<li>為 CRUD 邏輯、圖表、過濾器編寫 JavaScript</li>
<li>可以運行預覽</li>
</ol>

<h3>第 5 步：審核並接受</h3>
<p>查看每個文件的差異 → 按 <strong>“保留”</strong> 接受或請求更改。</p>

<h3>第 6 步：迭代</h3>
<p>繼續對話以新增功能：</p>
<pre><code class="language-text">Add an export to CSV button and a monthly budget feature with progress bar
</code></pre>

<h2 id="6-agent-session-management"><strong>6. 座席會話管理</strong></h2>

<p>每個任務運行在一個 <strong>會議。會議</strong> 分開：</p>

<ul>
<li><strong>會議列表</strong>：在聊天面板中查看所有會話（活動的、暫停的、已完成的）</li>
<li><strong>多次會議</strong>：針對許多不同的任務並行執行多個會話</li>
<li><strong>恢復會話</strong>：返回舊會話繼續迭代</li>
<li><strong>審查變更</strong>：查看一個會話中所有文件的變化</li>
</ul>

<h2 id="7-tools-agent-su-dung"><strong>7. Agent使用的工具</strong></h2>

<p>代理可以存取內建工具：</p>

<table>
<thead>
<tr>
<th>工具</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>讀</code></td>
<td>讀取工作區中的文件</td>
</tr>
<tr>
<td><code>編輯文件</code></td>
<td>建立/編輯文件</td>
</tr>
<tr>
<td><code>運作終端</code></td>
<td>運行外殼命令</td>
</tr>
<tr>
<td><code>搜尋。搜尋</code></td>
<td>在程式碼庫中搜尋</td>
</tr>
<tr>
<td><code>列表目錄</code></td>
<td>列出目錄中的文件</td>
</tr>
<tr>
<td><code>取得錯誤</code></td>
<td>取得編譯/lint 錯誤</td>
</tr>
<tr>
<td><code>網路</code></td>
<td>搜尋網絡</td>
</tr>
<tr>
<td><code>用法</code></td>
<td>尋找符號參考</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices-agent-mode"><strong>8. 代理模式最佳實踐</strong></h2>

<h3>✅ 應該：</h3>
<ul>
<li><strong>描述清晰詳細</strong>：包括技術堆疊、模式、約束</li>
<li><strong>將大任務分解成小塊</strong>：首先“添加身份驗證”，然後“添加 CRUD”，而不是“構建所有內容”</li>
<li><strong>檢查每個步驟</strong>：閱讀產生的Agent程式碼，特別重要的邏輯</li>
<li><strong>首先使用/init</strong>：建立自訂指令，以便代理程式理解約定</li>
<li><strong>迭代，而不是重做</strong>：繼續會話而不是重新開始</li>
</ul>

<h3>❌ 不應該：</h3>
<ul>
<li>使用 Autopilot 進行生產程式碼</li>
<li>接受全部而不檢查任何文件</li>
<li>提示太模糊：“讓它變得更好”</li>
<li>請代理人在您不知情的情況下安裝軟體包</li>
<li>跳過錯誤訊息 — 讀取並提供給代理</li>
</ul>

<h2 id="9-debugging-voi-agent"><strong>9. 代理模式調試</strong></h2>

<p>該代理對於調試特別強大，因為它可以：</p>
<ol>
<li>閱讀錯誤訊息</li>
<li>跨多個文件追蹤根本原因</li>
<li>應用程式修復</li>
<li>重新運行測試以驗證</li>
</ol>

<pre><code class="language-text">// Prompt ví dụ:
The test in tests/auth.test.ts is failing with "TypeError: Cannot read properties
of undefined (reading 'token')". Find the root cause and fix it.
</code></pre>

<h2 id="10-tong-ket"><strong>10. 總結</strong></h2>

<table>
<thead>
<tr>
<th>概念</th>
<th>重點</th>
</tr>
</thead>
<tbody>
<tr>
<td>代理商</td>
<td>自主AI助理：計劃→執行→驗證</td>
</tr>
<tr>
<td>3個內建代理</td>
<td>代理（實施）、計劃（計劃）、詢問（問答）</td>
</tr>
<tr>
<td>權限等級</td>
<td>預設→旁路→自動駕駛（增加自主權）</td>
</tr>
<tr>
<td>代理循環</td>
<td>重複執行+驗證，直到任務完成</td>
</tr>
<tr>
<td>會議</td>
<td>每個任務 = 1 個會話，可以並行運行</td>
</tr>
<tr>
<td>最佳實踐</td>
<td>明確提示+審查程式碼+迭代</td>
</tr>
</tbody>
</table>

<p>下一篇文章會更深入 <strong>計劃代理</strong> — 在編碼之前規劃技術，讓您更能控制 AI 輸出。</p>
