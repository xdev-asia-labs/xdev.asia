---
id: 019c9618-0203-7000-8000-c1147ba22e12
title: 第 16 課：網路政策
slug: bai-16-network-policies
description: 使用 NetworkPolicy 保護您的 Kubernetes 網路：Pod 選擇器、入口/出口規則、預設拒絕模式。進階 Cilium 網路策略，具有基於 HTTP 方法、路徑、標頭的 L7 策略。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 16
section_title: 第 4 單元：網絡
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2109" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2109)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="34" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：網路政策</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 4：網路</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解 NetworkPolicy 來控制 Pod 進出流量。實施預設拒絕模式、允許特定流量並使用 Cilium 網路策略進行 L7 控制。 </p>

<h2>1。為什麼我們需要 NetworkPolicy？ </h2>
<p>預設情況下，Kubernetes 允許叢集中所有 Pod 之間的所有流量 — 每個 Pod 都可以呼叫其他 Pod。這是一個嚴重的安全風險。 </p>
<p>NetworkPolicy 允許您定義 <strong>白名單規則</strong>：只有明確允許的流量才會通過。 </p>
___HTMLTAG_77__HTMLTAG_78___重要</strong>：NetworkPolicy 僅在 CNI 外掛程式支援時才有效（Cilium、Calico、Weave）。 Flannel 不支援 NetworkPolicy。 </p>

<h2>2。網路策略剖析</h2>
___程式碼區塊_0___

<h2>3。預設拒絕模式 — 最佳實務</h2>
<p>從「全部拒絕」開始，然後開啟每個必要的流量流。 </p>

<h3>3.1 預設拒絕所有入口</h3>
___程式碼區塊_1___

<h3>3.2 預設拒絕所有出口</h3>
___程式碼區塊_2___

<h3>3.3 允許 DNS（如果拒絕出口就很重要）</h3>
___程式碼區塊_3___

<h2>4。允許特定流量模式</h2>

<h3>前端 → 後端</h3>
___程式碼區塊_4___

<h3>跨命名空間：允許來自其他命名空間__HTMLTAG_98___
___程式碼區塊_5___

<h3>組合：Pod 選擇器與命名空間選擇器__HTMLTAG_100___
___程式碼區塊_6___

<h2>5。 Cilium 網路政策 — L7</h2>
<p>標準 Kubernetes NetworkPolicy 僅控制 L3/L4（IP、連接埠）。 Cilium CiliumNetworkPolicy 允許 L7 控制。 </p>

<h3>5.1 HTTP 方法與路徑</h3>
___程式碼區塊_7___

<h3>5.2 基於 DNS 的政策</h3>
___程式碼區塊_8___<h2>6。驗證與偵錯網路策略</h2>
___程式碼區塊_9___

<h2>7。最佳實務</h2>
<ul>
  ___HTMLTAG_114__HTMLTAG_115___以預設拒絕開頭</strong>：適用於所有生產命名空間</li>
  ___HTMLTAG_118__HTMLTAG_119___最低權限</strong>：僅開放絕對必要的流量</li>
  ___HTMLTAG_122__HTMLTAG_123___標籤一致</strong>：網路策略取決於標籤選擇器 - 設定標籤一致</li>
  ___HTMLTAG_126__HTMLTAG_127___應用於生產之前進行測試</strong>：使用 Hubble 審核模式查看哪些流量將被阻止</li>
  ___HTMLTAG_130__HTMLTAG_131___文件政策</strong>：解釋建立每項政策的原因</li>
</ul>

<h2>摘要</h2>
<ul>
  <li>NetworkPolicy：Pod 流量的白名單規則</li>
  <li>預設拒絕模式：阻止所有 → 允許特定</li>
  <li>選擇器：podSelector、namespaceSelector（專案內的 AND 邏輯，專案之間的 OR 邏輯）</li>
  <li>Cilium CiliumNetworkPolicy：L7 HTTP、基於 DNS 的政策</li>
  <li>需要 CNI 支援：Cilium、Calico（不是 Flannel）</li>
</ul>