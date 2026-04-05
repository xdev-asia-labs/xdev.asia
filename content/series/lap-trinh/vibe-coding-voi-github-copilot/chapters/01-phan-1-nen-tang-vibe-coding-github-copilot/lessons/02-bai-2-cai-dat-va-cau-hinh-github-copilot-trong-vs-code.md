---
id: 019f1c30-a102-7001-c001-v1b3c0d10102
title: 'Bài 2: Cài đặt & Cấu hình GitHub Copilot trong VS Code'
slug: bai-2-cai-dat-va-cau-hinh-github-copilot-trong-vs-code
description: >-
  Đăng ký GitHub Copilot (Free/Pro/Pro+/Enterprise), cài đặt extension,
  cấu hình settings, chọn model (GPT-5.4, Claude, Gemini),
  Auto Model Selection, keyboard shortcuts và workflow cơ bản.
duration_minutes: 45
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng Vibe Coding & GitHub Copilot"
course:
  id: 019f1c30-a100-7001-c001-v1b3c0d10001
  title: 'Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao'
  slug: vibe-coding-voi-github-copilot
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Lập trình — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Cài đặt &amp; Cấu hình GitHub Copilot</tspan>
      <tspan x="60" dy="42">trong VS Code</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Vibe Coding với GitHub Copilot: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Vibe Coding &amp; GitHub Copilot</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cac-goi-github-copilot"><strong>1. Các gói GitHub Copilot (2026)</strong></h2>

<p>GitHub Copilot cung cấp nhiều gói phù hợp từ cá nhân đến doanh nghiệp:</p>

<table>
<thead>
<tr>
<th>Gói</th>
<th>Giá</th>
<th>Đặc điểm chính</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Copilot Free</strong></td>
<td>$0/tháng</td>
<td>Giới hạn inline suggestions & chat interactions/tháng. Auto model selection.</td>
</tr>
<tr>
<td><strong>Copilot Pro</strong></td>
<td>$10/tháng</td>
<td>Unlimited completions & chat. Nhiều model. Copilot Memory (preview).</td>
</tr>
<tr>
<td><strong>Copilot Pro+</strong></td>
<td>$39/tháng</td>
<td>Premium models, Copilot Memory, Cloud Agent, higher rate limits.</td>
</tr>
<tr>
<td><strong>Copilot Business</strong></td>
<td>$19/user/tháng</td>
<td>Organization policies, content exclusion, audit logs, IP indemnity.</td>
</tr>
<tr>
<td><strong>Copilot Enterprise</strong></td>
<td>$39/user/tháng</td>
<td>Knowledge bases, fine-tuned models, advanced security.</td>
</tr>
</tbody>
</table>

<p><strong>Đặc biệt cho sinh viên:</strong> GitHub cung cấp Copilot miễn phí qua chương trình <strong>GitHub Education</strong> (GitHub Student Developer Pack).</p>

<h2 id="2-cai-dat-github-copilot"><strong>2. Cài đặt GitHub Copilot trong VS Code</strong></h2>

<h3>Bước 1: Cài đặt VS Code</h3>
<p>Tải và cài đặt từ <a href="https://code.visualstudio.com/">code.visualstudio.com</a>. Khuyến nghị dùng bản <strong>Stable</strong> (hoặc <strong>Insiders</strong> nếu muốn trải nghiệm tính năng mới nhất).</p>

<h3>Bước 2: Đăng nhập GitHub Copilot</h3>
<ol>
<li>Mở VS Code</li>
<li>Hover vào <strong>Copilot icon</strong> ở Status Bar (góc dưới bên phải)</li>
<li>Chọn <strong>"Set up Copilot"</strong></li>
<li>Đăng nhập tài khoản GitHub</li>
<li>Nếu chưa có subscription → tự động đăng ký <strong>Copilot Free</strong></li>
</ol>

<pre><code class="language-text">Status Bar: [Copilot Icon] → "Set up Copilot" → Sign in with GitHub
</code></pre>

<h3>Bước 3: Xác nhận cài đặt</h3>
<p>Sau khi đăng nhập thành công:</p>
<ul>
<li>Copilot icon ở Status Bar chuyển sang trạng thái active</li>
<li>Mở file code bất kỳ → bắt đầu gõ → thấy inline suggestions (ghost text)</li>
<li>Mở Chat view bằng <code>Ctrl+Cmd+I</code> (macOS) hoặc <code>Ctrl+Alt+I</code> (Windows/Linux)</li>
</ul>

<h2 id="3-chon-ai-model"><strong>3. Chọn AI Model</strong></h2>

<p>GitHub Copilot cho phép bạn chọn model AI phù hợp với từng tác vụ:</p>

<h3>Các model hiện có (tháng 3/2026):</h3>

