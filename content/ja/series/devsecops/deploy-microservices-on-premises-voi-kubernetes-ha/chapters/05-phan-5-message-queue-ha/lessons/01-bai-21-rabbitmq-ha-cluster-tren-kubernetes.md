---
id: 019e1a00-aa01-7001-c001-k8sha000501
title: 'レッスン 21: Kubernetes 上の RABBITMQ HA クラスター'
slug: bai-21-rabbitmq-ha-cluster-tren-kubernetes
description: RabbitMQ Cluster Operator、クォーラム キュー、TLS、モニタリング、マイクロサービス メッセージングのベスト プラクティスを使用して、Kubernetes に RabbitMQ HA クラスターをデプロイします。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai21-rabbitmq-ha-cluster.png
sort_order: 21
section_title: 'パート 5: メッセージ キュー HA (RabbitMQ、Kafka、Redis)'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6056" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6056)"/>

  <!-- Decorations -->
  <g>
    <circle cx="737" cy="101" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="874" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1011" cy="235" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="648" cy="172" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="109" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: RABBITMQ HA クラスター オン</tspan>
      <tspan x="60" dy="42">_KUBERNETES_</tspan>
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
<li>✅ RabbitMQ クラスターのアーキテクチャとメッセージング パターンを理解する</li>
<li>✅ Cluster Operator を使用して RabbitMQ 3 ノード クラスターをデプロイ</li>
<li>✅ HA のクォーラム キューを構成する</li>
<li>✅ TLS 暗号化と認証をセットアップする</li>
<li>✅ Prometheus を使用して RabbitMQ クラスターを監視</li>
<li>✅ ベスト プラクティス: メッセージの耐久性、DLQ、フロー制御</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">パート 1: RABBITMQ クラスター アーキテクチャ</h2>

<h3 id="11-overview">1.1.メッセージング パターン</h3>
___コードブロック_0___

<h3 id="12-cluster-arch">1.2。 RabbitMQ クラスターのアーキテクチャ</h3>
___コードブロック_1___

> クォーラム キュー: Raft コンセンサス → データが多数派にわたって複製される
> クラシック キュー: 1 ノードのみ (ミラーリング = 非推奨)<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>機能</th><th>クラシックキュー</th><th>クォーラムキュー</th><th>ストリーム</th></tr>
</thead>
<tbody>
<tr><td>レプリケーション</td><td>なし(ミラーリングは非推奨)</td><td>Raftベース(大部分)_</td><td>_追加専用ログ</td></tr>
<tr><td>データ セーフティ</td><td>低</td><td>高</td><td>高</td></tr>
<tr><td>パフォーマンス</td><td>最高</td><td>良好 (わずかに低い)</td><td>ファンアウトに最適</td></tr>
<tr><td>ユースケース</td><td>一時的/非クリティカル</td><td>ビジネスクリティカル</td><td>イベントストリーミング</td></tr>
<tr><td>注文_</td><td>FIFO</td><td>FIFO</td><td>パーティションごとのFIFO</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-install-operator">パート 2: RABBITMQ クラスター オペレーターのインストール</h2>

<h3 id="21-install">2.1.オペレーターをインストール</h3>
___コードブロック_2___

<h3 id="22-namespace">2.2.メッセージング用の名前空間の作成</h3>
___コードブロック_3___

<hr>

<h2 id="phan-3-deploy-cluster">パート 3: RABBITMQ HA クラスターのデプロイ</h2>

<h3 id="31-cluster-crd">3.1. RabbitmqCluster CRD</h3>
___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-4-quorum-queues">パート 4: クォーラム キューとポリシー</h2>

<h3 id="41-create-queues">4.1.クォーラム キューの作成</h3>
___コードブロック_6___

<h3 id="42-vhost">4.2.仮想ホストとユーザー</h3>
___コードブロック_7___

<hr>

<h2 id="phan-5-tls">パート 5: TLS 暗号化</h2>

___コードブロック_8___

<hr>

<h2 id="phan-6-monitoring">パート 6: 監視</h2>

___コードブロック_9___

___コードブロック_10___

<hr>

<h2 id="phan-7-app-integration">パート 7: アプリケーションの統合</h2>

___コードブロック_11___

___コードブロック_12___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>_クォーラム キュー</strong>: Raft ベースのレプリケーション、常に本番環境に使用</li>
<li><strong>クラスタ オペレータ</strong>: K8 上の宣言型 RabbitMQ、自動クラスタリング</li>
<li><strong>3 ノード クラスター</strong>: 1 ノードの障害を許容します (大部分 = 2)</li>
<li><strong>デッドレターキュー</strong>: 有害なメッセージを処理し、ロジックを再試行</li>
<li><strong>TLS + vhosts</strong>: サービスを分離し、転送中に暗号化</li>
<li><strong>pause_minority</strong>: スプリット ブレイン パーティションの処理を防止</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">演習 1: RabbitMQ HA ラボ</h3>
<ul>
<li>3 ノード RabbitMQ クラスターのデプロイ</li>
<li>DLQ を使用してクォーラム キューを作成</li>
<li>10,000 メッセージをパブリッシュし、1 ノードを強制終了し、メッセージ損失がないことを確認</li>
</ul>

<h3 id="bt2">_演習 2: モニタリングの設定__HTMLTAG_229___
<ul>
<li>PodMonitor の構成</li>
<li>RabbitMQ Grafana ダッシュボードのインポート (ID: 10991)</li>
<li>キューのバックログが 5000 を超えるアラートを作成</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_242___レッスン 22: Strimzi Operator を使用した Apache Kafka クラスター</strong> では、高スループットのイベント ストリーミング用に Kafka をデプロイします。</p>