---
id: 019f1c30-a302-7001-c001-v1b3c0d10302
title: 'Lesson 9: Context Management — Providing context for AI'
slug: bai-9-context-management-cung-cap-ngu-canh-cho-ai
description: >-
  The role of context window. How to attach files, folders, selections. #file,
  #selection, #editor references. Workspace indexing. Codebase-aware prompting.
  Tips for keeping context concise and effective. When do you need new session
  vs continue session.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 3: Prompt Engineering for Code'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7287" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7287)"/>

  <!-- Decorations -->
  <g>
    <circle cx="909" cy="257" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="718" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1027" cy="235" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="836" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="107" x2="1100" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="137" x2="1050" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Context Management — Providing language</tspan>
      <tspan x="60" dy="42">scenes for AI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Prompt Engineering for Code</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-context-la-gi"><strong>1. What is Context and why is it important?</strong></h2>

<p>AI model can only "see" what is inside <strong>context window</strong> — the amount of text it processes per request. If you don't provide enough context, the AI ​​will "guess" and often guess wrong.</p>

<pre><code class="language-text">Context window: [System prompt + Custom instructions + Your prompt + Attached files + History]
                ↑ tất cả phải fit trong giới hạn tokens của model
</code></pre>

<p><strong>Good Context = Good Code.</strong> This is principle #1 of effective Vibe Coding.</p>

<h2 id="2-cac-loai-context"><strong>2. Types of contexts in Copilot</strong></h2>

<h3>2.1. Implicit Context (automatic)</h3>
<p>Copilot automatically collects:</p>
<ul>
<li><strong>File is active</strong> in editor</li>
<li><strong>Selection</strong> current (if any)</li>
<li><strong>Open tabs</strong></li>
<li><strong>Workspace structure</strong> (file/folder tree)</li>
<li><strong>Diagnostics</strong> (errors, warnings)</li>
<li><strong>Terminal output</strong> nearest</li>
</ul>

<h3>2.2. Explicit Context (you provide)</h3>
<p>You proactively attach:</p>
<ul>
<li><strong>#file</strong>: attach specific file</li>
<li><strong>#selection</strong>: the code being selected</li>
<li><strong>#editor</strong>: entire visible area in the editor</li>
<li><strong>#codebase</strong>: search semantics in workspace</li>
<li><strong>#terminalLastCommand</strong>: output of the command just run</li>
<li><strong>Drag & drop</strong> files into chat</li>
<li><strong>Images</strong>: attach screenshots (Mar 2026 feature)</li>
</ul>

<h2 id="3-su-dung-context-variables"><strong>3. Use Context Variables</strong></h2>

<h3>3.1. #file — Attach specific file</h3>
<pre><code class="language-text">// Trong Chat view:
Look at #file:src/models/User.ts and #file:src/services/AuthService.ts
and create a password reset flow following the same patterns.
</code></pre>

<p>When typing <code>#file:</code>, VS Code displays the file picker for you to choose from.</p>

<h3>3.2. #selection — Code is selecting</h3>
<pre><code class="language-text">// Select đoạn code trong editor, rồi trong Chat:
Explain #selection and suggest how to optimize it for performance.
</code></pre>

<h3>3.3. #codebase — Search semantics in workspace</h3>
<pre><code class="language-text">// Copilot tự tìm files liên quan trong codebase:
#codebase How is authentication implemented in this project?
Show me the auth middleware and token verification logic.
</code></pre>

<h3>3.4. #terminalLastCommand — Output terminal</h3>
<pre><code class="language-text">// Sau khi chạy test fail trong terminal:
#terminalLastCommand Fix the failing tests. Analyze the error output
and make the necessary code changes.
</code></pre>

<h2 id="4-workspace-indexing"><strong>4. Workspace Indexing</strong></h2>

<p>VS Code automatically indexes the workspace so Copilot understands the codebase:</p>

<ul>
<li><strong>Semantic index</strong>: understand the meaning of code (functions, classes, relationships)</li>
<li><strong>Symbol index</strong>: function name, variables, types</li>
<li><strong>File structure</strong>: know project structure</li>
</ul>

<p>When the Agent runs, it can use tools such as <code>search. search</code>, <code>listDir</code>, <code>read</code> to proactively explore the codebase — not just based on the context you provide.</p>

