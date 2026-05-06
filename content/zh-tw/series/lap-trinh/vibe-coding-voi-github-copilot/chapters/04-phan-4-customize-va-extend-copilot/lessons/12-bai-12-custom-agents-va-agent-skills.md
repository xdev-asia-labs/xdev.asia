---
id: 019f1c30-a402-7001-c001-v1b3c0d10402
title: 第 12 課：自訂代理程式和代理程式技能 — 創建專門的 AI
slug: bai-12-custom-agents-va-agent-skills
description: >-
  建立自訂代理程式 (.agent.md)：角色、工具、說明。 YAML 的前沿內容。代理技能
  (SKILL.md)：可重複使用的領域知識。例如：程式碼審閱者代理程式、文件編寫者代理程式、測試生成器代理程式。透過 .github/agents/
  在團隊內共用代理程式。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：自訂和擴充 Copilot
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級
  slug: vibe-coding-voi-github-copilot
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6223" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6223)"/>

  <!-- Decorations -->
  <g>
    <circle cx="872" cy="226" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="644" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="916" cy="270" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="688" cy="162" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="54" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.507041555162,185.5 1041.507041555162,226.5 1006,247 970.492958444838,226.5 970.492958444838,185.5 1006,165" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：自訂代理程式和代理程式技能 — 創建</tspan>
      <tspan x="60" dy="42">專業人工智慧</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 GitHub Copilot 進行 Vibe 編碼：從基礎知識到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：自訂和擴充 Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-custom-agents-la-gi"><strong>1. 什麼是定制代理？</strong></h2>

<p>自訂代理程式可讓您創建 <strong>專門的人工智慧角色</strong> 用於特定任務。每個代理有：</p>

<ul>
<li><strong>角色</strong>：特定角色（審閱者、測試者、文件者）</li>
<li><strong>工具</strong>：允許使用的工具列表</li>
<li><strong>使用說明</strong>：行為的詳細說明</li>
<li><strong>型號</strong>：可指定具體型號（可選）</li>
</ul>

<h2 id="2-tao-custom-agent"><strong>2. 建立自訂代理</strong></h2>

<h3>2.1.文件結構</h3>
<p>自訂代理是文件 <code>.agent.md</code> 放入 <code>.github/代理/</code>：</p>

<pre><code class="language-text">project/
├── .github/
│   └── agents/
│       ├── Reviewer.agent.md
│       ├── TestWriter.agent.md
│       ├── DocWriter.agent.md
│       └── Architect.agent.md
</code></pre>

<h3>2.2. .agent.md 檔案結構</h3>
<pre><code class="language-markdown">---
name: 'AgentName'
description: 'Mô tả ngắn về agent'
tools: ['tool1', 'tool2', ...]
---
# System Instructions

Chi tiết hướng dẫn cho agent...
</code></pre>

<h2 id="3-vi-du-custom-agents"><strong>3. 現實的自訂代理範例</strong></h2>

<h3>3.1.代碼審查代理</h3>
<pre><code class="language-markdown">&lt;!-- .github/agents/Reviewer.agent.md --&gt;
---
name: 'Reviewer'
description: 'Senior code reviewer - phân tích code quality và best practices'
tools: ['vscode/askQuestions', 'vscode/vscodeAPI', 'read', 'agent', 'search', 'web']
---
# Code Reviewer Agent

You are an experienced senior developer conducting thorough code reviews.
Your role is to review code for quality, best practices, and adherence
to [project standards](../copilot-instructions.md) WITHOUT making code changes.

## Review Checklist
1. **Security**: Check for injection, auth flaws, secrets exposure
2. **Performance**: N+1 queries, unnecessary re-renders, memory leaks
3. **Error handling**: Missing try-catch, unhandled promises
4. **Type safety**: Any usage of `any`, missing types
5. **Testing**: Coverage gaps, missing edge cases
6. **Naming**: Clear, consistent naming following conventions
7. **DRY**: Code duplication that should be extracted

## Output Format
Structure your review with:
- 🔴 **Critical**: Must fix before merge
- 🟡 **Warning**: Should fix, but not blocking
- 🟢 **Suggestion**: Nice-to-have improvements
- 💡 **Note**: Observations and learning points

## Important
- DO NOT write or modify code
- Ask clarifying questions about design decisions
- Explain WHY something is a problem, not just WHAT
</code></pre>

<h3>3.2.測試編寫代理</h3>
<pre><code class="language-markdown">&lt;!-- .github/agents/TestWriter.agent.md --&gt;
---
name: 'TestWriter'
description: 'Chuyên gia viết tests - unit, integration, E2E'
tools: ['read', 'editFile', 'search', 'runInTerminal', 'getErrors']
---
# Test Writer Agent

You are a testing expert specializing in writing comprehensive tests.

## Testing Strategy
- **Unit tests**: For pure functions, utilities, services
- **Integration tests**: For API endpoints, database operations
- **Component tests**: For React components with user interactions

## Conventions
- Framework: Vitest (follow existing test patterns)
- Place test files alongside source: `component.test.tsx`
- Use `describe` blocks for grouping, `it` for individual tests
- Use meaningful test names: "should [action] when [condition]"
- Always include: happy path, edge cases, error scenarios

## Test Patterns
- Arrange → Act → Assert
- One assertion per test (preferred)
- Mock external dependencies, not internal logic
- Use factories for test data, not hardcoded values

## Before writing tests:
1. Read the source code thoroughly
2. Identify all code paths and branches
3. Check existing tests for patterns
4. Write tests, run them, fix any failures
</code></pre>

