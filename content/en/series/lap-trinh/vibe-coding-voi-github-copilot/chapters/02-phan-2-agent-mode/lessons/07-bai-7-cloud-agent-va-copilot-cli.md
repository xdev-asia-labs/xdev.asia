---
id: 019f1c30-a203-7001-c001-v1b3c0d10203
title: 'Lesson 7: Cloud Agent & Copilot CLI — Agent runs everywhere'
slug: bai-7-cloud-agent-va-copilot-cli
description: >-
  Local Agent vs Cloud Agent vs Copilot CLI vs Third-party Agent. Cloud Agent:
  create branches, implement, open PR automatically. Copilot CLI: run agent from
  terminal, Git worktrees isolation. Hand off between agent types. Session
  management.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: 'Part 2: Agent Mode — AI automatically writes code'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5218" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5218)"/>

  <!-- Decorations -->
  <g>
    <circle cx="822" cy="236" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="1044" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="766" cy="200" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="988" cy="182" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="164" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="56" x2="1100" y2="136" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="86" x2="1050" y2="156" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.8467875173176,190.5 1032.8467875173176,221.5 1006,237 979.1532124826824,221.5 979.1532124826824,190.5 1006,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Programming — Lesson 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Cloud Agent & Copilot CLI — Agent</tspan>
      <tspan x="60" dy="42">run everywhere</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Agent Mode — AI automatically writes code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-agent-types-overview"><strong>1. Overview of Agent Types</strong></h2>

<p>GitHub Copilot allows running agents in many different places, depending on the workflow and level of oversight you need:</p>

<table>
<thead>
<tr>
<th>Agent Type</th>
<th>Where to run?</th>
<th>Interaction</th>
<th>Main use case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Local Agent</strong></td>
<td>VS Code, your machine</td>
<td>Interactive</td>
<td>Code daily, debug, iterate</td>
</tr>
<tr>
<td><strong>Copilot CLI</strong></td>
<td>Terminal, background</td>
<td>Autonomous</td>
<td>Parallel tasks, worktree isolation</td>
</tr>
<tr>
<td><strong>Cloud Agent</strong></td>
<td>GitHub cloud</td>
<td>Via PR</td>
<td>Team collaboration, issue → PR</td>
</tr>
<tr>
<td><strong>Third party</strong></td>
<td>Anthropic/OpenAI</td>
<td>SDK-based</td>
<td>Specific AI provider preference</td>
</tr>
</tbody>
</table>

<h2 id="2-local-agent"><strong>2. Local Agent (VS Code)</strong></h2>

<p>This is the agent you learned about in Lesson 5. Local Agent runs <strong>in VS Code</strong> with full access to workspace:</p>

<ul>
<li>✅ Access all files in the project</li>
<li>✅ Run terminal commands</li>
<li>✅ Use VS Code extensions and MCP servers</li>
<li>✅ Interactive — you review each step</li>
<li>✅ Debug context (breakpoints, test output)</li>
</ul>

<p><strong>Best for:</strong> Interactive development, debugging, when close oversight is needed.</p>

<h2 id="3-copilot-cli"><strong>3. Copilot CLI — Agent from Terminal</strong></h2>

<p>Copilot CLI allows running agents <strong>from command line</strong>, operates autonomously in the background.</p>

<h3>3.1. Install</h3>
<pre><code class="language-bash"># Copilot CLI được tích hợp trong GitHub CLI
gh extension install github/gh-copilot

# Hoặc nếu đã có, upgrade
gh extension upgrade github/gh-copilot
</code></pre>

<h3>3.2. Basic usage</h3>
<pre><code class="language-bash"># Chạy agent task
gh copilot agent "Add input validation to all API endpoints in src/routes/"

# Với worktree isolation (không ảnh hưởng branch hiện tại)
gh copilot agent --worktree "Refactor database queries to use prepared statements"
</code></pre>

<h3>3.3. Git Worktrees — Safe Vibe Coding</h3>
<p>Git Worktrees allows Agents to work on one <strong>copy separately</strong> of the codebase, does not affect the branch you are coding on:</p>

<pre><code class="language-text">main (bạn đang code ở đây)
  └── worktree/copilot-task-1/ (Agent chạy ở đây)
      └── Isolated copy, riêng branch
</code></pre>

<p>When the Agent is completed, review the changes and merge if OK.</p>

<h3>3.4. Run multiple tasks in parallel</h3>
<pre><code class="language-bash"># Terminal 1: Task A
gh copilot agent --worktree "Add unit tests for UserService"

