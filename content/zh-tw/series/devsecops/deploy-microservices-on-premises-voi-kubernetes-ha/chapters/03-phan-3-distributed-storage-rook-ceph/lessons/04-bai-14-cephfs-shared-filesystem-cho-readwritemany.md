---
id: 019e1a00-aa01-7001-c001-k8sha000304
title: 第 14 課：CEPHFS — 用於 READWRITEMANY 的共用檔案系統
slug: bai-14-cephfs-shared-filesystem-cho-readwritemany
description: 建立 CephFilesystem、CephFS (ReadWriteMany) 的 StorageClass，部署 MDS，測試多個 Pod、配額和子磁碟區之間的共用儲存。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: 第 3 部分：分散式儲存 — Rook-Ceph
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3224" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3224)"/>

  <!-- Decorations -->
  <g>
    <circle cx="776" cy="58" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="952" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="628" cy="250" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="804" cy="86" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="198" x2="1100" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="228" x2="1050" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1026.5788383248864,181.5 1026.5788383248864,214.5 998,231 969.4211616751136,214.5 969.4211616751135,181.5 998,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：CEPHFS — </tspan> 的共享檔案系統
      <tspan x="60" dy="42">READWRITEMANY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：分散式儲存 — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 建立 CephFilesystem 和 MetadataServer (MDS)</li>
<li>✅ 使用 ReadWriteMany 為 CephFS 建立 StorageClass</li>
<li>✅ 同時從多個 Pod 掛載 CephFS__HTMLTAG_77___
<li>✅ 配置配額和子卷組</li>
<li>✅ 比較 RBD 與 CephFS 用例</li>
</ul>

<hr>

<h2 id="phan-1-cephfs-vs-rbd">第 1 部分：CEPHFS 與 RBD — 何時使用什麼？ </h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>RBD（區塊）</th>
<th>CephFS（檔案系統）</th>
</tr>
</thead>
<tbody>
<tr>
<td>存取模式</td>
<td>讀寫一次 (RWO)</td>
<td>ReadWriteMany (RWX)</td>
</tr>
<tr>
<td>安裝樣式</td>
<td>1 個單盒</td>
<td>同時多個 Pod</td>
</tr>
<tr>
<td>用例</td>
<td>資料庫，單一應用程式</td>
<td>共享內容、日誌、媒體</td>
</tr>
<tr>
<td>效能</td>
<td>高（區塊級）</td>
<td>好（POSIX 開銷）</td>
</tr>
<tr>
<td>需要 MDS？ </td>
<td>否</td>
<td>是</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-tao-cephfilesystem">第 2 部分：建立 CEPHFILESYSTEM</h2>

<h3 id="21-cephfilesystem-crd">2.1。 CephFilesystem CRD</h3>
___程式碼區塊_0______程式碼區塊_1___

<h3 id="22-storageclass-cephfs">2.2。 CephFS 的儲存類別</h3>
___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-readwritemany">第 3 部分：測驗讀寫</h2>

<h3 id="31-tao-rwx-pvc">3.1。建立 RWX PVC</h3>
___程式碼區塊_4___

<h3 id="32-nhieu-pods-cung-mount">3.2。具有相同安裝的多個 Pod</h3>
___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-4-quotas">第 4 部分：配額與子卷__HTMLTAG_158___

___程式碼區塊_7___

<h3 id="41-cleanup">4.1。清理</h3>
___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_165__HTMLTAG_166___CephFS</strong> 用於 ReadWriteMany — 多個 Pod 讀取/寫入同一卷</li>
___HTMLTAG_169__HTMLTAG_170___MDS（元資料伺服器）</strong> 管理檔案系統元資料</li>
___HTMLTAG_173__HTMLTAG_174___activeStandby：true</strong> 確保 MDS HA</li>
___HTMLTAG_177__HTMLTAG_178___用例 RWX</strong>：分享內容、日誌、媒體、AI 訓練資料</li>
___HTMLTAG_181__HTMLTAG_182___RBD 用於資料庫，CephFS 用於共用檔案___HTMLTAG_183__HTMLTAG_184___
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_188___

<h3 id="bt1">練習 1：RWX 實驗室</h3>
<ul>
<li>建立 CephFilesystem、StorageClass、PVC (RWX)</li>
<li>部署 3 個寫入器 Pod + 1 個讀取器 Pod__HTMLTAG_195___
<li>驗證所有 Pod 讀取/寫入相同磁碟區__HTMLTAG_197___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第15課：Ceph監控、調優與故障排除</strong>中，我們將監控Ceph效能、調優參數並處理常見問題。 </p>