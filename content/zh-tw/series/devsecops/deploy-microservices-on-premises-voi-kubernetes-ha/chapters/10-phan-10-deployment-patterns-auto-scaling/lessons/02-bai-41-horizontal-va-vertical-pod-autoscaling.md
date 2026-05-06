---
id: 019e1a00-aa01-7001-c001-k8sha001002
title: 第 41 課：水平和垂直 Pod 自動縮放
slug: bai-41-horizontal-va-vertical-pod-autoscaling
description: 具有 CPU/記憶體和自訂指標的 HPA、VPA 建議、KEDA 事件驅動的自動縮放、叢集自動縮放器（本地替代方案）以及縮放最佳實踐。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 41
section_title: 第 10 部分：部署模式與自動擴展
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="170" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="75" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="240" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="145" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 41 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 41 課：水平和水平垂直 POD</tspan>
      <tspan x="60" dy="42">自動縮放</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 10 部分：部署模式與部署模式自動縮放</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ HPA v2，具有 CPU、記憶體、自訂指標__HTMLTAG_71___
<li>✅ VPA（垂直 Pod 自動縮放器）建議</li>
<li>✅ KEDA 事件驅動的自動縮放</li>
<li>✅ 本地容量規劃（無雲端自動縮放程式）</li>
<li>✅ 擴充最佳實務與反模式</li>
</ul>

<hr>

<h2 id="phan-1-hpa">第 1 部分：HPA V2（水平 POD 自動縮放器）</h2>

___程式碼區塊_0___

___程式碼區塊_1___

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-2-vpa">第 2 部分：垂直 POD 自動縮放器</h2>

___程式碼區塊_4___

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-3-keda">第 3 部分：KEDA — 事件驅動的自動縮放</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-4-on-prem">第 4 部分：本地容量規劃</h2>

___程式碼區塊_9___

___程式碼區塊_10___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_97__HTMLTAG_98___HPA v2</strong>：根據 CPU、記憶體或自訂 Prometheus 指標進行擴充</li>
___HTMLTAG_101__HTMLTAG_102___行為</strong>：設定放大/縮小速度與穩定性</li>
___HTMLTAG_105__HTMLTAG_106___VPA</strong>：使用「關閉」模式進行推薦，避免在同一指標上使用 HPA</li>
___HTMLTAG_109__HTMLTAG_110___KEDA</strong>：事件驅動的擴充（佇列長度、Kafka 滯後）</li>
___HTMLTAG_113__HTMLTAG_114___本地</strong>：固定容量 → 計劃緩衝區，在 80% 時發出警報</li>
___HTMLTAG_117__HTMLTAG_118___反模式</strong>：不要在同一指標上使用 HPA + VPA</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：HPA + 自訂指標__HTMLTAG_126___
<ul>
<li>部署 Prometheus 適配器</li>
<li>使用自訂請求/秒指標建立 HPA</li>
<li>負載測試並觀察縮放行為__HTMLTAG_133___
</ul>

<h3 id="bt2">練習 2：基於 KEDA 佇列的擴充</h3>
<ul>
<li>安裝 KEDA，為 RabbitMQ 建立 ScaledObject</li>
<li>將 1000 則訊息推播到佇列</li>
<li>驗證工作 Pod 擴大規模，然後縮小</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第42課：資源管理與調度</strong>中，我們將最佳化資源分配和 Pod 調度。 </p>