---
id: 019d8b40-a103-7001-b001-nestjs000103
title: 'レッスン 3: NestJS プロジェクトのインストールと初期化'
slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
description: >-
  NestJS CLI をインストールし、プロジェクトを作成し、フォルダー構造を作成し、重要なファイルを理解します。開発サーバーを実行し、最初の API
  エンドポイントを作成します。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: NestJS プラットフォーム'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: 基本から高度まで'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7500" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7500)"/>

  <!-- Decorations -->
  <g>
    <circle cx="999" cy="67" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="898" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="797" cy="265" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="696" cy="104" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="203" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="177" x2="1100" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="207" x2="1050" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.712812921102,111 954.712812921102,143 927,159 899.287187078898,143 899.287187078898,111.00000000000001 927,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: NestJS プロジェクトのインストールと初期化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: NestJS プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-nestjs-cli"><strong>1.NestJS CLIをインストールする</strong></h2>

<p>NestJS CLI は、NestJS アプリケーションの作成、開発、保守に役立つコマンドライン ツールです。 CLI は、ボイラープレート コードを自動的に生成し、プロジェクト構造を管理し、開発サーバーを実行します。</p>

<h3 id="yeu-cau"><strong>システム要件</strong></h3>
<ul>
<li>Node.js >= 18.x (20 LTS または 22 LTS を推奨)</li>
<li>npm >= 9.x またはyarn >= 1.22 または pnpm >= 8.x</li>
</ul>

<pre><code class="language-bash"># Kiểm tra Node.js version
node --version  # v22.x.x

# Cài đặt NestJS CLI global
npm install -g @nestjs/cli

# Kiểm tra CLI version
nest --version  # 11.x.x

# Xem tất cả commands
nest --help
</code></pre>

<h2 id="2-khoi-tao-project"><strong>2. プロジェクトの初期化</strong></h2>

<pre><code class="language-bash"># Tạo project mới
nest new my-nestjs-app

# CLI sẽ hỏi package manager
# ? Which package manager would you ❤️  to use?
#   npm
#   yarn
# ❯ pnpm

# Hoặc chỉ định sẵn
nest new my-nestjs-app --package-manager pnpm

# Tạo project với strict mode
nest new my-nestjs-app --strict
</code></pre>

<h2 id="3-cau-truc-thu-muc"><strong>3. フォルダー構造</strong></h2>

<pre><code>my-nestjs-app/
├── src/
│   ├── app.controller.ts       # Controller mẫu
│   ├── app.controller.spec.ts  # Unit test cho controller
│   ├── app.module.ts           # Root module
│   ├── app.service.ts          # Service mẫu
│   └── main.ts                 # Entry point
├── test/
│   ├── app.e2e-spec.ts         # E2E test
│   └── jest-e2e.json           # Jest E2E config
├── .eslintrc.js                # ESLint config
├── .prettierrc                 # Prettier config
├── nest-cli.json               # NestJS CLI config
├── package.json
├── tsconfig.json               # TypeScript config
└── tsconfig.build.json         # Build-specific TS config
</code></pre>

<h2 id="4-hieu-cac-file"><strong>4. 重要なファイルを理解する</strong></h2>

<h3 id="main-ts"><strong>main.ts — エントリ ポイント</strong></h3>

<pre><code class="language-typescript">import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Tạo NestJS application instance từ root module
  const app = await NestFactory.create(AppModule);
  
  // Cấu hình global prefix (optional)
  app.setGlobalPrefix('api/v1');
  
  // Bật CORS
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  
  // Lắng nghe trên port
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
</code></pre>

<h3 id="app-module"><strong>app.module.ts — ルートモジュール</strong></h3>

<pre><code class="language-typescript">import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],       // Các module khác cần import
  controllers: [AppController],  // Controllers trong module này
  providers: [AppService],       // Services/Providers
})
export class AppModule {}
</code></pre>

<h3 id="app-controller"><strong>app.controller.ts — サンプル コントローラー</strong></h3>

<pre><code class="language-typescript">import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  // Route prefix: '' (root)
export class AppController {
  // AppService được inject tự động qua constructor
  constructor(private readonly appService: AppService) {}

  @Get()  // GET /
  getHello(): string {
    return this.appService.getHello();
  }
}
</code></pre>

<h3 id="app-service"><strong>app.service.ts — サンプルサービス</strong></h3>

<pre><code class="language-typescript">import { Injectable } from '@nestjs/common';

@Injectable()  // Đánh dấu class này có thể được inject
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
</code></pre>

