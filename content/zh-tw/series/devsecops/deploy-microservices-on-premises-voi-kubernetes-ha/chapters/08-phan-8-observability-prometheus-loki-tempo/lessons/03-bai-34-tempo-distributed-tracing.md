---
id: 019e1a00-aa01-7001-c001-k8sha000803
title: 第 34 課：TEMPO — 分散式追蹤
slug: bai-34-tempo-distributed-tracing
description: 部署 Grafana Tempo 以實現分散式追蹤、OpenTelemetry 檢測、追蹤與日誌/指標的關聯、策略和追蹤感知監控。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 34
section_title: 第 8 部分：可觀察性 — Prometheus、Loki、Tempo
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1892" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1892)"/>

  <!-- Decorations -->
  <g>
    <circle cx="833" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1066" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="799" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1032" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="159" x2="1100" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="189" x2="1050" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 34 课</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 34 课：节奏 — 分布式跟踪</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 8 部分：可觀察性 — Prometheus、Loki、Tempo</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 分布式跟踪概念（跨度、跟踪、上下文传播）</li>
<li>✅ 在 K8s 上部署 Grafana Tempo</li>
<li>✅ OpenTelemetry 收集器和仪器 SDK__HTMLTAG_73___
<li>✅ 跟踪 → 日志 → 指标相关性</li>
<li>✅ 采样策略（头、尾、自适应）</li>
<li>✅ TraceQL 查询__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-concepts">第 1 部分：分布式跟踪概念</h2>

___程式碼區塊_0___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_87__HTMLTAG_88___功能___HTMLTAG_89__HTMLTAG_90___節奏___HTMLTAG_91__HTMLTAG_92____Jaeger___HTMLTAG_93__HTMLTAG_94___拉鍊_</th>__MLG_95_____MLG_95_____
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100___儲存後端___HTMLTAG_101__HTMLTAG_102___物件儲存(S3/GCS)___HTMLTAG_103__HTMLTAG_104_ __Elasticsearch/Cassandra___HTMLTAG_105__HTMLTAG_106___Elasticsearch/MySQL___HTMLTAG_107__HTMLTAG_108___
___HTMLTAG_109__HTMLTAG_110___成本____HTMLTAG_111__HTMLTAG_112___非常低___HTMLTAG_113__HTMLTAG_114___高（索引所有內容）___HTMLTAG_115__HTMLTAG_116______HTML
___HTMLTAG_119__HTMLTAG_120___搜尋___HTMLTAG_121__HTMLTAG_122___TraceQL（強大）___HTMLTAG_123__HTMLTAG_124___基於標籤____HTMLTAG_125__HTMLTAGML_126124___基於標籤___128___
___HTMLTAG_129__HTMLTAG_130___整合___HTMLTAG_131__HTMLTAG_132___Grafana 原生___HTMLTAG_133__HTMLTAG_134___獨立使用者介面___HTMLTAG_135__HTMLTAG_136___13HT7136___13HTHTML
___HTMLTAG_139__HTMLTAG_140___追蹤發現___HTMLTAG_141__HTMLTAG_142___指標 → 追蹤____HTMLTAG_143__HTMLTAG_144___手動搜尋____HTMLTAG_145__HTMLTAG_146144______手動搜尋____184U_____
___HTMLTAG_149__HTMLTAG_150___協定____HTMLTAG_151__HTMLTAG_152___OTLP、Jaeger、Zipkin____HTMLTAG_153_ _HTMLTAG_154___Jaeger、OTLP____HTMLTAG_155__HTMLTAG_156___Zipkin、OTLP___HTMLTAG_157__HTMLTAG_158___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-deploy-tempo">第 2 部分：部署 GRAFANA TEMPO</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-otel-collector">第 3 部分：開放式遙測收集器</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-4-instrumentation">第 4 部分：應用程式工具__HTMLTAG_170___

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-5-traceql">第 5 部分：TRACEQL 查詢</h2>

___程式碼區塊_6___

<hr>

<h2 id="phan-6-correlation">第 6 部分：追蹤-對數-度量相關性</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_181__HTMLTAG_182___Tempo</strong>：物件儲存上的追蹤儲存 → 經濟高效</li>
___HTMLTAG_185__HTMLTAG_186___OpenTelemetry</strong>：供應商中立的儀器標準</li>
___HTMLTAG_189__HTMLTAG_190___OTel 收集器</strong>：中央管道，尾部採樣</li>
___HTMLTAG_193__HTMLTAG_194___TraceQL</strong>：依屬性、持續時間、狀態查詢追蹤</li>
___HTMLTAG_197__HTMLTAG_198___相關性__HTMLTAG_199___：追蹤 ↔ 日誌 ↔ 指標 = 快速根本原因</li>
___HTMLTAG_201__HTMLTAG_202___取樣</strong>：始終保持錯誤+緩慢，取樣正常</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISE</h2>

<h3 id="bt1">練習 1：節奏 + OTel 設定</h3>
<ul>
<li>部署 Tempo + OTel Collector</li>
<li>儀器範例 Go/Node.js 應用</li>
<li>在 Grafana 中查看追蹤__HTMLTAG_217___
</ul><h3 id="bt2">練習 2：追蹤相關性__HTMLTAG_220___
<ul>
<li>在 Grafana 中設定追蹤到日誌連結__HTMLTAG_223___
<li>注入錯誤，透過追蹤→日誌流查找根本原因</li>
<li>編寫 TraceQL 查詢以取得緩慢/錯誤追蹤</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>在<strong>第35課：Grafana儀表板和SLO</strong>中，我們將建立統一的儀表板並實現SLO/SLI監控。 </p>