---
id: 019d8b40-a504-7001-b001-nestjs000504
title: 'Bài 20: Production Deployment và Monitoring'
slug: bai-20-production-deployment-va-monitoring
description: >-
  Production deployment strategies, Nginx reverse proxy, PM2 cluster.
  Health checks, Logging, Prometheus metrics, Grafana dashboards.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Microservices, Testing & Production"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-health-checks"><strong>1. Health Checks</strong></h2>

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

<h2 id="2-logging"><strong>2. Structured Logging</strong></h2>

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

<h2 id="3-prometheus"><strong>3. Prometheus Metrics</strong></h2>

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

<h2 id="4-nginx"><strong>4. Nginx Reverse Proxy</strong></h2>

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

<h2 id="5-pm2"><strong>5. PM2 Cluster Mode</strong></h2>

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

<h2 id="6-grafana"><strong>6. Monitoring Stack (Docker Compose)</strong></h2>

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

<h2 id="7-checklist"><strong>7. Production Checklist</strong></h2>

<table>
<thead>
<tr><th>Hạng mục</th><th>Chi tiết</th></tr>
</thead>
<tbody>
<tr><td>Security</td><td>Helmet, CORS, Rate limiting, Input validation</td></tr>
<tr><td>Performance</td><td>Compression, Caching, Connection pooling</td></tr>
<tr><td>Reliability</td><td>Health checks, Graceful shutdown, Retry logic</td></tr>
<tr><td>Observability</td><td>Structured logging, Metrics, Tracing</td></tr>
<tr><td>CI/CD</td><td>Automated tests, Docker build, Deploy pipeline</td></tr>
<tr><td>Infrastructure</td><td>Reverse proxy, SSL, Load balancing</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. Tổng kết Series</strong></h2>

<p>Qua 20 bài học, bạn đã nắm vững NestJS từ nền tảng đến production:</p>

<ul>
<li><strong>Phần 1</strong>: TypeScript, Controllers, Routing — nền tảng cốt lõi</li>
<li><strong>Phần 2</strong>: DI, Modules, Database, Validation — xây dựng data layer</li>
<li><strong>Phần 3</strong>: Authentication, Authorization, Security — bảo mật ứng dụng</li>
<li><strong>Phần 4</strong>: WebSockets, GraphQL, Caching, Scheduling — tính năng nâng cao</li>
<li><strong>Phần 5</strong>: Microservices, Testing, Docker, Production — triển khai thực tế</li>
</ul>

<p>Chúc bạn thành công với NestJS!</p>
