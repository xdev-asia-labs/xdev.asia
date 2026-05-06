---
id: 019e1a00-aa01-7001-c001-k8sha000603
title: 第 26 課：Istio 閘道與生產入口
slug: bai-26-istio-gateway-va-ingress-cho-production
description: 設定 Istio 閘道以進行外部存取、使用憑證管理員進行 TLS 終止、多網域託管、CORS、WebSocket 支援和 Kubernetes 閘道 API。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 26
section_title: 第 6 部分：Istio 的服務網格和 Ingress
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6953" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6953)"/>

  <!-- Decorations -->
  <g>
    <circle cx="626" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="652" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="678" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="704" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="730" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="148" x2="1100" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="178" x2="1050" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.2390923627308,176.5 1035.2390923627308,219.5 998,241 960.7609076372692,219.5 960.7609076372692,176.5 998,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 26 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 26 課：Istio 閘道與入口</tspan>
      <tspan x="60" dy="42">生產</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：服務網格和服務網格使用 Istio 進入</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 為外部流量設定 Istio 閘道__HTMLTAG_71___
<li>✅ 使用憑證管理員終止 TLS（Let's Encrypt）</li>
<li>✅ 多域託管</li>
<li>✅ CORS、WebSocket、gRPC 支援</li>
<li>✅ Kubernetes 網關 API（未來）</li>
</ul>

<hr>

<h2 id="phan-1-gateway">第 1 部分：ISTIO 閘道</h2>

___程式碼區塊_0___

<h3 id="11-basic-gateway">1.1。基本網關</h3>
___程式碼區塊_1___

<h3 id="12-virtualservice-gateway">1.2。網關虛擬服務</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-2-tls">第 2 部分：使用 CERT-MANAGER 進行 TLS</h2>

<h3 id="21-cert-manager">2.1。安裝證書管理器</h3>
___程式碼區塊_3___

<h3 id="22-issuer">2.2。 ClusterIssuer（讓我們加密）</h3>
___程式碼區塊_4___

<h3 id="23-certificate">2.3。網關憑證</h3>
___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-3-websocket-grpc">第 3 部分：WEBSOCKET 和 gRPC</h2>

<h3 id="31-websocket">3.1。 WebSocket 支援</h3>
___程式碼區塊_7___

<h3 id="32-grpc">3.2。 gRPC 支援</h3>
___程式碼區塊_8___

<hr>

<h2 id="phan-4-gateway-api">第 4 部分：KUBERNETES GATEWAY API（未來）</h2>

___程式碼區塊_9___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_111__HTMLTAG_112___網關</strong>：外部流量的入口點，TLS 終止</li>
___HTMLTAG_115__HTMLTAG_116___虛擬服務</strong>：從網關路由流量 → 後端服務</li>
___HTMLTAG_119__HTMLTAG_120___cert-manager</strong>：自動設定與續訂 TLS 憑證</li>
___HTMLTAG_123__HTMLTAG_124___多域</strong>：單一網關，多個虛擬服務</li>
___HTMLTAG_127__HTMLTAG_128___網關 API</strong>：未來標準，取代 Ingress 和 Istio 網關</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：生產網關</h3>
<ul>
<li>使用 TLS 設定閘道（憑證管理員）</li>
<li>將 3 個網域路由到不同的服務__HTMLTAG_141___
<li>測試 HTTPS 重定向</li>
</ul>

<h3 id="bt2">練習 2：CORS 與安全標頭__HTMLTAG_146___
<ul>
<li>為 API 設定 CORS 策略</li>
<li>新增安全標頭（HSTS、CSP、X-Frame-Options）</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 27 課：Istio 安全 — AuthorizationPolicy 和 RequestAuthentication</strong> 中，我們將設定安全策略、JWT 驗證和網路分段。 </p>