<h2 id="5-chien-luoc-context"><strong>5. Effective Context Strategy</strong></h2>

<h3>5.1. Open the correct files before prompting</h3>
<pre><code class="language-text">// Trước khi viết prompt "Create UserService":
// Mở các files liên quan trong editor tabs:
Tab 1: models/User.ts        → Copilot biết User schema
Tab 2: services/AuthService.ts → Copilot biết coding pattern
Tab 3: routes/authRoutes.ts   → Copilot biết route conventions
Tab 4: tests/auth.test.ts     → Copilot biết testing pattern
</code></pre>

<h3>5.2. Reference existing patterns</h3>
<pre><code class="language-text">// Thay vì mô tả pattern từ đầu:
Create a ProductService following the exact same pattern as
#file:src/services/UserService.ts — same error handling,
same repository pattern, same validation approach.
</code></pre>

<h3>5.3. Provide explicit constraints</h3>
<pre><code class="language-text">// Context about project conventions:
Our project uses:
- Prisma for database (schema at #file:prisma/schema.prisma)
- Zod for validation (see pattern in #file:src/schemas/userSchema.ts)
- Custom AppError class for errors (#file:src/utils/AppError.ts)

Now create the OrderService with CRUD operations.
</code></pre>

<h2 id="6-new-session-vs-continue"><strong>6. When is New Session vs Continued Session?</strong></h2>

<table>
<thead>
<tr>
<th>Situation</th>
<th>Action</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>Continue with the same feature</td>
<td><strong>Continue</strong></td>
<td>Keep context + history</td>
</tr>
<tr>
<td>Completely new features</td>
<td><strong>New session</strong></td>
<td>Context is clean, no noise</td>
</tr>
<tr>
<td>Context is too long</td>
<td><strong>New session</strong> + summary</td>
<td>Avoid context overflow</td>
</tr>
<tr>
<td>Agent goes in the wrong direction</td>
<td><strong>New session</strong> + rephrase</td>
<td>Reset mistakes in history</td>
</tr>
<tr>
<td>Debug related issues</td>
<td><strong>Continue</strong></td>
<td>AI needs to know how to fix it first</td>
</tr>
</tbody>
</table>

<h3>Tip: Summary when creating a new session</h3>
<pre><code class="language-text">// Khi context quá dài, tạo new session với summary:
Context from previous session:
- We're building a task management app with Next.js 15 + Prisma
- Backend API is done (auth, CRUD for tasks, projects)
- Database schema is finalized
- Currently working on frontend

Continue from: Create the Task list page component with
filtering and sorting capabilities.
</code></pre>

<h2 id="7-images-as-context"><strong>7. Images as Context (2026 Feature)</strong></h2>

<p>From March 2026, you can <strong>attach images</strong> Go to agent sessions:</p>

<ul>
<li>Screenshot of UI design → "Build this UI"</li>
<li>Screenshot of error → "Fix this error"</li>
<li>Diagram/wireframe → "Implement this architecture"</li>
<li>Figma export → "Convert this design to React components"</li>
</ul>

<h2 id="8-anti-patterns"><strong>8. Anti-patterns should be avoided</strong></h2>

<ul>
<li><strong>Dump the entire codebase</strong>: too much context = noise, AI is confused</li>
<li><strong>No context provided</strong>: AI must guess everything</li>
<li><strong>Attach file is not relevant</strong>: waste context window</li>
<li><strong>Continue session is too long</strong>: context degrade, AI "forgets" the first information</li>
<li><strong>Copy-paste error without formatting</strong>: causes confusion for AI</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<p>Context management is a skill <strong>determines the quality of Vibe Coding</strong>:</p>

<ul>
<li>✅ Open the correct files → good implicit context</li>
<li>✅ Use #file, #selection, #codebase → explicit context correctly</li>
<li>✅ Reference existing patterns → consistent output</li>
<li>✅ New session when context bloated → avoid degradation</li>
<li>✅ Attach images for UI tasks → visual context</li>
</ul>

<p>The next song will be a cover <strong>Advanced Prompt Patterns</strong> — slash commands, chat participants, and how to build your own prompt library.</p>
