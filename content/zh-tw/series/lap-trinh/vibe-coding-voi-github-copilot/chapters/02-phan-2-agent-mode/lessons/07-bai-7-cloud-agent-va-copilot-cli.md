---
id: 019f1c30-a203-7001-c001-v1b3c0d10203
title: 第 7 課：雲端代理和 Copilot CLI — 代理隨處運行
slug: bai-7-cloud-agent-va-copilot-cli
description: >-
  本地代理、雲端代理、Copilot CLI 與第三方代理。雲端代理：自動建立分支、實施、開啟PR。 Copilot CLI：從終端運行代理，Git
  工作樹隔離。在代理類型之間切換。會話管理。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 第二部分：代理模式－AI自動編寫程式碼
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5218" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5218)"/>

  <!-- Decorations -->
  <g>
    <circle cx="822" cy="236" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="1044" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="766" cy="200" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="988" cy="182" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="164" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="56" x2="1100" y2="136" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="86" x2="1050" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.8467875173176,190.5 1032.8467875173176,221.5 1006,237 979.1532124826824,221.5 979.1532124826824,190.5 1006,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：雲端代理與 Copilot CLI — 代理</tspan>
      <tspan x="60" dy="42">到處跑</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第二部分：代理模式－AI自動編寫程式碼</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-agent-types-overview"><strong>1. 代理類型概述</strong></h2>

<p>GitHub Copilot 允許在許多不同的地方運行代理，具體取決於您所需的工作流程和監督級別：</p>

<table>
<thead>
<tr>
<th>代理類型</th>
<th>往哪裡跑？</th>
<th>互動</th>
<th>主要用例</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>當地代理商</strong></td>
<td>VS Code，你的機器</td>
<td>互動</td>
<td>每天編碼、調試、迭代</td>
</tr>
<tr>
<td><strong>副駕駛 CLI</strong></td>
<td>終端機、背景</td>
<td>自治</td>
<td>平行任務、工作樹隔離</td>
</tr>
<tr>
<td><strong>雲端代理</strong></td>
<td>GitHub 雲</td>
<td>透過公關</td>
<td>團隊協作、問題 → PR</td>
</tr>
<tr>
<td><strong>第三方</strong></td>
<td>人擇/OpenAI</td>
<td>基於SDK</td>
<td>特定人工智慧提供者偏好</td>
</tr>
</tbody>
</table>

<h2 id="2-local-agent"><strong>2.本地代理（VS代碼）</strong></h2>

<p>這是您在第 5 課中學到的代理。本地代理運行 <strong>在 VS 程式碼中</strong> 具有對工作區的完全存取權：</p>

<ul>
<li>✅ 存取專案中的所有文件</li>
<li>✅ 運行終端命令</li>
<li>✅ 使用 VS Code 擴充功能和 MCP 伺服器</li>
<li>✅ 互動－你回顧每一步</li>
<li>✅ 調試上下文（斷點、測試輸出）</li>
</ul>

<p><strong>最適合：</strong> 當需要密切監督時進行互動式開發、調試。</p>

<h2 id="3-copilot-cli"><strong>3. Copilot CLI — 來自終端機的代理</strong></h2>

<p>Copilot CLI 允許運行代理 <strong>從命令列</strong>，在後台自主運作。</p>

<h3>3.1.安裝</h3>
<pre><code class="language-bash"># Copilot CLI được tích hợp trong GitHub CLI
gh extension install github/gh-copilot

# Hoặc nếu đã có, upgrade
gh extension upgrade github/gh-copilot
</code></pre>

<h3>3.2.基本用法</h3>
<pre><code class="language-bash"># Chạy agent task
gh copilot agent "Add input validation to all API endpoints in src/routes/"

# Với worktree isolation (không ảnh hưởng branch hiện tại)
gh copilot agent --worktree "Refactor database queries to use prepared statements"
</code></pre>

<h3>3.3. Git Worktrees — 安全 Vibe 編碼</h3>
<p>Git Worktrees 允許代理人在一個工作樹上工作 <strong>單獨複製</strong> 程式碼庫的，不會影響您正在編碼的分支：</p>

<pre><code class="language-text">main (bạn đang code ở đây)
  └── worktree/copilot-task-1/ (Agent chạy ở đây)
      └── Isolated copy, riêng branch
</code></pre>

<p>代理完成後，檢查更改並合併（如果確定）。</p>

<h3>3.4.並行運行多個任務</h3>
<pre><code class="language-bash"># Terminal 1: Task A
gh copilot agent --worktree "Add unit tests for UserService"

# Terminal 2: Task B (song song)
gh copilot agent --worktree "Create API documentation with OpenAPI spec"

# Terminal 3: Bạn vẫn code bình thường trên main branch
</code></pre>

<h2 id="4-cloud-agent"><strong>4. Cloud Agent — GitHub 上的編碼代理</strong></h2>

<p>雲端代理（也稱為 <strong>副駕駛編碼代理</strong>) 運行於 <strong>GitHub 基礎設施</strong>，完全自主：</p>

