---
id: 019d8b40-a101-7001-b001-nestjs000101
title: 'Lesson 1: Introducing NestJS - Why choose NestJS?'
slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
description: >-
  Find out what NestJS is, compare with Express, Fastify, Koa. Module-based
  architecture, Dependency Injection, TypeScript-first. Ecosystem and practical
  use cases.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: NestJS Platform'
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: 'NestJS: From Basics to Advanced'
  slug: nestjs-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 Programming — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: Introducing NestJS - Why choose</tspan>
      <tspan x="60" dy="42">NestJS?</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: NestJS Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nestjs-la-gi"><strong>1. What is NestJS?</strong></h2>

<p>NestJS is a progressive Node.js framework, using TypeScript as the main language, designed to build efficient, reliable and highly scalable server-side applications. Created by <strong>Kamil Myśliwiec</strong> in 2017, NestJS took inspiration from Angular with its architecture <strong>Module-based</strong>, <strong>Dependency Injection</strong> and <strong>Decorator patterns</strong>.</p>

<p>NestJS runs on Express.js (default) or Fastify, providing an abstraction layer above but still allowing direct access to the underlying platform's API when needed.</p>

<h3 id="tai-sao-nestjs"><strong>Why choose NestJS?</strong></h3>

<ul>
<li><p><strong>TypeScript-first</strong>: Written entirely in TypeScript, supports strong type safety</p></li>
<li><p><strong>Architecture opinionated</strong>: Provides a clear, easy-to-maintain architecture for large teams</p></li>
<li><p><strong>Dependency Injection</strong>: IoC container built-in, easy testing and loose coupling</p></li>
<li><p><strong>Rich ecosystem</strong>: GraphQL, WebSockets, Microservices, CQRS, and 200+ official packages</p></li>
<li><p><strong>Enterprise-ready</strong>: Used by Adidas, Roche, Trilon, and many large companies</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. Compare NestJS with other Frameworks</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>NestJS</th><th>Express</th><th>Fastify</th><th>Koa</th></tr>
</thead>
<tbody>
<tr><td>TypeScript</td><td>Native</td><td>Plugins</td><td>Plugins</td><td>Plugins</td></tr>
<tr><td>Architecture</td><td>Opinionated</td><td>Minimalist</td><td>Minimalist</td><td>Minimalist</td></tr>
<tr><td>DI Containers</td><td>Built-in</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>CLI</td><td>Powerful</td><td>express-generator</td><td>fastify-cli</td><td>❌</td></tr>
<tr><td>GraphQL</td><td>@nestjs/graphql</td><td>apollo-server</td><td>mercurius</td><td>apollo-server</td></tr>
<tr><td>WebSockets</td><td>@nestjs/websockets</td><td>socket.io</td><td>fastify-websocket</td><td>Manual</td></tr>
<tr><td>Microservices</td><td>Built-in</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>Testing</td><td>Testing module</td><td>Manual setup</td><td>Manual setup</td><td>Manual setup</td></tr>
<tr><td>Learning Curve</td><td>Average</td><td>Low</td><td>Low</td><td>Low</td></tr>
<tr><td>Suitable</td><td>Enterprise, Big Team</td><td>MVP, Small apps</td><td>High performance</td><td>Middleware-focused</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-nestjs"><strong>3. NestJS architecture</strong></h2>

<p>NestJS follows the architecture <strong>3-layer</strong> Combined with module system:</p>

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

<h3 id="cac-thanh-phan-chinh"><strong>Main ingredients</strong></h3>

<ul>
<li><p><strong>Modules</strong>: Code organization unit, grouping related components together</p></li>
<li><p><strong>Controllers</strong>: Handles HTTP requests, defines routes and returns responses</p></li>
<li><p><strong>Providers/Services</strong>: Contains business logic, injected into Controllers via DI</p></li>
<li><p><strong>Guards</strong>: Check authorization before request to handler</p></li>
<li><p><strong>Interceptors</strong>: Transform data before/after handler processing</p></li>
<li><p><strong>Pipes</strong>: Validate and transform input data</p></li>
<li><p><strong>Filters</strong>: Handle exceptions and format error responses</p></li>
<li><p><strong>Middleware</strong>: Runs before the route handler, similar to Express middleware</p></li>
</ul>

<h2 id="4-request-lifecycle"><strong>4. Request Lifecycle in NestJS</strong></h2>

<p>When an HTTP request comes to the NestJS application, it goes through the classes in this order:</p>

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

<p>Understanding this lifecycle is important because it helps you know where to place logic appropriately.</p>

<h2 id="5-he-sinh-thai"><strong>5. NestJS ecosystem</strong></h2>

<p>NestJS has a very rich official packages ecosystem:</p>

<table>
<thead>
<tr><th>Package</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td>@nestjs/typebug</td><td>TypeORM integration for SQL databases</td></tr>
<tr><td>@nestjs/mongoose</td><td>Mongoose integration for MongoDB</td></tr>
<tr><td>@nestjs/graphql</td><td>GraphQL API with Apollo/Mercurius</td></tr>
<tr><td>@nestjs/websockets</td><td>Real-time with WebSocket/Socket.IO</td></tr>
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

<h2 id="6-khi-nao-dung"><strong>6. When should you use NestJS?</strong></h2>

<h3 id="nen-dung"><strong>You should use NestJS when:</strong></h3>
<ul>
<li>Enterprise projects and large teams need clear architecture</li>
<li>Needs TypeScript native support</li>
<li>Need Microservices architecture</li>
<li>Need to integrate many protocols (REST + GraphQL + WebSocket)</li>
<li>Long-term projects need high maintainability</li>
<li>Backend for Angular/React/Vue applications</li>
</ul>

<h3 id="can-nhac"><strong>Consider alternatives when:</strong></h3>
<ul>
<li>Small MVP, needs fast shipping → Express/Fastify</li>
<li>Simple Serverless functions → Live AWS Lambda</li>
<li>Extremely simple API, few endpoints → Hono, Elysia</li>
</ul>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<p>NestJS is the most modern Node.js framework for backend development, especially suitable for enterprise projects that need clear architecture and scalability. With TypeScript-first approach, Dependency Injection built-in and rich ecosystem, NestJS helps developers build high-quality applications efficiently.</p>

<p>In the next article, we will review TypeScript essentials — the TypeScript knowledge needed to work effectively with NestJS.</p>
