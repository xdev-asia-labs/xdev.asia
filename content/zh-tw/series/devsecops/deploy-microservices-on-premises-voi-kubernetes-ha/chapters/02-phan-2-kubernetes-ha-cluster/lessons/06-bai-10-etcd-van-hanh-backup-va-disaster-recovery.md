---
id: 019e1a00-aa01-7001-c001-k8sha000206
title: 第 10 課：ETCD — 操作、備份與災難復原
slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
description: 深入了解 etcd 內部結構、Raft 共識、etcdctl 作業、CronJob 自動備份、快照復原、碎片整理、壓縮、警報管理和災難復原程序。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6333" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6333)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1020" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="110" x2="1100" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="140" x2="1050" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：ETCD — 作業、備份與</tspan>
      <tspan x="60" dy="42">災難復原</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：使用 kubeadm 的 Kubernetes HA 叢集__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 了解 Raft 共識演算法和 etcd 內部結構__HTMLTAG_73___
<li>✅ 精通etcdctl進行日常操作__HTMLTAG_75___
<li>✅ 使用 CronJob 設定自動備份</li>
<li>✅ 練習從快照復原（災難復原）</li>
<li>✅ 碎片整理、壓縮與效能調整</li>
</ul>

<hr>

<h2 id="phan-1-etcd-internals">第 1 部分：ETCD 內部</h2>

<h3 id="11-raft-consensus">1.1。 Raft 共識演算法</h3>

___程式碼區塊_0___

___程式碼區塊_1___

<p>⚠️ etcd 容忍 <strong>(N-1)/2</strong> 失敗：</p>
<ul>
<li>3 個節點 → 容忍 1 次故障（法定人數 = 2）</li>
<li>5 個節點 → 容忍 2 次故障（法定人數 = 3）</li>
</ul>

<h3 id="12-data-model">1.2。資料模型</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-2-etcdctl-operations">第 2 部分：ETCDCTL 操作</h2>

<h3 id="21-cluster-health">2.1。叢集運作狀況監控</h3>
___程式碼區塊_3___

<h3 id="22-performance-check">2.2。效能檢查</h3>
___程式碼區塊_4___

<h3 id="23-xem-kubernetes-data">2.3。在etcd中查看Kubernetes資料</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-3-backup">第 3 部分：ETCD 備份</h2>

<h3 id="31-manual-snapshot">3.1。手動快照</h3>
___程式碼區塊_6___

<h3 id="32-automated-backup-script">3.2。自動備份腳本</h3>
___程式碼區塊_7___

<h3 id="33-cron-backup">3.3。 Cron 備份（每 6 小時一次）</h3>
___程式碼區塊_8___

___程式碼區塊_9___

<hr>

<h2 id="phan-4-restore">第 4 部分：災難復原 — 復原</h2>

<h3 id="41-restore-scenario">4.1。恢復場景</h3>

___程式碼區塊_10___

<h3 id="42-restore-step-by-step">4.2。逐步恢復</h3>
___程式碼區塊_11___<hr>

<h2 id="phan-5-compaction-defrag">第 5 部分：壓縮與碎片整理</h2>

<h3 id="51-compaction">5.1。壓縮</h3>
___程式碼區塊_12___

<h3 id="52-defragmentation">5.2。碎片整理</h3>
___程式碼區塊_13___

<h3 id="53-alarm-management">5.3。警報管理</h3>
___程式碼區塊_14___

<hr>

<h2 id="phan-6-monitoring">第 6 部分：ETCD 監控</h2>

<h3 id="61-prometheus-metrics">6.1。普羅米修斯指標</h3>
___程式碼區塊_15___

<h3 id="62-alerting-rules">6.2。 PrometheusRule（將在第 32 課中使用）</h3>
___程式碼區塊_16___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_145__HTMLTAG_146___Raft 共識</strong>：寫入所需的多數法定人數 (2/3)</li>
___HTMLTAG_149__HTMLTAG_150___每 6 小時備份一次</strong> 是生產的最低限度 — 保存快照 + 憑證</li>
___HTMLTAG_153__HTMLTAG_154___恢復 = 從快照建立新叢集</strong>，快照後的所有資料都會遺失__HTMLTAG_156___
___HTMLTAG_157__HTMLTAG_158___依序對每個成員進行碎片整理</strong>，而不是同時進行碎片整理（I/O 區塊）</li>
___HTMLTAG_161__HTMLTAG_162___NOSPACE警報</strong>：壓縮→碎片整理→解除</li>
___HTMLTAG_165__HTMLTAG_166___NVMe SSD</strong> 是 etcd 的必備品（p99 寫入延遲 < 10ms)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_172___

<h3 id="bt1">練習 1：備份與復原實驗室</h3>
<ul>
<li>建立 Nginx 部署（3 個副本）</li>
<li>備份 etcd 快照</li>
<li>刪除部署 nginx</li>
<li>從快照恢復，驗證部署 nginx 返回</li>
</ul>

<h3 id="bt2">練習 2：監控</h3>
<ul>
<li>執行etcd-check.sh，記錄資料庫大小、領導者、運作狀況</li>
<li>壓縮與碎片整理，比較之前/之後的資料庫大小</li>
</ul>

<h3 id="bt3">練習 3：設定 CronJob 備份</h3>
<ul>
<li>部署 etcd 備份 CronJob</li>
<li>驗證作業已成功執行__HTMLTAG_199___
<li>檢查 /backup/etcd/</li> 中的快照文件
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 11 課：使用 Rook-Ceph 的分散式儲存架構</strong>，我們將開始第 3 部分 — 安裝 Rook-Ceph 以實現持久性儲存。 </p>