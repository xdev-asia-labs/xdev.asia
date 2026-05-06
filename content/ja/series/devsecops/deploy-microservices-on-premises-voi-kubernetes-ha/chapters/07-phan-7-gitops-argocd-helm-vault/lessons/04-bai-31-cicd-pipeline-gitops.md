---
id: 019e1a00-aa01-7001-c001-k8sha000704
title: 'レッスン 31: CI/CD パイプライン — GITOPS を使用した構築、テスト、デプロイ'
slug: bai-31-cicd-pipeline-build-test-deploy-voi-gitops
description: '完全な CI/CD パイプラインを構築します: GitHub Actions のビルドとテスト、コンテナー イメージのビルド、脆弱性スキャン、GitOps トリガー、ArgoCD 自動デプロイ、プロモーション ワークフロー。'
duration_minutes: 180
is_free: true
video_url: null
sort_order: 31
section_title: 'パート 7: ArgoCD、Helm、Vault を使用した GitOps'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4035" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4035)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 31</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 31: CI/CD パイプライン — ビルド、テスト、</tspan>
      <tspan x="60" dy="42">GITOPS で導入</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: ArgoCD を使用した GitOps、Helm、および保管庫</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ マイクロサービス + GitOps 用の CI/CD パイプラインを設計</li>
<li>✅ GitHub アクション: ビルド、テスト、lint、スキャン</li>
<li>✅ マルチステージ Dockerfile__HTMLTAG_75___ を使用したコンテナ イメージのビルド
<li>✅ 画像の脆弱性スキャン (Trivy)</li>
<li>✅ GitOps トリガー: Git のイメージ タグの自動更新</li>
<li>✅ 環境プロモーションのワークフロー (開発→ステージング→本番)</li>
</ul>

<hr>

<h2 id="phan-1-pipeline-design">パート 1: CI/CD + GITOPS パイプライン設計</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-dockerfile">パート 2: マルチステージ DOCKERFILE</h2>

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-github-actions">パート 3: GITHUB アクション CI パイプライン</h2>

___コードブロック_3___

<hr>

<h2 id="phan-4-promotion">パート 4: 環境推進</h2>

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-5-harbor">パート 5: プライベート レジストリ (ハーバー)</h2>

___コードブロック_6___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>2 つのリポジトリ</strong>: アプリ リポジトリ (CI) + GitOps リポジトリ (CD) の分離</li>
<li><strong>_CI パイプライン</strong>: テスト → ビルド → スキャン → 画像のプッシュ</li>
<li><strong>GitOps トリガー</strong>: CI が GitOps リポジトリ内のイメージ タグを更新</li>
<li><strong>ArgoCD 自動同期</strong>: タグの変更を検出 → K8s に展開</li>
<li><strong>プロモーション</strong>: 自動からステージング、PR ベースから運用</li>
<li><strong>Harbor</strong>: 脆弱性スキャンが組み込まれたプライベート レジストリ</li>
</ol>

<hr><h2 id="bai-tap">🎯 演習__HTMLTAG_129___

<h3 id="bt1">演習 1: パイプラインの完成</h3>
<ul>
<li>サンプル Go サービス用の GitHub Actions CI のセットアップ</li>
<li>ビルドしてハーバーにプッシュし、Trivy でスキャン</li>
<li>GitOps リポジトリの自動更新、ArgoCD のデプロイ</li>
</ul>

<h3 id="bt2">演習 2: プロモーション ワークフロー</h3>
<ul>
<li>ステージング→本番プロモーションの実施 PR</li>
<li>必要なレビュー担当者とチェックを追加</li>
<li>全サイクルのテスト: コード変更→運用環境へのデプロイ</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_154___レッスン 32: Prometheus スタック — インフラストラクチャの監視</strong> では、Prometheus、Grafana、および Alertmanager を使用して可観測性スタックをセットアップします。</p>