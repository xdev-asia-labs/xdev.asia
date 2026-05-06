---
id: 019d8b40-g401-7001-b008-nodejs0000401
title: 第 13 課：從頭開始建立 HTTP 框架
slug: bai-13-xay-dung-http-framework-tu-scratch
description: 建構迷你框架：路由器、中間件管道、請求解析、回應助手。與 Express/Fastify 內部結構進行比較。內容協商、CORS。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：無框架構建
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: Node.js 核心：從基礎到高級
  slug: nodejs-core-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6560" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6560)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="246" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="130" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="274" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 程式設計 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：從頭開始建立 HTTP 框架</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js 核心：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：無框架構建</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-router"><strong>1. 路由器引擎</strong></h2>

<pre><code class="language-ts">type Handler = (req: AppRequest, res: AppResponse) => Promise&lt;void&gt; | void
type Middleware = (req: AppRequest, res: AppResponse, next: () => Promise&lt;void&gt;) => Promise&lt;void&gt; | void

interface Route {
  method: string
  pattern: RegExp
  paramNames: string[]
  handler: Handler
}

class Router {
  private routes: Route[] = []

  private addRoute(method: string, path: string, handler: Handler) {
    const paramNames: string[] = []
    const pattern = new RegExp(
      '^' + path.replace(/:(\w+)/g, (_, name) => {
        paramNames.push(name)
        return '([^/]+)'
      }) + '$'
    )
    this.routes.push({ method, pattern, paramNames, handler })
  }

  get(path: string, handler: Handler) { this.addRoute('GET', path, handler) }
  post(path: string, handler: Handler) { this.addRoute('POST', path, handler) }
  put(path: string, handler: Handler) { this.addRoute('PUT', path, handler) }
  delete(path: string, handler: Handler) { this.addRoute('DELETE', path, handler) }

  match(method: string, url: string) {
    for (const route of this.routes) {
      if (route.method !== method) continue
      const match = url.match(route.pattern)
      if (match) {
        const params: Record&lt;string, string&gt; = {}
        route.paramNames.forEach((name, i) => params[name] = match[i + 1])
        return { handler: route.handler, params }
      }
    }
    return null
  }
}
</code></pre>

<h2 id="2-middleware"><strong>2. 中间件管道</strong></h2>

<pre><code class="language-ts">class App {
  private router = new Router()
  private middlewares: Middleware[] = []

  use(middleware: Middleware) {
    this.middlewares.push(middleware)
  }

  private async runMiddleware(req: AppRequest, res: AppResponse, handler: Handler) {
    let index = 0
    const next = async (): Promise&lt;void&gt; => {
      if (index < this.middlewares.length) {
        const mw = this.middlewares[index++]
        await mw(req, res, next)
      } else {
        await handler(req, res)
      }
    }
    await next()
  }

  async handleRequest(req: IncomingMessage, res: ServerResponse) {
    const url = new URL(req.url!, `http://${req.headers.host}`)
    const appReq = new AppRequest(req, url)
    const appRes = new AppResponse(res)

    const matched = this.router.match(req.method!, url.pathname)
    if (matched) {
      appReq.params = matched.params
      await this.runMiddleware(appReq, appRes, matched.handler)
    } else {
      appRes.status(404).json({ error: 'Not Found' })
    }
  }

  listen(port: number) {
    const server = createServer((req, res) => this.handleRequest(req, res))
    server.listen(port, () => console.log(`Server on :${port}`))
  }
}
</code></pre>

<h2 id="3-request-response"><strong>3. 请求和响应助手</strong></h2>

<pre><code class="language-ts">class AppRequest {
  params: Record&lt;string, string&gt; = {}
  query: Record&lt;string, string&gt;
  private _body: unknown

  constructor(public raw: IncomingMessage, public url: URL) {
    this.query = Object.fromEntries(url.searchParams)
  }

  async body&lt;T&gt;(): Promise&lt;T&gt; {
    if (this._body) return this._body as T
    const chunks: Buffer[] = []
    for await (const chunk of this.raw) chunks.push(chunk as Buffer)
    const text = Buffer.concat(chunks).toString()
    this._body = JSON.parse(text)
    return this._body as T
  }

  get headers() { return this.raw.headers }
  get method() { return this.raw.method! }
}

class AppResponse {
  private statusCode = 200

  constructor(private raw: ServerResponse) {}

  status(code: number) { this.statusCode = code; return this }

  json(data: unknown) {
    this.raw.writeHead(this.statusCode, { 'Content-Type': 'application/json' })
    this.raw.end(JSON.stringify(data))
  }

  send(text: string) {
    this.raw.writeHead(this.statusCode, { 'Content-Type': 'text/plain' })
    this.raw.end(text)
  }
}
</code></pre>

<h2 id="4-usage"><strong>4. 使用框架</strong></h2>

<pre><code class="language-ts">const app = new App()

// Middleware: logging
app.use(async (req, res, next) => {
  const start = Date.now()
  await next()
  console.log(`${req.method} ${req.url.pathname} ${Date.now() - start}ms`)
})

// Middleware: CORS
app.use(async (req, res, next) => {
  res.raw.setHeader('Access-Control-Allow-Origin', '*')
  res.raw.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  await next()
})

// Routes
app.router.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json({ id, name: 'Nguyen Van A' })
})

app.router.post('/api/users', async (req, res) => {
  const body = await req.body&lt;{ name: string }&gt;()
  res.status(201).json({ id: '1', name: body.name })
})

app.listen(3000)
</code></pre>

<p>下一篇： <strong>資料庫驅動程式和連接池</strong> — pg、mysql2、better-sqlite3。</p>
