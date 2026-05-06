---
id: 019c9618-0202-7000-8000-c1147ba22e12
title: 第 15 課：網關 API — 取代 Ingress 的新標準
slug: bai-15-gateway-api-chuan-moi-thay-ingress
description: Gateway API v1.4 GA（2025 年 10 月）是取代 Ingress 控制器的新標準。 GatewayClass、網關、HTTPRoute、GRPCRoute。流量分割、TLS、標頭匹配。實作：Cilium、Envoy Gateway、nginx-gateway-fabric。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 15
section_title: 第 4 單元：網絡
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5724" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5724)"/>

  <!-- Decorations -->
  <g>
    <circle cx="860" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.650635094611,117.5 951.650635094611,142.5 930,155 908.349364905389,142.5 908.349364905389,117.5 930,105" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：GATEWAY API — 新標準替換</tspan>
      <tspan x="60" dy="42">INGRESS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 4：網路</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標____HTMLTAG_68__HTMLTAG_69___了解 Gateway API v1.4 是取代傳統 Ingress 的新標準，如何使用 GatewayClass、Gateway、HTTPRoute 路由流量、金絲雀部署的流量分割、TLS 終止以及流行的實現。 </p>

<h2>1。傳統 Ingress 的問題</h2>
<p>Ingress API 自 K8s 1.1 起就存在，並且有很多限制：</p>
<ul>
  ___HTMLTAG_76__HTMLTAG_77___註解地獄</strong>：每個控制器（nginx、traefik、haproxy）使用不同的註解→供應商鎖定</li>
  ___HTMLTAG_80__HTMLTAG_81___表達能力有限</strong>：無內建流量分割、標頭修改</li>
  ___HTMLTAG_84__HTMLTAG_85___單一資源</strong>：基礎架構與應用程式團隊角色沒有分離</li>
  ___HTMLTAG_88__HTMLTAG_89___TLS 限制</strong>：沒有本機 TLS 後端</li>
</ul>
<p>Ingress-NGINX：進入 <strong>維護模式（2026 年 3 月）</strong>。未新增功能。 </p><h2>2。網關 API v1.4 GA — 2025 年 10 月</h2>
<p>Gateway API 是一個 Kubernetes SIG 網路項目，透過以下方式標準化流量管理：</p>
<ul>
  ___HTMLTAG_102__HTMLTAG_103___角色導向的設計</strong>：明確區分基礎設施供應商、叢集營運商、應用開發者的角色</li>
  ___HTMLTAG_106__HTMLTAG_107___富有表現力</strong>：流量分流、標頭匹配、URL重寫是一等公民</li>
  ___HTMLTAG_110__HTMLTAG_111___可移植</strong>：相同的清單適用於任何網關 API 實作</li>
  ___HTMLTAG_114__HTMLTAG_115___可擴充</strong>：TLSRoute、GRPCRoute、TCPRoute、自訂擴充</li>
</ul>

<h2>3。資源層次結構</h2>
___程式碼區塊_0___

<h3>3.1 GatewayClass</h3>
___程式碼區塊_1___

<h3>3.2 網關</h3>
___程式碼區塊_2___

<h3>3.3 HTTPRoute — 基於路徑的路由</h3>
___程式碼區塊_3___

<h2>4。流量分割 — Canary 部署</h2>
___程式碼區塊_4___

<h2>5。標頭匹配和 URL 重寫__HTMLTAG_130___
___程式碼區塊_5___

<h2>6。 BackendTLSPolicy — 到後端的 TLS (v1.4)</h2>
___程式碼區塊_6___

<h2>7。使用 ReferenceGrant 進行跨命名空間路由</h2>
___程式碼區塊_7___

<h2>8。 GRPCRoute</h2>
___程式碼區塊_8___

<h2>9。實作網關 API</h2>
<ul>
  ___HTMLTAG_140__HTMLTAG_141___Cilium Gateway API</strong>：基於 eBPF，與 Cilium CNI 原生集成，最有效</li>
  ___HTMLTAG_144__HTMLTAG_145___Envoy Gateway</strong>：基於 Envoy 的、功能豐富的 CNCF 項目</li>
  ___HTMLTAG_148__HTMLTAG_149___nginx-gateway-fabric</strong>：基於 nginx，穩定</li>
  ___HTMLTAG_152__HTMLTAG_153___Istio</strong>：與服務網格 Istio 整合</li>
  ___HTMLTAG_156__HTMLTAG_157___Traefik</strong>：支援從 v3.0 開始的網關 API v1</li>
</ul>

<h2>10。從入口遷移到網關 API</h2>
___程式碼區塊_9___

<h2>摘要</h2>
<ul>
  <li>Gateway API v1.4 GA（2025 年 10 月）= 取代 Ingress 的新標準</li>
  <li>面向角色：GatewayClass（下文）→ Gateway（叢集操作）→ HTTPRoute（應用程式開發）</li>
  <li>流量分流、標頭匹配、URL重寫都是一流的</li>
  <li>BackendTLSPolicy：到後端的 TLS (v1.4)</li>
  <li>Cilium 閘道 API：基於 eBPF，建議與 Cilium CNI 一起使用</li>
  <li>Ingress-NGINX：維護模式 2026 年 3 月 — 應遷移到網關 API</li>
</ul>