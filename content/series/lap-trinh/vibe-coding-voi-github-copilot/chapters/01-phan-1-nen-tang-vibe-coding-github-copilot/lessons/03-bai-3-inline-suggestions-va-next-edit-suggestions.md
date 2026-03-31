---
id: 019f1c30-a103-7001-c001-v1b3c0d10103
title: 'Bài 3: Inline Suggestions & Next Edit Suggestions — Gợi ý code thông minh'
slug: bai-3-inline-suggestions-va-next-edit-suggestions
description: >-
  Ghost text completions, tab to accept, cycle suggestions, multi-line completions.
  Next Edit Suggestions (NES) — dự đoán edit tiếp theo. Navigating suggestions,
  partial accept, keyboard shortcuts. Tips tối ưu chất lượng gợi ý.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Vibe Coding & GitHub Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-inline-suggestions-la-gi"><strong>1. Inline Suggestions là gì?</strong></h2>

<p>Inline Suggestions (Ghost Text) là tính năng cốt lõi của GitHub Copilot — khi bạn gõ code, Copilot tự động gợi ý phần code tiếp theo dưới dạng <strong>text mờ (ghost text)</strong> hiển thị ngay trong editor.</p>

<pre><code class="language-text">Bạn gõ:    function calculateTax(income) {
Ghost text: ░░ const taxRate = income > 50000 ? 0.3 : 0.2;
            ░░ return income * taxRate;
            ░░}
</code></pre>

<p>Copilot phân tích <strong>context</strong> xung quanh để đưa ra gợi ý phù hợp:</p>
<ul>
<li>Tên file, ngôn ngữ lập trình</li>
<li>Comments phía trên dòng hiện tại</li>
<li>Code đã viết trong file</li>
<li>Các file khác đang mở trong editor</li>
<li>Import statements, function signatures</li>
</ul>

<h2 id="2-thao-tac-voi-suggestions"><strong>2. Thao tác với Inline Suggestions</strong></h2>

<h3>2.1. Accept & Reject</h3>
<table>
<thead>
<tr>
<th>Thao tác</th>
<th>Shortcut macOS</th>
<th>Shortcut Win/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accept toàn bộ suggestion</td>
<td><code>Tab</code></td>
<td><code>Tab</code></td>
</tr>
<tr>
<td>Reject suggestion</td>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
</tr>
<tr>
<td>Accept từng word</td>
<td><code>Cmd+→</code></td>
<td><code>Ctrl+→</code></td>
</tr>
<tr>
<td>Accept từng line</td>
<td><code>Cmd+Shift+→</code></td>
<td><code>Ctrl+Shift+→</code></td>
</tr>
</tbody>
</table>

<h3>2.2. Cycle qua nhiều Suggestions</h3>
<p>Copilot thường có nhiều gợi ý khác nhau. Hover vào ghost text để thấy navigation controls:</p>

