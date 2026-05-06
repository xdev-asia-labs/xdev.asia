---
id: 019d8b40-a101-7001-b001-nestjs000101
title: 第 1 課：NestJS 簡介 - 為什麼選擇 NestJS？
slug: bai-1-gioi-thieu-nestjs-tai-sao-chon-nestjs
description: 了解 NestJS 是什麼，與 Express、Fastify、Koa 進行比較。基於模組的架構、依賴注入、TypeScript 優先。生態系統和實際用例。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：NestJS 平台
course:
  id: 019d8b40-a100-7001-b001-nestjs000001
  title: NestJS：從基礎到高級
  slug: nestjs-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">💻 程式設計 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：NestJS 簡介 - 為什麼選擇</tspan>
      <tspan x="60" dy="42">巢JS？</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NestJS：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：NestJS 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-nestjs-la-gi"><strong>1.NestJS是什麼？</strong></h2>

<p>NestJS 是一個漸進式的 Node.js 框架，使用 TypeScript 作為主要語言，旨在建立高效能、可靠且高度可擴展的伺服器端應用程式。創建者： <strong>卡米爾·邁斯利維克</strong> 2017 年，NestJS 從 Angular 的架構中汲取靈感 <strong>基於模組</strong>, <strong>依賴注入</strong> 和 <strong>裝飾器模式</strong>。</p>

<p>NestJS 在 Express.js（預設）或 Fastify 上運行，在上面提供了一個抽象層，但仍然允許在需要時直接存取底層平台的 API。</p>

<h3 id="tai-sao-nestjs"><strong>為什麼選擇 NestJS？</strong></h3>

<ul>
<li><p><strong>TypeScript優先</strong>：完全用TypeScript編寫，支援強型別安全</p></li>
<li><p><strong>建築固執己見</strong>：為大型團隊提供清晰、易於維護的架構</p></li>
<li><p><strong>依賴注入</strong>：IoC容器內置，易於測試且鬆散耦合</p></li>
<li><p><strong>豐富的生態系統</strong>：GraphQL、WebSockets、微服務、CQRS 和 200 多個官方包</p></li>
<li><p><strong>企業就緒</strong>：阿迪達斯、羅氏、Trilon 和許多大公司使用</p></li>
</ul>

<h2 id="2-so-sanh-framework"><strong>2. NestJS 與其他框架的比較</strong></h2>

<table>
<thead>
<tr><th>標準</th><th>NestJS</th><th>快遞</th><th>快速化</th><th>相思木</th></tr>
</thead>
<tbody>
<tr><td>打字稿</td><td>本地人</td><td>外掛</td><td>外掛</td><td>外掛</td></tr>
<tr><td>大樓</td><td>有主見</td><td>極簡主義</td><td>極簡主義</td><td>極簡主義</td></tr>
<tr><td>DI 容器</td><td>內建</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>命令列介面</td><td>強大</td><td>快遞生成器</td><td>fastify-cli</td><td>❌</td></tr>
<tr><td>GraphQL</td><td>@nestjs/graphql</td><td>阿波羅伺服器</td><td>水星</td><td>阿波羅伺服器</td></tr>
<tr><td>WebSockets</td><td>@nestjs/websockets</td><td>套接字.io</td><td>fastify-websocket</td><td>手冊</td></tr>
<tr><td>微服務</td><td>內建</td><td>❌</td><td>❌</td><td>❌</td></tr>
<tr><td>測試</td><td>測試模組</td><td>手動設定</td><td>手動設定</td><td>手動設定</td></tr>
<tr><td>學習曲線</td><td>平均</td><td>低</td><td>低</td><td>低</td></tr>
<tr><td>適合</td><td>企業、大團隊</td><td>MVP，小型應用程式</td><td>高效能</td><td>以中介軟體為中心</td></tr>
</tbody>
</table>

<h2 id="3-kien-truc-nestjs"><strong>3.NestJS架構</strong></h2>

<p>NestJS遵循以下架構 <strong>3層</strong> 與模組系統結合：</p>

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

<h3 id="cac-thanh-phan-chinh"><strong>主要成分</strong></h3>

