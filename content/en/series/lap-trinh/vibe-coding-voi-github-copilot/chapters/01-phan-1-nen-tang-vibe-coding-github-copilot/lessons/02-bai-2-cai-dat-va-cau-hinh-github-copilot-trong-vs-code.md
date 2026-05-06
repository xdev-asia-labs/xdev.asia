---
id: 019f1c30-a102-7001-c001-v1b3c0d10102
title: 'Lesson 2: Install & Configure GitHub Copilot in VS Code'
slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
description: >-
  Sign up for GitHub Copilot (Free/Pro/Pro+/Enterprise), install extensions,
  configure settings, choose model (GPT-5.4, Claude, Gemini), Auto Model
  Selection, keyboard shortcuts and basic workflow.
duration_minutes: 45
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: Vibe Coding Platform & GitHub Copilot'
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding with GitHub Copilot: From Basics to Advanced'
  slug: vibe-coding-voi-github-copilot
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6782" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6782)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="199" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="225" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="108" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="169" x2="1100" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="199" x2="1050" y2="269" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Install & Configure GitHub Copilot</tspan>
      <tspan x="60" dy="42">in VS Code</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding with GitHub Copilot: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Vibe Coding Platform & GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cac-goi-github-copilot"><strong>1. GitHub Copilot Packages (2026)</strong></h2>

<p>GitHub Copilot offers a variety of plans suitable for individuals and businesses:</p>

<table>
<thead>
<tr>
<th>Package</th>
<th>Price</th>
<th>Main characteristics</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Copilot Free</strong></td>
<td>$0/month</td>
<td>Limit inline suggestions & chat interactions/month. Auto model selection.</td>
</tr>
<tr>
<td><strong>Copilot Pro</strong></td>
<td>$10/month</td>
<td>Unlimited completions & chat. Many models. Copilot Memory (preview).</td>
</tr>
<tr>
<td><strong>Copilot Pro+</strong></td>
<td>$39/month</td>
<td>Premium models, Copilot Memory, Cloud Agent, higher rate limits.</td>
</tr>
<tr>
<td><strong>Copilot Business</strong></td>
<td>$19/user/month</td>
<td>Organization policies, content exclusion, audit logs, IP indemnity.</td>
</tr>
<tr>
<td><strong>Copilot Enterprise</strong></td>
<td>$39/user/month</td>
<td>Knowledge bases, fine-tuned models, advanced security.</td>
</tr>
</tbody>
</table>

<p><strong>Especially for students:</strong> GitHub offers Copilot for free through the program <strong>GitHub Education</strong> (GitHub Student Developer Pack).</p>

<h2 id="2-cai-dat-github-copilot"><strong>2. Install GitHub Copilot in VS Code</strong></h2>

<h3>Step 1: Install VS Code</h3>
<p>Download and install from <a href="https://code.visualstudio.com/">code.visualstudio.com</a>. Recommended to use version <strong>Stable</strong> (or <strong>Insiders</strong> if you want to experience the latest features).</p>

<h3>Step 2: Log in to GitHub Copilot</h3>
<ol>
<li>Open VS Code</li>
<li>Hover in <strong>Copilot icon</strong> in Status Bar (lower right corner)</li>
<li>Select <strong>"Set up Copilot"</strong></li>
<li>Log in to your GitHub account</li>
<li>If you do not have a subscription → automatically subscribe <strong>Copilot Free</strong></li>
</ol>

<pre><code class="language-text">Status Bar: [Copilot Icon] → "Set up Copilot" → Sign in with GitHub
</code></pre>

<h3>Step 3: Confirm installation</h3>
<p>After successful login:</p>
<ul>
<li>Copilot icon in Status Bar changes to active state</li>
<li>Open any code file → start typing → see inline suggestions (ghost text)</li>
<li>Open Chat view with <code>Ctrl+Cmd+I</code> (macOS) or <code>Ctrl+Alt+I</code> (Windows/Linux)</li>
</ul>

<h2 id="3-chon-ai-model"><strong>3. Select AI Model</strong></h2>

<p>GitHub Copilot allows you to choose the right AI model for each task:</p>

<h3>Current models (March 2026):</h3>

<table>
<thead>
<tr>
<th>Model</th>
<th>Provider</th>
<th>Characteristics</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GPT-5.4</strong></td>
<td>OpenAI</td>
<td>Latest, strongest for coding. GA from Mar 2026.</td>
</tr>
<tr>
<td><strong>GPT-5.4 mini</strong></td>
<td>OpenAI</td>
<td>Lighter, faster, suitable for simple tasks.</td>
</tr>
<tr>
<td><strong>GPT-5.3-Codex</strong></td>
<td>OpenAI</td>
<td>Long-term support, optimized for code generation.</td>
</tr>
<tr>
<td><strong>Claude (Anthropic)</strong></td>
<td>Anthropic</td>
<td>Strong in reasoning, instructions follow.</td>
</tr>
<tr>
<td><strong>Gemini 3.1 Pro</strong></td>
<td>Google</td>
<td>Long context, supports JetBrains/Xcode/Eclipse.</td>
</tr>
<tr>
<td><strong>Grok Code Fast 1</strong></td>
<td>xAI</td>
<td>Fast, used in Copilot Free auto selection.</td>
</tr>
</tbody>
</table>

<h3>Auto Model Selection</h3>
<p>By default, Copilot is used <strong>Auto</strong> — automatically selects the best model for each prompt. You can change by clicking <strong>model dropdown</strong> in Chat view.</p>

