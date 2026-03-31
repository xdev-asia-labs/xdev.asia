---
id: 019f1c30-a203-7001-c001-v1b3c0d10203
title: 'Bài 7: Cloud Agent & Copilot CLI — Agent chạy ở mọi nơi'
slug: bai-7-cloud-agent-va-copilot-cli
description: >-
  Local Agent vs Cloud Agent vs Copilot CLI vs Third-party Agent.
  Cloud Agent: tạo branch, implement, mở PR tự động.
  Copilot CLI: chạy agent từ terminal, Git worktrees isolation.
  Hand off giữa các agent types. Session management.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Agent Mode — AI tự động viết code"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
---

<h2 id="1-agent-types-overview"><strong>1. Tổng quan Agent Types</strong></h2>

<p>GitHub Copilot cho phép chạy agents ở nhiều nơi khác nhau, tùy theo workflow và mức độ oversight bạn cần:</p>

<table>
<thead>
<tr>
<th>Agent Type</th>
<th>Chạy ở đâu</th>
<th>Tương tác</th>
<th>Use case chính</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Local Agent</strong></td>
<td>VS Code, máy của bạn</td>
<td>Interactive</td>
<td>Code hàng ngày, debug, iterate</td>
</tr>
<tr>
<td><strong>Copilot CLI</strong></td>
<td>Terminal, background</td>
<td>Autonomous</td>
<td>Tasks song song, worktree isolation</td>
</tr>
<tr>
<td><strong>Cloud Agent</strong></td>
<td>GitHub cloud</td>
<td>Via PR</td>
<td>Team collaboration, issue → PR</td>
</tr>
<tr>
<td><strong>Third-party</strong></td>
<td>Anthropic/OpenAI</td>
<td>SDK-based</td>
<td>Specific AI provider preference</td>
</tr>
</tbody>
</table>

<h2 id="2-local-agent"><strong>2. Local Agent (VS Code)</strong></h2>

<p>Đây là agent bạn đã học ở Bài 5. Local Agent chạy <strong>trong VS Code</strong> với full access vào workspace:</p>

<ul>
<li>✅ Truy cập tất cả files trong project</li>
<li>✅ Chạy terminal commands</li>
<li>✅ Sử dụng VS Code extensions và MCP servers</li>
<li>✅ Interactive — bạn review mỗi step</li>
<li>✅ Debug context (breakpoints, test output)</li>
</ul>

<p><strong>Best for:</strong> Interactive development, debugging, khi cần oversight chặt.</p>

<h2 id="3-copilot-cli"><strong>3. Copilot CLI — Agent từ Terminal</strong></h2>

<p>Copilot CLI cho phép chạy agent <strong>từ command line</strong>, hoạt động autonomous trong background.</p>

<h3>3.1. Cài đặt</h3>
<pre><code class="language-bash"># Copilot CLI được tích hợp trong GitHub CLI
gh extension install github/gh-copilot

# Hoặc nếu đã có, upgrade
gh extension upgrade github/gh-copilot
</code></pre>

<h3>3.2. Sử dụng cơ bản</h3>
<pre><code class="language-bash"># Chạy agent task
gh copilot agent "Add input validation to all API endpoints in src/routes/"

# Với worktree isolation (không ảnh hưởng branch hiện tại)
gh copilot agent --worktree "Refactor database queries to use prepared statements"
</code></pre>

<h3>3.3. Git Worktrees — An toàn khi Vibe Coding</h3>
<p>Git Worktrees cho phép Agent làm việc trên một <strong>copy riêng</strong> của codebase, không ảnh hưởng branch bạn đang code:</p>

<pre><code class="language-text">main (bạn đang code ở đây)
  └── worktree/copilot-task-1/ (Agent chạy ở đây)
      └── Isolated copy, riêng branch
</code></pre>

<p>Khi Agent hoàn thành, bạn review changes và merge nếu OK.</p>

<h3>3.4. Chạy song song nhiều tasks</h3>
<pre><code class="language-bash"># Terminal 1: Task A
gh copilot agent --worktree "Add unit tests for UserService"

# Terminal 2: Task B (song song)
gh copilot agent --worktree "Create API documentation with OpenAPI spec"

# Terminal 3: Bạn vẫn code bình thường trên main branch
</code></pre>

<h2 id="4-cloud-agent"><strong>4. Cloud Agent — Coding Agent trên GitHub</strong></h2>

<p>Cloud Agent (còn gọi <strong>Copilot Coding Agent</strong>) chạy trên <strong>GitHub infrastructure</strong>, hoàn toàn autonomous:</p>

<h3>4.1. Workflow</h3>
<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│           CLOUD AGENT WORKFLOW                   │
├─────────────────────────────────────────────────┤
│                                                  │
│  1. Assign issue/task cho Agent                  │
│     (assign to "copilot" on GitHub)              │
│           ↓                                      │
│  2. Agent tự tạo branch                         │
│           ↓                                      │
│  3. Agent implement changes                     │
│     (code, tests, docs)                          │
│           ↓                                      │
│  4. Agent mở Pull Request                       │
│           ↓                                      │
│  5. Team review PR như bình thường               │
│           ↓                                      │
│  6. Merge khi approved                           │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h3>4.2. Trigger Cloud Agent</h3>

