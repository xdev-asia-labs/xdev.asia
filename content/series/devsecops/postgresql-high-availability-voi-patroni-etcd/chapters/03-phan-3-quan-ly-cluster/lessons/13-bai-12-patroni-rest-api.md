---
id: 019c9617-fb83-7047-bb91-e761d8b60d96
title: 'Bài 12: Patroni REST API'
slug: bai-12-patroni-rest-api
description: >-
  Sử dụng Patroni REST API endpoints, làm chủ patronictl commands và automation
  quản lý cluster qua CLI và API.
duration_minutes: 265
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Quản lý Cluster"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9781" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9781)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="206" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="150" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="94" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1071.507041555162,215.5 1071.507041555162,256.5 1036,277 1000.492958444838,256.5 1000.492958444838,215.5 1036,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Patroni REST API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Quản lý Cluster</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu Patroni REST API và endpoints</li><li>Sử dụng REST API cho health checks</li><li>Integrate với load balancers (HAProxy, Nginx)</li><li>Query cluster status và configuration</li><li>Implement custom monitoring</li><li>Secure REST API endpoints</li></ul><h2 id="1-rest-api-overview">1. REST API Overview</h2><h3 id="11-rest-api-l%C3%A0-g%C3%AC">1.1. REST API là gì?</h3><p>Patroni exposes&nbsp;<strong>HTTP REST API</strong>&nbsp;trên mỗi node để:</p><ul><li>🔍&nbsp;<strong>Health checks</strong>: Load balancers check node health</li><li>📊&nbsp;<strong>Monitoring</strong>: External systems query cluster state</li><li>⚙️&nbsp;<strong>Management</strong>: Read configuration, cluster topology</li><li>🔄&nbsp;<strong>Automation</strong>: Integration với CI/CD, orchestration tools</li></ul><h3 id="12-api-configuration">1.2. API Configuration</h3><p><strong>In patroni.yml</strong>:</p><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008        # Listen address and port
  connect_address: 10.0.1.11:8008  # Advertised address
  
  # Optional: Basic authentication
  # authentication:
  #   username: admin
  #   password: secret_password
  
  # Optional: SSL/TLS
  # certfile: /etc/patroni/certs/server.crt
  # keyfile: /etc/patroni/certs/server.key
  # cafile: /etc/patroni/certs/ca.crt
</code></pre><p><strong>Default port</strong>:&nbsp;<code>8008</code></p><h3 id="13-api-endpoints-overview">1.3. API Endpoints Overview</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Endpoint</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Method</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Purpose</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Use Case</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/</code></td><td style="padding: 5px 10px;">GET</td><td style="padding: 5px 10px;">Basic node info</td><td style="padding: 5px 10px;">Quick health check</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/primary</code><span>&nbsp;</span>or<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/master</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if node is primary</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">LB primary routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/replica</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if node is replica</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">LB read routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/read-write</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if writable (primary)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">LB write routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/read-only</code><span>&nbsp;</span>or<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/standby</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if read-only (replica)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">LB read routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/synchronous</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if synchronous replica</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Sync replica detection</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/asynchronous</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Check if asynchronous replica</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Async replica detection</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/health</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Detailed health check</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Monitoring</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/patroni</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Detailed cluster and node info</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Advanced monitoring</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/config</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cluster configuration from DCS</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Config inspection</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/cluster</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">All cluster members info</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Topology view</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/history</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">GET</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Failover history</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Audit log</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-health-check-endpoints">2. Health Check Endpoints</h2><h3 id="21-basic-health-check-get">2.1. Basic health check: GET /</h3><p><strong>Purpose</strong>: Quick check if node is running.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/

# Response on PRIMARY:
# HTTP 200 OK
# {
#   "state": "running",
#   "postmaster_start_time": "2024-11-25 10:30:00.123456+00:00",
#   "role": "master",
#   "server_version": 180000,
#   "cluster_unlocked": false,
#   "xlog": {
#     "location": 67108864
#   },
#   "timeline": 1,
#   "database_system_identifier": "7001234567890123456",
#   "patroni": {
#     "version": "3.2.0",
#     "scope": "postgres"
#   }
# }

