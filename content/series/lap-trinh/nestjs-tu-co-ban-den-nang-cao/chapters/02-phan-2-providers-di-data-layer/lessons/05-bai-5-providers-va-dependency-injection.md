---
id: 019d8b40-a201-7001-b001-nestjs000201
title: 'Bài 5: Providers và Dependency Injection'
slug: bai-5-providers-va-dependency-injection
description: >-
  Hiểu sâu Providers, Services, Dependency Injection container. Custom
  providers, useClass, useValue, useFactory, useExisting. Injection scopes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Providers, Dependency Injection & Data Layer"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-providers-la-gi"><strong>1. Providers là gì?</strong></h2>

<p>Providers là concept cốt lõi của NestJS. Bất kỳ class nào được đánh dấu <code>@Injectable()</code> đều có thể là provider — Services, Repositories, Factories, Helpers, v.v. Ý tưởng chính: providers có thể được <strong>inject</strong> vào các class khác thông qua constructor, tạo nên mối quan hệ <strong>loose coupling</strong>.</p>

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

<h2 id="2-dependency-injection"><strong>2. Dependency Injection (DI) trong NestJS</strong></h2>

<p>NestJS có IoC (Inversion of Control) container built-in, quản lý việc tạo và inject dependencies tự động.</p>

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

<h3 id="use-value"><strong>useValue — Inject constants hoặc mock</strong></h3>

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

<h3 id="use-factory"><strong>useFactory — Logic phức tạp, async</strong></h3>

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

<p><strong>Lưu ý quan trọng</strong>: Scope sẽ <strong>bubble up</strong>. Nếu Controller inject một REQUEST-scoped service, Controller cũng trở thành REQUEST-scoped.</p>

<table>
<thead>
<tr><th>Scope</th><th>Instance</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td>DEFAULT</td><td>1 cho toàn app</td><td>Hầu hết services (90%+)</td></tr>
<tr><td>REQUEST</td><td>1 per request</td><td>Multi-tenant, request context</td></tr>
<tr><td>TRANSIENT</td><td>Mới mỗi lần inject</td><td>Stateful helpers, loggers</td></tr>
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

<h2 id="6-practical-example"><strong>6. Ví dụ thực tế: Order Service</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><strong>Providers</strong>: Bất kỳ class <code>@Injectable()</code> nào đều là provider</li>
<li><strong>DI Container</strong>: NestJS tự động resolve và inject dependencies</li>
<li><strong>Custom Providers</strong>: useClass, useValue, useFactory, useExisting</li>
<li><strong>Scopes</strong>: DEFAULT (singleton), REQUEST, TRANSIENT</li>
<li>Luôn ưu tiên <strong>constructor injection</strong> cho testability</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Modules</strong> — cách tổ chức code theo feature trong NestJS.</p>
