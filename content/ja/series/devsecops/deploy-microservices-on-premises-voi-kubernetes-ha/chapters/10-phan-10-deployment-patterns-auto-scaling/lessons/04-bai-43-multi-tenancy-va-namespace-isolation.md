---
id: 019e1a00-aa01-7001-c001-k8sha001004
title: 'レッスン 43: マルチテナンシーとネームスペースの分離'
slug: bai-43-multi-tenancy-va-namespace-isolation
description: 共有 K8s クラスター上のマルチテナント アーキテクチャ、名前空間分離戦略、ネットワーク ポリシー、階層型名前空間、リソースの公平性、およびテナント オンボーディングの自動化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 43
section_title: 'パート 10: デプロイメントパターンと自動スケーリング'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6315" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6315)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1038" cy="264" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="976" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="914" cy="160" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="852" cy="238" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="790" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="124" x2="1100" y2="204" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="154" x2="1050" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="957.7749907475932,104.5 957.7749907475932,143.5 924,163 890.2250092524068,143.5 890.2250092524068,104.50000000000001 924,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 43</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 43: マルチテナンシーとネームスペース</tspan>
      <tspan x="60" dy="42">ISOLATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 10: 導入パターンと展開自動スケーリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ マルチテナンシー モデル (ソフト分離とハード分離)</li>
<li>✅ チーム/環境ごとの名前空間戦略</li>
<li>✅ 名前空間分離のためのネットワーク ポリシー__HTMLTAG_75___
<li>✅ テナントごとの RBAC__HTMLTAG_77___
<li>✅ テナント オンボーディングの自動化 (Kyverno 生成)</li>
</ul>

<hr>

<h2 id="phan-1-models">パート 1: マルチテナンシー モデル</h2>

___コードブロック_0___

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>アスペクト</th><th>名前空間の分離</th><th>クラスターの分離</th></tr>
</thead>
<tbody>
<tr><td>コスト</td><td>低 (共有インフラ)</td><td>高 (個別クラスター)</td></tr>
<tr><td>セキュリティ</td><td>中 (ソフト境界)</td><td>高 (ハード境界)</td></tr>
<tr><td>複雑さ</td><td>低</td><td>高</td></tr>
<tr><td>リソースの共有</td><td>効率的</td><td>無駄</td></tr>
<tr><td>最適な用途</td><td>同じ組織のチーム</td><td>異なる顧客/コンプライアンス</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-namespace">パート 2: ネームスペース戦略</h2>

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-network-isolation">パート 3: ネットワークの分離</h2>

___コードブロック_3___

<hr><h2 id="phan-4-rbac-tenant">パート 4: テナントごとの RBAC</h2>

___コードブロック_4___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>チームごとの名前空間</strong>: 分離とリソース効率のバランス</li>
<li><strong>自動オンボーディング</strong>: Kyverno はクォータ + LimitRange + NetworkPolicy</li> を生成します
<li><strong>_ネットワーク分離</strong>: デフォルトのすべて拒否、特定のクロスネームスペースを許可</li>
<li><strong>テナントごとのRBAC</strong>: チームごとのロール、クラスター管理者なし</li>
<li><strong>PSS ラベル</strong>: すべてのテナント名前空間に制限を適用</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_176___

<h3 id="bt1">演習 1: テナントのオンボーディング__HTMLTAG_178___
<ul>
<li>チーム ラベルを使用して名前空間を作成 → 自動プロビジョニングされたリソースを確認</li>
<li>ネットワーク ポリシーが名前空間を越えたトラフィックをブロックしていることを確認</li>
<li>RBAC のテスト: チーム メンバーはデプロイできますが、シークレットにはアクセスできません__HTMLTAG_185___
</ul>

<h3 id="bt2">_演習 2: 名前空間を越えた通信__HTMLTAG_188___
<ul>
<li>ネットワーク ポリシー経由でチーム A サービスがチーム B API を呼び出すことを許可</li>
<li>サービス間認証用に Istio AuthorizationPolicy を構成する</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_199___レッスン 44: 災害復旧とバックアップ戦略</strong> では、セクション 11 — DR とカオス エンジニアリングを開始します。</p>