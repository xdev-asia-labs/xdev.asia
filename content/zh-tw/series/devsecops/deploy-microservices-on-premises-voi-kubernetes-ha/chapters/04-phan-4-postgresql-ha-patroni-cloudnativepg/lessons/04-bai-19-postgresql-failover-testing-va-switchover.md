---
id: 019e1a00-aa01-7001-c001-k8sha000404
title: 第 19 課：POSTGRESQL 故障轉移測試和切換
slug: bai-19-postgresql-failover-testing-va-switchover
description: 測試主節點宕機時的自動故障轉移、排程切換、防護機制、監控複製延遲和應用程式連線處理。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 第 4 部分：使用 Patroni 和 CloudNativePG 實作 PostgreSQL HA
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-503" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-503)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="179" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="105" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="68" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：POSTGRESQL 故障轉移測試和</tspan>
      <tspan x="60" dy="42">切換</tspan>
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
<li>✅ 當主 Pod 被殺死時測試自動故障轉移__HTMLTAG_71___
<li>✅ 計劃切換（維護視窗）</li>
<li>✅ 監控複製延遲</li>
<li>✅ 故障轉移期間的應用程式連線處理</li>
<li>✅ 圍欄與裂腦預防</li>
</ul>

<hr>

<h2 id="phan-1-automatic-failover">第 1 部分：自動故障轉移</h2>

<h3 id="11-test-failover">1.1。測試：殺死主要 Pod</h3>
___程式碼區塊_0___

<h3 id="12-failover-timeline">1.2。故障轉移時間軸</h3>
___程式碼區塊_1___

<hr>

<h2 id="phan-2-planned-switchover">第 2 部分：計劃切換</h2>

<h3 id="21-switchover-command">2.1。計劃切換（零資料遺失）</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-3-replication-lag">第 3 部分：監控複製延遲</h2>

___程式碼區塊_3___

<h3 id="31-prometheus-alerts">3.1。複製延遲警報</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-4-app-connection">第 4 部分：應用程式連線處理</h2>

<h3 id="41-connection-failover">4.1。處理應用程式中的故障轉移</h3>
___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-fencing">第 5 部分：擊劍與裂腦預防</h2>

___程式碼區塊_7___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_110__HTMLTAG_111___自動故障轉移</strong>：約10-15秒，操作員偵測+提升</li>
___HTMLTAG_114__HTMLTAG_115___計畫切換</strong>：零資料遺失，<code>kubectl cnpg 提升___HTMLTAG_118__HTMLTAG_119___
___HTMLTAG_120__HTMLTAG_121___複製延遲監控</strong>：pg_stat_replication、Prometheus 指標</li>
___HTMLTAG_124__HTMLTAG_125___應用程式</strong>：使用服務名稱、重試邏輯、target_session_attrs</li>
___HTMLTAG_128__HTMLTAG_129___防護</strong>：K8s 租約可防止腦裂</li>
___HTMLTAG_132__HTMLTAG_133___PgBouncer</strong> 對應用程式隱藏故障轉移（透明重新連線）</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：故障轉移實驗室</h3>
<ul>
<li>終止主 Pod，測量故障轉移時間</li>
<li>故障轉移後驗證資料一致性</li>
<li>方案切換到特定備用設備</li>
</ul>

<h3 id="bt2">練習 2：應用程式連線測驗</h3>
<ul>
<li>部署透過 PgBouncer 連接到 PG 的簡單應用</li>
<li>在應用寫入時觸發故障轉移</li>
<li>驗證應用程式自動復原</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 20 課：PostgreSQL 監控、調優和第二天操作</strong>中，我們將為生產設定詳細的監控和調優。 </p>