# Response on REPLICA:
# HTTP 200 OK
# {
#   "state": "running",
#   "postmaster_start_time": "2024-11-25 10:31:15.789012+00:00",
#   "role": "replica",
#   "server_version": 180000,
#   "cluster_unlocked": false,
#   "xlog": {
#     "received_location": 67108864,
#     "replayed_location": 67108864
#   },
#   "timeline": 1,
#   "database_system_identifier": "7001234567890123456",
#   "patroni": {
#     "version": "3.2.0",
#     "scope": "postgres"
#   }
# }
</code></pre><p><strong>Response codes</strong>:</p><ul><li><strong>200 OK</strong>: Node is healthy and running</li><li><strong>503 Service Unavailable</strong>: Node is unhealthy (PostgreSQL down, etc.)</li></ul><h3 id="22-primary-check-get-primary-or-master">2.2. Primary check: GET /primary or /master</h3><p><strong>Purpose</strong>: Check if node is current primary/leader.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/primary

# On PRIMARY:
# HTTP 200 OK
# {
#   "state": "running",
#   "role": "master",
#   "xlog": {
#     "location": 67108864
#   }
# }

# On REPLICA:
# HTTP 503 Service Unavailable
# (empty body or error message)
</code></pre><p><strong>Use case</strong>: Load balancer health check for&nbsp;<strong>write traffic</strong>&nbsp;routing.</p><h3 id="23-replica-check-get-replica">2.3. Replica check: GET /replica</h3><p><strong>Purpose</strong>: Check if node is replica (standby).</p><pre><code class="language-bash">curl -s http://10.0.1.12:8008/replica

# On REPLICA:
# HTTP 200 OK
# {
#   "state": "running",
#   "role": "replica",
#   "xlog": {
#     "received_location": 67108864,
#     "replayed_location": 67108864
#   }
# }

# On PRIMARY:
# HTTP 503 Service Unavailable
</code></pre><p><strong>Use case</strong>: Load balancer health check for&nbsp;<strong>read traffic</strong>&nbsp;routing.</p><h3 id="24-read-write-check-get-read-write">2.4. Read-write check: GET /read-write</h3><p><strong>Purpose</strong>: Check if node accepts writes (primary + not in maintenance).</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/read-write

# Returns 200 if:
# - Node is primary
# - Cluster is not paused
# - No maintenance mode
</code></pre><h3 id="25-read-only-check-get-read-only-or-standby">2.5. Read-only check: GET /read-only or /standby</h3><p><strong>Purpose</strong>: Check if node is read-only replica.</p><pre><code class="language-bash">curl -s http://10.0.1.12:8008/read-only

# Returns 200 if:
# - Node is replica
# - PostgreSQL is running
# - Replication lag &lt; threshold (optional)
</code></pre><p><strong>Advanced: Lag tolerance</strong>:</p><pre><code class="language-bash"># Check replica with max 1MB lag tolerance
curl -s "http://10.0.1.12:8008/read-only?lag=1048576"

# Returns 503 if lag &gt; 1MB
</code></pre><h3 id="26-synchronous-replica-check-get-synchronous">2.6. Synchronous replica check: GET /synchronous</h3><p><strong>Purpose</strong>: Check if node is synchronous replica.</p><pre><code class="language-bash">curl -s http://10.0.1.12:8008/synchronous

# Returns 200 if:
# - Node is replica
# - sync_state = 'sync' (from pg_stat_replication)
</code></pre><h3 id="27-asynchronous-replica-check-get-asynchronous">2.7. Asynchronous replica check: GET /asynchronous</h3><p><strong>Purpose</strong>: Check if node is asynchronous replica.</p><pre><code class="language-bash">curl -s http://10.0.1.13:8008/asynchronous

# Returns 200 if:
# - Node is replica
# - sync_state != 'sync'
</code></pre><h3 id="28-health-endpoint-get-health">2.8. Health endpoint: GET /health</h3><p><strong>Purpose</strong>: Detailed health information.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/health | jq

