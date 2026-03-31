---
id: 019d8b40-g103-7001-b008-nodejs0000103
title: 'Bài 3: Module System & Package Management'
slug: bai-3-module-system-va-package-management
description: >-
  CommonJS vs ES Modules, module resolution algorithm. Package.json
  exports field, conditional exports. npm, pnpm workspace. Node.js
  built-in test runner, permission model.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Node.js Internals"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-cjs-vs-esm"><strong>1. CommonJS vs ES Modules</strong></h2>

<table>
<thead><tr><th>Feature</th><th>CommonJS (CJS)</th><th>ES Modules (ESM)</th></tr></thead>
<tbody>
<tr><td>Syntax</td><td>require() / module.exports</td><td>import / export</td></tr>
<tr><td>Loading</td><td>Synchronous</td><td>Asynchronous</td></tr>
<tr><td>Top-level await</td><td>Không</td><td>Có</td></tr>
<tr><td>__dirname</td><td>Có</td><td>import.meta.dirname (Node 21+)</td></tr>
<tr><td>JSON import</td><td>require('./data.json')</td><td>import data from './data.json' with { type: 'json' }</td></tr>
<tr><td>Tree-shaking</td><td>Không</td><td>Có (static analysis)</td></tr>
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

<p>Bài tiếp theo: <strong>TypeScript & Modern JavaScript</strong> — tsx, ts-node, type stripping.</p>
