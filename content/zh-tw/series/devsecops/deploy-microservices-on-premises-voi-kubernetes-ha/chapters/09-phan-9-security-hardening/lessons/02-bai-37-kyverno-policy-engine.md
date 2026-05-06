---
id: 019e1a00-aa01-7001-c001-k8sha000902
title: 第 37 課：KYVERNO 策略引擎
slug: bai-37-kyverno-policy-engine
description: 使用 GitOps 部署 Kyverno 策略引擎、驗證/突變/生成策略、最佳實踐實施、影像驗證和策略即程式碼工作流程。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 37
section_title: 第 9 部分：安全強化
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8376" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8376)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="86" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="278" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="210" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="142" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="74" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 37 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 37 課：KYVERNO 政策引擎</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 9 部分：安全強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ Kyverno 架構與准入 webhooks</li>
<li>✅ 驗證策略（阻止危險設定）</li>
<li>✅ 突變策略（注入預設值）</li>
<li>✅ 產生策略（自動建立資源）</li>
<li>✅ 影像驗證（共同簽署）</li>
<li>✅ 策略即程式碼 GitOps 工作流程__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：KYVERNO 架構</h2>

___程式碼區塊_0___

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-2-validate">第 2 部分：驗證政策</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-3-mutate">第 3 部分：突變政策</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-generate">第 4 部分：產生政策</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-5-image-verify">第 5 部分：影像驗證</h2>

___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="phan-6-policy-reports">第 6 部分：政策報告</h2>

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_103__HTMLTAG_104___Kyverno</strong>：Kubernetes 原生策略引擎（YAML，無 Rego）</li>
___HTMLTAG_107__HTMLTAG_108___驗證</strong>：阻止不合規資源</li>
___HTMLTAG_111__HTMLTAG_112___變異</strong>：自動注入安全預設值</li>
___HTMLTAG_115__HTMLTAG_116___產生</strong>：自動建立NetworkPolicy、ResourceQuota</li>
___HTMLTAG_119__HTMLTAG_120___影像驗證</strong>：需要連署簽章</li>
___HTMLTAG_123__HTMLTAG_124___策略報告</strong>：審核整個叢集的合規性</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：核心政策__HTMLTAG_132___
<ul>
<li>部署 Kyverno，建立驗證策略__HTMLTAG_135___
<li>測試：無限制部署 Pod → 應被阻止</li>
<li>為 securityContext 建立突變策略</li>
</ul>

<h3 id="bt2">練習 2：政策報告</h3>
<ul>
<li>使用審核模式原則掃描現有群集__HTMLTAG_145___
<li>查看違規行為報告</li>
<li>修復違規後切換到強制模式</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第38課：Falco運行時安全</strong>中，我們將實現運行時威脅偵測。 </p>