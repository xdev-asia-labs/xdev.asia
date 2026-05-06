---
id: 019f1c30-a104-7001-c001-v1b3c0d10104
title: 第 4 課：內嵌聊天與智慧操作 — 現場編輯程式碼
slug: bai-4-inline-chat-va-smart-actions
description: 內嵌聊天 (Cmd+I) 用於針對性的編輯、重構、錯誤修復。智慧操作：產生提交訊息、重新命名符號、修復錯誤、語意搜尋。與副駕駛快速修復。融入日常工作流程。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：Vibe 編碼平台和 GitHub Copilot
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2539" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2539)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1016" cy="38" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="932" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="848" cy="130" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="764" cy="46" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1046.5788383248864,201.5 1046.5788383248864,234.5 1018,251 989.4211616751136,234.5 989.4211616751135,201.5 1018,185" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：內嵌聊天與智慧操作 — 編輯</tspan>
      <tspan x="60" dy="42">就地編輯程式碼</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Vibe 編碼平台和 GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-inline-chat"><strong>1. 內嵌聊天－現場編輯程式碼</strong></h2>

<p><strong>內嵌聊天</strong> 允許您開啟一個小提示 <strong>就在編輯器中</strong>，描述您想要的更改，Copilot 將就地編輯程式碼，而無需切換到聊天視圖。</p>

<h3>開啟內嵌聊天</h3>
<ul>
<li><strong>蘋果系統：</strong> <code>指令+I</code></li>
<li><strong>Windows/Linux：</strong> <code>Ctrl+I</code></li>
</ul>

<h3>基本工作流程：</h3>
<ol>
<li>選擇（select）你要編輯的程式碼（或將遊標放在你要新增程式碼的位置）</li>
<li>新聞 <code>指令+I</code></li>
<li>用英語/越南語輸入變更說明</li>
<li>查看差異顯示內聯</li>
<li>新聞 <strong>接受</strong> 或 <strong>丟棄</strong></li>
</ol>

<h2 id="2-use-cases-inline-chat"><strong>2. 內嵌聊天的常見用例</strong></h2>

<h3>2.1.新增錯誤處理</h3>
<pre><code class="language-typescript">// Select function này → Cmd+I → "Add try-catch error handling with proper logging"

async function fetchUserData(userId: string) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}

