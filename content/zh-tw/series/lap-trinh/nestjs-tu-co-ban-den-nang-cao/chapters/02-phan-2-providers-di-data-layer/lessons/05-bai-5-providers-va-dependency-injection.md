---
id: 019d8b40-a201-7001-b001-nestjs000201
title: 第 5 課：提供者和依賴注入
slug: bai-5-providers-va-dependency-injection
description: 深入了解提供者、服務、依賴注入容器。自訂提供者、useClass、useValue、useFactory、useExisting。注射範圍。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：提供程式、依賴注入和資料層
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：提供者和依賴注入</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：提供程式、依賴注入和資料層</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-providers-la-gi"><strong>1. 什麼是提供者？</strong></h2>

<p>提供者是NestJS的核心概念。任何類別均已標記 <code>@Injectable()</code> 都可以是提供者－服務、儲存庫、工廠、助理等。主要想法：提供者可以是 <strong>注射。注入</strong> 透過建構函數進入其他類，創建關係 <strong>鬆散耦合</strong>。</p>

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

<h2 id="2-dependency-injection"><strong>2.NestJS中的依賴注入（DI）</strong></h2>

<p>NestJS 有一個內建的 IoC（控制反轉）容器，它會自動管理依賴項的建立和注入。</p>

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

<h3 id="di-flow"><strong>DI 流量</strong></h3>

<pre><code>1. @Module({ providers: [CatsService] })
   → NestJS đăng ký CatsService vào IoC container

2. constructor(private readonly catsService: CatsService)
   → NestJS nhận biết CatsController cần CatsService

3. NestJS resolve dependency:
   → Kiểm tra CatsService đã tồn tại trong container?
     → Có: inject instance đã có (singleton)
     → Không: tạo instance mới, lưu vào container, inject
</code></pre>

<h2 id="3-custom-providers"><strong>3. 客製化提供者</strong></h2>

<h3 id="use-class"><strong>useClass — 交換實現</strong></h3>

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

<h3 id="use-value"><strong>useValue - 注入常數或模擬</strong></h3>

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

<h3 id="use-factory"><strong>useFactory — 複雜邏輯，非同步</strong></h3>

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

<h3 id="use-existing"><strong>useExisting — 別名提供者</strong></h3>

<pre><code class="language-typescript">@Module({
  providers: [
    CatsService,
    // 'AliasedCatsService' trỏ tới cùng instance CatsService
    { provide: 'AliasedCatsService', useExisting: CatsService },
  ],
})
export class CatsModule {}
</code></pre>

<h2 id="4-injection-scopes"><strong>4. 注射範圍</strong></h2>

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

<p><strong>重要提示</strong>：範圍將 <strong>冒泡</strong>。如果控制器注入 REQUEST 範圍的服務，則控制器也會變成 REQUEST 範圍的。</p>

<table>
<thead>
<tr><th>適用範圍</th><th>實例</th><th>使用案例</th></tr>
</thead>
<tbody>
<tr><td>預設值</td><td>1 對於整個應用程式</td><td>大多數服務（90%+）</td></tr>
<tr><td>請求</td><td>每個請求 1 個</td><td>多租戶、請求上下文</td></tr>
<tr><td>瞬態</td><td>每次注射都是新的</td><td>有狀態的助手、記錄器</td></tr>
</tbody>
</table>

<h2 id="5-optional-providers"><strong>5. 可選依賴項</strong></h2>

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

<h2 id="6-practical-example"><strong>6. 實例：訂單服務</strong></h2>

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

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><strong>供應商</strong>: 任何班級 <code>@Injectable()</code> 每個人都是一個提供者</li>
<li><strong>DI 容器</strong>：NestJS自動解析並注入依賴</li>
<li><strong>客製化供應商</strong>：useClass、useValue、useFactory、useExisting</li>
<li><strong>範圍</strong>：預設（單例）、請求、瞬態</li>
<li>始終優先考慮 <strong>構造函數注入</strong> 為了可測試性</li>
</ul>

<p>下一篇文章將探討 <strong>模組</strong> — 如何在 NestJS 中按功能組織代碼。</p>
