---
id: 019d8b40-a104-7001-b001-nestjs000104
title: 'レッスン 4: NestJS のコントローラーとルーティング'
slug: bai-4-controllers-va-routing-trong-nestjs
description: >-
  コントローラー、リクエスト処理、ルートパラメータ、クエリ文字列、リクエスト本文、ヘッダーを理解します。 HTTP メソッド、ステータス
  コード、リダイレクト、サブドメイン ルーティング。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 4
section_title: 'パート 1: NestJS プラットフォーム'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: 基本から高度まで'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7573" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7573)"/>

  <!-- Decorations -->
  <g>
    <circle cx="913" cy="249" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="726" cy="62" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1039" cy="135" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="852" cy="208" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="281" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="199" x2="1100" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="229" x2="1050" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="978.444863728671,132 978.444863728671,166 949,183 919.555136271329,166 919.555136271329,132 949,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 プログラミング — レッスン 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 4: NestJS のコントローラーとルーティング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: NestJS プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-controller-la-gi"><strong>1. コントローラーとは何ですか?</strong></h2>

<p>コントローラーは処理を担当します <strong>受信リクエスト</strong> そして戻る <strong>応答。応答</strong> クライアントのために。ルーティング メカニズムは、URL パスと HTTP メソッドに基づいて、どのコントローラーがどのリクエストを処理するかを決定します。</p>

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

<h2 id="2-request-object"><strong>2. アクセス要求オブジェクト</strong></h2>

<h3 id="parameter-decorators"><strong>パラメータデコレータ</strong></h3>

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

<h3 id="decorator-mapping"><strong>NestJS Decorators と Express の間のマッピング</strong></h3>

<table>
<thead>
<tr><th>NestJS デコレータ</th><th>特急相当品</th></tr>
</thead>
<tbody>
<tr><td><code>@Req()</code></td><td><code>要求</code></td></tr>
<tr><td><code>@Res()</code></td><td><code>レス</code></td></tr>
<tr><td><code>@Param(キー)</code></td><td><code>req.params[キー]</code></td></tr>
<tr><td><code>@Query(キー)</code></td><td><code>req.query[キー]</code></td></tr>
<tr><td><code>@本体(キー)</code></td><td><code>req.body[キー]</code></td></tr>
<tr><td><code>@ヘッダー(キー)</code></td><td><code>req.headers[キー]</code></td></tr>
<tr><td><code>@Ip()</code></td><td><code>要求IP</code></td></tr>
<tr><td><code>@セッション()</code></td><td><code>要求セッション</code></td></tr>
</tbody>
</table>

<h2 id="3-response-handling"><strong>3. 応答の処理</strong></h2>

<h3 id="standard-approach"><strong>標準的なアプローチ (推奨)</strong></h3>

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

<h3 id="custom-status"><strong>カスタムステータスコード</strong></h3>

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

<h3 id="custom-headers"><strong>カスタム応答ヘッダー</strong></h3>

<pre><code class="language-typescript">@Get()
@Header('Cache-Control', 'max-age=3600')
@Header('X-Custom-Header', 'NestJS')
findAll() {
  return this.productService.findAll();
}
</code></pre>

<h3 id="redirects"><strong>リダイレクト</strong></h3>

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

<h2 id="4-route-wildcards"><strong>4. ルートワイルドカードとパターンマッチング</strong></h2>

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

<h2 id="5-dto"><strong>5. DTO — データ転送オブジェクト</strong></h2>

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

<h2 id="6-versioning"><strong>6. API のバージョン管理</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><strong>コントローラー</strong> でマークされた HTTP リクエストを処理します。 <code>@コントローラー()</code></li>
<li><strong>パラメータデコレータ</strong>: <code>@Param()</code>、 <code>@Query()</code>、 <code>@ボディ()</code>、 <code>@ヘッダー()</code></li>
<li><strong>応答</strong>: オブジェクト (JSON)、文字列 (テキスト)、または Promise/Observable を返します。</li>
<li><strong>DTO</strong>: クラスは使用されるデータの形状を定義します <code>部分型</code> アップデート用</li>
<li><strong>バージョン管理</strong>: URI、ヘッダーまたはメディア タイプ</li>
</ul>

<p>次の記事で詳しく説明します <strong>プロバイダーと依存関係の注入</strong> — NestJS のコアメカニズム。</p>
