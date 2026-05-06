---
id: 019c9618-060b-7000-8000-c1147ba22e16
title: 第 43 課：實務 — 叢集管理
slug: thuc-hanh-9-cluster-management
description: 模組 9 實作：升級 Kubernetes 叢集、etcd 備份/復原、節點耗盡/維護、ResourceQuota、LimitRange、VPA、In-Place Pod Resize、Velero 備份。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 43
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6085" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6085)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="199" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="225" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 43 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 43 課：實作 — 叢集管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>排出節點並執行維護節點__HTMLTAG_69___
  <li>備份和還原etcd</li>
  <li>設定 ResourceQuota 和 LimitRange</li>
  <li>測試就地 Pod 資源大小調整</li>
  <li>安裝和測試 VPA 建議__HTMLTAG_77___
  <li>使用 Velero 的備份叢集</li>
</ul>

<h2>實驗 1：節點維護</h2>
___程式碼區塊_0___

<h2>實驗 2：etcd 備份與復原__HTMLTAG_84___
___程式碼區塊_1___

<h2>實驗 3：ResourceQuota 和 LimitRange__HTMLTAG_86___
___程式碼區塊_2___

<h2>實驗 4：就地 Pod 資源調整大小</h2>
___程式碼區塊_3___

<h2>實驗 5：VPA 建議</h2>
___程式碼區塊_4___

<h2>實驗 6：Velero 備份__HTMLTAG_92___
___程式碼區塊_5___

<h2>清理</h2>
___程式碼區塊_6___

<h2>摘要__HTMLTAG_96___
<ul>
  <li>✅ 節點排空/封鎖/取消封鎖：標準維護工作流程</li>
  <li>✅ etcd 備援：快照並驗證</li>
  <li>✅ ResourceQuota：限制每個命名空間的資源__HTMLTAG_103___
  <li>✅ LimitRange：pod 的預設資源</li>
  <li>✅ 就地調整大小：更改 CPU/記憶體不會重新啟動 Pod</li>
  <li>✅ VPA：自動推薦適當的資源</li>
  <li>✅ Velero：備份和還原命名空間等級__HTMLTAG_111___
</ul>