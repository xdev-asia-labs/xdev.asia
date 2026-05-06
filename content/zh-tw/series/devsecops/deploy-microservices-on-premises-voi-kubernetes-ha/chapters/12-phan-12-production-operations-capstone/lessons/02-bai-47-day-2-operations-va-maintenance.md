---
id: 019e1a00-aa01-7001-c001-k8sha001202
title: 第 47 課：第 2 天操作與維護
slug: bai-47-day-2-operations-va-maintenance
description: Kubernetes 叢集升級、節點維護、憑證輪替、容量規劃、事件管理、待命實務與操作手冊。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 47
section_title: 第 12 部分：生產營運和頂點項目
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-622" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-622)"/>

  <!-- Decorations -->
  <g>
    <circle cx="805" cy="45" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="715" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="60" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="65" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1040.9807621135333,200 1040.9807621135333,230 1015,245 989.0192378864668,230 989.0192378864668,200 1015,185" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 47 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 47 課：第二天的操作和操作維護</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 12 部分：生產營運與生產頂點專案</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ Kubernetes 版本升級流程</li>
<li>✅ 節點維護（排水、警戒線、解除警戒線）</li>
<li>✅ 憑證輪替__HTMLTAG_73___
<li>✅ 容量規劃與趨勢</li>
<li>✅ 事件管理框架__HTMLTAG_77___
<li>✅ 操作手冊__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-upgrade">第 1 部分：KUBERNETES 升級</h2>

___程式碼區塊_0___

___程式碼區塊_1___

<hr>

<h2 id="phan-2-node-maintenance">第 2 部分：節點維護</h2>

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-certs">第 3 部分：憑證輪替</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-4-capacity">第 4 部分：容量規劃</h2>

___程式碼區塊_6___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_96__HTMLTAG_97___指標___HTMLTAG_98__HTMLTAG_99___閾值____HTMLTAG_100__HTMLTAG_101___操作___HTMLTAG_102__HTMLTAG_103___
</thead>
<tbody>
___HTMLTAG_106__HTMLTAG_107___叢集CPU分配___HTMLTAG_108__HTMLTAG_109___> 70%___HTMLTAG_110__HTMLTAG_111___規劃新工作節點____HTMLTAG_112__HTMLTAG_113___
___HTMLTAG_114__HTMLTAG_115___叢集記憶體分配___HTMLTAG_116__HTMLTAG_117___> 75%____HTMLTAG_118__HTMLTAG_119___規劃新工作節點____HT__HTMLTAG_1201HTMLTAG_121___
___HTMLTAG_122__HTMLTAG_123___使用的 Ceph 儲存___HTMLTAG_124__HTMLTAG_125___> 70%___HTMLTAG_126__HTMLTAG_127___新增 OSD 或磁碟____HTMLTAG_128__HTTAG_129___
___HTMLTAG_130__HTMLTAG_131___PV使用量___HTMLTAG_132__HTMLTAG_133___> 80%___HTMLTAG_134__HTMLTAG_135______擴充程式PVC或新增儲存____HTMLTAG_136__HTMLTAG_137______
___HTMLTAG_138__HTMLTAG_139___Pod 數量與配額___HTMLTAG_140__HTMLTAG_141___> 80%___HTMLTAG_142__HTMLTAG_143___增加資源配額____HTMLTAG_144__HTMLTAG_145______
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-incident">第 5 部分：事件管理</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_156__HTMLTAG_157___升級</strong>：先控制平面，工作人員滾動，一次一個</li>
___HTMLTAG_160__HTMLTAG_161___PDB</strong>：始終在排出之前設定 PodDisruptionBudget</li>
___HTMLTAG_164__HTMLTAG_165___憑證</strong>：監控到期情況，在 30 天警告之前續訂</li>
___HTMLTAG_168__HTMLTAG_169___容量</strong>：預測線性用於主動規劃</li>
___HTMLTAG_172__HTMLTAG_173___事件</strong>：SEV 等級、結構化操作手冊、事後分析</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_179___

<h3 id="bt1">練習 1：升級練習__HTMLTAG_181___
<ul>
<li>在實驗室叢集上執行K8s小版本升級__HTMLTAG_184___
<li>使用 PDB 保護練習節點耗盡</li>
<li>續訂證書，驗證叢集運作狀況</li>
</ul>

<h3 id="bt2">練習 2：事件回應</h3>
<ul>
<li>為前 5 個常見警報建立運作手冊__HTMLTAG_194___
<li>練習事件模擬：注入失敗 → 遵循運行手冊</li>
<li>撰寫事後分析範本</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第48課：效能測試和最佳化</strong>中，我們將對系統進行負載測試和最佳化。 </p>