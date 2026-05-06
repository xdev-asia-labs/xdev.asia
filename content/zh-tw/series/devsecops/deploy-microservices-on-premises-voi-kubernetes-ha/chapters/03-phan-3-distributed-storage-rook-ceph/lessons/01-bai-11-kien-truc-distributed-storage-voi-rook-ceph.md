---
id: 019e1a00-aa01-7001-c001-k8sha000301
title: 第 11 課：使用 Rook-CEPH 的分散式儲存架構
slug: bai-11-kien-truc-distributed-storage-voi-rook-ceph
description: Ceph架構概述（RADOS、OSD、MON、MDS、MGR），為什麼選擇Rook-Ceph用於K8s，比較儲存解決方案，規劃Ceph叢集的容量和網路。
duration_minutes: 120
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai11-rook-ceph-architecture.png
sort_order: 11
section_title: 第 3 部分：分散式儲存 — Rook-Ceph
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7557" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7557)"/>

  <!-- Decorations -->
  <g>
    <circle cx="788" cy="234" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="664" cy="110" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="178" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="246" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="74" x2="1100" y2="154" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="104" x2="1050" y2="174" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="949.1147367097487,109.5 949.1147367097487,138.5 924,153 898.8852632902513,138.5 898.8852632902513,109.50000000000001 924,95" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：使用</tspan> 的分散式儲存架構
      <tspan x="60" dy="42">ROOK-CEPH</tspan>
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
<li>✅ 了解 Ceph 架構：RADOS、OSD、MON、MDS、MGR</li>
<li>✅ 了解 CRUSH 演算法與資料置入</li>
<li>✅ 比較 Rook-Ceph、Longhorn、OpenEBS 與本地路徑</li>
<li>✅ 規劃 Ceph 叢集的硬體與網路</li>
<li>✅ 了解 3 種儲存類型：區塊 (RBD)、檔案系統 (CephFS)、物件 (RGW)</li>
</ul>

<hr>

<h2 id="phan-1-ceph-architecture">第 1 部分：CEPH 架構概述</h2>

<h3 id="11-cac-thanh-phan-ceph">1.1。 Ceph</h3> 元件
___程式碼區塊_0___<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>組件</th>
<th>角色</th>
<th>最小HA</th>
</tr>
</thead>
<tbody>
<tr>
<td>MON（监视器）</td>
<td>集群映射、仲裁、身份验证</td>
<td>3（奇數）</td>
</tr>
<tr>
<td>MGR（经理）</td>
<td>指标、仪表板、编排</td>
<td>2（主用-备用）</td>
</tr>
<tr>
<td>OSD（对象存储守护进程）</td>
<td>实际数据存储、复制</td>
<td>3+（每个磁盘 1 个）</td>
</tr>
<tr>
<td>MDS（元資料伺服器）</td>
<td>CephFS 元数据（仅在使用 CephFS 时需要）</td>
<td>2（主用-备用）</td>
</tr>
<tr>
<td>RGW（RADOS 閘道）</td>
<td>用於物件儲存的 S3/Swift API</td>
<td>2+（LB 后面）</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-crush-algorithm">1.2。 CRUSH 演算法</h3>
___程式碼區塊_1___

> ✅ 無需查表 → 擴展到艾字節
> ✅ 故障域感知（机架、主机、数据中心）
> ✅ 客戶端直接計算資料位置

<hr>

<h2 id="phan-2-rook-la-gi">第 2 部分：ROOK — 适用于 KUBERNETES 的 CEPH 操作符</h2>

<h3 id="21-rook-architecture">2.1。 Rook 架構</h3>
___程式碼區塊_2___