# Response:
# {
#   "state": "running",
#   "role": "master",
#   "server_version": 180000,
#   "cluster_unlocked": false,
#   "timeline": 1,
#   "database_system_identifier": "7001234567890123456",
#   "postmaster_start_time": "2024-11-25 10:30:00.123456+00:00",
#   "patroni": {
#     "version": "3.2.0",
#     "scope": "postgres",
#     "name": "node1"
#   },
#   "replication": [
#     {
#       "usename": "replicator",
#       "application_name": "node2",
#       "client_addr": "10.0.1.12",
#       "state": "streaming",
#       "sync_state": "sync",
#       "sync_priority": 1
#     },
#     {
#       "usename": "replicator",
#       "application_name": "node3",
#       "client_addr": "10.0.1.13",
#       "state": "streaming",
#       "sync_state": "async",
#       "sync_priority": 0
#     }
#   ]
# }
</code></pre><h2 id="3-cluster-information-endpoints">3. Cluster Information Endpoints</h2><h3 id="31-detailed-node-info-get-patroni">3.1. Detailed node info: GET /patroni</h3><p><strong>Purpose</strong>: Comprehensive node and cluster information.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/patroni | jq

# Response (truncated):
# {
#   "state": "running",
#   "postmaster_start_time": "2024-11-25 10:30:00.123456+00:00",
#   "role": "master",
#   "server_version": 180000,
#   "xlog": {
#     "location": 67108864
#   },
#   "timeline": 1,
#   "cluster_unlocked": false,
#   "database_system_identifier": "7001234567890123456",
#   "patroni": {
#     "version": "3.2.0",
#     "scope": "postgres",
#     "name": "node1"
#   },
#   "dcs": {
#     "last_seen": 1700912345,
#     "ttl": 30
#   },
#   "tags": {
#     "nofailover": false,
#     "noloadbalance": false,
#     "clonefrom": false,
#     "nosync": false
#   },
#   "pending_restart": false,
#   "replication": [...],
#   "timeline_history": [...]
# }
</code></pre><h3 id="32-cluster-configuration-get-config">3.2. Cluster configuration: GET /config</h3><p><strong>Purpose</strong>: Get cluster-wide configuration from DCS.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/config | jq

# Response:
# {
#   "ttl": 30,
#   "loop_wait": 10,
#   "retry_timeout": 10,
#   "maximum_lag_on_failover": 1048576,
#   "synchronous_mode": true,
#   "synchronous_mode_strict": false,
#   "postgresql": {
#     "parameters": {
#       "max_connections": 100,
#       "shared_buffers": "256MB",
#       "wal_level": "replica",
#       "max_wal_senders": 10,
#       "max_replication_slots": 10,
#       "hot_standby": "on"
#     },
#     "use_pg_rewind": true,
#     "use_slots": true
#   }
# }
</code></pre><h3 id="33-cluster-members-get-cluster">3.3. Cluster members: GET /cluster</h3><p><strong>Purpose</strong>: Get information about all cluster members.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/cluster | jq

# Response:
# {
#   "members": [
#     {
#       "name": "node1",
#       "role": "leader",
#       "state": "running",
#       "api_url": "http://10.0.1.11:8008/patroni",
#       "host": "10.0.1.11",
#       "port": 5432,
#       "timeline": 1,
#       "lag": 0
#     },
#     {
#       "name": "node2",
#       "role": "sync_standby",
#       "state": "running",
#       "api_url": "http://10.0.1.12:8008/patroni",
#       "host": "10.0.1.12",
#       "port": 5432,
#       "timeline": 1,
#       "lag": 0
#     },
#     {
#       "name": "node3",
#       "role": "replica",
#       "state": "running",
#       "api_url": "http://10.0.1.13:8008/patroni",
#       "host": "10.0.1.13",
#       "port": 5432,
#       "timeline": 1,
#       "lag": 0
#     }
#   ],
#   "scope": "postgres"
# }
</code></pre><h3 id="34-failover-history-get-history">3.4. Failover history: GET /history</h3><p><strong>Purpose</strong>: Get cluster failover/switchover history.</p><pre><code class="language-bash">curl -s http://10.0.1.11:8008/history | jq

