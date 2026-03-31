---
id: 019d8b40-g104-7001-b008-nodejs0000104
title: 'Bài 4: TypeScript & Modern JavaScript trong Node.js'
slug: bai-4-typescript-va-modern-javascript
description: >-
  TypeScript setup cho Node.js, tsx/ts-node. Type-safe configuration,
  path aliases. ESBuild/SWC compilation. Node.js type stripping
  (--experimental-strip-types). Decorators, metadata.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Node.js Internals"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-ts-setup"><strong>1. TypeScript Setup cho Node.js</strong></h2>

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

<h2 id="2-type-stripping"><strong>2. Node.js Type Stripping (22+)</strong></h2>

<pre><code class="language-bash"># Chạy TypeScript trực tiếp — không cần biên dịch
node --experimental-strip-types src/app.ts

# Hạn chế: không hỗ trợ enums, namespaces, decorators
# Chỉ strip types, không transform syntax
</code></pre>

<h2 id="3-tsx"><strong>3. tsx — TypeScript Execute</strong></h2>

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

<h2 id="4-path-aliases"><strong>4. Path Aliases</strong></h2>

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

<h2 id="5-esbuild"><strong>5. Build với ESBuild/SWC</strong></h2>

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

<h2 id="6-decorators"><strong>6. Decorators (Stage 3)</strong></h2>

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

<p>Bài tiếp theo: <strong>File System & Path</strong> — fs/promises, file watching, atomic writes.</p>