<h2 id="5-chay-dev-server"><strong>5. 開発サーバーを実行する</strong></h2>

<pre><code class="language-bash"># Development mode (watch mode - auto reload)
npm run start:dev

# Debug mode
npm run start:debug

# Production mode
npm run start:prod

# Output:
# [Nest] 12345  - 03/30/2026, 12:00:00 PM   LOG [NestFactory] Starting Nest application...
# [Nest] 12345  - 03/30/2026, 12:00:00 PM   LOG [InstanceLoader] AppModule dependencies initialized
# [Nest] 12345  - 03/30/2026, 12:00:00 PM   LOG [RoutesResolver] AppController {/}: +1ms
# [Nest] 12345  - 03/30/2026, 12:00:00 PM   LOG [RouterExplorer] Mapped {/, GET} route
# [Nest] 12345  - 03/30/2026, 12:00:00 PM   LOG [NestApplication] Nest application successfully started
</code></pre>

<pre><code class="language-bash"># Test API
curl http://localhost:3000
# Hello World!
</code></pre>

<h2 id="6-nest-cli-generate"><strong>6. NestJS CLI 生成コマンド</strong></h2>

<p>CLI はコードを自動的に生成できます。</p>

<pre><code class="language-bash"># Generate resource đầy đủ (CRUD)
nest generate resource users
# ? What transport layer do you use? REST API
# ? Would you like to generate CRUD entry points? Yes
# CREATE src/users/users.controller.ts
# CREATE src/users/users.module.ts
# CREATE src/users/users.service.ts
# CREATE src/users/dto/create-user.dto.ts
# CREATE src/users/dto/update-user.dto.ts
# CREATE src/users/entities/user.entity.ts

# Generate từng thành phần
nest g controller cats       # Controller
nest g service cats          # Service
nest g module cats           # Module
nest g guard auth            # Guard
nest g interceptor logging   # Interceptor
nest g pipe validation       # Pipe
nest g filter http-exception # Exception Filter
nest g middleware logger     # Middleware
nest g decorator roles       # Custom Decorator

# Viết tắt
nest g res products    # resource
nest g co products     # controller
nest g s products      # service
nest g mo products     # module

# Generate không test file
nest g s users --no-spec

# Dry run (xem trước, không tạo file)
nest g res orders --dry-run
</code></pre>

<h2 id="7-nest-cli-json"><strong>7.nest-cli.jsonを構成する</strong></h2>

<pre><code class="language-json">{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "assets": ["**/*.graphql", "**/*.proto"],
    "watchAssets": true,
    "builder": "swc",
    "typeCheck": true
  },
  "generateOptions": {
    "spec": true,
    "flat": false
  }
}
</code></pre>

<p><strong>ヒント</strong>: NestJS 10以降から利用可能 <code>SWCビルダー</code> デフォルトの TypeScript コンパイラの代わりに、ビルドを最大 20 倍高速化します。</p>

<pre><code class="language-bash"># Cài SWC
npm install --save-dev @swc/cli @swc/core

# Thêm vào nest-cli.json
# "builder": "swc"
</code></pre>

<h2 id="8-api-dau-tien"><strong>8. 最初の API エンドポイントを作成する</strong></h2>

<p>単純な Users モジュールを作成します。</p>

<pre><code class="language-bash">nest g res users --no-spec
</code></pre>

<pre><code class="language-typescript">// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
</code></pre>

<pre><code class="language-typescript">// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Duy Tran', email: 'duy@xdev.asia' },
    { id: 2, name: 'Alex Nguyen', email: 'alex@xdev.asia' },
  ];

  create(dto: CreateUserDto): User {
    const user: User = { id: Date.now(), ...dto };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  remove(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}
</code></pre>

<pre><code class="language-bash"># Test API
curl http://localhost:3000/users
# [{"id":1,"name":"Duy Tran","email":"duy@xdev.asia"},...]

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"New User","email":"new@xdev.asia"}'
# {"id":1711785600000,"name":"New User","email":"new@xdev.asia"}
</code></pre>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<ul>
<li>NestJS CLI はプロジェクトの迅速な足場構築に役立ちます</li>
<li>ディレクトリ構造を明確にする: <code>main.ts</code> → <code>アプリモジュール</code> → コントローラ + サービス</li>
<li><code>リソースをネスト生成する</code> 完全な CRUD を数秒で作成</li>
<li>SWC ビルダーはビルドを大幅にスピードアップします</li>
</ul>

<p>次の記事ではさらに深く掘り下げていきます <strong>コントローラーとルーティング</strong> — NestJS が HTTP リクエストを処理する方法。</p>
