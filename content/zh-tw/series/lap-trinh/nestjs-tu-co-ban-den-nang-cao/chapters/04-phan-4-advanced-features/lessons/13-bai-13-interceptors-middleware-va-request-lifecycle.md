---
id: 019d8b40-a401-7001-b001-nestjs000401
title: 第 13 課：攔截器、中介軟體和請求生命週期
slug: bai-13-interceptors-middleware-va-request-lifecycle
description: NestJS 中的中介軟體、攔截器、請求生命週期。日誌記錄、轉換回應、效能追蹤、請求 ID。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：進階功能
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：攔截器、中介軟體和</tspan>
      <tspan x="60" dy="42">請求生命週期</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階功能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-request-lifecycle"><strong>1.NestJS中的請求生命週期</strong></h2>

<p>NestJS 中處理請求的順序：</p>

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

<h2 id="2-middleware"><strong>2. 中介軟體</strong></h2>

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

<h3>關聯ID中介軟體</h3>

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

<h2 id="3-interceptors"><strong>3.攔截器</strong></h2>

<h3>轉換響應攔截器</h3>

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

<h3>性能/定時攔截器</h3>

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

<h3>快取攔截器</h3>

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

<h3>逾時攔截器</h3>

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

<h2 id="4-dang-ky-global"><strong>4. 註冊全球</strong></h2>

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

<h2 id="5-tong-ket"><strong>5. 總結</strong></h2>

<ul>
<li><strong>中介軟體</strong>：先運行，適合日誌記錄、CORS、壓縮</li>
<li><strong>衛兵</strong>：決定是否要處理請求（auth/authz）</li>
<li><strong>攔截器</strong>：轉換回應、快取、計時、錯誤映射</li>
<li><strong>管道</strong>：驗證和轉換數據</li>
<li><strong>異常過濾器</strong>：處理和格式錯誤</li>
</ul>

<p>下一篇文章將探討 <strong>WebSockets 和即時通信</strong>。</p>
