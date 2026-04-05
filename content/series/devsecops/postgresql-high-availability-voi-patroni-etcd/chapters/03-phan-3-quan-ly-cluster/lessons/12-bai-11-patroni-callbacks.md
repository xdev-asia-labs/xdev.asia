---
id: 019c9617-fb80-70a6-9003-6e17ae121e1f
title: 'Bài 11: Patroni Callbacks'
slug: bai-11-patroni-callbacks
description: >-
  Tạo callback scripts (on_start, on_stop, on_role_change), viết custom scripts
  cho notifications và tích hợp với monitoring systems.
duration_minutes: 285
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Quản lý Cluster"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4015" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4015)"/>

  <!-- Decorations -->
  <g>
    <circle cx="894" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="688" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Patroni Callbacks</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Quản lý Cluster</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu Patroni callbacks là gì và khi nào chúng được trigger</li><li>Implement custom scripts cho lifecycle events</li><li>Configure callbacks cho automation tasks</li><li>Handle role changes (primary ↔ replica)</li><li>Setup notifications và monitoring hooks</li><li>Troubleshoot callback failures</li></ul><h2 id="1-callbacks-overview">1. Callbacks Overview</h2><h3 id="11-callbacks-l%C3%A0-g%C3%AC">1.1. Callbacks là gì?</h3><p><strong>Callbacks</strong>&nbsp;= Custom scripts được Patroni execute tại các&nbsp;<strong>lifecycle events</strong>&nbsp;của cluster.</p><p><strong>Use cases</strong>:</p><ul><li>🔔&nbsp;<strong>Notifications</strong>: Alert team khi failover xảy ra</li><li>🔧&nbsp;<strong>Automation</strong>: Update DNS, load balancer configs</li><li>📊&nbsp;<strong>Monitoring</strong>: Push metrics to monitoring system</li><li>🚦&nbsp;<strong>Traffic management</strong>: Redirect application traffic</li><li>🔐&nbsp;<strong>Security</strong>: Rotate credentials, update firewall rules</li><li>📝&nbsp;<strong>Logging</strong>: Custom audit logs</li></ul><h3 id="12-available-callbacks">1.2. Available callbacks</h3><p>Patroni cung cấp các callback events:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Callback</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Trigger</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Use Case</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_start</code></td><td style="padding: 5px 10px;">Before PostgreSQL starts</td><td style="padding: 5px 10px;">Pre-start checks, mount volumes</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_stop</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Before PostgreSQL stops</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cleanup, notify applications</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_restart</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Before PostgreSQL restarts</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Log restart event</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_reload</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">After PostgreSQL config reload</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Verify config changes</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_role_change</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Role changes (primary ↔ replica)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Most important</strong><span>&nbsp;</span>- update DNS, LB</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">pre_promote</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Before replica promoted to primary</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Final checks before promotion</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">post_promote</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">After replica promoted to primary</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Update monitoring, send alerts</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="13-callback-execution-flow">1.3. Callback execution flow</h3><pre><code class="language-text">Example: Failover scenario

Old Primary crashes
       ↓
Patroni detects failure (after TTL expires)
       ↓
Patroni selects best replica (node2)
       ↓
pre_promote callback runs on node2
       ↓
PostgreSQL promoted to primary (pg_promote)
       ↓
post_promote callback runs on node2
       ↓
on_role_change callback runs on node2 (role=master)
       ↓
Other replicas detect new leader
       ↓
on_role_change callback runs on replicas (role=replica)
       ↓
Failover complete
</code></pre><h3 id="14-callback-environment-variables">1.4. Callback environment variables</h3><p>Patroni passes&nbsp;<strong>environment variables</strong>&nbsp;to scripts:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Variable</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Description</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Example</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_ROLE</code></td><td style="padding: 5px 10px;">Current role after change</td><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">master</code>,<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">replica</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_SCOPE</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cluster name</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">postgres</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_NAME</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Node name</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">node1</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_CLUSTER_NAME</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cluster name (alias)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">postgres</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_VERSION</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Patroni version</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">3.2.0</code></td></tr></tbody></table>
<!--kg-card-end: html-->
<p>For&nbsp;<code>on_role_change</code>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Variable</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Value</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_NEW_ROLE</code></td><td style="padding: 5px 10px;">New role:<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">master</code><span>&nbsp;</span>or<span>&nbsp;</span><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">replica</code></td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">PATRONI_OLD_ROLE</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Previous role</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-configure-callbacks-in-patroni">2. Configure Callbacks in Patroni</h2><h3 id="21-basic-configuration">2.1. Basic configuration</h3><p><strong>In patroni.yml</strong>:</p><pre><code class="language-yaml">scope: postgres
name: node1

