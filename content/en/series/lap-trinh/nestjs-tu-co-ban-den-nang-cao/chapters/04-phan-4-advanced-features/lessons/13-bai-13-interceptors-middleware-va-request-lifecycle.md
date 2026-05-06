---
id: 019d8b40-a401-7001-b001-nestjs000401
title: 'Lesson 13: Interceptors, Middleware and Request Lifecycle'
slug: bai-13-interceptors-middleware-va-request-lifecycle
description: >-
  Middleware, Interceptors, Request lifecycle in NestJS. Logging, Transform
  response, Performance tracking, Request ID.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 4: Advanced Features'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-145" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-145)"/>

  <!-- Decorations -->
  <g>
    <circle cx="634" cy="112" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="702" cy="80" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="194" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.3826859021799,168.5 1005.3826859021799,195.5 982,209 958.6173140978201,195.5 958.6173140978201,168.5 982,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 13: Interceptors, Middleware and</tspan>
      <tspan x="60" dy="42">Request Lifecycle</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced Features</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-request-lifecycle"><strong>1. Request Lifecycle in NestJS</strong></h2>

<p>Order of processing a request in NestJS:</p>

<pre><code class="language-text">Incoming Request
  → Middleware (global → module → route)
    → Guards (global → controller → handler)
      → Interceptors pre-handler (global → controller → handler)
        → Pipes (global → controller → handler → param)
          → Controller Handler
        → Interceptors post-handler (handler → controller → global)
      → Exception Filters (handler → controller → global)
→ Outgoing Response
</code></pre>

<h2 id="2-middleware"><strong>2. Middleware</strong></h2>

<pre><code class="language-typescript">// common/middleware/logger.middleware.ts
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const { statusCode } = res;
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${duration}ms - ${ip} ${userAgent}`,
      );
    });

    next();
  }
}
</code></pre>

<pre><code class="language-typescript">// Đăng ký middleware trong AppModule
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, CorrelationIdMiddleware)
      .forRoutes('*')  // Tất cả routes
      .apply(AuthMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
</code></pre>

<h3>Correlation ID Middleware</h3>

<pre><code class="language-typescript">import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const correlationId = req.headers['x-correlation-id'] as string || uuidv4();
    req.headers['x-correlation-id'] = correlationId;
    res.setHeader('x-correlation-id', correlationId);
    next();
  }
}
</code></pre>

<h2 id="3-interceptors"><strong>3. Interceptors</strong></h2>

<h3>Transform Response Interceptor</h3>

<pre><code class="language-typescript">// common/interceptors/transform.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse&lt;T&gt; {
  statusCode: number;
  message: string;
  data: T;
  timestamp: string;
}

@Injectable()
export class TransformInterceptor&lt;T&gt; implements NestInterceptor&lt;T, ApiResponse&lt;T&gt;&gt; {
  intercept(context: ExecutionContext, next: CallHandler): Observable&lt;ApiResponse&lt;T&gt;&gt; {
    const statusCode = context.switchToHttp().getResponse().statusCode;

    return next.handle().pipe(
      map((data) =&gt; ({
        statusCode,
        message: 'Success',
        data,
        timestamp: new Date().toISOString(),
      })),
    );
  }
}
</code></pre>

<h3>Performance/Timing Interceptor</h3>

<pre><code class="language-typescript">@Injectable()
export class TimingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('Performance');

  intercept(context: ExecutionContext, next: CallHandler): Observable&lt;any&gt; {
    const start = Date.now();
    const { method, url } = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(() =&gt; {
        const duration = Date.now() - start;
        if (duration &gt; 1000) {
          this.logger.warn(`Slow request: ${method} ${url} - ${duration}ms`);
        }
      }),
    );
  }
}
</code></pre>

<h3>Cache Interceptor</h3>

<pre><code class="language-typescript">@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
  constructor(private cacheManager: Cache) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    if (request.method !== 'GET') return next.handle();

    const key = `cache:${request.url}`;
    const cached = await this.cacheManager.get(key);
    if (cached) return of(cached);

    return next.handle().pipe(
      tap((data) =&gt; this.cacheManager.set(key, data, 60_000)),
    );
  }
}
</code></pre>

<h3>Timeout Interceptor</h3>

<pre><code class="language-typescript">import { timeout, catchError } from 'rxjs/operators';
import { TimeoutError, throwError } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private readonly timeoutMs = 5000) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      timeout(this.timeoutMs),
      catchError((err) =&gt; {
        if (err instanceof TimeoutError) {
          throw new RequestTimeoutException('Request timed out');
        }
        return throwError(() =&gt; err);
      }),
    );
  }
}
</code></pre>

<h2 id="4-dang-ky-global"><strong>4. Register Global</strong></h2>

<pre><code class="language-typescript">// main.ts
app.useGlobalInterceptors(
  new TransformInterceptor(),
  new TimingInterceptor(),
);

// Hoặc qua module (hỗ trợ DI)
@Module({
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TimingInterceptor },
  ],
})
export class AppModule {}
</code></pre>

<h2 id="5-tong-ket"><strong>5. Summary</strong></h2>

<ul>
<li><strong>Middleware</strong>: Run first, suitable for logging, CORS, compression</li>
<li><strong>Guards</strong>: Decide whether the request will be processed (auth/authz)</li>
<li><strong>Interceptors</strong>: Transform response, caching, timing, error mapping</li>
<li><strong>Pipes</strong>: Validation and transformation data</li>
<li><strong>Exception Filters</strong>: Handle and format errors</li>
</ul>

<p>The next article will explore <strong>WebSockets and Real-time Communication</strong>.</p>