# Response:
# [
#   [
#     1,  // Timeline
#     67108864,  // LSN
#     "no recovery target specified",
#     "2024-11-25T10:30:00+00:00"
#   ],
#   [
#     2,
#     134217728,
#     "no recovery target specified",
#     "2024-11-25T11:45:30+00:00"
#   ]
# ]
</code></pre><h2 id="4-load-balancer-integration">4. Load Balancer Integration</h2><h3 id="41-haproxy-configuration">4.1. HAProxy configuration</h3><p><strong>haproxy.cfg</strong>:</p><pre><code class="language-conf">global
    log /dev/log local0
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    http
    option  httplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# Stats page
listen stats
    bind *:7000
    stats enable
    stats uri /stats
    stats refresh 10s
    stats auth admin:password

# Primary/Write endpoint
listen postgres-primary
    bind *:5000
    mode tcp
    option tcplog
    option tcp-check
    
    # Health check via Patroni REST API
    tcp-check connect port 8008
    tcp-check send GET\ /primary\ HTTP/1.0\r\n\r\n
    tcp-check expect string HTTP/1.1\ 200
    
    default-server inter 3s fall 3 rise 2
    
    server node1 10.0.1.11:5432 check port 8008
    server node2 10.0.1.12:5432 check port 8008
    server node3 10.0.1.13:5432 check port 8008

# Replicas/Read-only endpoint
listen postgres-replicas
    bind *:5001
    mode tcp
    option tcplog
    option tcp-check
    balance roundrobin
    
    # Health check via Patroni REST API
    tcp-check connect port 8008
    tcp-check send GET\ /replica\ HTTP/1.0\r\n\r\n
    tcp-check expect string HTTP/1.1\ 200
    
    default-server inter 3s fall 3 rise 2
    
    server node1 10.0.1.11:5432 check port 8008
    server node2 10.0.1.12:5432 check port 8008
    server node3 10.0.1.13:5432 check port 8008

# Read-write endpoint (primary only)
listen postgres-read-write
    bind *:5002
    mode tcp
    option tcplog
    option tcp-check
    
    tcp-check connect port 8008
    tcp-check send GET\ /read-write\ HTTP/1.0\r\n\r\n
    tcp-check expect string HTTP/1.1\ 200
    
    default-server inter 3s fall 3 rise 2
    
    server node1 10.0.1.11:5432 check port 8008
    server node2 10.0.1.12:5432 check port 8008
    server node3 10.0.1.13:5432 check port 8008

# Read-only endpoint (replicas only)
listen postgres-read-only
    bind *:5003
    mode tcp
    option tcplog
    option tcp-check
    balance leastconn
    
    tcp-check connect port 8008
    tcp-check send GET\ /read-only\ HTTP/1.0\r\n\r\n
    tcp-check expect string HTTP/1.1\ 200
    
    default-server inter 3s fall 3 rise 2
    
    server node1 10.0.1.11:5432 check port 8008
    server node2 10.0.1.12:5432 check port 8008
    server node3 10.0.1.13:5432 check port 8008
</code></pre><p><strong>Install và start HAProxy</strong>:</p><pre><code class="language-bash"># Install
sudo apt install -y haproxy

# Configure
sudo nano /etc/haproxy/haproxy.cfg
# (paste config above)

# Validate config
sudo haproxy -c -f /etc/haproxy/haproxy.cfg

# Start
sudo systemctl restart haproxy
sudo systemctl enable haproxy

# Check status
sudo systemctl status haproxy
</code></pre><p><strong>Test HAProxy</strong>:</p><pre><code class="language-bash"># Connect to primary (port 5000)
psql -h haproxy_host -p 5000 -U app_user -d myapp -c "SELECT pg_is_in_recovery();"
# Should return: f (false = primary)

# Connect to replica (port 5001)
psql -h haproxy_host -p 5001 -U app_user -d myapp -c "SELECT pg_is_in_recovery();"
# Should return: t (true = replica)

