---
id: 019c9618-0609-7000-8000-c1147ba22e16
title: 第 41 課：資源管理與 QOS
slug: bai-41-resource-management-va-qos
description: Kubernetes 中的資源管理：ResourceQuota、LimitRange、服務品質類別、就地 Pod 資源更新 (K8s 1.35)、VPA、過量使用策略、MemoryManager、CPU 固定。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 41
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3084" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3084)"/>

  <!-- Decorations -->
  <g>
    <circle cx="919" cy="127" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="738" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1057" cy="105" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="876" cy="224" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="695" cy="83" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="237" x2="1100" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="267" x2="1050" y2="337" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1014.712812921102,171 1014.712812921102,203 987,219 959.287187078898,203 959.287187078898,171 987,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 41 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 41 課：資源管理與 QOS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解如何管理 Kubernetes 叢集中的資源：請求/限制、QoS 類別、ResourceQuota、LimitRange、就地更新 (K8s 1.35 GA) 和 Versourced Autoccal____et____et____4_________3) 和 Verscal____.

<h2>1。請求與限制</h2>
___程式碼區塊_0___
___HTMLTAG_71__HTMLTAG_72___重要</strong>：CPU 限制 → 限制（不終止），記憶體限制 → OOMKilled（終止進程）.</p>

<h2>2。服務品質 (QoS) 類別</h2>
___程式碼區塊_1___
___程式碼區塊_2___

<h2>3。就地 Pod 資源更新 — K8s 1.35 GA</h2>
<p>最新功能：無需重新啟動 Pod 即可更改 CPU/記憶體資源！ </p>
___程式碼區塊_3___
___程式碼區塊_4___

<h2>4。資源配額</h2>
___程式碼區塊_5___
___程式碼區塊_6___

<h2>5。限制範圍</h2>
___程式碼區塊_7___

<h2>6。垂直 Pod 自動縮放器 (VPA)</h2>
___程式碼區塊_8___
___程式碼區塊_9___
___程式碼區塊_10___

<h2>7。 CPU 管理器與拓樸管理器</h2>
___程式碼區塊_11___

<h2>8。優先權和搶佔</h2>
___程式碼區塊_12___
___程式碼區塊_13___

<h2>摘要</h2>
<ul>
  <li>請求/限制：調度請求、執行限制</li>
  <li>QoS：保證 > 突發 > BestEffort — 決定驅逐順序</li>
  <li>就地更新 (K8s 1.35 GA)：調整 CPU/記憶體大小而無需重新啟動</li>
  <li>ResourceQuota：限制每個命名空間的總資源</li>
  <li>LimitRange：每個容器的預設值和最大/最小值__HTMLTAG_103___
  <li>VPA：自動建議/設定適當的資源__HTMLTAG_105___
  <li>CPU 管理器：Guaranteed Pod 的接腳核心 — 減少延遲</li>
</ul>