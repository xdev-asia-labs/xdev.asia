---
id: 019d8b40-g101-7001-b008-nodejs0000101
title: 'Bài 1: Node.js Architecture Deep Dive'
slug: bai-1-nodejs-architecture-deep-dive
description: >-
  V8 Engine, libuv, C++ bindings. Single-threaded event loop model.
  Node.js vs Deno vs Bun. Lịch sử phát triển, use cases.
  node --inspect, V8 flags.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Node.js Internals"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8132" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8132)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1098" cy="264" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1096" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1094" cy="160" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1092" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="104" x2="1100" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="134" x2="1050" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1037.7749907475932,184.5 1037.7749907475932,223.5 1004,243 970.2250092524068,223.5 970.2250092524068,184.5 1004,165" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Lập trình — Bài 1</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Node.js Architecture Deep Dive</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Node.js Internals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nodejs-la-gi"><strong>1. Node.js là gì?</strong></h2>

<p>Node.js là một JavaScript runtime được xây dựng trên V8 Engine của Chrome, cho phép chạy JavaScript ở phía server. Ra đời năm 2009 bởi Ryan Dahl, Node.js đã thay đổi hoàn toàn cách thế giới nghĩ về JavaScript.</p>

<table>
<thead><tr><th>Thành phần</th><th>Vai trò</th></tr></thead>
<tbody>
<tr><td>V8 Engine</td><td>Biên dịch JS → machine code, quản lý memory</td></tr>
<tr><td>libuv</td><td>Event loop, async I/O, thread pool, cross-platform</td></tr>
<tr><td>C++ Bindings</td><td>Kết nối JS với system-level APIs (fs, net, crypto)</td></tr>
<tr><td>Node.js API</td><td>JavaScript APIs (http, path, events, stream…)</td></tr>
</tbody>
</table>

<h2 id="2-kien-truc"><strong>2. Kiến trúc Node.js</strong></h2>

<pre><code class="language-text">┌─────────────────────────┐
│     Your JavaScript     │
├─────────────────────────┤
│     Node.js APIs        │
│  (http, fs, crypto…)    │
├─────────────────────────┤
│    C++ Bindings         │
├──────────┬──────────────┤
│  V8      │    libuv     │
│  Engine  │  (event loop)│
└──────────┴──────────────┘
│       Operating System       │
</code></pre>

<h2 id="3-so-sanh"><strong>3. Node.js vs Deno vs Bun</strong></h2>

<table>
<thead><tr><th>Feature</th><th>Node.js</th><th>Deno</th><th>Bun</th></tr></thead>
<tbody>
<tr><td>Engine</td><td>V8</td><td>V8</td><td>JavaScriptCore</td></tr>
<tr><td>Language</td><td>C++</td><td>Rust</td><td>Zig</td></tr>
<tr><td>TypeScript</td><td>--experimental-strip-types</td><td>Native</td><td>Native</td></tr>
<tr><td>Package Manager</td><td>npm/pnpm/yarn</td><td>deno add</td><td>bun install</td></tr>
<tr><td>Ecosystem</td><td>Lớn nhất (3M+ packages)</td><td>Tương thích npm</td><td>Tương thích npm</td></tr>
<tr><td>Security</td><td>Full access</td><td>Permissions</td><td>Full access</td></tr>
</tbody>
</table>

<h2 id="4-cai-dat"><strong>4. Cài đặt & Thiết lập</strong></h2>

<pre><code class="language-bash"># Cài Node.js qua nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
nvm use 22
node --version  # v22.x.x

# Cài pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Khởi tạo project
mkdir my-node-project && cd my-node-project
pnpm init
</code></pre>

<h2 id="5-v8-flags"><strong>5. V8 Engine Flags</strong></h2>

<pre><code class="language-bash"># Xem tất cả V8 flags
node --v8-options | head -50

# Giới hạn memory
node --max-old-space-size=4096 app.js

# Inspect debugger
node --inspect app.js        # Chrome DevTools tại chrome://inspect
node --inspect-brk app.js    # Break ở dòng đầu tiên

# V8 profiling
node --prof app.js
node --prof-process isolate-*.log > processed.txt
</code></pre>

<h2 id="6-hello-world"><strong>6. Hello World & REPL</strong></h2>

<pre><code class="language-ts">// hello.ts
const message: string = 'Hello from Node.js!'
console.log(message)
console.log(`Node.js version: ${process.version}`)
console.log(`Platform: ${process.platform}`)
console.log(`Architecture: ${process.arch}`)
console.log(`PID: ${process.pid}`)
console.log(`Memory: ${JSON.stringify(process.memoryUsage())}`)
</code></pre>

<pre><code class="language-bash"># Chạy TypeScript trực tiếp (Node.js 22+)
node --experimental-strip-types hello.ts

# Hoặc dùng tsx
npx tsx hello.ts
</code></pre>

<p>Bài tiếp theo: <strong>Event Loop & Async Patterns</strong> — phases, microtasks, macrotasks.</p>
