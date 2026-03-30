---
id: 019d8b40-a401-7001-b001-nestjs000401
title: 'Bài 13: Interceptors, Middleware và Request Lifecycle'
slug: bai-13-interceptors-middleware-va-request-lifecycle
description: >-
  Middleware, Interceptors, Request lifecycle trong NestJS.
  Logging, Transform response, Performance tracking, Request ID.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-request-lifecycle"><strong>1. Request Lifecycle trong NestJS</strong></h2>

<p>Thứ tự xử lý một request trong NestJS:</p>

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

<h2 id="4-dang-ky-global"><strong>4. Đăng ký Global</strong></h2>

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

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><strong>Middleware</strong>: Chạy đầu tiên, thích hợp cho logging, CORS, compression</li>
<li><strong>Guards</strong>: Quyết định request có được xử lý không (auth/authz)</li>
<li><strong>Interceptors</strong>: Transform response, caching, timing, error mapping</li>
<li><strong>Pipes</strong>: Validation và transformation data</li>
<li><strong>Exception Filters</strong>: Xử lý và format lỗi</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>WebSockets và Real-time Communication</strong>.</p>
