---
id: 019c9618-0304-7000-8000-c1147ba22e13
title: 'レッスン 21: 動的リソース割り当て (DRA) — GA K8S 1.34'
slug: bai-21-dynamic-resource-allocation-dra
description: K8s 1.34 からの動的リソース割り当て (DRA) GA — 古い拡張リソースを置き換えます。 ResourceClaim、DeviceClass、GPU 共有、FPGA 割り当て。 AI/ML ワークロード向けの DRA を備えた NVIDIA GPU Operator。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 21
section_title: 'モジュール 5: ワークロード管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9415" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9415)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.650635094611,187.5 1021.650635094611,212.5 1000,225 978.349364905389,212.5 978.349364905389,187.5 1000,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: 動的リソース割り当て (DRA)</tspan>
      <tspan x="60" dy="42"> GA K8S 1.34</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 5: ワークロード管理__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目的_</h2><p>K8s 1.34 の動的リソース割り当て (DRA) GA とは何か、それが古い拡張リソースよりも優れている理由、ResourceClaim と DeviceClass を使用して AI/ML ワークロードに GPU、FPGA を割り当てる方法を理解します。</p>

<h2>1.拡張リソースに関する問題 Old</h2>
<p>DRA が導入される前、Kubernetes は GPU:</p> を管理するために__HTMLTAG_74___拡張リソース</strong> を使用していました。
___コードブロック_0___
<p>欠点:</p>
<ul>
  <li><strong>全か無か</strong>: 複数のポッド間で GPU を共有できません</li>
  <li><strong>構造化パラメーターなし</strong>: GPU タイプ、メモリ、MIG パーティションを指定できません</li>
  <li><strong>トポロジ認識なし</strong>: どの GPU がどの PCIe スイッチにあるのかわからない</li>
  <li><strong>割り当て解除フックなし</strong>: ポッド終了時のクリーンアップなし</li>
</ul>

<h2>2.動的リソース割り当て (DRA) — GA K8s 1.34</h2>
<p>DRA は、__HTMLTAG_100___構造化パラメータ</strong>.</p> を使用してハードウェア リソースを割り当てるための柔軟な API を提供します。

<h3>2.1 DRA アーキテクチャ</h3>
<ul>
  <li><strong>DeviceClass</strong>: デバイス タイプ (GPU、FPGA、NIC) を定義します — インフラストラクチャ チーム__HTMLTAG_109___ によって作成されました
  <li><strong>ResourceClaim</strong>: デバイス固有のリクエスト — アプリチームによって作成</li>
  <li><strong>ResourceClaimTemplate</strong>: Deployment/StatefulSet 内の各ポッドに ResourceClaim を作成</li>
  <li><strong>_ResourceSlice</strong>: 各ノードで利用可能なデバイスに関する情報 (ドライバーによって公開)</li>
</ul><h3>2.2 デバイスクラス</h3>
___コードブロック_1___

<h3>2.3 ResourceClaim — GPU 固有の要件__HTMLTAG_126___
___コードブロック_2___

<h3>2.4 ポッドは ResourceClaim を使用します</h3>
___コードブロック_3___

<h3>2.5 ResourceClaimTemplate — デプロイメント用</h3>
___コードブロック_4___

<h2>3. DRA</h2> による GPU タイム スライシング
<p>タイムスライスを使用して複数のポッドで 1 GPU を共有:</p>
___コードブロック_5___

<h2>4.マルチインスタンス GPU (MIG) パーティショニング</h2>
<p>MIG (マルチインスタンス GPU) は、A100/H100 GPU を独立したパーティションに分割します:</p>
___コードブロック_6___

<h2>5. DRA</h2> を備えた NVIDIA GPU オペレーター
___コードブロック_7___

<h2>6.比較: 拡張リソースと DRA</h2>
___コードブロック_8___

<h2>7.その他の使用例_</h2>
<ul>
  <li><strong>_FPGA</strong>: 推論、暗号化、ネットワーク処理を高速化</li>
  <li><strong>RDMA NIC</strong>: 分散トレーニング用の高速ネットワーキング</li>
  <li><strong>カスタム ASIC</strong>: TPU、カスタム AI アクセラレータ</li>
  <li><strong>SR-IOV ネットワーク インターフェイス</strong>: 高性能ネットワーキングのための仮想関数</li>
</ul>

<h2>概要</h2>
<ul>
  <li>DRA GA K8s 1.34: 拡張リソースを柔軟な割り当てに置き換えます</li>
  <li>DeviceClass: ハードウェア タイプを定義します__HTMLTAG_169___
  <li>ResourceClaim: CEL セレクターを使用した特定のリクエスト</li>
  <li>GPU 共有のサポート: タイムスライスと MIG パーティショニング</li>
  <li>NVIDIA GPU オペレーター: 最新バージョンからの DRA サポート</li>
</ul>