---
id: 019d8b40-a303-7001-b001-nestjs000303
title: 'Bài 11: Security Best Practices'
slug: bai-11-security-best-practices
description: >-
  Helmet, CORS configuration, Rate Limiting với @nestjs/throttler,
  CSRF protection, Input sanitization. Security headers, HTTPS,
  Environment variables với @nestjs/config.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Authentication & Security"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1296" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1296)"/>

  <!-- Decorations -->
  <g>
    <circle cx="842" cy="76" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="826" cy="280" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="122" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="224" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="116" x2="1100" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="146" x2="1050" y2="216" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.8467875173176,150.5 992.8467875173176,181.5 966,197 939.1532124826824,181.5 939.1532124826824,150.5 966,135" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">💻 Lập trình — Bài 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Security Best Practices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Authentication &amp; Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-helmet"><strong>1. Helmet — Security Headers</strong></h2>

<pre><code class="language-bash">npm install helmet
</code></pre>

<pre><code class="language-typescript">// main.ts
import helmet from 'helmet';

const app = await NestFactory.create(AppModule);
app.use(helmet());
// Tự động thêm headers:
// X-Content-Type-Options: nosniff
// X-Frame-Options: SAMEORIGIN
// X-XSS-Protection: 0
// Strict-Transport-Security: max-age=15552000
// Content-Security-Policy: default-src 'self'
</code></pre>

<h2 id="2-cors"><strong>2. CORS Configuration</strong></h2>

<pre><code class="language-typescript">const app = await NestFactory.create(AppModule);
app.enableCors({
  origin: [
    'https://myapp.com',
    'https://admin.myapp.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 3600,
});
</code></pre>

<h2 id="3-rate-limiting"><strong>3. Rate Limiting với @nestjs/throttler</strong></h2>

<pre><code class="language-bash">npm install @nestjs/throttler
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      { name: 'short', ttl: 1000, limit: 3 },   // 3 req/giây
      { name: 'medium', ttl: 10000, limit: 20 }, // 20 req/10 giây
      { name: 'long', ttl: 60000, limit: 100 },  // 100 req/phút
    ]),
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard }, // Global
  ],
})
export class AppModule {}

// Custom limits per route
@Throttle([{ name: 'short', ttl: 1000, limit: 1 }])  // 1 req/giây
@Post('login')
login() { ... }

// Skip throttling
@SkipThrottle()
@Get('health')
health() { return 'OK'; }
</code></pre>

<h2 id="4-config"><strong>4. Environment Variables với @nestjs/config</strong></h2>

<pre><code class="language-bash">npm install @nestjs/config joi
</code></pre>

<pre><code class="language-typescript">// app.module.ts
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3000),
        DATABASE_URL: Joi.string().required(),
        JWT_ACCESS_SECRET: Joi.string().required().min(32),
        JWT_REFRESH_SECRET: Joi.string().required().min(32),
        REDIS_URL: Joi.string().optional(),
      }),
    }),
  ],
})
export class AppModule {}

// Sử dụng
@Injectable()
export class AuthService {
  constructor(private config: ConfigService) {}

  getJwtSecret(): string {
    return this.config.get&lt;string&gt;('JWT_ACCESS_SECRET');
  }
}
</code></pre>

<h2 id="5-input-sanitization"><strong>5. Input Sanitization</strong></h2>

<pre><code class="language-typescript">// Dùng class-transformer để sanitize
import { Transform } from 'class-transformer';

export class CreateCommentDto {
  @IsString()
  @Transform(({ value }) => value.replace(/&lt;[^>]*&gt;/g, ''))  // Strip HTML tags
  content: string;

  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;
}

// Hoặc dùng DOMPurify/sanitize-html cho HTML content
import sanitizeHtml from 'sanitize-html';

@Transform(({ value }) => sanitizeHtml(value, {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
  allowedAttributes: { a: ['href'] },
}))
htmlContent: string;
</code></pre>

<h2 id="6-sql-injection"><strong>6. Phòng chống SQL Injection</strong></h2>

<pre><code class="language-typescript">// ✅ Đúng — Parameterized queries (TypeORM)
const users = await repo.createQueryBuilder('user')
  .where('user.email = :email', { email: userInput })
  .getMany();

// ✅ Đúng — Prisma (tự động parameterized)
const users = await prisma.user.findMany({
  where: { email: userInput },
});

// ❌ SAI — String concatenation
const users = await repo.query(`SELECT * FROM users WHERE email = '${userInput}'`);
</code></pre>

<h2 id="7-other-practices"><strong>7. Các Best Practices khác</strong></h2>

<pre><code class="language-typescript">// 1. Compression
import compression from 'compression';
app.use(compression());

// 2. Request size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// 3. Logging — không log sensitive data
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const { password, token, ...safeBody } = req.body;
    console.log(`${req.method} ${req.url}`, safeBody);
    return next.handle();
  }
}

// 4. Graceful shutdown
app.enableShutdownHooks();
</code></pre>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<table>
<thead>
<tr><th>Mối đe dọa</th><th>Giải pháp</th></tr>
</thead>
<tbody>
<tr><td>XSS</td><td>Helmet, Input sanitization, CSP headers</td></tr>
<tr><td>SQL Injection</td><td>Parameterized queries (TypeORM/Prisma)</td></tr>
<tr><td>Brute Force</td><td>Rate Limiting (@nestjs/throttler)</td></tr>
<tr><td>CSRF</td><td>SameSite cookies, CSRF tokens</td></tr>
<tr><td>Sensitive Data</td><td>@nestjs/config, .env files, không log passwords</td></tr>
<tr><td>Clickjacking</td><td>X-Frame-Options via Helmet</td></tr>
<tr><td>CORS</td><td>Whitelist origins</td></tr>
</tbody>
</table>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Session, Cookies và OAuth2</strong>.</p>