# View HAProxy stats
curl http://haproxy_host:7000/stats
# Or open in browser: http://haproxy_host:7000/stats
</code></pre><h3 id="42-nginx-with-stream-module">4.2. Nginx (with stream module)</h3><p><strong>nginx.conf</strong>:</p><pre><code class="language-nginx">stream {
    # Upstream for primary
    upstream postgres_primary {
        least_conn;
        server 10.0.1.11:5432 max_fails=3 fail_timeout=10s;
        server 10.0.1.12:5432 max_fails=3 fail_timeout=10s backup;
        server 10.0.1.13:5432 max_fails=3 fail_timeout=10s backup;
    }
    
    # Upstream for replicas
    upstream postgres_replicas {
        least_conn;
        server 10.0.1.11:5432 max_fails=3 fail_timeout=10s;
        server 10.0.1.12:5432 max_fails=3 fail_timeout=10s;
        server 10.0.1.13:5432 max_fails=3 fail_timeout=10s;
    }
    
    # Primary endpoint
    server {
        listen 5000;
        proxy_pass postgres_primary;
        proxy_connect_timeout 5s;
        proxy_timeout 300s;
    }
    
    # Replicas endpoint
    server {
        listen 5001;
        proxy_pass postgres_replicas;
        proxy_connect_timeout 5s;
        proxy_timeout 300s;
    }
}
</code></pre><p><strong>Note</strong>: Nginx stream module&nbsp;<strong>doesn't support HTTP health checks</strong>&nbsp;directly. Need external script or use HAProxy instead.</p><h3 id="43-health-check-script-for-external-lb">4.3. Health check script for external LB</h3><p><strong>Script for cloud load balancers</strong>&nbsp;(AWS ALB, GCP LB, etc.):</p><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/patroni_health_check.sh

set -e

NODE_IP="$1"
PORT="${2:-8008}"
ENDPOINT="${3:-/primary}"  # or /replica

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "http://${NODE_IP}:${PORT}${ENDPOINT}")

if [ "$RESPONSE" = "200" ]; then
    echo "Healthy"
    exit 0
else
    echo "Unhealthy (HTTP $RESPONSE)"
    exit 1
fi
</code></pre><p><strong>Usage</strong>:</p><pre><code class="language-bash"># Check if node is primary
./patroni_health_check.sh 10.0.1.11 8008 /primary

# Check if node is replica
./patroni_health_check.sh 10.0.1.12 8008 /replica
</code></pre><h2 id="5-monitoring-integration">5. Monitoring Integration</h2><h3 id="51-prometheus-exporter">5.1. Prometheus exporter</h3><p><strong>Use postgres_exporter with custom queries</strong>:</p><pre><code class="language-bash"># Install postgres_exporter
wget https://github.com/prometheus-community/postgres_exporter/releases/download/v0.15.0/postgres_exporter-0.15.0.linux-amd64.tar.gz
tar -xzf postgres_exporter-0.15.0.linux-amd64.tar.gz
sudo mv postgres_exporter-0.15.0.linux-amd64/postgres_exporter /usr/local/bin/

# Create systemd service
sudo tee /etc/systemd/system/postgres_exporter.service &gt; /dev/null &lt;&lt; EOF
[Unit]
Description=PostgreSQL Exporter
After=network.target

[Service]
Type=simple
User=postgres
Environment="DATA_SOURCE_NAME=postgresql://exporter:password@localhost:5432/postgres?sslmode=disable"
ExecStart=/usr/local/bin/postgres_exporter
Restart=always

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl start postgres_exporter
sudo systemctl enable postgres_exporter
</code></pre><p><strong>Custom query for Patroni metrics</strong>:</p><pre><code class="language-yaml"># /etc/postgres_exporter/queries.yaml

patroni_info:
  query: |
    SELECT 
      CASE WHEN pg_is_in_recovery() THEN 'replica' ELSE 'primary' END as role,
      1 as value
  metrics:
    - role:
        usage: "LABEL"
        description: "PostgreSQL role"
    - value:
        usage: "GAUGE"
        description: "Node role indicator"
</code></pre><h3 id="52-custom-monitoring-script">5.2. Custom monitoring script</h3><p><strong>Python script using REST API</strong>:</p><pre><code class="language-python">#!/usr/bin/env python3
# /usr/local/bin/patroni_monitor.py

import requests
import json
import sys

