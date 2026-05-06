---
id: 019c9618-0608-7000-8000-c1147ba22e16
title: 第 40 課：節點管理
slug: bai-40-node-management
description: Kubernetes 中的節點管理：節點生命週期、封鎖、排空、污點和容忍、節點親和性、拓樸傳播約束、節點問題偵測器、節點正常關閉。
duration_minutes: 70
is_free: false
video_url: null
sort_order: 40
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-204" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-204)"/>

  <!-- Decorations -->
  <g>
    <circle cx="600" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 40 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 40 課：節點管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解如何管理生產中的節點生命週期：維護、污點/容忍、節點親和性、拓撲傳播以及自動檢測節點問題。 </p>

<h2>1。節點生命週期</h2>
___程式碼區塊_0___

<h2>2。警戒線和排水溝</h2>
___程式碼區塊_1___

<h2>3。污點和容忍</h2>
___程式碼區塊_2___
___程式碼區塊_3___

<h2>4。節點親和性</h2>
___程式碼區塊_4___

<h2>5。拓樸擴充約束</h2>
<p>在區域/節點之間均勻分佈 Pod 以提高可用性：</p>
___程式碼區塊_5___

<h2>6。節點問題檢測器</h2>
___程式碼區塊_6___

<h2>7。節點正常關閉</h2>
___程式碼區塊_7___

<h2>8。使用 Karpenter 自動設定節點</h2>
___程式碼區塊_8___

<h2>摘要</h2>
<ul>
  <li>Cordon + Drain：節點維護的標準流程</li>
  <li>污點/容忍：控制工作負載放置（專用節點）</li>
  <li>節點親和性：綁定實例類型、拱形、區域</li>
  <li>拓樸分佈約束：確保 Pod 均勻分佈在區域/節點上</li>
  <li>節點問題偵測器：自動偵測節點層級問題__HTMLTAG_99___
  <li>Karpenter：比 Cluster Autoscaler 更聰明的自動設定</li>
</ul>