---
id: 019e1a00-aa01-7001-c001-k8sha000206
title: 'レッスン 10: ETCD — 操作、バックアップ、およびディザスタリカバリ'
slug: bai-10-etcd-van-hanh-backup-va-disaster-recovery
description: etcd 内部の詳細、Raft コンセンサス、etcdctl 操作、CronJob による自動バックアップ、スナップショット復元、デフラグ、圧縮、アラーム管理、災害復旧手順。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 2: kubeadm を使用した Kubernetes HA クラスター'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6333" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6333)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1020" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="110" x2="1100" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="140" x2="1050" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: ETCD — 操作、バックアップ、および</tspan>
      <tspan x="60" dy="42">災害復旧</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: kubeadm を使用した Kubernetes HA クラスター__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ Raft コンセンサス アルゴリズムと etcd の内部構造を理解する__HTMLTAG_73___
<li>✅ 日常業務のための etcdctl に精通している__HTMLTAG_75___
<li>✅ CronJob を使用した自動バックアップのセットアップ</li>
<li>✅ スナップショットからの復元の練習 (災害復旧)</li>
<li>✅ デフラグ、圧縮、パフォーマンス チューニング</li>
</ul>

<hr>

<h2 id="phan-1-etcd-internals">パート 1: ETCD 内部</h2>

<h3 id="11-raft-consensus">1.1. Raft コンセンサス アルゴリズム</h3>

___コードブロック_0___

___コードブロック_1___

<p>⚠️ etcd は <strong>(N-1)/2</strong> の失敗を許容します:</p>
<ul>
<li>3 ノード → 1 つの障害を許容 (クォーラム = 2)</li>
<li>5 ノード → 2 つの障害を許容 (クォーラム = 3)</li>
</ul>

<h3 id="12-data-model">1.2.データモデル</h3>
___コードブロック_2___

<hr>

<h2 id="phan-2-etcdctl-operations">パート 2: ETCDCTL オペレーション</h2>

<h3 id="21-cluster-health">2.1.クラスターの健全性の監視</h3>
___コードブロック_3___

<h3 id="22-performance-check">2.2.パフォーマンスチェック</h3>
___コードブロック_4___

<h3 id="23-xem-kubernetes-data">2.3. etcd で Kubernetes データを表示</h3>
___コードブロック_5___

<hr>

<h2 id="phan-3-backup">パート 3: ETCD バックアップ</h2>

<h3 id="31-manual-snapshot">3.1.手動スナップショット</h3>
___コードブロック_6___

<h3 id="32-automated-backup-script">3.2.自動バックアップ スクリプト</h3>
___コードブロック_7___

<h3 id="33-cron-backup">3.3. Cron バックアップ (6 時間ごと)</h3>
___コードブロック_8___

___コードブロック_9___

<hr>

<h2 id="phan-4-restore">パート 4: 災害復旧 — 復元</h2>

<h3 id="41-restore-scenario">4.1.復元シナリオ</h3>

___コードブロック_10___

<h3 id="42-restore-step-by-step">4.2.段階的な復元</h3>
___コードブロック_11___<hr>

<h2 id="phan-5-compaction-defrag">パート 5: 圧縮と最適化</h2>

<h3 id="51-compaction">5.1.圧縮</h3>
___コードブロック_12___

<h3 id="52-defragmentation">5.2.デフラグ</h3>
___コードブロック_13___

<h3 id="53-alarm-management">5.3.アラーム管理</h3>
___コードブロック_14___

<hr>

<h2 id="phan-6-monitoring">パート 6: ETCD モニタリング</h2>

<h3 id="61-prometheus-metrics">6.1. Prometheus メトリクス</h3>
___コードブロック_15___

<h3 id="62-alerting-rules">6.2. PrometheusRule (レッスン 32 で使用します)</h3>
___コードブロック_16___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Raft コンセンサス</strong>: 書き込みには過半数のクォーラム (2/3) が必要</li>
<li><strong>6 時間ごとのバックアップ</strong> は運用環境では最小です — スナップショットと証明書の両方を保存</li>
<li><strong>復元 = スナップショットから新しいクラスターを作成</strong>、スナップショット後のすべてのデータが失われます__HTMLTAG_156___
<li><strong>順次デフラグ</strong>同時にではなく各メンバー</li>
<li><strong>NOSPACE アラーム</strong>: コンパクト→デフラグ→解除</li>
<li><strong>NVMe SSD</strong> は etcd に必須です (p99 書き込み遅延 < 10ms)</li>)
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_172___

<h3 id="bt1">演習 1: バックアップと復元のラボ</h3>
<ul>
<li>Nginx デプロイメントの作成 (3 つのレプリカ)</li>
<li>etcd スナップショットのバックアップ</li>
<li>デプロイ nginx を削除</li>
<li>スナップショットから復元し、デプロイ nginx が返すことを確認</li>
</ul>

<h3 id="bt2">演習 2: モニタリング</h3>
<ul>
<li>etcd-check.sh を実行し、DB サイズ、リーダー、状態を記録</li>
<li>圧縮とデフラグ、前後の DB サイズの比較</li>
</ul>

<h3 id="bt3">演習 3: CronJob バックアップのセットアップ</h3>
<ul>
<li>etcd-backup CronJob のデプロイ</li>
<li>_ジョブが正常に実行されたことを確認__HTMLTAG_199___
<li>/backup/etcd/</li> のスナップショット ファイルを確認してください
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_207___レッスン 11: Rook-Ceph を使用した分散ストレージ アーキテクチャ</strong> では、パート 3 — 永続ストレージ用の Rook-Ceph のインストールを開始します。</p>