---
id: 019e1a00-aa01-7001-c001-k8sha001203
title: 'レッスン 48: パフォーマンスのテストと最適化'
slug: bai-48-performance-testing-va-optimization
description: k6/Locust による負荷テスト、パフォーマンス プロファイリング、ボトルネックの特定、K8s クラスターのチューニング、アプリケーションの最適化、ベンチマーク レポート。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 48
section_title: 'パート 12: 生産業務とキャップストーン プロジェクト'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6665" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6665)"/>

  <!-- Decorations -->
  <g>
    <circle cx="687" cy="251" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="238" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="861" cy="225" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="212" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="199" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="201" x2="1100" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="231" x2="1050" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.1769145362398,183 1032.1769145362398,219 1001,237 969.8230854637602,219 969.8230854637602,183 1001,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 48</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 48: パフォーマンス テストとテスト最適化</tspan>
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
<li>✅ k6 (Grafana k6) による負荷テスト</li>
<li>✅ パフォーマンス プロファイル タイプ (負荷、ストレス、スパイク、ソーク)</li>
<li>✅ ボトルネックの特定方法</li>
<li>✅ K8s クラスターのチューニング (カーネル、containerd、kubelet)</li>
<li>✅ アプリケーションレベルの最適化</li>
</ul>

<hr>

<h2 id="phan-1-k6-setup">パート 1: K6 による負荷テスト</h2>

___コードブロック_0___

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-2-test-types">パート 2: パフォーマンス テストの種類</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>タイプ_</th><th>_目標</th><th>パターン_</th><th>期間</th></tr>
</thead>
<tbody>
<tr><td>負荷テスト</td><td>予想される負荷の下でのSLOを検証</td><td>目標に向けて段階的に増加_</td><td>15～30分</td></tr>
<tr><td>ストレス テスト</td><td>限界点を見つける_</td><td>_失敗するまで増加_</td><td>30+分</td></tr>
<tr><td>スパイク テスト</td><td>突然のトラフィック バーストをテスト</td><td>瞬時にピークにジャンプ_</td><td>10 ～ 15 分</td></tr>
<tr><td>ソーク テスト</td><td>メモリ リーク、劣化の検出</td><td>中程度の負荷の持続____HTMLTAG_136__HTMLTAG_137___4 ～ 24 時間</td></tr>
<tr><td>ブレークポイント テスト_</td><td>最大スループットを見つける_</td><td>エラーが発生するまでステップを増加</td><td>変数</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_3___

<hr>

<h2 id="phan-3-bottleneck">パート 3: ボトルネックの特定</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-tuning">パート 4: クラスターとアプリケーションのチューニング</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-reporting">パート 5: ベンチマーク レポート</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>指標_</th><th>ターゲット</th><th>実際</th><th>ステータス</th></tr>
</thead>
<tbody>
<tr><td>最大スループット_</td><td>1000要求/秒</td><td>1250要求/秒</td><td>✅ PASS</td></tr>
<tr><td>P95 レイテンシー</td><td>< 500ms</td><td>320ms</td><td>✅ PASS_</td></tr>
<tr><td>P99 レイテンシー</td><td>< 1000ms</td><td>780ms</td><td>✅ PASS_</td></tr>
<tr><td>エラー率</td><td>< 0.1%</td><td>0.02%</td><td>✅ PASS_</td></tr>
<tr><td>CPU ピーク</td><td>< 80%</td><td>65%</td><td>✅ PASS_</td></tr>
<tr><td>ピーク時のメモリ</td><td>< 80%</td><td>72%</td><td>✅ PASS_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>k6</strong>: 最新の負荷テスト ツール、スクリプト可能、Grafana 統合</li>
<li><strong>テスト タイプ</strong>: 負荷、ストレス、スパイク、ソーク — それぞれ異なる目的を果たします</li>
<li><strong>ボトルネック分析</strong>: レイヤーごと、トレースガイド付き</li>
<li><strong>適切なサイズ</strong>: VPA の推奨事項 → 無駄を削減</li>
<li><strong>カーネルチューニング</strong>: 接続制限、ファイル記述子を増やす</li>
<li><strong>レポート</strong>: ドキュメントのベースライン、最適化後の比較</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: 負荷テスト</h3>
<ul>
<li>API エンドポイント用の k6 スクリプトを作成__HTMLTAG_276___
<li>負荷テスト、ストレス テスト、スパイク テストを実行__HTMLTAG_278___
<li>テスト中に Grafana ダッシュボードを監視__HTMLTAG_280___
</ul>

<h3 id="bt2">演習 2: 最適化</h3>
<ul>
<li>テスト結果から上位 3 つのボトルネックを特定</li>
<li>最適化の適用 (キャッシュ、適切なサイズ設定、チューニング)</li>
<li>_改善点を再テストして比較</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_296___レッスン 49: トラブルシューティング ガイド</strong>では、K8s 運用のための体系的なトラブルシューティングを学習します。</p>