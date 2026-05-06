---
id: 019f1c30-a103-7001-c001-v1b3c0d10103
title: 'レッスン 3: インラインの提案と次の編集の提案 — スマート コードの提案'
slug: bai-3-inline-suggestions-va-next-edit-suggestions
description: >-
  ゴーストテキスト補完、タブで受け入れる、サイクル提案、複数行補完。次の編集の提案 (NES) —
  次の編集を予測します。提案のナビゲーション、部分的な承認、キーボード ショートカット。提案の品質を最適化するためのヒント。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: Vibe コーディング プラットフォームと GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1150" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1150)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1063" cy="79" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1026" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="989" cy="285" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="952" cy="128" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="249" x2="1100" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="279" x2="1050" y2="349" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="987.1051177665153,127 987.1051177665153,171 949,193 910.8948822334847,171 910.8948822334847,127.00000000000001 949,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: インラインの提案と次の編集</tspan>
      <tspan x="60" dy="42">提案 — スマートコードの提案</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Vibe コーディング プラットフォームと GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-inline-suggestions-la-gi"><strong>1. インライン提案とは何ですか?</strong></h2>

<p>インライン提案 (ゴースト テキスト) は GitHub Copilot の中核機能です。コードを入力すると、Copilot はコードの次のセクションを次の形式で自動的に提案します。 <strong>ゴーストテキスト</strong> エディターに直接表示されます。</p>

<pre><code class="language-text">Bạn gõ:    function calculateTax(income) {
Ghost text: ░░ const taxRate = income > 50000 ? 0.3 : 0.2;
            ░░ return income * taxRate;
            ░░}
</code></pre>

<p>副操縦士の分析 <strong>コンテキスト</strong> 適切な提案をするために周りに:</p>
<ul>
<li>ファイル名、プログラミング言語</li>
<li>現在行の上のコメント</li>
<li>ファイルに書かれたコード</li>
<li>他のファイルがエディタで開かれている</li>
<li>インポートステートメント、関数シグネチャ</li>
</ul>

<h2 id="2-thao-tac-voi-suggestions"><strong>2. インライン提案の使用</strong></h2>

<h3>2.1.承認と拒否</h3>
<table>
<thead>
<tr>
<th>操作</th>
<th>ショートカット macOS</th>
<th>ショートカット Windows/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>すべての提案を受け入れる</td>
<td><code>タブ</code></td>
<td><code>タブ</code></td>
</tr>
<tr>
<td>提案を拒否する</td>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
</tr>
<tr>
<td>一つ一つの言葉を受け入れる</td>
<td><code>コマンド+→</code></td>
<td><code>Ctrl+→</code></td>
</tr>
<tr>
<td>各行を受け入れます</td>
<td><code>Cmd+Shift+→</code></td>
<td><code>Ctrl+Shift+→</code></td>
</tr>
</tbody>
</table>

<h3>2.2.多くの提案を順番に実行する</h3>
<p>Copilot は多くの場合、さまざまな提案をします。ゴースト テキストの上にマウスを置くと、ナビゲーション コントロールが表示されます。</p>

