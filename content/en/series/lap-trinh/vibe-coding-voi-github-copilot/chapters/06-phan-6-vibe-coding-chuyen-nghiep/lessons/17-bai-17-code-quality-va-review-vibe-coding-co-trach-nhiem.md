---
id: 019f1c30-a601-7001-c001-v1b3c0d10601
title: 'Lesson 17: Code Quality & Review — Vibe Responsible Coding'
slug: bai-17-code-quality-va-review-vibe-coding-co-trach-nhiem
description: >-
  Ensure code quality when using Vibe Coding. Code review AI-generated code.
  Linting, formatting, type safety. Metrics and KPIs. Anti-patterns should be
  avoided. Best practices for code quality in the Vibe Coding workflow.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 17
section_title: 'Part 6: Professional Vibe Coding — Quality, Security & Production'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6972" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6972)"/>

  <!-- Decorations -->
  <g>
    <circle cx="990" cy="120" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="770" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Programming — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 17: Code Quality & Review — Vibe</tspan>
      <tspan x="60" dy="42">Coding responsibly</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 6: Professional Vibe Coding — Quality, Security & Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-van-de-chat-luong"><strong>1. Quality issues in Vibe Coding</strong></h2>

<p>Andrej Karpathy when introducing Vibe Coding said: <em>"I just see things, say things, run things, and copy-paste things, and it mostly works."</em> But <strong>"mostly works"</strong> not enough for production code.</p>

<p>Actual data (2025-2026):</p>
<table>
<thead>
<tr>
<th>Source</th>
<th>Detection</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GitClear (2025)</strong></td>
<td>“Code churn” increases after applying AI — more code is written and then edited/deleted</td>
</tr>
<tr>
<td><strong>VeraCode (2026)</strong></td>
<td>72% of applications using AI-generated code have at least 1 security vulnerability</td>
</tr>
<tr>
<td><strong>CodeRabbit (2026)</strong></td>
<td>AI code review detects bugs that human reviewers miss</td>
</tr>
</tbody>
</table>

<h2 id="2-review-ai-code"><strong>2. How to Review AI-Generated Code</strong></h2>

<h3>2.1. Checklist review for AI code</h3>
<ul>
<li>✅ <strong>Logical correctness</strong>: Does the code do what is required?</li>
<li>✅ <strong>Edge cases</strong>: AI often misses null, empty, boundary cases</li>
<li>✅ <strong>Error handling</strong>: Is catch errors appropriate?</li>
<li>✅ <strong>Security</strong>: Input validation, auth checks, SQL injection</li>
<li>✅ <strong>Performance</strong>: N+1 queries, unnecessary re-renders</li>
<li>✅ <strong>Naming</strong>: Do variables, functions make sense?</li>
<li>✅ <strong>Duplication</strong>: AI often generates instead of reusing existing code</li>
</ul>

<h3>2.2. Use Copilot to review its own code</h3>
<pre><code class="language-text">// Prompt:
Review this code for:
1. Security vulnerabilities
2. Performance issues
3. Edge cases not handled
4. Code that doesn't follow our project conventions
5. Potential bugs

Be critical and thorough. List every issue found.
</code></pre>

<h3>2.3. Anti-patterns are common in AI code</h3>

<table>
<thead>
<tr>
<th>Anti-pattern</th>
<th>For example</th>
<th>Fix</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>God function</strong></td>
<td>One 200 line function that does everything</td>
<td>Split into smaller functions</td>
</tr>
<tr>
<td><strong>Copy-paste the code</strong></td>
<td>Repeat logic instead of extracting</td>
<td>Extract shared utilities</td>
</tr>
<tr>
<td><strong>Hardcoded values</strong></td>
<td>Magic numbers, URLs in code</td>
<td>Move to config/env</td>
</tr>
<tr>
<td><strong>Weak error handling</strong></td>
<td>Silent catch or generic errors</td>
<td>Specific error handling</td>
</tr>
<tr>
<td><strong>Missing validation</strong></td>
<td>Trust user input completely</td>
<td>Validate at boundaries</td>
</tr>
<tr>
<td><strong>Over-engineering</strong></td>
<td>Abstract too early, factory pattern for 1 case</td>
<td>YAGNI — build only when needed</td>
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

<h2 id="4-type-safety"><strong>4. Type Safety — First line of defense</strong></h2>

<p>TypeScript strict mode catches many bugs that AI creates:</p>

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

<p>AI code needed <strong>test more</strong>, not less:</p>

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
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Business logic</strong></td>
<td>90%+</td>
<td>Core domain needs to be accurate</td>
</tr>
<tr>
<td><strong>API endpoints</strong></td>
<td>80%+</td>
<td>Integration tests for contracts</td>
</tr>
<tr>
<td><strong>UI components</strong></td>
<td>70%+</td>
<td>Interaction tests for UX</td>
</tr>
<tr>
<td><strong>Utilities</strong></td>
<td>95%+</td>
<td>Pure functions are easy to test</td>
</tr>
</tbody>
</table>

<h2 id="6-metrics-va-kpis"><strong>6. Metrics & KPIs for Vibe Coding</strong></h2>

<table>
<thead>
<tr>
<th>Metric</th>
<th>What to measure?</th>
<th>Target</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Acceptance rate</strong></td>
<td>% AI suggestions accepted</td>
<td>30-40% (too high = no review)</td>
</tr>
<tr>
<td><strong>Code churn</strong></td>
<td>% code edited/deleted within 2 weeks</td>
<td><25%</td>
</tr>
<tr>
<td><strong>Bug density</strong></td>
<td>Bugs per 1000 LOC</td>
<td>Reduced or kept the same compared to before AI</td>
</tr>
<tr>
<td><strong>Review comments</strong></td>
<td>Number of times reviewers request to fix AI code</td>
<td>Decreases over time</td>
</tr>
<tr>
<td><strong>Time to PR merge</strong></td>
<td>Time from PR creation to merge</td>
<td>Reduced but not because of skipping review</td>
</tr>
</tbody>
</table>

<h2 id="7-best-practices"><strong>7. Summary of Best Practices</strong></h2>

<ol>
<li><strong>Do not accept blindly</strong>: Read EACH AI generated line</li>
<li><strong>Ask AI to explain</strong>: "Explain why you chose this approach"</li>
<li><strong>Test-first when possible</strong>: Write tests first, use AI to implement</li>
<li><strong>Incremental generation</strong>: Generate each small part, review it before continuing</li>
<li><strong>Custom instructions</strong>: Enforce coding standards passed <code>copilot-instructions.md</code></li>
<li><strong>Automated gates</strong>: CI/CD catches bugs that human reviewers miss</li>
<li><strong>Measure quality</strong>: Track metrics to know whether AI is helping or harming</li>
</ol>

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<p><strong>Vibe Coding Responsibly</strong> = take advantage of the speed of AI + maintain the quality of human engineering.</p>

<p>The generated AI code needs to be reviewed <strong>more carefully</strong> human-written code, because:</p>
<ul>
<li>AI does not understand business context</li>
<li>AI prioritizes code that "looks right" over code that "runs right"</li>
<li>AI does not know what code is currently in the project</li>
</ul>

<p>Next article: <strong>Security in Vibe Coding</strong> — common security vulnerabilities and how to avoid them.</p>