NODES = [
    "http://10.0.1.11:8008",
    "http://10.0.1.12:8008",
    "http://10.0.1.13:8008"
]

def check_cluster():
    results = []
    
    for node_url in NODES:
        try:
            response = requests.get(f"{node_url}/patroni", timeout=5)
            data = response.json()
            
            results.append({
                "node": data["patroni"]["name"],
                "role": data["role"],
                "state": data["state"],
                "timeline": data["timeline"],
                "lag": data.get("xlog", {}).get("replayed_location", 0)
            })
        except Exception as e:
            print(f"Error checking {node_url}: {e}", file=sys.stderr)
            results.append({
                "node": node_url,
                "role": "unknown",
                "state": "unreachable",
                "error": str(e)
            })
    
    return results

def main():
    cluster_status = check_cluster()
    
    print(json.dumps(cluster_status, indent=2))
    
    # Check if we have a leader
    leaders = [n for n in cluster_status if n.get("role") == "master"]
    
    if len(leaders) != 1:
        print(f"ERROR: Expected 1 leader, found {len(leaders)}", file=sys.stderr)
        sys.exit(1)
    
    # Check all nodes reachable
    unreachable = [n for n in cluster_status if n.get("state") == "unreachable"]
    
    if unreachable:
        print(f"WARNING: {len(unreachable)} nodes unreachable", file=sys.stderr)
        sys.exit(1)
    
    print("Cluster is healthy")
    sys.exit(0)

if __name__ == "__main__":
    main()
</code></pre><p><strong>Run monitoring</strong>:</p><pre><code class="language-bash">python3 /usr/local/bin/patroni_monitor.py

# Output:
# [
#   {
#     "node": "node1",
#     "role": "master",
#     "state": "running",
#     "timeline": 1,
#     "lag": 0
#   },
#   {
#     "node": "node2",
#     "role": "replica",
#     "state": "running",
#     "timeline": 1,
#     "lag": 0
#   },
#   {
#     "node": "node3",
#     "role": "replica",
#     "state": "running",
#     "timeline": 1,
#     "lag": 0
#   }
# ]
# Cluster is healthy
</code></pre><h3 id="53-grafana-dashboard-query-examples">5.3. Grafana dashboard query examples</h3><p><strong>PromQL queries</strong>:</p><pre><code class="language-promql"># Node role
patroni_info{role="primary"}

# Replication lag
pg_stat_replication_replay_lag_seconds

# Timeline
patroni_timeline

# Number of replicas
count(patroni_info{role="replica"})

# Synchronous replica status
patroni_sync_state{sync_state="sync"}
</code></pre><h2 id="6-secure-rest-api">6. Secure REST API</h2><h3 id="61-enable-authentication">6.1. Enable authentication</h3><p><strong>In patroni.yml</strong>:</p><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  
  # Basic authentication
  authentication:
    username: admin
    password: secure_password_here
</code></pre><p><strong>Access with authentication</strong>:</p><pre><code class="language-bash"># Using curl
curl -u admin:secure_password_here http://10.0.1.11:8008/patroni

# Or with header
curl -H "Authorization: Basic $(echo -n admin:secure_password_here | base64)" \
  http://10.0.1.11:8008/patroni
</code></pre><h3 id="62-enable-ssltls">6.2. Enable SSL/TLS</h3><p><strong>Generate certificates</strong>:</p><pre><code class="language-bash"># Create CA
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt \
  -subj "/CN=Patroni-CA"

# Create server certificate
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out server.csr \
  -subj "/CN=node1.example.com"

# Sign with CA
openssl x509 -req -days 365 -in server.csr -CA ca.crt -CAkey ca.key \
  -set_serial 01 -out server.crt

# Set permissions
sudo chown postgres:postgres server.key server.crt ca.crt
sudo chmod 600 server.key
</code></pre><p><strong>Configure in patroni.yml</strong>:</p><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  
  certfile: /etc/patroni/certs/server.crt
  keyfile: /etc/patroni/certs/server.key
  cafile: /etc/patroni/certs/ca.crt
  
  # Optional: Require client certificates
  # verify_client: required
  
  authentication:
    username: admin
    password: secure_password_here
