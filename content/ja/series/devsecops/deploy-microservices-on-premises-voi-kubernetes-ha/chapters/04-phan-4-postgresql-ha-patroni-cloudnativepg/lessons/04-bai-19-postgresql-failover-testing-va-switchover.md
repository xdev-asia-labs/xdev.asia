---
id: 019e1a00-aa01-7001-c001-k8sha000404
title: 'レッスン 19: POSTGRESQL フェイルオーバー テストとスイッチオーバー'
slug: bai-19-postgresql-failover-testing-va-switchover
description: プライマリダウン時の自動フェイルオーバー、計画的なスイッチオーバー、フェンシングメカニズム、レプリケーションラグの監視、およびアプリケーション接続処理をテストします。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 'パート 4: Patroni と CloudNativePG を使用した PostgreSQL HA'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-503" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-503)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="179" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="105" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="68" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: POSTGRESQL フェイルオーバー テストと</tspan>
      <tspan x="60" dy="42">スイッチオーバー</tspan>
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
<li>✅ プライマリ ポッドが強制終了されたときの自動フェイルオーバーをテストする__HTMLTAG_71___
<li>✅ 計画された切り替え (メンテナンス期間)</li>
<li>✅ レプリケーションの遅延を監視</li>
<li>✅ フェイルオーバー中のアプリケーション接続処理</li>
<li>✅ フェンシングとスプリット ブレインの防止</li>
</ul>

<hr>

<h2 id="phan-1-automatic-failover">パート 1: 自動フェイルオーバー</h2>

<h3 id="11-test-failover">1.1。テスト: プライマリ ポッドを強制終了</h3>
___コードブロック_0___

<h3 id="12-failover-timeline">1.2.フェイルオーバーのタイムライン</h3>
___コードブロック_1___

<hr>

<h2 id="phan-2-planned-switchover">パート 2: 計画された切り替え</h2>

<h3 id="21-switchover-command">2.1.計画的なスイッチオーバー (データ損失ゼロ)</h3>
___コードブロック_2___

<hr>

<h2 id="phan-3-replication-lag">パート 3: レプリケーション ラグの監視</h2>

___コードブロック_3___

<h3 id="31-prometheus-alerts">3.1.レプリケーション ラグに関するアラート</h3>
___コードブロック_4___

<hr>

<h2 id="phan-4-app-connection">パート 4: アプリケーション接続の処理</h2>

<h3 id="41-connection-failover">4.1.アプリケーションでのフェイルオーバーの処理</h3>
___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-fencing">パート 5: フェンスとスプリットブレインの防止</h2>

___コードブロック_7___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>自動フェイルオーバー</strong>: ~10 ～ 15 秒、オペレーターが検出 + 促進</li>
<li><strong>計画的スイッチオーバー</strong>: データ損失ゼロ、__HTMLTAG_117___kubectl cnpg promote</code></li>
<li><strong>レプリケーションラグモニタリング</strong>: pg_stat_replication、Prometheus メトリクス</li>
<li><strong>アプリケーション</strong>: サービス名、再試行ロジック、target_session_attrs</li> を使用します。
<li><strong>フェンシング</strong>: K8s リースはスプリット ブレインを防止</li>
<li><strong>PgBouncer</strong> アプリケーションからフェイルオーバーを非表示にします (透過的再接続)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: フェイルオーバー ラボ</h3>
<ul>
<li>プライマリ ポッドを強制終了し、フェイルオーバー時間を測定</li>
<li>フェイルオーバー後のデータ整合性の検証</li>
<li>特定のスタンバイへの計画的な切り替え</li>
</ul>

<h3 id="bt2">演習 2: アプリ接続テスト</h3>
<ul>
<li>PgBouncer 経由で PG に接続するシンプルなアプリをデプロイ</li>
<li>アプリの書き込み中にフェイルオーバーをトリガー</li>
<li>アプリが自動的に回復することを確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_164___レッスン 20: PostgreSQL のモニタリング、チューニング、および 2 日目の操作</strong> では、運用環境向けに詳細なモニタリングとチューニングをセットアップします。</p>