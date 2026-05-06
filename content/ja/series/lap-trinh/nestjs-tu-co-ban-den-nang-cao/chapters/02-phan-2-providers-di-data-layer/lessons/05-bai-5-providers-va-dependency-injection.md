---
id: 019d8b40-a201-7001-b001-nestjs000201
title: 'レッスン 5: プロバイダーと依存関係の注入'
slug: bai-5-providers-va-dependency-injection
description: >-
  プロバイダー、サービス、依存性注入コンテナーについての深い理解。カスタムプロバイダー、useClass、useValue、useFactory、useExisting。インジェクションスコープ。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 5
section_title: 'パート 2: プロバイダー、依存関係の注入、およびデータ層'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: 基本から高度まで'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 5: プロバイダーと依存関係の注入</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: プロバイダー、依存関係の注入、およびデータ層</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-providers-la-gi"><strong>1. プロバイダーとは何ですか?</strong></h2>

<p>プロバイダーは NestJS の中核となる概念です。任意のクラスがマークされます <code>@Injectable()</code> サービス、リポジトリ、ファクトリー、ヘルパーなど、すべてがプロバイダーになることができます。主なアイデア: プロバイダーは次のことができます。 <strong>注射する。注入する</strong> コンストラクターを通じて他のクラスに接続し、関係を作成します <strong>疎結合</strong>。</p>

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

<h2 id="2-dependency-injection"><strong>2. NestJS での依存性注入 (DI)</strong></h2>

<p>NestJS には、依存関係の作成と注入を自動的に管理する IoC (Inversion of Control) コンテナが組み込まれています。</p>

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

<h3 id="di-flow"><strong>DIフロー</strong></h3>

<pre><code>1. @Module({ providers: [CatsService] })
   → NestJS đăng ký CatsService vào IoC container

2. constructor(private readonly catsService: CatsService)
   → NestJS nhận biết CatsController cần CatsService

3. NestJS resolve dependency:
   → Kiểm tra CatsService đã tồn tại trong container?
     → Có: inject instance đã có (singleton)
     → Không: tạo instance mới, lưu vào container, inject
</code></pre>

<h2 id="3-custom-providers"><strong>3. カスタムプロバイダー</strong></h2>

<h3 id="use-class"><strong>useClass — スワップ実装</strong></h3>

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

<h3 id="use-value"><strong>useValue — 定数またはモックを挿入する</strong></h3>

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

<h3 id="use-factory"><strong>useFactory — 複雑なロジック、非同期</strong></h3>

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

<h3 id="use-existing"><strong>useExisting — エイリアスプロバイダー</strong></h3>

<pre><code class="language-typescript">@Module({
  providers: [
    CatsService,
    // 'AliasedCatsService' trỏ tới cùng instance CatsService
    { provide: 'AliasedCatsService', useExisting: CatsService },
  ],
})
export class CatsModule {}
</code></pre>

<h2 id="4-injection-scopes"><strong>4. インジェクションスコープ</strong></h2>

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

<p><strong>重要な注意事項</strong>: スコープは <strong>泡立つ</strong>。コントローラーが REQUEST スコープのサービスを挿入すると、コントローラーも REQUEST スコープになります。</p>

<table>
<thead>
<tr><th>範囲</th><th>インスタンス</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td>デフォルト</td><td>アプリ全体の場合は 1</td><td>ほとんどのサービス (90% 以上)</td></tr>
<tr><td>リクエスト</td><td>リクエストごとに 1 つ</td><td>マルチテナント、リクエストコンテキスト</td></tr>
<tr><td>過渡現象</td><td>注入するたびに新しい</td><td>ステートフルヘルパー、ロガー</td></tr>
</tbody>
</table>

<h2 id="5-optional-providers"><strong>5. オプションの依存関係</strong></h2>

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

<h2 id="6-practical-example"><strong>6. 実践例：オーダーサービス</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><strong>プロバイダー</strong>: 任意のクラス <code>@Injectable()</code> 誰もがプロバイダーです</li>
<li><strong>DIコンテナ</strong>: NestJS は依存関係を自動的に解決して挿入します。</li>
<li><strong>カスタムプロバイダー</strong>: useClass、useValue、useFactory、useExisting</li>
<li><strong>スコープ</strong>: デフォルト (シングルトン)、リクエスト、トランジェント</li>
<li>常に優先順位を付ける <strong>コンストラクターインジェクション</strong> テスト容易性のために</li>
</ul>

<p>次の記事で詳しく説明します <strong>モジュール</strong> — NestJS の機能ごとにコードを整理する方法。</p>
