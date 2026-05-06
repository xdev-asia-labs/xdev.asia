---
id: 019e1a00-aa01-7001-c001-k8sha000402
title: 第 17 課：部署 CLOUDNATIVEPG OPERATOR 和 POSTGRESQL 集群
slug: bai-17-deploy-cloudnativepg-operator-va-postgresql-cluster
description: 安裝 CloudNativePG Operator，使用 Ceph 儲存、PgBouncer 連線池、自訂設定建立 PostgreSQL 叢集 3 執行個體並驗證 HA。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 第 4 部分：使用 Patroni 和 CloudNativePG 實作 PostgreSQL HA
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6364" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6364)"/>

  <!-- Decorations -->
  <g>
    <circle cx="634" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="702" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.3826859021799,168.5 1005.3826859021799,195.5 982,209 958.6173140978201,195.5 958.6173140978201,168.5 982,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：部署 CLOUDNATIVEPG OPERATOR 和</tspan>
      <tspan x="60" dy="42">POSTGRESQL 叢集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：PostgreSQL HA 與 Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 安裝 CloudNativePG Operator</li>
<li>✅ 建立 PostgreSQL 叢集 3 個實例</li>
<li>✅ 設定 PgBouncer 連線池__HTMLTAG_77___
<li>✅ 自訂 postgresql.conf 參數</li>
<li>✅ 驗證複製與連結性__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-install-operator">第 1 部分：安裝 CLOUDNATIVEPG OPERATOR</h2>

<h3 id="11-helm-install">1.1。頭盔安裝</h3>
___程式碼區塊_0___

<hr>

<h2 id="phan-2-create-cluster">第 2 部分：建立 POSTGRESQL 叢集</h2>

<h3 id="21-cluster-crd">2.1。叢集 CRD</h3>
___程式碼區塊_1___

<h3 id="22-secrets">2.2。建立秘密</h3>
___程式碼區塊_2___

<h3 id="23-deploy-cluster">2.3。部署叢集</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-3-verify-replication">第 3 部分：驗證複製__HTMLTAG_99___

<h3 id="31-check-replication-status">3.1。檢查複製狀態</h3>
___程式碼區塊_4___

<h3 id="32-test-data-replication">3.2。測試資料複製</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-4-services">第 4 部分：服務</h2>

___程式碼區塊_6___

<hr>

<h2 id="phan-5-pgbouncer">第 5 部分：PGBOUNCER 連線池</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-6-test-connectivity">第 6 部分：測試連線</h2>

___程式碼區塊_9___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_117__HTMLTAG_118___CloudNativePG 運算子</strong>：單一 CRD 建立完整的 PG HA 叢集</li>
___HTMLTAG_121__HTMLTAG_122___3 個實例</strong>：1 個主節點 + 2 個備用節點，反關聯性分佈在節點上</li>
___HTMLTAG_125__HTMLTAG_126___Ceph RBD</strong> 用於儲存 + 單獨的 WAL 儲存用於效能</li>
___HTMLTAG_129__HTMLTAG_130___3 項服務</strong>：rw（主）、ro（備用）、r（任何）</li>
___HTMLTAG_133__HTMLTAG_134___PgBouncer Pooler</strong>：事務池，50個真實連線服務1000個客戶端</li>
___HTMLTAG_137__HTMLTAG_138___postInitSQL</strong>：在引導時自動建立擴充功能、使用者、架構</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_144___

<h3 id="bt1">練習 1：部署 PostgreSQL HA</h3>
<ul>
<li>安裝 CloudNativePG Operator</li>
<li>使用 Ceph 儲存建立 3 實例叢集</li>
<li>使用 pg_stat_replication__HTMLTAG_153___ 驗證複製
</ul>

<h3 id="bt2">練習 2：PgBouncer</h3>
<ul>
<li>部署 PgBouncer Pooler (rw + ro)</li>
<li>透過 PgBouncer 連接，驗證查詢路由</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第18課：PostgreSQL備份、PITR和災難復原</strong>中，我們將設定自動備份和時間點復原。 </p>