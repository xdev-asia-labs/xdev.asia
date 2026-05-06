---
id: 019e1a00-aa01-7001-c001-k8sha000302
title: 'レッスン 12: Rook-CEPH オペレーターと CEPHCLUSTER のインストール'
slug: bai-12-cai-dat-rook-ceph-operator-va-cephcluster
description: Helm を使用して Rook Operator をデプロイし、3 つのワーカー ノードに CephCluster CRD を作成し、MON/MGR/OSD ポッド、Ceph ダッシュボードを確認し、一般的な Ceph の問題のトラブルシューティングを行います。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 分散ストレージ — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: ROK-CEPH OPERATOR と</tspan> のインストール
      <tspan x="60" dy="42">CEPHCLUSTER</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 分散ストレージ — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ Helm を使用して Rook オペレーターをデプロイ</li>
<li>✅ 3 つのノードで CephCluster CRD を作成</li>
<li>✅ MON、MGR、OSD ポッドが動作していることを確認</li>
<li>✅ Ceph ダッシュボードにアクセス</li>
<li>✅ Ceph 導入に関する一般的な問題のトラブルシューティング</li>
</ul>

<hr>

<h2 id="phan-1-prerequisites">パート 1: 前提条件</h2>

<h3 id="11-verify-disks">1.1.ワーカー ノードのディスクを確認</h3>
___コードブロック_0___

<h3 id="12-lvm2-package">1.2。 LVM2 をインストールします (Ceph で必要)</h3>
___コードブロック_1___

<hr>

<h2 id="phan-2-install-rook-operator">パート 2: ROOK OPERATOR のインストール</h2>

<h3 id="21-helm-install">2.1. Helm のインストール</h3>
___コードブロック_2___

<hr>

<h2 id="phan-3-create-cephcluster">パート 3: CEPHCLUSTER の作成</h2>

<h3 id="31-cephcluster-crd">3.1. CephCluster CRD</h3>
___コードブロック_3___

___コードブロック_4___

<h3 id="32-verify-deployment">3.2.導入の確認</h3>
___コードブロック_5___

<h3 id="33-deploy-toolbox">3.3. Ceph Toolbox のデプロイ</h3>
___コードブロック_6___

___コードブロック_7___

<hr>

<h2 id="phan-4-ceph-dashboard">パート 4: CEPH ダッシュボード</h2>

<h3 id="41-get-dashboard-credentials">4.1.ダッシュボードの認証情報を取得</h3>
___コードブロック_8___

<hr>

<h2 id="phan-5-troubleshooting">パート 5: トラブルシューティング</h2>

<h3 id="51-ceph-health-warnings">5.1. Ceph ヘルス警告</h3>
___コードブロック_9___

<h3 id="52-operator-logs">5.2.オペレーターログ</h3>
___コードブロック_10___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Rook Operator</strong> K8 上の Ceph ライフサイクル全体を管理</li>
<li><strong>CephCluster CRD</strong> クラスター定義: ノード、デバイス、レプリカ、リソース</li>
<li><strong>Rook OSD を正常に準備するには、ディスクがクリーンである必要があります</strong> (パーティションやファイルシステムなし)</li>
<li><strong>3 MON + 2 MGR + 3 OSD</strong> は HA プロダクションの最小値</li>
<li><strong>ceph CLI に直接アクセスするためのツールボックス ポッド</strong></li>
<li><strong>ダッシュボード</strong> 監視と管理のための Web UI</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: Ceph クラスターのデプロイ</h3>
<ul>
<li>ワーカー ノードのディスクを確認__HTMLTAG_152___
<li>Helm を使用して Rook Operator をインストール</li>
<li>CephCluster を作成し、HEALTH_OK になるまで待ちます</li>
</ul>

<h3 id="bt2">_演習 2: Ceph を探索する</h3>
<ul>
<li>ツールボックスのデプロイ、ceph ステータスの実行、ceph osd ツリー、ceph df</li>
<li>ダッシュボードにアクセスし、UI を探索</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_170___レッスン 13: CephBlockPool、StorageClass、および PVC</strong> では、ブロック ストレージ プールを作成し、Persistent Volume をプロビジョニングします。</p>