</code></pre><p><strong>Access with HTTPS</strong>:</p><pre><code class="language-bash">curl -k -u admin:secure_password_here https://10.0.1.11:8008/patroni

# Or with CA certificate
curl --cacert /etc/patroni/certs/ca.crt \
  -u admin:secure_password_here \
  https://10.0.1.11:8008/patroni
</code></pre><h3 id="63-firewall-rules">6.3. Firewall rules</h3><pre><code class="language-bash"># Allow REST API only from specific IPs
sudo ufw allow from 10.0.1.0/24 to any port 8008
sudo ufw allow from &lt;load_balancer_ip&gt; to any port 8008
sudo ufw allow from &lt;monitoring_server_ip&gt; to any port 8008

# Deny from everywhere else
sudo ufw deny 8008
</code></pre><h2 id="7-advanced-rest-api-usage">7. Advanced REST API Usage</h2><h3 id="71-scripted-failover-check">7.1. Scripted failover check</h3><pre><code class="language-bash">#!/bin/bash
# Check if failover is safe

CLUSTER_URL="http://10.0.1.11:8008/cluster"

# Get cluster info
CLUSTER_DATA=$(curl -s "$CLUSTER_URL")

# Count healthy replicas
HEALTHY_REPLICAS=$(echo "$CLUSTER_DATA" | jq '[.members[] | select(.role != "leader" and .state == "running")] | length')

if [ "$HEALTHY_REPLICAS" -ge 1 ]; then
    echo "Safe to failover: $HEALTHY_REPLICAS healthy replicas"
    exit 0
else
    echo "NOT safe to failover: only $HEALTHY_REPLICAS healthy replicas"
    exit 1
fi
</code></pre><h3 id="72-get-primary-endpoint-dynamically">7.2. Get primary endpoint dynamically</h3><pre><code class="language-bash">#!/bin/bash
# Get current primary IP:port

get_primary() {
    for NODE in 10.0.1.11 10.0.1.12 10.0.1.13; do
        RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "http://${NODE}:8008/primary")
        if [ "$RESPONSE" = "200" ]; then
            echo "${NODE}:5432"
            return 0
        fi
    done
    echo "No primary found" &gt;&amp;2
    return 1
}

PRIMARY=$(get_primary)
echo "Current primary: $PRIMARY"

# Use in connection string
psql "host=$(echo $PRIMARY | cut -d: -f1) port=5432 user=app_user dbname=myapp"
</code></pre><h3 id="73-monitor-replication-lag">7.3. Monitor replication lag</h3><pre><code class="language-bash">#!/bin/bash
# Alert if replication lag &gt; threshold

THRESHOLD_MB=100

for NODE in 10.0.1.11 10.0.1.12 10.0.1.13; do
    LAG=$(curl -s "http://${NODE}:8008/patroni" | jq '.replication[]? | select(.sync_state != "sync") | .replay_lag' | wc -l)
    
    if [ "$LAG" -gt "$THRESHOLD_MB" ]; then
        echo "ALERT: Node $NODE replication lag &gt; ${THRESHOLD_MB}MB"
        # Send notification
    fi
done
</code></pre><h2 id="8-lab-exercises">8. Lab Exercises</h2><h3 id="lab-1-explore-rest-api-endpoints">Lab 1: Explore REST API endpoints</h3><p><strong>Tasks</strong>:</p><ol><li>Query all endpoints on each node</li><li>Compare responses between primary and replicas</li><li>Identify which endpoint returns 200 on primary vs replica</li></ol><pre><code class="language-bash"># Test script
for ENDPOINT in / /primary /replica /read-write /read-only /health /patroni; do
    echo "=== $ENDPOINT ==="
    for NODE in 10.0.1.11 10.0.1.12 10.0.1.13; do
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://${NODE}:8008${ENDPOINT}")
        echo "  Node $NODE: $HTTP_CODE"
    done
