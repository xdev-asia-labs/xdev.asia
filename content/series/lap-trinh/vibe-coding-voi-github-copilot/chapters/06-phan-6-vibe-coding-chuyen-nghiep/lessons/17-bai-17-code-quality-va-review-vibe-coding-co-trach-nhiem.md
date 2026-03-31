---
id: 019f1c30-a601-7001-c001-v1b3c0d10601
title: 'Bài 17: Code Quality & Review — Vibe Coding có trách nhiệm'
slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
description: >-
  Đảm bảo chất lượng code khi dùng Vibe Coding. Code review AI-generated code.
  Linting, formatting, type safety. Metrics và KPIs. Anti-patterns cần tránh.
  Best practices cho code quality trong Vibe Coding workflow.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 17
section_title: "Phần 6: Vibe Coding chuyên nghiệp — Quality, Security & Production"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-van-de-chat-luong"><strong>1. Vấn đề chất lượng trong Vibe Coding</strong></h2>

<p>Andrej Karpathy khi giới thiệu Vibe Coding đã nói: <em>"I just see things, say things, run things, and copy-paste things, and it mostly works."</em> Nhưng <strong>"mostly works"</strong> không đủ cho production code.</p>

<p>Dữ liệu thực tế (2025-2026):</p>
<table>
<thead>
<tr>
<th>Nguồn</th>
<th>Phát hiện</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GitClear (2025)</strong></td>
<td>"Code churn" tăng sau khi áp dụng AI — code viết ra rồi sửa/xóa nhiều hơn</td>
</tr>
<tr>
<td><strong>VeraCode (2026)</strong></td>
<td>72% ứng dụng dùng AI-generated code có ít nhất 1 lỗ hổng bảo mật</td>
</tr>
<tr>
<td><strong>CodeRabbit (2026)</strong></td>
<td>AI code review phát hiện bugs mà human reviewers bỏ sót</td>
</tr>
</tbody>
</table>

<h2 id="2-review-ai-code"><strong>2. Cách Review AI-Generated Code</strong></h2>

<h3>2.1. Checklist review cho AI code</h3>
<ul>
<li>✅ <strong>Logic correctness</strong>: Code có làm đúng yêu cầu không?</li>
<li>✅ <strong>Edge cases</strong>: AI thường bỏ sót null, empty, boundary cases</li>
<li>✅ <strong>Error handling</strong>: Có catch errors phù hợp không?</li>
<li>✅ <strong>Security</strong>: Input validation, auth checks, SQL injection</li>
<li>✅ <strong>Performance</strong>: N+1 queries, unnecessary re-renders</li>
<li>✅ <strong>Naming</strong>: Variables, functions có ý nghĩa không?</li>
<li>✅ <strong>Duplication</strong>: AI thường generate thay vì reuse code có sẵn</li>
</ul>

<h3>2.2. Dùng Copilot để review chính code của nó</h3>
<pre><code class="language-text">// Prompt:
Review this code for:
1. Security vulnerabilities
2. Performance issues
3. Edge cases not handled
4. Code that doesn't follow our project conventions
5. Potential bugs

Be critical and thorough. List every issue found.
</code></pre>

<h3>2.3. Anti-patterns phổ biến trong AI code</h3>

<table>
<thead>
<tr>
<th>Anti-pattern</th>
<th>Ví dụ</th>
<th>Fix</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>God function</strong></td>
<td>Một hàm 200 dòng làm mọi thứ</td>
<td>Split thành smaller functions</td>
</tr>
<tr>
<td><strong>Copy-paste code</strong></td>
<td>Lặp lại logic thay vì extract</td>
<td>Extract shared utilities</td>
</tr>
<tr>
<td><strong>Hardcoded values</strong></td>
<td>Magic numbers, URLs trong code</td>
<td>Move to config/env</td>
</tr>
<tr>
<td><strong>Weak error handling</strong></td>
<td>Silent catch hoặc generic errors</td>
<td>Specific error handling</td>
</tr>
<tr>
<td><strong>Missing validation</strong></td>
<td>Trust user input hoàn toàn</td>
<td>Validate at boundaries</td>
</tr>
<tr>
<td><strong>Over-engineering</strong></td>
<td>Abstract quá sớm, factory pattern cho 1 case</td>
<td>YAGNI — chỉ build khi cần</td>
</tr>
</tbody>
</table>

<h2 id="3-automated-quality"><strong>3. Automated Quality Gates</strong></h2>

<h3>3.1. ESLint + Prettier + Copilot Hooks</h3>
<pre><code class="language-json">// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "github.copilot.chat.hooks": {
    "postSave": [
      {
        "command": "npx eslint --fix ${file}",
        "pattern": "**/*.{ts,tsx}"
      }
    ]
  }
}
</code></pre>

