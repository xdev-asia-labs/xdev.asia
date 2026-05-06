---
id: 019d8b40-a504-7001-b001-nestjs000504
title: 第 20 課：生產部署與監控
slug: bai-20-production-deployment-va-monitoring
description: 生產策略部署、Nginx反向代理、PM2叢集。健康檢查、日誌記錄、Prometheus 指標、Grafana 儀表板。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 第 5 部分：微服務、測試與生產
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5700" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5700)"/>

  <!-- Decorations -->
  <g>
    <circle cx="890" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="970" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="80" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1050.3108891324553,202.5 1050.3108891324553,237.5 1020,255 989.6891108675446,237.5 989.6891108675446,202.5 1020,185" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 程式設計 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：生產部署和</tspan>
      <tspan x="60" dy="42">監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：微服務、測試與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-health-checks"><strong>1. 健康檢查</strong></h2>

<pre><code class="language-bash">npm install @nestjs/terminus
</code></pre>

<pre><code class="language-typescript">// health/health.controller.ts
import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
  MemoryHealthIndicator,
  DiskHealthIndicator,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // Database
      () =&gt; this.db.pingCheck('database'),
      // Memory: heap &lt; 300MB
      () =&gt; this.memory.checkHeap('memory_heap', 300 * 1024 * 1024),
      // Disk: &lt; 90% used
      () =&gt; this.disk.checkStorage('disk', {
        thresholdPercent: 0.9,
        path: '/',
      }),
    ]);
  }

  @Get('ready')
  @HealthCheck()
  readiness() {
    return this.health.check([
      () =&gt; this.db.pingCheck('database'),
    ]);
  }

  @Get('live')
  @HealthCheck()
  liveness() {
    return this.health.check([
      () =&gt; this.memory.checkHeap('memory', 500 * 1024 * 1024),
    ]);
  }
}
</code></pre>

<h2 id="2-logging"><strong>2. 結構化日誌記錄</strong></h2>

<pre><code class="language-bash">npm install winston nest-winston
</code></pre>

<pre><code class="language-typescript">// main.ts
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';

const app = await NestFactory.create(AppModule, {
  logger: WinstonModule.createLogger({
    transports: [
      // Console (development)
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike('NestApp'),
        ),
      }),
      // File (production)
      new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json(),
        ),
        maxsize: 10 * 1024 * 1024,  // 10MB
        maxFiles: 5,
      }),
      new winston.transports.File({
        filename: 'logs/combined.log',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json(),
        ),
      }),
    ],
  }),
});
</code></pre>

<h2 id="3-prometheus"><strong>3. 普羅米修斯指標</strong></h2>

<pre><code class="language-bash">npm install prom-client @willsoto/nestjs-prometheus
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register({
      path: '/metrics',
      defaultMetrics: { enabled: true },
    }),
  ],
})
export class AppModule {}
</code></pre>

<pre><code class="language-typescript">// Custom metrics
import { Counter, Histogram } from 'prom-client';
import { InjectMetric, makeCounterProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

// Đăng ký trong module
@Module({
  providers: [
    makeCounterProvider({
      name: 'http_requests_total',
      help: 'Total HTTP requests',
      labelNames: ['method', 'path', 'status'],
    }),
    makeHistogramProvider({
      name: 'http_request_duration_seconds',
      help: 'HTTP request duration',
      labelNames: ['method', 'path'],
      buckets: [0.01, 0.05, 0.1, 0.5, 1, 5],
    }),
  ],
})
export class MetricsModule {}

// Interceptor thu thập metrics
@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(
    @InjectMetric('http_requests_total') private counter: Counter,
    @InjectMetric('http_request_duration_seconds') private histogram: Histogram,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const { method, route } = req;
    const path = route?.path || req.url;
    const timer = this.histogram.startTimer({ method, path });

    return next.handle().pipe(
      tap(() =&gt; {
        const status = context.switchToHttp().getResponse().statusCode;
        this.counter.inc({ method, path, status });
        timer();
      }),
    );
  }
}
</code></pre>

<h2 id="4-nginx"><strong>4.Nginx反向代理</strong></h2>

<pre><code class="language-nginx"># nginx/default.conf
upstream nestapp {
    server app:3000;
}

server {
    listen 80;
    server_name api.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.example.com;

    ssl_certificate     /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

    # Gzip
    gzip on;
    gzip_types application/json text/plain;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

    location / {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://nestapp;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Health check (không rate limit)
    location /health {
        proxy_pass http://nestapp;
        access_log off;
    }

    # Metrics (restrict access)
    location /metrics {
        allow 10.0.0.0/8;
        deny all;
        proxy_pass http://nestapp;
    }
}
</code></pre>

<h2 id="5-pm2"><strong>5. PM2集群模式</strong></h2>

<pre><code class="language-javascript">// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'nestapp',
    script: 'dist/main.js',
    instances: 'max',       // Số CPU cores
    exec_mode: 'cluster',
    max_memory_restart: '500M',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    // Graceful shutdown
    kill_timeout: 5000,
    listen_timeout: 10000,
    // Logging
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }],
};
</code></pre>

<pre><code class="language-typescript">// main.ts — Graceful shutdown
app.enableShutdownHooks();

// Trong service
@Injectable()
export class AppService implements OnModuleDestroy {
  async onModuleDestroy() {
    // Đóng connections
    await this.dataSource.destroy();
    await this.redisClient.quit();
    this.logger.log('Graceful shutdown completed');
  }
}
</code></pre>

<h2 id="6-grafana"><strong>6. 監控堆疊（Docker Compose）</strong></h2>

<pre><code class="language-yaml"># docker-compose.monitoring.yml
services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana-data:/var/lib/grafana

volumes:
  grafana-data:
</code></pre>

<pre><code class="language-yaml"># prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'nestapp'
    static_configs:
      - targets: ['app:3000']
    metrics_path: /metrics
</code></pre>

<h2 id="7-checklist"><strong>7. 生產檢查表</strong></h2>

<table>
<thead>
<tr><th>類別</th><th>詳情</th></tr>
</thead>
<tbody>
<tr><td>安全性</td><td>頭盔、CORS、速率限制、輸入驗證</td></tr>
<tr><td>效能</td><td>壓縮、快取、連接池</td></tr>
<tr><td>可靠性</td><td>健康檢查、正常關閉、重試邏輯</td></tr>
<tr><td>可觀察性</td><td>結構化日誌記錄、指標、追蹤</td></tr>
<tr><td>持續整合/持續交付</td><td>自動化測試、Docker 建置、部署管道</td></tr>
<tr><td>基礎設施</td><td>反向代理、SSL、負載平衡</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. 系列總結</strong></h2>

<p>透過 20 節課程，您已經掌握了 NestJS 從基礎到生產的全部內容：</p>

<ul>
<li><strong>第 1 部分</strong>：TypeScript、控制器、路由——核心基礎</li>
<li><strong>第2部分</strong>：DI、模組、資料庫、驗證－建構資料層</li>
<li><strong>第三部分</strong>：身份驗證、授權、安全性——應用程式安全</li>
<li><strong>第 4 部分</strong>：WebSockets、GraphQL、快取、調度——進階功能</li>
<li><strong>第五部分</strong>：微服務、測試、Docker、生產－實際部署</li>
</ul>

<p>祝您使用 NestJS 成功！</p>
