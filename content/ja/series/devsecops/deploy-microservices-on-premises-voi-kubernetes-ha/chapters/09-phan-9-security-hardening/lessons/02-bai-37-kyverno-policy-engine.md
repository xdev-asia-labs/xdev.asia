---
id: 019e1a00-aa01-7001-c001-k8sha000902
title: 'レッスン 37: KYVERNO ポリシー エンジン'
slug: bai-37-kyverno-policy-engine
description: Kyverno ポリシー エンジン、検証/変更/生成ポリシー、ベスト プラクティスの適用、イメージ検証、GitOps を使用したコードとしてのポリシー ワークフローを展開します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 37
section_title: 'パート 9: セキュリティの強化'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8376" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8376)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="86" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="278" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="210" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="142" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="74" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 37</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 37: KYVERNO ポリシー エンジン</tspan>
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
<li>✅ Kyverno アーキテクチャとアドミッション Webhook</li>
<li>✅ 検証ポリシー (危険な構成をブロック)</li>
<li>✅ ミューテーション ポリシー (デフォルトの挿入)</li>
<li>✅ 生成ポリシー (リソースの自動作成)</li>
<li>✅ 画像検証 (署名)</li>
<li>✅ コードとしてのポリシー GitOps ワークフロー__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-architecture">パート 1: KYVERNO アーキテクチャ</h2>

___コードブロック_0___

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-2-validate">パート 2: 検証ポリシー</h2>

___コードブロック_3___

<hr>

<h2 id="phan-3-mutate">パート 3: ミューテーション ポリシー</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-generate">パート 4: 生成ポリシー</h2>

___コードブロック_5___

<hr>

<h2 id="phan-5-image-verify">パート 5: 画像検証</h2>

___コードブロック_6___

___コードブロック_7___

<hr>

<h2 id="phan-6-policy-reports">パート 6: 政策報告書</h2>

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Kyverno</strong>: Kubernetes ネイティブのポリシー エンジン (YAML、Rego なし)</li>
<li><strong>検証</strong>: 非準拠リソースをブロック</li>
<li><strong>Mutate</strong>: セキュリティのデフォルトを自動挿入</li>
<li><strong>生成</strong>: ネットワークポリシー、リソースクォータの自動作成</li>
<li><strong>画像検証</strong>: 連署署名が必要</li>
<li><strong>ポリシー レポート</strong>: クラスター全体のコンプライアンスの監査</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">_演習 1: コア ポリシー__HTMLTAG_132___
<ul>
<li>Kyverno をデプロイし、検証ポリシーを作成__HTMLTAG_135___
<li>テスト: 制限なしでポッドをデプロイ → ブロックされる必要があります</li>
<li>securityContext の変更ポリシーを作成</li>
</ul>

<h3 id="bt2">_演習 2: ポリシー レポート</h3>
<ul>
<li>監査モード ポリシーを使用して既存のクラスターをスキャン__HTMLTAG_145___
<li>_違反がないかポリシー レポートを確認</li>
<li>違反を修正したら強制モードに切り替える</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_155___レッスン 38: Falco ランタイム セキュリティ</strong> では、ランタイム脅威検出を実装します。</p>