---
id: 019d8b40-a102-7001-b001-nestjs000102
title: 'Lesson 2: TypeScript Essentials for NestJS'
slug: bai-2-typescript-essentials-cho-nestjs
description: >-
  Review essential TypeScript for NestJS: Decorators, Generics, Interfaces,
  Enums, Type Guards, Utility Types. Configure tsconfig.json for NestJS project.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: NestJS Platform'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: TypeScript Essentials for NestJS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: NestJS Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-typescript"><strong>1. Why is TypeScript important to NestJS?</strong></h2>

<p>NestJS is built entirely using TypeScript and takes full advantage of TypeScript's advanced features such as <strong>Decorators</strong>, <strong>Metadata Reflection</strong>, <strong>Generics</strong>. Understanding TypeScript will help you work more effectively with NestJS.</p>

<h2 id="2-decorators"><strong>2. Decorators — The heart of NestJS</strong></h2>

<p>Decorators are the TypeScript feature most used by NestJS. They are the <strong>special function</strong> attach to class, method, property or parameter to add metadata.</p>

<h3 id="class-decorators"><strong>Class Decorators</strong></h3>

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

<h3 id="method-decorators"><strong>Method Decorators</strong></h3>

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

<h3 id="parameter-decorators"><strong>Parameter Decorators</strong></h3>

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

<h3 id="decorator-composition"><strong>Decorator Composition</strong></h3>

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

<h2 id="3-interfaces-types"><strong>3. Interfaces & Type Aliases</strong></h2>

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

<h2 id="4-generics"><strong>4. Generics — Code reuse</strong></h2>

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

<h2 id="5-enums"><strong>5. Enums</strong></h2>

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

<h2 id="6-utility-types"><strong>6. Commonly used Utility Types</strong></h2>

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

<h2 id="7-type-guards"><strong>7. Type Guards & Narrowing</strong></h2>

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

<h2 id="8-tsconfig"><strong>8. Configure tsconfig.json for NestJS</strong></h2>

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

<p><strong>The two most important options for NestJS:</strong></p>
<ul>
<li><code>emitDecoratorMetadata: true</code> — Allow TypeScript to emit metadata for decorators (NestJS DI needs this)</li>
<li><code>experimentalDecorators: true</code> — Enable decorators</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Summary</strong></h2>

<p>In this article, you learned the core TypeScript features needed for NestJS:</p>
<ul>
<li><strong>Decorators</strong>: Class, Method, Parameter decorators — foundation of NestJS</li>
<li><strong>Interfaces & Types</strong>: Define shape for data</li>
<li><strong>Generics</strong>: Create reusable, type-safe code</li>
<li><strong>Enums</strong>: Definition of constants</li>
<li><strong>Utility Types</strong>: Partial, Pick, Omit for DTOs</li>
<li><strong>Type Guards</strong>: Narrowing types are safe</li>
</ul>

<p>Next lesson, we will install NestJS CLI and create our first project!</p>
