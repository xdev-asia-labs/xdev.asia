---
id: 019c9619-lt03-l10
title: '第10課：チートシートとGCP MLE試験戦略'
slug: bai-10-cheat-sheet-chien-luoc-thi
description: >-
  GCP Professional Machine Learning Engineerコース全体の総まとめ。
  GCPサービスリファレンス、評価メトリクス、ドメインの比重、試験戦略。
duration_minutes: 40
is_free: true
video_url: null
sort_order: 10
section_title: "領域5：Responsible AIと復習"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Google Cloud Professional Machine Learning Engineer 試験対策'
  slug: luyen-thi-gcp-ml-engineer
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1620" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1620)"/>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">📝 試験対策 — 第10課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第10課：チートシート &amp; GCP MLE</tspan>
      <tspan x="60" dy="42">試験戦略</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Google Cloud Professional Machine Learning Engineer 試験対策</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">領域5：Responsible AIと復習</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="exam-structure"><strong>1. GCP Professional ML Engineer試験の構成</strong></h2>

<table>
<thead><tr><th>項目</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>総問題数</strong></td><td>60問</td></tr>
<tr><td><strong>制限時間</strong></td><td>120分（2時間）</td></tr>
<tr><td><strong>合格スコア</strong></td><td>約70%（Googleは正確なスコアを公表していません）</td></tr>
<tr><td><strong>形式</strong></td><td>択一問題、複数選択問題</td></tr>
<tr><td><strong>有効期間</strong></td><td>2年間</td></tr>
<tr><td><strong>レベル</strong></td><td>Professional（中級〜上級）</td></tr>
</tbody>
</table>

<h2 id="domain-weights"><strong>2. ドメインの比重</strong></h2>

<table>
<thead><tr><th>ドメイン</th><th>比重</th></tr></thead>
<tbody>
<tr><td>1. ローコードMLソリューションのアーキテクチャ設計</td><td>約10%</td></tr>
<tr><td>2. チーム内外でのデータとモデルの管理における協力</td><td>約20%</td></tr>
<tr><td>3. プロトタイプからMLモデルへのスケーリング</td><td>約20%</td></tr>
<tr><td>4. モデルのサービングとスケーリング</td><td>約20%</td></tr>
<tr><td>5. MLパイプラインの自動化とオーケストレーション</td><td>約20%</td></tr>
<tr><td>6. MLソリューションのモニタリング</td><td>約10%</td></tr>
</tbody>
</table>

<h2 id="service-cheat-sheet"><strong>3. GCP MLサービスチートシート</strong></h2>

<table>
<thead><tr><th>タスク</th><th>GCPサービス</th></tr></thead>
<tbody>
<tr><td>ノーコード画像分類</td><td>Vertex AI AutoML Image</td></tr>
<tr><td>データウェアハウスでのSQLベースML</td><td>BigQuery ML</td></tr>
<tr><td>カスタムTensorFlow/PyTorchトレーニング</td><td>Vertex AI Custom Training</td></tr>
<tr><td>ハイパーパラメータ最適化</td><td>Vertex AI Hyperparameter Tuning（Bayesian）</td></tr>
<tr><td>学習/推論間の特徴量一貫性</td><td>Vertex AI Feature Store</td></tr>
<tr><td>MLワークフローオーケストレーション（パイプライン）</td><td>Vertex AI Pipelines（KFP）</td></tr>
<tr><td>実験追跡</td><td>Vertex AI Experiments</td></tr>
<tr><td>モデルバージョニング</td><td>Vertex AI Model Registry</td></tr>
<tr><td>モデルバージョンのA/Bテスト</td><td>Vertex AI Endpointsトラフィック分割</td></tr>
<tr><td>特徴量スキュー/ドリフトのモニタリング</td><td>Vertex AI Model Monitoring</td></tr>
<tr><td>モデル予測の説明</td><td>Vertex AI Explainability（SHAP、IG）</td></tr>
<tr><td>リアルタイムイベント取り込み</td><td>Pub/Sub</td></tr>
<tr><td>統合バッチ + ストリーミングETL</td><td>Dataflow（Apache Beam）</td></tr>
<tr><td>Spark/Hadoopワークロード</td><td>Dataproc</td></tr>
<tr><td>MLパイプラインオーケストレーション（マルチサービス）</td><td>Cloud Composer（Airflow）</td></tr>
<tr><td>自然言語分析（トレーニング不要）</td><td>Cloud Natural Language API</td></tr>
<tr><td>ドキュメント抽出</td><td>Document AI</td></tr>
<tr><td>音声からテキスト</td><td>Cloud Speech-to-Text API</td></tr>
<tr><td>データ流出の防止</td><td>VPC Service Controls</td></tr>
<tr><td>顧客管理暗号化</td><td>Cloud KMS（CMEK）</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. よくある試験の罠</strong></h2>

<table>
<thead><tr><th>罠</th><th>正解</th></tr></thead>
<tbody>
<tr><td>「ML専門知識なし、画像分類」</td><td>AutoML Image（カスタムトレーニングではない）</td></tr>
<tr><td>「BigQueryに既にあるデータでトレーニング」</td><td>BigQuery ML（Vertex AIではない）</td></tr>
<tr><td>「学習時と推論時で特徴量が異なる」</td><td>Vertex AI Feature Store（再トレーニングではない）</td></tr>
<tr><td>「データ到着時に再トレーニングをトリガー」</td><td>GCS通知 → Eventarc → Vertex AI Pipeline</td></tr>
<tr><td>「モデルが申請を拒否した理由を説明」</td><td>Vertex AI Explainability（SHAP）</td></tr>
<tr><td>「分散された病院データでトレーニング」</td><td>連合学習</td></tr>
<tr><td>「BigQueryデータの流出を防止」</td><td>VPC Service Controls</td></tr>
<tr><td>「実行間のモデルパフォーマンスを比較」</td><td>Vertex AI Experiments</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>試験のヒント：</strong> GCP Professional ML Engineer試験は通常、API構文ではなくアーキテクチャの決定について問います。主な質問パターン：「要件に最も適したサービスはどれか」、「最初のステップは何か」、「運用オーバーヘッドが最も少ないアプローチはどれか」。質問に「最小限の管理」や「サーバーレス」がある場合は、常にGCPのマネージドサービスを優先してください。</p>
</blockquote>

<h2 id="study-plan"><strong>5. 学習計画</strong></h2>

<table>
<thead><tr><th>日</th><th>集中分野</th></tr></thead>
<tbody>
<tr><td>1日目</td><td>Vertex AIフルプラットフォーム：Training、Pipelines、Endpoints、Monitoring</td></tr>
<tr><td>2日目</td><td>データエンジニアリング：Pub/Sub、Dataflow、Dataproc、Cloud Composer</td></tr>
<tr><td>3日目</td><td>BigQuery ML + 特徴量エンジニアリング + Feature Store</td></tr>
<tr><td>4日目</td><td>Responsible AI：Explainability、Fairness、Privacy、Security</td></tr>
<tr><td>5日目</td><td>模擬試験1 — 弱点の特定</td></tr>
<tr><td>6日目</td><td>弱点の復習 + 模擬試験2</td></tr>
<tr><td>7日目</td><td>チートシートの復習のみ</td></tr>
</tbody>
</table>
