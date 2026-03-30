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
