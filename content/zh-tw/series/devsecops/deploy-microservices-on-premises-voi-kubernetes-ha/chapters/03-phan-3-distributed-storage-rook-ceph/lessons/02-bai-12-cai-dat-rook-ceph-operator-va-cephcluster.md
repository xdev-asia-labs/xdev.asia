---
id: 019e1a00-aa01-7001-c001-k8sha000302
title: 第 12 課：安裝 Rook-Ceph Operator 和 CEPHCLUSTER
slug: bai-12-cai-dat-rook-ceph-operator-va-cephcluster
description: 使用 Helm 部署 Rook Operator，在 3 個工作節點上建立 CephCluster CRD，驗證 MON/MGR/OSD Pod、Ceph 儀表板，並解決常見的 Ceph 問題。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：分散式儲存 — Rook-Ceph
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3887" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3887)"/>

  <!-- Decorations -->
  <g>
    <circle cx="971" cy="243" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="713" cy="125" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="196" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="267" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="233" x2="1100" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="263" x2="1050" y2="333" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.2487113059643,169 1007.2487113059643,197 983,211 958.7512886940357,197 958.7512886940357,169 983,155" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：安裝 ROOK-CEPH OPERATOR 和</tspan>
      <tspan x="60" dy="42">CEPHCLUSTER</tspan>
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
<li>✅ 使用 Helm 部署 Rook Operator</li>
<li>✅ 建立具有 3 個節點的 CephCluster CRD</li>
<li>✅ 驗證 MON、MGR、OSD Pod 是否正常運作</li>
<li>✅ 存取 Ceph 儀表板</li>
<li>✅ 排查常見的 Ceph 部署問題</li>
</ul>

<hr>

<h2 id="phan-1-prerequisites">第 1 部分：先決條件</h2>

<h3 id="11-verify-disks">1.1。驗證工作節點上的磁碟</h3>
___程式碼區塊_0___

<h3 id="12-lvm2-package">1.2。安裝LVM2（Ceph需要）</h3>
___程式碼區塊_1___

<hr>

<h2 id="phan-2-install-rook-operator">第 2 部分：安裝 ROOK OPERATOR</h2>

<h3 id="21-helm-install">2.1。頭盔安裝</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-3-create-cephcluster">第 3 部分：建立 CEPHCLUSTER</h2>

<h3 id="31-cephcluster-crd">3.1。 CephCluster CRD</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<h3 id="32-verify-deployment">3.2。驗證部署</h3>
___程式碼區塊_5___

<h3 id="33-deploy-toolbox">3.3。部署 Ceph 工具箱</h3>
___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="phan-4-ceph-dashboard">第 4 部分：CEPH 儀表板</h2>

<h3 id="41-get-dashboard-credentials">4.1。取得儀表板憑證</h3>
___程式碼區塊_8___

<hr>

<h2 id="phan-5-troubleshooting">第 5 部分：故障排除</h2>

<h3 id="51-ceph-health-warnings">5.1。 Ceph 健康警告</h3>
___程式碼區塊_9___

<h3 id="52-operator-logs">5.2。操作員日誌</h3>
___程式碼區塊_10___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_120__HTMLTAG_121___Rook Operator</strong> 管理 K8s 上的整個 Ceph 生命週期</li>
___HTMLTAG_124__HTMLTAG_125___CephCluster CRD</strong> 叢集定義：節點、設備、副本、資源</li>
___HTMLTAG_128__HTMLTAG_129___磁碟必須乾淨</strong>（無分割區，無檔案系統）Rook OSD 準備才能成功</li>
___HTMLTAG_132__HTMLTAG_133___3 MON + 2 MGR + 3 OSD</strong> 是 HA 生產的最小值</li>
___HTMLTAG_136__HTMLTAG_137___工具箱容器</strong>用於直接 ceph CLI 存取</li>
___HTMLTAG_140__HTMLTAG_141___儀表板</strong>用於監控和管理的Web UI</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：部署 Ceph 叢集</h3>
<ul>
<li>驗證工作節點上的磁碟__HTMLTAG_152___
<li>使用 Helm 安裝 Rook Operator</li>
<li>建立 CephCluster，等待 HEALTH_OK</li>
</ul>

<h3 id="bt2">練習 2：探索 Ceph</h3>
<ul>
<li>部署工具箱，運行 ceph status、ceph osd 樹、ceph df</li>
<li>存取儀表板，探索使用者介面</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 13 課：CephBlockPool、StorageClass 和 PVC</strong> 中，我們將建立區塊儲存池並設定 PersistentVolumes。 </p>