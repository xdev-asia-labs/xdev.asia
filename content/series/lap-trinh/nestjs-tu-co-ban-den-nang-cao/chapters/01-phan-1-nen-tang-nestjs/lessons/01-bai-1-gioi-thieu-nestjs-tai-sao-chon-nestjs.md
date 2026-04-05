---
id: 019d8b40-a101-7001-b001-nestjs000101
title: 'Bài 1: Giới thiệu NestJS - Tại sao chọn NestJS?'
slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
description: >-
  Tìm hiểu NestJS là gì, so sánh với Express, Fastify, Koa. Kiến trúc
  Module-based, Dependency Injection, TypeScript-first. Hệ sinh thái và
  use cases thực tế.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng NestJS"
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: Từ Cơ bản đến Nâng cao'
  slug: nestjs-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6580" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6580)"/>

  <!-- Decorations -->
  <g>
    <circle cx="825" cy="225" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1050" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="775" cy="95" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1000" cy="160" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="175" x2="1100" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="205" x2="1050" y2="275" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Lập trình — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu NestJS - Tại sao chọn</tspan>
      <tspan x="60" dy="42">NestJS?</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng NestJS</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nestjs-la-gi"><strong>1. NestJS là gì?</strong></h2>

<p>NestJS là một framework Node.js progressive, sử dụng TypeScript làm ngôn ngữ chính, được thiết kế để xây dựng server-side applications hiệu quả, đáng tin cậy và có khả năng mở rộng cao. Được tạo bởi <strong>Kamil Myśliwiec</strong> vào năm 2017, NestJS lấy cảm hứng từ Angular với kiến trúc <strong>Module-based</strong>, <strong>Dependency Injection</strong> và <strong>Decorator pattern</strong>.</p>

<p>NestJS chạy trên nền Express.js (mặc định) hoặc Fastify, cung cấp tầng abstraction phía trên nhưng vẫn cho phép truy cập trực tiếp API của platform bên dưới khi cần.</p>

<h3 id="tai-sao-nestjs"><strong>Tại sao chọn NestJS?</strong></h3>

<ul>
<li><p><strong>TypeScript-first</strong>: Được viết hoàn toàn bằng TypeScript, hỗ trợ type safety mạnh mẽ</p></li>
<li><p><strong>Architecture opinionated</strong>: Cung cấp kiến trúc rõ ràng, dễ maintain cho team lớn</p></li>
<li><p><strong>Dependency Injection</strong>: IoC container built-in, dễ dàng testing và loose coupling</p></li>
<li><p><strong>Hệ sinh thái phong phú</strong>: GraphQL, WebSockets, Microservices, CQRS, và hơn 200+ packages chính thức</p></li>
<li><p><strong>Enterprise-ready</strong>: Được sử dụng bởi Adidas, Roche, Trilon, và nhiều công ty lớn</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. So sánh NestJS với các Framework khác</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>NestJS</th><th>Express</th><th>Fastify</th><th>Koa</th></tr>
</thead>
<tbody>
<tr><td>TypeScript</td><td>Native</td><td>Plugin</td><td>Plugin</td><td>Plugin</td></tr>
<tr><td>Architecture</td><td>Opinionated</td><td>Minimalist</td><td>Minimalist</td><td>Minimalist</td></tr>
<tr><td>DI Container</td><td>Built-in</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>CLI</td><td>Powerful</td><td>express-generator</td><td>fastify-cli</td><td>❌</td></tr>
<tr><td>GraphQL</td><td>@nestjs/graphql</td><td>apollo-server</td><td>mercurius</td><td>apollo-server</td></tr>
<tr><td>WebSocket</td><td>@nestjs/websockets</td><td>socket.io</td><td>fastify-websocket</td><td>Manual</td></tr>
<tr><td>Microservices</td><td>Built-in</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>Testing</td><td>Testing module</td><td>Manual setup</td><td>Manual setup</td><td>Manual setup</td></tr>
<tr><td>Learning Curve</td><td>Trung bình</td><td>Thấp</td><td>Thấp</td><td>Thấp</td></tr>
<tr><td>Phù hợp</td><td>Enterprise, Team lớn</td><td>MVP, Small apps</td><td>High performance</td><td>Middleware-focused</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-nestjs"><strong>3. Kiến trúc NestJS</strong></h2>

<p>NestJS tuân theo kiến trúc <strong>3-layer</strong> kết hợp với module system:</p>

<pre><code>┌──────────────────────────────────────────────┐
│                  Application                  │
├──────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐            │
│  │ Module A     │  │ Module B     │           │
│  │ ┌─────────┐ │  │ ┌─────────┐ │           │
│  │ │Controller│ │  │ │Controller│ │           │
│  │ └────┬────┘ │  │ └────┬────┘ │           │
│  │      ↓      │  │      ↓      │           │
│  │ ┌─────────┐ │  │ ┌─────────┐ │           │
│  │ │ Service  │ │  │ │ Service  │ │           │
│  │ └────┬────┘ │  │ └────┬────┘ │           │
│  │      ↓      │  │      ↓      │           │
│  │ ┌─────────┐ │  │ ┌─────────┐ │           │
│  │ │  Repo   │ │  │ │  Repo   │ │           │
│  │ └─────────┘ │  │ └─────────┘ │           │
│  └─────────────┘  └─────────────┘            │
├──────────────────────────────────────────────┤
│           Platform (Express/Fastify)          │
└──────────────────────────────────────────────┘
</code></pre>

