---
id: 019d8b40-a202-7001-b001-nestjs000202
title: 'Bài 6: Modules - Tổ chức Code theo Feature'
slug: bai-6-modules-to-chuc-code-theo-feature
description: >-
  Module system trong NestJS, Feature modules, Shared modules, Global
  modules, Dynamic modules. Lazy loading modules và circular dependency.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Providers, Dependency Injection & Data Layer"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-module-la-gi"><strong>1. Module là gì?</strong></h2>

<p>Module là đơn vị tổ chức code trong NestJS. Mỗi application có ít nhất một module — <strong>root module</strong> (AppModule). NestJS khuyến khích tổ chức code theo <strong>feature modules</strong>, mỗi module đóng gói một nhóm chức năng liên quan.</p>

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

<p><strong>⚠️ Cảnh báo</strong>: Không nên lạm dụng <code>@Global()</code>. Chỉ dùng cho services thực sự global như Config, Logger, Cache.</p>

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

<h2 id="6-module-re-export"><strong>6. Module Re-exporting</strong></h2>

<pre><code class="language-typescript">@Module({
  imports: [CommonModule],
  exports: [CommonModule],  // Re-export cả module
})
export class CoreModule {}

// Ai import CoreModule sẽ tự động có access CommonModule
</code></pre>

<h2 id="7-circular-dependency"><strong>7. Xử lý Circular Dependency</strong></h2>

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

<p><strong>Best Practice</strong>: Tránh circular dependency. Nếu gặp, hãy tách logic chung ra shared module hoặc dùng Event-based communication.</p>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><strong>Feature Modules</strong>: Tổ chức code theo business domain</li>
<li><strong>Shared Modules</strong>: Chứa utilities dùng chung, cần import</li>
<li><strong>Global Modules</strong>: <code>@Global()</code>, tự động available mọi nơi</li>
<li><strong>Dynamic Modules</strong>: <code>forRoot()</code> / <code>forFeature()</code> pattern</li>
<li>Tránh circular dependencies, prefer event-based communication</li>
</ul>

<p>Bài tiếp theo sẽ kết nối <strong>Database với TypeORM và Prisma</strong>.</p>
