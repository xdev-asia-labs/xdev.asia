---
id: 019c9618-0602-7000-8000-c1147ba22e16
title: 'レッスン 34: オペレーターとカスタム リソース'
slug: bai-34-operators-va-custom-resources
description: 'オペレーター パターン: CRD、カスタム コントローラー、オペレーター SDK、Kubebuilder。一般的な演算子: Prometheus Operator、CloudNativePG (PostgreSQL)、Strimzi (Kafka)。 Kubebuilder を使用して簡単な演算子を作成します。'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 34
section_title: 'モジュール 8: ヘルム、オペレーター、GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2066" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2066)"/>

  <!-- Decorations -->
  <g>
    <circle cx="864" cy="42" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="628" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="892" cy="50" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="656" cy="54" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="58" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1054.0429399400243,203.5 1054.0429399400243,240.5 1022,259 989.9570600599758,240.5 989.9570600599758,203.5 1022,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 34</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 34: オペレーターとカスタム リソース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 8: ヘルム、オペレーター、およびGitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>オペレーター パターン、CRD を使用して Kubernetes API を拡張する方法、および一般的なオペレーター (Prometheus、CloudNativePG、Strimzi) がステートフル アプリケーションの管理にどのように役立つかを理解します。</p>

<h2>1.演算子パターン</h2>
<p>オペレーターは、アプリケーションの__HTMLTAG_72___運用知識</strong>をKubernetesコントローラーにエンコードします。管理者が手動の手順 (バックアップ、フェイルオーバー、スケーリング) を実行する代わりに、オペレーターがそれらを自動化します。</p>
<p><strong>例</strong>: PostgreSQL プライマリを手動でフェイルオーバーする方法を知る必要はありません。CloudNativePG Operator はプライマリのダウンを自動的に検出し、数秒以内にレプリカを昇格させます。</p>
<p>オペレーター = CRD (カスタム リソース タイプ) + カスタム コントローラー (監視と動作)</p>

<h2>2.カスタム リソース定義 (CRD)</h2>
___コードブロック_0___
___コードブロック_1___

<h2>3.コントローラー ループ</h2>
<p>カスタム コントローラーは継続的にリソースを監視し、リソースを望ましい状態に調整します:</p>
___コードブロック_2___

<h2>4. Kubebuilder — ビルド オペレーター</h2>
___コードブロック_3___
___コードブロック_4___

<h2>5.一般的な演算子 — 2026</h2>

<h3>5.1 プロメテウス オペレーター</h3>
___コードブロック_5___

<h3>5.2 CloudNativePG — PostgreSQL (CNCF 卒業済み)</h3>
___コードブロック_6___
___コードブロック_7___

<h3>5.3 Strimzi — Apache Kafka</h3>
___コードブロック_8___

<h3>5.4 証明書マネージャー</h3>
___コードブロック_9___

<h2>6.オペレーター ハブと OLM</h2>
___コードブロック_10___<h2>概要</h2>
<ul>
  <li>Operator = CRD + 2 日目の操作を自動化するカスタム コントローラー__HTMLTAG_105___
  <li>CRD は、カスタム リソース タイプを使用して Kubernetes API を拡張します</li>
  <li>Kubebuilder: Go を使用したスキャフォールディングとビルド オペレーター</li>
  <li>CloudNativePG: 最高の PostgreSQL オペレーター (CNCF 卒業、自動フェイルオーバー)</li>
  <li>Strimzi: Kubernetes での Kafka ライフサイクル管理__HTMLTAG_113___
  <li>cert-manager: TLS 証明書の自動化</li>
</ul>