---
id: 019f1c30-a402-7001-c001-v1b3c0d10402
title: 'Bài 12: Custom Agents & Agent Skills — Tạo AI chuyên biệt'
slug: bai-12-custom-agents-va-agent-skills
description: >-
  Tạo custom agent (.agent.md): role, tools, instructions. YAML frontmatter.
  Agent Skills (SKILL.md): domain knowledge có thể tái sử dụng.
  Ví dụ: Code Reviewer agent, Documentation Writer agent, Test Generator agent.
  Chia sẻ agents trong team qua .github/agents/.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Customize & Extend Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-custom-agents-la-gi"><strong>1. Custom Agents là gì?</strong></h2>

<p>Custom Agents cho phép bạn tạo <strong>AI personas chuyên biệt</strong> cho các tasks cụ thể. Mỗi agent có:</p>

<ul>
<li><strong>Role</strong>: vai trò cụ thể (reviewer, tester, documenter)</li>
<li><strong>Tools</strong>: danh sách tools được phép sử dụng</li>
<li><strong>Instructions</strong>: hướng dẫn chi tiết cho behavior</li>
<li><strong>Model</strong>: có thể chỉ định model cụ thể (optional)</li>
</ul>

<h2 id="2-tao-custom-agent"><strong>2. Tạo Custom Agent</strong></h2>

<h3>2.1. File structure</h3>
<p>Custom agents là file <code>.agent.md</code> đặt trong <code>.github/agents/</code>:</p>

<pre><code class="language-text">project/
├── .github/
│   └── agents/
│       ├── Reviewer.agent.md
│       ├── TestWriter.agent.md
│       ├── DocWriter.agent.md
│       └── Architect.agent.md
</code></pre>

<h3>2.2. Cấu trúc file .agent.md</h3>
<pre><code class="language-markdown">---
name: 'AgentName'
description: 'Mô tả ngắn về agent'
tools: ['tool1', 'tool2', ...]
---
# System Instructions

Chi tiết hướng dẫn cho agent...
</code></pre>

<h2 id="3-vi-du-custom-agents"><strong>3. Ví dụ Custom Agents thực tế</strong></h2>

<h3>3.1. Code Reviewer Agent</h3>
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

<h3>3.2. Test Writer Agent</h3>
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

<h2 id="4-agent-skills"><strong>4. Agent Skills (SKILL.md)</strong></h2>

<p>Agent Skills là <strong>domain knowledge modules</strong> có thể được tái sử dụng bởi nhiều agents. Mỗi skill là một file <code>SKILL.md</code>.</p>

<h3>4.1. Tạo Skill</h3>
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

<h3>4.2. Reference Skill trong Agent</h3>
<pre><code class="language-markdown">&lt;!-- Trong custom agent, reference skills: --&gt;
---
name: 'DBAdmin'
description: 'Database administration agent'
tools: ['read', 'editFile', 'runInTerminal']
---
# DB Admin Agent

Follow the practices defined in [Database Migration Skill](../skills/database-migration/SKILL.md).
</code></pre>

<h2 id="5-su-dung-custom-agents"><strong>5. Sử dụng Custom Agents</strong></h2>

<ol>
<li>Mở Chat view (<code>Ctrl+Cmd+I</code>)</li>
<li>Click agent dropdown (mặc định "Agent")</li>
<li>Chọn custom agent bạn đã tạo (Reviewer, TestWriter, etc.)</li>
<li>Prompt như bình thường — agent sẽ follow role và instructions</li>
</ol>

<h2 id="6-tools-cho-agents"><strong>6. Cấu hình Tools cho Agents</strong></h2>

<p>Danh sách tools có thể assign:</p>

<table>
<thead>
<tr>
<th>Tool</th>
<th>Chức năng</th>
<th>Risk level</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>read</code></td>
<td>Đọc files</td>
<td>Thấp (read-only)</td>
</tr>
<tr>
<td><code>editFile</code></td>
<td>Chỉnh sửa files</td>
<td>Trung bình</td>
</tr>
<tr>
<td><code>runInTerminal</code></td>
<td>Chạy commands</td>
<td>Cao</td>
</tr>
<tr>
<td><code>search</code></td>
<td>Search codebase</td>
<td>Thấp</td>
</tr>
<tr>
<td><code>web</code></td>
<td>Tìm kiếm web</td>
<td>Thấp</td>
</tr>
<tr>
<td><code>agent</code></td>
<td>Delegate to sub-agent</td>
<td>Trung bình</td>
</tr>
<tr>
<td><code>vscode/askQuestions</code></td>
<td>Hỏi user questions</td>
<td>Thấp</td>
</tr>
</tbody>
</table>

<p><strong>Security tip:</strong> Review-only agents (Reviewer) nên <strong>không có</strong> <code>editFile</code> và <code>runInTerminal</code>.</p>

<h2 id="7-chia-se-agents-trong-team"><strong>7. Chia sẻ Agents trong Team</strong></h2>

<p>Commit toàn bộ <code>.github/agents/</code> vào repository → mọi thành viên đều có cùng agents. Đây là cách chuẩn hóa AI workflow cho team.</p>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr>
<th>Concept</th>
<th>File</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Custom Agent</strong></td>
<td><code>.agent.md</code></td>
<td>AI persona với role + tools + instructions</td>
</tr>
<tr>
<td><strong>Agent Skill</strong></td>
<td><code>SKILL.md</code></td>
<td>Domain knowledge module, reusable</td>
</tr>
<tr>
<td><strong>Prompt File</strong></td>
<td><code>.prompt.md</code></td>
<td>Reusable prompt template</td>
</tr>
<tr>
<td><strong>Instructions</strong></td>
<td><code>.instructions.md</code></td>
<td>File-type specific rules</td>
</tr>
</tbody>
</table>

<p>Bài tiếp theo sẽ cover <strong>MCP Servers</strong> — kết nối Copilot với Figma, databases, APIs và mọi tool bên ngoài.</p>
