---
id: 019c9618-0601-7000-8000-c1147ba22e16
title: 'レッスン 33: Helm 4 — パッケージ マネージャー Kubernetes'
slug: bai-33-helm-4-package-manager-kubernetes
description: Helm 4 は 2025 年 11 月にリリースされ、WASM プラグイン、サーバー側アプリケーション、60% のパフォーマンスを備えています。 Helm チャートの構造、リポジトリ、OCI レジストリ。フック、テスト、Helmfile。 Helm 4 と Helm 3 を比較し、いつ KusTOMize を使用するかを比較します。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 33
section_title: 'モジュール 8: ヘルム、オペレーター、GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1346" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1346)"/>

  <!-- Decorations -->
  <g>
    <circle cx="699" cy="87" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="798" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="897" cy="125" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="996" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="77" x2="1100" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="107" x2="1050" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.712812921102,161 1004.712812921102,193 977,209 949.287187078898,193 949.287187078898,161 977,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 33</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 33: HELM 4 — パッケージ マネージャー</tspan>
      <tspan x="60" dy="42">_KUBERNETES_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 8: ヘルム、オペレーター、およびGitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目標</h2><p>Kubernetes のパッケージ マネージャーとしての Helm 4、チャートの構造、インストール/アップグレード/ロールバックの方法、Helm 4 の新機能 (WASM、サーバー側適用)、および Helm の代わりに KusTOMize を使用する場合について理解します。</p>

<h2>1. Helm とは何ですか?</h2>
<p>Helm は、Kubernetes</strong> の__HTMLTAG_74___パッケージ マネージャーです。Ubuntu の apt、macOS の brew に似ています。 Helm は、Kubernetes リソースを「チャート」にパッケージ化し、共有、バージョン管理、パラメーター化が可能です。</p>
<p><strong>メリット</strong>:</p>
<ul>
  <li>複雑なアプリケーション (多くのリソース) を 1 つのユニットにパッケージ化__HTMLTAG_83___
  <li>values.yaml</li> によるパラメータ化
  <li>リリース履歴とロールバック__HTMLTAG_87___
  <li>依存関係の管理</li>
  <li>エコシステム: 数千のコミュニティ チャート (アーティファクト ハブ)</li>
</ul><h2>2. Helm 4 — 2025 年 11 月 (10 周年)</h2>
<p><strong>Helm 3 からの重大な変更</strong>:</p>
<ul>
  <li><strong>WebAssembly (WASM) プラグイン</strong>: プラグインは WASM にコンパイルされ、OS 全体で移植可能、サンドボックス実行</li>
  <li><strong>サーバー側適用 (SSA)</strong>: クライアント側マージの代わりに K8s SSA を使用します — フィールド所有権の競合を解決します</li>
  <li><strong>60% のパフォーマンス向上</strong>: 特に大きなグラフ (1000 以上のリソース)</li>
  <li><strong>OCI の機能強化</strong>: マルチアーチ チャート、来歴、証明</li>
  <li><strong>_組み込み Helm の差分</strong>: アップグレード前に違いを確認</li>
  <li>Helm 3 は 2026 年 11 月まで引き続きセキュリティ修正を受け取ります</li>
</ul>

<h2>3. Helm チャートの構造</h2>
___コードブロック_0___
___コードブロック_1___

<h2>4. value.yaml とテンプレート</h2>
___コードブロック_2___
___コードブロック_3___

<h2>5.ヘルム コマンド</h2>
___コードブロック_4___

<h2>6. OCI レジストリ</h2>
___コードブロック_5___

<h2>7.ヘルムフック</h2>
___コードブロック_6___
<p>Helm フックは、データベース移行 (インストール前)、スモーク テスト (インストール後)、バックアップ (削除前) に使用できます。</p>

<h2>8。 Helm テスト</h2>
___コードブロック_7___
___コードブロック_8___

<h2>9. Helmfile — 複数のリリースの管理</h2>
___コードブロック_9___
___コードブロック_10___

<h2>10. Helm vs Customize</h2>
<ul>
  <li><strong>次の場合に Helm を使用します</strong>: 他のユーザーにチャートを配布する、複雑なパラメーター化が必要、依存関係の管理が必要、エコシステム チャート (ビットナミ、コミュニティ)</li>
  <li><strong>次の場合に KusTOMize を使用します</strong>: 単純なオーバーレイ (開発/ステージング/本番)、組み込み kubectl (追加のインストールは不要)、GitOps ワークフロー、テンプレートなしで YAML にパッチを適用__HTMLTAG_149___
</ul>
___コードブロック_11___

<h2>概要</h2>
<ul>
  <li>Helm 4 (2025 年 11 月): WASM プラグイン、SSA、60% パフォーマンス、組み込みの差分</li>
  <li>チャート構造: Chart.yaml、values.yaml、テンプレート/</li>
  <li>OCI レジストリ: ファーストクラスのサポート、リポジトリは不要 add</li>
  <li>フック: ライフサイクル操作のインストール前/後/アップグレード/削除</li>
  <li>Helmfile: 複数の Helm リリースを調整</li>
  <li>Helm と KusTOMize: 配布用の Helm、単純なオーバーレイ用の KusTOMize</li>
</ul>