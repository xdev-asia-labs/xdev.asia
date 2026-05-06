---
id: 019e1a00-aa01-7001-c001-k8sha000602
title: 第 25 課：istio 流量管理 — 虛擬服務與目的地規則
slug: bai-25-istio-traffic-management-virtualservice-destinationrule
description: 使用 VirtualService、DestinationRule、金絲雀部署、A/B 測試、熔斷、重試、逾時和故障注入設定流量路由。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 25
section_title: 第 6 部分：Istio 的服務網格和 Ingress
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-807" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-807)"/>

  <!-- Decorations -->
  <g>
    <circle cx="795" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="990" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="685" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="880" cy="60" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="195" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 25 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 25 課：ISTIO 流量管理 —</tspan>
      <tspan x="60" dy="42">虛擬服務與目的地規則</tspan>
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
<li>✅ VirtualService：路由規則，基於標頭的路由__HTMLTAG_71___
<li>✅ DestinationRule：子集、負載平衡、連接池</li>
<li>✅ 帶流量分割的金絲雀部署</li>
<li>✅ 熔斷和異常值檢測</li>
<li>✅ 重試、逾時、故障注入</li>
<li>✅ 使用 EnvoyFilter 進行速率限制</li>
</ul>

<hr>

<h2 id="phan-1-virtualservice">第 1 部分：虛擬服務</h2>

___程式碼區塊_0___

<h3 id="11-basic-routing">1.1。基本路由</h3>
___程式碼區塊_1___

<h3 id="12-canary">1.2。金絲雀部署（流量拆分）</h3>
___程式碼區塊_2___

<h3 id="13-ab-testing">1.3。 A/B 檢定（基於標頭）</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-2-destinationrule">第 2 部分：目的地規則</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-3-circuit-breaking">第 3 部分：斷路</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-4-fault-injection">第 4 部分：故障注入（混沌測試）</h2>

___程式碼區塊_7___

<hr>

<h2 id="phan-5-mirror">第 5 部分：流量鏡像（影子測試）</h2>

___程式碼區塊_8___

<hr>

<h2 id="phan-6-rate-limiting">第 6 部分：速率限制</h2>

___程式碼區塊_9___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_111__HTMLTAG_112___虛擬服務</strong>：路由規則 — 流量流向</li>
___HTMLTAG_115__HTMLTAG_116___DestinationRule</strong>：策略 — 如何處理流量（LB、斷路器）</li>
___HTMLTAG_119__HTMLTAG_120___Canary</strong>：基於權重的流量分割，逐步推出</li>
___HTMLTAG_123__HTMLTAG_124___斷路器</strong>：離群值偵測會彈出不健康的 Pod</li>
___HTMLTAG_127__HTMLTAG_128___故障注入</strong>：測試延遲與錯誤的彈性</li>
___HTMLTAG_131__HTMLTAG_132___流量鏡像</strong>：使用真實流量影子測試新版本</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_138___

<h3 id="bt1">練習 1：金絲雀部署</h3>
<ul>
<li>部署服務的 v1 和 v2__HTMLTAG_143___
<li>配置 90/10 流量分配</li>
<li>在 Kiali 中監控錯誤率</li>
<li>逐漸轉向0/100</li>
</ul>

<h3 id="bt2">練習 2：熔斷__HTMLTAG_152___
<ul>
<li>設定異常值偵測（3 個錯誤 → 彈出）</li>
<li>使用Fortio載入測試__HTMLTAG_157___
<li>在 Envoy admin 中觀察彈出/恢復</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 26 課：用於生產的 Istio 閘道和 Ingress</strong>，我們將設定外部存取、TLS 終止和多網域託管。 </p>