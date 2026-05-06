---
id: 019f1c30-a102-7001-c001-v1b3c0d10102
title: 第 2 課：在 VS Code 中安裝和設定 GitHub Copilot
slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
description: >-
  註冊 GitHub
  Copilot（免費/專業版/專業版+/企業版）、安裝擴充功能、設定設定、選擇模型（GPT-5.4、Claude、Gemini）、自動模型選擇、鍵盤快速鍵和基本工作流程。
duration_minutes: 45
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：Vibe 編碼平台和 GitHub Copilot
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6782" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6782)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="199" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="225" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：安裝與設定 GitHub Copilot</tspan>
      <tspan x="60" dy="42">在 VS 程式碼中</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Vibe 編碼平台和 GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-cac-goi-github-copilot"><strong>1.GitHub Copilot 軟體包（2026）</strong></h2>

<p>GitHub Copilot 提供了多種適合個人和企業的方案：</p>

<table>
<thead>
<tr>
<th>套餐</th>
<th>價格</th>
<th>主要特點</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>副駕駛 免費</strong></td>
<td>0 美元/月</td>
<td>每月限制內嵌建議和聊天互動。自動選型。</td>
</tr>
<tr>
<td><strong>副駕駛專業版</strong></td>
<td>10 美元/月</td>
<td>無限完成和聊天。很多型號。副駕駛記憶體（預覽）。</td>
</tr>
<tr>
<td><strong>副駕駛專業版+</strong></td>
<td>$39/月</td>
<td>高級型號、副駕駛記憶體、雲端代理、更高的速率限制。</td>
</tr>
<tr>
<td><strong>副駕駛商務</strong></td>
<td>$19/用戶/月</td>
<td>組織政策、內容排除、審核日誌、IP 賠償。</td>
</tr>
<tr>
<td><strong>副駕駛企業</strong></td>
<td>$39/用戶/月</td>
<td>知識庫、微調模型、進階安全性。</td>
</tr>
</tbody>
</table>

<p><strong>特別是對學生：</strong> GitHub 透過此計畫免費提供 Copilot <strong>GitHub 教育</strong> （GitHub 學生開發包）。</p>

<h2 id="2-cai-dat-github-copilot"><strong>2. 在 VS Code 中安裝 GitHub Copilot</strong></h2>

<h3>第1步：安裝VS代碼</h3>
<p>從以下位置下載並安裝 <a href="https://code.visualstudio.com/">code.visualstudio.com</a>。建議使用版本 <strong>穩定</strong> （或 <strong>業內人士</strong> 如果您想體驗最新功能）。</p>

<h3>第 2 步：登入 GitHub Copilot</h3>
<ol>
<li>開啟 VS 代碼</li>
<li>將滑鼠懸停在 <strong>副駕駛圖標</strong> 在狀態列（右下角）</li>
<li>選擇 <strong>“設定副駕駛”</strong></li>
<li>登入您的 GitHub 帳戶</li>
<li>如果您沒有訂閱→自動訂閱 <strong>副駕駛 免費</strong></li>
</ol>

<pre><code class="language-text">Status Bar: [Copilot Icon] → "Set up Copilot" → Sign in with GitHub
</code></pre>

<h3>第三步：確認安裝</h3>
<p>登入成功後：</p>
<ul>
<li>狀態列中的副駕駛圖示變更為活動狀態</li>
<li>開啟任何程式碼檔案→開始輸入→查看內聯建議（幽靈文字）</li>
<li>開啟聊天視圖 <code>Ctrl+Cmd+I</code> (macOS) 或 <code>Ctrl+Alt+I</code> （Windows/Linux）</li>
</ul>

<h2 id="3-chon-ai-model"><strong>3. 選擇AI模型</strong></h2>

<p>GitHub Copilot 讓您為每個任務選擇正確的 AI 模型：</p>

<h3>目前型號（2026 年 3 月）：</h3>

<table>
<thead>
<tr>
<th>型號</th>
<th>提供者</th>
<th>特點</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GPT-5.4</strong></td>
<td>開放人工智慧</td>
<td>最新、最強的編碼。 2026 年 3 月起正式上市。</td>
</tr>
<tr>
<td><strong>GPT-5.4迷你</strong></td>
<td>開放人工智慧</td>
<td>更輕、更快，適合簡單的任務。</td>
</tr>
<tr>
<td><strong>GPT-5.3-法典</strong></td>
<td>開放人工智慧</td>
<td>長期支持，針對程式碼生成進行了最佳化。</td>
</tr>
<tr>
<td><strong>克勞德（人類）</strong></td>
<td>人擇</td>
<td>推理能力強，指令遵循。</td>
</tr>
<tr>
<td><strong>雙子座3.1專業版</strong></td>
<td>Google</td>
<td>長上下文，支援 JetBrains/Xcode/Eclipse。</td>
</tr>
<tr>
<td><strong>Grok 代碼快速 1</strong></td>
<td>人工智慧</td>
<td>速度快，用於副駕駛自由自動選擇。</td>
</tr>
</tbody>
</table>

<h3>自動選型</h3>
<p>預設情況下，使用副駕駛 <strong>汽車</strong> — 自動為每個提示選擇最佳模型。您可以透過點擊進行更改 <strong>模型下拉式選單</strong> 在聊天視圖中。</p>

<pre><code class="language-text">Chat view → Model dropdown (góc trên) → Chọn model cụ thể hoặc "Auto"
</code></pre>

<h2 id="4-cau-hinh-settings"><strong>4. 配置重要設定</strong></h2>

