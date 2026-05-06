---
id: 019f1c30-a104-7001-c001-v1b3c0d10104
title: 'Lesson 4: Inline Chat & Smart Actions — Edit code on the spot'
slug: bai-4-inline-chat-va-smart-actions
description: >-
  Inline Chat (Cmd+I) for targeted edits, refactoring, bug fixes. Smart Actions:
  generate commit messages, rename symbols, fix errors, semantic search. Quick
  Fix with Copilot. Integrate into daily workflow.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 1: Vibe Coding Platform & GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 Programming — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Inline Chat & Smart Actions — Edit</tspan>
      <tspan x="60" dy="42">Edit code in place</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Vibe Coding Platform & GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-inline-chat"><strong>1. Inline Chat — Edit code on the spot</strong></h2>

<p><strong>Inline Chat</strong> allows you to open a small prompt <strong>right in the editor</strong>, describe the change you want, and Copilot will edit the code in place without switching to Chat view.</p>

<h3>Open Inline Chat</h3>
<ul>
<li><strong>macOS:</strong> <code>Cmd+I</code></li>
<li><strong>Windows/Linux:</strong> <code>Ctrl+I</code></li>
</ul>

<h3>Basic workflow:</h3>
<ol>
<li>Select (select) the code you want to edit (or place the cursor at the location where you want to add the code)</li>
<li>Press <code>Cmd+I</code></li>
<li>Type a change description in English/Vietnamese</li>
<li>Review diff displays inline</li>
<li>Press <strong>Accept</strong> or <strong>Discard</strong></li>
</ol>

<h2 id="2-use-cases-inline-chat"><strong>2. Common use cases of Inline Chat</strong></h2>

<h3>2.1. Add error handling</h3>
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

<h3>2.3. Add TypeScript types</h3>
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

<h3>2.5. Write unit tests</h3>
<pre><code class="language-typescript">// Select function → Cmd+I → "Generate unit tests using Jest"
// Copilot tự sinh test cases bao gồm happy path, edge cases, error cases
</code></pre>

<h2 id="3-smart-actions"><strong>3. Smart Actions — AI integrated into workflow</strong></h2>

<p>Smart Actions are AI actions <strong>is built in</strong> Enter the VS Code interface, appearing right where you need it without having to open chat.</p>

<h3>3.1. Generate Commit Messages</h3>
<ol>
<li>Open Source Control view (<code>Ctrl+Shift+G</code>)</li>
<li>Stage the changes</li>
<li>Click <strong>sparkle icon ✨</strong> next to the commit message input</li>
<li>Copilot analyzes changes and generates commit messages according to conventional commits</li>
</ol>

<pre><code class="language-text">// Ví dụ generated commit message:
feat(auth): add JWT token refresh mechanism

- Add refreshToken endpoint to AuthController
- Implement token rotation with configurable expiry
- Add middleware to auto-refresh expired tokens
</code></pre>

<h3>3.2. Fix with Copilot (Quick Fix)</h3>
<p>When VS Code displays an error (squiggly red line):</p>
<ol>
<li>Hover on error → click <strong>"Quick Fix"</strong></li>
<li>Select <strong>"Fix with Copilot"</strong></li>
<li>Copilot reads error messages, analyzes context, and suggests fixes</li>
</ol>

<h3>3.3. Explain with Copilot</h3>
<p>Select complex code → Right-click → <strong>"Copilot" → "Explain This"</strong></p>
<p>Copilot explains code in natural language, which is useful when reading other people's code or AI-generated code.</p>

<h3>3.4. Generate Tests</h3>
<p>Right-click on function → <strong>"Copilot" → "Generate Tests"</strong></p>
<p>Copilot automatically creates test files with test cases that match the project's framework (Jest, Pytest, Go testing...).</p>

<h3>3.5. Fix Test Failure</h3>
<p>When a test fails in Test Explorer:</p>
<ol>
<li>Click on failed test</li>
<li>Select <strong>"Fix with Copilot"</strong></li>
<li>Copilot reads the test failure message, finds the root cause, and suggests a fix for the code (not a test fix)</li>
</ol>

<h2 id="4-semantic-search"><strong>4. Semantic Search in VS Code</strong></h2>

<p>Copilot provided <strong>semantic search</strong> — search by meaning, not just text matching:</p>

<pre><code class="language-text">// Traditional search: tìm "authenticate"
// Kết quả: chỉ những chỗ có chính xác từ "authenticate"

// Semantic search: tìm "user login process"
// Kết quả: authenticate(), verifyCredentials(), signIn(), checkPassword()
// → Tìm được code liên quan dù không match exact text
</code></pre>

<h2 id="5-inline-chat-vs-agent-vs-chat"><strong>5. When to use Inline Chat vs Agent vs Chat?</strong></h2>

<table>
<thead>
<tr>
<th>Features</th>
<th>When to use</th>
<th>Scope</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Inline Suggestions</strong></td>
<td>Code flow is uninterrupted</td>
<td>Current line/block</td>
</tr>
<tr>
<td><strong>Inline Chat</strong></td>
<td>Edit specifically, refactor, add docs</td>
<td>Selected code or cursor position</td>
</tr>
<tr>
<td><strong>Chat View (Ask)</strong></td>
<td>Q&A, explain, brainstorm</td>
<td>Do not change the code</td>
</tr>
<tr>
<td><strong>Agent Mode</strong></td>
<td>Build features, multi-file changes</td>
<td>Entire project</td>
</tr>
</tbody>
</table>

<pre><code class="language-text">Scope nhỏ → lớn:
Inline Suggestions → Inline Chat → Chat (Ask) → Agent Mode
     (line)          (selection)      (Q&A)       (project)
</code></pre>

<h2 id="6-tips-inline-chat-hieu-qua"><strong>6. Tips for effective Inline Chat</strong></h2>

<ul>
<li><strong>Select correctly</strong>: choose the correct piece of code to edit, neither redundant nor missing</li>
<li><strong>Clear description</strong>: "Add input validation for email and phone" is better than "validate this"</li>
<li><strong>One change at a time</strong>: break down a large change into many small Inline Chats</li>
<li><strong>Use code terminology</strong>: "Extract to a helper function" instead of "make this separate"</li>
<li><strong>Review before Accepting</strong>: read the diff carefully, especially the change logic</li>
</ul>

<h2 id="7-thuc-hanh"><strong>7. Practice exercises</strong></h2>

<p>Create files <code>smart-actions-practice.ts</code>:</p>

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

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<p>Inline Chat and Smart Actions are tools <strong>precision editing</strong> — allows you to:</p>
<ul>
<li>✅ Refactor code quickly</li>
<li>✅ Add error handling, types, docs with just one prompt</li>
<li>✅ Fix bugs with full context</li>
<li>✅ Generate commit messages intelligently</li>
<li>✅ Maintain coding flow without switching context</li>
</ul>

<p>In the next section (<strong>Part 2</strong>), we'll get into Copilot's most powerful feature — <strong>Agent Mode</strong>, where AI automatically writes code, creates files, runs commands and builds complete features.</p>