# Terminal 2: Task B (song song)
gh copilot agent --worktree "Create API documentation with OpenAPI spec"

# Terminal 3: Bạn vẫn code bình thường trên main branch
</code></pre>

<h2 id="4-cloud-agent"><strong>4. Cloud Agent — Coding Agent on GitHub</strong></h2>

<p>Cloud Agent (also called <strong>Copilot Coding Agent</strong>) runs on <strong>GitHub Infrastructure</strong>, completely autonomous:</p>

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

<p><strong>Method 1: Assign GitHub Issue</strong></p>
<pre><code class="language-text">GitHub Issue → Assignees → Assign to "copilot"
</code></pre>

<p><strong>Method 2: Mention in Issue/PR comment</strong></p>
<pre><code class="language-text">@copilot Can you implement the dark mode feature described in this issue?
</code></pre>

<p><strong>Method 3: From VS Code — hand off local session</strong></p>
<p>Select session type dropdown → "<strong>Cloud</strong>" → Agent continues the task on the cloud.</p>

<h3>4.3. Configure Cloud Agent</h3>
<p>Create files <code>.github/copilot-coding-agent.yml</code> (or configure via repo settings):</p>

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
<li>Session filters to manage multiple agent sessions</li>
<li>Copilot usage metrics tracks active coding agent users</li>
</ul>

<h2 id="5-third-party-agents"><strong>5. Third-party Agents</strong></h2>

<p>VS Code supports running agents from other providers:</p>

<ul>
<li><strong>Anthropic (Claude)</strong>: Use Claude as agent, strong in reasoning</li>
<li><strong>OpenAI</strong>: use GPT models as agent</li>
</ul>

<p>Select from session type dropdown → "<strong>Third party</strong>" → select provider.</p>

<h2 id="6-hand-off-giua-agent-types"><strong>6. Hand off between Agent Types</strong></h2>

<p>One of the best features: you can <strong>Transfer tasks from one agent type to another</strong>, keeping the context intact:</p>

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

<h3>How to hand off:</h3>
<ul>
<li><strong>Local → CLI</strong>: From chat, select "Continue in CLI" from the session type dropdown</li>
<li><strong>CLI → Cloud</strong>: In CLI session, type <code>/delegate</code></li>
<li><strong>Local → Cloud</strong>: Select "Cloud" from the session type dropdown</li>
</ul>

<h2 id="7-chon-agent-type-nao"><strong>7. Instructions for choosing Agent Type</strong></h2>

<table>
<thead>
<tr>
<th>Scenario</th>
<th>Agent Type recommended</th>
</tr>
</thead>
<tbody>
<tr>
<td>Brainstorm, explore ideas</td>
<td>Local Agent (Ask)</td>
</tr>
<tr>
<td>Plan implementation</td>
<td>Local Agent (Plan)</td>
</tr>
<tr>
<td>Build feature interactive</td>
<td>Local Agent</td>
</tr>
<tr>
<td>Debug with editor context</td>
<td>Local Agent</td>
</tr>
<tr>
<td>Task background does not need oversight</td>
<td>Copilot CLI</td>
</tr>
<tr>
<td>Try out many proof of concepts</td>
<td>Copilot CLI (worktrees)</td>
</tr>
<tr>
<td>Create PR for the review team</td>
<td>Cloud Agent</td>
</tr>
<tr>
<td>Assign GitHub issue for AI</td>
<td>Cloud Agent</td>
</tr>
<tr>
<td>Use specific AI provider</td>
<td>Third-party Agent</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. Best Practices</strong></h2>

<ul>
<li><strong>Use worktrees for experimental tasks</strong> — does not affect main branch</li>
<li><strong>Configure validation tools for Cloud Agent</strong> — ensuring PR quality</li>
<li><strong>Monitor usage metrics</strong> — track costs and efficiency</li>
<li><strong>Hand off when appropriate</strong> — plan locally, implement in cloud</li>
<li><strong>Review Cloud Agent PRs carefully</strong> — like code reviews from junior developers</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<p>GitHub Copilot agents are <strong>diverse ecosystem</strong> — you choose the agent type appropriate to each stage of the development workflow. True strength lies in ability <strong>Seamless hand off</strong> between types.</p>

<p>From Part 3, we will get into the most important skills for Vibe Coding: <strong>Prompt Engineering for Code</strong> — how to write prompts so that AI can generate high-quality code.</p>
