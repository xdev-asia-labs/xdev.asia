---
id: 019e1a00-aa01-7001-c001-k8sha000303
title: 'レッスン 13: CEPHBLOCKPOOL、ストレージクラス、および PVC'
slug: bai-13-cephblockpool-storageclass-va-pvc
description: レプリケーションを備えた CephBlockPool、動的プロビジョニング用の StorageClass、PersistentVolumeClaim、StatefulSet を使用したテスト、スナップショットおよびクローン ボリュームを作成します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 3: 分散ストレージ — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: CEPHBLOCKPOOL、ストレージクラス、PVC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 分散ストレージ — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ レプリケーション係数 3 で CephBlockPool を作成</li>
<li>✅ 動的 PV プロビジョニング用の StorageClass を作成</li>
<li>✅ PVC を作成し、Pod/StatefulSet にマウントします</li>
<li>✅ ボリュームのスナップショットと復元</li>
<li>✅ ボリュームのクローン作成</li>
</ul>

<hr>

<h2 id="phan-1-ceph-block-pool">パート 1: CEPH ブロック プール</h2>

<h3 id="11-tao-block-pool">1.1。 CephBlockPool の作成</h3>
___コードブロック_0___

___コードブロック_1___

<h3 id="12-storage-class">1.2. RBD</h3> の StorageClass
___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-2-pvc-va-pods">パート 2: PVC とポッド</h2>

<h3 id="21-tao-pvc">2.1. PVC</h3> を作成する
___コードブロック_4___

___コードブロック_5___

<h3 id="22-mount-vao-pod">2.2. PVC をポッドにマウント</h3>
___コードブロック_6___

___コードブロック_7___

<h3 id="23-statefulset">2.3. volumeClaimTemplates を使用した StatefulSet</h3>
___コードブロック_8___

___コードブロック_9___

<hr>

<h2 id="phan-3-volume-expansion">パート 3: ボリューム拡張</h2>

___コードブロック_10___

<hr>

<h2 id="phan-4-volume-snapshot">パート 4: ボリューム スナップショット</h2>

<h3 id="41-snapshot-class">4.1. VolumeSnapshotClass</h3>
___コードブロック_11___

<h3 id="42-tao-snapshot">4.2.スナップショットの作成</h3>
___コードブロック_12___

___コードブロック_13___

<h3 id="43-restore-tu-snapshot">4.3.スナップショットから復元</h3>
___コードブロック_14___

___コードブロック_15___

<hr>

<h2 id="phan-5-volume-cloning">パート 5: ボリュームのクローン作成</h2>

___コードブロック_16___

___コードブロック_17___

<hr>

<h2 id="phan-6-ceph-monitor">パート 6: ストレージの監視</h2>

___コードブロック_18___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_CephBlockPool</strong> (replicated.size=3) はデータの安全性を確保</li>
<li><strong>StorageClass</strong> (動的プロビジョニング用) — PVC は PV</li> を自動的に作成します
<li><strong>allow VolumeExpansion</strong> を使用すると、再作成せずに PVC のサイズを変更できます</li>
<li><strong>_ VolumeSnapshot</strong> は、迅速なポイントインタイム バックアップ (コピーオンライト) を作成します</li>
<li><strong>ボリュームのクローン作成</strong> 開発/テスト環境に便利</li>
<li><strong>StatefulSet + volumeClaimTemplates</strong> = 各レプリカには独自の PVC</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_146___

<h3 id="bt1">演習 1: ブロック ストレージ ラボ</h3>
<ul>
<li>CephBlockPool、StorageClass の作成</li>
<li>5Gi PVC を作成し、ポッドにマウントし、データを書き込む</li>
<li>ポッドを削除し、再作成し、データが保持されていることを確認</li>
<li>PVC のサイズを 10Gi に変更</li>
</ul>

<h3 id="bt2">演習 2: スナップショットとクローン</h3>
<ul>
<li>PVC から VolumeSnapshot を作成</li>
<li>PVC をスナップショットから復元し、データを確認__HTMLTAG_165___
<li>PVC のクローンを作成し、データが同一であることを確認__HTMLTAG_167___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_173___レッスン 14: CephFS — ReadWriteMany 用の共有ファイルシステム</strong> では、複数のポッドが同じファイルシステムを共有する必要があるワークロード用に CephFS を構成します。</p>