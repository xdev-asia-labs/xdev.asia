---
id: 019c9618-060f-7000-8000-c1147ba22e16
title: 第 47 課：實務 — 雲端平台與生產準備狀況
slug: thuc-hanh-10-cloud-platforms
description: 模組 10 實務：部署到託管 K8s (EKS/GKE/AKS)、設定 PDB、HPA、使用 Spot 節點進行成本最佳化、生產就緒檢查表、Karpenter 節點整合。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 47
section_title: 模組 10：雲端與生產
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8047" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8047)"/>

  <!-- Decorations -->
  <g>
    <circle cx="747" cy="71" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="894" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1041" cy="185" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="688" cy="112" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="39" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.1769145362398,113 962.1769145362398,149 931,167 899.8230854637602,149 899.8230854637602,113.00000000000001 931,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 47 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 47 課：實作 — 雲端平台與</tspan>
      <tspan x="60" dy="42">生產準備狀況</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 10：雲端與雲端製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯練習目標__HTMLTAG_68___
<ul>
  <li>將生產就緒的應用程式部署到本地叢集（模擬雲端）</li>
  <li>配置 PodDisruptionBudget 並測試節點排出__HTMLTAG_73___
  <li>具有自訂指標的 HPA 設定__HTMLTAG_75___
  <li>應用安全最佳實務（PSS、網路策略）</li>
  <li>測試正常關閉</li>
  <li>配置 Karpenter 合併（模擬）</li>
</ul>

<h2>實驗室 1：生產就緒部署__HTMLTAG_84___
___程式碼區塊_0___

<h2>實驗 2：PodDisruptionBudget</h2>
___程式碼區塊_1___

<h2>實驗 3：水平 Pod 自動縮放器__HTMLTAG_88___
___程式碼區塊_2___

<h2>實驗 4：網路策略</h2>
___程式碼區塊_3___

<h2>實驗 5：安全情境__HTMLTAG_92___
___程式碼區塊_4___

<h2>實驗 6：正常關機測試</h2>
___程式碼區塊_5___

<h2>清理</h2>
___程式碼區塊_6___

<h2>摘要__HTMLTAG_98___
<ul>
  <li>✅ 生產部署：滾動更新+探測+正常關閉</li>
  <li>✅ PDB：如果違反最低可用性，則防止流失__HTMLTAG_103___
  <li>✅ HPA：基於 CPU/RPS 自動縮放</li>
  <li>✅ 網路策略：預設拒絕 + 允許特定流量__HTMLTAG_107___
  <li>✅ 安全性上下文：非根、唯讀檔案系統、無功能</li>
  <li>✅ 正常關閉：preStop 掛鉤 + SIGTERM 處理程序</li>
</ul>