postgresql:
  callbacks:
    on_start: /var/lib/postgresql/callbacks/on_start.sh
    on_stop: /var/lib/postgresql/callbacks/on_stop.sh
    on_restart: /var/lib/postgresql/callbacks/on_restart.sh
    on_reload: /var/lib/postgresql/callbacks/on_reload.sh
    on_role_change: /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><p><strong>Key points</strong>:</p><ul><li>Paths must be&nbsp;<strong>absolute</strong></li><li>Scripts must be&nbsp;<strong>executable</strong>&nbsp;(<code>chmod +x</code>)</li><li>Owned by&nbsp;<strong>postgres</strong>&nbsp;user</li><li>Should complete&nbsp;<strong>quickly</strong>&nbsp;(&lt;30 seconds)</li><li>Non-zero exit code = callback failed (logged but doesn't block operation)</li></ul><h3 id="22-create-callback-directory">2.2. Create callback directory</h3><pre><code class="language-bash"># On all 3 nodes
sudo mkdir -p /var/lib/postgresql/callbacks
sudo chown postgres:postgres /var/lib/postgresql/callbacks
sudo chmod 750 /var/lib/postgresql/callbacks
</code></pre><h2 id="3-implement-callback-scripts">3. Implement Callback Scripts</h2><h3 id="31-onstart-callback">3.1. on_start callback</h3><p><strong>Use case</strong>: Pre-start validation, mount checks.</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/postgresql/callbacks/on_start.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_start.sh - Runs before PostgreSQL starts

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Logging function
log() {
    echo "[$TIMESTAMP] [ON_START] $1" | tee -a "$LOG_FILE"
}

log "Starting PostgreSQL on $PATRONI_NAME"
log "Role: $PATRONI_ROLE"
log "Cluster: $PATRONI_SCOPE"

# Check disk space
DISK_USAGE=$(df -h /var/lib/postgresql | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 90 ]; then
    log "ERROR: Disk usage is ${DISK_USAGE}% - critically high!"
    exit 1
fi
log "Disk usage: ${DISK_USAGE}%"

# Check if data directory is mounted
if ! mountpoint -q /var/lib/postgresql/18/data; then
    log "WARNING: Data directory is not a mount point"
fi

# Check network connectivity to etcd
for ETCD_HOST in 10.0.1.11 10.0.1.12 10.0.1.13; do
    if ! nc -zw3 "$ETCD_HOST" 2379 2&gt;/dev/null; then
        log "ERROR: Cannot reach etcd at $ETCD_HOST:2379"
        exit 1
    fi
done
log "etcd connectivity verified"

log "Pre-start checks passed"
exit 0
</code></pre><p><strong>Create script</strong>:</p><pre><code class="language-bash"># On all nodes
sudo tee /var/lib/postgresql/callbacks/on_start.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_START] $1" | tee -a "$LOG_FILE"; }

log "Starting PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"

# Disk space check
DISK_USAGE=$(df -h /var/lib/postgresql | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -gt 90 ]; then
    log "ERROR: Disk usage ${DISK_USAGE}% too high"
    exit 1
fi
log "Disk usage: ${DISK_USAGE}%"

log "Pre-start checks passed"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_start.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_start.sh
</code></pre><h3 id="32-onstop-callback">3.2. on_stop callback</h3><p><strong>Use case</strong>: Graceful shutdown notifications.</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/postgresql/callbacks/on_stop.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_stop.sh - Runs before PostgreSQL stops

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log() {
    echo "[$TIMESTAMP] [ON_STOP] $1" | tee -a "$LOG_FILE"
}

log "Stopping PostgreSQL on $PATRONI_NAME"
log "Role: $PATRONI_ROLE"

# Notify monitoring system
if command -v curl &gt;/dev/null 2&gt;&amp;1; then
    curl -s -X POST http://monitoring.example.com/api/events \
        -H "Content-Type: application/json" \
        -d "{
            \"event\": \"postgresql_stop\",
            \"node\": \"$PATRONI_NAME\",
            \"role\": \"$PATRONI_ROLE\",
            \"timestamp\": \"$TIMESTAMP\"
        }" || log "WARNING: Failed to notify monitoring"
fi

log "PostgreSQL stop initiated"
exit 0
</code></pre><p><strong>Create script</strong>:</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_stop.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_STOP] $1" | tee -a "$LOG_FILE"; }

