---
id: 019e1a00-aa01-7001-c001-k8sha001004
title: 第 43 課：多租戶和命名空間隔離
slug: bai-43-multi-tenancy-va-namespace-isolation
description: 共享 K8s 叢集上的多租戶架構、命名空間隔離策略、網路策略、分層命名空間、資源公平性和租戶加入自動化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 43
section_title: 第 10 部分：部署模式與自動擴展
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6315" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6315)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 43 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 43 課：多租戶與多租戶命名空間</tspan>
      <tspan x="60" dy="42">隔離</tspan>
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
<li>✅ 多租用戶模型（軟隔離與硬隔離）</li>
<li>✅ 每個團隊的命名空間/環境策略</li>
<li>✅ 用於命名空間隔離的網路策略__HTMLTAG_75___
<li>✅ 每個租戶的 RBAC__HTMLTAG_77___
<li>✅ 租用戶加入自動化（Kyverno 產生）</li>
</ul>

<hr>

<h2 id="phan-1-models">第 1 部分：多租戶模型</h2>

___程式碼區塊_0___

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_87__HTMLTAG_88___方面___HTMLTAG_89__HTMLTAG_90___命名空間隔離___HTMLTAG_91__HTMLTAG_92___叢集隔離___HTMLTAG_93__HTMLTAG_94___
</thead>
<tbody>
___HTMLTAG_97__HTMLTAG_98___成本___HTMLTAG_99__HTMLTAG_100___低（共享基礎設施）___HTMLTAG_101__HTMLTAG_102___高（單獨的叢集）___HTMLTAG_103__HTMLTAG_104___
___HTMLTAG_105__HTMLTAG_106___安全性___HTMLTAG_107__HTMLTAG_108___中（軟邊界）___HTMLTAG_109__HTMLTAG_110___高（硬邊界）___HTMLTAG_111__HTMLTAG_112___
___HTMLTAG_113__HTMLTAG_114___複雜性___HTMLTAG_115__HTMLTAG_116___低___HTMLTAG_117__HTMLTAG_118___高___HTMLTAG_119__HTMLTAG_120___
___HTMLTAG_121__HTMLTAG_122___資源共享___HTMLTAG_123__HTMLTAG_124___高效___HTMLTAG_125__HTMLTAG_126___浪費___HTMLTAG_127__HTMLTAG_128___
___HTMLTAG_129__HTMLTAG_130___最適合___HTMLTAG_131__HTMLTAG_132___同一組織團隊___HTMLTAG_133__HTMLTAG_134___不同客戶/合規性___HTMLTAG_135__HTMLTAG_136___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-namespace">第 2 部分：命名空間策略</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-network-isolation">第 3 部分：網路隔離</h2>

___程式碼區塊_3___

<hr><h2 id="phan-4-rbac-tenant">第 4 部分：每個租戶的 RBAC</h2>

___程式碼區塊_4___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_153__HTMLTAG_154___每個團隊的命名空間</strong>：平衡隔離與資源效率</li>
___HTMLTAG_157__HTMLTAG_158___自動加入</strong>：Kyverno 產生配額 + LimitRange + NetworkPolicy</li>
___HTMLTAG_161__HTMLTAG_162___網路隔離</strong>：預設拒絕所有，允許特定跨命名空間</li>
___HTMLTAG_165__HTMLTAG_166___每個租用戶的 RBAC</strong>：每個團隊的角色，無叢集管理員</li>
___HTMLTAG_169__HTMLTAG_170___PSS 標籤</strong>：對所有租用戶命名空間強制實施限制</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_176___

<h3 id="bt1">練習 1：租戶入職__HTMLTAG_178___
<ul>
<li>使用團隊標籤建立命名空間 → 驗證自動設定的資源</li>
<li>驗證 NetworkPolicy 阻止跨命名空間流量</li>
<li>測試 RBAC：團隊成員可以部署，但不能存取機密__HTMLTAG_185___
</ul>

<h3 id="bt2">練習 2：跨命名空間通訊__HTMLTAG_188___
<ul>
<li>允許 A 組服務透過 NetworkPolicy 呼叫 B 組 API</li>
<li>為服務到服務驗證設定 Istio AuthorizationPolicy</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 44 課：災難復原和備份策略</strong>，我們將開始第 11 節 — 災難復原和混沌工程。 </p>