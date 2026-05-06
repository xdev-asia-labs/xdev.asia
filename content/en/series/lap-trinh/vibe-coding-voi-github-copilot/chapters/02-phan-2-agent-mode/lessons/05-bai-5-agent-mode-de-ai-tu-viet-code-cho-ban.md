---
id: 019f1c30-a201-7001-c001-v1b3c0d10201
title: 'Lesson 5: Agent Mode — Let AI write code for you'
slug: bai-5-agent-mode-de-ai-tu-viet-code-cho-ban
description: >-
  What is an Agent, how does an Agent work (plan → execute → verify), Agent
  Loop, Chat view (Ctrl+Cmd+I), compare Agent vs Ask vs Plan mode. Permission
  levels: Default, Bypass Approvals, Autopilot. Hands-on: building the first web
  app with Agent.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Agent Mode — AI automatically writes code'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-824" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-824)"/>

  <!-- Decorations -->
  <g>
    <circle cx="661" cy="193" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="783" cy="215" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="96" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="237" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Programming — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Agent Mode — Let AI write the code itself</tspan>
      <tspan x="60" dy="42">you</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Agent Mode — AI automatically writes code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-agent-la-gi"><strong>1. What is an agent?</strong></h2>

<p>In GitHub Copilot, one <strong>Agent</strong> is an active AI assistant <strong>autonomously</strong> to complete a complete programming task. Unlike inline suggestions that only suggest a few lines, Agent has the ability to:</p>

<ul>
<li>📋 <strong>Make a plan</strong> (break down tasks into steps)</li>
<li>📝 <strong>Create and edit multiple files</strong> at the same time</li>
<li>💻 <strong>Run terminal commands</strong> (install packages, build, test)</li>
<li>🔄 <strong>Self-correction</strong> when encountering error (self-correct)</li>
<li>🔧 <strong>Use tools</strong> (read files, search, web, extensions)</li>
</ul>

<p>This is the foundation of <strong>Real Vibe Coding</strong> — you describe the request, the Agent executes it all.</p>

<h2 id="2-agent-loop"><strong>2. Agent Loop — How Agents work</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│              AGENT LOOP                          │
├─────────────────────────────────────────────────┤
│                                                  │
│  User Prompt: "Build a REST API for blog posts"  │
│           ↓                                      │
│  ┌─── PLAN ───┐                                  │
│  │ 1. Setup project                              │
│  │ 2. Create models                              │
│  │ 3. Create routes                              │
│  │ 4. Add middleware                             │
│  │ 5. Test                                       │
│  └────────────┘                                  │
│           ↓                                      │
│  ┌─── EXECUTE ──┐                                │
│  │ Create files  │ ←─ Tool: createFile           │
│  │ Write code    │ ←─ Tool: editFile             │
│  │ Run commands  │ ←─ Tool: runInTerminal        │
│  └──────────────┘                                │
│           ↓                                      │
│  ┌─── VERIFY ───┐                                │
│  │ Check errors  │ ←─ Tool: getErrors            │
│  │ Run tests     │ ←─ Tool: runInTerminal        │
│  │ Self-correct  │ → Quay lại EXECUTE nếu fail   │
│  └──────────────┘                                │
│           ↓                                      │
│  ✅ Complete → User review                       │
│                                                  │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-ba-built-in-agents"><strong>3. Three Built-in Agents</strong></h2>

<h3>3.1. Agent (default)</h3>
<p>Autonomy to plan and implement changes, create files, run commands, use tools. This is the agent you use the most for Vibe Coding.</p>

<h3>3.2. Plan</h3>
<p>Create a structured implementation plan but <strong>don't write code</strong>. After the plan is OK, you hand off to Agent to execute.</p>

<h3>3.3. Ask</h3>
<p>Answer questions about code, concepts, codebase <strong>do not change files</strong>. Use when you need to understand before coding.</p>

<pre><code class="language-text">Chọn agent trong Chat view:

┌────────────────────────────┐
│  Agent ▼                   │  ← Click dropdown
├────────────────────────────┤
│  ● Agent    (implement)    │
│  ○ Plan     (plan only)    │
│  ○ Ask      (Q&A only)     │
│  ○ Reviewer (custom)       │
└────────────────────────────┘
</code></pre>

<h2 id="4-permission-levels"><strong>4. Permission Levels — Control Agent permissions</strong></h2>

<p>The agent needs to run commands and change files — you decide the level of autonomy:</p>

<table>
<thead>
<tr>
<th>Level</th>
<th>Description</th>
<th>suitable when</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Default Approvals</strong></td>
<td>Ask for confirmation for write/run tools</td>
<td>First time using, production code</td>
</tr>
<tr>
<td><strong>Bypass Approvals</strong></td>
<td>Auto-approve all tool calls</td>
<td>Trusted tasks, prototype</td>
</tr>
<tr>
<td><strong>Autopilot (Preview)</strong></td>
<td>Auto-approve + auto-respond questions</td>
<td>Fully autonomous, side projects</td>
</tr>
</tbody>
</table>

<p><strong>⚠️ Security note:</strong> At the Autopilot level, the Agent can run any command — only used for trusted projects on the local machine.</p>

<h2 id="5-hands-on-xay-dung-web-app"><strong>5. Hands-on: Build Web App with Agent Mode</strong></h2>

<h3>Step 1: Open Chat View</h3>
<p>Press <code>Ctrl+Cmd+I</code> (macOS) or <code>Ctrl+Alt+I</code> (Windows/Linux)</p>