<h3 id="cac-thanh-phan-chinh"><strong>Các thành phần chính</strong></h3>

<ul>
<li><p><strong>Modules</strong>: Đơn vị tổ chức code, nhóm các thành phần liên quan lại với nhau</p></li>
<li><p><strong>Controllers</strong>: Xử lý HTTP requests, định nghĩa routes và trả về responses</p></li>
<li><p><strong>Providers/Services</strong>: Chứa business logic, được inject vào Controllers qua DI</p></li>
<li><p><strong>Guards</strong>: Kiểm tra authorization trước khi request đến handler</p></li>
<li><p><strong>Interceptors</strong>: Transform data trước/sau khi handler xử lý</p></li>
<li><p><strong>Pipes</strong>: Validate và transform input data</p></li>
<li><p><strong>Filters</strong>: Xử lý exceptions và format error responses</p></li>
<li><p><strong>Middleware</strong>: Chạy trước route handler, tương tự Express middleware</p></li>
</ul>

<h2 id="4-request-lifecycle"><strong>4. Request Lifecycle trong NestJS</strong></h2>

<p>Khi một HTTP request đến NestJS application, nó đi qua các lớp theo thứ tự:</p>

<pre><code>Request
  → Middleware
    → Guards
      → Interceptors (before)
        → Pipes
          → Route Handler (Controller method)
        → Interceptors (after)
      → Exception Filters (nếu có lỗi)
Response
</code></pre>

<p>Hiểu rõ lifecycle này rất quan trọng vì nó giúp bạn biết đặt logic ở đâu cho phù hợp.</p>

<h2 id="5-he-sinh-thai"><strong>5. Hệ sinh thái NestJS</strong></h2>

<p>NestJS có hệ sinh thái packages chính thức rất phong phú:</p>

<table>
<thead>
<tr><th>Package</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td>@nestjs/typeorm</td><td>TypeORM integration cho SQL databases</td></tr>
<tr><td>@nestjs/mongoose</td><td>Mongoose integration cho MongoDB</td></tr>
<tr><td>@nestjs/graphql</td><td>GraphQL API với Apollo/Mercurius</td></tr>
<tr><td>@nestjs/websockets</td><td>Real-time với WebSocket/Socket.IO</td></tr>
<tr><td>@nestjs/microservices</td><td>Microservices (TCP, Redis, NATS, RabbitMQ, Kafka, gRPC)</td></tr>
<tr><td>@nestjs/passport</td><td>Authentication strategies</td></tr>
<tr><td>@nestjs/jwt</td><td>JWT token generation/verification</td></tr>
<tr><td>@nestjs/throttler</td><td>Rate limiting</td></tr>
<tr><td>@nestjs/config</td><td>Configuration management</td></tr>
<tr><td>@nestjs/schedule</td><td>Task scheduling (Cron jobs)</td></tr>
<tr><td>@nestjs/cache-manager</td><td>Caching (Memory, Redis)</td></tr>
<tr><td>@nestjs/swagger</td><td>OpenAPI/Swagger documentation</td></tr>
<tr><td>@nestjs/terminus</td><td>Health checks</td></tr>
<tr><td>@nestjs/event-emitter</td><td>Event-driven architecture</td></tr>
<tr><td>@nestjs/cqrs</td><td>Command Query Responsibility Segregation</td></tr>
</tbody>
</table>

<h2 id="6-khi-nao-dung"><strong>6. Khi nào nên dùng NestJS?</strong></h2>

<h3 id="nen-dung"><strong>Nên dùng NestJS khi:</strong></h3>
<ul>
<li>Dự án enterprise, team lớn cần kiến trúc rõ ràng</li>
<li>Cần TypeScript native support</li>
<li>Cần Microservices architecture</li>
<li>Cần tích hợp nhiều protocols (REST + GraphQL + WebSocket)</li>
<li>Dự án dài hạn cần maintainability cao</li>
<li>Backend cho Angular/React/Vue applications</li>
</ul>

<h3 id="can-nhac"><strong>Cân nhắc alternatives khi:</strong></h3>
<ul>
<li>MVP nhỏ, cần ship nhanh → Express/Fastify</li>
<li>Serverless functions đơn giản → AWS Lambda trực tiếp</li>
<li>API cực đơn giản, vài endpoints → Hono, Elysia</li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<p>NestJS là framework Node.js hiện đại nhất cho backend development, đặc biệt phù hợp cho các dự án enterprise cần kiến trúc rõ ràng và khả năng mở rộng. Với TypeScript-first approach, Dependency Injection built-in và hệ sinh thái phong phú, NestJS giúp developer xây dựng applications chất lượng cao một cách hiệu quả.</p>

<p>Trong bài tiếp theo, chúng ta sẽ ôn tập TypeScript essentials — những kiến thức TypeScript cần thiết để làm việc hiệu quả với NestJS.</p>
