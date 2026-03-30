---
id: 019d8b40-a204-7001-b001-nestjs000204
title: 'Bài 8: Validation, Pipes và Exception Filters'
slug: bai-8-validation-pipes-va-exception-filters
description: >-
  class-validator, class-transformer, ValidationPipe, Custom Pipes.
  Built-in Exception Filters, Custom Exception Filters, HTTP Exceptions
  và error handling best practices.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Providers, Dependency Injection & Data Layer"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<h2 id="1-validation-pipe"><strong>1. ValidationPipe — Validation tự động</strong></h2>

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

<h3 id="dto-validation"><strong>DTO với Validation Decorators</strong></h3>

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

<h3 id="validation-response"><strong>Validation Error Response</strong></h3>

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

<h2 id="2-custom-pipes"><strong>2. Custom Pipes</strong></h2>

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

<h3 id="built-in-pipes"><strong>Built-in Pipes</strong></h3>

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

<h2 id="3-exception-filters"><strong>3. Exception Filters</strong></h2>

<h3 id="built-in-exceptions"><strong>Built-in HTTP Exceptions</strong></h3>

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

<h3 id="custom-exception-filter"><strong>Custom Exception Filter</strong></h3>

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

<h3 id="custom-exceptions"><strong>Custom Business Exceptions</strong></h3>

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

<h2 id="4-tong-ket"><strong>4. Tổng kết</strong></h2>

<ul>
<li><strong>ValidationPipe</strong>: Bật global với whitelist, transform — tự động validate DTOs</li>
<li><strong>class-validator</strong>: Decorators như @IsString, @IsEmail, @MinLength</li>
<li><strong>Custom Pipes</strong>: Transform/validate data trước khi đến handler</li>
<li><strong>Exception Filters</strong>: Bắt và format lỗi thống nhất cho toàn app</li>
<li>Luôn throw <strong>HttpException</strong> cụ thể thay vì generic Error</li>
</ul>

<p>Bài tiếp theo sẽ triển khai <strong>Authentication với Passport và JWT</strong>.</p>
