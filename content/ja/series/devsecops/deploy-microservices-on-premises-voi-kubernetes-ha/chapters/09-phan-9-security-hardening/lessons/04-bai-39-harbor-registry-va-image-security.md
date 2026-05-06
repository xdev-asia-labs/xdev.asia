---
id: 019e1a00-aa01-7001-c001-k8sha000904
title: 'レッスン 39: ハーバーレジストリと画像セキュリティ'
slug: bai-39-harbor-registry-va-image-security
description: Harbor プライベート レジストリ、Trivy 脆弱性スキャン、連署によるイメージ署名、レプリケーション ポリシー、コンテナ イメージ サプライ チェーン セキュリティを展開します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 39
section_title: 'パート 9: セキュリティの強化'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6452" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6452)"/>

  <!-- Decorations -->
  <g>
    <circle cx="653" cy="269" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="706" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="759" cy="255" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="812" cy="248" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1048.444863728671,202 1048.444863728671,236 1019,253 989.555136271329,236 989.555136271329,202 1019,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 39</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 39: 港湾登録簿と港湾登録簿画像セキュリティ</tspan>
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
<li>✅ 港湾の建築とコンポーネント</li>
<li>✅ K8 に Harbor HA を展開</li>
<li>✅ Trivy 脆弱性の自動スキャン</li>
<li>✅ 画像の署名と検証 (余署名 + 記法)</li>
<li>✅ レプリケーション ポリシー (マルチサイト)</li>
<li>✅ サプライ チェーン セキュリティのベスト プラクティス</li>
</ul>

<hr>

<h2 id="phan-1-architecture">パート 1: 港のアーキテクチャ</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-deploy">パート 2: ハーバー HA の展開</h2>

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-scanning">パート 3: 脆弱性スキャン</h2>

___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-image-signing">パート 4: 画像署名</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-replication">パート 5: レプリケーションとガベージ コレクション</h2>

___コードブロック_7___

<hr>

<h2 id="phan-6-k8s-integration">パート 6: KUBERNETES の統合</h2>

___コードブロック_8___

___コードブロック_9___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Harbor</strong>: スキャン、署名、レプリケーションを備えたエンタープライズ コンテナ レジストリ</li>
<li><strong>Trivy</strong>: プッシュ時に自動スキャンし、重大な脆弱性をブロック</li>
<li><strong>Cosign</strong>: CI/CD で画像に署名し、Kyverno で検証</li>
<li><strong>ロボット アカウント</strong>: 最小権限のプル アクセス</li>
<li><strong>画像ダイジェスト</strong>: 不変参照には sha256 ダイジェストを使用</li>
<li><strong>GC</strong>: ストレージを再利用するための定期的なガベージ コレクション</li>
</ol>

<hr><h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: 港の設定__HTMLTAG_132___
<ul>
<li>Harbor をデプロイし、プロジェクトを作成__HTMLTAG_135___
<li>_画像をプッシュし、自動スキャンを確認__HTMLTAG_137___
<li>重要な CVE のブロック ポリシーを構成する</li>
</ul>

<h3 id="bt2">_演習 2: イメージ署名パイプライン__HTMLTAG_142___
<ul>
<li>余署名キーを生成</li>
<li>CI パイプラインの構築: ビルド → スキャン → 署名 → プッシュ</li>
<li>署名を検証するように Kyverno を構成する__HTMLTAG_149___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_155___レッスン 40: カナリアとブルーグリーンのデプロイ</strong> では、セクション 10 — デプロイメント パターンと自動スケーリングを開始します。</p>