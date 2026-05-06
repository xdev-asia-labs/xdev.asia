---
id: 019c9618-0203-7000-8000-c1147ba22e12
title: 'レッスン 16: ネットワーク ポリシー'
slug: bai-16-network-policies
description: 'NetworkPolicy を使用して Kubernetes ネットワークを保護します: ポッド セレクター、イングレス/エグレス ルール、デフォルト拒否パターン。 HTTP メソッド、パス、ヘッダーに基づく L7 ポリシーを備えた高度な Cilium ネットワーク ポリシー。'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 16
section_title: 'モジュール 4: ネットワーキング'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2109" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2109)"/>

  <!-- Decorations -->
  <g>
    <circle cx="792" cy="106" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="984" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="676" cy="70" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="868" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 16: ネットワーク ポリシー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 4: ネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>ポッドの内外のトラフィックを制御するための NetworkPolicy を理解します。デフォルトの拒否パターンを実装し、特定のトラフィックを許可し、L7 制御に Cilium ネットワーク ポリシーを使用します。</p>

<h2>1. NetworkPolicy が必要な理由</h2>
<p>デフォルトでは、Kubernetes はクラスター内のすべてのポッド間のすべてのトラフィックを許可します。すべてのポッドが他のすべてのポッドを呼び出すことができます。これは重大なセキュリティ リスクです。</p>
<p>NetworkPolicy を使用すると、__HTMLTAG_74___ホワイトリスト ルール</strong>: 明示的に許可されたトラフィックのみが通過します。</p>
<p><strong>重要</strong>: NetworkPolicy は、CNI プラグインがサポートしている場合にのみ機能します (Cilium、Calico、Weave)。 Flannel は NetworkPolicy をサポートしていません。</p>

<h2>2.ネットワーク ポリシーの構造</h2>
___コードブロック_0___

<h2>3.デフォルトの拒否パターン — ベスト プラクティス</h2>
<p>「すべて拒否」から始めて、必要なトラフィック ストリームをそれぞれ開きます。</p>

<h3>3.1 デフォルトですべての進入を拒否</h3>
___コードブロック_1___

<h3>3.2 デフォルトですべての下りを拒否</h3>
___コードブロック_2___

<h3>3.3 DNS を許可する (下りを拒否する場合に重要)</h3>
___コードブロック_3___

<h2>4.特定のトラフィック パターンを許可</h2>

<h3>フロントエンド → バックエンド</h3>
___コードブロック_4___

<h3>クロス名前空間: 他の名前空間から許可__HTMLTAG_98___
___コードブロック_5___

<h3>組み合わせ: ポッド セレクターと名前空間セレクター__HTMLTAG_100___
___コードブロック_6___

<h2>5. Cilium ネットワーク ポリシー — L7</h2>
<p>_標準の Kubernetes ネットワーク ポリシーは、L3/L4 (IP、ポート) のみを制御します。 Cilium CiliumNetworkPolicy により、L7 制御が可能になります。</p>

<h3>5.1 HTTP メソッドとパス</h3>
___コードブロック_7___

<h3>5.2 DNS ベースのポリシー</h3>
___コードブロック_8___<h2>6.ネットワーク ポリシーの確認とデバッグ</h2>
___コードブロック_9___

<h2>7.ベスト プラクティス</h2>
<ul>
  <li><strong>default-deny から開始</strong>: すべての実稼働名前空間に適用</li>
  <li><strong>最低権限</strong>: 絶対に必要なトラフィックのみを開く</li>
  <li><strong>ラベルの一貫性</strong>: NetworkPolicy はラベル セレクターに依存します — ラベルを一貫して設定します</li>
  <li><strong>_運用環境に適用する前のテスト</strong>: ハッブル監査モードを使用して、どのトラフィックがブロックされるかを確認します</li>
  <li><strong>ポリシーを文書化</strong>: 各ポリシーが作成された理由を説明</li>
</ul>

<h2>概要</h2>
<ul>
  <li>NetworkPolicy: ポッド トラフィックのホワイトリスト ルール</li>
  <li>デフォルトの拒否パターン: すべてブロック → 特定を許可</li>
  <li>セレクター: podSelector、namespaceSelector (項目内の AND ロジック、項目間の OR ロジック)</li>
  <li>Cilium CiliumNetworkPolicy: L7 HTTP、DNS ベースのポリシー</li>
  <li>CNI サポートが必要: Cilium、Calico (Flannel ではない)</li>
</ul>