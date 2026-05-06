---
id: 019c9618-0403-7000-8000-c1147ba22e14
title: 'レッスン 25: セキュリティのベスト プラクティス Kubernetes 2026'
slug: bai-25-security-best-practices-kubernetes-2026
description: SecurityContext (非ルート、読み取り専用ファイルシステム、ドロップ機能)、Cosign/Sigstore によるサプライ チェーン セキュリティ、SBOM、保存時の秘密の暗号化、ネットワーク分離のベスト プラクティス。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 25
section_title: 'モジュール 6: セキュリティ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="93" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="135" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="156" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="177" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 25: セキュリティのベスト プラクティス KUBERNETES</tspan>
      <tspan x="60" dy="42">2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 6: セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目標</h2><p>Kubernetes 2026 のセキュリティのベスト プラクティスをマスターする: SecurityContext の強化、Cosign によるサプライ チェーン セキュリティ、SBOM 生成、安全なシークレット管理</p>

<h2>1. SecurityContext — コンテナの強化</h2>
<p>_SecurityContext は、ポッドまたはコンテナのセキュリティ設定を定義します。多層防御の適用:</p>
___コードブロック_0___
<p><strong>readOnlyRootFilesystem</strong>: アプリがファイルを書き込む必要がある場合は、__HTMLTAG_78___emptyDir</code> ボリューム:</p> を使用します。
___コードブロック_1___

<h2>2.サプライ チェーンのセキュリティ — Cosign/Sigstore</h2>
<p>コンテナ イメージが信頼できるソースによって構築され、署名されていることを確認してください。</p>

<h3>2.1 コサインを使用して画像に署名</h3>
___コードブロック_2___

<h3>2.2 Sigstore ポリシー コントローラー</h3>
___コードブロック_3___
___コードブロック_4___

<h2>3. SBOM — ソフトウェア部品表</h2>
<p>SBOM はコンテナ イメージ内のすべてのパッケージと依存関係をリストし、脆弱性の追跡に役立ちます。</p>
___コードブロック_5___

<h2>4.シークレット管理のベスト プラクティス</h2>

<h3>4.1 保存時のシークレットの暗号化</h3>
___コードブロック_6___
___コードブロック_7___

<h3>4.2 外部シークレットの管理</h3>
<p>Kubernetes etcd にシークレットを保存する代わりに、外部シークレット オペレーターを使用して次から同期します。</p>
<ul>
  <li>AWS Secrets Manager_</li>
  <li>HashiCorp Vault</li>
  <li>GCP シークレット マネージャー_</li>
  <li>_Azure Key Vault</li>
</ul>
___コードブロック_8___

<h2>5.画像セキュリティのベスト プラクティス_</h2>
___コードブロック_9___

<h2>6.ネットワーク セキュリティ_</h2>
___コードブロック_10___<h2>7.監査ログ_</h2>
___コードブロック_11___

<h2>概要 — セキュリティ チェックリスト 2026</h2>
<ul>
  <li>✅ SecurityContext: 非ルート、readOnlyRootFilesystem、dropAll caps、seccomp RuntimeDefault</li>
  <li>✅ ポッド セキュリティ アドミッション: 運用名前空間の制限モード</li>
  <li>✅ Cosign で画像に署名し、Policy Controller で強制</li>
  <li>✅ SBOM を生成し、Grype でスキャン</li>
  <li>✅ 保存時のシークレット暗号化または外部シークレット オペレーター</li>
  <li>✅ ネットワーク ポリシー: デフォルト拒否</li>
  <li>✅ RBAC: 最小権限の ServiceAccounts</li>
  <li>✅ シークレットと重要なリソースの監査ログ__HTMLTAG_135___
  <li>✅ プライベート レジストリから取得した特定のイメージ タグ (:latest は使用しないでください)</li>
</ul>