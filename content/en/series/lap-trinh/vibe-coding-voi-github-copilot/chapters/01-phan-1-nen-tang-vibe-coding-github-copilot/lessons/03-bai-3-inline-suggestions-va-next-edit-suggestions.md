---
id: 019f1c30-a103-7001-c001-v1b3c0d10103
title: 'Lesson 3: Inline Suggestions & Next Edit Suggestions — Smart code suggestions'
slug: bai-3-inline-suggestions-va-next-edit-suggestions
description: >-
  Ghost text completions, tab to accept, cycle suggestions, multi-line
  completions. Next Edit Suggestions (NES) — predict the next edit. Navigating
  suggestions, partial acceptance, keyboard shortcuts. Tips to optimize the
  quality of suggestions.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Vibe Coding Platform & GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Inline Suggestions & Next Edit</tspan>
      <tspan x="60" dy="42">Suggestions — Smart code suggestions</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Vibe Coding Platform & GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-inline-suggestions-la-gi"><strong>1. What are Inline Suggestions?</strong></h2>

<p>Inline Suggestions (Ghost Text) is a core feature of GitHub Copilot — as you type code, Copilot automatically suggests the next section of code in the form of <strong>ghost text</strong> displayed right in the editor.</p>

<pre><code class="language-text">Bạn gõ:    function calculateTax(income) {
Ghost text: ░░ const taxRate = income > 50000 ? 0.3 : 0.2;
            ░░ return income * taxRate;
            ░░}
</code></pre>

<p>Copilot analysis <strong>context</strong> around to make suitable suggestions:</p>
<ul>
<li>File name, programming language</li>
<li>Comments above the current line</li>
<li>Code written in file</li>
<li>Other files are open in the editor</li>
<li>Import statements, function signatures</li>
</ul>

<h2 id="2-thao-tac-voi-suggestions"><strong>2. Working with Inline Suggestions</strong></h2>

<h3>2.1. Accept & Reject</h3>
<table>
<thead>
<tr>
<th>Operation</th>
<th>Shortcuts macOS</th>
<th>Shortcuts Windows/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accept all suggestions</td>
<td><code>Tab</code></td>
<td><code>Tab</code></td>
</tr>
<tr>
<td>Reject suggestions</td>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
</tr>
<tr>
<td>Accept each word</td>
<td><code>Cmd+→</code></td>
<td><code>Ctrl+→</code></td>
</tr>
<tr>
<td>Accept each line</td>
<td><code>Cmd+Shift+→</code></td>
<td><code>Ctrl+Shift+→</code></td>
</tr>
</tbody>
</table>

<h3>2.2. Cycle through many Suggestions</h3>
<p>Copilot often has many different suggestions. Hover over ghost text to see navigation controls:</p>