<h3>Step 2: Select Agent mode</h3>
<p>From the dropdown, select <strong>"Agent"</strong></p>

<h3>Step 3: Write prompt</h3>
<pre><code class="language-text">Create a modern expense tracker web application with:
- Add expenses with amount, category, and date
- View expenses in a table with sorting
- Dashboard with summary charts (total by category)
- Filter expenses by date range and category
- Local storage to persist data
- Modern dark theme UI with smooth animations
- Responsive design for mobile

Use vanilla HTML, CSS, and JavaScript. No frameworks needed.
</code></pre>

<h3>Step 4: Observe Agent working</h3>
<p>Agent will:</p>
<ol>
<li>Analyze requirements</li>
<li>Create file structure: <code>index.html</code>, <code>styles.css</code>, <code>app.js</code></li>
<li>Write HTML semantic structure</li>
<li>Write CSS with dark theme and responsive</li>
<li>Write JavaScript for CRUD logic, charts, filters</li>
<li>Can run preview</li>
</ol>

<h3>Step 5: Review and Accept</h3>
<p>View diff for each file → press <strong>"Keep"</strong> to accept, or request changes.</p>

<h3>Step 6: Iterate</h3>
<p>Continue the conversation to add features:</p>
<pre><code class="language-text">Add an export to CSV button and a monthly budget feature with progress bar
</code></pre>

<h2 id="6-agent-session-management"><strong>6. Agent Session Management</strong></h2>

<p>Each task runs in one <strong>session. session</strong> separate:</p>

<ul>
<li><strong>Sessions List</strong>: view all sessions (active, paused, completed) in Chat panel</li>
<li><strong>Multiple sessions</strong>: run multiple sessions in parallel for many different tasks</li>
<li><strong>Resume sessions</strong>: return to the old session to continue iterate</li>
<li><strong>Review changes</strong>: view all file changes in a session</li>
</ul>

<h2 id="7-tools-agent-su-dung"><strong>7. Tools that Agent uses</strong></h2>

<p>Agent has access to built-in tools:</p>

<table>
<thead>
<tr>
<th>Tools</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>read</code></td>
<td>Read files in workspace</td>
</tr>
<tr>
<td><code>editFile</code></td>
<td>Create/edit files</td>
</tr>
<tr>
<td><code>runInTerminal</code></td>
<td>Run shell commands</td>
</tr>
<tr>
<td><code>search. search</code></td>
<td>Search in codebase</td>
</tr>
<tr>
<td><code>listDir</code></td>
<td>List files in directory</td>
</tr>
<tr>
<td><code>getErrors</code></td>
<td>Get compile/lint errors</td>
</tr>
<tr>
<td><code>web</code></td>
<td>Search the web</td>
</tr>
<tr>
<td><code>usages</code></td>
<td>Find references of symbols</td>
</tr>
</tbody>
</table>

<h2 id="8-best-practices-agent-mode"><strong>8. Best Practices for Agent Mode</strong></h2>

<h3>✅ Should:</h3>
<ul>
<li><strong>Description is clear and detailed</strong>: include tech stack, patterns, constraints</li>
<li><strong>Break large tasks into small pieces</strong>: "Add auth" first, "Add CRUD" later, instead of "Build everything"</li>
<li><strong>Review each step</strong>: Read the generated Agent code, especially important logic</li>
<li><strong>Use /init first</strong>: create custom instructions so that Agent understands the conventions</li>
<li><strong>Iterate, not redo</strong>: continue the session instead of starting over</li>
</ul>

<h3>❌ Should not:</h3>
<ul>
<li>Use Autopilot for production code</li>
<li>Accept all without reviewing any files</li>
<li>Prompt is too vague: "Make it better"</li>
<li>Let Agent install packages without your knowledge</li>
<li>Skip error messages — read and provided to Agent</li>
</ul>

<h2 id="9-debugging-voi-agent"><strong>9. Debugging with Agent Mode</strong></h2>

<p>The agent is especially powerful for debugging because it can:</p>
<ol>
<li>Read the error message</li>
<li>Trace root cause across multiple files</li>
<li>Apply fix</li>
<li>Re-run test to verify</li>
</ol>

<pre><code class="language-text">// Prompt ví dụ:
The test in tests/auth.test.ts is failing with "TypeError: Cannot read properties
of undefined (reading 'token')". Find the root cause and fix it.
</code></pre>

<h2 id="10-tong-ket"><strong>10. Summary</strong></h2>

<table>
<thead>
<tr>
<th>Concept</th>
<th>Key Takeaway</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent</td>
<td>Autonomous AI assistant: plan → execute → verify</td>
</tr>
<tr>
<td>3 built-in agents</td>
<td>Agent (implement), Plan (plan), Ask (Q&A)</td>
</tr>
<tr>
<td>Permission levels</td>
<td>Default → Bypass → Autopilot (increasing autonomy)</td>
</tr>
<tr>
<td>Agent Loop</td>
<td>Repeat execute + verify until the task is completed</td>
</tr>
<tr>
<td>Sessions</td>
<td>Each task = 1 session, can run in parallel</td>
</tr>
<tr>
<td>Best practices</td>
<td>Clear prompt + review code + iterate</td>
</tr>
</tbody>
</table>

<p>The next article will go deeper <strong>Plan Agent</strong> — planning techniques before coding, giving you better control over AI output.</p>