<h3>4.1.工作流程</h3>
<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│           CLOUD AGENT WORKFLOW                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. Assign issue/task cho Agent                  │
│     (assign to "copilot" on GitHub)              │
│           ↓                                      │
│  2. Agent tự tạo branch                         │
│           ↓                                      │
│  3. Agent implement changes                     │
│     (code, tests, docs)                          │
│           ↓                                      │
│  4. Agent mở Pull Request                       │
│           ↓                                      │
│  5. Team review PR như bình thường               │
│           ↓                                      │
│  6. Merge khi approved                           │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h3>4.2.觸發雲端代理</h3>

<p><strong>方法 1：指派 GitHub 問題</strong></p>
<pre><code class="language-text">GitHub Issue → Assignees → Assign to "copilot"
</code></pre>

<p><strong>方法 2：在 Issue/PR 評論中提及</strong></p>
<pre><code class="language-text">@copilot Can you implement the dark mode feature described in this issue?
</code></pre>

<p><strong>方法 3：從 VS Code — 切換本機會話</strong></p>
<p>選擇會話類型下拉式選單→“<strong>雲</strong>” → 代理在雲端繼續執行任務。</p>

<h3>4.3.配置雲端代理</h3>
<p>建立文件 <code>.github/copilot-coding-agent.yml</code> （或透過儲存庫設定進行設定）：</p>

<pre><code class="language-yaml"># Validation tools cho Cloud Agent
validation:
  - name: "lint"
    command: "npm run lint"
  - name: "test"
    command: "npm test"
  - name: "build"
    command: "npm run build"
</code></pre>

<h3>4.4.監控雲端代理</h3>
<ul>
<li>追蹤提交 → 會話日誌（2026 年 3 月功能）</li>
<li>用於管理多個代理會話的會話過濾器</li>
<li>Copilot 使用指標追蹤活躍的編碼代理用戶</li>
</ul>

<h2 id="5-third-party-agents"><strong>5. 第三方代理</strong></h2>

<p>VS Code 支援運行其他提供者的代理程式：</p>

<ul>
<li><strong>人類（克勞德）</strong>：使用克勞德作為代理人，推理能力強</li>
<li><strong>開放人工智慧</strong>：使用GPT模型作為代理</li>
</ul>

<p>從會話類型下拉清單中選擇→“<strong>第三方</strong>“ → 選擇提供者。</p>

<h2 id="6-hand-off-giua-agent-types"><strong>6. 代理類型之間的切換</strong></h2>

<p>最好的功能之一：您可以 <strong>將任務從一種代理類型轉移到另一種代理類型</strong>，保持上下文完整：</p>

<pre><code class="language-text">Ví dụ workflow end-to-end:

1. LOCAL (Plan):    Lập kế hoạch feature mới
       ↓ hand off
2. LOCAL (Agent):   Implement interactive, review từng step
       ↓ hand off
3. COPILOT CLI:     Chạy parallel tasks cho testing
       ↓ hand off  
4. CLOUD (Agent):   Tạo PR, team review

Context được chuyển toàn bộ qua mỗi hand off!
</code></pre>

<h3>如何交接：</h3>
<ul>
<li><strong>本地 → CLI</strong>：在聊天中，從會話類型下拉清單中選擇“在 CLI 中繼續”</li>
<li><strong>CLI → 雲</strong>：在 CLI 會話中，鍵入 <code>/代表</code></li>
<li><strong>本地 → 雲端</strong>：從會話類型下拉清單中選擇“雲”</li>
</ul>

<h2 id="7-chon-agent-type-nao"><strong>七、代理類型選擇說明</strong></h2>

<table>
<thead>
<tr>
<th>場景</th>
<th>代理類型推薦</th>
</tr>
</thead>
<tbody>
<tr>
<td>集思廣益，探索想法</td>
<td>當地代理（詢問）</td>
</tr>
<tr>
<td>計劃實施</td>
<td>本地代理（計劃）</td>
</tr>
<tr>
<td>建構互動功能</td>
<td>當地代理商</td>
</tr>
<tr>
<td>使用編輯器上下文進行調試</td>
<td>當地代理商</td>
</tr>
<tr>
<td>任務背景不需要監督</td>
<td>副駕駛 CLI</td>
</tr>
<tr>
<td>嘗試許多概念證明</td>
<td>Copilot CLI（工作樹）</td>
</tr>
<tr>
<td>為審核團隊建立 PR</td>
<td>雲端代理</td>
</tr>
<tr>
<td>為 AI 分配 GitHub 問題</td>
<td>雲端代理</td>
</tr>
<tr>
<td>使用特定的AI提供者</td>
<td>第三方代理</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. 最佳實踐</strong></h2>

<ul>
<li><strong>使用工作樹進行實驗任務</strong> — 不影響主分支</li>
<li><strong>為雲端代理配置驗證工具</strong> — 確保公關質量</li>
<li><strong>監控使用指標</strong> — 追蹤成本和效率</li>
<li><strong>在適當的時候移交</strong> — 本地規劃，雲端實施</li>
<li><strong>仔細檢討雲端代理 PR</strong> — 就像初級開發人員的程式碼審查</li>
</ul>

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<p>GitHub Copilot 代理是 <strong>多樣化的生態系統</strong> — 您選擇適合開發工作流程每個階段的代理類型。真正的實力在於能力 <strong>無縫切換</strong> 類型之間。</p>

<p>從第 3 部分開始，我們將探討 Vibe 編碼最重要的技能： <strong>程式碼快速工程</strong> — 如何撰寫提示，以便 AI 能夠產生高品質的程式碼。</p>
