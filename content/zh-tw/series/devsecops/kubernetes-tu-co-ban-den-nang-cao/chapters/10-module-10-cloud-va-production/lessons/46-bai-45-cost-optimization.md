---
id: 019c9618-060d-7000-8000-c1147ba22e16
title: 講座 45：Kubernetes 成本優化
slug: bai-45-cost-optimization-kubernetes
description: 成本優化 Kubernetes 2026：Spot/Preemptible 節點、Karpenter 整合、透過 VPA 調整規模、Kubecost、命名空間預算、閒置資源清理、多租戶成本分配。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 45
section_title: 模組 10：雲端與生產
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="751" cy="183" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1053" cy="285" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="76" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="127" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 45 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 45 課：KUBERNETES 成本最佳化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 10：雲端與雲端製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解並應用雲端中的 Kubernetes 成本最佳化策略：Spot 實例、調整大小、節點整合和成本可見性工具。 </p>

<h2>1。為什麼 K8 往往比預期更貴？ </h2>
<ul>
  ___HTMLTAG_72__HTMLTAG_73___過度配置</strong>：與實際使用情況相比，請求/限制設定過高</li>
  ___HTMLTAG_76__HTMLTAG_77___空閒節點</strong>：節點未有效使用（利用率<30%）</li>
  ___HTMLTAG_80__HTMLTAG_81___Kube 系統開銷</strong>：守護程式集（Cilium、日誌代理程式）佔用資源</li>
  ___HTMLTAG_84__HTMLTAG_85___未使用的PV__HTMLTAG_86___：已刪除環境的持久卷仍需計費</li>
  ___HTMLTAG_88__HTMLTAG_89___負載平衡器</strong>：每個負載平衡器服務 = 1 個雲端 LB（18-30 美元/月）</li>
  ___HTMLTAG_92__HTMLTAG_93___資料傳輸</strong>：Pod 之間的跨可用區流量需要付費</li>
</ul>

<h2>2。現貨/搶佔式實例</h2>
___程式碼區塊_0___
___程式碼區塊_1___

<h2>3。卡本特節點整合</h2>
___程式碼區塊_2___
___程式碼區塊_3___

<h2>4。使用 VPA 和 Goldilocks 調整大小</h2>
___程式碼區塊_4___

<h2>5。 Kubecost — 成本可見性</h2>
___程式碼區塊_5___
___程式碼區塊_6___

<h2>6。降低負載平衡器成本</h2>
___程式碼區塊_7___

<h2>7。持久捲清理</h2>
___程式碼區塊_8___

<h2>8。優化跨可用區流量</h2>
___程式碼區塊_9___
___程式碼區塊_10___

<h2>9。成本最佳化摘要</h2>
___程式碼區塊_11___<h2>摘要</h2>
<ul>
  <li>Spot 實例：容錯工作負載節省 50-80%__HTMLTAG_117___
  <li>Karpenter 整合：自動整合 Pod，刪除空閒節點__HTMLTAG_119___
  <li>Goldilocks + VPA：依實際使用情況調整資源大小</li>
  <li>Kubecost：了解每個團隊/命名空間/部署的成本</li>
  <li>1 閘道取代了許多負載平衡器：顯著節省__HTMLTAG_125___
  <li>拓樸感知路由：降低跨可用區流量成本__HTMLTAG_127___
</ul>