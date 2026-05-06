---
id: 019e1a00-aa01-7001-c001-k8sha000401
title: 第 16 課：使用 PARONI 和 CLOUDNATIVEPG 的 POSTGRESQL HA 架構
slug: bai-16-kien-truc-postgresql-ha-voi-patroni-va-cloudnativepg
description: 比較 Patroni 與 CloudNativePG 在 K8s 上的 PostgreSQL HA、流複製架構、同步與非同步、故障轉移機制和連接池。
duration_minutes: 120
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai16-postgresql-ha-patroni.png
sort_order: 16
section_title: 第 4 部分：使用 Patroni 和 CloudNativePG 實作 PostgreSQL HA
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4480" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4480)"/>

  <!-- Decorations -->
  <g>
    <circle cx="685" cy="205" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="770" cy="90" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="855" cy="235" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="940" cy="120" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="55" x2="1100" y2="135" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="85" x2="1050" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：使用 </tspan> 的 POSTGRESQL HA 架構
      <tspan x="60" dy="42">PATRONI 和 CLOUDNATIVEPG</tspan>
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
<li>✅ 了解 PostgreSQL 流複製</li>
<li>✅ 比較 Patroni、CloudNativePG 和 PGO (CrunchyData)</li>
<li>✅ 了解同步與非同步複製__HTMLTAG_77___
<li>✅ HA 架構：主備、故障轉移、隔離</li>
<li>✅ 使用 PgBouncer 進行連線池</li>
</ul>

<hr>

<h2 id="phan-1-postgresql-replication">第 1 部分：POSTGRESQL 複製</h2>

<h3 id="11-streaming-replication">1.1。流式複製</h3>
___程式碼區塊_0___

> ✅ 主要：接收寫入，將 WAL 串流傳輸到備用資料庫
> ✅ 備用：重播 WAL，服務讀取查詢
> ✅ 故障轉移：將備用提升為主

<h3 id="12-sync-vs-async">1.2。同步與異步</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>模式</th>
<th>同步</th>
<th>異步</th>
</tr>
</thead>
<tbody>
<tr>
<td>資料安全</td>
<td>零資料遺失 (RPO=0)</td>
<td>潛在的資料遺失</td>
</tr>
<tr>
<td>寫入延遲</td>
<td>更高（等待待機ACK）</td>
<td>降低（不要等待）</td>
</tr>
<tr>
<td>吞吐量</td>
<td>下</td>
<td>更高</td>
</tr>
<tr>
<td>網路依賴性</td>
<td>強（延遲影響寫入）</td>
<td>弱</td>
</tr>
<tr>
<td>最適合</td>
<td>財務、關鍵資料</td>
<td>大多數應用</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-so-sanh-operators">第 2 部分：比較 POSTGRESQL 運算子</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>CloudNativePG</th>
<th>帕特羅尼 (Zalando)</th>
<th>PGO (CrunchyData)</th>
</tr>
</thead>
<tbody>
<tr>
<td>架構</td>
<td>K8s 原生運算子__HTMLTAG_168___
<td>邊車 + DCS</td>
<td>K8s 運營商</td>
</tr>
<tr>
<td>故障轉移</td>
<td>K8s 控制器</td>
<td>透過 DCS 類似 Raft</td>
<td>K8s 控制器</td>
</tr>
<tr>
<td>DCS 依賴性</td>
<td>❌不需要（使用K8s）</td>
<td>✅ 需要 etcd/Consul/K8s</td>
<td>❌不需要</td>
</tr>
<tr>
<td>備份</td>
<td>酒保（S3/本地）</td>
<td>WAL-G，pgBackRest</td>
<td>pgBackRest</td>
</tr>
<tr>
<td>連線池__HTMLTAG_206___
<td>PgBouncer 內建</td>
<td>需要單獨設定</td>
<td>PgBouncer 內建</td>
</tr>
<tr>
<td>CNCF</td>
<td>沙盒</td>
<td>社區</td>
<td>社區</td>
</tr>
<tr>
<td>許可證</td>
<td>Apache 2.0</td>
<td>麻省理工學院</td>
<td>Apache 2.0</td>
</tr>
<tr>
<td>複雜性</td>
<td>低</td>
<td>平均</td>
<td>平均</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>選擇CloudNativePG</strong>：K8s原生，無需外部DCS、CNCF項目，集成備份，比K8s上的Patroni更簡單.</p>

<hr>

<h2 id="phan-3-cloudnativepg-architecture">第 3 部分：CLOUDNATIVEPG 架構</h2>

___程式碼區塊_1___

<h3 id="31-failover-flow">3.1。故障轉移流程</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-4-pgbouncer">第 4 部分：連接池 — PGBOUNCER</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-5-storage-considerations">第 5 部分：儲存注意事項</h2>

___程式碼區塊_4___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_266__HTMLTAG_267___CloudNativePG</strong>：K8s 原生，無須 etcd/Consul，自動故障轉移</li>
___HTMLTAG_270__HTMLTAG_271___串流複製</strong>：透過 WAL 串流主 → 備用</li>
___HTMLTAG_274__HTMLTAG_275___同步</strong>實現零資料遺失，<strong>異步</strong>實作吞吐量</li>
___HTMLTAG_280__HTMLTAG_281___PgBouncer</strong>：連接池減少了 20 個資料庫進程</li>
___HTMLTAG_284__HTMLTAG_285___Ceph RBD</strong> (ReadWriteOnce) 適用於資料庫 PV</li>
___HTMLTAG_288__HTMLTAG_289___3 項服務</strong>：rw（主）、ro（備用）、r（任何實例）</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：研究</h3>
<ul>
<li>閱讀 CloudNativePG 文件</li>
<li>比較 3 個運營商：CNPG、Patroni 和 PGO</li>
<li>根據您的用例決定同步或非同步__HTMLTAG_304___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第 17 課：部署 CloudNativePG Operator 和 PostgreSQL 叢集</strong>中，我們將安裝 CloudNativePG 並建立 PostgreSQL 叢集 3 個實例。 </p>