log "Stopping PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_stop.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_stop.sh
</code></pre><h3 id="33-onrolechange-callback-most-important">3.3. on_role_change callback (Most Important!)</h3><p><strong>Use case</strong>: Update DNS, load balancers, send notifications.</p><p><strong>Script</strong>:&nbsp;<code>/var/lib/postgresql/callbacks/on_role_change.sh</code></p><pre><code class="language-bash">#!/bin/bash
# on_role_change.sh - Runs when role changes (master ↔ replica)

set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log() {
    echo "[$TIMESTAMP] [ROLE_CHANGE] $1" | tee -a "$LOG_FILE"
}

log "=========================================="
log "Role change detected on $PATRONI_NAME"
log "Cluster: $PATRONI_SCOPE"
log "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "New role: $PATRONI_ROLE"
log "=========================================="

# Function: Update DNS
update_dns() {
    local NEW_PRIMARY_IP="$1"
    
    log "Updating DNS record for primary.postgres.local -&gt; $NEW_PRIMARY_IP"
    
    # Example using nsupdate (BIND DNS)
    # nsupdate -k /etc/dns/Kpostgres.+157+12345.key &lt;&lt; EOF
    # server dns-server.local
    # zone postgres.local
    # update delete primary.postgres.local A
    # update add primary.postgres.local 60 A $NEW_PRIMARY_IP
    # send
    # EOF
    
    # Or using API (e.g., Route53, Cloudflare)
    # aws route53 change-resource-record-sets --hosted-zone-id Z1234 ...
    
    log "DNS update completed"
}

# Function: Update HAProxy
update_haproxy() {
    local NEW_PRIMARY_IP="$1"
    
    log "Notifying HAProxy about new primary: $NEW_PRIMARY_IP"
    
    # Use HAProxy stats socket
    # echo "set server postgres/primary addr $NEW_PRIMARY_IP" | \
    #     socat stdio /var/run/haproxy.sock
    
    log "HAProxy updated"
}

# Function: Send Slack notification
send_notification() {
    local MESSAGE="$1"
    local WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
    
    log "Sending notification: $MESSAGE"
    
    curl -s -X POST "$WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{
            \"text\": \"🔄 PostgreSQL Role Change\",
            \"attachments\": [{
                \"color\": \"warning\",
                \"fields\": [
                    {\"title\": \"Node\", \"value\": \"$PATRONI_NAME\", \"short\": true},
                    {\"title\": \"Cluster\", \"value\": \"$PATRONI_SCOPE\", \"short\": true},
                    {\"title\": \"Old Role\", \"value\": \"${PATRONI_OLD_ROLE:-N/A}\", \"short\": true},
                    {\"title\": \"New Role\", \"value\": \"$PATRONI_ROLE\", \"short\": true},
                    {\"title\": \"Time\", \"value\": \"$TIMESTAMP\", \"short\": false}
                ]
            }]
        }" || log "WARNING: Notification failed"
}

# Main logic
case "$PATRONI_ROLE" in
    master)
        log "This node is now PRIMARY"
        
        # Get this node's IP
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "Node IP: $NODE_IP"
        
        # Update DNS to point to new primary
        update_dns "$NODE_IP"
        
        # Update load balancer
        update_haproxy "$NODE_IP"
        
        # Send notification
        send_notification "Node $PATRONI_NAME promoted to PRIMARY"
        
        # Set marker file for applications
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        
        log "Primary promotion tasks completed"
        ;;
        
    replica)
        log "This node is now REPLICA"
        
        # Remove primary marker
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        
        # Send notification if demoted from primary
        if [ "${PATRONI_OLD_ROLE}" = "master" ]; then
            send_notification "Node $PATRONI_NAME demoted to REPLICA"
        fi
        
        log "Replica role tasks completed"
        ;;
        
    *)
        log "Unknown role: $PATRONI_ROLE"
        exit 1
        ;;
esac

log "Role change handling completed successfully"
exit 0
</code></pre><p><strong>Create production-ready script</strong>:</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_role_change.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e

LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ROLE_CHANGE] $1" | tee -a "$LOG_FILE"; }

log "=========================================="
log "Role change: $PATRONI_NAME"
log "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "New role: $PATRONI_ROLE"
log "=========================================="

case "$PATRONI_ROLE" in
    master)
        log "This node is now PRIMARY"
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "Node IP: $NODE_IP"
        
        # TODO: Update DNS, load balancer, etc.
        # update_dns "$NODE_IP"
        
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        ;;
        
    replica)
        log "This node is now REPLICA"
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        ;;
        
    *)
        log "Unknown role: $PATRONI_ROLE"
        exit 1
        ;;
esac

log "Role change completed"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_role_change.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><h3 id="34-onrestart-callback">3.4. on_restart callback</h3><p><strong>Use case</strong>: Log restarts, notify about planned maintenance.</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_restart.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_RESTART] $1" | tee -a "$LOG_FILE"; }

