---
id: 019d8b40-a202-7001-b001-nestjs000202
title: 'Lesson 6: Modules - Organize Code by Feature'
slug: bai-6-modules-to-chuc-code-theo-feature
description: >-
  Module system in NestJS, Feature modules, Shared modules, Global modules,
  Dynamic modules. Lazy loading modules and circular dependencies.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Providers, Dependency Injection & Data Layer'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7424" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7424)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1053" cy="109" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1006" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="959" cy="75" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="912" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="41" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1048.444863728671,202 1048.444863728671,236 1019,253 989.555136271329,236 989.555136271329,202 1019,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Modules - Organize Code by Feature</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Providers, Dependency Injection & Data Layer</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-module-la-gi"><strong>1. What is a Module?</strong></h2>

<p>Module is the unit of code organization in NestJS. Every application has at least one module — <strong>root module</strong> (AppModule). NestJS encourages code organization accordingly <strong>feature modules</strong>, each module encapsulates a group of related functions.</p>

<pre><code class="language-typescript">@Module({
  imports: [],       // Modules khác mà module này cần
  controllers: [],   // Controllers thuộc module này
  providers: [],     // Services/Providers thuộc module này
  exports: [],       // Providers được chia sẻ ra ngoài
})
export class UsersModule {}
</code></pre>

<h2 id="2-feature-modules"><strong>2. Feature Modules</strong></h2>

<pre><code class="language-typescript">// Cấu trúc thư mục theo feature
src/
├── app.module.ts           // Root module
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   └── entities/
│       └── user.entity.ts
├── products/
│   ├── products.module.ts
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── ...
└── orders/
    ├── orders.module.ts
    └── ...
</code></pre>

<pre><code class="language-typescript">// users.module.ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],  // Cho phép module khác dùng UsersService
})
export class UsersModule {}

// orders.module.ts — cần dùng UsersService
@Module({
  imports: [UsersModule],  // Import để dùng exported providers
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

// app.module.ts — Root module
@Module({
  imports: [UsersModule, ProductsModule, OrdersModule],
})
export class AppModule {}
</code></pre>

<h2 id="3-shared-modules"><strong>3. Shared Modules</strong></h2>

<pre><code class="language-typescript">// Shared module — chứa các utilities dùng chung
@Module({
  providers: [
    HelperService,
    SlugService,
    PaginationService,
  ],
  exports: [
    HelperService,
    SlugService,
    PaginationService,
  ],
})
export class SharedModule {}

// Sử dụng trong nhiều modules
@Module({
  imports: [SharedModule],  // Mỗi module cần import riêng
  // ...
})
export class UsersModule {}

@Module({
  imports: [SharedModule],
  // ...
})
export class ProductsModule {}
</code></pre>

<h2 id="4-global-modules"><strong>4. Global Modules</strong></h2>

<pre><code class="language-typescript">// Global module — không cần import trong từng module
@Global()
@Module({
  providers: [
    ConfigService,
    LoggerService,
    CacheService,
  ],
  exports: [
    ConfigService,
    LoggerService,
    CacheService,
  ],
})
export class CoreModule {}

// Chỉ cần import một lần trong AppModule
@Module({
  imports: [CoreModule, UsersModule, ProductsModule],
})
export class AppModule {}

// Bây giờ mọi module đều có thể inject ConfigService
// mà KHÔNG cần import CoreModule
@Injectable()
export class UsersService {
  constructor(private config: ConfigService) {} // ✅ Works!
}
</code></pre>

<p><strong>⚠️ Warning</strong>: Do not abuse <code>@Global()</code>. Only used for truly global services such as Config, Logger, Cache.</p>

<h2 id="5-dynamic-modules"><strong>5. Dynamic Modules</strong></h2>

<pre><code class="language-typescript">// Dynamic module — cấu hình tại thời điểm import
@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseOptions): DynamicModule {
    return {
      module: DatabaseModule,
      global: true,
      providers: [
        { provide: 'DATABASE_OPTIONS', useValue: options },
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: async (opts: DatabaseOptions) => {
            return await createConnection(opts);
          },
          inject: ['DATABASE_OPTIONS'],
        },
        DatabaseService,
      ],
      exports: [DatabaseService, 'DATABASE_CONNECTION'],
    };
  }

  // forFeature — đăng ký entities/repositories
  static forFeature(entities: Type[]): DynamicModule {
    const repositories = entities.map(entity => ({
      provide: getRepositoryToken(entity),
      useFactory: (connection: Connection) => connection.getRepository(entity),
      inject: ['DATABASE_CONNECTION'],
    }));

    return {
      module: DatabaseModule,
      providers: repositories,
      exports: repositories,
    };
  }
}

// Sử dụng
@Module({
  imports: [
    DatabaseModule.forRoot({          // Root config
      host: 'localhost',
      port: 5432,
      database: 'myapp',
    }),
  ],
})
export class AppModule {}

@Module({
  imports: [
    DatabaseModule.forFeature([User, Product]),  // Feature entities
  ],
})
export class UsersModule {}
</code></pre>

<h2 id="6-module-re-export"><strong>6. Re-exporting module</strong></h2>

<pre><code class="language-typescript">@Module({
  imports: [CommonModule],
  exports: [CommonModule],  // Re-export cả module
})
export class CoreModule {}

// Ai import CoreModule sẽ tự động có access CommonModule
</code></pre>

<h2 id="7-circular-dependency"><strong>7. Handling Circular Dependency</strong></h2>

<pre><code class="language-typescript">// ❌ Circular: UsersModule ↔ OrdersModule
// UsersModule imports OrdersModule
// OrdersModule imports UsersModule

// ✅ Giải pháp: forwardRef()
@Module({
  imports: [forwardRef(() => OrdersModule)],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}

// Trong service
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => OrdersService))
    private ordersService: OrdersService,
  ) {}
}
</code></pre>

<p><strong>Best Practice</strong>: Avoid circular dependency. If encountered, separate the common logic into a shared module or use Event-based communication.</p>

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<ul>
<li><strong>Feature Modules</strong>: Organize code according to business domain</li>
<li><strong>Shared Modules</strong>: Contains shared utilities, needs import</li>
<li><strong>Global Modules</strong>: <code>@Global()</code>, automatically available everywhere</li>
<li><strong>Dynamic Modules</strong>: <code>forRoot()</code> / <code>forFeature()</code> pattern. pattern</li>
<li>Avoid circular dependencies, prefer event-based communication</li>
</ul>

<p>Next post will connect <strong>Database with TypeORM and Prisma</strong>.</p>
