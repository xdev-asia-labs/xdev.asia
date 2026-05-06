---
id: 019e1a00-aa01-7001-c001-k8sha001102
title: 第 45 課：利用 Litmus 進行混沌工程
slug: bai-45-chaos-engineering-voi-litmus
description: 混沌工程原理、K8s 上的 Litmus Chaos、pod/節點/網路混沌實驗、穩態假設、GameDay 規劃和彈性評分。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 45
section_title: 第 11 部分：災難復原與混沌工程
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3354" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3354)"/>

  <!-- Decorations -->
  <g>
    <circle cx="695" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="210" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="885" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="40" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="215" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 45 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 45 課：使用 LITMUS 進行混沌工程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 11 部分：災難復原與災難復原混沌工程</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 混沌工程原理（Netflix 模型）</li>
<li>✅ 在 K8s 部署 Litmus Chaos</li>
<li>✅ Pod 混亂：殺死、CPU 壓力、記憶體壓力</li>
<li>✅ 節點混亂：流失、網路分區__HTMLTAG_75___
<li>✅ 穩態假設與探測</li>
<li>✅ 比賽日規劃與彈性評分</li>
</ul>

<hr>

<h2 id="phan-1-principles">第 1 部分：混沌工程原理</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-litmus">第 2 部分：部署 LITMUS CHAOS__HTMLTAG_86___

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-experiments">第 3 部分：混沌實驗</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-4-probes">第 4 部分：穩態探針__HTMLTAG_92___

___程式碼區塊_4___

<hr>

<h2 id="phan-5-gameday">第 5 部分：比賽日計畫</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_99__HTMLTAG_100___階段___HTMLTAG_101__HTMLTAG_102___活動___HTMLTAG_103__HTMLTAG_104___持續時間___HTMLTAG_105__HTMLTAG_106___
</thead>
<tbody>
___HTMLTAG_109__HTMLTAG_110___準備___HTMLTAG_111__HTMLTAG_112___定義實驗、通知團隊、確保監控___HTMLTAG_113__HTMLTAG_114___1週前____HTMLTAG_115__HTMLTAG_116___
___HTMLTAG_117__HTMLTAG_118___簡報___HTMLTAG_119__HTMLTAG_120___審查實驗、分配觀察員、確認回滾___HTMLTAG_121__HTMLTAG_122___30 分鐘___HTMLTAG_123__HTMLTAG_124______
___HTMLTAG_125__HTMLTAG_126___執行____HTMLTAG_127__HTMLTAG_128___逐一執行混沌實驗___HTMLTAG_129__HTMLTAG_130___2-4小時____HTMLTAG_131__HTMLTAG_132___
___HTMLTAG_133__HTMLTAG_134___觀察___HTMLTAG_135__HTMLTAG_136___監控儀表板，記錄異常___HTMLTAG_137__HTMLTAG_138___執行期間___HTMLTAG_139__HTMLTAG_140___
___HTMLTAG_141__HTMLTAG_142___報告___HTMLTAG_143__HTMLTAG_144___審查調查結果，建立行動項目____HTMLTAG_145__HTMLTAG_146___1小時___HTMLTAG_147__HTMLTAG_148___
___HTMLTAG_149__HTMLTAG_150___後續___HTMLTAG_151__HTMLTAG_152___實施修復，安排下一個比賽日____HTMLTAG_153__HTMLTAG_154___2週___HTMLTAG_155__HTMLTAG_156___
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_5___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_164__HTMLTAG_165___混沌工程</strong>：在生產事件發生前主動尋找弱點</li>
___HTMLTAG_168__HTMLTAG_169___Litmus</strong>：K8s 原生混沌框架，基於 CRD 的實驗</li>
___HTMLTAG_172__HTMLTAG_173___探針</strong>：在混亂期間驗證穩態（HTTP、Prometheus、命令）</li>
___HTMLTAG_176__HTMLTAG_177___從小處開始</strong>：Pod 終止 → 節點流失 → 網路混亂</li>
___HTMLTAG_180__HTMLTAG_181___GameDay</strong>：結構化團隊練習，而非隨機破壞</li>
___HTMLTAG_184__HTMLTAG_185___總是進行回滾</strong>：知道如何立即停止混亂</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：Litmus 設定__HTMLTAG_193___
<ul>
<li>安裝 Litmus，執行 pod 刪除實驗__HTMLTAG_196___
<li>新增 HTTP 探測以驗證服務可用性</li>
<li>檢查 ChaosResult 是否通過</li>
</ul>

<h3 id="bt2">練習 2：GameDay</h3>
<ul>
<li>計畫 5 輪混沌實驗序列</li>
<li>在開啟監控儀表板的情況下執行</li>
<li>記錄調查結果和改進措施</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 46 課：生產準備檢查表</strong>中，我們將開始第 12 節 — 生產營運和 Capstone 專案。 </p>