log "Restarting PostgreSQL on $PATRONI_NAME (Role: $PATRONI_ROLE)"
exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_restart.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_restart.sh
</code></pre><h3 id="35-onreload-callback">3.5. on_reload callback</h3><p><strong>Use case</strong>: Verify configuration changes were applied.</p><pre><code class="language-bash">sudo tee /var/lib/postgresql/callbacks/on_reload.sh &gt; /dev/null &lt;&lt; 'EOF'
#!/bin/bash
set -e
LOG_FILE="/var/log/patroni/callbacks.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
log() { echo "[$TIMESTAMP] [ON_RELOAD] $1" | tee -a "$LOG_FILE"; }

log "Configuration reloaded on $PATRONI_NAME"

# Verify critical settings
MAX_CONN=$(sudo -u postgres psql -t -c "SHOW max_connections;")
log "max_connections = $MAX_CONN"

exit 0
EOF

sudo chmod +x /var/lib/postgresql/callbacks/on_reload.sh
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_reload.sh
</code></pre><h3 id="36-create-log-directory">3.6. Create log directory</h3><pre><code class="language-bash"># On all nodes
sudo mkdir -p /var/log/patroni
sudo chown postgres:postgres /var/log/patroni
sudo chmod 750 /var/log/patroni
</code></pre><h2 id="4-update-patroni-configuration">4. Update Patroni Configuration</h2><h3 id="41-add-callbacks-to-patroniyml">4.1. Add callbacks to patroni.yml</h3><p><strong>On all 3 nodes</strong>, edit&nbsp;<code>/etc/patroni/patroni.yml</code>:</p><pre><code class="language-yaml">scope: postgres
namespace: /service/
name: node1  # node2, node3 for other nodes

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008  # Change per node

etcd3:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    synchronous_mode: true
    synchronous_mode_strict: false
    
    postgresql:
      parameters:
        max_connections: 100
        shared_buffers: 256MB
        wal_level: replica
        max_wal_senders: 10
        max_replication_slots: 10

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432  # Change per node
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  
  authentication:
    replication:
      username: replicator
      password: replicator_password
    superuser:
      username: postgres
      password: postgres_password
  
  parameters:
    unix_socket_directories: '/var/run/postgresql'
  
  # ✅ Add callbacks section
  callbacks:
    on_start: /var/lib/postgresql/callbacks/on_start.sh
    on_stop: /var/lib/postgresql/callbacks/on_stop.sh
    on_restart: /var/lib/postgresql/callbacks/on_restart.sh
    on_reload: /var/lib/postgresql/callbacks/on_reload.sh
    on_role_change: /var/lib/postgresql/callbacks/on_role_change.sh

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><h3 id="42-reload-patroni-configuration">4.2. Reload Patroni configuration</h3><pre><code class="language-bash"># On all 3 nodes
sudo systemctl reload patroni

# Verify callbacks configured
patronictl show-config postgres
</code></pre><h2 id="5-test-callbacks">5. Test Callbacks</h2><h3 id="51-test-onrestart">5.1. Test on_restart</h3><pre><code class="language-bash"># Restart a node
patronictl restart postgres node2

# Check logs
sudo tail -f /var/log/patroni/callbacks.log

# Expected output:
# [2024-11-25 10:30:15] [ON_RESTART] Restarting PostgreSQL on node2
</code></pre><h3 id="52-test-onreload">5.2. Test on_reload</h3><pre><code class="language-bash"># Reload configuration
patronictl reload postgres node2

# Check logs
sudo tail /var/log/patroni/callbacks.log

# Expected:
# [2024-11-25 10:32:45] [ON_RELOAD] Configuration reloaded on node2
</code></pre><h3 id="53-test-onrolechange-failover">5.3. Test on_role_change (Failover)</h3><p><strong>⚠️ IMPORTANT</strong>: Test in non-production!</p><pre><code class="language-bash"># 1. Check current primary
patronictl list postgres
# node1 is Leader

# 2. Stop primary
sudo systemctl stop patroni  # On node1

# 3. Watch logs on node2 (will become new primary)
sudo tail -f /var/log/patroni/callbacks.log

# Expected output:
# [2024-11-25 10:35:10] [ROLE_CHANGE] ==========================================
# [2024-11-25 10:35:10] [ROLE_CHANGE] Role change: node2
# [2024-11-25 10:35:10] [ROLE_CHANGE] Old role: replica
# [2024-11-25 10:35:10] [ROLE_CHANGE] New role: master
# [2024-11-25 10:35:10] [ROLE_CHANGE] This node is now PRIMARY
# [2024-11-25 10:35:10] [ROLE_CHANGE] Node IP: 10.0.1.12
# [2024-11-25 10:35:10] [ROLE_CHANGE] Role change completed

