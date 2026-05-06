---
id: 019d8b40-g104-7001-b008-nodejs0000104
title: 'レッスン 4: Node.js の TypeScript と最新の JavaScript'
slug: bai-4-typescript-va-modern-javascript
description: >-
  Node.js、tsx/ts-node の TypeScript セットアップ。タイプセーフな構成、パス エイリアス。 ESBuild/SWC コンパイル。
  Node.js タイプの除去 (--experimental-strip-types)。デコレータ、メタデータ。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: Node.js の内部構造'
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js コア: 基本から高度まで'
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5591" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5591)"/>

  <!-- Decorations -->
  <g>
    <circle cx="693" cy="109" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="879" cy="75" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="41" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1018.444863728671,172 1018.444863728671,206 989,223 959.555136271329,206 959.555136271329,172 989,155" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: TypeScript と最新の JavaScript</tspan>
      <tspan x="60" dy="42">Node.jsで</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js コア: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Node.js の内部構造</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ts-setup"><strong>1. Node.js の TypeScript セットアップ</strong></h2>

<pre><code class="language-bash">pnpm add -D typescript @types/node tsx
npx tsc --init
</code></pre>

<pre><code class="language-json">// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2023",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "sourceMap": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
</code></pre>

<h2 id="2-type-stripping"><strong>2. Node.js タイプの除去 (22+)</strong></h2>

<pre><code class="language-bash"># Chạy TypeScript trực tiếp — không cần biên dịch
node --experimental-strip-types src/app.ts

# Hạn chế: không hỗ trợ enums, namespaces, decorators
# Chỉ strip types, không transform syntax
</code></pre>

<h2 id="3-tsx"><strong>3. tsx — TypeScript の実行</strong></h2>

<pre><code class="language-json">// package.json
{
  "scripts": {
    "dev": "tsx watch src/app.ts",
    "start": "node dist/app.js",
    "build": "tsc",
    "typecheck": "tsc --noEmit"
  }
}
</code></pre>

<pre><code class="language-ts">// src/app.ts
import { createServer } from 'node:http'

interface Config {
  port: number
  host: string
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || '0.0.0.0',
}

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ status: 'ok', timestamp: Date.now() }))
})

server.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}`)
})
</code></pre>

<h2 id="4-path-aliases"><strong>4. パスのエイリアス</strong></h2>

<pre><code class="language-ts">// src/utils/logger.ts
export function log(message: string) {
  console.log(`[${new Date().toISOString()}] ${message}`)
}

// src/app.ts — dùng alias
import { log } from '@/utils/logger'
log('Server started')
</code></pre>

<pre><code class="language-bash"># tsx hỗ trợ paths aliases tự động
# Với tsc build, cần tsc-alias
pnpm add -D tsc-alias
</code></pre>

<h2 id="5-esbuild"><strong>5. ESBuild/SWC でビルドする</strong></h2>

<pre><code class="language-ts">// build.ts
import { build } from 'esbuild'

await build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: 'node',
  target: 'node22',
  outdir: 'dist',
  format: 'esm',
  sourcemap: true,
  external: ['pg', 'redis'], // Không bundle native modules
})
</code></pre>

<h2 id="6-decorators"><strong>6. デコレーター (ステージ 3)</strong></h2>

<pre><code class="language-ts">// Decorators — TC39 Stage 3, Node.js native support
function log(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(`Calling ${String(context.name)} with`, args)
    const result = target.apply(this, args)
    console.log(`Result:`, result)
    return result
  }
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b
  }
}
</code></pre>

<p>次の記事: <strong>ファイルシステムとパス</strong> — fs/promise、ファイル監視、アトミック書き込み。</p>
