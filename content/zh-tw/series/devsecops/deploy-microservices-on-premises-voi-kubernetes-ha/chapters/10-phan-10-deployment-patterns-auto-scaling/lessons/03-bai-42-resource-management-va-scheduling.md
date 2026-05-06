---
id: 019e1a00-aa01-7001-c001-k8sha001003
title: 第 42 課：資源管理與調度
slug: bai-42-resource-management-va-scheduling
description: Kubernetes 資源請求/限制、QoS 類別、LimitRange、ResourceQuota、節點親和性/反親和性、污點和容忍、拓撲傳播和調度最佳實踐。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 42
section_title: 第 10 部分：部署模式與自動擴展
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2563" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2563)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="183" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="285" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="76" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="127" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 42 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 42 課：資源管理與資源管理行程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 10 部分：部署模式與部署模式自動縮放</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 資源請求與限制深入探討</li>
<li>✅ QoS 類別（保固、突發、BestEffort）</li>
<li>✅ LimitRange 和 ResourceQuota</li>
<li>✅ 節點親和性、反親和性、污點/容忍</li>
<li>✅ 拓樸擴充約束</li>
<li>✅ Pod 優先權與搶佔</li>
</ul>

<hr>

<h2 id="phan-1-resources">第 1 部分：資源請求與限制</h2>

___程式碼區塊_0___

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_87__HTMLTAG_88___QoS 類別___HTMLTAG_89__HTMLTAG_90___條件____HTMLTAG_91__HTMLTAG_92___逐出優先權___HTMLTAG_93__HTMLTAG_94___
</thead>
<tbody>
___HTMLTAG_97__HTMLTAG_98___保證___HTMLTAG_99__HTMLTAG_100___請求==限制（所有容器）___HTMLTAG_101__HTMLTAG_102___最後驅逐____HTMLTAG_103__HTMLTAG_104___
___HTMLTAG_105__HTMLTAG_106___突發___HTMLTAG_107__HTMLTAG_108___請求___HTMLTAG_109__HTMLTAG_110___中___HTMLTAG_111__HTMLTAG_112___
___HTMLTAG_113__HTMLTAG_114___盡力而為___HTMLTAG_115__HTMLTAG_116___無請求或限制____HTMLTAG_117__HTMLTAG_118___首先驅逐___HTMLTAG_119__HTMLTAG_120___
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_1___

<hr>

<h2 id="phan-2-limitrange-quota">第 2 部分：限制範圍與資源配額</h2>

___程式碼區塊_2___

<hr>

<h2 id="phan-3-scheduling">第 3 部分：節點親和性與反親和性</h2>

___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-taints">第 4 部分：污點與容忍</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-priority">第 5 部分：POD 優先權和搶佔</h2>

___程式碼區塊_7___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_140__HTMLTAG_141___請求</strong>：調度保證； <strong>限制</strong>：硬天花板</li>
___HTMLTAG_146__HTMLTAG_147___QoS</strong>：資料庫有保證，應用程式可突發</li>
___HTMLTAG_150__HTMLTAG_151___LimitRange</strong>：每個容器的預設/最大；<strong>ResourceQuota</strong>：每個命名空間的總數</li>___
___HTMLTAG_156__HTMLTAG_157___拓樸分佈</strong>：跨節點/區域均勻分佈</li>
___HTMLTAG_160__HTMLTAG_161___污點</strong>：為特定工作負載專用節點</li>
___HTMLTAG_164__HTMLTAG_165___優先權</strong>：關鍵服務搶佔批次作業</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_171___

<h3 id="bt1">練習 1：資源治理__HTMLTAG_173___
<ul>
<li>為命名空間建立 LimitRange 和 ResourceQuota__HTMLTAG_176___
<li>在沒有資源的情況下部署 Pod → 驗證應用程式的預設值</li>
<li>超出配額 → 驗證 Pod 被拒絕</li>
</ul>

<h3 id="bt2">練習 2：行程表</h3>
<ul>
<li>為資料庫工作負載污染 2 個節點</li>
<li>為 6 副本部署設定拓樸分佈__HTMLTAG_188___
<li>建立優先級，測試搶佔__HTMLTAG_190___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第43課：多租用戶與命名空間隔離</strong>中，我們將在共享叢集上實作多租用戶架構。 </p>