---
id: 019e1a00-aa01-7001-c001-k8sha001001
title: 'レッスン 40: カナリアとブルーグリーンの展開'
slug: bai-40-canary-va-blue-green-deployment
description: '詳細なデプロイメント戦略: Istio/Argo ロールアウトを使用した Canary、Blue-Green デプロイメント、トラフィックのシフト、自動ロールバック、プログレッシブ配信。'
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai40-canary-blue-green.png
sort_order: 40
section_title: 'パート 10: デプロイメントパターンと自動スケーリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4131" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4131)"/>

  <!-- Decorations -->
  <g>
    <circle cx="651" cy="63" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="702" cy="74" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="753" cy="85" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="804" cy="96" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="107" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 40</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 40: カナリアとブルーグリーン展開</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 10: 導入パターンと展開自動スケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ 導入戦略の比較 (ローリング、ブルーグリーン、カナリア)</li>
<li>✅ プログレッシブ配信のための Argo ロールアウト</li>
<li>✅ トラフィックの変化を伴うカナリア展開</li>
<li>✅ ブルーグリーン、即時カットオーバー__HTMLTAG_75___
<li>✅ 分析テンプレートと自動ロールバック</li>
</ul>

<hr>

<h2 id="phan-1-strategies">パート 1: 導入戦略</h2>

___コードブロック_0___

___コードブロック_1___

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>戦略</th><th>ダウンタイム_</th><th>_ロールバック</th><th>リスク</th><th>リソースコスト</th></tr>
</thead>
<tbody>
<tr><td>ローリングアップデート</td><td>ゼロ</td><td>遅い</td><td>中</td><td>低 (+25%)</td></tr>
<tr><td>青緑</td><td>ゼロ</td><td>インスタント_</td><td>低</td><td>高 (2x)</td></tr>
<tr><td>カナリア_</td><td>ゼロ</td><td>高速_</td><td>非常に低い</td><td>低い(+10%)</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-argo-rollouts">パート 2: ARGO ロールアウト__HTMLTAG_140___

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-analysis">パート 3: 分析テンプレート</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-blue-green">パート 4: ブルーグリーン展開__HTMLTAG_146___

___コードブロック_5___

___コードブロック_6___

<hr><h2 id="phan-5-operations">パート 5: ロールアウト操作</h2>

___コードブロック_7___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Canary</strong>: 徐々にトラフィックが変化し、指標に基づいたプロモーション</li>
<li><strong>青緑</strong>: 即時カットオーバー、完全なプレビュー環境</li>
<li><strong>Argo ロールアウト</strong>: ドロップイン展開の置き換え</li>
<li><strong>分析テンプレート</strong>: 自動化された成功/失敗基準</li>
<li><strong>統合</strong>: Istio トラフィック ルーティング + Prometheus メトリクス</li>
<li><strong>ロールバック</strong>: 分析失敗時に自動</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_181___

<h3 id="bt1">演習 1: カナリア デプロイ</h3>
<ul>
<li>デプロイメントを Argo ロールアウトに変換</li>
<li>5% → 25% → 50% → 100% のカナリア ステップを構成</li>
<li>成功率チェックを含む AnalysisTemplate を作成</li>
</ul>

<h3 id="bt2">演習 2: ブルーグリーン + スモーク テスト</h3>
<ul>
<li>青緑色ロールアウトの設定</li>
<li>プロモーション前の分析としてスモーク テスト ジョブを作成</li>
<li>エラーを挿入 → 自動ロールバックを確認__HTMLTAG_200___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_206___レッスン 41: 水平および垂直ポッドの自動スケーリング</strong> では、ワークロードの自動スケーリングを実装します。</p>