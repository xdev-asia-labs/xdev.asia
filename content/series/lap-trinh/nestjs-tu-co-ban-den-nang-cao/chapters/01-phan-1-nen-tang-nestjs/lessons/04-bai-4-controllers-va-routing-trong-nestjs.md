---
id: 019d8b40-a104-7001-b001-nestjs000104
title: 'Bài 4: Controllers và Routing trong NestJS'
slug: bai-4-controllers-va-routing-trong-nestjs
description: >-
  Hiểu Controllers, Request handling, Route parameters, Query strings,
  Request body, Headers. HTTP methods, status codes, redirects và
  sub-domain routing.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 1: Nền tảng NestJS"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-controller-la-gi"><strong>1. Controller là gì?</strong></h2>

<p>Controllers chịu trách nhiệm xử lý <strong>incoming requests</strong> và trả về <strong>responses</strong> cho client. Routing mechanism quyết định controller nào xử lý request nào dựa trên URL path và HTTP method.</p>

<pre><code class="language-typescript">import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';

@Controller('products')  // Base route: /products
export class ProductsController {
  
  @Get()           // GET    /products
  findAll() { return 'Tất cả sản phẩm'; }

  @Get(':id')      // GET    /products/123
  findOne() { return 'Một sản phẩm'; }

  @Post()          // POST   /products
  create() { return 'Tạo sản phẩm'; }

  @Put(':id')      // PUT    /products/123
  replace() { return 'Thay thế sản phẩm'; }

  @Patch(':id')    // PATCH  /products/123
  update() { return 'Cập nhật sản phẩm'; }

  @Delete(':id')   // DELETE /products/123
  remove() { return 'Xóa sản phẩm'; }
}
</code></pre>

<h2 id="2-request-object"><strong>2. Truy cập Request Object</strong></h2>

<h3 id="parameter-decorators"><strong>Parameter Decorators</strong></h3>

<pre><code class="language-typescript">import {
  Controller, Get, Post, Param, Query, Body,
  Headers, Ip, Req, Res, HttpCode, Header,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  
  // Route Parameters
  @Get(':id')
  findOne(@Param('id') id: string) {         // /users/42 → id = '42'
    return `User #${id}`;
  }

  // Multiple Route Params
  @Get(':userId/posts/:postId')
  findUserPost(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
  ) {
    return `User ${userId}, Post ${postId}`;
  }

  // Query Parameters
  @Get()
  findAll(
    @Query('page') page: number = 1,          // /users?page=2
    @Query('limit') limit: number = 10,       // /users?page=2&limit=20
    @Query('search') search?: string,         // /users?search=john
    @Query() allQuery: Record&lt;string, any&gt;,   // Tất cả query params
  ) {
    return { page, limit, search };
  }

  // Request Body
  @Post()
  create(@Body() body: CreateUserDto) {       // Full body
    return body;
  }

  @Post('partial')
  createPartial(@Body('name') name: string) { // Chỉ lấy field 'name'
    return { name };
  }

  // Headers
  @Get('info')
  getInfo(
    @Headers('authorization') auth: string,
    @Headers('user-agent') userAgent: string,
    @Ip() ip: string,
  ) {
    return { auth, userAgent, ip };
  }

  // Full Request/Response objects (ít dùng)
  @Get('raw')
  getRaw(@Req() req: Request, @Res() res: Response) {
    res.status(200).json({ url: req.url, method: req.method });
  }
}
</code></pre>

<h3 id="decorator-mapping"><strong>Mapping giữa NestJS Decorators và Express</strong></h3>

<table>
<thead>
<tr><th>NestJS Decorator</th><th>Express equivalent</th></tr>
</thead>
<tbody>
<tr><td><code>@Req()</code></td><td><code>req</code></td></tr>
<tr><td><code>@Res()</code></td><td><code>res</code></td></tr>
<tr><td><code>@Param(key)</code></td><td><code>req.params[key]</code></td></tr>
<tr><td><code>@Query(key)</code></td><td><code>req.query[key]</code></td></tr>
<tr><td><code>@Body(key)</code></td><td><code>req.body[key]</code></td></tr>
<tr><td><code>@Headers(key)</code></td><td><code>req.headers[key]</code></td></tr>
<tr><td><code>@Ip()</code></td><td><code>req.ip</code></td></tr>
<tr><td><code>@Session()</code></td><td><code>req.session</code></td></tr>
</tbody>
</table>

<h2 id="3-response-handling"><strong>3. Response Handling</strong></h2>

<h3 id="standard-approach"><strong>Standard Approach (khuyến nghị)</strong></h3>

<pre><code class="language-typescript">@Controller('products')
export class ProductsController {

