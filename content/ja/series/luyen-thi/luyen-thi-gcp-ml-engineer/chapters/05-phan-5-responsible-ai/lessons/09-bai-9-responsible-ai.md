---
id: 019c9619-lt03-l09
title: '第9課：Responsible AIとセキュリティ'
slug: bai-9-responsible-ai
description: >-
  GoogleのResponsible AI原則。Vertex AI Explainability（SHAP、IG）。
  公平性指標。プライバシー：差分プライバシー、連合学習。
  IAM、VPC-SC、CMEKによるMLワークロードの保護。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 9
section_title: "領域5：Responsible AIと復習"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Google Cloud Professional Machine Learning Engineer 試験対策'
  slug: luyen-thi-gcp-ml-engineer
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5121" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5121)"/>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">📝 試験対策 — 第9課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第9課：Responsible AI &amp; セキュリティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Google Cloud Professional Machine Learning Engineer 試験対策</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">領域5：Responsible AIと復習</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="responsible-ai"><strong>1. GoogleのResponsible AI原則</strong></h2>

<table>
<thead><tr><th>原則</th><th>主な要件</th></tr></thead>
<tbody>
<tr><td><strong>社会的に有益</strong></td><td>社会と個人に利益をもたらす</td></tr>
<tr><td><strong>不公平なバイアスの回避</strong></td><td>人口統計グループ間で公平性をテスト</td></tr>
<tr><td><strong>安全性</strong></td><td>多様なシナリオでテスト、継続的な評価</td></tr>
<tr><td><strong>説明責任</strong></td><td>適切な人間の監視と制御</td></tr>
<tr><td><strong>プライバシー保護</strong></td><td>トレーニングデータのプライバシーを保護</td></tr>
<tr><td><strong>科学的卓越性</strong></td><td>厳格な研究基準</td></tr>
<tr><td><strong>有益な用途に利用可能</strong></td><td>主要な利益基準</td></tr>
</tbody>
</table>

<h2 id="explainability"><strong>2. Vertex AI Explainability</strong></h2>

<p>Vertex AI Explainabilityは特徴量アトリビューションスコアを提供し、モデルが特定の予測を行った理由を説明します。</p>

<table>
<thead><tr><th>手法</th><th>対象</th><th>仕組み</th></tr></thead>
<tbody>
<tr><td><strong>SHAP（Shapley Values）</strong></td><td>テーブルモデル</td><td>ゲーム理論：各特徴量の貢献度</td></tr>
<tr><td><strong>Integrated Gradients（IG）</strong></td><td>ニューラルネットワーク（画像、テキスト）</td><td>ベースラインから入力への勾配累積</td></tr>
<tr><td><strong>XRAI</strong></td><td>画像モデル</td><td>ピクセル領域のアトリビューション（IGよりUXが優れている）</td></tr>
<tr><td><strong>Sampled Shapley</strong></td><td>大規模テーブルデータセット</td><td>近似SHAP、より高速</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>試験のヒント：</strong> 「ローンが拒否された理由を説明」→ テーブルモデル向けSHAP。「分類を左右した画像領域をハイライト」→ Integrated GradientsまたはXRAI。Vertex AI Explainabilityはエンドポイントのデプロイ時に有効化する必要があります。</p>
</blockquote>

<h2 id="fairness"><strong>3. 公平性とバイアス検出</strong></h2>

<table>
<thead><tr><th>ツール/概念</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>Fairness Indicators</strong></td><td>GCPツール：人口統計スライス間でモデルの公平性メトリクスを評価</td></tr>
<tr><td><strong>What-If Tool</strong></td><td>モデル動作のインタラクティブな探索、反事実分析</td></tr>
<tr><td><strong>Demographic parity</strong></td><td>人口統計グループ間で同じ予測率</td></tr>
<tr><td><strong>Equal opportunity</strong></td><td>グループ間で同じRecall/TPR</td></tr>
<tr><td><strong>データスライス評価</strong></td><td>TFX Evaluatorで性別、人種、年齢ごとにメトリクスを評価</td></tr>
</tbody>
</table>

<h2 id="privacy"><strong>4. プライバシー技法</strong></h2>