<ul>
<li><p><strong>模組</strong>：代碼組織單元，將相關組件分組在一起</p></li>
<li><p><strong>控制器</strong>：處理HTTP請求，定義路由並回傳回應</p></li>
<li><p><strong>提供者/服務</strong>：包含業務邏輯，透過DI注入到Controller中</p></li>
<li><p><strong>衛兵</strong>：在向處理程序請求之前檢查授權</p></li>
<li><p><strong>攔截器</strong>：在處理程序處理之前/之後轉換數據</p></li>
<li><p><strong>管道</strong>：驗證並轉換輸入數據</p></li>
<li><p><strong>過濾器</strong>：處理異常並格式化錯誤回應</p></li>
<li><p><strong>中介軟體</strong>：在路由處理程序之前運行，類似於 Express 中間件</p></li>
</ul>

<h2 id="4-request-lifecycle"><strong>4. NestJS中的請求生命週期</strong></h2>

<p>當 HTTP 請求到達 NestJS 應用程式時，它會以以下順序遍歷這些類別：</p>

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

<p>理解這個生命週期很重要，因為它可以幫助您知道在哪裡適當地放置邏輯。</p>

<h2 id="5-he-sinh-thai"><strong>5.NestJS生態系統</strong></h2>

<p>NestJS擁有非常豐富的官方軟體包生態系統：</p>

<table>
<thead>
<tr><th>套餐</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>@nestjs/typebug</td><td>SQL 資料庫的 TypeORM 集成</td></tr>
<tr><td>@nestjs/貓鼬</td><td>MongoDB 的 Mongoose 集成</td></tr>
<tr><td>@nestjs/graphql</td><td>GraphQL API 與 Apollo/Mercurius</td></tr>
<tr><td>@nestjs/websockets</td><td>使用 WebSocket/Socket.IO 實現即時</td></tr>
<tr><td>@nestjs/微服務</td><td>微服務（TCP、Redis、NATS、RabbitMQ、Kafka、gRPC）</td></tr>
<tr><td>@nestjs/護照</td><td>認證策略</td></tr>
<tr><td>@nestjs/jwt</td><td>JWT 令牌產生/驗證</td></tr>
<tr><td>@nestjs/節流器</td><td>速率限制</td></tr>
<tr><td>@nestjs/配置</td><td>配置管理</td></tr>
<tr><td>@nestjs/時間表</td><td>任務調度（Cron 作業）</td></tr>
<tr><td>@nestjs/快取管理器</td><td>快取（記憶體、Redis）</td></tr>
<tr><td>@nestjs/招搖</td><td>OpenAPI/Swagger 文檔</td></tr>
<tr><td>@nestjs/終點站</td><td>健康檢查</td></tr>
<tr><td>@nestjs/事件發射器</td><td>事件驅動架構</td></tr>
<tr><td>@nestjs/cqrs</td><td>命令查詢職責分離</td></tr>
</tbody>
</table>

<h2 id="6-khi-nao-dung"><strong>6.什麼時候該使用NestJS？</strong></h2>

<h3 id="nen-dung"><strong>您應該在以下情況下使用 NestJS：</strong></h3>
<ul>
<li>企業專案和大型團隊需要清晰的架構</li>
<li>需要 TypeScript 本機支持</li>
<li>需要微服務架構</li>
<li>需要整合很多協定（REST + GraphQL + WebSocket）</li>
<li>長期專案需要高可維護性</li>
<li>Angular/React/Vue 應用程式的後端</li>
</ul>

<h3 id="can-nhac"><strong>在以下情況下考慮替代方案：</strong></h3>
<ul>
<li>小 MVP，需要快速運送 → Express/Fastify</li>
<li>簡單的無伺服器函數 → 即時 AWS Lambda</li>
<li>極為簡單的 API，很少的端點 → Hono、Elysia</li>
</ul>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<p>NestJS是最現代的後端開發Node.js框架，特別適合需要清晰架構和可擴充性的企業專案。憑藉 TypeScript 優先的方法、內建的依賴注入和豐富的生態系統，NestJS 幫助開發人員高效建立高品質的應用程式。</p>

<p>在下一篇文章中，我們將回顧 TypeScript 要點——有效使用 NestJS 所需的 TypeScript 知識。</p>
