---
id: 019e1a00-aa01-7001-c001-k8sha001201
title: 'レッスン 46: 実稼働準備チェックリスト'
slug: bai-46-production-readiness-checklist
description: '包括的な運用準備状況のレビュー: インフラストラクチャ、セキュリティ、可観測性、信頼性、パフォーマンス、コンプライアンス チェックリスト、および稼働計画。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 46
section_title: 'パート 12: 生産業務とキャップストーン プロジェクト'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6526" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6526)"/>

  <!-- Decorations -->
  <g>
    <circle cx="889" cy="237" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="967" cy="115" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="253" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 46</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 46: 本番準備チェックリスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 12: 制作オペレーションとキャップストーン プロジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ 本番準備状況レビュー フレームワーク__HTMLTAG_69___
<li>✅ インフラストラクチャ チェックリスト</li>
<li>✅ セキュリティ強化チェックリスト</li>
<li>✅ 可観測性と信頼性チェックリスト</li>
<li>✅ 導入計画と変更管理</li>
</ul>

<hr>

<h2 id="phan-1-infrastructure">パート 1: インフラストラクチャ チェックリスト</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>カテゴリ</th><th>アイテム</th><th>ステータス</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>K8s クラスター</td><td>3+ コントロール プレーン ノード (HA)</td><td>☐</td></tr>
<tr><td>2</td><td>K8s クラスター</td><td>3+ ワーカー ノード (非アフィニティ)</td><td>☐</td></tr>
<tr><td>3</td><td>K8s クラスター</td><td>etcd バックアップのスケジュール (時間ごと)</td><td>☐</td></tr>
<tr><td>4</td><td>K8s クラスター</td><td>Kubernetes の現在のバージョン (N-1)</td><td>☐</td></tr>
<tr><td>5</td><td>ネットワーク</td><td>CNI インストール済み (Cilium) + ネットワークポリシー</td><td>☐</td></tr>
<tr><td>6</td><td>ネットワーク</td><td>MetalLB ロードバランサーの構成</td><td>☐</td></tr>
<tr><td>7</td><td>ネットワーキング</td><td>Istio サービス メッシュ + mTLS</td><td>☐</td></tr>
<tr><td>8</td><td>ストレージ</td><td>Rook-Cephクラスタは正常(3+OSD)</td><td>☐</td></tr>
<tr><td>9</td><td>Storage</td><td>StorageClass のデフォルト設定</td><td>☐</td></tr>
<tr><td>10_</td><td>ストレージ</td><td> VolumeSnapshot クラスの構成</td><td>☐</td></tr>
<tr><td>11</td><td>データベース</td><td>PostgreSQL HA (3 レプリカ、同期レプリケーション)</td><td>☐</td></tr>
<tr><td>12</td><td>データベース</td><td>自動バックアップ + PITRテスト</td><td>☐</td></tr>
<tr><td>13</td><td>データベース</td><td>接続プーリング (PgBouncer)</td><td>☐</td></tr>
<tr><td>14</td><td>MQ</td><td>RabbitMQ/Kafka クラスター HA</td><td>☐</td></tr>
<tr><td>15</td><td>キャッシュ</td><td>Redis Sentinel/Cluster HA</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html--><hr>

