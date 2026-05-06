---
id: 019e1a00-aa01-7001-c001-k8sha000804
title: 第 35 課：GRAFANA 儀表板和 SLO 監控
slug: bai-35-grafana-dashboards-va-slo-monitoring
description: 建立 Grafana 統一儀表板、SLI/SLO/錯誤預算監控、使用 Grafonnet 的儀表板即程式碼、警報工作流程和生產級可觀測性堆疊。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 35
section_title: 第 8 部分：可觀察性 — Prometheus、Loki、Tempo
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="996" cy="218" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="788" cy="170" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="146" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="122" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="158" x2="1100" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="188" x2="1050" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1036.5788383248864,191.5 1036.5788383248864,224.5 1008,241 979.4211616751136,224.5 979.4211616751135,191.5 1008,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 35 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 35 課：GRAFANA 儀表板與儀表板SLO</tspan>
      <tspan x="60" dy="42">監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 8 部分：可觀察性 — Prometheus、Loki、Tempo</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 適用於微服務的 Grafana 統一儀表板設計</li>
<li>✅ SLI/SLO/錯誤預算概念與實作</li>
<li>✅ 使用 ConfigMap/Grafonnet 的儀表板即程式碼</li>
<li>✅ 警報工作流程與待命路由</li>
<li>✅ 生產可觀察性清單</li>
</ul>

<hr>

<h2 id="phan-1-sli-slo">第 1 部分：SLI/SLO/錯誤預算</h2>

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_87__HTMLTAG_88___概念___HTMLTAG_89__HTMLTAG_90___定義___HTMLTAG_91__HTMLTAG_92____範例___HTMLTAG_93__HTMLTAG_94___
</thead>
<tbody>
___HTMLTAG_97__HTMLTAG_98___SLI（服務等級指示器）___HTMLTAG_99__HTMLTAG_100___衡量服務品質的指標___HTMLTAG_101__HTMLTAG_102___99.2% 請求 ___HTMLTAG_103__HT
___HTMLTAG_105__HTMLTAG_106___SLO（服務等級目標）___HTMLTAG_107__HTMLTAG_108___SLI 的目標值____HTMLTAG_109__HTMLTAG_110___每月 99.9% 可用性____HTMLTAG_111112121212121211212121212121212120720___
___HTMLTAG_113__HTMLTAG_114___錯誤預算___HTMLTAG_115__HTMLTAG_116___允許的停機時間 = 1 - SLO____HTMLTAG_117__HTMLTAG_118___99.9% → 43.2 分鐘/月___MLTAGMLTAG19199.9%____2012 分鐘/月
___HTMLTAG_121__HTMLTAG_122___SLA（服務等級協定）___HTMLTAG_123__HTMLTAG_124___附帶後果的合約____HTMLTAG_125__HTMLTAG_126___99.9% 或退款金額___HTMLTAG_127HTMLTAG_126___99.9% 或退款金額___HTMLTAG_1278HTMLTAG_1278___
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_0___

<hr>

<h2 id="phan-2-slo-prometheus">第 2 部分：使用 PROMETHEUS 實作 SLO</h2>

___程式碼區塊_1___

<hr>

<h2 id="phan-3-grafana-dashboards">第 3 部分：GRAFANA 儀表板設計</h2>

___程式碼區塊_2___

___程式碼區塊_3___

<hr><h2 id="phan-4-alerting">第 4 部分：警報工作流程</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-5-checklist">第 5 部分：生產可觀察性檢查表</h2>

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_147__HTMLTAG_148___類別___HTMLTAG_149__HTMLTAG_150___項目___HTMLTAG_151__HTMLTAG_152___工具___HTMLTAG_153__HTMLTAG_154___
</thead>
<tbody>
___HTMLTAG_157__HTMLTAG_158___指標____HTMLTAG_159__HTMLTAG_160___每個服務的RED方法___HTMLTAG_161__HTMLTAG_162___Prometheus___HTMLTAG_163__HTMLTAG_164___
___HTMLTAG_165__HTMLTAG_166___指標____HTMLTAG_167__HTMLTAG_168___每個節點使用方法___HTMLTAG_169__HTMLTAG_170___節點導出器___HTMLTAG_171__HTMLTAG_172___
___HTMLTAG_173__HTMLTAG_174___指標____HTMLTAG_175__HTMLTAG_176___SLO/錯誤預算___HTMLTAG_177__HTMLTAG_178___記錄規則___HTMLTAG_179__HTMLTAG_180___
___HTMLTAG_181__HTMLTAG_182___日誌___HTMLTAG_183__HTMLTAG_184___集中式結構化日誌___HTMLTAG_185__HTMLTAG_186___Loki + Promtail____HTMLTAG_187__HTMLTAG_188_____
___HTMLTAG_189__HTMLTAG_190___日誌___HTMLTAG_191__HTMLTAG_192___基於日誌的警報____HTMLTAG_193__HTMLTAG_194___Loki 標尺___HTMLTAG_195__HTMLTAG_196___
___HTMLTAG_197__HTMLTAG_198___追蹤___HTMLTAG_199__HTMLTAG_200___分散式追蹤___HTMLTAG_201__HTMLTAG_202___Tempo + OTel___HTMLTAG_203__HTMLTAG_204___
___HTMLTAG_205__HTMLTAG_206___追蹤___HTMLTAG_207__HTMLTAG_208___追蹤-對數-度量相關性___HTMLTAG_209__HTMLTAG_210___Grafana___HTMLTAG_211__HTMLTAG_212___
___HTMLTAG_213__HTMLTAG_214___警報____HTMLTAG_215__HTMLTAG_216___多重燃燒速率SLO警報____HTMLTAG_217__HTMLTAG_218___Alertmanager____HTMLTAG_219__HTMLTAG_220___
___HTMLTAG_221__HTMLTAG_222___警報____HTMLTAG_223__HTMLTAG_224___待命路由___HTMLTAG_225__HTMLTAG_226___PagerDuty___HTMLTAG_227__HTMLTAG_228___
___HTMLTAG_229__HTMLTAG_230___儀表板___HTMLTAG_231__HTMLTAG_232___3級深入分析___HTMLTAG_233__HTMLTAG_234___Grafana___HTMLTAG_235__HTMLTAG_236___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_244__HTMLTAG_245___SLO</strong>：定義錯誤預算、燃燒速率警報（不只是閾值）</li>
___HTMLTAG_248__HTMLTAG_249___RED 方法</strong>：速率、錯誤、每項服務的持續時間</li>
___HTMLTAG_252__HTMLTAG_253___儀表板層次結構</strong>：平台→服務→請求詳細資訊</li>
___HTMLTAG_256__HTMLTAG_257___儀表板即程式碼</strong>：ConfigMap + sidecar 自動設定</li>
___HTMLTAG_260__HTMLTAG_261___警報路由</strong>：嚴重 → PagerDuty，警告 → 鬆弛</li>
___HTMLTAG_264__HTMLTAG_265___相關性</strong>：指標 → 追蹤 → 日誌 = 完整圖片</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：SLO 設定</h3>
<ul>
<li>為範例服務定義 SLI（可用性 + 延遲）</li>
<li>建立記錄規則+燃燒速率警報</li>
<li>建構錯誤預算儀表板</li>
</ul><h3 id="bt2">練習 2：統一儀表板</h3>
<ul>
<li>建立 3 級儀表板層次結構</li>
<li>配置追蹤日誌指標連結__HTMLTAG_288___
<li>模擬事件，使用可觀察性堆疊找出根本原因</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第36課：RBAC與Pod安全標準</strong>中，我們將開始第9節－K8s叢集的安全強化。 </p>