<p>開啟 VS Code 設定（<code>命令+,</code>）並搜尋「副駕駛」：</p>

<h3>4.1.內嵌建議</h3>
<pre><code class="language-json">{
  // Bật/tắt inline suggestions
  "editor.inlineSuggest.enabled": true,

  // Bật Next Edit Suggestions (NES)
  "editor.inlineSuggest.edits.enabled": true,

  // Tự động hiển thị suggestions
  "github.copilot.editor.enableAutoCompletions": true
}
</code></pre>

<h3>4.2.代理模式</h3>
<pre><code class="language-json">{
  // Bật Agent mode (quan trọng!)
  "chat.agent.enabled": true,

  // Cho phép agent chạy terminal commands
  "github.copilot.chat.agent.runCommands": true
}
</code></pre>

<h3>4.3.特定語言</h3>
<pre><code class="language-json">{
  // Tắt Copilot cho một số ngôn ngữ
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "yaml": true
  }
}
</code></pre>

<h2 id="5-keyboard-shortcuts"><strong>5.要記住的鍵盤快速鍵</strong></h2>

<table>
<thead>
<tr>
<th>捷徑 (macOS)</th>
<th>快捷方式（Win/Linux）</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>選項卡</code></td>
<td><code>選項卡</code></td>
<td>接受內聯建議</td>
</tr>
<tr>
<td><code>ESC</code></td>
<td><code>ESC</code></td>
<td>駁回建議</td>
</tr>
<tr>
<td><code>選項+]</code></td>
<td><code>Alt+]</code></td>
<td>下一步建議</td>
</tr>
<tr>
<td><code>選項+[</code></td>
<td><code>Alt+[</code></td>
<td>之前的建議</td>
</tr>
<tr>
<td><code>Cmd+→</code></td>
<td><code>Ctrl+→</code></td>
<td>逐字接受</td>
</tr>
<tr>
<td><code>指令+I</code></td>
<td><code>Ctrl+I</code></td>
<td>內嵌聊天</td>
</tr>
<tr>
<td><code>Ctrl+Cmd+I</code></td>
<td><code>Ctrl+Alt+I</code></td>
<td>開啟聊天視圖</td>
</tr>
</tbody>
</table>

<h2 id="6-first-interactions"><strong>6. 第一次互動</strong></h2>

<h3>6.1.測試內聯建議</h3>
<p>建立文件 <code>你好.py</code> 並開始輸入：</p>

<pre><code class="language-python"># Function to calculate fibonacci numbers
def fibonacci(</code></pre>

<p>Copilot 將自動建議函數體。新聞 <code>選項卡</code> 接受。</p>

<h3>6.2.測試聊天視圖</h3>
<p>開啟聊天視圖 (<code>Ctrl+Cmd+I</code>）並輸入：</p>

<pre><code class="language-text">Create a simple Python script that reads a CSV file and generates a bar chart using matplotlib
</code></pre>

<h3>6.3.測試代理模式</h3>
<p>在聊天視圖中，選擇 <strong>代理商</strong> 從下拉式選單中輸入：</p>

<pre><code class="language-text">Create a simple todo web app with HTML, CSS, and JavaScript. Make it modern and responsive.
</code></pre>

<p>觀察代理自動建立文件、編寫程式碼和設定專案。</p>

<h2 id="7-cau-truc-giao-dien"><strong>7.了解Copilot介面結構</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│  VS Code + GitHub Copilot                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌────────────────────────────┐   │
│  │ Chat     │  │ Editor                     │   │
│  │ View     │  │                            │   │
│  │          │  │  [Ghost text suggestions]   │   │
│  │ Agent ▼  │  │                            │   │
│  │ Model ▼  │  │  Cmd+I → Inline Chat      │   │
│  │          │  │                            │   │
│  │ Sessions │  │                            │   │
│  │ list     │  │                            │   │
│  └──────────┘  └────────────────────────────┘   │
│                                                  │
│  Status Bar: [Copilot ●] [Model: Auto]          │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="8-troubleshooting"><strong>8. 常見問題排除</strong></h2>

<table>
<thead>
<tr>
<th>問題</th>
<th>解決方案</th>
</tr>
</thead>
<tbody>
<tr>
<td>看不到建議</td>
<td>檢查狀態列中的 Copilot 圖標，確保您已登入</td>
</tr>
<tr>
<td>代理模式不顯示</td>
<td>打開 <code>聊天代理啟用</code> 在設定中</td>
</tr>
<tr>
<td>低品質的建議</td>
<td>嘗試更改模型，新增上下文（註解、開啟檔案）</td>
</tr>
<tr>
<td>達到速率限制</td>
<td>從免費升級到專業版，或等待新的月份重置</td>
</tr>
<tr>
<td>擴展衝突</td>
<td>關閉其他 AI 擴充功能（Tabnine、Codeium...）</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<p>您已準備好開始 Vibe 程式設計！所做工作的摘要：</p>

<ul>
<li>✅ 了解 Copilot 套餐並選擇合適的套餐</li>
<li>✅ 在 VS Code 中安裝並登入 GitHub Copilot</li>
<li>✅ 選擇合適的AI模型</li>
<li>✅ 配置重要設定</li>
<li>✅ 了解鍵盤快速鍵</li>
<li>✅ 成功測試內聯建議、聊天和代理模式</li>
</ul>

<p>在下一篇文章中，我們將深入探討 <strong>內聯建議和下一個編輯建議</strong> — 幫助您每天更快編碼的核心功能。</p>
