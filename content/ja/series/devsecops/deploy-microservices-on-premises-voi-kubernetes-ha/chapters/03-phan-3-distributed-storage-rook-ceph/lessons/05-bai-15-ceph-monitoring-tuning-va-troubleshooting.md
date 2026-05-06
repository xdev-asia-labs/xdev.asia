---
id: 019e1a00-aa01-7001-c001-k8sha000305
title: 'レッスン 15: CEPH の監視、チューニング、トラブルシューティング'
slug: bai-15-ceph-monitoring-tuning-va-troubleshooting
description: Ceph、Grafana ダッシュボード、パフォーマンス チューニング パラメーター、OSD チューニング、スクラビング、リカバリ設定、および一般的な問題のトラブルシューティング用の Prometheus メトリクス。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 3: 分散ストレージ — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5846" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5846)"/>

  <!-- Decorations -->
  <g>
    <circle cx="884" cy="222" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="952" cy="90" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: CEPH のモニタリング、チューニング、および</tspan>
      <tspan x="60" dy="42">トラブルシューティング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 分散ストレージ — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<p>このレッスンを完了すると、次のことができるようになります:</p>
<ul>
<li>✅ Ceph の Prometheus モニタリングをセットアップ</li>
<li>✅ Ceph 用 Grafana ダッシュボードをインポート</li>
<li>✅ OSD パフォーマンス パラメータの調整</li>
<li>✅ スクラブとリカバリの管理</li>
<li>✅ HEALTH_WARN および一般的な問題のトラブルシューティング__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-prometheus-metrics">パート 1: プロメテウスの指標</h2>

<h3 id="11-ceph-prometheus-module">1.1. Ceph Prometheus モジュール</h3>
___コードブロック_0___

<h3 id="12-servicemonitor">1.2。 ServiceMonitor (Prometheus Operator 用)</h3>
___コードブロック_1___

<h3 id="13-key-metrics">1.3。監視すべき主要な指標</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>メートル法</th>
<th>意味__HTMLTAG_99___
<th>アラートしきい値</th>
</tr>
</thead>
<tbody>
<tr>
<td>ceph_health_status</td>
<td>0=OK、1=警告、2=エラー</td>
<td>> 5 分間は 0</td>
</tr>
<tr>
<td>ceph_osd_up</td>
<td>OSD アップステータス</td>
<td>!= 1</td>
</tr>
<tr>
<td>ceph_osd_in</td>
<td>クラスター内の OSD</td>
<td>!= 1</td>
</tr>
<tr>
<td>ceph_cluster_total_used_raw_bytes</td>
<td>実際の使用法</td>
<td>> 容量の 80%__HTMLTAG_135___
</tr>
<tr>
<td>ceph_osd_op_r_latency_sum</td>
<td>読み取り遅延__HTMLTAG_141___
<td>> 50ms p99</td>
</tr>
<tr>
<td>ceph_osd_op_w_latency_sum</td>
<td>書き込み遅延</td>
<td>> 100ms p99</td>
</tr>
<tr>
<td>ceph_pg_degraded</td>
<td>劣化した PG</td>
<td>> 5 分間は 0</td>
</tr>
<tr>
<td>ceph_pool_stored_raw</td>
<td>プールの生の使用量</td>
<td>ほぼ満席</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-grafana-dashboards">パート 2: GRAFANA ダッシュボード__HTMLTAG_174___

___コードブロック_2___

<hr>

<h2 id="phan-3-performance-tuning">パート 3: パフォーマンス チューニング</h2>

<h3 id="31-osd-tuning">3.1. OSD チューニング</h3>
___コードブロック_3___

<h3 id="32-pool-tuning">3.2.プールの調整</h3>
___コードブロック_4___

<hr>

<h2 id="phan-4-troubleshooting">パート 4: トラブルシューティング</h2>

<h3 id="41-health-warnings">4.1.共通の HEALTH_WARN</h3>
___コードブロック_5___

<h3 id="42-osd-replace">4.2.失敗した OSD を置換</h3>
___コードブロック_6___

<h3 id="43-pool-full-emergency">4.3.プールが満杯の緊急</h3>
___コードブロック_7___

<hr>

<h2 id="phan-5-benchmark">パート 5: ストレージのベンチマーク__HTMLTAG_193___

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Prometheus + Grafana</strong>: Ceph の健全性、レイテンシ、IOPS、容量を監視</li>
<li><strong>スクラブ スケジュール</strong>: 影響を最小限に抑えるため、オフピーク時間 (午前 2 ～ 6 時)</li>
<li><strong>_回復調整</strong>: osd_recovery_max_active、osd_max_backfills</li>
<li><strong>PG オートスケーラー</strong>: PG 数を自動的に調整</li>
<li><strong>OSD 置換</strong>: マークアウト→回復を待つ→パージ→ディスクを置換</li>
<li><strong>_展開前のベンチマーク</strong>: ベースラインの rados ベンチ</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">演習 1: モニタリング</h3>
<ul>
<li>Prometheus による Ceph メトリクスのスクレイピングを確認__HTMLTAG_230___
<li>__HTMLTAG_232___ceph の健康状態の詳細</code> を確認し、警告を解決</li>
</ul>

<h3 id="bt2">_演習 2: ベンチマーク</h3>
<ul>
<li>rados ベンチの書き込み/読み取りを実行</li>
<li>ceph-block PVC を使用してポッドに fio をデプロイ</li>
<li>IOPS と遅延の比較__HTMLTAG_244___
</ul>

<h3 id="bt3">_演習 3: OSD 障害のシミュレーション__HTMLTAG_247___
<ul>
<li>1 OSD アウトをマークし、回復を観察</li>
<li>OSD 印刷をマークし、再バランスを観察</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_258___レッスン 16: Patroni と CloudNativePG を使用した PostgreSQL HA アーキテクチャ</strong> では、パート 4 — マイクロサービスのデータベース HA を開始します。</p>