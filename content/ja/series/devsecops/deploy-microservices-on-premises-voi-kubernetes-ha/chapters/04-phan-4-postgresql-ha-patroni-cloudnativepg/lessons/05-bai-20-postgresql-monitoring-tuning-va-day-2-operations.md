---
id: 019e1a00-aa01-7001-c001-k8sha000405
title: 'レッスン 20: POSTGRESQL のモニタリング、チューニング、および 2 日目の操作'
slug: bai-20-postgresql-monitoring-tuning-va-day-2-operations
description: pg_stat_statements、Prometheus メトリクス、Grafana ダッシュボード、バキューム チューニング、接続プーリングの最適化、Kubernetes 上の PostgreSQL HA の Day-2 操作をセットアップします。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 4: Patroni と CloudNativePG を使用した PostgreSQL HA'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7944" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7944)"/>

  <!-- Decorations -->
  <g>
    <circle cx="662" cy="136" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="786" cy="120" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="242" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="104" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: POSTGRESQL の監視、チューニング、および</tspan>
      <tspan x="60" dy="42">2 日目の操作</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: Patroni と PostgreSQL HA を使用するCloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ クエリ分析用に pg_stat_statements をセットアップ</li>
<li>✅ PostgreSQL 用の Prometheus モニタリングを展開</li>
<li>✅ PG メトリクス用の Grafana ダッシュボードを構築</li>
<li>✅ バキューム調整と自動バキューム構成</li>
<li>✅ PgBouncer による接続プーリングの最適化</li>
<li>✅ 2 日目の操作: スケーリング、マイナー アップグレード、メジャー アップグレード</li>
</ul>

<hr>

<h2 id="phan-1-pg-stat-statements">パート 1: pg_stat_statements — クエリ分析</h2>

<h3 id="11-enable">1.1. pg_stat_statements</h3> を有効にする
___コードブロック_0___

<h3 id="12-top-queries">1.2。トップの遅いクエリ</h3>
___コードブロック_1___

<hr>

<h2 id="phan-2-prometheus">パート 2: プロメテウスの監視</h2>

<h3 id="21-metrics">2.1. CloudNativePG 組み込みメトリクス</h3>
___コードブロック_2___

<h3 id="22-podmonitor">2.2. Prometheus 用 PodMonitor</h3>
___コードブロック_3___

<h3 id="23-custom-queries">2.3.カスタム指標クエリ</h3>
___コードブロック_4___

<hr>

<h2 id="phan-3-grafana">パート 3: GRAFANA ダッシュボード</h2>

<h3 id="31-dashboard-import">3.1.インポート ダッシュボード</h3>
___コードブロック_5___

<hr>

<h2 id="phan-4-vacuum-tuning">パート 4: 真空チューニング</h2>

<h3 id="41-autovacuum">4.1.自動バキューム構成</h3>
___コードブロック_6___

<h3 id="42-manual-vacuum">4.2.大きなテーブルの手動 VACUUM</h3>
___コードブロック_7___

<hr>

<h2 id="phan-5-pgbouncer-tuning">パート 5: PGBOUNCER のチューニング</h2>

___コードブロック_8___

<hr>

<h2 id="phan-6-day2">パート 6: 2 日目のオペレーション</h2>

<h3 id="61-scaling">6.1.スケールレプリカ</h3>
___コードブロック_9___

<h3 id="62-minor-upgrade">6.2.マイナー バージョン アップグレード (例: 16.3 → 16.4)</h3>
___コードブロック_10___<h3 id="63-major-upgrade">6.3.メジャー バージョン アップグレード (例: 16 → 17)</h3>
___コードブロック_11___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>pg_stat_statements</strong>: クエリ パフォーマンス分析に必須</li>
<li><strong>Prometheus + Grafana</strong>: リアルタイム監視、遅延/接続に関するアラート</li>
<li><strong>真空チューニング</strong>: 大きなテーブルのscale_factorを下げる(20%ではなく5%)</li>
<li><strong>PgBouncer</strong>: トランザクション プーリング、ワークロードに応じてdefault_pool_sizeを調整</li>
<li><strong>_マイナーアップグレード</strong>: ダウンタイムゼロのローリングアップデート</li>
<li><strong>メジャーアップグレード</strong>: 論理レプリケーション戦略</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: パフォーマンスのベースライン</h3>
<ul>
<li>pg_stat_statements を有効にする</li>
<li>pgbench ワークロードの実行</li>
<li>遅いクエリ上位 5 を特定__HTMLTAG_163___
<li>_Grafana ダッシュボードのセットアップ</li>
</ul>

<h3 id="bt2">演習 2: 真空実験室</h3>
<ul>
<li>テーブルの作成、INSERT 1M 行、DELETE 500K</li>
<li>デッドタプルを観察し、VACUUMをトリガー__HTMLTAG_173___
<li>_自動バキュームと手動バキュームのタイミングの比較__HTMLTAG_175___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_181___レッスン 21: Kubernetes 上の RabbitMQ HA クラスター</strong> では、マイクロサービス通信用の HA メッセージ キューをデプロイします。</p>