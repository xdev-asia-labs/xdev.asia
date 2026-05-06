---
id: 019e1a00-aa01-7001-c001-k8sha001101
title: 'レッスン 44: 災害復旧とバックアップ戦略'
slug: bai-44-disaster-recovery-va-backup-strategies
description: オンプレミス K8、Velero バックアップ/リストア、etcd ディザスター リカバリー、クロスサイト レプリケーション、RPO/RTO ターゲット、および DR ランブックの自動化のための DR 計画。
duration_minutes: 180
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai44-disaster-recovery.png
sort_order: 44
section_title: 'パート 11: 災害復旧とカオス エンジニアリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3797" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3797)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1092" cy="246" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1084" cy="58" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1076" cy="130" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1068" cy="202" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="274" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 44</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 44: 災害復旧と復旧バックアップ</tspan>
      <tspan x="60" dy="42">STARTEGIES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 11: 災害復旧と障害復旧カオス エンジニアリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ DR 計画: RPO、RTO、障害シナリオ</li>
<li>✅ K8s リソース + PV の Velero バックアップと復元</li>
<li>✅ etcd スナップショットのバックアップと復元</li>
<li>✅ クロスサイト DR 戦略</li>
<li>✅ DR テストとランブックの自動化</li>
</ul>

<hr>

<h2 id="phan-1-dr-planning">パート 1: DR 計画</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-velero">パート 2: VELERO のバックアップと復元__HTMLTAG_86___

___コードブロック_1___

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-etcd-dr">パート 3: ETCD ディザスター リカバリ</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-cross-site">パート 4: クロスサイト DR</h2>

___コードブロック_5___

<hr>

<h2 id="phan-5-dr-runbook">パート 5: DR RUNBOOK</h2>

___コードブロック_6___

___コードブロック_7___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>RPO/RTO</strong>: 災害前にコンポーネントごとにターゲットを定義</li>
<li><strong>Velero</strong>: K8s リソース + S3/Ceph への PV バックアップ</li>
<li><strong>_etcd</strong>: 通常のスナップショット、テスト済みの復元手順</li>
<li><strong>GitOps</strong>: コードとしてのインフラストラクチャ = 即時再デプロイ</li>
<li><strong>_クロスサイト DR</strong>: PostgreSQL ストリーミング レプリケーション + S3 同期</li>
<li><strong>定期的にテストしてください</strong>: テストされていないバックアップはバックアップではありません</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_127___<h3 id="bt1">演習 1: ヴェレロ DR</h3>
<ul>
<li>S3 バックエンドで Velero をセットアップ</li>
<li>すべての名前空間のスケジュールされたバックアップを作成__HTMLTAG_134___
<li>名前空間の削除をシミュレート → バックアップから復元</li>
</ul>

<h3 id="bt2">演習 2: DR ドリル</h3>
<ul>
<li>クラスターの DR Runbook を文書化</li>
<li>etcd 復元ドリルを実行__HTMLTAG_144___
<li>実際の RTO と目標を比較</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_152___レッスン 45: Litmus を使用したカオス エンジニアリング</strong> では、システムの回復力を積極的にテストします。</p>