---
id: 019d8b40-g103-7001-b008-nodejs0000103
title: 'Lesson 3: Module System & Package Management'
slug: bai-3-module-system-va-package-management
description: >-
  CommonJS vs ES Modules, module resolution algorithm. Package.json field
  exports, conditional exports. npm, pnpm workspace. Node.js built-in test
  runner, permission model.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Node.js Internals'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: From Basics to Advanced'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2467" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2467)"/>

  <!-- Decorations -->
  <g>
    <circle cx="758" cy="204" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="916" cy="262" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1074" cy="60" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="732" cy="118" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="176" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="184" x2="1100" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="214" x2="1050" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.7749907475932,114.5 967.7749907475932,153.5 934,173 900.2250092524068,153.5 900.2250092524068,114.50000000000001 934,95" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Module System & Package Management</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Node.js Internals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cjs-vs-esm"><strong>1. CommonJS vs ES Modules</strong></h2>

<table>
<thead><tr><th>Features</th><th>CommonJS (CJS)</th><th>ES Modules (ESM)</th></tr></thead>
<tbody>
<tr><td>Syntax</td><td>require() / module.exports</td><td>import / export</td></tr>
<tr><td>Loading</td><td>Synchronous</td><td>Asynchronous</td></tr>
<tr><td>Top-level await</td><td>No</td><td>Yes</td></tr>
<tr><td>__dirname</td><td>Yes</td><td>import.meta.dirname (Node 21+)</td></tr>
<tr><td>JSON import</td><td>require('./data.json')</td><td>import data from './data.json' with { type: 'json' }</td></tr>
<tr><td>Tree-shaking</td><td>No</td><td>Yes (static analysis)</td></tr>
</tbody>
</table>

<pre><code class="language-ts">// ESM — recommended
import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Dynamic import
const module = await import('./utils.js')

// import.meta
console.log(import.meta.url)      // file:///path/to/file.js
console.log(import.meta.dirname)  // /path/to (Node.js 21+)
console.log(import.meta.filename) // /path/to/file.js
</code></pre>

<h2 id="2-package-json"><strong>2. Package.json exports Field</strong></h2>

<pre><code class="language-json">{
  "name": "my-lib",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./utils": {
      "import": "./dist/utils.mjs",
      "require": "./dist/utils.cjs"
    }
  },
  "files": ["dist"],
  "engines": {
    "node": ">=22"
  }
}
</code></pre>

<h2 id="3-pnpm"><strong>3. pnpm Workspace</strong></h2>

<pre><code class="language-yaml"># pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
</code></pre>

<pre><code class="language-bash"># Thêm dependency cho workspace
pnpm add lodash --filter @myorg/server
pnpm add @myorg/shared --filter @myorg/server --workspace

# Chạy script cho tất cả packages
pnpm -r run build
pnpm -r --parallel run dev
</code></pre>

<h2 id="4-permission-model"><strong>4. Permission Model (Node.js 22+)</strong></h2>

<pre><code class="language-bash"># Chạy với permission giới hạn
node --experimental-permission \
  --allow-fs-read=/app/data \
  --allow-fs-write=/app/logs \
  --allow-child-process \
  app.js

# Kiểm tra permission trong code
if (process.permission.has('fs.read', '/etc/passwd')) {
  console.log('Has read permission')
}
</code></pre>

<h2 id="5-built-in-test"><strong>5. Built-in Test Runner</strong></h2>

<pre><code class="language-ts">import { describe, it, before, after, mock } from 'node:test'
import assert from 'node:assert/strict'

describe('Calculator', () => {
  it('adds two numbers', () => {
    assert.strictEqual(1 + 2, 3)
  })

  it('handles async', async () => {
    const result = await Promise.resolve(42)
    assert.strictEqual(result, 42)
  })

  it('supports mocking', () => {
    const fn = mock.fn((a: number, b: number) => a + b)
    fn(1, 2)
    assert.strictEqual(fn.mock.calls.length, 1)
    assert.deepStrictEqual(fn.mock.calls[0].arguments, [1, 2])
  })
})
</code></pre>

<pre><code class="language-bash">node --test --test-reporter spec
</code></pre>

<p>Next article: <strong>TypeScript & Modern JavaScript</strong> — tsx, ts-node, type stripping.</p>