<p><strong>Cách 1: Assign GitHub Issue</strong></p>
<pre><code class="language-text">GitHub Issue → Assignees → Assign to "copilot"
</code></pre>

<p><strong>Cách 2: Mention trong Issue/PR comment</strong></p>
<pre><code class="language-text">@copilot Can you implement the dark mode feature described in this issue?
</code></pre>

<p><strong>Cách 3: Từ VS Code — hand off local session</strong></p>
<p>Chọn session type dropdown → "<strong>Cloud</strong>" → Agent tiếp tục task trên cloud.</p>

<h3>4.3. Configure Cloud Agent</h3>
<p>Tạo file <code>.github/copilot-coding-agent.yml</code> (hoặc cấu hình qua repo settings):</p>

<pre><code class="language-yaml"># Validation tools cho Cloud Agent
validation:
  - name: "lint"
    command: "npm run lint"
  - name: "test"
    command: "npm test"
  - name: "build"
    command: "npm run build"
</code></pre>

<h3>4.4. Monitoring Cloud Agent</h3>
<ul>
<li>Trace commits → session logs (Mar 2026 feature)</li>
<li>Session filters để quản lý multiple agent sessions</li>
<li>Copilot usage metrics tracks active coding agent users</li>
</ul>

<h2 id="5-third-party-agents"><strong>5. Third-party Agents</strong></h2>

<p>VS Code hỗ trợ chạy agents từ các provider khác:</p>

<ul>
<li><strong>Anthropic (Claude)</strong>: dùng Claude as agent, mạnh về reasoning</li>
<li><strong>OpenAI</strong>: dùng GPT models as agent</li>
</ul>

<p>Chọn từ session type dropdown → "<strong>Third-party</strong>" → chọn provider.</p>

<h2 id="6-hand-off-giua-agent-types"><strong>6. Hand off giữa Agent Types</strong></h2>

<p>Một trong những tính năng hay nhất: bạn có thể <strong>chuyển task từ agent type này sang type khác</strong>, giữ nguyên context:</p>

<pre><code class="language-text">Ví dụ workflow end-to-end:

1. LOCAL (Plan):    Lập kế hoạch feature mới
       ↓ hand off
2. LOCAL (Agent):   Implement interactive, review từng step
       ↓ hand off
3. COPILOT CLI:     Chạy parallel tasks cho testing
       ↓ hand off  
4. CLOUD (Agent):   Tạo PR, team review

Context được chuyển toàn bộ qua mỗi hand off!
</code></pre>

<h3>Cách hand off:</h3>
<ul>
<li><strong>Local → CLI</strong>: Từ chat, chọn "Continue in CLI" từ session type dropdown</li>
<li><strong>CLI → Cloud</strong>: Trong CLI session, gõ <code>/delegate</code></li>
<li><strong>Local → Cloud</strong>: Chọn "Cloud" từ session type dropdown</li>
</ul>

<h2 id="7-chon-agent-type-nao"><strong>7. Hướng dẫn chọn Agent Type</strong></h2>

<table>
<thead>
<tr>
<th>Scenario</th>
<th>Agent Type khuyên dùng</th>
</tr>
</thead>
<tbody>
<tr>
<td>Brainstorm, explore ý tưởng</td>
<td>Local Agent (Ask)</td>
</tr>
<tr>
<td>Lập kế hoạch implementation</td>
<td>Local Agent (Plan)</td>
</tr>
<tr>
<td>Build feature interactive</td>
<td>Local Agent</td>
</tr>
<tr>
<td>Debug với editor context</td>
<td>Local Agent</td>
</tr>
<tr>
<td>Task background không cần oversight</td>
<td>Copilot CLI</td>
</tr>
<tr>
<td>Thử nhiều proof of concepts</td>
<td>Copilot CLI (worktrees)</td>
</tr>
<tr>
<td>Tạo PR cho team review</td>
<td>Cloud Agent</td>
</tr>
<tr>
<td>Assign GitHub issue cho AI</td>
<td>Cloud Agent</td>
</tr>
<tr>
<td>Dùng specific AI provider</td>
<td>Third-party Agent</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. Best Practices</strong></h2>

<ul>
<li><strong>Dùng worktrees cho experimental tasks</strong> — không ảnh hưởng main branch</li>
<li><strong>Cấu hình validation tools cho Cloud Agent</strong> — đảm bảo PR quality</li>
<li><strong>Monitor usage metrics</strong> — theo dõi chi phí và efficiency</li>
<li><strong>Hand off khi phù hợp</strong> — plan locally, implement in cloud</li>
<li><strong>Review Cloud Agent PRs cẩn thận</strong> — như review code từ junior developer</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<p>GitHub Copilot agents là <strong>hệ sinh thái đa dạng</strong> — bạn chọn agent type phù hợp với từng giai đoạn của development workflow. Sức mạnh thực sự nằm ở khả năng <strong>hand off liền mạch</strong> giữa các types.</p>

<p>Từ Phần 3, chúng ta sẽ đi vào kỹ năng quan trọng nhất cho Vibe Coding: <strong>Prompt Engineering cho Code</strong> — cách viết prompt để AI sinh ra code chất lượng cao.</p>
