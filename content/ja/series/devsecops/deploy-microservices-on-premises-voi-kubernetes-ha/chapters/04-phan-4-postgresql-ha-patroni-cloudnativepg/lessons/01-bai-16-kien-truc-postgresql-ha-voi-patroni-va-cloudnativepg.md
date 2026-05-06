---
id: 019e1a00-aa01-7001-c001-k8sha000401
title: 'レッスン 16: PATRONI と CLOUDNATIVEPG を使用した POSTGRESQL HA アーキテクチャ'
slug: bai-16-kien-truc-postgresql-ha-voi-patroni-va-cloudnativepg
description: K8s 上の PostgreSQL HA、ストリーミング レプリケーション アーキテクチャ、同期と非同期、フェイルオーバー メカニズム、および接続プーリングについて、Patroni と CloudNativePG を比較します。
duration_minutes: 120
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai16-postgresql-ha-patroni.png
sort_order: 16
section_title: 'パート 4: Patroni と CloudNativePG を使用した PostgreSQL HA'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4480" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4480)"/>

  <!-- Decorations -->
  <g>
    <circle cx="685" cy="205" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="770" cy="90" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="855" cy="235" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="940" cy="120" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="265" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="55" x2="1100" y2="135" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="85" x2="1050" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16:</tspan> を使用した POSTGRESQL HA アーキテクチャ
      <tspan x="60" dy="42">パトローニとクラウドナティブPG</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: Patroni と PostgreSQL HA を使用するCloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ PostgreSQL ストリーミング レプリケーションについて</li>
<li>✅ Patroni、CloudNativePG、PGO (CrunchyData) の比較</li>
<li>✅ 同期レプリケーションと非同期レプリケーションについて__HTMLTAG_77___
<li>✅ HA アーキテクチャ: プライマリ/スタンバイ、フェイルオーバー、フェンシング</li>
<li>✅ PgBouncer による接続プーリング</li>
</ul>

<hr>

<h2 id="phan-1-postgresql-replication">パート 1: POSTGRESQL レプリケーション</h2>

<h3 id="11-streaming-replication">1.1.ストリーミング レプリケーション</h3>
___コードブロック_0___

> ✅ プライマリ: 書き込みを受信し、WAL をスタンバイにストリーミングします
> ✅ スタンバイ: WAL を再生し、読み取りクエリを処理します
> ✅ フェイルオーバー: スタンバイをプライマリに昇格させます

<h3 id="12-sync-vs-async">1.2。同期と非同期</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>モード</th>
<th>同期</th>
<th>非同期</th>
</tr>
</thead>
<tbody>
<tr>
<td>データ セーフティ</td>
<td>データ損失ゼロ (RPO=0)</td>
<td>データ損失の可能性</td>
</tr>
<tr>
<td>書き込み遅延</td>
<td>高い(スタンバイACKを待つ)</td>
<td>下へ (お待ちください)</td>
</tr>
<tr>
<td>スループット</td>
<td>下位</td>
<td>上位</td>
</tr>
<tr>
<td>ネットワーク依存性</td>
<td>強い (レイテンシは書き込みに影響します)</td>
<td>弱い</td>
</tr>
<tr>
<td>_最適</td>
<td>財務、重要なデータ</td>
<td>ほとんどのアプリケーション</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-so-sanh-operators">パート 2: POSTGRESQL 演算子を比較</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>基準</th>
<th>CloudNativePG</th>
<th>パトローニ (ザランド)</th>
<th>PGO (CrunchyData)</th>
</tr>
</thead>
<tbody>
<tr>
<td>アーキテクチャ</td>
<td>K8s ネイティブ オペレーター__HTMLTAG_168___
<td>サイドカー + DCS</td>
<td>K8s オペレーター</td>
</tr>
<tr>
<td>フェイルオーバー</td>
<td>K8s コントローラー</td>
<td>DCS 経由の Raft のような</td>
<td>K8s コントローラー</td>
</tr>
<tr>
<td>DCS 依存性_</td>
<td>❌ 不要 (K8 を使用)</td>
<td>✅ etcd/Consul/K8s が必要</td>
<td>❌ 不要</td>
</tr>
<tr>
<td>バックアップ</td>
<td>バーマン (S3/ローカル)</td>
<td>WAL-G、pgBackRest</td>
<td>pgBackRest</td>
</tr>
<tr>
<td>接続プーリング__HTMLTAG_206___
<td>PgBouncer 内蔵</td>
<td>別途設定が必要</td>
<td>PgBouncer 内蔵</td>
</tr>
<tr>
<td>CNCF</td>
<td>サンドボックス</td>
<td>コミュニティ</td>
<td>コミュニティ</td>
</tr>
<tr>
<td>ライセンス</td>
<td>Apache 2.0</td>
<td>MIT</td>
<td>Apache 2.0</td>
</tr>
<tr>
<td>複雑さ</td>
<td>低</td>
<td>平均</td>
<td>平均</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>CloudNativePG を選択</strong>: K8s ネイティブ、外部 DCS 不要、CNCF プロジェクト、統合バックアップ、K8s の Patroni より簡単。</p>

<hr>

<h2 id="phan-3-cloudnativepg-architecture">パート 3: CLOUDNATIVEPG アーキテクチャ</h2>

___コードブロック_1___

<h3 id="31-failover-flow">3.1.フェイルオーバー フロー</h3>
___コードブロック_2___

<hr>

<h2 id="phan-4-pgbouncer">パート 4: 接続プーリング — PGBOUNCER</h2>

___コードブロック_3___

<hr>

<h2 id="phan-5-storage-considerations">パート 5: ストレージに関する考慮事項</h2>

___コードブロック_4___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>CloudNativePG</strong>: K8s ネイティブ、etcd/Consul 不要、自動フェイルオーバー</li>
<li><strong>_ストリーミング レプリケーション</strong>: WAL ストリーミング経由のプライマリ → スタンバイ</li>
<li><strong>データ損失ゼロの場合は同期</strong>、スループットの場合は__HTMLTAG_277___非同期</strong></li>
<li><strong>PgBouncer</strong>: 接続プーリングがデータベース プロセスの 20 倍に削減</li>
<li><strong>Ceph RBD</strong> (ReadWriteOnce) はデータベース PV</li> に適しています
<li><strong>3 サービス</strong>: rw (プライマリ)、ro (スタンバイ)、r (任意のインスタンス)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: 調査</h3>
<ul>
<li>CloudNativePG ドキュメントを読む</li>
<li>3 つの演算子を比較: CNPG vs Patroni vs PGO</li>
<li>_ユースケースに応じて同期か非同期かを決定__HTMLTAG_304___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_310___レッスン 17: CloudNativePG Operator と PostgreSQL クラスターのデプロイ</strong> では、CloudNativePG をインストールし、PostgreSQL クラスター 3 インスタンスを作成します。</p>