// Copilot sẽ suggest:
async function fetchUserData(userId: string) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch user ${userId}:`, error);
    throw error;
  }
}
</code></pre>

<h3>2.2.重構程式碼</h3>
<pre><code class="language-python"># Select block code → Cmd+I → "Refactor to use list comprehension"

# Trước:
result = []
for item in items:
    if item.price > 100:
        result.append(item.name)

# Sau (Copilot suggest):
result = [item.name for item in items if item.price > 100]
</code></pre>

<h3>2.3.新增 TypeScript 類型</h3>
<pre><code class="language-typescript">// Select → Cmd+I → "Add TypeScript type annotations"

// Trước:
function processOrder(order, discount) {
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return total * (1 - discount);
}

// Sau:
interface OrderItem {
  id: string;
  name: string;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
}

function processOrder(order: Order, discount: number): number {
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  return total * (1 - discount);
}
</code></pre>

<h3>2.4.生成文檔</h3>
<pre><code class="language-python"># Select function → Cmd+I → "Add docstring with parameters and return type"
def calculate_compound_interest(principal, rate, time, n=12):
    """
    Calculate compound interest.

    Args:
        principal (float): Initial investment amount.
        rate (float): Annual interest rate (as a decimal, e.g., 0.05 for 5%).
        time (float): Time period in years.
        n (int): Number of times interest is compounded per year. Defaults to 12.

    Returns:
        float: The total amount after compound interest.
    """
    return principal * (1 + rate / n) ** (n * time)
</code></pre>

<h3>2.5.編寫單元測試</h3>
<pre><code class="language-typescript">// Select function → Cmd+I → "Generate unit tests using Jest"
// Copilot tự sinh test cases bao gồm happy path, edge cases, error cases
</code></pre>

<h2 id="3-smart-actions"><strong>3. 智慧行動－人工智慧融入工作流程</strong></h2>

<p>智慧行動是人工智慧行動 <strong>內建</strong> 進入 VS Code 介面，無需打開聊天即可出現在您需要的地方。</p>

<h3>3.1.產生提交訊息</h3>
<ol>
<li>開放原始碼控制視圖（<code>Ctrl+Shift+G</code>）</li>
<li>階段性改變</li>
<li>點選 <strong>閃閃發光的圖標✨</strong> 在提交訊息輸入旁邊</li>
<li>Copilot 分析變更並根據常規提交產生提交訊息</li>
</ol>

<pre><code class="language-text">// Ví dụ generated commit message:
feat(auth): add JWT token refresh mechanism

- Add refreshToken endpoint to AuthController
- Implement token rotation with configurable expiry
- Add middleware to auto-refresh expired tokens
</code></pre>

<h3>3.2.與副駕駛一起修復（快速修復）</h3>
<p>當 VS Code 顯示錯誤時（波浪形紅線）：</p>
<ol>
<li>將滑鼠懸停在錯誤上 → 單擊 <strong>“快速修復”</strong></li>
<li>選擇 <strong>“與副駕駛一起修復”</strong></li>
<li>Copilot 讀取錯誤訊息、分析上下文並提出修復建議</li>
</ol>

<h3>3.3.與副駕駛解釋</h3>
<p>選擇複雜程式碼→右鍵→ <strong>“副駕駛”→“解釋一下”</strong></p>
<p>Copilot 用自然語言解釋程式碼，這在閱讀其他人的程式碼或人工智慧產生的程式碼時非常有用。</p>

<h3>3.4.生成測試</h3>
<p>右鍵單擊函數 → <strong>“副駕駛”→“生成測試”</strong></p>
<p>Copilot 會自動建立測試文件，其中包含與專案框架相符的測試案例（Jest、Pytest、Go 測試...）。</p>

<h3>3.5.修復測試失敗</h3>
<p>當測試資源管理器中的測試失敗時：</p>
<ol>
<li>點擊失敗的測試</li>
<li>選擇 <strong>“與副駕駛一起修復”</strong></li>
<li>Copilot 讀取測試失敗訊息，找到根本原因，並建議程式碼修復（不是測試修復）</li>
</ol>

<h2 id="4-semantic-search"><strong>4. VS Code 中的語意搜尋</strong></h2>

<p>提供副駕駛 <strong>語意搜尋</strong> — 按含義搜索，而不僅僅是文字匹配：</p>

<pre><code class="language-text">// Traditional search: tìm "authenticate"
// Kết quả: chỉ những chỗ có chính xác từ "authenticate"

// Semantic search: tìm "user login process"
// Kết quả: authenticate(), verifyCredentials(), signIn(), checkPassword()
// → Tìm được code liên quan dù không match exact text
</code></pre>

<h2 id="5-inline-chat-vs-agent-vs-chat"><strong>5. 何時使用內聯聊天、代理或聊天？</strong></h2>

<table>
<thead>
<tr>
<th>特點</th>
<th>何時使用</th>
<th>適用範圍</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>內嵌建議</strong></td>
<td>程式碼流不間斷</td>
<td>目前行/區塊</td>
</tr>
<tr>
<td><strong>內嵌聊天</strong></td>
<td>具體編輯、重構、新增文檔</td>
<td>選定的代碼或遊標位置</td>
</tr>
<tr>
<td><strong>聊天視圖（詢問）</strong></td>
<td>問答、解釋、腦力激盪</td>
<td>不要更改程式碼</td>
</tr>
<tr>
<td><strong>代理模式</strong></td>
<td>建置功能、多文件更改</td>
<td>整個專案</td>
</tr>
</tbody>
</table>

<pre><code class="language-text">Scope nhỏ → lớn:
Inline Suggestions → Inline Chat → Chat (Ask) → Agent Mode
     (line)          (selection)      (Q&A)       (project)
</code></pre>

<h2 id="6-tips-inline-chat-hieu-qua"><strong>6. 有效內嵌聊天的技巧</strong></h2>

<ul>
<li><strong>正確選擇</strong>：選出正確的一段程式碼進行編輯，既不多餘也不遺漏</li>
<li><strong>清晰的描述</strong>：「新增電子郵件和電話的輸入驗證」比「驗證此」更好</li>
<li><strong>一次改變一個</strong>：將一個大的變化分解為許多小的內聯聊天</li>
<li><strong>使用代碼術語</strong>：“提取到輔助函數”而不是“將其分開”</li>
<li><strong>接受前審查</strong>: 仔細閱讀 diff，尤其是更改邏輯</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7.練習練習</strong></h2>

<p>建立文件 <code>智慧操作實務.ts</code>：</p>

<pre><code class="language-typescript">// Bài tập 1: Select function → Cmd+I → "Add error handling"
function divideNumbers(a, b) {
  return a / b;
}

// Bài tập 2: Select → Cmd+I → "Convert to arrow function with types"
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Bài tập 3: Select → Cmd+I → "Add JSDoc documentation"
function calculateDiscount(price, percentage, maxDiscount) {
  const discount = price * percentage / 100;
  return Math.min(discount, maxDiscount);
}

// Bài tập 4: Tạo git commit → dùng ✨ để generate commit message
// Bài tập 5: Tạo lỗi cố ý → dùng "Fix with Copilot" để sửa
</code></pre>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<p>內嵌聊天和智慧操作是工具 <strong>精準編輯</strong> — 允許您：</p>
<ul>
<li>✅ 快速重構程式碼</li>
<li>✅ 只需一個提示即可新增錯誤處理、類型、文檔</li>
<li>✅ 透過完整上下文修復錯誤</li>
<li>✅ 智慧產生提交訊息</li>
<li>✅ 保持編碼流程而不切換上下文</li>
</ul>

<p>在下一節中（<strong>第2部分</strong>），我們將進入 Copilot 最強大的功能 — <strong>代理模式</strong>，人工智慧會自動編寫程式碼、建立檔案、運行命令並建立完整的功能。</p>
