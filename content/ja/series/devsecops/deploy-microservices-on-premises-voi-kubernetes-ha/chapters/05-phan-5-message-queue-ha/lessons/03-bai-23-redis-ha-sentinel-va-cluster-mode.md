---
id: 019e1a00-aa01-7001-c001-k8sha000503
title: 'レッスン 23: REDIS HA — センチネルおよびクラスター モード'
slug: bai-23-redis-ha-sentinel-va-cluster-mode
description: Sentinel (マスター レプリカ) と Cluster (シャーディング) の 2 つのモード、キャッシュ戦略、永続性、モニタリング、ベスト プラクティスを使用して、Kubernetes に Redis HA をデプロイします。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 23
section_title: 'パート 5: メッセージ キュー HA (RabbitMQ、Kafka、Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2982" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2982)"/>

  <!-- Decorations -->
  <g>
    <circle cx="920" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: REDIS HA — センチネルとクラスター</tspan>
      <tspan x="60" dy="42">モード</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: メッセージ キュー HA (RabbitMQ、Kafka、Redis)</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ Redis Sentinel とクラスター モードを理解する — いつ何を使用するか</li>
<li>✅ Redis Sentinel HA を Kubernetes にデプロイ</li>
<li>✅ Redis クラスター モードのデプロイ (シャーディング)</li>
<li>✅ 永続化構成: RDB と AOF</li>
<li>✅ キャッシュ戦略とベスト プラクティス</li>
<li>✅ Prometheus を使用した Redis の監視</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">パート 1: REDIS HA — SENTINEL 対 CLUSTER</h2>

___コードブロック_0___<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>機能</th><th>センチネルモード</th><th>クラスターモード</th></tr>
</thead>
<tbody>
<tr><td>データ配布</td><td>マスター上のすべてのデータ</td><td>シャーディング (ハッシュ スロット)</td></tr>
<tr><td>最大データセット サイズ</td><td>単一ノード RAM_</td><td>_すべてのマスター RAM の合計_</td></tr>
<tr><td>リードスケーリング_</td><td>リードレプリカ_</td><td>_シャードごとのリードレプリカ_</td></tr>
<tr><td>書き込みスケーリング_</td><td>単一マスターのみ</td><td>複数マスター (水平)</td></tr>
<tr><td>フェイルオーバー</td><td>Sentinel クォーラム投票</td><td>組み込み (ゴシップ プロトコル)</td></tr>
<tr><td>マルチキー操作</td><td>サポート</td><td>同じハッシュスロット({tag})のみ</td></tr>
<tr><td>複雑さ</td><td>シンプル</td><td>さらに複雑</td></tr>
<tr><td>最適な用途</td><td>キャッシュ、セッション (<32GB)_</td><td>大規模なデータセット、高い書き込みスループット__HTMLTAG_161___</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-sentinel">パート 2: REDIS SENTINEL HA</h2> のデプロイ

<h3 id="21-helm-install">2.1. Bitnami Helm Chart</h3> を使用してインストールする
___コードブロック_1___

<h3 id="22-custom-values">2.2.カスタム値ファイル (詳細)</h3>
___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-cluster-mode">パート 3: REDIS クラスター モードのデプロイ</h2>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-4-persistence">パート 4: 永続性 — RDB と AOF</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>機能</th><th>RDB (スナップショット)</th><th>AOF (追加専用ファイル)</th><th>RDB + AOF</th></tr>
</thead>
<tbody>
<tr><td>メカニズム</td><td>ポイントインタイムスナップショット</td><td>すべての書き込み操作をログ</td><td>両方</td></tr>
<tr><td>データ損失_</td><td>最後のスナップショットまで</td><td>~1 秒 (毎秒 appendfsync)</td><td>最小限</td></tr>
<tr><td>回復速度</td><td>速い(バイナリのロード)</td><td>遅い(再生操作)</td><td>最初にRDBを使用</td></tr>
<tr><td>ディスク I/O</td><td>周期的バースト (フォーク)</td><td>連続 (小規模書き込み)</td><td>両方</td></tr>
<tr><td>ファイル サイズ</td><td>コンパクト_</td><td>大きい (書き換えが便利)</td><td>両方のファイル</td></tr>
<tr><td>最適な用途</td><td>キャッシュ (許容損失)</td><td>セッション ストア (最小限の損失)</td><td>本番環境 (推奨)</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_6___

<hr>

<h2 id="phan-5-caching">パート 5: キャッシュ戦略</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-6-app-connection">パート 6: アプリケーション接続</h2>

___コードブロック_9___

<hr>

<h2 id="phan-7-monitoring">パート 7: 監視</h2>

___コードブロック_10___

___コードブロック_11___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_Sentinel</strong>: シンプルな HA、シングルマスター、__HTMLTAG_273___ に適しています
<li><strong>クラスター</strong>: 水平スケーリング、マルチマスター、大規模なデータセット用</li>
<li><strong>永続性</strong>: 実稼働用の RDB + AOF、耐久性とパフォーマンスのバランス</li>
<li><strong>maxmemory-policy</strong>: キャッシュ用に最も一般的な allkeys-lru</li>
<li><strong>_キャッシュアサイド</strong>: 推奨パターン、書き込み時に無効化</li>
<li><strong>モニター</strong>: キャッシュ ヒット率 > 90%、メモリ使用量、エビクション</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: Redis Sentinel フェイルオーバー</h3>
<ul>
<li>Redis Sentinel 3 ノードのデプロイ</li>
<li>マスターにデータを書き込み、マスター ポッドを強制終了</li>
<li>Sentinel がレプリカをプロモートし、データがそのままであることを確認__HTMLTAG_306___
</ul><h3 id="bt2">演習 2: ベンチマーク</h3>
<ul>
<li>redis-benchmark の実行: 100,000 キーの SET/GET</li>
<li>レイテンシーの比較: 永続性の有無__HTMLTAG_314___
<li>メモリ断片化率を監視</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_322___レッスン 24: Istio サービス メッシュ アーキテクチャ</strong> では、サービス メッシュを学習し、マイクロサービス通信用に Istio をデプロイします。</p>