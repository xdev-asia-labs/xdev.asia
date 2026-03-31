---
id: 019f1c30-a104-7001-c001-v1b3c0d10104
title: 'Bài 4: Inline Chat & Smart Actions — Chỉnh sửa code tại chỗ'
slug: bai-4-inline-chat-va-smart-actions
description: >-
  Inline Chat (Cmd+I) cho targeted edits, refactoring, bug fixes.
  Smart Actions: generate commit messages, rename symbols, fix errors,
  semantic search. Quick Fix với Copilot. Tích hợp vào daily workflow.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng Vibe Coding & GitHub Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-inline-chat"><strong>1. Inline Chat — Chỉnh sửa code tại chỗ</strong></h2>

<p><strong>Inline Chat</strong> cho phép bạn mở một prompt nhỏ <strong>ngay trong editor</strong>, mô tả thay đổi bạn muốn, và Copilot sẽ edit code tại chỗ mà không cần chuyển sang Chat view.</p>

<h3>Mở Inline Chat</h3>
<ul>
<li><strong>macOS:</strong> <code>Cmd+I</code></li>
<li><strong>Windows/Linux:</strong> <code>Ctrl+I</code></li>
</ul>

<h3>Workflow cơ bản:</h3>
<ol>
<li>Chọn (select) đoạn code muốn chỉnh sửa (hoặc đặt cursor tại vị trí muốn thêm code)</li>
<li>Nhấn <code>Cmd+I</code></li>
<li>Gõ mô tả thay đổi bằng tiếng Anh/Việt</li>
<li>Review diff hiển thị inline</li>
<li>Nhấn <strong>Accept</strong> hoặc <strong>Discard</strong></li>
</ol>

<h2 id="2-use-cases-inline-chat"><strong>2. Các use case phổ biến của Inline Chat</strong></h2>

<h3>2.1. Thêm error handling</h3>
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

<h3>2.2. Refactor code</h3>
<pre><code class="language-python"># Select block code → Cmd+I → "Refactor to use list comprehension"

# Trước:
result = []
for item in items:
    if item.price > 100:
        result.append(item.name)

# Sau (Copilot suggest):
result = [item.name for item in items if item.price > 100]
</code></pre>

<h3>2.3. Thêm TypeScript types</h3>
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

<h3>2.4. Generate documentation</h3>
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

<h3>2.5. Viết unit test</h3>
<pre><code class="language-typescript">// Select function → Cmd+I → "Generate unit tests using Jest"
// Copilot tự sinh test cases bao gồm happy path, edge cases, error cases
</code></pre>

<h2 id="3-smart-actions"><strong>3. Smart Actions — AI tích hợp vào workflow</strong></h2>

<p>Smart Actions là các hành động AI <strong>được tích hợp sẵn</strong> vào giao diện VS Code, xuất hiện tại đúng nơi bạn cần mà không cần mở chat.</p>

<h3>3.1. Generate Commit Messages</h3>
<ol>
<li>Mở Source Control view (<code>Ctrl+Shift+G</code>)</li>
<li>Stage các changes</li>
<li>Click <strong>sparkle icon ✨</strong> bên cạnh commit message input</li>
<li>Copilot phân tích changes và sinh commit message theo conventional commits</li>
</ol>

<pre><code class="language-text">// Ví dụ generated commit message:
feat(auth): add JWT token refresh mechanism

- Add refreshToken endpoint to AuthController
- Implement token rotation with configurable expiry
- Add middleware to auto-refresh expired tokens
</code></pre>

<h3>3.2. Fix with Copilot (Quick Fix)</h3>
<p>Khi VS Code hiển thị error (squiggly line đỏ):</p>
<ol>
<li>Hover vào error → click <strong>"Quick Fix"</strong></li>
<li>Chọn <strong>"Fix with Copilot"</strong></li>
<li>Copilot đọc error message, phân tích context, và suggest fix</li>
</ol>

<h3>3.3. Explain with Copilot</h3>
<p>Select đoạn code phức tạp → Right-click → <strong>"Copilot" → "Explain This"</strong></p>
<p>Copilot giải thích code bằng ngôn ngữ tự nhiên, rất hữu ích khi đọc code của người khác hoặc AI-generated code.</p>

