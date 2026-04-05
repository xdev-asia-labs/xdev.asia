---
id: 019d8b40-g504-7001-b008-nodejs0000504
title: 'Bài 20: Production Monitoring & Scaling'
slug: bai-20-production-monitoring-va-scaling
description: >-
  Pino structured logging, OpenTelemetry tracing. Prometheus metrics,
  Grafana dashboards. PM2 ecosystem. Graceful shutdown, health checks.
  Horizontal scaling, stateless design.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Testing, Performance & Production"
course:
  id: 019d8b40-g100-7001-b008-nodejs0000001
  title: 'Node.js Core: Từ Cơ bản đến Nâng cao'
  slug: nodejs-core-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5253" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5253)"/>

  <!-- Decorations -->
  <g>
    <circle cx="738" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="876" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1014" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="652" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="224" x2="1100" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="254" x2="1050" y2="324" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">💻 Lập trình — Bài 20</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Production Monitoring &amp; Scaling</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Node.js Core: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Testing, Performance &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-pino"><strong>1. Structured Logging (Pino)</strong></h2>

<pre><code class="language-ts">import pino from 'pino'

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV !== 'production'
    ? { target: 'pino-pretty', options: { colorize: true } }
    : undefined,
  redact: ['req.headers.authorization', 'password'],
})

// Context logging
const reqLogger = logger.child({ requestId: crypto.randomUUID() })
reqLogger.info({ userId: '123', action: 'login' }, 'User logged in')
reqLogger.error({ err, orderId: '456' }, 'Payment failed')

// HTTP request logging (middleware)
import pinoHttp from 'pino-http'
const httpLogger = pinoHttp({ logger })
</code></pre>

<h2 id="2-otel"><strong>2. OpenTelemetry</strong></h2>

<pre><code class="language-ts">// tracing.ts — import first!
import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node'

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://jaeger:4318/v1/traces',
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-http': { enabled: true },
      '@opentelemetry/instrumentation-pg': { enabled: true },
      '@opentelemetry/instrumentation-redis': { enabled: true },
    }),
  ],
})

sdk.start()
process.on('SIGTERM', () => sdk.shutdown())
</code></pre>

<pre><code class="language-bash">node --require ./tracing.js app.js
</code></pre>

<h2 id="3-prometheus"><strong>3. Prometheus Metrics</strong></h2>

<pre><code class="language-ts">import { Registry, Counter, Histogram, collectDefaultMetrics } from 'prom-client'

const register = new Registry()
collectDefaultMetrics({ register })

const httpRequests = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
  registers: [register],
})

const httpDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'path'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5],
  registers: [register],
})

// Middleware
function metricsMiddleware(req, res, next) {
  const end = httpDuration.startTimer({ method: req.method, path: req.path })
  res.on('finish', () => {
    httpRequests.inc({ method: req.method, path: req.path, status: res.statusCode })
    end()
  })
  next()
}

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType)
  res.end(await register.metrics())
})
</code></pre>

<h2 id="4-health-check"><strong>4. Health Checks</strong></h2>

<pre><code class="language-ts">app.get('/health', async (req, res) => {
  const checks = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    status: 'ok' as string,
    checks: {} as Record&lt;string, string&gt;,
  }

  try {
    await pool.query('SELECT 1')
    checks.checks.database = 'ok'
  } catch {
    checks.checks.database = 'error'
    checks.status = 'degraded'
  }

  try {
    await redis.ping()
    checks.checks.redis = 'ok'
  } catch {
    checks.checks.redis = 'error'
    checks.status = 'degraded'
  }

  const statusCode = checks.status === 'ok' ? 200 : 503
  res.status(statusCode).json(checks)
})
</code></pre>

<h2 id="5-graceful-shutdown"><strong>5. Graceful Shutdown</strong></h2>

<pre><code class="language-ts">async function gracefulShutdown(signal: string) {
  logger.info(`Received ${signal}. Starting graceful shutdown...`)

  // Stop accepting new connections
  server.close()

  // Drain existing connections (max 10s)
  const timeout = setTimeout(() => {
    logger.error('Forced shutdown after timeout')
    process.exit(1)
  }, 10000)

  try {
    await pool.end()      // Close DB connections
    await redis.quit()    // Close Redis
    clearTimeout(timeout)
    logger.info('Shutdown complete')
    process.exit(0)
  } catch (err) {
    logger.error({ err }, 'Error during shutdown')
    process.exit(1)
  }
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))
</code></pre>

<h2 id="6-scaling"><strong>6. Production Checklist</strong></h2>

<table>
<thead><tr><th>Hạng mục</th><th>Checklist</th></tr></thead>
<tbody>
<tr><td>Logging</td><td>Pino structured, request IDs, log levels</td></tr>
<tr><td>Monitoring</td><td>Prometheus + Grafana, OpenTelemetry</td></tr>
<tr><td>Error Tracking</td><td>Sentry, unhandledRejection handler</td></tr>
<tr><td>Health Checks</td><td>/health endpoint, readiness probe</td></tr>
<tr><td>Graceful Shutdown</td><td>SIGTERM handler, connection draining</td></tr>
<tr><td>Security</td><td>Helmet, CORS, rate limiting, input validation</td></tr>
<tr><td>Performance</td><td>Cluster/PM2, connection pooling, caching</td></tr>
</tbody>
</table>

<p>🎉 Hoàn thành series <strong>Node.js Core: Từ Cơ bản đến Nâng cao</strong>!</p>
