---
id: 019d8b40-a102-7001-b001-nestjs000102
title: 第 2 課：NestJS 的 TypeScript 基礎知識
slug: bai-2-typescript-essentials-cho-nestjs
description: 查看 NestJS 的基本 TypeScript：裝飾器、泛型、介面、枚舉、型別防護、實用程式類型。為 NestJS 專案配置 tsconfig.json。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：NestJS 平台
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9638" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9638)"/>

  <!-- Decorations -->
  <g>
    <circle cx="874" cy="92" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="922" cy="220" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="925.3826859021799,88.5 925.3826859021799,115.5 902,129 878.6173140978201,115.5 878.6173140978201,88.5 902,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：NestJS 的 TypeScript 基礎知識</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：NestJS 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-tai-sao-typescript"><strong>1. 為什麼 TypeScript 對 NestJS 很重要？</strong></h2>

<p>NestJS 完全使用 TypeScript 構建，並充分利用 TypeScript 的高級功能，例如 <strong>裝飾器</strong>, <strong>元數據反映</strong>, <strong>泛型</strong>。了解 TypeScript 將幫助您更有效地使用 NestJS。</p>

<h2 id="2-decorators"><strong>2. 裝飾器－NestJS的核心</strong></h2>

<p>裝飾器是 NestJS 最常用的 TypeScript 功能。他們是 <strong>特殊功能</strong> 附加到類別、方法、屬性或參數以新增元資料。</p>

<h3 id="class-decorators"><strong>類別裝飾器</strong></h3>

<pre><code class="language-typescript">// Class Decorator
function Controller(prefix: string) {
  return function (target: Function) {
    Reflect.defineMetadata('prefix', prefix, target);
  };
}

@Controller('/users')
class UsersController {
  // NestJS tự biết controller này handle route /users
}
</code></pre>

<h3 id="method-decorators"><strong>方法裝飾器</strong></h3>

