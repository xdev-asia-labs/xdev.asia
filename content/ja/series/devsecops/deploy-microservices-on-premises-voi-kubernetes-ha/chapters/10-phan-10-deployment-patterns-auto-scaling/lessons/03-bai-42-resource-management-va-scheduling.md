---
id: 019e1a00-aa01-7001-c001-k8sha001003
title: 'レッスン 42: リソース管理とスケジューリング'
slug: bai-42-resource-management-va-scheduling
description: Kubernetes リソースのリクエスト/制限、QoS クラス、LimitRange、ResourceQuota、ノード アフィニティ/アンチアフィニティ、テイントと許容、トポロジの広がり、スケジュールのベスト プラクティス。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 42
section_title: 'パート 10: デプロイメントパターンと自動スケーリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2563" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2563)"/>

  <!-- Decorations -->
  <g>
    <circle cx="611" cy="183" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="622" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="633" cy="285" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="644" cy="76" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="127" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.2487113059642,189 1027.2487113059642,217 1003,231 978.7512886940357,217 978.7512886940357,189 1003,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 42</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 42: リソース管理とスケジュール</tspan>
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
<li>✅ リソースリクエストと制限の詳細</li>
<li>✅ QoS クラス (保証型、バースタブル、ベストエフォート)</li>
<li>✅ LimitRange と ResourceQuota</li>
<li>✅ ノード アフィニティ、反アフィニティ、汚染/許容</li>
<li>✅ トポロジ スプレッド制約</li>
<li>✅ ポッドの優先順位とプリエンプション</li>
</ul>

<hr>

<h2 id="phan-1-resources">パート 1: リソースのリクエストと制限</h2>

___コードブロック_0___

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>QoS クラス</th><th>条件_</th><th>エビクション優先度</th></tr>
</thead>
<tbody>
<tr><td>保証</td><td>リクエスト == 制限 (すべてのコンテナ)</td><td>最後に削除_</td></tr>
<tr><td>バースト可能</td><td>リクエスト__HTMLTAG_109___<td>中</td></tr>
<tr><td>ベストエフォート</td><td>リクエストや制限なし_</td><td>最初に立ち退き</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_1___

<hr>

<h2 id="phan-2-limitrange-quota">パート 2: 制限範囲とリソース割り当て</h2>

___コードブロック_2___

<hr>

<h2 id="phan-3-scheduling">パート 3: ノード アフィニティとアンチアフィニティ</h2>

___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-taints">パート 4: 汚染と寛容</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-priority">パート 5: ポッドの優先順位と優先</h2>

___コードブロック_7___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>リクエスト</strong>: スケジュール保証。 <strong>制限</strong>: 硬い天井</li>
<li><strong>QoS</strong>: データベースでは保証され、アプリではバースト可能</li>
<li><strong>_LimitRange</strong>: コンテナごとのデフォルト/最大値。 <strong>リソースクォータ</strong>: 名前空間ごとの合計</li>
<li><strong>トポロジの広がり</strong>: ノード/ゾーン間で均等に分散</li>
<li><strong>Taints</strong>: 特定のワークロード専用のノード</li>
<li><strong>優先度</strong>: 重要なサービスがバッチ ジョブをプリエンプト</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_171___

<h3 id="bt1">演習 1: リソース ガバナンス__HTMLTAG_173___
<ul>
<li>名前空間の LimitRange と ResourceQuota を作成__HTMLTAG_176___
<li>リソースなしでポッドをデプロイ → デフォルトが適用されていることを確認</li>
<li>割り当てを超過 → ポッドが拒否されたことを確認</li>
</ul>

<h3 id="bt2">演習 2: スケジュール</h3>
<ul>
<li>データベース ワークロード用の Taint 2 ノード</li>
<li>_6 レプリカ展開用のトポロジ スプレッドの構成__HTMLTAG_188___
<li>_優先クラスの作成、プリエンプションのテスト__HTMLTAG_190___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_196___レッスン 43: マルチテナントと名前空間の分離</strong> では、共有クラスターにマルチテナント アーキテクチャを実装します。</p>