<table>
<thead><tr><th>技法</th><th>説明</th></tr></thead>
<tbody>
<tr><td><strong>差分プライバシー</strong></td><td>トレーニングデータ/モデルに統計的ノイズを追加、個人データの再識別を防止</td></tr>
<tr><td><strong>連合学習</strong></td><td>生データを集中化せずに分散データでトレーニング — モデル更新のみ</td></tr>
<tr><td><strong>データ匿名化</strong></td><td>トレーニング前にPIIを削除（Cloud DLP API）</td></tr>
</tbody>
</table>

<h2 id="security"><strong>5. MLワークロード向けセキュリティ制御</strong></h2>

<table>
<thead><tr><th>制御</th><th>目的</th></tr></thead>
<tbody>
<tr><td><strong>IAMロール</strong></td><td>MLサービスアカウントの最小権限アクセス</td></tr>
<tr><td><strong>VPC Service Controls（VPC-SC）</strong></td><td>セキュリティ境界：BigQuery、GCSからのデータ流出を防止</td></tr>
<tr><td><strong>CMEK（顧客管理暗号化キー）</strong></td><td>Cloud KMS経由で暗号化キーを制御</td></tr>
<tr><td><strong>Vertex AI用プライベートIP</strong></td><td>トレーニングとエンドポイントがプライベートネットワーキングを使用</td></tr>
<tr><td><strong>Cloud Audit Logs</strong></td><td>誰がどのデータにいつアクセスしたか（Data Access + Admin Activity）</td></tr>
</tbody>
</table>

<pre><code class="language-text">VPC Service Controls Perimeter:

┌────── Security Perimeter ─────────┐
│  BigQuery  │  Cloud Storage       │
│  Vertex AI │  Cloud KMS           │
│  Dataflow  │  Secret Manager      │
└──────────────────────────────────┘
         │ (no exfiltration outside perimeter)
         ✗ Unauthorized access blocked
</code></pre>

<h2 id="practice"><strong>6. 練習問題</strong></h2>

<p><strong>Q1：</strong> 金融サービス企業がローン審査MLモデルをデプロイしました。規制当局は、特定のローン申請が拒否された理由を説明することを要求しています。テーブルモデルの予測ごとの特徴量重要度スコアを提供するVertex AI機能はどれでしょうか？</p>
<ul>
<li>A) Vertex AI Experiments</li>
<li>B) SHAPを使用したVertex AI Explainability ✓</li>
<li>C) Vertex AI Model Monitoring</li>
<li>D) Fairness Indicators</li>
</ul>
<p><em>解説：Shapley Values（SHAP）を使用したVertex AI Explainabilityは、各個別の予測に対して各特徴量に重要度スコアを割り当て、credit_score、income、debt_ratioなどの特定の入力特徴量にモデルの決定を帰属させることで、特定のローンが拒否された理由を説明します。</em></p>

<p><strong>Q2：</strong> ヘルスケア企業が、複数の病院に分散された患者データでMLモデルをトレーニングする必要があります。データプライバシー規制により、生の患者記録の集中化は禁止されています。どのプライバシー保護MLアプローチを使用すべきでしょうか？</p>
<ul>
<li>A) 中央集中型トレーニングでの差分プライバシー</li>
<li>B) 連合学習 ✓</li>
<li>C) データ匿名化 + BigQuery ML</li>
<li>D) Cloud DLPの非識別化</li>
</ul>
<p><em>解説：連合学習は、生データを中央の場所に移動せずに分散データでモデルをトレーニングします。各病院は自身のデータでローカルにトレーニングし、モデル更新（勾配）のみが共有・集約されます。生の患者記録は病院の環境を離れません。</em></p>

<p><strong>Q3：</strong> 企業がMLトレーニング用にBigQueryで機密金融データを処理しています。承認されたセキュリティ境界外の未承認GCPプロジェクトへのデータ移動を防ぐ必要があります。どのGCP機能を実装すべきでしょうか？</p>
<ul>
<li>A) Cloud KMS CMEK暗号化</li>
<li>B) VPC Service Controls（VPC-SC）境界 ✓</li>
<li>C) IAMロール拒否ポリシー</li>
<li>D) Cloud Armor WAF</li>
</ul>
<p><em>解説：VPC Service Controlsは、GCPサービス（BigQuery、Cloud Storage、Vertex AI）の周囲にセキュリティ境界を作成します。認証されたユーザーからであっても、定義された境界外にデータを移動するリクエストをブロックすることで、データ流出を防ぎます。CMEKは暗号化制御を提供しますが、流出を防ぎません。</em></p>
