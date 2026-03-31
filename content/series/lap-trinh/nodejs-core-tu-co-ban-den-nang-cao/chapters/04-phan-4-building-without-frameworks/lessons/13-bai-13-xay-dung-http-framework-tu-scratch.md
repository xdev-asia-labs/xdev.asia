---
id: 019d8b40-g401-7001-b008-nodejs0000401
title: 'Bài 13: Xây dựng HTTP Framework từ Scratch'
slug: bai-13-xay-dung-http-framework-tu-scratch
description: >-
  Xây dựng mini framework: Router, middleware pipeline, request
  parsing, response helpers. So sánh với Express/Fastify internals.
  Content negotiation, CORS.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Building Without Frameworks"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<h2 id="1-router"><strong>1. Router Engine</strong></h2>

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

<h2 id="2-middleware"><strong>2. Middleware Pipeline</strong></h2>

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

<h2 id="3-request-response"><strong>3. Request & Response Helpers</strong></h2>

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

<h2 id="4-usage"><strong>4. Sử dụng Framework</strong></h2>

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

<p>Bài tiếp theo: <strong>Database Drivers & Connection Pooling</strong> — pg, mysql2, better-sqlite3.</p>