  // Return object → tự động serialize thành JSON
  @Get()
  findAll(): Product[] {
    return [{ id: 1, name: 'Laptop' }];
    // Response: 200 OK, Content-Type: application/json
  }

  // Return string → plain text
  @Get('health')
  health(): string {
    return 'OK';
    // Response: 200 OK, Content-Type: text/html
  }

  // Return Promise → NestJS tự await
  @Get('async')
  async findAsync(): Promise&lt;Product[]&gt; {
    return await this.productService.findAll();
  }

  // Return Observable → NestJS tự subscribe
  @Get('stream')
  findStream(): Observable&lt;Product[]&gt; {
    return this.productService.findAllStream();
  }
}
</code></pre>

<h3 id="custom-status"><strong>Custom Status Codes</strong></h3>

<pre><code class="language-typescript">import { HttpCode, HttpStatus } from '@nestjs/common';

@Post()
@HttpCode(HttpStatus.CREATED)  // 201
create(@Body() dto: CreateProductDto) {
  return this.productService.create(dto);
}

@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)  // 204
remove(@Param('id') id: string) {
  this.productService.remove(id);
}
</code></pre>

<h3 id="custom-headers"><strong>Custom Response Headers</strong></h3>

<pre><code class="language-typescript">@Get()
@Header('Cache-Control', 'max-age=3600')
@Header('X-Custom-Header', 'NestJS')
findAll() {
  return this.productService.findAll();
}
</code></pre>

<h3 id="redirects"><strong>Redirects</strong></h3>

<pre><code class="language-typescript">import { Redirect } from '@nestjs/common';

@Get('old-page')
@Redirect('/new-page', 301)  // Permanent redirect
oldPage() {}

// Dynamic redirect
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version: string) {
  if (version === 'v11') {
    return { url: 'https://docs.nestjs.com/v11' };
  }
  // Nếu không return gì, dùng URL mặc định
}
</code></pre>

<h2 id="4-route-wildcards"><strong>4. Route Wildcards &amp; Pattern Matching</strong></h2>

<pre><code class="language-typescript">// Wildcard routes
@Get('ab*cd')   // Matches: abcd, ab_cd, abecd, ab123cd,...
findWild() {
  return 'This route uses a wildcard';
}

// Regex-based param (NestJS dùng path-to-regexp)
@Get(':id(\\d+)')   // Chỉ match số: /products/123 ✓, /products/abc ✗
findOne(@Param('id') id: string) {
  return `Product #${id}`;
}
</code></pre>

<h2 id="5-dto"><strong>5. DTOs — Data Transfer Objects</strong></h2>

<pre><code class="language-typescript">// src/products/dto/create-product.dto.ts
export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

// src/products/dto/update-product.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

// PartialType tạo class mới với tất cả fields optional
export class UpdateProductDto extends PartialType(CreateProductDto) {}

// Sử dụng
@Post()
create(@Body() dto: CreateProductDto) {
  // TypeScript đảm bảo dto có đúng shape
  return this.service.create(dto);
}

@Patch(':id')
update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
  return this.service.update(+id, dto);
}
</code></pre>

<h2 id="6-versioning"><strong>6. API Versioning</strong></h2>

<pre><code class="language-typescript">// main.ts — Bật versioning
import { VersioningType } from '@nestjs/common';

const app = await NestFactory.create(AppModule);
app.enableVersioning({
  type: VersioningType.URI,  // /v1/users, /v2/users
  // type: VersioningType.HEADER,  // Header: X-API-Version: 1
  // type: VersioningType.MEDIA_TYPE,  // Accept: application/json;v=1
});

// Controller
@Controller({ path: 'users', version: '1' })
export class UsersV1Controller {
  @Get()
  findAll() { return 'V1 users'; }
}

@Controller({ path: 'users', version: '2' })
export class UsersV2Controller {
  @Get()
  findAll() { return 'V2 users with pagination'; }
}

// Per-route versioning
@Controller('users')
export class UsersController {
  @Version('1')
  @Get()
  findAllV1() { return 'V1'; }

  @Version('2')
  @Get()
  findAllV2() { return 'V2'; }
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><strong>Controllers</strong> xử lý HTTP requests, được đánh dấu bằng <code>@Controller()</code></li>
<li><strong>Parameter Decorators</strong>: <code>@Param()</code>, <code>@Query()</code>, <code>@Body()</code>, <code>@Headers()</code></li>
<li><strong>Response</strong>: Return object (JSON), string (text), hoặc Promise/Observable</li>
<li><strong>DTOs</strong>: Class định nghĩa shape của data, dùng <code>PartialType</code> cho update</li>
<li><strong>Versioning</strong>: URI, Header hoặc Media Type</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu <strong>Providers và Dependency Injection</strong> — cơ chế cốt lõi của NestJS.</p>
