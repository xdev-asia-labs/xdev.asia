---
id: 019f1c30-a104-7001-c001-v1b3c0d10104
title: 'レッスン 4: インライン チャットとスマート アクション — コードをその場で編集する'
slug: bai-4-inline-chat-va-smart-actions
description: >-
  対象を絞った編集、リファクタリング、バグ修正のためのインライン チャット (Cmd+I)。スマート アクション: コミット
  メッセージの生成、シンボルの名前変更、エラーの修正、セマンティック検索。コパイロットによるクイックフィックス。日常のワークフローに統合します。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: Vibe コーディング プラットフォームと GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 プログラミング — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: インライン チャットとスマート アクション — 編集</tspan>
      <tspan x="60" dy="42">コードをその場で編集する</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Vibe コーディング プラットフォームと GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-inline-chat"><strong>1. インラインチャット — その場でコードを編集</strong></h2>

<p><strong>インラインチャット</strong> 小さなプロンプトを開くことができます <strong>エディタ内ですぐに</strong>、必要な変更を説明すると、Copilot はチャット ビューに切り替えることなく、その場でコードを編集します。</p>

<h3>インラインチャットを開く</h3>
<ul>
<li><strong>macOS:</strong> <code>Cmd+I</code></li>
<li><strong>Windows/Linux:</strong> <code>Ctrl+I</code></li>
</ul>

<h3>基本的なワークフロー:</h3>
<ol>
<li>編集したいコードを選択（選択）します（またはコードを追加したい場所にカーソルを置きます）。</li>
<li>プレス <code>Cmd+I</code></li>
<li>変更の説明を英語/ベトナム語で入力します</li>
<li>インラインの差分表示を確認する</li>
<li>プレス <strong>受け入れる</strong> または <strong>廃棄する</strong></li>
</ol>

<h2 id="2-use-cases-inline-chat"><strong>2. インライン チャットの一般的な使用例</strong></h2>

<h3>2.1.エラー処理を追加する</h3>
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

<h3>2.2.コードのリファクタリング</h3>
<pre><code class="language-python"># Select block code → Cmd+I → "Refactor to use list comprehension"

# Trước:
result = []
for item in items:
    if item.price > 100:
        result.append(item.name)

# Sau (Copilot suggest):
result = [item.name for item in items if item.price > 100]
</code></pre>

<h3>2.3. TypeScript タイプを追加する</h3>
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

<h3>2.4.ドキュメントの生成</h3>
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

<h3>2.5.単体テストを書く</h3>
<pre><code class="language-typescript">// Select function → Cmd+I → "Generate unit tests using Jest"
// Copilot tự sinh test cases bao gồm happy path, edge cases, error cases
</code></pre>

<h2 id="3-smart-actions"><strong>3. スマート アクション — AI をワークフローに統合</strong></h2>

<p>スマートアクションはAIのアクションです <strong>組み込まれています</strong> VS Code インターフェイスに入ると、チャットを開かなくても、必要な場所にすぐに表示されます。</p>

