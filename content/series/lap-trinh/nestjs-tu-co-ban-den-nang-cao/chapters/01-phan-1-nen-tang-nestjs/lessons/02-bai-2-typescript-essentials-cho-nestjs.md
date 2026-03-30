---
id: 019d8b40-a102-7001-b001-nestjs000102
title: 'Bài 2: TypeScript Essentials cho NestJS'
slug: bai-2-typescript-essentials-cho-nestjs
description: >-
  Ôn tập TypeScript cần thiết cho NestJS: Decorators, Generics, Interfaces,
  Enums, Type Guards, Utility Types. Cấu hình tsconfig.json cho NestJS project.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng NestJS"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-tai-sao-typescript"><strong>1. Tại sao TypeScript quan trọng với NestJS?</strong></h2>

<p>NestJS được xây dựng hoàn toàn bằng TypeScript và tận dụng tối đa các tính năng nâng cao của TypeScript như <strong>Decorators</strong>, <strong>Metadata Reflection</strong>, <strong>Generics</strong>. Hiểu rõ TypeScript sẽ giúp bạn làm việc hiệu quả hơn với NestJS.</p>

<h2 id="2-decorators"><strong>2. Decorators — Trái tim của NestJS</strong></h2>

<p>Decorators là tính năng TypeScript được NestJS sử dụng nhiều nhất. Chúng là các <strong>hàm đặc biệt</strong> gắn vào class, method, property hoặc parameter để bổ sung metadata.</p>

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

<h2 id="3-interfaces-types"><strong>3. Interfaces &amp; Type Aliases</strong></h2>

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

<h2 id="4-generics"><strong>4. Generics — Code tái sử dụng</strong></h2>

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

<h2 id="6-utility-types"><strong>6. Utility Types hay dùng</strong></h2>

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

<h2 id="7-type-guards"><strong>7. Type Guards &amp; Narrowing</strong></h2>

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

<h2 id="8-tsconfig"><strong>8. Cấu hình tsconfig.json cho NestJS</strong></h2>

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

<p><strong>Hai options quan trọng nhất cho NestJS:</strong></p>
<ul>
<li><code>emitDecoratorMetadata: true</code> — Cho phép TypeScript emit metadata cho decorators (NestJS DI cần cái này)</li>
<li><code>experimentalDecorators: true</code> — Bật tính năng decorators</li>
</ul>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<p>Trong bài này, bạn đã nắm được các tính năng TypeScript cốt lõi cần cho NestJS:</p>
<ul>
<li><strong>Decorators</strong>: Class, Method, Parameter decorators — nền tảng của NestJS</li>
<li><strong>Interfaces &amp; Types</strong>: Định nghĩa shape cho data</li>
<li><strong>Generics</strong>: Tạo code tái sử dụng, type-safe</li>
<li><strong>Enums</strong>: Định nghĩa constants</li>
<li><strong>Utility Types</strong>: Partial, Pick, Omit cho DTOs</li>
<li><strong>Type Guards</strong>: Narrowing types an toàn</li>
</ul>

<p>Bài tiếp theo, chúng ta sẽ cài đặt NestJS CLI và khởi tạo project đầu tiên!</p>