# 4. Verify marker file
ls -la /tmp/postgres_is_*
# -rw-r--r-- 1 postgres postgres 0 Nov 25 10:35 /tmp/postgres_is_primary

# 5. Restart node1 (will rejoin as replica)
sudo systemctl start patroni  # On node1

# 6. Check node1 logs
sudo tail /var/log/patroni/callbacks.log
# [2024-11-25 10:36:30] [ROLE_CHANGE] Old role: master
# [2024-11-25 10:36:30] [ROLE_CHANGE] New role: replica
# [2024-11-25 10:36:30] [ROLE_CHANGE] This node is now REPLICA
</code></pre><h2 id="6-advanced-callback-examples">6. Advanced Callback Examples</h2><h3 id="61-dns-update-using-nsupdate">6.1. DNS update using nsupdate</h3><p><strong>Prerequisites</strong>: BIND DNS server với DDNS enabled.</p><pre><code class="language-bash">#!/bin/bash
# Update DNS via nsupdate

update_dns() {
    local NEW_PRIMARY_IP="$1"
    local DNS_KEY="/etc/dns/Kpostgres.+157+12345.key"
    local DNS_SERVER="dns.example.com"
    local ZONE="postgres.local"
    local RECORD="primary.postgres.local"
    
    log "Updating DNS: $RECORD -&gt; $NEW_PRIMARY_IP"
    
    nsupdate -k "$DNS_KEY" &lt;&lt; EOF
server $DNS_SERVER
zone $ZONE
update delete $RECORD A
update add $RECORD 60 A $NEW_PRIMARY_IP
send
EOF
    
    if [ $? -eq 0 ]; then
        log "DNS updated successfully"
    else
        log "ERROR: DNS update failed"
        return 1
    fi
}

# In on_role_change.sh
if [ "$PATRONI_ROLE" = "master" ]; then
    NODE_IP=$(hostname -I | awk '{print $1}')
    update_dns "$NODE_IP"
fi
</code></pre><h3 id="62-haproxy-backend-update">6.2. HAProxy backend update</h3><p><strong>Via stats socket</strong>:</p><pre><code class="language-bash">update_haproxy() {
    local NEW_PRIMARY_IP="$1"
    local HAPROXY_SOCKET="/var/run/haproxy.sock"
    
    log "Updating HAProxy: primary backend -&gt; $NEW_PRIMARY_IP"
    
    echo "set server postgres-primary/node addr $NEW_PRIMARY_IP port 5432" | \
        socat stdio "$HAPROXY_SOCKET"
    
    echo "set server postgres-primary/node state ready" | \
        socat stdio "$HAPROXY_SOCKET"
    
    log "HAProxy backend updated"
}
</code></pre><h3 id="63-consul-service-registration">6.3. Consul service registration</h3><pre><code class="language-bash">register_in_consul() {
    local ROLE="$1"
    local NODE_IP="$2"
    
    log "Registering in Consul: $PATRONI_NAME as $ROLE"
    
    curl -s -X PUT "http://consul.local:8500/v1/agent/service/register" \
        -H "Content-Type: application/json" \
        -d "{
            \"Name\": \"postgres-$ROLE\",
            \"ID\": \"postgres-$PATRONI_NAME\",
            \"Address\": \"$NODE_IP\",
            \"Port\": 5432,
            \"Tags\": [\"$ROLE\", \"patroni\"],
            \"Check\": {
                \"TCP\": \"$NODE_IP:5432\",
                \"Interval\": \"10s\",
                \"Timeout\": \"2s\"
            }
        }"
    
    log "Consul registration completed"
}

# Usage
NODE_IP=$(hostname -I | awk '{print $1}')
register_in_consul "$PATRONI_ROLE" "$NODE_IP"
</code></pre><h3 id="64-email-notification">6.4. Email notification</h3><pre><code class="language-bash">send_email_alert() {
    local SUBJECT="$1"
    local BODY="$2"
    local RECIPIENT="ops-team@example.com"
    
    log "Sending email alert: $SUBJECT"
    
    echo "$BODY" | mail -s "$SUBJECT" "$RECIPIENT"
    
    log "Email sent to $RECIPIENT"
}

# In on_role_change.sh
if [ "$PATRONI_ROLE" = "master" ]; then
    send_email_alert \
        "[ALERT] PostgreSQL Failover: $PATRONI_NAME promoted to PRIMARY" \
        "Cluster: $PATRONI_SCOPE
