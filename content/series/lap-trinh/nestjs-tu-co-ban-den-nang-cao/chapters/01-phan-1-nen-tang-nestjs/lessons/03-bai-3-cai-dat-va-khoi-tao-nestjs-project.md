---
id: 019d8b40-a103-7001-b001-nestjs000103
title: 'Bài 3: Cài đặt và Khởi tạo NestJS Project'
slug: bai-3-cai-dat-va-khoi-tao-nestjs-project
description: >-
  Cài đặt NestJS CLI, khởi tạo project, cấu trúc thư mục, hiểu các file
  quan trọng. Chạy development server và viết API endpoint đầu tiên.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng NestJS"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-cai-dat-nestjs-cli"><strong>1. Cài đặt NestJS CLI</strong></h2>

<p>NestJS CLI là công cụ command-line giúp bạn khởi tạo, phát triển và maintain NestJS applications. CLI tự động generate boilerplate code, quản lý project structure và chạy development server.</p>

<h3 id="yeu-cau"><strong>Yêu cầu hệ thống</strong></h3>
<ul>
<li>Node.js >= 18.x (khuyến nghị 20 LTS hoặc 22 LTS)</li>
<li>npm >= 9.x hoặc yarn >= 1.22 hoặc pnpm >= 8.x</li>
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

<h2 id="2-khoi-tao-project"><strong>2. Khởi tạo Project</strong></h2>

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

<h2 id="3-cau-truc-thu-muc"><strong>3. Cấu trúc thư mục</strong></h2>

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

<h2 id="4-hieu-cac-file"><strong>4. Hiểu các file quan trọng</strong></h2>

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

<h3 id="app-controller"><strong>app.controller.ts — Controller mẫu</strong></h3>

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

<h3 id="app-service"><strong>app.service.ts — Service mẫu</strong></h3>

<pre><code class="language-typescript">import { Injectable } from '@nestjs/common';

@Injectable()  // Đánh dấu class này có thể được inject
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
</code></pre>

<h2 id="5-chay-dev-server"><strong>5. Chạy Development Server</strong></h2>

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

<p>CLI có thể tự động generate code cho bạn:</p>

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

<h2 id="7-nest-cli-json"><strong>7. Cấu hình nest-cli.json</strong></h2>

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

<p><strong>Tip</strong>: Từ NestJS 10+, bạn có thể dùng <code>SWC builder</code> thay vì TypeScript compiler mặc định để build nhanh hơn ~20x:</p>

<pre><code class="language-bash"># Cài SWC
npm install --save-dev @swc/cli @swc/core

# Thêm vào nest-cli.json
# "builder": "swc"
</code></pre>

<h2 id="8-api-dau-tien"><strong>8. Viết API Endpoint đầu tiên</strong></h2>

<p>Tạo một module Users đơn giản:</p>

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

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<ul>
<li>NestJS CLI giúp scaffold project nhanh chóng</li>
<li>Cấu trúc thư mục rõ ràng: <code>main.ts</code> → <code>AppModule</code> → Controllers + Services</li>
<li><code>nest generate resource</code> tạo CRUD đầy đủ trong vài giây</li>
<li>SWC builder tăng tốc build đáng kể</li>
</ul>

<p>Bài tiếp theo sẽ đi sâu vào <strong>Controllers và Routing</strong> — cách NestJS xử lý HTTP requests.</p>
