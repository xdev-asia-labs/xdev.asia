---
id: 019e1a00-aa01-7001-c001-k8sha000403
title: 'レッスン 18: POSTGRESQL のバックアップ、PITR、およびディザスタ リカバリ'
slug: bai-18-postgresql-backup-pitr-va-disaster-recovery
description: Barman/S3 による自動バックアップ、ScheduledBackup CRD、Point-in-Time Recovery (PITR)、バックアップからのクラスターの復元、災害復旧手順。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 4: Patroni と CloudNativePG を使用した PostgreSQL HA'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7198" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7198)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="62" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="170" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="94" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="278" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="122" x2="1100" y2="202" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="152" x2="1050" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.0429399400242,103.5 954.0429399400242,140.5 922,159 889.9570600599758,140.5 889.9570600599758,103.50000000000001 922,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: POSTGRESQL バックアップ、PITR および</tspan>
      <tspan x="60" dy="42">災害復旧</tspan>
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
<li>✅ バックアップ先の構成 (S3/Ceph Object Store)</li>
<li>✅ 自動バックアップ用に ScheduledBackup CRD をセットアップ</li>
<li>✅ ポイントインタイムリカバリ (PITR) の実践</li>
<li>✅ バックアップからクラスターを復元</li>
<li>✅ 災害復旧手順</li>
</ul>

<hr>

<h2 id="phan-1-backup-architecture">パート 1: バックアップ アーキテクチャ</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-setup-backup-s3">パート 2: バックアップ先の設定__HTMLTAG_86___

<h3 id="21-ceph-rgw-s3">2.1. Ceph RGW (S3 互換) を使用する</h3>
___コードブロック_1___

___コードブロック_2___

<h3 id="22-update-cluster-backup-config">2.2.バックアップ構成を使用してクラスターを更新</h3>
___コードブロック_3___

<hr>

<h2 id="phan-3-scheduled-backup">パート 3: スケジュールされたバックアップ</h2>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-4-pitr">パート 4: ポイントインタイム リカバリ (PITR)</h2>

<h3 id="41-simulate-data-loss">4.1.データ損失のシミュレーション</h3>
___コードブロック_6___

<h3 id="42-restore-pitr">4.2. PITR</h3> を使用して復元します
___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-5-dr-procedures">パート 5: 災害復旧手順</h2>

<h3 id="51-full-cluster-restore">5.1.クラスタ全体の復元 (PITR なし)</h3>
___コードブロック_9___

<h3 id="52-verify-backup-integrity">5.2.バックアップの整合性を確認</h3>
___コードブロック_10___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Barman + S3</strong>: ベース バックアップ + 継続的な WAL アーカイブ</li>
<li><strong>_スケジュールされたバックアップ</strong>: 毎日の自動バックアップ、優先スタンバイ</li>
<li><strong>PITR</strong>: 保存期間内の任意の時点に復元</li>
<li><strong>リカバリ = バックアップから新しいクラスター</strong>を作成し、スイッチオーバー</li>
<li><strong>_保持ポリシー: 30d</strong>: バックアップを 30 日間保持</li>
<li><strong>定期的に復元をテスト</strong>: 毎月のバックアップの整合性を確認</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: バックアップ ラボ</h3>
<ul>
<li>バックアップ先の構成 (S3/MinIO)</li>
<li>ScheduledBackup を設定し、バックアップが正常に作成されたことを確認します</li>
</ul>

<h3 id="bt2">演習 2: PITR ラボ</h3>
<ul>
<li>データを挿入し、タイムスタンプをメモしてください</li>
<li>データの削除 (事故をシミュレート)</li>
<li>削除前のタイムスタンプに復元</li>
<li>データが復元されたことを確認__HTMLTAG_158___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_164___レッスン 19: PostgreSQL フェイルオーバーのテストとスイッチオーバー</strong> では、フェイルオーバー シナリオと計画されたスイッチオーバーをテストします。</p>