Node: $PATRONI_NAME
Old Role: ${PATRONI_OLD_ROLE}
New Role: $PATRONI_ROLE
Time: $TIMESTAMP

Action required: Verify cluster health"
fi
</code></pre><h3 id="65-slackteams-webhook">6.5. Slack/Teams webhook</h3><p><strong>Detailed Slack notification</strong>:</p><pre><code class="language-bash">send_slack_alert() {
    local WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
    local COLOR="$1"  # good, warning, danger
    local TITLE="$2"
    local MESSAGE="$3"
    
    curl -s -X POST "$WEBHOOK_URL" \
        -H "Content-Type: application/json" \
        -d "{
            \"username\": \"Patroni Monitor\",
            \"icon_emoji\": \": database:\",
            \"attachments\": [{
                \"color\": \"$COLOR\",
                \"title\": \"$TITLE\",
                \"text\": \"$MESSAGE\",
                \"fields\": [
                    {\"title\": \"Cluster\", \"value\": \"$PATRONI_SCOPE\", \"short\": true},
                    {\"title\": \"Node\", \"value\": \"$PATRONI_NAME\", \"short\": true},
                    {\"title\": \"Old Role\", \"value\": \"${PATRONI_OLD_ROLE:-N/A}\", \"short\": true},
                    {\"title\": \"New Role\", \"value\": \"$PATRONI_ROLE\", \"short\": true},
                    {\"title\": \"Timestamp\", \"value\": \"$TIMESTAMP\", \"short\": false}
                ],
                \"footer\": \"PostgreSQL HA\",
                \"footer_icon\": \"https://www.postgresql.org/media/img/about/press/elephant.png\"
            }]
        }"
}

# Usage
if [ "$PATRONI_ROLE" = "master" ]; then
    send_slack_alert "warning" \
        "🚨 Failover Event" \
        "Node $PATRONI_NAME has been promoted to PRIMARY"
fi
</code></pre><h3 id="66-metrics-push-to-monitoring">6.6. Metrics push to monitoring</h3><p><strong>Push to Prometheus Pushgateway</strong>:</p><pre><code class="language-bash">push_metrics() {
    local PUSHGATEWAY="http://pushgateway.local:9091"
    local JOB="patroni_callbacks"
    
    log "Pushing metrics to Prometheus"
    
    cat &lt;&lt; EOF | curl -s --data-binary @- "$PUSHGATEWAY/metrics/job/$JOB/instance/$PATRONI_NAME"
# TYPE patroni_role_change counter
# HELP patroni_role_change Number of role changes
patroni_role_change{cluster="$PATRONI_SCOPE",node="$PATRONI_NAME",new_role="$PATRONI_ROLE"} 1

# TYPE patroni_role_change_timestamp gauge
# HELP patroni_role_change_timestamp Timestamp of last role change
patroni_role_change_timestamp{cluster="$PATRONI_SCOPE",node="$PATRONI_NAME"} $(date +%s)
EOF
    
    log "Metrics pushed"
}
</code></pre><h2 id="7-callback-best-practices">7. Callback Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Keep callbacks fast</strong><ul><li>Complete within 10-30 seconds</li><li>Long tasks → background jobs</li></ul></li><li><strong>Use proper logging</strong><ul><li>Log all actions</li><li>Include timestamps</li><li>Rotate logs</li></ul></li><li><strong>Handle errors gracefully</strong><ul><li>Use&nbsp;<code>set -e</code>&nbsp;carefully</li><li>Catch errors, log, continue</li><li>Non-zero exit = warning, not failure</li></ul></li><li><strong>Test thoroughly</strong><ul><li>Test in staging</li><li>Simulate all scenarios</li><li>Verify idempotency</li></ul></li><li><strong>Make scripts idempotent</strong><ul><li>Can run multiple times safely</li><li>Check before modify</li></ul></li><li><strong>Use absolute paths</strong><ul><li>Don't rely on PATH</li><li>Specify full paths</li></ul></li><li><strong>Secure credentials</strong><ul><li>Don't hardcode passwords</li><li>Use environment variables or secrets manager</li></ul></li><li><strong>Monitor callback execution</strong><ul><li>Alert on failures</li><li>Track execution time</li></ul></li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't block for long time</strong><ul><li>Patroni waits for callbacks</li><li>Long delays → slower failover</li></ul></li><li><strong>Don't rely on network during failover</strong><ul><li>Network may be partitioned</li><li>Have fallback mechanisms</li></ul></li><li><strong>Don't fail the callback unnecessarily</strong><ul><li>Exit 0 even if notification fails</li><li>Log errors but continue</li></ul></li><li><strong>Don't run database queries in callbacks</strong><ul><li>PostgreSQL may not be ready</li><li>Can cause deadlocks</li></ul></li><li><strong>Don't modify PostgreSQL configuration</strong><ul><li>Let Patroni manage config</li><li>Use Patroni's parameters</li></ul></li><li><strong>Don't use interactive commands</strong><ul><li>No user input</li><li>Must run unattended</li></ul></li></ol><h2 id="8-troubleshoot-callback-issues">8. Troubleshoot Callback Issues</h2><h3 id="81-callback-not-executing">8.1. Callback not executing</h3><p><strong>Check</strong>:</p><pre><code class="language-bash"># 1. Verify script exists
ls -la /var/lib/postgresql/callbacks/on_role_change.sh

# 2. Check executable permissions
# Should be: -rwxr-xr-x postgres postgres
sudo chmod +x /var/lib/postgresql/callbacks/on_role_change.sh

# 3. Check ownership
sudo chown postgres:postgres /var/lib/postgresql/callbacks/on_role_change.sh

# 4. Verify path in patroni.yml
grep -A5 "callbacks:" /etc/patroni/patroni.yml

# 5. Check Patroni logs
sudo journalctl -u patroni -n 100 | grep -i callback
</code></pre><h3 id="82-callback-failing">8.2. Callback failing</h3><p><strong>Check logs</strong>:</p><pre><code class="language-bash"># Patroni logs
sudo journalctl -u patroni | grep "callback.*failed"

# Callback logs
sudo tail -f /var/log/patroni/callbacks.log

# Test script manually
sudo -u postgres /var/lib/postgresql/callbacks/on_role_change.sh
</code></pre><p><strong>Common issues</strong>:</p><ul><li><strong>Syntax error</strong>: Run&nbsp;<code>bash -n script.sh</code>&nbsp;to check</li><li><strong>Missing dependency</strong>: Install required tools (curl, nc, etc.)</li><li><strong>Permission denied</strong>: Check file/directory permissions</li><li><strong>Timeout</strong>: Script taking too long</li></ul><h3 id="83-callback-causing-slow-failover">8.3. Callback causing slow failover</h3><p><strong>Measure callback execution time</strong>:</p><pre><code class="language-bash"># Add timing to script
START_TIME=$(date +%s)

# ... your callback logic ...

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))
log "Callback completed in ${DURATION} seconds"

