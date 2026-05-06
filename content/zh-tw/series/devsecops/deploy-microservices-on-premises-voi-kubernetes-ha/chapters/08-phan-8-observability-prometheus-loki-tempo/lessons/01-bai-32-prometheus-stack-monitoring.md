---
id: 019e1a00-aa01-7001-c001-k8sha000801
title: 第 32 課：Prometheus Stack — 監控基礎設施
slug: bai-32-prometheus-stack-monitoring-infrastructure
description: 部署 kube-prometheus-stack（Prometheus、Grafana、Alertmanager）、ServiceMonitor、記錄規則、警報規則、使用 Thanos 進行長期儲存以及自訂指標。
duration_minutes: 180
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai32-prometheus-observability.png
sort_order: 32
section_title: 第 8 部分：可觀察性 — Prometheus、Loki、Tempo
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-308" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-308)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="79" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="285" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="128" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="69" x2="1100" y2="149" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="99" x2="1050" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 32 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 32 課：PROMETHEUS 堆疊 — 監控</tspan>
      <tspan x="60" dy="42">基礎設施</tspan>
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
<li>✅ 部署 kube-prometheus-stack (Prometheus + Grafana + Alertmanager)</li>
<li>✅ 用於服務發現的 ServiceMonitor 和 PodMonitor</li>
<li>✅ 預先計算指標的記錄規則__HTMLTAG_75___
<li>✅ 警報規則和 Alertmanager 路由__HTMLTAG_77___
<li>✅ 用於長期儲存的 Thanos__HTMLTAG_79___
<li>✅ 自訂應用程式指標__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：可觀測性架構</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-install">第 2 部分：安裝 KUBE-POMETHEUS-STACK</h2>

___程式碼區塊_1___

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-servicemonitor">第 3 部分：SERVICEMONITOR 和 PODMONITOR</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-alerting-rules">第 4 部分：警報規則</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-5-grafana-dashboards">第 5 部分：GRAFANA 儀表板</h2>

___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="phan-6-thanos">第 6 部分：薩諾斯（長期儲存）</h2>

___程式碼區塊_8___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_105__HTMLTAG_106___kube-prometheus-stack</strong>：在一張 Helm 圖表中完成監控</li>
___HTMLTAG_109__HTMLTAG_110___ServiceMonitor</strong>：自動發現目標，無需手動抓取設定</li>
___HTMLTAG_113__HTMLTAG_114___RED 方法</strong>：所有服務的速率、錯誤、持續時間</li>
___HTMLTAG_117__HTMLTAG_118___Alertmanager</strong>：以嚴重性將警報路由到 Slack/PagerDuty</li>
___HTMLTAG_121__HTMLTAG_122___記錄規則</strong>：預先計算昂貴的查詢</li>
___HTMLTAG_125__HTMLTAG_126___Thanos</strong>：物件儲存上的長期儲存（月/年）</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_132___

<h3 id="bt1">練習 1：監控設定__HTMLTAG_134___
<ul>
<li>部署 kube-prometheus-stack</li>
<li>為應用程式建立 ServiceMonitor</li>
<li>建構 RED 方法 Grafana 儀表板__HTMLTAG_141___
</ul>

<h3 id="bt2">練習 2：警報</h3>
<ul>
<li>建立警報規則（錯誤速率、延遲、Pod 重新啟動）</li>
<li>配置 Alertmanager → Slack</li>
<li>觸發警報，驗證通知</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 33 課：Loki — 集中式日誌記錄</strong>中，我們將使用 Grafana Loki 設定集中式日誌聚合。 </p>