done
</code></pre><h3 id="lab-2-setup-haproxy">Lab 2: Setup HAProxy</h3><p><strong>Tasks</strong>:</p><ol><li>Install HAProxy</li><li>Configure with Patroni health checks</li><li>Test write traffic goes to primary only</li><li>Test read traffic distributed to replicas</li><li>Trigger failover, verify HAProxy redirects automatically</li></ol><h3 id="lab-3-create-monitoring-dashboard">Lab 3: Create monitoring dashboard</h3><p><strong>Tasks</strong>:</p><ol><li>Write Python script to query all nodes</li><li>Display cluster topology</li><li>Show replication lag</li><li>Highlight current primary</li><li>Run every 5 seconds</li></ol><h3 id="lab-4-secure-rest-api">Lab 4: Secure REST API</h3><p><strong>Tasks</strong>:</p><ol><li>Enable basic authentication</li><li>Generate SSL certificates</li><li>Configure HTTPS</li><li>Update curl commands to use auth + SSL</li><li>Configure firewall rules</li></ol><h2 id="9-troubleshooting-rest-api">9. Troubleshooting REST API</h2><h3 id="91-rest-api-not-responding">9.1. REST API not responding</h3><p><strong>Check</strong>:</p><pre><code class="language-bash"># 1. Verify Patroni is running
sudo systemctl status patroni

# 2. Check if port is listening
sudo netstat -tlnp | grep 8008

# 3. Check firewall
sudo ufw status | grep 8008

# 4. Test locally
curl http://localhost:8008/

# 5. Check logs
sudo journalctl -u patroni -n 50 | grep -i rest
</code></pre><h3 id="92-wrong-http-codes-returned">9.2. Wrong HTTP codes returned</h3><p><strong>Debug</strong>:</p><pre><code class="language-bash"># Get detailed response
curl -v http://10.0.1.11:8008/primary

# Check PostgreSQL status
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"

# Check Patroni sees correct role
patronictl list
</code></pre><h3 id="93-ssltls-errors">9.3. SSL/TLS errors</h3><p><strong>Check</strong>:</p><pre><code class="language-bash"># Verify certificate
openssl x509 -in /etc/patroni/certs/server.crt -text -noout

# Check certificate matches key
openssl x509 -modulus -noout -in server.crt | md5sum
openssl rsa -modulus -noout -in server.key | md5sum
# Should match

# Test SSL connection
openssl s_client -connect 10.0.1.11:8008 -CAfile ca.crt
</code></pre><h2 id="10-t%E1%BB%95ng-k%E1%BA%BFt">10. Tổng kết</h2><h3 id="key-endpoints-summary">Key Endpoints Summary</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Endpoint</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Returns 200 When</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Use Case</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/primary</code></td><td style="padding: 5px 10px;">Node is primary</td><td style="padding: 5px 10px;">LB write routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/replica</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node is replica</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">LB read routing</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/read-write</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node accepts writes</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Write endpoint</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/read-only</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node is read-only replica</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Read endpoint</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/health</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node is healthy</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Detailed monitoring</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/patroni</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Always (detailed info)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Advanced monitoring</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">/cluster</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Always (all members)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Topology view</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="integration-checklist">Integration Checklist</h3><ul><li>&nbsp;REST API accessible from all nodes</li><li>&nbsp;HAProxy configured with health checks</li><li>&nbsp;Monitoring system queries REST API</li><li>&nbsp;Authentication enabled</li><li>&nbsp;SSL/TLS configured (production)</li><li>&nbsp;Firewall rules configured</li><li>&nbsp;Health check scripts tested</li></ul><h3 id="architecture-hi%E1%BB%87n-t%E1%BA%A1i">Architecture hiện tại</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 18 installed (Bài 5)
✅ etcd cluster running (Bài 6)
✅ Patroni installed (Bài 7)
✅ Patroni configured (Bài 8)
✅ Cluster bootstrapped (Bài 9)
✅ Replication configured (Bài 10)
✅ Callbacks implemented (Bài 11)
✅ REST API integrated (Bài 12)

Next: Failover management
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-13">Chuẩn bị cho Bài 13</h3><p>Bài 13 sẽ cover&nbsp;<strong>Failover và Switchover</strong>:</p><ul><li>Automatic failover process</li><li>Manual switchover</li><li>Failover scenarios và testing</li><li>DCS role in leader election</li><li>Minimize downtime strategies</li></ul>
