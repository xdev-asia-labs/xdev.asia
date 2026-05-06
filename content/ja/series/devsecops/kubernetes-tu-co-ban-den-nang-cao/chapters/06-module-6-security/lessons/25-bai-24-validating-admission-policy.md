---
id: 019c9618-0402-7000-8000-c1147ba22e14
title: 'レッスン 24: アドミッションポリシーの検証 — GA K8S 1.30'
slug: bai-24-validatingadmissionpolicy-ga-k8s-1-30
description: 'K8s 1.30 からの ValidatingAdmissionPolicy GA — Webhook サーバーをデプロイする必要なく、CEL (共通表現言語) でポリシーを作成します。 OPA/ゲートキーパーと比較してください。パターン: 最新のタグをブロックし、ラベルを適用し、リソース制限を検証します。'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 24
section_title: 'モジュール 6: セキュリティ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3013" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3013)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="172" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="180" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="54" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: 承認ポリシーの検証 — GA K8S</tspan>
      <tspan x="60" dy="42">1.30</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 6: セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目標_</h2><p>ValidatingAdmissionPolicy GA K8s 1.30 を理解し、Webhook サーバーを使用せずに CEL ポリシーを作成し、OPA/ゲートキーパーが必要な場合を認識します。</p>

<h2>1.従来のアドミッション Webhook の問題</h2>
<p>Webhook ベースのアドミッション (OPA/ゲートキーパー、Kyverno) には欠点があります:</p>
<ul>
  <li><strong>ネットワーク オーバーヘッド</strong>: 各 API リクエストは Webhook サービスへの HTTP 呼び出しを行う必要があります</li>
  <li><strong>可用性の依存関係</strong>: Webhook サービスがダウンした場合 → API リクエストが失敗した場合</li>
  <li><strong>運用上の負担</strong>: Webhook の展開、TLS 証明書を維持する必要がある</li>
  <li><strong>レイテンシ</strong>: すべての API 呼び出しにレイテンシを追加</li>
</ul>

<h2>2. ValidatingAdmissionPolicy — 組み込み、Webhook なし</h2>
K8s 1.30 の <p>ValidatingAdmissionPolicy GA では、__HTMLTAG_96___CEL (共通表現言語)</strong>.</p> を使用して、検証ポリシーを API サーバーに直接記述することができます。
<ul>
  <li>API サーバー プロセスで実行 — ネットワーク オーバーヘッドなし</li>
  <li>追加のサービスを展開する必要はありません</li>
  <li>単一障害点はありません__HTMLTAG_105___
  <li>Webhook よりも約 10 倍速い</li>
</ul>

<h2>3. CEL の基本</h2>
<p>CEL は、シンプルで安全な式言語です (ループや副作用はありません)。</p>
___コードブロック_0___

<h2>4. AdmissionPolicy 構造の検証</h2>
___コードブロック_1___

<h2>5. AdmissionPolicyBinding</h2> の検証中
___コードブロック_2___

<h2>6.共通ポリシー</h2><h3>6.1 「最新」タグが付いたブロック画像</h3>
___コードブロック_3___

<h3>6.2 必要なリソース制限</h3>
___コードブロック_4___

<h3>6.3 ラベルが必要</h3>
___コードブロック_5___

<h3>6.4 レプリカの制限</h3>
___コードブロック_6___

<h3>6.5 権限昇格の防止__HTMLTAG_128___
___コードブロック_7___

<h2>7.パラメータを含むポリシー</h2>
___コードブロック_8___

<h2>8.比較: ValidatingAdmissionPolicy と OPA/ゲートキーパー</h2>
___コードブロック_9___
<p><strong>OPA/ゲートキーパーは、</strong> の場合に引き続き必要です: 変更ポリシー (フィールドの自動挿入) が必要な場合、CEL サポートよりも複雑なポリシー ロジックが必要な場合、または変更 Webhook が必要な場合。</p>

<h2>概要</h2>
<ul>
  <li>ValidatingAdmissionPolicy GA K8s 1.30: 組み込み、Webhook は不要</li>
  <li>CEL: ポリシー ロジック用の安全な式言語</li>
  <li>アクティブ化するにはバインディングが必要です: ValidatingAdmissionPolicyBinding</li>
  <li>アクション: 拒否、監査、警告</li>
  <li>パラメータ (ConfigMap) を使用してポリシーを再利用</li>
  <li>OPA/ゲートキーパー: 変化する複雑な rego ロジックには引き続き必要</li>
</ul>