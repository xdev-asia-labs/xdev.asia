---
id: 019e1a00-aa01-7001-c001-k8sha001001
title: 第 40 課：金絲雀與藍綠部署
slug: bai-40-canary-va-blue-green-deployment
description: 詳細的部署策略：Canary 與 Istio/Argo 部署、藍綠部署、流量轉移、自動回溯和漸進式交付。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai40-canary-blue-green.png
sort_order: 40
section_title: 第 10 部分：部署模式與自動擴展
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4131" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4131)"/>

  <!-- Decorations -->
  <g>
    <circle cx="651" cy="63" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="753" cy="85" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="96" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="107" r="26" fill="#34d399" opacity="0.1"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 40 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 40 課：金絲雀與金絲雀藍綠部署</tspan>
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
<li>✅ 比較部署策略（滾動、藍綠色、金絲雀）</li>
<li>✅ Argo 推出漸進式交付</li>
<li>✅ 具有流量轉移的金絲雀部署</li>
<li>✅ 藍綠，即時切換__HTMLTAG_75___
<li>✅ 分析範本與自動回滾</li>
</ul>

<hr>

<h2 id="phan-1-strategies">第 1 部分：部署策略</h2>

___程式碼區塊_0___

___程式碼區塊_1___

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_85__HTMLTAG_86___策略___HTMLTAG_87__HTMLTAG_88___停機時間____HTMLTAG_89__HTMLTAG_90____回滾____HTMLTAG_91__HTMLTAG_92___風險____MLTAG_MLTAGMLTAG_91__HTMLTAG_92_______HTMLTAGMLTAGMLTAGMLTAGMLTAG___4____
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100___滾動更新___HTMLTAG_101__HTMLTAG_102___零___HTMLTAG_103__HTMLTAG_104___慢_ __HTMLTAG_105__HTMLTAG_106___中___HTMLTAG_107__HTMLTAG_108___低(+25%)___HTMLTAG_109__HTMLTAG_110___
___HTMLTAG_111__HTMLTAG_112___藍色-綠色___HTMLTAG_113__HTMLTAG_114___零___HTMLTAG_115__HTMLTAG_116___即時___HTMLTAG_117__HTMLTAG_118___低___HTMLTAG_119__HTMLTAG_120___高(2x)___HTMLTAG_121__HTMLTAG_122___
___HTMLTAG_123__HTMLTAG_124___金絲雀____HTMLTAG_125__HTMLTAG_126___零___HTMLTAG_127__HTMLTAG_128___快速__ __HTMLTAG_129__HTMLTAG_130___非常低___HTMLTAG_131__HTMLTAG_132___低(+10%)___HTMLTAG_133__HTMLTAG_134___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-argo-rollouts">第 2 部分：ARGO 推出__HTMLTAG_140___

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-analysis">第 3 部分：分析範本</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-blue-green">第 4 部分：藍綠部署__HTMLTAG_146___

___程式碼區塊_5___

___程式碼區塊_6___

<hr><h2 id="phan-5-operations">第 5 部分：推出操作</h2>

___程式碼區塊_7___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_154__HTMLTAG_155___金絲雀</strong>：逐步流量轉移，指標驅動的促銷</li>
___HTMLTAG_158__HTMLTAG_159___藍-綠</strong>：即時切換，完整預覽環境</li>
___HTMLTAG_162__HTMLTAG_163___Argo 推出</strong>：直接部署取代</li>
___HTMLTAG_166__HTMLTAG_167___分析範本</strong>：自動成功/失敗標準</li>
___HTMLTAG_170__HTMLTAG_171___整合</strong>：Istio 流量路由 + Prometheus 指標</li>
___HTMLTAG_174__HTMLTAG_175___回溯</strong>：分析失敗時自動</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_181___

<h3 id="bt1">練習 1：金絲雀部署</h3>
<ul>
<li>將部署轉換為 Argo 部署</li>
<li>配置 5% → 25% → 50% → 100% 金絲雀步驟</li>
<li>建立具有成功率檢查的 AnalysisTemplate</li>
</ul>

<h3 id="bt2">練習 2：藍綠 + 煙霧測試</h3>
<ul>
<li>設定藍綠卷展列</li>
<li>建立冒煙測驗作業作為促銷前分析</li>
<li>注入錯誤 → 驗證自動回滾__HTMLTAG_200___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 41 課：水平和垂直 Pod 自動縮放</strong> 中，我們將為工作負載實現自動縮放。 </p>