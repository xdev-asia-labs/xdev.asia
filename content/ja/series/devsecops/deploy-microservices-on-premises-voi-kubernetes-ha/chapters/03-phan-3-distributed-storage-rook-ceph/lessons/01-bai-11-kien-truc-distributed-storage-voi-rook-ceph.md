---
id: 019e1a00-aa01-7001-c001-k8sha000301
title: 'レッスン 11: Rook-CEPH を使用した分散ストレージ アーキテクチャ'
slug: bai-11-kien-truc-distributed-storage-voi-rook-ceph
description: Ceph アーキテクチャ (RADOS、OSD、MON、MDS、MGR) の概要、K8 に Rook-Ceph を選択する理由、ストレージ ソリューションの比較、Ceph クラスターの容量とネットワークの計画。
duration_minutes: 120
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai11-rook-ceph-architecture.png
sort_order: 11
section_title: 'パート 3: 分散ストレージ — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11:</tspan> を使用した分散ストレージ アーキテクチャ
      <tspan x="60" dy="42">ROOK-CEPH</tspan>
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
<li>✅ Ceph アーキテクチャを理解する: RADOS、OSD、MON、MDS、MGR</li>
<li>✅ CRUSH アルゴリズムとデータ配置を理解する</li>
<li>✅ Rook-Ceph、Longhorn、OpenEBS、ローカルパスの比較</li>
<li>✅ Ceph クラスターのハードウェアとネットワークの計画</li>
<li>✅ 3 種類のストレージを理解する: ブロック (RBD)、ファイルシステム (CephFS)、オブジェクト (RGW)</li>
</ul>

<hr>

<h2 id="phan-1-ceph-architecture">パート 1: CEPH アーキテクチャの概要</h2>

<h3 id="11-cac-thanh-phan-ceph">1.1. Ceph</h3> コンポーネント
___コードブロック_0___<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>コンポーネント</th>
<th>役割</th>
<th>分HA</th>
</tr>
</thead>
<tbody>
<tr>
<td>MON (モニター)</td>
<td>クラスター マップ、クォーラム、認証</td>
<td>3 (奇数)</td>
</tr>
<tr>
<td>MGR (マネージャー)</td>
<td>メトリクス、ダッシュボード、オーケストレーション</td>
<td>2 (アクティブ/スタンバイ)</td>
</tr>
<tr>
<td>OSD (オブジェクト ストレージ デーモン)</td>
<td>実際のデータ ストレージ、レプリケーション</td>
<td>3+ (ディスクごとに 1 つ)</td>
</tr>
<tr>
<td>MDS (メタデータ サーバー)</td>
<td>CephFS のメタデータ (CephFS を使用する場合のみ必要)</td>
<td>2 (アクティブ/スタンバイ)</td>
</tr>
<tr>
<td>RGW (RADOS ゲートウェイ)</td>
<td>オブジェクト ストレージ用の S3/Swift API</td>
<td>2+ (LB の後ろ)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-crush-algorithm">1.2。 CRUSH アルゴリズム</h3>
___コードブロック_1___

> ✅ テーブルを検索する必要がない → エクサバイトまでスケール可能
> ✅ 障害ドメイン対応 (ラック、ホスト、データセンター)
> ✅ クライアントはデータの場所を直接計算します

<hr>

<h2 id="phan-2-rook-la-gi">パート 2: ROOK — KUBERNETES の CEPH オペレーター</h2>

<h3 id="21-rook-architecture">2.1. Rook アーキテクチャ</h3>
___コードブロック_2___