# If DURATION &gt; 30, investigate and optimize
</code></pre><h2 id="9-production-callback-template">9. Production Callback Template</h2><p><strong>Complete production-ready template</strong>:</p><pre><code class="language-bash">#!/bin/bash
# Patroni callback template
# File: /var/lib/postgresql/callbacks/on_role_change.sh

set -euo pipefail  # Exit on error, undefined vars, pipe failures

# Configuration
readonly LOG_FILE="/var/log/patroni/callbacks.log"
readonly LOCK_FILE="/tmp/callback_role_change.lock"
readonly TIMEOUT=30
readonly SLACK_WEBHOOK="${SLACK_WEBHOOK_URL:-}"

# Logging function
log() {
    local LEVEL="$1"
    shift
    local MESSAGE="$*"
    local TIMESTAMP
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$TIMESTAMP] [$LEVEL] [ROLE_CHANGE] $MESSAGE" | tee -a "$LOG_FILE"
}

# Error handler
error_exit() {
    log "ERROR" "$1"
    cleanup
    exit 1
}

# Cleanup function
cleanup() {
    rm -f "$LOCK_FILE"
}

# Ensure only one instance runs
if ! mkdir "$LOCK_FILE" 2&gt;/dev/null; then
    log "WARN" "Another callback instance is running, exiting"
    exit 0
fi

trap cleanup EXIT

# Set timeout
timeout "$TIMEOUT" bash &lt;&lt; 'SCRIPT' || error_exit "Callback timed out after ${TIMEOUT}s"

log "INFO" "=========================================="
log "INFO" "Role change detected"
log "INFO" "Cluster: ${PATRONI_SCOPE:-unknown}"
log "INFO" "Node: ${PATRONI_NAME:-unknown}"
log "INFO" "Old role: ${PATRONI_OLD_ROLE:-unknown}"
log "INFO" "New role: ${PATRONI_ROLE:-unknown}"
log "INFO" "=========================================="