<pre><code class="language-typescript">// Method Decorator
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args:`, args);
    const result = original.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
}

class UserService {
  @Log
  findUser(id: number) {
    return { id, name: 'John' };
  }
}
</code></pre>

<h3 id="parameter-decorators"><strong>參數裝飾器</strong></h3>

<pre><code class="language-typescript">// Trong NestJS, bạn sẽ gặp:
@Get(':id')
findOne(
  @Param('id') id: string,           // Parameter decorator
  @Query('include') include: string,  // Parameter decorator
  @Body() body: CreateUserDto,        // Parameter decorator
) {
  // ...
}
</code></pre>

<h3 id="decorator-composition"><strong>裝飾器組合</strong></h3>

<pre><code class="language-typescript">// Kết hợp nhiều decorators
function Auth(...roles: string[]) {
  return applyDecorators(
    UseGuards(AuthGuard('jwt'), RolesGuard),
    Roles(...roles),
    ApiBearerAuth(),
  );
}

@Auth('admin')
@Get('admin/dashboard')
getDashboard() { ... }
</code></pre>

<h2 id="3-interfaces-types"><strong>3. 介面和型別別名</strong></h2>

<pre><code class="language-typescript">// Interface — mở rộng được, dùng cho object shapes
interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

// Extending interfaces
interface AdminUser extends User {
  permissions: string[];
  lastLogin: Date;
}

// Type alias — linh hoạt hơn, dùng cho unions, tuples
type UserRole = 'admin' | 'editor' | 'viewer';
type ApiResponse&lt;T&gt; = {
  data: T;
  meta: { total: number; page: number };
};

// Trong NestJS, dùng interface cho DTOs shape, class cho validation
</code></pre>

<h2 id="4-generics"><strong>4. 泛型－程式碼重用</strong></h2>

<pre><code class="language-typescript">// Generic function
function wrapResponse&lt;T&gt;(data: T): ApiResponse&lt;T&gt; {
  return { data, meta: { total: 1, page: 1 } };
}

// Generic class — pattern phổ biến trong NestJS Repository
class BaseRepository&lt;T&gt; {
  private items: T[] = [];

  findAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find((item: any) => item.id === id);
  }

  create(item: T): T {
    this.items.push(item);
    return item;
  }
}

// Sử dụng
class UserRepository extends BaseRepository&lt;User&gt; {
  findByEmail(email: string): User | undefined {
    return this.findAll().find(u => u.email === email);
  }
}

// Generic constraints
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}
</code></pre>

<h2 id="5-enums"><strong>5. 枚舉</strong></h2>

<pre><code class="language-typescript">// String enum — dùng nhiều trong NestJS
enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR', 
  Viewer = 'VIEWER',
}

// Const enum — tối ưu performance
const enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

// Sử dụng trong NestJS
@Roles(UserRole.Admin)
@Get('admin')
adminOnly() { ... }
</code></pre>

<h2 id="6-utility-types"><strong>6. 常用實用程式類型</strong></h2>

<pre><code class="language-typescript">interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

// Partial — tất cả fields optional (dùng cho Update DTO)
type UpdateUserDto = Partial&lt;User&gt;;

// Pick — chọn một số fields
type UserPublicInfo = Pick&lt;User, 'id' | 'name' | 'avatar'&gt;;

// Omit — loại bỏ fields (ẩn password)
type UserResponse = Omit&lt;User, 'password'&gt;;

// Record — key-value mapping
type UserPermissions = Record&lt;string, boolean&gt;;

// Required — tất cả fields bắt buộc
type StrictUser = Required&lt;User&gt;;

// NestJS PartialType, PickType, OmitType từ @nestjs/mapped-types
// làm tương tự nhưng giữ validation decorators
import { PartialType, OmitType } from '@nestjs/mapped-types';
class UpdateUserDto extends PartialType(CreateUserDto) {}
class UserResponseDto extends OmitType(CreateUserDto, ['password']) {}
</code></pre>

<h2 id="7-type-guards"><strong>7. 類型保護與縮小</strong></h2>

<pre><code class="language-typescript">// typeof guard
function processInput(input: string | number) {
  if (typeof input === 'string') {
    return input.toUpperCase(); // TypeScript biết đây là string
  }
  return input.toFixed(2); // TypeScript biết đây là number
}

// instanceof guard
class HttpException {
  constructor(public message: string, public status: number) {}
}

class NotFoundException extends HttpException {
  constructor(resource: string) {
    super(`${resource} not found`, 404);
  }
}

function handleError(error: Error | HttpException) {
  if (error instanceof HttpException) {
    return { statusCode: error.status, message: error.message };
  }
  return { statusCode: 500, message: 'Internal Server Error' };
}

// Custom type guard
interface AdminUser { role: 'admin'; permissions: string[] }
interface RegularUser { role: 'user'; subscription: string }

function isAdmin(user: AdminUser | RegularUser): user is AdminUser {
  return user.role === 'admin';
}
</code></pre>

<h2 id="8-tsconfig"><strong>8.為NestJS配置tsconfig.json</strong></h2>

<pre><code class="language-json">{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["src/*"],
      "@modules/*": ["src/modules/*"],
      "@common/*": ["src/common/*"]
    }
  }
}
</code></pre>

<p><strong>NestJS 的兩個最重要的選項：</strong></p>
<ul>
<li><code>emitDecoratorMetadata：true</code> — 允許 TypeScript 為裝飾器發出元資料（NestJS DI 需要這個）</li>
<li><code>實驗裝飾器：true</code> — 啟用裝飾器</li>
</ul>

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<p>在本文中，您了解了 NestJS 所需的核心 TypeScript 功能：</p>
<ul>
<li><strong>裝飾器</strong>：類別、方法、參數裝飾器——NestJS 的基礎</li>
<li><strong>介面和類型</strong>：定義資料的形狀</li>
<li><strong>泛型</strong>：建立可重複使用的、型別安全的程式碼</li>
<li><strong>列舉</strong>：常量的定義</li>
<li><strong>實用程式類型</strong>：DTO 的部分、選取、省略</li>
<li><strong>類型保護裝置</strong>：縮小類型是安全的</li>
</ul>

<p>下一課，我們將安裝 NestJS CLI 並創建我們的第一個專案！</p>