<h3 id="22-so-sanh-storage">2.2.ストレージ ソリューションの比較</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>Rook-Ceph</th>
<th>ロングホーン</th>
<th>OpenEBS</th>
<th>ローカルパス</th>
</tr>
</thead>
<tbody>
<tr>
<td>ブロック ストレージ</td>
<td>✅ RBD</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>ファイルシステム (RWX)</td>
<td>✅ CephFS</td>
<td>❌ (NFS ハッキング)</td>
<td>_❌</td>
<td>❌</td>
</tr>
<tr>
<td>オブジェクト (S3)</td>
<td>✅ RGW</td>
<td>❌</td>
<td>❌</td>
<td>_❌</td>
</tr>
<tr>
<td>レプリケーション</td>
<td>3 ウェイ</td>
<td>3 ウェイ</td>
<td>3 ウェイ</td>
<td>❌_</td>
</tr>
<tr>
<td>パフォーマンス</td>
<td>素晴らしい__HTMLTAG_222___
<td>良い</td>
<td>良い</td>
<td>ベスト (ローカル)</td>
</tr>
<tr>
<td>複雑さ</td>
<td>高</td>
<td>低</td>
<td>平均</td>
<td>非常に低い</td>
</tr>
<tr>
<td>最小ノード数</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>CNCF</td>
<td>卒業</td>
<td>孵化中</td>
<td>サンドボックス</td>
___HTMLTAG_263__-</td>
</tr>
<tr>
<td>最適</td>
<td>制作</td>
<td>小さなクラスター</td>
<td>開発/テスト_</td>
<td>単一ノード</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>オンプレミスの実稼働環境には Rook-Ceph</strong> を選択してください: ユニファイド ストレージ (ブロック + FS + オブジェクト)、大規模で実証済み、CNCF 卒業済み。</p>

<hr>

<h2 id="phan-3-planning-ceph">パート 3: CEPH 用ハードウェアの計画</h2>

<h3 id="31-osd-node-sizing">3.1. OSD ノードのサイズ_</h3>
___コードブロック_3___

<h3 id="32-capacity-planning">3.2.キャパシティプランニング</h3>
___コードブロック_8___

<h3 id="33-network-planning">3.3.ネットワーク計画_</h3>
___コードブロック_4___

> ⚠️ クラスターネットワーク: 最小 10Gbps のため、回復はクライアント I/O に影響しません。

<hr>

<h2 id="phan-4-storage-types">パート 4: 3 種類のストレージ</h2>

<h3 id="41-block-rbd">4.1.ブロック ストレージ (RBD)</h3>
___コードブロック_5___

> ✅ データベース (PostgreSQL、MySQL) · ✅ ステートフル アプリケーション · ✅ 高 IOPS
> ⚠️ ReadWriteOnce — 一度に 1 つのポッド マウントのみ<h3 id="42-filesystem-cephfs">4.2.ファイルシステム ストレージ (CephFS)</h3>
___コードブロック_6___

> ✅ 共有ファイルストレージ (複数のポッドが一緒に読み取り/書き込み) · ✅ コンテンツ管理 · ✅ AI/ML トレーニング データ

<h3 id="43-object-rgw">4.3.オブジェクト ストレージ (RGW)</h3>
___コードブロック_7___

> ✅ バックアップストレージ · ✅ ログアーカイブ · ✅ MinIO/AWS S3 の置き換え

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Ceph</strong> = 統合ストレージ: 1 クラスター内のブロック + ファイルシステム + オブジェクト</li>
<li><strong>_CRUSH アルゴリズム</strong>: ルックアップ テーブルを使用せずにデータ位置を計算 → 無限にスケール__HTMLTAG_314___
<li><strong>Rook Operator</strong>: CRD を使用して K8 上の Ceph ライフサイクルを管理</li>
<li><strong>OSD ごとに 5GB RAM</strong>: ストレージ ノードのメモリを慎重に計画</li>
<li><strong>2 ネットワーク</strong>: トラフィックを分離するためのパブリック (クライアント) + クラスター (レプリケーション)</li>
<li><strong>レプリケーション 3x</strong>: 未加工容量 / 3 = 使用可能な容量</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: キャパシティ プランニング</h3>
<ul>
<li>使用可能な容量の計算: 5 ノード × 6 SSD × 1TB、レプリケーション = 3</li>
<li>Ceph に必要な RAM を計算します (OSD がそれぞれ 5GB)</li>
<li>Ceph クラスターのネットワーク トポロジを描画</li>
</ul>

<h3 id="bt2">演習 2: ディスクを準備する__HTMLTAG_346___
<ul>
<li>ワーカー ノード上の未使用のディスクを特定します: <code>lsblk</code></li>
<li>パーティションのないディスクを確認します: <code>wipefs -a /dev/sdX</code></li>
<li>レッスン 12 用のディスクを準備します</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_363___レッスン 12: Rook-Ceph Operator と CephCluster のインストール</strong> では、Rook Operator をデプロイし、K8 に CephCluster を作成します。</p>