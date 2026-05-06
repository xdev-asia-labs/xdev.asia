---
id: 019e1a00-aa01-7001-c001-k8sha000304
title: 'レッスン 14: CEPHFS — 読み取り書き込み用の共有ファイルシステム'
slug: bai-14-cephfs-shared-filesystem-cho-readwritemany
description: CephFilesystem、CephFS 用の StorageClass (ReadWriteMany) を作成し、MDS をデプロイし、複数のポッド、クォータ、およびサブボリューム間の共有ストレージをテストします。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 3: 分散ストレージ — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: CEPHFS —</tspan> の共有ファイル システム
      <tspan x="60" dy="42">読み取り書き込み多数</tspan>
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
<li>✅ CephFilesystem と MetadataServer (MDS) の作成</li>
<li>✅ ReadWriteMany を使用して CephFS 用の StorageClass を作成</li>
<li>✅ 複数のポッドから同時に CephFS をマウント__HTMLTAG_77___
<li>✅ クォータとサブボリューム グループを構成する</li>
<li>✅ RBD と CephFS の使用例を比較</li>
</ul>

<hr>

<h2 id="phan-1-cephfs-vs-rbd">パート 1: CEPHFS 対 RBD — いつ何を使用するか?</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>RBD (ブロック)</th>
<th>CephFS (ファイルシステム)</th>
</tr>
</thead>
<tbody>
<tr>
<td>アクセス モード_</td>
<td>ReadWriteOnce (RWO)</td>
<td>ReadWriteMany (RWX)</td>
</tr>
<tr>
<td>_マウント スタイル</td>
<td>1 つの単一ポッド</td>
<td>同時に複数のポッド</td>
</tr>
<tr>
<td>ユースケース</td>
<td>データベース、単一アプリ</td>
<td>共有コンテンツ、ログ、メディア</td>
</tr>
<tr>
<td>パフォーマンス</td>
<td>高 (ブロックレベル)</td>
<td>良好 (POSIX オーバーヘッド)</td>
</tr>
<tr>
<td>データシートが必要ですか?</td>
<td>いいえ</td>
<td>はい</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-tao-cephfilesystem">パート 2: CEPHFILESYSTEM の作成</h2>

<h3 id="21-cephfilesystem-crd">2.1. CephFilesystem CRD</h3>
___コードブロック_0______コードブロック_1___

<h3 id="22-storageclass-cephfs">2.2. CephFS の StorageClass</h3>
___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-readwritemany">パート 3: 多数の読み取り書き込みテスト</h2>

<h3 id="31-tao-rwx-pvc">3.1. RWX PVC</h3> を作成する
___コードブロック_4___

<h3 id="32-nhieu-pods-cung-mount">3.2.同じマウントを持つ複数のポッド</h3>
___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-4-quotas">パート 4: クォータとサブボリューム__HTMLTAG_158___

___コードブロック_7___

<h3 id="41-cleanup">4.1.クリーンアップ</h3>
___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>CephFS</strong> (ReadWriteMany の場合) — 複数のポッドが同じボリュームの読み取り/書き込み</li>
<li><strong>MDS (メタデータ サーバー)</strong> ファイル システム メタデータの管理</li>
<li><strong>アクティブスタンバイ: true</strong> MDS HA を確保</li>
<li><strong>RWX の使用例</strong>: 共有コンテンツ、ログ、メディア、AI トレーニング データ</li>
<li><strong>_データベースの場合は RBD、共有ファイルの場合は CephFS</strong></li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_188___

<h3 id="bt1">演習 1: RWX ラボ</h3>
<ul>
<li>CephFilesystem、StorageClass、PVC (RWX) の作成</li>
<li>3 つのライター ポッド + 1 つのリーダー ポッドをデプロイ__HTMLTAG_195___
<li>すべてのポッドが同じボリュームの読み取り/書き込みを確認する__HTMLTAG_197___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_203___レッスン 15: Ceph の監視、調整、トラブルシューティング</strong> では、Ceph のパフォーマンスを監視し、パラメータを調整し、一般的な問題に対処します。</p>