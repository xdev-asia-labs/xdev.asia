---
id: 019e1a00-aa01-7001-c001-k8sha000405
title: 第 20 課：POSTGRESQL 監控、調校與第二天操作
slug: bai-20-postgresql-monitoring-tuning-va-day-2-operations
description: 在 Kubernetes 上設定 pg_stat_statements、Prometheus 指標、Grafana 儀表板、真空調優、連接池最佳化和 PostgreSQL HA 的 Day-2 操作。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: 第 4 部分：使用 Patroni 和 CloudNativePG 實作 PostgreSQL HA
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7944" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7944)"/>

  <!-- Decorations -->
  <g>
    <circle cx="662" cy="136" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="786" cy="120" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="242" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="104" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：POSTGRESQL 監控、調校與</tspan>
      <tspan x="60" dy="42">第 2 天操作</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：PostgreSQL HA 與 Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 設定 pg_stat_statements 用於查詢分析</li>
<li>✅ 為 PostgreSQL 部署 Prometheus 監控</li>
<li>✅ 為 PG 指標建立 Grafana 儀表板</li>
<li>✅ 真空調節與自動真空配置</li>
<li>✅ 使用 PgBouncer 進行連線池最佳化</li>
<li>✅ 第 2 天操作：擴充、次要升級、主要升級</li>
</ul>

<hr>

<h2 id="phan-1-pg-stat-statements">第 1 部分：pg_stat_statements — 查詢分析</h2>

<h3 id="11-enable">1.1。啟用 pg_stat_statements</h3>
___程式碼區塊_0___

<h3 id="12-top-queries">1.2。最慢的查詢</h3>
___程式碼區塊_1___

<hr>

<h2 id="phan-2-prometheus">第 2 部分：普羅米修斯監控</h2>

<h3 id="21-metrics">2.1。 CloudNativePG 內建指標</h3>
___程式碼區塊_2___

<h3 id="22-podmonitor">2.2。 Prometheus 的 PodMonitor</h3>
___程式碼區塊_3___

<h3 id="23-custom-queries">2.3。自訂指標查詢</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-3-grafana">第 3 部分：GRAFANA 儀表板</h2>

<h3 id="31-dashboard-import">3.1。導入儀表板</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-4-vacuum-tuning">第 4 部分：真空調諧</h2>

<h3 id="41-autovacuum">4.1。自動清理配置</h3>
___程式碼區塊_6___

<h3 id="42-manual-vacuum">4.2。針對大型表的手動 VACUUM</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-5-pgbouncer-tuning">第 5 部分：PGBOUNCER 調整</h2>

___程式碼區塊_8___

<hr>

<h2 id="phan-6-day2">第 6 部分：第 2 天操作</h2>

<h3 id="61-scaling">6.1。規模副本</h3>
___程式碼區塊_9___

<h3 id="62-minor-upgrade">6.2。小版升級（例如 16.3 → 16.4）</h3>
___程式碼區塊_10___<h3 id="63-major-upgrade">6.3。主要版本升級（例如，16 → 17）</h3>
___程式碼區塊_11___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_127__HTMLTAG_128___pg_stat_statements</strong>：對於查詢效能分析至關重要</li>
___HTMLTAG_131__HTMLTAG_132___Prometheus + Grafana</strong>：即時監控、延遲/連線警報</li>
___HTMLTAG_135__HTMLTAG_136___真空調整</strong>：減少大型表的scale_factor（5％而不是20％）</li>
___HTMLTAG_139__HTMLTAG_140___PgBouncer</strong>：事務池，依照工作負載調整default_pool_size</li>
___HTMLTAG_143__HTMLTAG_144___小升級</strong>：滾動更新零停機</li>
___HTMLTAG_147__HTMLTAG_148___重大升級</strong>：邏輯複製策略</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：表現基線</h3>
<ul>
<li>啟用 pg_stat_statements</li>
<li>執行 pgbench 工作負載</li>
<li>辨識前 5 個最慢的查詢__HTMLTAG_163___
<li>設定 Grafana 儀表板</li>
</ul>

<h3 id="bt2">練習 2：真空實驗室</h3>
<ul>
<li>建立表，插入 1M 行，刪除 500K</li>
<li>觀察死元組，觸發VACUUM__HTMLTAG_173___
<li>比較自動真空與手動真空計時__HTMLTAG_175___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第21課：Kubernetes上的RabbitMQ HA叢集</strong>中，我們將部署HA訊息佇列用於微服務通訊。 </p>