<pre><code class="language-text">Chat view → Model dropdown (góc trên) → Chọn model cụ thể hoặc "Auto"
</code></pre>

<h2 id="4-cau-hinh-settings"><strong>4. Configure important Settings</strong></h2>

<p>Open VS Code Settings (<code>Cmd+,</code>) and search "copilot":</p>

<h3>4.1. Inline Suggestions</h3>
<pre><code class="language-json">{
  // Bật/tắt inline suggestions
  "editor.inlineSuggest.enabled": true,

  // Bật Next Edit Suggestions (NES)
  "editor.inlineSuggest.edits.enabled": true,

  // Tự động hiển thị suggestions
  "github.copilot.editor.enableAutoCompletions": true
}
</code></pre>

<h3>4.2. Agent Mode</h3>
<pre><code class="language-json">{
  // Bật Agent mode (quan trọng!)
  "chat.agent.enabled": true,

  // Cho phép agent chạy terminal commands
  "github.copilot.chat.agent.runCommands": true
}
</code></pre>

<h3>4.3. Specific language</h3>
<pre><code class="language-json">{
  // Tắt Copilot cho một số ngôn ngữ
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "yaml": true
  }
}
</code></pre>

<h2 id="5-keyboard-shortcuts"><strong>5. Keyboard Shortcuts to remember</strong></h2>

<table>
<thead>
<tr>
<th>Shortcuts (macOS)</th>
<th>Shortcuts (Win/Linux)</th>
<th>Function</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Tab</code></td>
<td><code>Tab</code></td>
<td>Accept inline suggestions</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
<td>Dismiss suggestions</td>
</tr>
<tr>
<td><code>Option+]</code></td>
<td><code>Alt+]</code></td>
<td>Next suggestions</td>
</tr>
<tr>
<td><code>Option+[</code></td>
<td><code>Alt+[</code></td>
<td>Previous suggestions</td>
</tr>
<tr>
<td><code>Cmd+→</code></td>
<td><code>Ctrl+→</code></td>
<td>Accept word-by-word</td>
</tr>
<tr>
<td><code>Cmd+I</code></td>
<td><code>Ctrl+I</code></td>
<td>Inline Chat</td>
</tr>
<tr>
<td><code>Ctrl+Cmd+I</code></td>
<td><code>Ctrl+Alt+I</code></td>
<td>Open Chat view</td>
</tr>
</tbody>
</table>

<h2 id="6-first-interactions"><strong>6. First interaction</strong></h2>

<h3>6.1. Test Inline Suggestions</h3>
<p>Create files <code>hello.py</code> and start typing:</p>

<pre><code class="language-python"># Function to calculate fibonacci numbers
def fibonacci(</code></pre>

<p>Copilot will automatically suggest the function body. Press <code>Tab</code> to accept.</p>

<h3>6.2. Test Chat View</h3>
<p>Open Chat view (<code>Ctrl+Cmd+I</code>) and enter:</p>

<pre><code class="language-text">Create a simple Python script that reads a CSV file and generates a bar chart using matplotlib
</code></pre>

<h3>6.3. Test Agent Mode</h3>
<p>In Chat view, select <strong>Agent</strong> from dropdown and enter:</p>

<pre><code class="language-text">Create a simple todo web app with HTML, CSS, and JavaScript. Make it modern and responsive.
</code></pre>

<p>Watch the Agent automatically create files, write code, and set up projects.</p>

<h2 id="7-cau-truc-giao-dien"><strong>7. Understand the Copilot interface structure</strong></h2>

<pre><code class="language-text">┌─────────────────────────────────────────────────┐
│  VS Code + GitHub Copilot                       │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌────────────────────────────┐   │
│  │ Chat     │  │ Editor                     │   │
│  │ View     │  │                            │   │
│  │          │  │  [Ghost text suggestions]   │   │
│  │ Agent ▼  │  │                            │   │
│  │ Model ▼  │  │  Cmd+I → Inline Chat      │   │
│  │          │  │                            │   │
│  │ Sessions │  │                            │   │
│  │ list     │  │                            │   │
│  └──────────┘  └────────────────────────────┘   │
│                                                  │
│  Status Bar: [Copilot ●] [Model: Auto]          │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="8-troubleshooting"><strong>8. Troubleshooting common problems</strong></h2>

<table>
<thead>
<tr>
<th>Problem</th>
<th>Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Don't see suggestions</td>
<td>Check the Copilot icon in the Status Bar, make sure you are signed in</td>
</tr>
<tr>
<td>Agent mode is not displayed</td>
<td>Turn on <code>chat.agent.enabled</code> in Settings</td>
</tr>
<tr>
<td>Low quality suggestions</td>
<td>Try changing the model, adding context (comments, open files)</td>
</tr>
<tr>
<td>Rate limit reached</td>
<td>Upgrade from Free to Pro, or wait for a new month reset</td>
</tr>
<tr>
<td>Extension conflicts</td>
<td>Turn off other AI extensions (Tabnine, Codeium...)</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<p>You're ready to start Vibe Coding! Summary of what was done:</p>

<ul>
<li>✅ Understand Copilot packages and choose the right package</li>
<li>✅ Install and log in to GitHub Copilot in VS Code</li>
<li>✅ Choose the appropriate AI model</li>
<li>✅ Configure important settings</li>
<li>✅ Understand keyboard shortcuts</li>
<li>✅ Successfully tested inline suggestions, chat, and agent mode</li>
</ul>

<p>In the next article, we will go deeper <strong>Inline Suggestions & Next Edit Suggestions</strong> — core features that help you code faster every day.</p>
