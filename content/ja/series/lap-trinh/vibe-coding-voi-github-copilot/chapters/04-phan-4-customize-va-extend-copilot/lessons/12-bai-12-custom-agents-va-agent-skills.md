---
id: 019f1c30-a402-7001-c001-v1b3c0d10402
title: 'レッスン 12: カスタム エージェントとエージェント スキル — 特化した AI の作成'
slug: bai-12-custom-agents-va-agent-skills
description: >-
  カスタム エージェント (.agent.md) を作成します: ロール、ツール、手順。 YAML のフロントマター。エージェント スキル
  (SKILL.md): 再利用可能なドメインの知識。例: コード レビューアー エージェント、ドキュメント ライター エージェント、テスト ジェネレーター
  エージェント。 .github/agents/ を介してチーム内でエージェントを共有します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: コパイロットのカスタマイズと拡張'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'GitHub Copilot を使用した Vibe コーディング: 基本から高度まで'
  slug: vibe-coding-voi-github-copilot
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 プログラミング — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: カスタム エージェントとエージェント スキル — 作成</tspan>
      <tspan x="60" dy="42">Specialized AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">GitHub Copilot を使用した Vibe コーディング: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: コパイロットのカスタマイズと拡張</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-custom-agents-la-gi"><strong>1.カスタムエージェントとは何ですか?</strong></h2>

<p>カスタム エージェントを使用すると、 <strong>Specialized AI personas</strong> 特定のタスク用。 Each agent has:</p>

<ul>
<li><strong>役割</strong>: 特定の役割 (レビュー担当者、テスター、文書作成者)</li>
<li><strong>ツール</strong>: 使用が許可されているツールのリスト</li>
<li><strong>指示</strong>: detailed instructions for behavior</li>
<li><strong>モデル</strong>: 特定のモデルを指定できます (オプション)</li>
</ul>

<h2 id="2-tao-custom-agent"><strong>2. Create Custom Agent</strong></h2>

<h3>2.1.ファイル構造</h3>
<p>Custom agents are files <code>.agent.md</code> 入れます <code>.github/エージェント/</code>:</p>

<pre><code class="language-text">project/
├── .github/
│   └── agents/
│       ├── Reviewer.agent.md
│       ├── TestWriter.agent.md
│       ├── DocWriter.agent.md
│       └── Architect.agent.md
</code></pre>

<h3>2.2. .agent.md ファイル構造</h3>
<pre><code class="language-markdown">---
name: 'AgentName'
description: 'Mô tả ngắn về agent'
tools: ['tool1', 'tool2', ...]
---
# System Instructions

Chi tiết hướng dẫn cho agent...
</code></pre>

<h2 id="3-vi-du-custom-agents"><strong>3. Realistic Custom Agents example</strong></h2>

<h3>3.1.コードレビューアエージェント</h3>
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

<h3>3.2.テストライターエージェント</h3>
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

<h3>3.3. Architect Agent</h3>
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

<h2 id="4-agent-skills"><strong>4. エージェントスキル (SKILL.md)</strong></h2>

<p>エージェントスキルは <strong>domain knowledge modules</strong> can be reused by multiple agents.各スキルはファイルです <code>スキル.md</code>。</p>

<h3>4.1. Create Skills</h3>
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

<h3>4.2. Reference Skill in Agent</h3>
<pre><code class="language-markdown">&lt;!-- Trong custom agent, reference skills: --&gt;
---
name: 'DBAdmin'
description: 'Database administration agent'
tools: ['read', 'editFile', 'runInTerminal']
---
# DB Admin Agent

Follow the practices defined in [Database Migration Skill](../skills/database-migration/SKILL.md).
</code></pre>

<h2 id="5-su-dung-custom-agents"><strong>5.カスタムエージェントを使用する</strong></h2>

<ol>
<li>チャットビューを開く (<code>Ctrl+Cmd+I</code>）</li>
<li>Click agent dropdown (default "Agent")</li>
<li>作成したカスタム エージェント (Reviewer、TestWriter など) を選択します。</li>
<li>通常どおりプロンプトを表示します - エージェントは役割と指示に従います</li>
</ol>

<h2 id="6-tools-cho-agents"><strong>6. Configure Tools for Agents</strong></h2>

<p>List of assignable tools:</p>

<table>
<thead>
<tr>
<th>ツール</th>
<th>機能</th>
<th>リスクレベル</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>読む</code></td>
<td>ファイルの読み取り</td>
<td>Low (read-only)</td>
</tr>
<tr>
<td><code>編集ファイル</code></td>
<td>ファイルを編集する</td>
<td>平均</td>
</tr>
<tr>
<td><code>runInターミナル</code></td>
<td>コマンドを実行する</td>
<td>高</td>
</tr>
<tr>
<td><code>検索します。検索</code></td>
<td>コードベースの検索</td>
<td>低い</td>
</tr>
<tr>
<td><code>web</code></td>
<td>ウェブを検索する</td>
<td>低い</td>
</tr>
<tr>
<td><code>エージェント。エージェント</code></td>
<td>サブエージェントに委任する</td>
<td>平均</td>
</tr>
<tr>
<td><code>vscode/askQuestions</code></td>
<td>ユーザーに質問する</td>
<td>低い</td>
</tr>
</tbody>
</table>

<p><strong>セキュリティに関するヒント:</strong> Review-only agents (Reviewer) should <strong>いいえ</strong> <code>編集ファイル</code> そして <code>runInターミナル</code>。</p>

<h2 id="7-chia-se-agents-trong-team"><strong>7. チーム内でエージェントを共有する</strong></h2>

<p>Commit all <code>.github/agents/</code> リポジトリに移動 → すべてのメンバーに同じエージェントが割り当てられます。これは、チームの AI ワークフローを標準化する方法です。</p>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<table>
<thead>
<tr>
<th>コンセプト</th>
<th>ファイル</th>
<th>目的</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>カスタムエージェント</strong></td>
<td><code>.agent.md</code></td>
<td>AI ペルソナと役割 + ツール + 指示</td>
</tr>
<tr>
<td><strong>エージェントスキル</strong></td>
<td><code>スキル.md</code></td>
<td>Domain knowledge module, reusable</td>
</tr>
<tr>
<td><strong>プロンプトファイル</strong></td>
<td><code>.prompt.md</code></td>
<td>再利用可能なプロンプトテンプレート</td>
</tr>
<tr>
<td><strong>指示</strong></td>
<td><code>.instructions.md</code></td>
<td>ファイルタイプ固有のルール</td>
</tr>
</tbody>
</table>

<p>次の曲はカバーになります <strong>MCPサーバー</strong> — Copilot を Figma、データベース、API、および外部ツールに接続します。</p>