<h3>3.2. Pre-commit hooks</h3>
<pre><code class="language-json">// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  }
}
</code></pre>

<h3>3.3. CI/CD quality checks</h3>
<pre><code class="language-yaml"># .github/workflows/quality.yml
name: Code Quality
on: [pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx tsc --noEmit          # Type check
      - run: npx eslint .              # Lint
      - run: npm test -- --coverage    # Tests + coverage
      - run: npx knip                  # Dead code detection
</code></pre>

<h2 id="4-type-safety"><strong>4. Type Safety — Tuyến phòng thủ đầu tiên</strong></h2>

<p>TypeScript strict mode bắt nhiều bugs mà AI tạo ra:</p>

<pre><code class="language-json">// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
</code></pre>

<pre><code class="language-text">// Prompt mẫu yêu cầu type safety:
Ensure all functions have explicit return types.
Use discriminated unions for API responses.
No 'any' types — use 'unknown' with type guards instead.
</code></pre>

<h2 id="5-test-coverage"><strong>5. Test Coverage Strategy</strong></h2>

<p>AI code cần <strong>test nhiều hơn</strong>, không phải ít hơn:</p>

<pre><code class="language-text">// Prompt:
Write tests for the TaskService focusing on:
1. Happy path for each method
2. Edge cases: empty input, null values, max length
3. Authorization: user can only access own projects
4. Concurrent modifications
5. Database constraint violations
</code></pre>

<h3>Minimum coverage targets:</h3>
<table>
<thead>
<tr>
<th>Layer</th>
<th>Target</th>
<th>Lý do</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Business logic</strong></td>
<td>90%+</td>
<td>Core domain cần chính xác</td>
</tr>
<tr>
<td><strong>API endpoints</strong></td>
<td>80%+</td>
<td>Integration tests cho contracts</td>
</tr>
<tr>
<td><strong>UI components</strong></td>
<td>70%+</td>
<td>Interaction tests cho UX</td>
</tr>
<tr>
<td><strong>Utilities</strong></td>
<td>95%+</td>
<td>Pure functions dễ test</td>
</tr>
</tbody>
</table>

<h2 id="6-metrics-va-kpis"><strong>6. Metrics & KPIs cho Vibe Coding</strong></h2>

<table>
<thead>
<tr>
<th>Metric</th>
<th>Đo gì</th>
<th>Target</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Acceptance rate</strong></td>
<td>% AI suggestions được accept</td>
<td>30-40% (quá cao = không review)</td>
</tr>
<tr>
<td><strong>Code churn</strong></td>
<td>% code sửa/xóa trong 2 tuần</td>
<td>&lt;25%</td>
</tr>
<tr>
<td><strong>Bug density</strong></td>
<td>Bugs per 1000 LOC</td>
<td>Giảm hoặc giữ nguyên so với trước AI</td>
</tr>
<tr>
<td><strong>Review comments</strong></td>
<td>Số lần reviewer yêu cầu sửa AI code</td>
<td>Giảm theo thời gian</td>
</tr>
<tr>
<td><strong>Time to PR merge</strong></td>
<td>Thời gian từ tạo PR đến merge</td>
<td>Giảm nhưng không vì skip review</td>
</tr>
</tbody>
</table>

<h2 id="7-best-practices"><strong>7. Best Practices tổng hợp</strong></h2>

<ol>
<li><strong>Không accept blindly</strong>: Đọc TỪNG dòng AI generate</li>
<li><strong>Yêu cầu AI giải thích</strong>: "Explain why you chose this approach"</li>
<li><strong>Test-first khi có thể</strong>: Viết test trước, dùng AI implement</li>
<li><strong>Incremental generation</strong>: Generate từng phần nhỏ, review xong mới tiếp</li>
<li><strong>Custom instructions</strong>: Enforce coding standards qua <code>copilot-instructions.md</code></li>
<li><strong>Automated gates</strong>: CI/CD bắt bugs mà human review bỏ sót</li>
<li><strong>Measure quality</strong>: Track metrics để biết AI đang giúp hay hại</li>
</ol>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<p><strong>Vibe Coding có trách nhiệm</strong> = tận dụng tốc độ của AI + giữ chất lượng của human engineering.</p>

<p>Code AI sinh ra cần được review <strong>kỹ hơn</strong> code con người viết, vì:</p>
<ul>
<li>AI không hiểu business context</li>
<li>AI ưu tiên code "trông đúng" hơn code "chạy đúng"</li>
<li>AI không biết code hiện tại trong project đã có sẵn gì</li>
</ul>

<p>Bài tiếp theo: <strong>Security trong Vibe Coding</strong> — những lỗ hổng bảo mật phổ biến và cách phòng tránh.</p>