<h2 id="phan-2-security">パート 2: セキュリティ チェックリスト</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>_#</th><th>アイテム</th><th>_ステータス</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>RBAC: アプリケーションのクラスター管理者なし_</td><td>☐</td></tr>
<tr><td>2</td><td>ポッド セキュリティ標準: 制限付き適用</td><td>☐</td></tr>
<tr><td>3</td><td>ServiceAccount: 自動マウントが無効になっています</td><td>_☐</td></tr>
<tr><td>4</td><td>シークレット: Vault に保存 (プレーンな K8 シークレットではない)</td><td>☐</td></tr>
<tr><td>_5</td><td>ネットワーク ポリシー: 名前空間ごとのデフォルトのすべて拒否_</td><td>☐</td></tr>
<tr><td>6</td><td>Kyverno: 検証ポリシーが適用されました</td><td>☐</td></tr>
<tr><td>7</td><td>Falco: ランタイム セキュリティ監視がアクティブ</td><td>☐</td></tr>
<tr><td>8</td><td>Harbor: スキャンされた画像、重要な CVE なし</td><td>☐</td></tr>
<tr><td>9</td><td>画像署名: 署名検証が有効</td><td>☐</td></tr>
<tr><td>_10_</td><td>監査ログ: 有効、Loki に転送</td><td>☐</td></tr>
<tr><td>11</td><td>etcd 保存時の暗号化が有効</td><td>☐</td></tr>
<tr><td>12</td><td>どこでもTLS (Istio mTLS + ingress TLS)</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-observability">パート 3: 観察可能性チェックリスト</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>アイテム</th><th>ステータス</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Prometheus: すべてのサービスのメトリクス収集_</td><td>☐</td></tr>
<tr><td>2</td><td>Loki: 構造化 JSON による集中ログ</td><td>☐</td></tr>
<tr><td>3</td><td>テンポ: OTel を使用した分散トレース_</td><td>☐</td></tr>
<tr><td>4</td><td>Grafana: 3 レベルのダッシュボード (プラットフォーム → サービス → リクエスト)</td><td>☐</td></tr>
<tr><td>_5</td><td>相関: トレース-ログ-メトリックのリンクが構成されました</td><td>☐</td></tr>
<tr><td>6</td><td>SLO の定義: サービスごとの可用性 + レイテンシー_</td><td>☐</td></tr>
<tr><td>_7</td><td>アラート: マルチバーンレート SLO アラート</td><td>☐</td></tr>
<tr><td>8</td><td>アラートルーティング: クリティカル→PagerDuty、警告→Slack_</td><td>☐</td></tr>
<tr><td>_9</td><td>オンコールローテーションの設定</td><td>☐</td></tr>
<tr><td>10</td><td>アラートにリンクされたランブック</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-4-reliability">パート 4: 信頼性チェックリスト</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>アイテム</th><th>ステータス</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>ステートレス サービス用に構成された HPA</td><td>_☐</td></tr>
<tr><td>_2</td><td>PodDisruptionすべての重要なワークロードの予算_</td><td>☐</td></tr>
<tr><td>3</td><td>すべてのコンテナの Liveness + readiness プローブ</td><td>☐</td></tr>
<tr><td>4</td><td>すべてのポッドに設定されたリソース リクエストと制限_</td><td>☐</td></tr>
<tr><td>5</td><td>ポッド非アフィニティ: ノード間で拡散_</td><td>☐</td></tr>
<tr><td>6</td><td>サーキット ブレーカーが構成されました (Istio DestinationRule)</td><td>☐</td></tr>
<tr><td>_7</td><td>VirtualService の再試行 + タイムアウト ポリシー_</td><td>☐</td></tr>
<tr><td>8</td><td>Velero バックアップのテスト済み (復元は検証済み)</td><td>☐</td></tr>
<tr><td>9</td><td>DR ランブックの文書化とテスト</td><td>☐</td></tr>
<tr><td>10</td><td>カオス エンジニアリング: GameDay 完了</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-go-live">パート 5: 導入計画</h2>

___コードブロック_0___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>チェックリスト</strong>: 系統的なレビューにより「Xの設定忘れ」を防止</li>
<li><strong>カテゴリ</strong>: インフラストラクチャ、セキュリティ、可観測性、信頼性</li>
<li><strong>ゴーライブ</strong>: トラフィックは段階的に増加し、常にロールバック計画が必要</li>
<li><strong>レビュー</strong>: 制作前のピアレビューチェックリスト</li>
<li><strong>_生きた文書</strong>: 事件ごとにチェックリストを更新</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: 準備状況のレビュー__HTMLTAG_595___
<ul>
<li>クラスターのすべてのチェックリストを実行します</li>
<li>ギャップを文書化し、改善計画を作成</li>
<li>チームメイトとピアレビューを実施</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_608___レッスン 47: 2 日目の運用とメンテナンス</strong> では、日常の運用運用を学習します。</p>