<h3>3.4. Generate Tests</h3>
<p>Right-click vào function → <strong>"Copilot" → "Generate Tests"</strong></p>
<p>Copilot tự động tạo test file với các test cases phù hợp framework của project (Jest, Pytest, Go testing...).</p>

<h3>3.5. Fix Test Failure</h3>
<p>Khi test fail trong Test Explorer:</p>
<ol>
<li>Click vào failed test</li>
<li>Chọn <strong>"Fix with Copilot"</strong></li>
<li>Copilot đọc test failure message, tìm root cause, và suggest fix cho code (không phải fix test)</li>
</ol>

<h2 id="4-semantic-search"><strong>4. Semantic Search trong VS Code</strong></h2>

<p>Copilot cung cấp <strong>semantic search</strong> — tìm kiếm theo ý nghĩa, không chỉ text matching:</p>

<pre><code class="language-text">// Traditional search: tìm "authenticate"
// Kết quả: chỉ những chỗ có chính xác từ "authenticate"

// Semantic search: tìm "user login process"
// Kết quả: authenticate(), verifyCredentials(), signIn(), checkPassword()
// → Tìm được code liên quan dù không match exact text
</code></pre>

<h2 id="5-inline-chat-vs-agent-vs-chat"><strong>5. Khi nào dùng Inline Chat vs Agent vs Chat?</strong></h2>

<table>
<thead>
<tr>
<th>Tính năng</th>
<th>Khi nào dùng</th>
<th>Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Inline Suggestions</strong></td>
<td>Code flow không gián đoạn</td>
<td>Dòng/block hiện tại</td>
</tr>
<tr>
<td><strong>Inline Chat</strong></td>
<td>Edit cụ thể, refactor, add docs</td>
<td>Selected code hoặc vị trí cursor</td>
</tr>
<tr>
<td><strong>Chat View (Ask)</strong></td>
<td>Hỏi đáp, explain, brainstorm</td>
<td>Không thay đổi code</td>
</tr>
<tr>
<td><strong>Agent Mode</strong></td>
<td>Build features, multi-file changes</td>
<td>Toàn bộ project</td>
</tr>
</tbody>
</table>

<pre><code class="language-text">Scope nhỏ → lớn:
Inline Suggestions → Inline Chat → Chat (Ask) → Agent Mode
     (line)          (selection)      (Q&A)       (project)
</code></pre>

<h2 id="6-tips-inline-chat-hieu-qua"><strong>6. Tips để Inline Chat hiệu quả</strong></h2>

<ul>
<li><strong>Select chính xác</strong>: chọn đúng đoạn code cần edit, không thừa không thiếu</li>
<li><strong>Mô tả rõ ràng</strong>: "Add input validation for email and phone" tốt hơn "validate this"</li>
<li><strong>Một thay đổi mỗi lần</strong>: chia nhỏ thay đổi lớn thành nhiều Inline Chat nhỏ</li>
<li><strong>Dùng code terminology</strong>: "Extract to a helper function" thay vì "make this separate"</li>
<li><strong>Review trước khi Accept</strong>: đọc diff kỹ, đặc biệt logic thay đổi</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. Bài tập thực hành</strong></h2>

<p>Tạo file <code>smart-actions-practice.ts</code>:</p>

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

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<p>Inline Chat và Smart Actions là công cụ <strong>precision editing</strong> — cho phép bạn:</p>
<ul>
<li>✅ Refactor code nhanh chóng</li>
<li>✅ Thêm error handling, types, docs chỉ bằng một prompt</li>
<li>✅ Fix bugs với context đầy đủ</li>
<li>✅ Generate commit messages thông minh</li>
<li>✅ Giữ được flow coding mà không chuyển context</li>
</ul>

<p>Ở phần tiếp theo (<strong>Phần 2</strong>), chúng ta sẽ đi vào tính năng mạnh mẽ nhất của Copilot — <strong>Agent Mode</strong>, nơi AI tự động viết code, tạo files, chạy commands và build tính năng hoàn chỉnh.</p>