<table>
<thead>
<tr>
<th>Model</th>
<th>Provider</th>
<th>Đặc điểm</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>GPT-5.4</strong></td>
<td>OpenAI</td>
<td>Mới nhất, mạnh nhất cho coding. GA từ Mar 2026.</td>
</tr>
<tr>
<td><strong>GPT-5.4 mini</strong></td>
<td>OpenAI</td>
<td>Nhẹ hơn, nhanh hơn, phù hợp tasks đơn giản.</td>
</tr>
<tr>
<td><strong>GPT-5.3-Codex</strong></td>
<td>OpenAI</td>
<td>Long-term support, tối ưu cho code generation.</td>
</tr>
<tr>
<td><strong>Claude (Anthropic)</strong></td>
<td>Anthropic</td>
<td>Mạnh về reasoning, instructions following.</td>
</tr>
<tr>
<td><strong>Gemini 3.1 Pro</strong></td>
<td>Google</td>
<td>Long context, hỗ trợ JetBrains/Xcode/Eclipse.</td>
</tr>
<tr>
<td><strong>Grok Code Fast 1</strong></td>
<td>xAI</td>
<td>Nhanh, dùng trong Copilot Free auto selection.</td>
</tr>
</tbody>
</table>

<h3>Auto Model Selection</h3>
<p>Mặc định, Copilot dùng <strong>Auto</strong> — tự động chọn model tốt nhất cho từng prompt. Bạn có thể thay đổi bằng cách click vào <strong>model dropdown</strong> trong Chat view.</p>

<pre><code class="language-text">Chat view → Model dropdown (góc trên) → Chọn model cụ thể hoặc "Auto"
</code></pre>

<h2 id="4-cau-hinh-settings"><strong>4. Cấu hình Settings quan trọng</strong></h2>

<p>Mở VS Code Settings (<code>Cmd+,</code>) và search "copilot":</p>

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

<h3>4.3. Ngôn ngữ cụ thể</h3>
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

<h2 id="5-keyboard-shortcuts"><strong>5. Keyboard Shortcuts cần nhớ</strong></h2>

<table>
<thead>
<tr>
<th>Shortcut (macOS)</th>
<th>Shortcut (Win/Linux)</th>
<th>Chức năng</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>Tab</code></td>
<td><code>Tab</code></td>
<td>Accept inline suggestion</td>
</tr>
<tr>
<td><code>Esc</code></td>
<td><code>Esc</code></td>
<td>Dismiss suggestion</td>
</tr>
<tr>
<td><code>Option+]</code></td>
<td><code>Alt+]</code></td>
<td>Next suggestion</td>
</tr>
<tr>
<td><code>Option+[</code></td>
<td><code>Alt+[</code></td>
<td>Previous suggestion</td>
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
<td>Mở Chat view</td>
</tr>
</tbody>
</table>

<h2 id="6-first-interactions"><strong>6. Tương tác đầu tiên</strong></h2>

<h3>6.1. Test Inline Suggestions</h3>
<p>Tạo file <code>hello.py</code> và bắt đầu gõ:</p>

<pre><code class="language-python"># Function to calculate fibonacci numbers
def fibonacci(</code></pre>

<p>Copilot sẽ tự động suggest phần thân hàm. Nhấn <code>Tab</code> để accept.</p>

<h3>6.2. Test Chat View</h3>
<p>Mở Chat view (<code>Ctrl+Cmd+I</code>) và nhập:</p>

<pre><code class="language-text">Create a simple Python script that reads a CSV file and generates a bar chart using matplotlib
</code></pre>

<h3>6.3. Test Agent Mode</h3>
<p>Trong Chat view, chọn <strong>Agent</strong> từ dropdown và nhập:</p>

<pre><code class="language-text">Create a simple todo web app with HTML, CSS, and JavaScript. Make it modern and responsive.
</code></pre>

<p>Quan sát Agent tự động tạo files, viết code, và thiết lập project.</p>

<h2 id="7-cau-truc-giao-dien"><strong>7. Hiểu cấu trúc giao diện Copilot</strong></h2>

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

<h2 id="8-troubleshooting"><strong>8. Xử lý sự cố thường gặp</strong></h2>

<table>
<thead>
<tr>
<th>Vấn đề</th>
<th>Giải pháp</th>
</tr>
</thead>
<tbody>
<tr>
<td>Không thấy suggestions</td>
<td>Kiểm tra Copilot icon ở Status Bar, đảm bảo đã sign in</td>
</tr>
<tr>
<td>Agent mode không hiện</td>
<td>Bật <code>chat.agent.enabled</code> trong Settings</td>
</tr>
<tr>
<td>Suggestions chất lượng thấp</td>
<td>Thử đổi model, thêm context (comments, file mở)</td>
</tr>
<tr>
<td>Rate limit reached</td>
<td>Nâng cấp từ Free lên Pro, hoặc đợi reset tháng mới</td>
</tr>
<tr>
<td>Extension conflict</td>
<td>Tắt các extension AI khác (Tabnine, Codeium...)</td>
</tr>
</tbody>
</table>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<p>Bạn đã sẵn sàng để bắt đầu Vibe Coding! Tóm tắt những gì đã làm:</p>

<ul>
<li>✅ Hiểu các gói Copilot và chọn gói phù hợp</li>
<li>✅ Cài đặt và đăng nhập GitHub Copilot trong VS Code</li>
<li>✅ Chọn AI model phù hợp</li>
<li>✅ Cấu hình settings quan trọng</li>
<li>✅ Nắm được keyboard shortcuts</li>
<li>✅ Test thành công inline suggestions, chat, và agent mode</li>
</ul>

<p>Ở bài tiếp theo, chúng ta sẽ đi sâu vào <strong>Inline Suggestions & Next Edit Suggestions</strong> — tính năng cốt lõi giúp bạn code nhanh hơn mỗi ngày.</p>