<table>
<thead>
<tr>
<th>Operation</th>
<th>Shortcuts macOS</th>
<th>Shortcuts Windows/Linux</th>
</tr>
</thead>
<tbody>
<tr>
<td>Suggestion next</td>
<td><code>Option+]</code></td>
<td><code>Alt+]</code></td>
</tr>
<tr>
<td>Suggestion first</td>
<td><code>Option+[</code></td>
<td><code>Alt+[</code></td>
</tr>
</tbody>
</table>

<h3>2.3. Partial Accept — Important technique</h3>
<p><strong>Partial acceptance</strong> allows you to take only part of the suggestion, then continue typing to have Copilot re-suggest in the direction you want:</p>

<pre><code class="language-typescript">// Ghost text suggest: const result = data.filter(item => item.active).map(item => item.name);
// Bạn accept "const result = data.filter(" bằng Cmd+→ vài lần
// Rồi gõ tiếp: item => item.price > 100
// Copilot sẽ suggest phần còn lại phù hợp với logic mới
</code></pre>

<p>This is technical <strong>steering. steering</strong> — guide the AI to your liking instead of blind acceptance.</p>

<h2 id="3-next-edit-suggestions"><strong>3. Next Edit Suggestions (NES)</strong></h2>

<p>NES is more advanced — Copilot <strong>predict where you need to edit next</strong> based on the change you just made.</p>

<h3>For example: Rename variable</h3>
<pre><code class="language-javascript">// Bạn vừa đổi tên biến ở dòng 5: userName → displayName
// NES tự động highlight và suggest đổi tên ở dòng 12, 18, 25

// Dòng 5:  const displayName = user.name;     ← bạn vừa edit
// Dòng 12: console.log(displayName);          ← NES suggest edit này
//                       ^^^^^^^^^^^
// Nhấn Tab để accept, Copilot tự nhảy đến dòng tiếp theo cần edit
</code></pre>

<h3>Example: Add parameter</h3>
<pre><code class="language-python"># Bạn vừa thêm parameter 'currency' vào function definition
def format_price(amount, currency):   # ← vừa thêm currency
    # NES suggest cập nhật body function để sử dụng currency
    return f"{currency} {amount:,.2f}"

# NES cũng suggest cập nhật tất cả function calls
format_price(100, "USD")  # ← NES suggest thêm argument
</code></pre>

<h3>Turn on NES</h3>
<pre><code class="language-json">{
  "editor.inlineSuggest.edits.enabled": true
}
</code></pre>

<h2 id="4-multi-line-completions"><strong>4. Multi-line Completions</strong></h2>

<p>Copilot can suggest entire functions, classes, or blocks of code:</p>

<pre><code class="language-typescript">// Bạn gõ comment mô tả:
// Function to validate email address using regex

// Copilot suggest toàn bộ function:
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
</code></pre>

<h3>Tips for better multi-line suggestions:</h3>
<ul>
<li><strong>Write clearly descriptive comments</strong> before pressing Enter</li>
<li><strong>Name the function/variable meaningfully</strong> — Copilot reads names to understand intent</li>
<li><strong>Open the related file</strong> — Copilot uses context from open tabs</li>
<li><strong>Write tests first</strong> — Copilot reads the test to understand expected behavior</li>
</ul>

<h2 id="5-comment-driven-development"><strong>5. Comment-Driven Development</strong></h2>

<p>An effective pattern for Vibe Coding with Inline Suggestions:</p>

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

<h2 id="6-context-bo-sung"><strong>6. Optimize context for better suggestions</strong></h2>

<h3>6.1. Open files are affected by suggestions</h3>
<p>Copilot looks at the word context <strong>open tabs</strong>. Open related files so Copilot understands the codebase:</p>

<pre><code class="language-text">Tab 1: models/User.ts          ← Copilot biết User schema
Tab 2: services/UserService.ts ← Đang viết, suggest dựa trên User model
Tab 3: tests/user.test.ts      ← Copilot hiểu expected behavior
</code></pre>

<h3>6.2. Import statements are good context</h3>
<pre><code class="language-python"># Viết imports trước → Copilot biết bạn dùng thư viện nào
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

# Bây giờ Copilot sẽ suggest code theo FastAPI patterns
</code></pre>

<h3>6.3. Type annotations give more precise suggestions</h3>
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

<h2 id="7-khi-nao-inline-suggestions-khong-hieu-qua"><strong>7. When are Inline Suggestions not effective?</strong></h2>

<ul>
<li><strong>Complex, domain-specific logic</strong> — use Chat/Agent instead</li>
<li><strong>No context</strong> — new file is empty, no imports/comments</li>
<li><strong>The code was written in the wrong pattern</strong> — Copilot will continue the wrong pattern</li>
<li><strong>Cross-file dependencies</strong> — Copilot has a limited context window</li>
</ul>

<p><strong>Rule of thumb:</strong> Inline Suggestions are suitable for <strong>single-file, incremental edits</strong>. For multi-file features, use <strong>Agent Mode</strong> (Lesson 5).</p>

<h2 id="8-thuc-hanh"><strong>8. Practice exercises</strong></h2>

<p>Create files <code>practice.ts</code> and practice:</p>

<ol>
<li>Write a comment describing the function → press Enter → accept suggestion</li>
<li>Type function signature → let Copilot suggest body</li>
<li>Try partial accept (Cmd+→) to steer suggestions</li>
<li>Cycle through multiple suggestions (Option+]/[)</li>
<li>Rename a variable → observe NES suggested edits elsewhere</li>
</ol>

<pre><code class="language-typescript">// Bài tập 1: Viết comment, nhấn Enter
// Function to convert temperature from Celsius to Fahrenheit

// Bài tập 2: Viết signature, để Copilot suggest body
function sortByDate(items: Array&lt;{date: string, title: string}&gt;)

// Bài tập 3: Viết test function, để Copilot suggest test cases
describe('sortByDate', () => {
  it('should
</code></pre>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<table>
<thead>
<tr>
<th>Features</th>
<th>Description</th>
<th>When to use</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Inline Suggestions</strong></td>
<td>Ghost text automatically when typing</td>
<td>Daily code, boilerplate</td>
</tr>
<tr>
<td><strong>Partial Accept</strong></td>
<td>Accept each word/line</td>
<td>Steer suggestions as desired</td>
</tr>
<tr>
<td><strong>NES</strong></td>
<td>Predict next edit location</td>
<td>Rename, add params, refactor</td>
</tr>
<tr>
<td><strong>Multi-line</strong></td>
<td>Suggest entire functions</td>
<td>When there is a clear comment/signature</td>
</tr>
<tr>
<td><strong>Comment-driven</strong></td>
<td>Write comment → get code</td>
<td>Complex logic description</td>
</tr>
</tbody>
</table>

<p>The next song will be a cover <strong>Inline Chat & Smart Actions</strong> — powerful tools for targeted edits and refactoring right in the editor.</p>