# Main logic
case "${PATRONI_ROLE:-}" in
    master)
        log "INFO" "Handling promotion to PRIMARY"
        
        # Get node IP
        NODE_IP=$(hostname -I | awk '{print $1}')
        log "INFO" "Node IP: $NODE_IP"
        
        # Update DNS (implement your logic)
        # update_dns "$NODE_IP" || log "WARN" "DNS update failed"
        
        # Update load balancer (implement your logic)
        # update_load_balancer "$NODE_IP" || log "WARN" "LB update failed"
        
        # Send notification
        if [ -n "$SLACK_WEBHOOK" ]; then
            curl -s -X POST "$SLACK_WEBHOOK" \
                -H "Content-Type: application/json" \
                -d "{\"text\": \"🚨 Failover: $PATRONI_NAME promoted to PRIMARY\"}" \
                || log "WARN" "Slack notification failed"
        fi
        
        # Set marker files
        touch /tmp/postgres_is_primary
        rm -f /tmp/postgres_is_replica
        
        log "INFO" "PRIMARY promotion tasks completed"
        ;;
        
    replica)
        log "INFO" "Handling demotion to REPLICA"
        
        # Remove primary marker
        rm -f /tmp/postgres_is_primary
        touch /tmp/postgres_is_replica
        
        # Notify if demoted from primary
        if [ "${PATRONI_OLD_ROLE:-}" = "master" ]; then
            log "WARN" "Node demoted from PRIMARY to REPLICA"
            # Send alert
        fi
        
        log "INFO" "REPLICA tasks completed"
        ;;
        
    *)
        error_exit "Unknown role: ${PATRONI_ROLE:-unknown}"
        ;;
esac

log "INFO" "Callback completed successfully"
exit 0

SCRIPT
</code></pre><h2 id="10-lab-exercises">10. Lab Exercises</h2><h3 id="lab-1-setup-basic-callbacks">Lab 1: Setup basic callbacks</h3><p><strong>Tasks</strong>:</p><ol><li>Create callback directory and scripts</li><li>Add callbacks to patroni.yml</li><li>Reload Patroni</li><li>Test with&nbsp;<code>patronictl restart</code></li></ol><h3 id="lab-2-test-failover-callbacks">Lab 2: Test failover callbacks</h3><p><strong>Tasks</strong>:</p><ol><li>Monitor callback logs:&nbsp;<code>tail -f /var/log/patroni/callbacks.log</code></li><li>Stop primary:&nbsp;<code>sudo systemctl stop patroni</code></li><li>Verify on_role_change executed on new primary</li><li>Check marker files:&nbsp;<code>/tmp/postgres_is_*</code></li><li>Restart old primary, verify it rejoins as replica</li></ol><h3 id="lab-3-implement-slack-notifications">Lab 3: Implement Slack notifications</h3><p><strong>Tasks</strong>:</p><ol><li>Get Slack webhook URL</li><li>Add notification to on_role_change.sh</li><li>Test by triggering failover</li><li>Verify message received in Slack</li></ol><h3 id="lab-4-measure-callback-performance">Lab 4: Measure callback performance</h3><p><strong>Tasks</strong>:</p><ol><li>Add timing to all callbacks</li><li>Trigger various events (restart, reload, failover)</li><li>Analyze callback execution times</li><li>Optimize slow callbacks</li></ol><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Callbacks</strong>&nbsp;= Custom automation at lifecycle events</p><p>✅&nbsp;<strong>on_role_change</strong>&nbsp;= Most critical callback for failover automation</p><p>✅&nbsp;<strong>Keep callbacks fast</strong>&nbsp;(&lt;30s) for quick failover</p><p>✅&nbsp;<strong>Log everything</strong>&nbsp;for debugging</p><p>✅&nbsp;<strong>Test thoroughly</strong>&nbsp;before production</p><p>✅&nbsp;<strong>Handle errors gracefully</strong>&nbsp;- don't block operations</p><h3 id="common-use-cases">Common Use Cases</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Callback</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Common Actions</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_start</code></td><td style="padding: 5px 10px;">Pre-flight checks, mount verification</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_stop</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cleanup, notifications</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_role_change</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Update DNS, LB, send alerts</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_restart</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Log maintenance events</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">on_reload</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Verify config changes</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="architecture-hi%E1%BB%87n-t%E1%BA%A1i">Architecture hiện tại</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 18 installed (Bài 5)
✅ etcd cluster running (Bài 6)
✅ Patroni installed (Bài 7)
✅ Patroni configured (Bài 8)
✅ Cluster bootstrapped (Bài 9)
✅ Replication configured (Bài 10)
✅ Callbacks implemented (Bài 11)

Next: REST API usage
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-12">Chuẩn bị cho Bài 12</h3><p>Bài 12 sẽ cover&nbsp;<strong>Patroni REST API</strong>:</p><ul><li>Health check endpoints</li><li>Cluster status queries</li><li>Configuration management via API</li><li>Integration với load balancers</li><li>Monitoring và metrics</li></ul>