<h3 id="22-so-sanh-storage">2.2。比較儲存解決方案</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria</th>
<th>Rook-Ceph</th>
<th>Longhorn</th>
<th>OpenEBS</th>
<th>local-path</th>
</tr>
</thead>
<tbody>
<tr>
<td>區塊儲存</td>
<td>✅ RBD</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>檔案系統 (RWX)</td>
<td>✅ CephFS</td>
<td>❌（NFS 駭客）</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>物件 (S3)</td>
<td>✅ RGW</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>複製</td>
<td>3-way</td>
<td>3 路</td>
<td>3-way</td>
<td>❌</td>
</tr>
<tr>
<td>效能</td>
<td>Excellent__HTMLTAG_222___
<td>好</td>
<td>好</td>
<td>最佳（本地）</td>
</tr>
<tr>
<td>複雜性</td>
<td>High</td>
<td>Low</td>
<td>平均</td>
<td>非常低</td>
</tr>
<tr>
<td>Min nodes</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>CNCF</td>
<td>已毕业</td>
<td>正在孵化</td>
<td>沙盒</td>
<td>-</td>
</tr>
<tr>
<td>最適合</td>
<td>生产</td>
<td>小簇</td>
<td>開發/測試</td>
<td>单节点</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>Select Rook-Ceph</strong> for production on-premises: unified storage (Block + FS + Object), proven at scale, CNCF Graduated.___4MLG_288

<hr>

<h2 id="phan-3-planning-ceph">第 3 部分：規劃 CEPH 硬體</h2>

<h3 id="31-osd-node-sizing">3.1。 OSD 節點大小</h3>
___程式碼區塊_3___

<h3 id="32-capacity-planning">3.2。容量規劃</h3>
___程式碼區塊_8___

<h3 id="33-network-planning">3.3。網路規劃</h3>
___程式碼區塊_4___

> ⚠️ 叢集網路：最低 10Gbps，因此恢復不會影響客戶端 I/O

<hr>

<h2 id="phan-4-storage-types">第 4 部分：3 種儲存類型</h2>

<h3 id="41-block-rbd">4.1。區塊儲存 (RBD)</h3>
___程式碼區塊_5___

> ✅ 資料庫（PostgreSQL、MySQL） · ✅ 有狀態應用程式 · ✅ 高 IOPS
> ⚠️ ReadWriteOnce — 一次只能掛載 1 個 pod<h3 id="42-filesystem-cephfs">4.2。檔案系統儲存 (CephFS)</h3>
___程式碼區塊_6___

> ✅ 共享檔案儲存（多個 Pod 一起讀取/寫入） · ✅ 內容管理 · ✅ AI/ML 訓練數據

<h3 id="43-object-rgw">4.3。物件儲存 (RGW)</h3>
___程式碼區塊_7___

> ✅ 備份儲存 · ✅ 日誌存檔 · ✅ MinIO/AWS S3 替換

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_307__HTMLTAG_308___Ceph</strong> = 統一儲存：1 個叢集中的區塊 + 檔案系統 + 物件</li>
___HTMLTAG_311__HTMLTAG_312___CRUSH演算法</strong>：無需查找表格即可計算資料位置→縮放無限__HTMLTAG_314___
___HTMLTAG_315__HTMLTAG_316___Rook Operator</strong>：使用 CRD 管理 K8s 上的 Ceph 生命週期</li>
___HTMLTAG_319__HTMLTAG_320___每個 OSD 5GB RAM</strong>：仔細規劃儲存節點的記憶體</li>
___HTMLTAG_323__HTMLTAG_324___2 個網路</strong>：公共（客戶端）+ 叢集（複製）以分離流量</li>
___HTMLTAG_327__HTMLTAG_328___複製 3x</strong>：原始容量 / 3 = 可用容量</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：容量規劃</h3>
<ul>
<li>計算可用容量：5 個節點 × 6 個 SSD × 1TB，複製=3</li>
<li>計算 Ceph 所需的 RAM（每個 5GB OSD）</li>
<li>繪製Ceph叢集的網路拓撲</li>
</ul>

<h3 id="bt2">練習 2：準備磁碟__HTMLTAG_346___
<ul>
<li>辨識工作節點上未使用的磁碟：<code>lsblk___HTMLTAG_350__HTMLTAG_351___
<li>驗證沒有分割區的磁碟： <code>wipefs -a /dev/sdX___HTMLTAG_354__HTMLTAG_355___
<li>準備第 12 課的磁碟</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第12課：安裝Rook-Ceph Operator和CephCluster</strong>中，我們將部署Rook Operator並在K8s上建立CephCluster。 </p>