<table>
<thead>
<tr>
<th>Thao tác</th>
<th>Shortcut macOS</th>
<th>Shortcut Win/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>Suggestion tiếp theo</td>
<td><code>Option+]</code></td>
<td><code>Alt+]</code></td>
</tr>
<tr>
<td>Suggestion trước</td>
<td><code>Option+[</code></td>
<td><code>Alt+[</code></td>
</tr>
</tbody>
</table>

<h3>2.3. Partial Accept — Kỹ thuật quan trọng</h3>
<p><strong>Partial accept</strong> cho phép bạn chỉ lấy một phần suggestion, rồi tiếp tục gõ để Copilot gợi ý lại theo hướng bạn muốn:</p>

<pre><code class="language-typescript">// Ghost text suggest: const result = data.filter(item => item.active).map(item => item.name);
// Bạn accept "const result = data.filter(" bằng Cmd+→ vài lần
// Rồi gõ tiếp: item => item.price > 100
// Copilot sẽ suggest phần còn lại phù hợp với logic mới
</code></pre>

<p>Đây là kỹ thuật <strong>steering</strong> — dẫn dắt AI theo ý bạn thay vì chấp nhận mù quáng.</p>

<h2 id="3-next-edit-suggestions"><strong>3. Next Edit Suggestions (NES)</strong></h2>

<p>NES là tính năng nâng cao hơn — Copilot <strong>dự đoán chỗ tiếp theo bạn cần edit</strong> dựa trên thay đổi bạn vừa làm.</p>

<h3>Ví dụ: Rename variable</h3>
<pre><code class="language-javascript">// Bạn vừa đổi tên biến ở dòng 5: userName → displayName
// NES tự động highlight và suggest đổi tên ở dòng 12, 18, 25

// Dòng 5:  const displayName = user.name;     ← bạn vừa edit
// Dòng 12: console.log(displayName);          ← NES suggest edit này
//                       ^^^^^^^^^^^
// Nhấn Tab để accept, Copilot tự nhảy đến dòng tiếp theo cần edit
</code></pre>

<h3>Ví dụ: Thêm parameter</h3>
<pre><code class="language-python"># Bạn vừa thêm parameter 'currency' vào function definition
def format_price(amount, currency):   # ← vừa thêm currency
    # NES suggest cập nhật body function để sử dụng currency
    return f"{currency} {amount:,.2f}"

# NES cũng suggest cập nhật tất cả function calls
format_price(100, "USD")  # ← NES suggest thêm argument
</code></pre>

<h3>Bật NES</h3>
<pre><code class="language-json">{
  "editor.inlineSuggest.edits.enabled": true
}
</code></pre>

<h2 id="4-multi-line-completions"><strong>4. Multi-line Completions</strong></h2>

<p>Copilot có thể suggest entire functions, classes, hoặc blocks of code:</p>

<pre><code class="language-typescript">// Bạn gõ comment mô tả:
// Function to validate email address using regex

// Copilot suggest toàn bộ function:
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
</code></pre>

<h3>Tips cho multi-line suggestions tốt hơn:</h3>
<ul>
<li><strong>Viết comment mô tả rõ ràng</strong> trước khi nhấn Enter</li>
<li><strong>Đặt tên function/variable có ý nghĩa</strong> — Copilot đọc tên để hiểu ý định</li>
<li><strong>Mở file liên quan</strong> — Copilot dùng context từ các tab đang mở</li>
<li><strong>Viết test trước</strong> — Copilot đọc test để hiểu expected behavior</li>
</ul>

<h2 id="5-comment-driven-development"><strong>5. Comment-Driven Development</strong></h2>

<p>Một pattern hiệu quả cho Vibe Coding với Inline Suggestions:</p>

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

<h2 id="6-context-bo-sung"><strong>6. Tối ưu context để suggestions tốt hơn</strong></h2>

<h3>6.1. File đang mở ảnh hưởng suggestions</h3>
<p>Copilot xem context từ <strong>các tab đang mở</strong>. Mở những file liên quan để Copilot hiểu codebase:</p>

<pre><code class="language-text">Tab 1: models/User.ts          ← Copilot biết User schema
Tab 2: services/UserService.ts ← Đang viết, suggest dựa trên User model
Tab 3: tests/user.test.ts      ← Copilot hiểu expected behavior
</code></pre>

<h3>6.2. Import statements là context tốt</h3>
<pre><code class="language-python"># Viết imports trước → Copilot biết bạn dùng thư viện nào
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

# Bây giờ Copilot sẽ suggest code theo FastAPI patterns
</code></pre>

<h3>6.3. Type annotations cho suggestions chính xác hơn</h3>
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

<h2 id="7-khi-nao-inline-suggestions-khong-hieu-qua"><strong>7. Khi nào Inline Suggestions không hiệu quả?</strong></h2>

<ul>
<li><strong>Logic phức tạp, domain-specific</strong> — dùng Chat/Agent thay thế</li>
<li><strong>Không có context</strong> — file mới trống, không có imports/comments</li>
<li><strong>Code đã viết sai pattern</strong> — Copilot sẽ tiếp tục pattern sai</li>
<li><strong>Cross-file dependencies</strong> — Copilot có giới hạn context window</li>
</ul>

<p><strong>Rule of thumb:</strong> Inline Suggestions phù hợp cho <strong>single-file, incremental edits</strong>. Cho multi-file features, dùng <strong>Agent Mode</strong> (Bài 5).</p>

<h2 id="8-thuc-hanh"><strong>8. Bài tập thực hành</strong></h2>

<p>Tạo file <code>practice.ts</code> và thực hành:</p>

<ol>
<li>Viết comment mô tả function → nhấn Enter → accept suggestion</li>
<li>Gõ function signature → để Copilot suggest body</li>
<li>Thử partial accept (Cmd+→) để steer suggestion</li>
<li>Cycle qua multiple suggestions (Option+]/[)</li>
<li>Rename một variable → quan sát NES suggest edits ở nơi khác</li>
</ol>

<pre><code class="language-typescript">// Bài tập 1: Viết comment, nhấn Enter
// Function to convert temperature from Celsius to Fahrenheit

// Bài tập 2: Viết signature, để Copilot suggest body
function sortByDate(items: Array&lt;{date: string, title: string}&gt;)

// Bài tập 3: Viết test function, để Copilot suggest test cases
describe('sortByDate', () => {
  it('should
</code></pre>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Feature</th>
<th>Mô tả</th>
<th>Khi nào dùng</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Inline Suggestions</strong></td>
<td>Ghost text tự động khi gõ</td>
<td>Code hàng ngày, boilerplate</td>
</tr>
<tr>
<td><strong>Partial Accept</strong></td>
<td>Accept từng word/line</td>
<td>Steer suggestion theo ý muốn</td>
</tr>
<tr>
<td><strong>NES</strong></td>
<td>Predict next edit location</td>
<td>Rename, add params, refactor</td>
</tr>
<tr>
<td><strong>Multi-line</strong></td>
<td>Suggest entire functions</td>
<td>Khi có comment/signature rõ ràng</td>
</tr>
<tr>
<td><strong>Comment-driven</strong></td>
<td>Write comment → get code</td>
<td>Complex logic description</td>
</tr>
</tbody>
</table>

<p>Bài tiếp theo sẽ cover <strong>Inline Chat & Smart Actions</strong> — công cụ mạnh mẽ cho targeted edits và refactoring ngay trong editor.</p>
