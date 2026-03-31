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
