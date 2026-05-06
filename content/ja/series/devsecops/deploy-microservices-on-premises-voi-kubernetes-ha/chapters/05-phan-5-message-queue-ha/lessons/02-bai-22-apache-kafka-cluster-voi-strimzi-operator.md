---
id: 019e1a00-aa01-7001-c001-k8sha000502
title: 'レッスン 22: STRIMZI オペレーターを使用した APACHE Kafka クラスター'
slug: bai-22-apache-kafka-cluster-voi-strimzi-operator
description: Strimzi Operator、KRaft モード (Zookeeper なし)、トピック管理、コンシューマー グループ、スキーマ レジストリ、および監視を使用して、Apache Kafka HA クラスターを Kubernetes にデプロイします。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 5: メッセージ キュー HA (RabbitMQ、Kafka、Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3046" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3046)"/>

  <!-- Decorations -->
  <g>
    <circle cx="913" cy="129" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="726" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1039" cy="195" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="852" cy="228" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="978.444863728671,132 978.444863728671,166 949,183 919.555136271329,166 919.555136271329,132 949,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 22: STRIMZI を使用した APACHE KAFKA クラスター</tspan>
      <tspan x="60" dy="42">オペレーター</tspan>
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
<li>✅ Kafka アーキテクチャを理解する: ブローカー、トピック、パーティション、コンシューマ グループ</li>
<li>✅ Strimzi を使用した Kafka 3 ノード クラスターのデプロイ (KRaft モード)</li>
<li>✅ トピック、レプリケーション、保持の構成</li>
<li>✅ スキーマ進化のためのスキーマ レジストリのデプロイ</li>
<li>✅ JMX メトリクス + Prometheus を使用して Kafka クラスターを監視</li>
<li>✅ ベスト プラクティス: パーティショニング戦略、コンシューマ ラグ、厳密に 1 回</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">パート 1: APACHE KAFKA アーキテクチャ</h2>

___コードブロック_0___<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>特徴</th><th>カフカ</th><th>RabbitMQ</th></tr>
</thead>
<tbody>
<tr><td>スループット</td><td>数百万メッセージ/秒</td><td>数万</td></tr>
<tr><td>メッセージ モデル</td><td>プル (消費者投票)</td><td>プッシュ (ブローカーによる配信)</td></tr>
<tr><td>注文_</td><td>パーティションごと</td><td>キューごと (FIFO)</td></tr>
<tr><td>保存期間</td><td>時間/サイズベース (日/週)</td><td>消費されるまで</td></tr>
<tr><td>再生</td><td>はい (オフセットシーク)</td><td>いいえ(ACK 後にメッセージ削除)</td></tr>
<tr><td>ユースケース</td><td>イベントストリーミング、CDC、ログ</td><td>タスクキュー、RPC、ルーティング</td></tr>
<tr><td>プロトコル_</td><td>Kafkaバイナリプロトコル_</td><td>AMQP 0.9.1</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-strimzi">パート 2: STRIMZI OPERATOR のインストール</h2>

___コードブロック_1___

<hr>

<h2 id="phan-3-deploy-kafka">パート 3: KAFKA クラスターのデプロイ (KRaft モード)</h2>

<h3 id="31-kafka-crd">3.1.カフカ CRD</h3>
___コードブロック_2___

<h3 id="32-jmx-config">3.2. JMX メトリック構成マップ</h3>
___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-topics">パート 4: トピック管理</h2>

<h3 id="41-kafka-topic">4.1. KafkaTopic CRD</h3>
___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-users">パート 5: KAFKA ユーザーと ACL</h2>

___コードブロック_7___

<hr>

<h2 id="phan-6-produce-consume">パート 6: 生産と消費のテスト</h2>

___コードブロック_8___

<hr>

<h2 id="phan-7-schema-registry">パート 7: スキーマ レジストリ</h2>

___コードブロック_9___

<hr>

<h2 id="phan-8-monitoring">パート 8: KAFKA の監視</h2>

___コードブロック_10___

___コードブロック_11___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_Strimzi オペレーター</strong>: K8 で Kafka を実行する最良の方法、完全なライフサイクル管理</li>
<li><strong>KRaft モード</strong>: ZooKeeper への依存関係がなく、よりシンプルなアーキテクチャ</li>
<li><strong>レプリケーション係数 3、min.insync.replicas 2</strong>: 1 つのブローカー障害を許容</li>
<li><strong>パーティション戦略</strong>: 順序付けのためのキーベースのパーティション化、スループットのためのパーティションの増加</li>
<li><strong>消費者グループ</strong>: 並列処理、遅延を注意深く監視</li>
<li><strong>_スキーマ レジストリ</strong>: スキーマの進化を強制し、重大な変更を防止</li>
</ol>

<hr><h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: Kafka HA ラボ</h3>
<ul>
<li>KRaft を使用した 3 ノード Kafka クラスターのデプロイ</li>
<li>6 つのパーティションを含むトピックを作成、RF=3</li>
<li>100,000 個のメッセージを生成し、1 人のブローカーを強制終了</li>
<li>データ損失がないことを確認し、消費者が追いつく__HTMLTAG_227___
</ul>

<h3 id="bt2">演習 2: パフォーマンス ベンチマーク</h3>
<ul>
<li>異なるバッチ サイズで kafka-Producer-perf-test.sh を実行</li>
<li>スループットの測定: メッセージ/秒、MB/秒</li>
<li>圧縮の比較: none vs lz4 vs snappy vs zstd</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_243___レッスン 23: Redis HA — センチネルおよびクラスター モード</strong> では、キャッシュとリアルタイム データのために Redis をデプロイします。</p>