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