<h3>3.3.建築師代理</h3>
<pre><code class="language-markdown">&lt;!-- .github/agents/Architect.agent.md --&gt;
---
name: 'Architect'
description: 'Solution architect - thiết kế kiến trúc và đánh giá technical decisions'
tools: ['read', 'search', 'web', 'vscode/askQuestions', 'agent']
---
# Architect Agent

You are a senior solution architect who evaluates technical decisions
and designs system architecture.

## Responsibilities
- Analyze requirements and propose architecture
- Evaluate trade-offs between approaches
- Create technical design documents
- Review architectural decisions for scalability and maintainability

## When proposing solutions:
1. List at least 2-3 alternative approaches
2. Compare with pros/cons table
3. Consider: scalability, maintainability, cost, team expertise
4. Recommend with clear reasoning
5. Identify risks and mitigation strategies

## Output includes:
- Architecture diagram (text-based or mermaid)
- Component responsibilities
- Data flow description
- Technology choices with rationale
- Phase-by-phase implementation plan
</code></pre>

<h2 id="4-agent-skills"><strong>4. 代理技能（SKILL.md）</strong></h2>

<p>代理技能是 <strong>領域知識模組</strong> 可以被多個代理重複使用。每个技能都是一个文件 <code>技能.md</code>。</p>

<h3>4.1.創造技能</h3>
<pre><code class="language-markdown">&lt;!-- .github/skills/database-migration/SKILL.md --&gt;
---
name: 'Database Migration'
description: 'Best practices cho Prisma database migrations'
---
# Database Migration Skill

## Migration Checklist
1. Always create migration with descriptive name
2. Test migration on staging data before production
3. Include rollback strategy for every migration
4. Never modify existing migrations after push
5. Use `prisma migrate diff` to review changes

## Common Patterns
- Adding nullable column: safe, no downtime
- Renaming column: 3-step migration (add new → copy data → drop old)
- Adding index: use `CREATE INDEX CONCURRENTLY` for large tables

## Commands
```bash
# Create migration
npx prisma migrate dev --name add_user_roles

# Apply to production
npx prisma migrate deploy

# Reset (development only!)
npx prisma migrate reset
```
</code></pre>

<h3>4.2.代理參考技能</h3>
<pre><code class="language-markdown">&lt;!-- Trong custom agent, reference skills: --&gt;
---
name: 'DBAdmin'
description: 'Database administration agent'
tools: ['read', 'editFile', 'runInTerminal']
---
# DB Admin Agent

Follow the practices defined in [Database Migration Skill](../skills/database-migration/SKILL.md).
</code></pre>

<h2 id="5-su-dung-custom-agents"><strong>5.使用自訂代理</strong></h2>

<ol>
<li>開啟聊天視圖 (<code>Ctrl+Cmd+I</code>）</li>
<li>點選代理下拉選單（預設“代理”）</li>
<li>選擇您建立的自訂代理程式（審閱者、測試編寫者等）</li>
<li>像往常一樣提示 - 代理將遵循角色和指示</li>
</ol>

<h2 id="6-tools-cho-agents"><strong>6. 為代理程式配置工具</strong></h2>

<p>可指派工具清單：</p>

<table>
<thead>
<tr>
<th>工具</th>
<th>功能</th>
<th>風險等級</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>讀</code></td>
<td>讀取文件</td>
<td>低（唯讀）</td>
</tr>
<tr>
<td><code>編輯文件</code></td>
<td>編輯文件</td>
<td>平均</td>
</tr>
<tr>
<td><code>運作終端</code></td>
<td>運行命令</td>
<td>高</td>
</tr>
<tr>
<td><code>搜尋。搜尋</code></td>
<td>搜尋程式碼庫</td>
<td>低</td>
</tr>
<tr>
<td><code>網路</code></td>
<td>搜尋網絡</td>
<td>低</td>
</tr>
<tr>
<td><code>代理。代理人</code></td>
<td>委託給子代理</td>
<td>平均</td>
</tr>
<tr>
<td><code>vscode/ask問題</code></td>
<td>詢問用戶問題</td>
<td>低</td>
</tr>
</tbody>
</table>

<p><strong>安全提示：</strong> 僅審閱代理（審閱者）應 <strong>不</strong> <code>編輯文件</code> 和 <code>運作終端</code>。</p>

<h2 id="7-chia-se-agents-trong-team"><strong>7. 在團隊中共享代理</strong></h2>

<p>全部提交 <code>.github/代理/</code> 轉到儲存庫 → 每個成員都有相同的代理。這是標準化團隊人工智慧工作流程的一種方法。</p>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<table>
<thead>
<tr>
<th>概念</th>
<th>文件</th>
<th>目的</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>客製化代理</strong></td>
<td><code>.agent.md</code></td>
<td>具有角色+工具+指令的AI角色</td>
</tr>
<tr>
<td><strong>代理技能</strong></td>
<td><code>技能.md</code></td>
<td>領域知識模組，可重複使用</td>
</tr>
<tr>
<td><strong>提示文件</strong></td>
<td><code>.提示.md</code></td>
<td>可重複使用的提示模板</td>
</tr>
<tr>
<td><strong>使用說明</strong></td>
<td><code>.說明.md</code></td>
<td>文件類型特定規則</td>
</tr>
</tbody>
</table>

<p>下一首歌曲將是翻唱歌曲 <strong>MCP伺服器</strong> — 將 Copilot 連接到 Figma、資料庫、API 和任何外部工具。</p>
