---
id: 019e1a00-aa01-7001-c001-k8sha000402
title: 'レッスン 17: CLOUDNATIVEPG オペレーターと POSTGRESQL クラスターのデプロイ'
slug: bai-17-deploy-cloudnativepg-operator-va-postgresql-cluster
description: CloudNativePG Operator をインストールし、Ceph ストレージ、PgBouncer 接続プーリング、カスタム構成を備えた PostgreSQL クラスター 3 インスタンスを作成し、HA を検証します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 4: Patroni と CloudNativePG を使用した PostgreSQL HA'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6364" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6364)"/>

  <!-- Decorations -->
  <g>
    <circle cx="634" cy="252" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="702" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="770" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="232" x2="1100" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="262" x2="1050" y2="332" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.3826859021799,168.5 1005.3826859021799,195.5 982,209 958.6173140978201,195.5 958.6173140978201,168.5 982,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: CLOUDNATIVEPG オペレーターと</tspan> をデプロイする
      <tspan x="60" dy="42">POSTGRESQL クラスター</tspan>
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
<li>✅ CloudNativePG Operator をインストール</li>
<li>✅ PostgreSQL クラスター 3 インスタンスの作成</li>
<li>✅ PgBouncer 接続プーリングを構成する__HTMLTAG_77___
<li>✅ カスタム postgresql.conf パラメータ</li>
<li>✅ レプリケーションと接続を確認する__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-install-operator">パート 1: CLOUDNATIVEPG OPERATOR のインストール</h2>

<h3 id="11-helm-install">1.1. Helm のインストール</h3>
___コードブロック_0___

<hr>

<h2 id="phan-2-create-cluster">パート 2: POSTGRESQL クラスターの作成</h2>

<h3 id="21-cluster-crd">2.1.クラスター CRD</h3>
___コードブロック_1___

<h3 id="22-secrets">2.2.シークレットを作成</h3>
___コードブロック_2___

<h3 id="23-deploy-cluster">2.3.クラスターのデプロイ</h3>
___コードブロック_3___

<hr>

<h2 id="phan-3-verify-replication">パート 3: レプリケーションの確認__HTMLTAG_99___

<h3 id="31-check-replication-status">3.1.レプリケーション ステータスの確認</h3>
___コードブロック_4___

<h3 id="32-test-data-replication">3.2.テストデータの複製</h3>
___コードブロック_5___

<hr>

<h2 id="phan-4-services">パート 4: サービス</h2>

___コードブロック_6___

<hr>

<h2 id="phan-5-pgbouncer">パート 5: PGBOUNCER 接続プール</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-6-test-connectivity">パート 6: 接続のテスト</h2>

___コードブロック_9___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>CloudNativePG オペレーター</strong>: 単一の CRD で完全な PG HA クラスターを作成</li>
<li><strong>3 インスタンス</strong>: 1 つのプライマリ + 2 つのスタンバイ、ノード全体に広がる非アフィニティ</li>
<li><strong>Ceph RBD</strong> ストレージ用 + パフォーマンス用の別個の WAL ストレージ</li>
<li><strong>3 サービス</strong>: rw (プライマリ)、ro (スタンバイ)、r (任意)</li>
<li><strong>PgBouncer Pooler</strong>: トランザクション プーリング、50 の実際の接続が 1000 のクライアントにサービス</li>
<li><strong>postInitSQL</strong>: ブートストラップ時に拡張機能、ユーザー、スキーマを自動作成</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_144___

<h3 id="bt1">演習 1: PostgreSQL HA のデプロイ</h3>
<ul>
<li>CloudNativePG Operator のインストール</li>
<li>Ceph ストレージを使用した 3 インスタンスのクラスターの作成</li>
<li>pg_stat_replication によるレプリケーションの検証__HTMLTAG_153___
</ul>

<h3 id="bt2">演習 2: PgBouncer</h3>
<ul>
<li>PgBouncer Pooler のデプロイ (rw + ro)</li>
<li>PgBouncer 経由で接続し、クエリ ルーティングを確認します</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_167___レッスン 18: PostgreSQL のバックアップ、PITR、ディザスタ リカバリ</strong> では、自動バックアップとポイントインタイム リカバリを設定します。</p>