<h3>3.1.コミットメッセージの生成</h3>
<ol>
<li>オープンソース管理ビュー (<code>Ctrl+Shift+G</code>）</li>
<li>変化をステージングする</li>
<li>クリック <strong>キラキラアイコン✨</strong> コミットメッセージ入力の横にあります</li>
<li>Copilot は変更を分析し、従来のコミットに従ってコミット メッセージを生成します</li>
</ol>

<pre><code class="language-text">// Ví dụ generated commit message:
feat(auth): add JWT token refresh mechanism

- Add refreshToken endpoint to AuthController
- Implement token rotation with configurable expiry
- Add middleware to auto-refresh expired tokens
</code></pre>

<h3>3.2.コパイロットで修正する (クイック修正)</h3>
<p>VS Code でエラー (赤い波線) が表示される場合:</p>
<ol>
<li>エラーにカーソルを合わせる → クリック <strong>「クイックフィックス」</strong></li>
<li>選択 <strong>「副操縦士で修正してください」</strong></li>
<li>Copilot はエラー メッセージを読み取り、コンテキストを分析し、修正を提案します</li>
</ol>

<h3>3.3.副操縦士で説明する</h3>
<p>複雑なコードを選択→右クリック→ <strong>「副操縦士」→「説明してください」</strong></p>
<p>Copilot は自然言語でコードを説明するため、他の人のコードや AI が生成したコードを読むときに役立ちます。</p>

<h3>3.4.テストの生成</h3>
<p>関数を右クリック→ <strong>「コパイロット」→「テストの生成」</strong></p>
<p>Copilot は、プロジェクトのフレームワーク (Jest、Pytest、Go テストなど) に一致するテスト ケースを含むテスト ファイルを自動的に作成します。</p>

<h3>3.5.テストの失敗を修正する</h3>
<p>テスト エクスプローラーでテストが失敗した場合:</p>
<ol>
<li>失敗したテストをクリックします</li>
<li>選択 <strong>「副操縦士で修正してください」</strong></li>
<li>Copilot はテスト失敗メッセージを読み取り、根本原因を見つけて、コードの修正 (テスト修正ではありません) を提案します。</li>
</ol>

<h2 id="4-semantic-search"><strong>4. VS Code でのセマンティック検索</strong></h2>

<p>副操縦士が提供される <strong>セマンティック検索</strong> — テキストの一致だけでなく、意味によって検索します。</p>

<pre><code class="language-text">// Traditional search: tìm "authenticate"
// Kết quả: chỉ những chỗ có chính xác từ "authenticate"

// Semantic search: tìm "user login process"
// Kết quả: authenticate(), verifyCredentials(), signIn(), checkPassword()
// → Tìm được code liên quan dù không match exact text
</code></pre>

<h2 id="5-inline-chat-vs-agent-vs-chat"><strong>5. インライン チャット、エージェント、チャットをいつ使用するか?</strong></h2>

<table>
<thead>
<tr>
<th>特長</th>
<th>いつ使用するか</th>
<th>範囲</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>インライン提案</strong></td>
<td>コードフローは中断されません</td>
<td>現在の行/ブロック</td>
</tr>
<tr>
<td><strong>インラインチャット</strong></td>
<td>具体的に編集、リファクタリング、ドキュメントを追加する</td>
<td>選択したコードまたはカーソル位置</td>
</tr>
<tr>
<td><strong>チャットビュー（質問）</strong></td>
<td>Q&A、説明、ブレインストーミング</td>
<td>コードを変更しないでください</td>
</tr>
<tr>
<td><strong>エージェントモード</strong></td>
<td>ビルド機能、複数ファイルの変更</td>
<td>プロジェクト全体</td>
</tr>
</tbody>
</table>

<pre><code class="language-text">Scope nhỏ → lớn:
Inline Suggestions → Inline Chat → Chat (Ask) → Agent Mode
     (line)          (selection)      (Q&A)       (project)
</code></pre>

<h2 id="6-tips-inline-chat-hieu-qua"><strong>6. 効果的なインライン チャットのためのヒント</strong></h2>

<ul>
<li><strong>正しく選択してください</strong>: 冗長でも欠落でもない、編集する正しいコード部分を選択してください</li>
<li><strong>明確な説明</strong>: 「メールと電話の入力検証を追加する」は「これを検証する」よりも優れています</li>
<li><strong>一度に 1 つの変更</strong>: 大きな変更を多数の小さなインライン チャットに分割します。</li>
<li><strong>コード用語を使用する</strong>: 「これを分離する」のではなく「ヘルパー関数に抽出する」</li>
<li><strong>承諾する前に確認してください</strong>: diff、特に変更ロジックを注意深く読んでください。</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. 練習問題</strong></h2>

<p>ファイルの作成 <code>スマートアクションプラクティス.ts</code>:</p>

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

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<p>インライン チャットとスマート アクションはツールです <strong>精密な編集</strong> — 次のことが可能になります。</p>
<ul>
<li>✅ コードを迅速にリファクタリングする</li>
<li>✅ 1 つのプロンプトでエラー処理、タイプ、ドキュメントを追加</li>
<li>✅ フルコンテキストでバグを修正</li>
<li>✅ コミットメッセージをインテリジェントに生成</li>
<li>✅ コンテキストを切り替えることなくコーディングフローを維持</li>
</ul>

<p>次のセクションでは (<strong>パート 2</strong>)、Copilot の最も強力な機能について説明します — <strong>エージェントモード</strong>、AI が自動的にコードを記述し、ファイルを作成し、コマンドを実行して、完全な機能を構築します。</p>
