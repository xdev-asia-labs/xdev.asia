---
id: 019d8b40-a201-7001-b001-nestjs000201
title: 'Lesson 5: Providers and Dependency Injection'
slug: bai-5-providers-va-dependency-injection
description: >-
  Deep understanding of Providers, Services, Dependency Injection containers.
  Custom providers, useClass, useValue, useFactory, useExisting. Injection
  scopes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Providers, Dependency Injection & Data Layer'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="919" cy="67" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="738" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1057" cy="265" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="876" cy="104" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="203" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="137" x2="1100" y2="217" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="167" x2="1050" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.712812921102,221 1064.712812921102,253 1037,269 1009.287187078898,253 1009.287187078898,221 1037,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Providers and Dependency Injection</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Providers, Dependency Injection & Data Layer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-providers-la-gi"><strong>1. What are Providers?</strong></h2>

<p>Providers are the core concept of NestJS. Any class is marked <code>@Injectable()</code> can all be providers — Services, Repositories, Factories, Helpers, etc. Main idea: providers can be <strong>inject. inject</strong> into other classes through the constructor, creating a relationship <strong>loose coupling</strong>.</p>

<pre><code class="language-typescript">import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
</code></pre>

<h2 id="2-dependency-injection"><strong>2. Dependency Injection (DI) in NestJS</strong></h2>

<p>NestJS has a built-in IoC (Inversion of Control) container, which manages the creation and injection of dependencies automatically.</p>

<pre><code class="language-typescript">@Controller('cats')
export class CatsController {
  // NestJS IoC container tự động:
  // 1. Tìm provider CatsService trong module
  // 2. Tạo instance (hoặc lấy singleton có sẵn)
  // 3. Inject vào constructor parameter
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }
}
</code></pre>

<h3 id="di-flow"><strong>DI Flow</strong></h3>

<pre><code>1. @Module({ providers: [CatsService] })
   → NestJS đăng ký CatsService vào IoC container

2. constructor(private readonly catsService: CatsService)
   → NestJS nhận biết CatsController cần CatsService

3. NestJS resolve dependency:
   → Kiểm tra CatsService đã tồn tại trong container?
     → Có: inject instance đã có (singleton)
     → Không: tạo instance mới, lưu vào container, inject
</code></pre>

<h2 id="3-custom-providers"><strong>3. Custom Providers</strong></h2>

<h3 id="use-class"><strong>useClass — Swap implementation</strong></h3>

<pre><code class="language-typescript">// Interface
interface Logger {
  log(message: string): void;
}

// Implementations
@Injectable()
class ConsoleLogger implements Logger {
  log(message: string) { console.log(message); }
}

@Injectable()
class FileLogger implements Logger {
  log(message: string) { /* write to file */ }
}

// Module — dễ dàng swap
@Module({
  providers: [
    {
      provide: 'LOGGER',
      useClass: process.env.NODE_ENV === 'production' 
        ? FileLogger 
        : ConsoleLogger,
    },
  ],
})
export class AppModule {}

// Inject bằng @Inject() token
@Injectable()
export class AppService {
  constructor(@Inject('LOGGER') private logger: Logger) {}
}
</code></pre>

<h3 id="use-value"><strong>useValue — Inject constants or mocks</strong></h3>

<pre><code class="language-typescript">// Inject config values
const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  database: 'mydb',
};

@Module({
  providers: [
    { provide: 'DATABASE_CONFIG', useValue: DATABASE_CONFIG },
    { provide: 'API_KEY', useValue: 'sk-xxx-12345' },
  ],
})
export class AppModule {}

// Inject mock cho testing
const mockCatsService = {
  findAll: () => [{ name: 'Test Cat' }],
  create: (cat) => cat,
};

// Trong test
Test.createTestingModule({
  providers: [
    { provide: CatsService, useValue: mockCatsService },
  ],
});
</code></pre>

<h3 id="use-factory"><strong>useFactory — Complex logic, async</strong></h3>

