---
id: 019c9618-0008-7000-8000-c1147ba22e10
title: 第 9 課：實作 — 基本 KUBERNETES 對象
slug: thuc-hanh-2-kubernetes-objects-co-ban
description: 模組 2 實務：使用 Deployment 和 Sidecar 容器部署 Web 應用程式、執行捲動更新、公開服務、使用臨時容器進行偵錯、管理命名空間和資源配額。
duration_minutes: 150
is_free: false
video_url: null
sort_order: 9
section_title: 模組 2：基本 Kubernetes 對象
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2645" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2645)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="226" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="270" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="162" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="54" r="14" fill="#f87171" opacity="0.05"/>
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
    <polygon points="1021.507041555162,165.5 1021.507041555162,206.5 986,227 950.492958444838,206.5 950.492958444838,165.5 986,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：練習 — KUBERNETES 物件</tspan>
      <tspan x="60" dy="42">表</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 2：基本 Kubernetes 物件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯練習目標__HTMLTAG_68___
<ul>
  <li>使用 Deployment + Sidecar 容器（日誌轉發器）部署真正的 Web 應用程式</li>
  <li>執行滾動更新和回滾__HTMLTAG_73___
  <li>使用 NodePort 公開服務</li>
  <li>使用臨時容器調試容器</li>
  <li>管理多團隊的命名空間與資源配額__HTMLTAG_79___
</ul>

<h2>準備</h2>
___程式碼區塊_0___

<h2>實驗 1：使用 Sidecar 容器部署 Web 應用程式</h2>
<p>使用 Grafana Alloy 部署 nginx 作為 sidecar 日誌轉發器（模擬，無需配置實際的 Loki）.</p>
___程式碼區塊_1___
___程式碼區塊_2___

<h2>實驗 2：公開服務與測試負荷平衡__HTMLTAG_88___
___程式碼區塊_3___

<h2>實驗 3：滾動更新</h2>
___程式碼區塊_4___

<h2>實驗 4：使用臨時容器進行除錯</h2>
___程式碼區塊_5___

<h2>實驗 5：具有 ResourceQuota 的多團隊命名空間</h2>
___程式碼區塊_6___

<h2>實驗 6：金絲雀部署</h2>
___程式碼區塊_7___

<h2>疑難排解 — 常見問題</h2>
<h3>Pod 陷入待定狀態__HTMLTAG_100___
___程式碼區塊_8___
<h3>ImagePullBackOff</h3>
___程式碼區塊_9___
<h3>CrashLoopBackOff</h3>
___程式碼區塊_10___

<h2>清理</h2>
___程式碼區塊_11___<h2>摘要__HTMLTAG_108___
<p>您已練習：</p>
<ul>
  <li>✅ 使用 Sidecar 容器進行部署（K8s 1.33+）</li>
  <li>✅ 滾動更新與安全回滾</li>
  <li>✅ 使用 NodePort 和 EndpointSlices 的服務</li>
  <li>✅ 使用临时容器进行调试</li>
  <li>✅ 多團隊的命名空間 + ResourceQuota + LimitRange</li>
  <li>✅ 金絲雀部署模式</li>
</ul>