<table>
<thead>
<tr>
<th>操作</th>
<th>ショートカット macOS</th>
<th>ショートカット Windows/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>次の提案</td>
<td><code>オプション+]</code></td>
<td><code>Alt+]</code></td>
</tr>
<tr>
<td>まずは提案</td>
<td><code>オプション+[</code></td>
<td><code>Alt+[</code></td>
</tr>
</tbody>
</table>

<h3>2.3.部分的に受け入れる — 重要なテクニック</h3>
<p><strong>部分承認</strong> 提案の一部だけを取得し、入力を続けると、Copilot が希望する方向に再提案します。</p>

<pre><code class="language-typescript">// Ghost text suggest: const result = data.filter(item => item.active).map(item => item.name);
// Bạn accept "const result = data.filter(" bằng Cmd+→ vài lần
// Rồi gõ tiếp: item => item.price > 100
// Copilot sẽ suggest phần còn lại phù hợp với logic mới
</code></pre>

<p>これは技術的なものです <strong>ステアリング。ステアリング</strong> — 盲目的に受け入れるのではなく、AI をあなたの好みに合わせて導きます。</p>

<h2 id="3-next-edit-suggestions"><strong>3. 次の編集提案 (NES)</strong></h2>

<p>NES はより高度です — Copilot <strong>次にどこを編集する必要があるかを予測する</strong> 加えた変更に基づいて。</p>

<h3>例: 変数の名前を変更する</h3>
<pre><code class="language-javascript">// Bạn vừa đổi tên biến ở dòng 5: userName → displayName
// NES tự động highlight và suggest đổi tên ở dòng 12, 18, 25

// Dòng 5:  const displayName = user.name;     ← bạn vừa edit
// Dòng 12: console.log(displayName);          ← NES suggest edit này
//                       ^^^^^^^^^^^
// Nhấn Tab để accept, Copilot tự nhảy đến dòng tiếp theo cần edit
</code></pre>

<h3>例: パラメータの追加</h3>
<pre><code class="language-python"># Bạn vừa thêm parameter 'currency' vào function definition
def format_price(amount, currency):   # ← vừa thêm currency
    # NES suggest cập nhật body function để sử dụng currency
    return f"{currency} {amount:,.2f}"

# NES cũng suggest cập nhật tất cả function calls
format_price(100, "USD")  # ← NES suggest thêm argument
</code></pre>

<h3>NESの電源を入れる</h3>
<pre><code class="language-json">{
  "editor.inlineSuggest.edits.enabled": true
}
</code></pre>

<h2 id="4-multi-line-completions"><strong>4. 複数行の補完</strong></h2>

<p>Copilot は、関数、クラス、またはコードのブロック全体を提案できます。</p>

<pre><code class="language-typescript">// Bạn gõ comment mô tả:
// Function to validate email address using regex

// Copilot suggest toàn bộ function:
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
</code></pre>

<h3>複数行の提案をより適切にするためのヒント:</h3>
<ul>
<li><strong>明確に説明的なコメントを書く</strong> Enterを押す前に</li>
<li><strong>関数/変数に意味のある名前を付けます</strong> — 副操縦士は名前を読んで意図を理解します</li>
<li><strong>関連ファイルを開く</strong> — Copilot は開いているタブのコンテキストを使用します</li>
<li><strong>最初にテストを書く</strong> — Copilot はテストを読み取り、予想される動作を理解します</li>
</ul>

<h2 id="5-comment-driven-development"><strong>5. コメント駆動開発</strong></h2>

<p>インライン提案を使用した Vibe コーディングの効果的なパターン:</p>

<pre><code class="language-python"># 1. Viết comment mô tả intent
# Read CSV file, group by category, calculate average price per category,
# sort by average price descending, and return top 5

# 2. Nhấn Enter → Copilot sinh toàn bộ implementation
import pandas as pd

def get_top_categories(csv_path: str, top_n: int = 5) -> pd.DataFrame:
    df = pd.read_csv(csv_path)
    result = (df.groupby('category')['price']
              .mean()
              .sort_values(ascending=False)
              .head(top_n)
              .reset_index()
              .rename(columns={'price': 'avg_price'}))
    return result
</code></pre>

<h2 id="6-context-bo-sung"><strong>6. より良い提案のためにコンテキストを最適化する</strong></h2>

<h3>6.1.開いているファイルは提案の影響を受けます</h3>
<p>副操縦士は単語のコンテキストを確認します <strong>タブを開く</strong>。関連ファイルを開いて、Copilot がコードベースを理解できるようにします。</p>

<pre><code class="language-text">Tab 1: models/User.ts          ← Copilot biết User schema
Tab 2: services/UserService.ts ← Đang viết, suggest dựa trên User model
Tab 3: tests/user.test.ts      ← Copilot hiểu expected behavior
</code></pre>

<h3>6.2. import ステートメントは適切なコンテキストです</h3>
<pre><code class="language-python"># Viết imports trước → Copilot biết bạn dùng thư viện nào
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

# Bây giờ Copilot sẽ suggest code theo FastAPI patterns
</code></pre>

<h3>6.3.型の注釈により、より正確な提案が得られます</h3>
<pre><code class="language-typescript">// Với type → suggestion chính xác
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

function filterProducts(products: Product[], minPrice: number): Product[] {
  // Copilot biết chính xác structure và suggest phù hợp
}
</code></pre>

<h2 id="7-khi-nao-inline-suggestions-khong-hieu-qua"><strong>7. インライン提案が効果的でないのはどのような場合ですか?</strong></h2>

<ul>
<li><strong>複雑なドメイン固有のロジック</strong> — 代わりにチャット/エージェントを使用してください</li>
<li><strong>文脈がありません</strong> — 新しいファイルは空で、インポートやコメントはありません</li>
<li><strong>コードが間違ったパターンで書かれている</strong> — 副操縦士は間違ったパターンを続行します</li>
<li><strong>ファイル間の依存関係</strong> — Copilot のコンテキスト ウィンドウは限られています</li>
</ul>

<p><strong>経験則:</strong> インライン提案は次のような場合に適しています <strong>単一ファイルの増分編集</strong>。マルチファイル機能の場合は、次を使用します。 <strong>エージェントモード</strong> (レッスン 5)。</p>

<h2 id="8-thuc-hanh"><strong>8. 練習問題</strong></h2>

<p>ファイルの作成 <code>練習.ts</code> そして練習してください:</p>

<ol>
<li>機能を説明するコメントを書く → Enter キーを押す → 提案を受け入れる</li>
<li>関数の署名を入力 → Copilot に本文を提案させる</li>
<li>部分的な受け入れ (Cmd+→) を試して提案を操作してください</li>
<li>複数の候補を循環します (Option+]/[)</li>
<li>変数の名前を変更する → NES が提案する編集を他の場所で確認してください</li>
</ol>

<pre><code class="language-typescript">// Bài tập 1: Viết comment, nhấn Enter
// Function to convert temperature from Celsius to Fahrenheit

// Bài tập 2: Viết signature, để Copilot suggest body
function sortByDate(items: Array&lt;{date: string, title: string}&gt;)

// Bài tập 3: Viết test function, để Copilot suggest test cases
describe('sortByDate', () => {
  it('should
</code></pre>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>特長</th>
<th>説明</th>
<th>いつ使用するか</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>インライン提案</strong></td>
<td>入力時に自動的にゴーストテキストが表示される</td>
<td>毎日のコード、定型文</td>
</tr>
<tr>
<td><strong>部分的に受け入れる</strong></td>
<td>各単語/行を受け入れる</td>
<td>希望に応じて提案を操作する</td>
</tr>
<tr>
<td><strong>ファミコン</strong></td>
<td>次の編集位置を予測する</td>
<td>名前の変更、パラメータの追加、リファクタリング</td>
</tr>
<tr>
<td><strong>複数行</strong></td>
<td>機能全体を提案する</td>
<td>明確なコメント・署名がある場合</td>
</tr>
<tr>
<td><strong>コメント主導型</strong></td>
<td>コメントを書く→コードを取得</td>
<td>複雑なロジックの説明</td>
</tr>
</tbody>
</table>

<p>次の曲はカバーになります <strong>インラインチャットとスマートアクション</strong> — エディター内でターゲットを絞った編集とリファクタリングを行うための強力なツール。</p>
