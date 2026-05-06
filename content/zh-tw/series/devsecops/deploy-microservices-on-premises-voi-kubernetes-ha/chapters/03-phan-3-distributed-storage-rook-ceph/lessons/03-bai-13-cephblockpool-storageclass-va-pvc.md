---
id: 019e1a00-aa01-7001-c001-k8sha000303
title: 第 13 課：CEPHBLOCKPOOL、儲存類別和 PVC
slug: bai-13-cephblockpool-storageclass-va-pvc
description: 建立具有複製功能的 CephBlockPool、用於動態配置的 StorageClass、PersistentVolumeClaim、使用 StatefulSet、快照和複製磁碟區進行測試。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 第 3 部分：分散式儲存 — Rook-Ceph
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7760" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7760)"/>

  <!-- Decorations -->
  <g>
    <circle cx="859" cy="207" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="618" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="877" cy="65" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="636" cy="124" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="183" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="187" x2="1050" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1034.712812921102,191 1034.712812921102,223 1007,239 979.287187078898,223 979.287187078898,191 1007,175" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：CEPHBLOCKPOOL、儲存類別和 PVC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：分散式儲存 — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 建立複製因子為 3 的 CephBlockPool</li>
<li>✅ 為動態 PV 設定建立 StorageClass</li>
<li>✅ 建立 PVC 並將其掛載到 Pod/StatefulSet 中</li>
<li>✅ 磁碟區快照和還原</li>
<li>✅ 卷克隆</li>
</ul>

<hr>

<h2 id="phan-1-ceph-block-pool">第 1 部分：CEPH 區塊池</h2>

<h3 id="11-tao-block-pool">1.1。建立 CephBlockPool</h3>
___程式碼區塊_0___

___程式碼區塊_1___

<h3 id="12-storage-class">1.2。 RBD 的儲存類別</h3>
___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-2-pvc-va-pods">第 2 部分：PVC 和 PODS</h2>

<h3 id="21-tao-pvc">2.1。建立 PVC</h3>
___程式碼區塊_4___

___程式碼區塊_5___

<h3 id="22-mount-vao-pod">2.2。將 PVC 安裝到 Pod</h3>
___程式碼區塊_6___

___程式碼區塊_7___

<h3 id="23-statefulset">2.3。帶有volumeClaimTemplates的StatefulSet</h3>
___程式碼區塊_8___

___程式碼區塊_9___

<hr>

<h2 id="phan-3-volume-expansion">第 3 部分：音量擴充</h2>

___程式碼區塊_10___

<hr>

<h2 id="phan-4-volume-snapshot">第 4 部分：音量快照</h2>

<h3 id="41-snapshot-class">4.1。 VolumeSnapshotClass</h3>
___程式碼區塊_11___

<h3 id="42-tao-snapshot">4.2。建立快照</h3>
___程式碼區塊_12___

___程式碼區塊_13___

<h3 id="43-restore-tu-snapshot">4.3。從快照恢復</h3>
___程式碼區塊_14___

___程式碼區塊_15___

<hr>

<h2 id="phan-5-volume-cloning">第 5 部分：卷克隆</h2>

___程式碼區塊_16___

___程式碼區塊_17___

<hr>

<h2 id="phan-6-ceph-monitor">第 6 部分：監控儲存</h2>

___程式碼區塊_18___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_119__HTMLTAG_120___CephBlockPool</strong> withreplicated.size=3 確保資料安全</li>
___HTMLTAG_123__HTMLTAG_124___StorageClass</strong> 用於動態設定 — PVC 自動建立 PV</li>
___HTMLTAG_127__HTMLTAG_128___allowVolumeExpansion</strong> 允許在不重新建立的情況下調整 PVC 大小</li>
___HTMLTAG_131__HTMLTAG_132___VolumeSnapshot</strong> 建立快速時間點備份（寫入時複製）</li>
___HTMLTAG_135__HTMLTAG_136___卷克隆</strong>對開發/測試環境有用</li>
___HTMLTAG_139__HTMLTAG_140___StatefulSet + volumeClaimTemplates</strong> = 每個副本都有自己的 PVC</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_146___

<h3 id="bt1">練習 1：區塊儲存實驗室</h3>
<ul>
<li>建立 CephBlockPool、StorageClass</li>
<li>建立一個5Gi PVC，將其掛載到pod中，寫入資料</li>
<li>刪除 Pod，重新創建，驗證資料是否持續</li>
<li>將 PVC 大小調整為 10Gi</li>
</ul>

<h3 id="bt2">練習 2：快照與複製</h3>
<ul>
<li>從 PVC 建立 VolumeSnapshot</li>
<li>從快照恢復PVC，驗證資料__HTMLTAG_165___
<li>複製 PVC，驗證資料相同__HTMLTAG_167___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 14 課：CephFS — ReadWriteMany 的共享檔案系統</strong> 中，我們將為需要多個 Pod 共用相同檔案系統的工作負載設定 CephFS。 </p>