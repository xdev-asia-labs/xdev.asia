---
id: 019e1a00-aa01-7001-c001-k8sha000901
title: 'レッスン 36: RBAC とポッドのセキュリティ標準'
slug: bai-36-rbac-va-pod-security-standards
description: Kubernetes RBAC、ポッド セキュリティ標準 (PSS)、ServiceAccount のベスト プラクティス、最小特権アクセス、監査ログ、クラスターのセキュリティ強化の詳細。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai36-security-hardening.png
sort_order: 36
section_title: 'パート 9: セキュリティの強化'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-103" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-103)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 36</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 36: RBAC とポッドのセキュリティ標準</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 9: セキュリティ強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ Kubernetes RBAC (ロール、クラスターロール、バインディング)</li>
<li>✅ ポッドのセキュリティ標準 (特権、ベースライン、制限付き)</li>
<li>✅ サービスアカウントのベストプラクティス__HTMLTAG_73___
<li>✅ 監査ログ構成</li>
<li>✅ セキュリティ強化チェックリスト</li>
</ul>

<hr>

<h2 id="phan-1-rbac">パート 1: KUBERNETES RBAC</h2>

___コードブロック_0___

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-2-serviceaccount">パート 2: サービスアカウントのベストプラクティス__HTMLTAG_84___

___コードブロック_3___

<hr>

<h2 id="phan-3-pss">パート 3: ポッドのセキュリティ標準</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>レベル</th><th>説明</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td>特権</td><td>制限なし</td><td>システムレベル(CNI、ストレージドライバー)</td></tr>
<tr><td>ベースライン_</td><td>既知のエスカレーションを防止</td><td>ほとんどのワークロードのデフォルト_</td></tr>
<tr><td>制限付き</td><td>厳格化、すべてのベストプラクティス</td><td>機密性の高いワークロード_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-4-audit">パート 4: 監査ログ</h2>

___コードブロック_6___

___コードブロック_7___

<hr>

<h2 id="phan-5-hardening">パート 5: セキュリティ強化チェックリスト</h2><!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>アイテム</th><th>ステータス</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>RBAC が有効、アプリのクラスター管理者なし</td><td>☐</td></tr>
<tr><td>2</td><td>ポッドセキュリティ標準の適用</td><td>☐</td></tr>
<tr><td>3</td><td>ServiceAccount トークンの自動マウントが無効になっています</td><td>☐</td></tr>
<tr><td>4</td><td>ネットワーク ポリシーのデフォルトすべて拒否</td><td>☐</td></tr>
<tr><td>5</td><td>監査ログ有効</td><td>☐</td></tr>
<tr><td>6</td><td>保存時の etcd 暗号化</td><td>☐</td></tr>
<tr><td>7</td><td>プライベート ネットワーク上の API サーバーのみ</td><td>☐</td></tr>
<tr><td>8</td><td>Kubelet 認証/認証が有効</td><td>☐</td></tr>
<tr><td>9</td><td>署名/スキャンされたコンテナイメージ</td><td>☐</td></tr>
<tr><td>10_</td><td>Vault 内の秘密 (単純な K8 秘密ではない)</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>RBAC</strong>: 最小限の権限 — 必要な動詞/リソースのみを付与</li>
<li><strong>_ServiceAccount</strong>: ワークロードごとに、トークンの自動マウントを無効にします</li>
<li><strong>PSS</strong>: 本番環境の名前空間に対して制限を適用</li>
<li><strong>_監査</strong>: ログ シークレット アクセス、RBAC 変更、ポッド実行</li>
<li><strong>SecurityContext</strong>: runAsNonRoot、dropAll 機能、readOnlyRootFilesystem</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: RBAC のセットアップ__HTMLTAG_259___
<ul>
<li>異なる権限を持つ開発者/運用ロールを作成</li>
<li>_kubectl --as=developer</li> によるアクセスのテスト
<li>監査ログを有効にし、シークレット アクセスがログに記録されていることを確認__HTMLTAG_266___
</ul>

<h3 id="bt2">演習 2: ポッドのセキュリティ</h3>
<ul>
<li>制限付き PSS を使用したラベル名前空間</li>
<li>特権ポッドをデプロイ → 拒否を確認</li>
<li>制限レベルに準拠するようにポッドを修正</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>_<strong>レッスン 37: Kyverno ポリシー エンジン</strong> では、クラスターにコードとしてのポリシーを実装します。</p>