---
id: 019c9618-0204-7000-8000-c1147ba22e12
title: 第 17 課：實作 — 使用 CILIUM 和閘道器 API 進行連網
slug: thuc-hanh-4-networking-voi-cilium-va-gateway-api
description: 單元 4 練習：使用 Hubble UI 將 Cilium 安裝為 CNI，設定網關 API (HTTPRoute)，使用憑證管理器設定 TLS，實作 L7 網路策略，透過 Hubble 觀察網路流量。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 17
section_title: 第 4 單元：網絡
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1738" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1738)"/>

  <!-- Decorations -->
  <g>
    <circle cx="627" cy="31" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="654" cy="118" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="681" cy="205" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="708" cy="32" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="119" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：練習 — 使用 CILIUM 建立網路</tspan>
      <tspan x="60" dy="42">和網關 API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 4：網路</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯練習目標__HTMLTAG_68___
<ul>
  <li>安裝具有哈伯可觀測性的 Cilium CNI</li>
  <li>安裝與設定 API 閘道（Envoy 閘道或 Cilium 閘道）</li>
  <li>建立 HTTPRoute 以進行基於路徑的路由和流量分割__HTMLTAG_75___
  <li>實作預設拒絕 NetworkPolicy 並允許特定流量</li>
  <li>使用 Hubble UI 觀察網路流量</li>
</ul>

<h2>實驗 1：使用 Helm 安裝 Cilium</h2>
___程式碼區塊_0___

<h2>實驗 2：開啟 Hubble UI 並觀察流量</h2>
___程式碼區塊_1___

<h2>實驗 3：部署示範應用程式__HTMLTAG_86___
___程式碼區塊_2___

<h2>實驗 4：閘道 API — 基於路徑的路由__HTMLTAG_88___
___程式碼區塊_3___

<h2>實驗 5：網路策略 — 預設拒絕</h2>
___程式碼區塊_4___

<h2>實驗 6：哈伯觀測__HTMLTAG_92___
___程式碼區塊_5___

<h2>清理</h2>
___程式碼區塊_6___

<h2>摘要__HTMLTAG_96___
<ul>
  <li>✅ 帶有 eBPF 網路的 Cilium CNI__HTMLTAG_99___
  <li>✅ 哈伯望遠鏡：即時網路可觀測性</li>
  <li>✅ 網關 API：基於路徑的路由和流量分割（金絲雀）</li>
  <li>✅ 網路策略：預設拒絕 + 允許特定</li>
  <li>✅ 使用 Hubble 偵錯丟棄的封包</li>
</ul>