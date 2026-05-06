---
id: 019d8b40-a103-7001-b001-nestjs000103
title: 'Lesson 3: Install and Initialize NestJS Project'
slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
description: >-
  Install NestJS CLI, create project, folder structure, understand important
  files. Run the development server and write the first API endpoint.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: NestJS Platform'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 Programming — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Install and Initialize NestJS Project</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: NestJS Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-nestjs-cli"><strong>1. Install NestJS CLI</strong></h2>

<p>NestJS CLI is a command-line tool that helps you create, develop and maintain NestJS applications. CLI automatically generates boilerplate code, manages project structure, and runs the development server.</p>

<h3 id="yeu-cau"><strong>System requirements</strong></h3>
<ul>
<li>Node.js >= 18.x (20 LTS or 22 LTS recommended)</li>
<li>npm >= 9.x or yarn >= 1.22 or pnpm >= 8.x</li>
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

<h2 id="2-khoi-tao-project"><strong>2. Initialize Project</strong></h2>

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

<h2 id="3-cau-truc-thu-muc"><strong>3. Folder structure</strong></h2>

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

<h2 id="4-hieu-cac-file"><strong>4. Understand important files</strong></h2>

<h3 id="main-ts"><strong>main.ts — Entry Point</strong></h3>

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

<h3 id="app-module"><strong>app.module.ts — Root Module</strong></h3>

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

<h3 id="app-controller"><strong>app.controller.ts — Sample controller</strong></h3>

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

<h3 id="app-service"><strong>app.service.ts — Sample service</strong></h3>

<pre><code class="language-typescript">import { Injectable } from '@nestjs/common';

@Injectable()  // Đánh dấu class này có thể được inject
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
</code></pre>

<h2 id="5-chay-dev-server"><strong>5. Run Development Server</strong></h2>

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

<h2 id="6-nest-cli-generate"><strong>6. NestJS CLI Generate Commands</strong></h2>

<p>CLI can automatically generate code for you:</p>

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

<h2 id="7-nest-cli-json"><strong>7. Configure nest-cli.json</strong></h2>

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

<p><strong>Tip</strong>: From NestJS 10+, you can use it <code>SWC builder</code> instead of the default TypeScript compiler to build ~20x faster:</p>

<pre><code class="language-bash"># Cài SWC
npm install --save-dev @swc/cli @swc/core

# Thêm vào nest-cli.json
# "builder": "swc"
</code></pre>

<h2 id="8-api-dau-tien"><strong>8. Write the first API Endpoint</strong></h2>

<p>Create a simple Users module:</p>

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

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<ul>
<li>NestJS CLI helps scaffold projects quickly</li>
<li>Clear directory structure: <code>main.ts</code> → <code>AppModule</code> → Controllers + Services</li>
<li><code>nest generate resources</code> create full CRUD in seconds</li>
<li>SWC builder speeds up building significantly</li>
</ul>

<p>The next article will go deeper <strong>Controllers and Routing</strong> — how NestJS handles HTTP requests.</p>
