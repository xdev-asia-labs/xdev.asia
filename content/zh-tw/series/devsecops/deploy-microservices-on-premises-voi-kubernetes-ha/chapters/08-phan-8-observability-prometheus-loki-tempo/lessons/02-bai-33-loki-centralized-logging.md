---
id: 019e1a00-aa01-7001-c001-k8sha000802
title: 第 33 課：LOKI — 集中式日誌記錄
slug: bai-33-loki-centralized-logging
description: 部署 Grafana Loki 以實現集中式日誌聚合、Promtail/Alloy 日誌收集、LogQL 查詢、結構化日誌記錄、基於日誌的警報和保留策略。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 33
section_title: 第 8 部分：可觀察性 — Prometheus、Loki、Tempo
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="905" cy="145" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="710" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1015" cy="135" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="820" cy="260" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="215" x2="1100" y2="295" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="245" x2="1050" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1040.9807621135333,200 1040.9807621135333,230 1015,245 989.0192378864668,230 989.0192378864668,200 1015,185" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 33 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 33 課：LOKI — 集中式日誌記錄</tspan>
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
<li>✅ Grafana Loki 架構（與 ELK 堆疊相比）</li>
<li>✅ 在 K8s 上部署 Loki 分散式模式</li>
<li>✅ Promtail/Grafana 合金日誌集合</li>
<li>✅ LogQL 查詢語言__HTMLTAG_75___
<li>✅ 結構化日誌記錄最佳實務</li>
<li>✅ 基於日誌的警報</li>
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：LOKI 架構</h2>

___程式碼區塊_0___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_87__HTMLTAG_88___功能___HTMLTAG_89__HTMLTAG_90___Loki___HTMLTAG_91__HTMLTAG_92___ELK (Elasticsearch)___HTMLTAG_93__HTMLTAG_94___
</thead>
<tbody>
___HTMLTAG_97__HTMLTAG_98___索引___HTMLTAG_99__HTMLTAG_100___僅標籤（元資料）___HTMLTAG_101__HTMLTAG_102___全文索引（所有內容）___HTMLTAG_103__HTMLTAG_104___
___HTMLTAG_105__HTMLTAG_106___儲存成本___HTMLTAG_107__HTMLTAG_108___低（壓縮區塊）___HTMLTAG_109__HTMLTAG_110___高（倒排索引）___HTMLTAG_111__HTMLTAG_112__</tr>__HTMLTAG_112__</tr>__HTMLTAG_112__</tr>
___HTMLTAG_113__HTMLTAG_114___資源使用___HTMLTAG_115__HTMLTAG_116___低___HTMLTAG_117__HTMLTAG_118___高（RAM、CPU）___HTMLTAG_119__HTMLTAG_120___
___HTMLTAG_121__HTMLTAG_122___查詢速度___HTMLTAG_123__HTMLTAG_124___全文較慢____HTMLTAG_125__HTMLTAG_126___全文快速____HTMLTAG_127__HTMLTAG_128___
___HTMLTAG_129__HTMLTAG_130___最適合___HTMLTAG_131__HTMLTAG_132___K8s日誌，經濟高效___HTMLTAG_133__HTMLTAG_134___複雜日誌分析____HTMLTAG_135__HTMLTAG_136___
___HTMLTAG_137__HTMLTAG_138___查詢語言___HTMLTAG_139__HTMLTAG_140___LogQL___HTMLTAG_141__HTMLTAG_142___KQL/Lucene___HTMLTAG_143__HTMLTAG_144___
___HTMLTAG_145__HTMLTAG_146___整合___HTMLTAG_147__HTMLTAG_148___Grafana 原生___HTMLTAG_149__HTMLTAG_150___Kibana___HTMLTAG_151__HTMLTAG_152___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install">第 2 部分：部署 LOKI</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-promtail">第 3 部分：使用 PROMTAIL 進行日誌收集</h2>

___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-logql">第 4 部分：LOGQL 查詢</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-5-structured-logging">第 5 部分：結構化日誌記錄最佳實務</h2>

___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="phan-6-log-alerts">第 6 部分：基於日誌的警報</h2>

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_175__HTMLTAG_176___Loki</strong>：僅標籤 → 經濟高效，Grafana 原生</li>
___HTMLTAG_179__HTMLTAG_180___Promtail</strong>：DaemonSet，自動收集K8s pod日誌</li>
___HTMLTAG_183__HTMLTAG_184___LogQL</strong>：強大的查詢語言，日誌到指標的轉換</li>
___HTMLTAG_187__HTMLTAG_188___結構化日誌</strong>：JSON格式，包含trace_id/span_id</li>
___HTMLTAG_191__HTMLTAG_192___管道階段</strong>：解析、標籤、時間戳提取</li>
___HTMLTAG_195__HTMLTAG_196___保留</strong>：為每個租戶配置，預設 30 天</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_202___

<h3 id="bt1">練習 1：Loki 設定</h3>
<ul>
<li>部署 Loki + Promtail</li>
<li>在 Grafana 中加入 Loki 資料來源</li>
<li>編寫 LogQL 查詢以尋找錯誤__HTMLTAG_211___
</ul><h3 id="bt2">練習 2：結構化日誌記錄</h3>
<ul>
<li>在範例應用程式中實作 JSON 日誌記錄</li>
<li>設定 Promtail 管道以提取等級、trace_id</li>
<li>建立基於日誌的警報規則</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 34 課：節奏 — 分散式追蹤</strong>中，我們將為微服務設定分散式追蹤。 </p>