<pre><code class="language-typescript">@Module({
  providers: [
    ConfigService,
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (configService: ConfigService) => {
        const options = configService.get('database');
        const connection = await createConnection(options);
        return connection;
      },
      inject: [ConfigService],  // Dependencies cho factory
    },
  ],
})
export class DatabaseModule {}

// Factory với multiple dependencies
{
  provide: 'MAILER',
  useFactory: (config: ConfigService, logger: LoggerService) => {
    return new MailerService(
      config.get('SMTP_HOST'),
      config.get('SMTP_PORT'),
      logger,
    );
  },
  inject: [ConfigService, LoggerService],
}
</code></pre>

<h3 id="use-existing"><strong>useExisting — Alias provider</strong></h3>

<pre><code class="language-typescript">@Module({
  providers: [
    CatsService,
    // 'AliasedCatsService' trỏ tới cùng instance CatsService
    { provide: 'AliasedCatsService', useExisting: CatsService },
  ],
})
export class CatsModule {}
</code></pre>

<h2 id="4-injection-scopes"><strong>4. Injection Scopes</strong></h2>

<pre><code class="language-typescript">import { Injectable, Scope } from '@nestjs/common';

// DEFAULT — Singleton (một instance cho toàn app)
@Injectable({ scope: Scope.DEFAULT })
export class SingletonService {}

// REQUEST — Mỗi request tạo instance mới
@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
  constructor(@Inject(REQUEST) private request: Request) {
    // Truy cập request object
  }
}

// TRANSIENT — Mỗi lần inject tạo instance mới
@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {}
</code></pre>

<p><strong>Important note</strong>: Scope will <strong>bubble up</strong>. If the Controller injects a REQUEST-scoped service, the Controller also becomes REQUEST-scoped.</p>

<table>
<thead>
<tr><th>Scope</th><th>Instance</th><th>Use cases</th></tr>
</thead>
<tbody>
<tr><td>DEFAULT</td><td>1 for the entire app</td><td>Most services (90%+)</td></tr>
<tr><td>REQUEST</td><td>1 per request</td><td>Multi-tenant, request context</td></tr>
<tr><td>TRANSIENT</td><td>New every time you inject</td><td>Stateful helpers, loggers</td></tr>
</tbody>
</table>

<h2 id="5-optional-providers"><strong>5. Optional Dependencies</strong></h2>

<pre><code class="language-typescript">import { Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService {
  constructor(
    @Optional() @Inject('HTTP_OPTIONS') private options?: HttpOptions,
  ) {
    // Nếu HTTP_OPTIONS không được provide, options = undefined
    this.options = options ?? { timeout: 5000 };
  }
}
</code></pre>

<h2 id="6-practical-example"><strong>6. Practical example: Order Service</strong></h2>

<pre><code class="language-typescript">// order.service.ts
@Injectable()
export class OrderService {
  constructor(
    private readonly productService: ProductService,
    private readonly paymentService: PaymentService,
    private readonly notificationService: NotificationService,
    @Inject('LOGGER') private readonly logger: Logger,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise&lt;Order&gt; {
    // 1. Kiểm tra sản phẩm
    const product = await this.productService.findOne(dto.productId);
    if (!product) throw new NotFoundException('Product not found');

    // 2. Xử lý thanh toán
    const payment = await this.paymentService.charge(dto.amount);

    // 3. Tạo order
    const order = { id: Date.now(), ...dto, paymentId: payment.id };

    // 4. Gửi notification
    await this.notificationService.sendOrderConfirmation(order);

    this.logger.log(`Order ${order.id} created`);
    return order;
  }
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><strong>Providers</strong>: Any class <code>@Injectable()</code> Every one is a provider</li>
<li><strong>DI Containers</strong>: NestJS automatically resolves and injects dependencies</li>
<li><strong>Custom Providers</strong>: useClass, useValue, useFactory, useExisting</li>
<li><strong>Scopes</strong>: DEFAULT (singleton), REQUEST, TRANSIENT</li>
<li>Always prioritize <strong>constructor injection</strong> for testability</li>
</ul>

<p>The next article will explore <strong>Modules</strong> — how to organize code by feature in NestJS.</p>
