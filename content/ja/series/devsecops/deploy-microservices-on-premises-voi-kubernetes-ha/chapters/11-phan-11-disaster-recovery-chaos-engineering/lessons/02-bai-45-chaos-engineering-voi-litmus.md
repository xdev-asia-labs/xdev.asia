---
id: 019e1a00-aa01-7001-c001-k8sha001102
title: 'レッスン 45: リトマスを使用したカオス エンジニアリング'
slug: bai-45-chaos-engineering-voi-litmus
description: カオス エンジニアリングの原則、K8 でのリトマス カオス、ポッド/ノード/ネットワーク カオス実験、定常状態仮説、GameDay 計画、および回復力スコアリング。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 45
section_title: 'パート 11: 災害復旧とカオス エンジニアリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3354" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3354)"/>

  <!-- Decorations -->
  <g>
    <circle cx="695" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="210" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="885" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="40" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="215" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 45</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 45: リトマスによるカオス エンジニアリング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 11: 災害復旧と障害復旧カオス エンジニアリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ カオス エンジニアリングの原則 (Netflix モデル)</li>
<li>✅ K8 に Litmus Chaos を展開</li>
<li>✅ ポッドのカオス: キル、CPU ストレス、メモリ ストレス</li>
<li>✅ ノードのカオス: ドレイン、ネットワーク分割__HTMLTAG_75___
<li>✅ 定常状態の仮説とプローブ</li>
<li>✅ GameDay の計画と回復力のスコアリング</li>
</ul>

<hr>

<h2 id="phan-1-principles">パート 1: カオス エンジニアリングの原則</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-litmus">パート 2: リトマスカオスの展開__HTMLTAG_86___

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-experiments">パート 3: カオス実験</h2>

___コードブロック_3___

<hr>

<h2 id="phan-4-probes">パート 4: 定常状態プローブ__HTMLTAG_92___

___コードブロック_4___

<hr>

<h2 id="phan-5-gameday">パート 5: ゲームデーの計画</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>フェーズ</th><th>アクティビティ</th><th>期間</th></tr>
</thead>
<tbody>
<tr><td>準備</td><td>実験を定義し、チームに通知し、モニタリングを確実にする</td><td>1 週間前_</td></tr>
<tr><td>ブリーフィング</td><td>実験のレビュー、オブザーバーの割り当て、ロールバックの確認</td><td>30分</td></tr>
<tr><td>実行_</td><td>カオス実験を 1 つずつ実行</td><td>2 ～ 4 時間_</td></tr>
<tr><td>観察</td><td>ダッシュボードの監視、異常のメモ</td><td>実行中</td></tr>
<tr><td>報告</td><td>調査結果の確認、アクションアイテムの作成_</td><td>1時間</td></tr>
<tr><td>フォローアップ</td><td>修正を実装し、次の GameDay をスケジュール____HTMLTAG_153__HTMLTAG_154___2 週間</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_5___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>カオス エンジニアリング</strong>: 運用上のインシデントの前に積極的に弱点を発見</li>
<li><strong>Litmus</strong>: K8s ネイティブのカオス フレームワーク、CRD ベースの実験</li>
<li><strong>プローブ</strong>: カオス時の定常状態の検証 (HTTP、Prometheus、コマンド)</li>
<li><strong>小規模から開始</strong>: ポッドの強制終了 → ノードのドレイン → ネットワークの混乱</li>
<li><strong>GameDay</strong>: ランダムな破壊ではなく、構造化されたチーム演習</li>
<li><strong>常にロールバックする</strong>: 混乱をすぐに止める方法を知る</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: リトマス試験のセットアップ__HTMLTAG_193___
<ul>
<li>Litmus をインストールし、ポッド削除実験を実行__HTMLTAG_196___
<li>サービスの可用性を検証するために HTTP プローブを追加</li>
<li>ChaosResult の合否を確認</li>
</ul>

<h3 id="bt2">演習 2: GameDay</h3>
<ul>
<li>5 ラウンドのカオス実験シーケンスを計画</li>
<li>監視ダッシュボードを開いた状態で実行</li>
<li>調査結果と改善アクションを文書化</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_216___レッスン 46: 本番準備チェックリスト</strong> では、セクション 12 — 本番運用とキャップストーン プロジェクトを開始します。</p>