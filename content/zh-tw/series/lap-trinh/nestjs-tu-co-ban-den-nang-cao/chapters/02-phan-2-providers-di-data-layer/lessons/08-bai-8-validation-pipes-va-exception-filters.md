---
id: 019d8b40-a204-7001-b001-nestjs000204
title: 第 8 課：驗證、管道和異常過濾器
slug: bai-8-validation-pipes-va-exception-filters
description: 類別驗證器、類別轉換器、ValidationPipe、自訂管道。內建異常過濾器、自訂異常過濾器、HTTP 異常和錯誤處理最佳實務。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：提供程式、依賴注入和資料層
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7695" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7695)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1023" cy="239" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="946" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="869" cy="205" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="792" cy="188" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.1051177665154,207 1067.1051177665154,251 1029,273 990.8948822334847,251 990.8948822334847,207 1029,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：驗證、管道和異常</tspan>
      <tspan x="60" dy="42">過濾器</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：提供程式、依賴注入和資料層</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-validation-pipe"><strong>1. ValidationPipe－自動驗證</strong></h2>

<pre><code class="language-bash"># Cài packages
npm install class-validator class-transformer
</code></pre>

<pre><code class="language-typescript">// main.ts — Bật global validation
import { ValidationPipe } from '@nestjs/common';

const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,           // Strip properties không có decorator
  forbidNonWhitelisted: true, // Throw error nếu có property lạ
  transform: true,           // Auto-transform types (string → number)
  transformOptions: {
    enableImplicitConversion: true,
  },
}));
</code></pre>

<h3 id="dto-validation"><strong>帶有驗證裝飾器的 DTO</strong></h3>

<pre><code class="language-typescript">import {
  IsString, IsEmail, IsOptional, IsEnum,
  MinLength, MaxLength, IsNumber, Min, Max,
  IsBoolean, IsArray, ValidateNested, IsUUID,
  IsNotEmpty, Matches, IsUrl, IsDateString,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số',
  })
  password: string;

  @IsOptional()
  @IsEnum(['admin', 'user'])
  role?: string;

  @IsOptional()
  @IsUrl()
  avatar?: string;
}

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsBoolean()
  published?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })  // Validate từng phần tử
  tags?: string[];
}

// Nested validation
export class CreateOrderDto {
  @IsUUID()
  productId: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  quantity: number;

  @ValidateNested()
  @Type(() => AddressDto)
  shippingAddress: AddressDto;
}

export class AddressDto {
  @IsString() street: string;
  @IsString() city: string;
  @IsString() country: string;
}
</code></pre>

<h3 id="validation-response"><strong>驗證錯誤回應</strong></h3>

<pre><code class="language-json">// POST /users với body: { "name": "", "email": "invalid" }
// Response 400:
{
  "statusCode": 400,
  "message": [
    "name should not be empty",
    "name must be longer than or equal to 2 characters",
    "email must be an email"
  ],
  "error": "Bad Request"
}
</code></pre>

<h2 id="2-custom-pipes"><strong>2. 定制管道</strong></h2>

<pre><code class="language-typescript">// Parse UUID Pipe
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { validate as isUUID } from 'uuid';

@Injectable()
export class ParseUUIDPipe implements PipeTransform {
  transform(value: string) {
    if (!isUUID(value)) {
      throw new BadRequestException(`"${value}" is not a valid UUID`);
    }
    return value;
  }
}

// Sử dụng
@Get(':id')
findOne(@Param('id', ParseUUIDPipe) id: string) {
  return this.service.findOne(id);
}
</code></pre>

<pre><code class="language-typescript">// Transform Pipe — trim và lowercase
@Injectable()
export class TrimPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') {
      return value.trim().toLowerCase();
    }
    if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (typeof value[key] === 'string') {
          value[key] = value[key].trim();
        }
      }
    }
    return value;
  }
}
</code></pre>

<h3 id="built-in-pipes"><strong>內建管道</strong></h3>

<pre><code class="language-typescript">import { ParseIntPipe, ParseBoolPipe, ParseUUIDPipe, DefaultValuePipe } from '@nestjs/common';

@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) { ... }

@Get()
findAll(
  @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  @Query('active', new DefaultValuePipe(true), ParseBoolPipe) active: boolean,
) { ... }

@Get(':id')
findByUUID(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) { ... }
</code></pre>

<h2 id="3-exception-filters"><strong>3. 異常過濾器</strong></h2>

<h3 id="built-in-exceptions"><strong>內建 HTTP 異常</strong></h3>

<pre><code class="language-typescript">import {
  BadRequestException,     // 400
  UnauthorizedException,   // 401
  ForbiddenException,      // 403
  NotFoundException,       // 404
  ConflictException,       // 409
  UnprocessableEntityException, // 422
  InternalServerErrorException, // 500
} from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne(id: string): Promise&lt;User&gt; {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User với ID "${id}" không tồn tại`);
    }
    return user;
  }

  async create(dto: CreateUserDto): Promise&lt;User&gt; {
    const existing = await this.repo.findOne({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException('Email đã được sử dụng');
    }
    return this.repo.save(this.repo.create(dto));
  }
}
</code></pre>

<h3 id="custom-exception-filter"><strong>自訂異常過濾器</strong></h3>

<pre><code class="language-typescript">import {
  ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()  // Bắt TẤT CẢ exceptions
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse&lt;Response&gt;();
    const request = ctx.getRequest&lt;Request&gt;();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';
    let errors: any = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message = typeof res === 'string' ? res : (res as any).message;
      errors = typeof res === 'object' ? (res as any).errors : null;
    }

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      errors,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

// Đăng ký global
// main.ts
app.useGlobalFilters(new AllExceptionsFilter());

// Hoặc qua module
@Module({
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
</code></pre>

<h3 id="custom-exceptions"><strong>自訂業務例外</strong></h3>

<pre><code class="language-typescript">// Tạo exception riêng cho business logic
export class InsufficientBalanceException extends HttpException {
  constructor(balance: number, required: number) {
    super(
      {
        message: 'Số dư không đủ',
        balance,
        required,
        deficit: required - balance,
      },
      HttpStatus.UNPROCESSABLE_ENTITY,
    );
  }
}

// Sử dụng
if (user.balance < order.total) {
  throw new InsufficientBalanceException(user.balance, order.total);
}
</code></pre>

<h2 id="4-tong-ket"><strong>4. 總結</strong></h2>

<ul>
<li><strong>驗證管道</strong>：全域啟用白名單、轉換 — 自動驗證 DTO</li>
<li><strong>類別驗證器</strong>：@IsString、@IsEmail、@MinLength 等裝飾器</li>
<li><strong>客製化管道</strong>：在到達處理程序之前轉換/驗證數據</li>
<li><strong>異常過濾器</strong>：為整個應用程式統一捕獲和格式化錯誤</li>
<li>總是扔 <strong>HttpException</strong> 特定錯誤而不是通用錯誤</li>
</ul>

<p>下一篇文章將會部署 <strong>使用 Passport 和 JWT 進行身份驗證</strong>。</p>
