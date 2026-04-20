---
id: 722555b5-e196-45c3-9061-a4f72197e2ed
title: '第11課：総合チートシート'
slug: bai-11-cheat-sheet
description: >-
  コース全体の総合表：SageMakerアルゴリズム、AWS AIサービス、
  評価指標、重要な公式、試験でよくある罠。
duration_minutes: 40
is_free: true
video_url: null
sort_order: 11
section_title: "パート4：総合復習"
course:
  id: 019c9619-lt02-7002-c002-lt0200000002
  title: 'AWS認定機械学習 - 専門知識 試験対策'
  slug: luyen-thi-aws-ml-specialty
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2816" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2816)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="139" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="125" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="248" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="111" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">📝 試験対策 — 第11課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第11課：総合チートシート</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AWS認定機械学習 - 専門知識 試験対策</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート4：総合復習</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="algorithms-master"><strong>1. SageMaker組み込みアルゴリズム — マスターテーブル</strong></h2>

<table>
<thead><tr><th>アルゴリズム</th><th>タイプ</th><th>最適な用途</th><th>入力</th></tr></thead>
<tbody>
<tr><td><strong>XGBoost</strong></td><td>教師あり（C/R）</td><td>テーブルデータ、コンペティション</td><td>CSV、LibSVM</td></tr>
<tr><td><strong>Linear Learner</strong></td><td>教師あり（C/R）</td><td>高次元、高速</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>Random Cut Forest</strong></td><td>教師なし</td><td>異常検知</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>K-Means</strong></td><td>教師なし</td><td>顧客セグメンテーション</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>PCA</strong></td><td>次元削減</td><td>特徴量圧縮</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>Factorization Machines</strong></td><td>教師あり（C/R）</td><td>疎データ、レコメンデーション</td><td>RecordIOのみ</td></tr>
<tr><td><strong>DeepAR+</strong></td><td>教師あり</td><td>時系列予測</td><td>JSON Lines</td></tr>
<tr><td><strong>BlazingText</strong></td><td>教師あり/教師なし</td><td>テキスト分類、word2vec</td><td>テキストファイル</td></tr>
<tr><td><strong>Object2Vec</strong></td><td>教師あり</td><td>意味的類似性</td><td>JSON Lines</td></tr>
<tr><td><strong>Image Classification</strong></td><td>教師あり</td><td>画像ラベル</td><td>RecordIO、生画像</td></tr>
<tr><td><strong>Object Detection</strong></td><td>教師あり</td><td>バウンディングボックス</td><td>RecordIO、JSON</td></tr>
<tr><td><strong>Semantic Segmentation</strong></td><td>教師あり</td><td>ピクセルレベル分類</td><td>画像 + マスク</td></tr>
<tr><td><strong>LDA</strong></td><td>教師なし</td><td>トピックモデリング</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>NTM</strong></td><td>教師なし</td><td>ニューラルトピックモデリング</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>IP Insights</strong></td><td>教師なし</td><td>IPアドレス異常</td><td>CSV</td></tr>
</tbody>
</table>

<h2 id="aws-ai-services"><strong>2. AWS AIサービス — ノーコードML</strong></h2>

<table>
<thead><tr><th>サービス</th><th>目的</th><th>出力</th></tr></thead>
<tbody>
<tr><td><strong>Amazon Rekognition</strong></td><td>画像/動画分析</td><td>ラベル、顔、テキスト、モデレーション</td></tr>
<tr><td><strong>Amazon Textract</strong></td><td>文書抽出</td><td>テキスト、フォーム、テーブル</td></tr>
<tr><td><strong>Amazon Comprehend</strong></td><td>NLP、テキスト分析</td><td>エンティティ、感情、トピック</td></tr>
<tr><td><strong>Amazon Translate</strong></td><td>機械翻訳</td><td>翻訳テキスト</td></tr>
<tr><td><strong>Amazon Transcribe</strong></td><td>音声テキスト変換</td><td>文字起こし、字幕</td></tr>
<tr><td><strong>Amazon Polly</strong></td><td>テキスト音声変換</td><td>音声</td></tr>
<tr><td><strong>Amazon Lex</strong></td><td>会話AI（チャットボット）</td><td>インテント、スロット</td></tr>
<tr><td><strong>Amazon Kendra</strong></td><td>インテリジェント検索</td><td>回答、文書</td></tr>
<tr><td><strong>Amazon Personalize</strong></td><td>レコメンデーション</td><td>アイテムランキング、ユーザーレコメンデーション</td></tr>
<tr><td><strong>Amazon Forecast</strong></td><td>時系列予測</td><td>予測 + 信頼区間</td></tr>
<tr><td><strong>Amazon Lookout for Vision</strong></td><td>視覚的異常（製造業）</td><td>合格/不合格、異常マップ</td></tr>
<tr><td><strong>Amazon Lookout for Equipment</strong></td><td>設備異常（IoT）</td><td>異常スコア</td></tr>
</tbody>
</table>

<h2 id="metrics"><strong>3. 評価指標クイックリファレンス</strong></h2>

<table>
<thead><tr><th>指標</th><th>式</th><th>使用場面</th></tr></thead>
<tbody>
<tr><td><strong>Accuracy</strong></td><td>(TP+TN)/(TP+TN+FP+FN)</td><td>均衡クラス</td></tr>
<tr><td><strong>Precision</strong></td><td>TP/(TP+FP)</td><td>FPのコストが高い（スパムフィルター）</td></tr>
<tr><td><strong>Recall（感度）</strong></td><td>TP/(TP+FN)</td><td>FNのコストが高い（がん診断）</td></tr>
<tr><td><strong>F1スコア</strong></td><td>2×(P×R)/(P+R)</td><td>不均衡クラス</td></tr>
<tr><td><strong>AUC-ROC</strong></td><td>TPR対FPR曲線下面積</td><td>分類器の総合品質</td></tr>
<tr><td><strong>RMSE</strong></td><td>√(Σ(yᵢ-ŷᵢ)²/n)</td><td>回帰、外れ値をペナルティ</td></tr>
<tr><td><strong>MAE</strong></td><td>Σ|yᵢ-ŷᵢ|/n</td><td>回帰、外れ値にロバスト</td></tr>
<tr><td><strong>MAPE</strong></td><td>Σ|yᵢ-ŷᵢ|/|yᵢ| × 100%</td><td>予測、解釈しやすい%</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. 試験でよくある罠</strong></h2>

<table>
<thead><tr><th>罠</th><th>試験での表現</th><th>正解</th></tr></thead>
<tbody>
<tr><td>不均衡データ + accuracy</td><td>「モデルが99%のaccuracy」（不正検知）</td><td>Precision/Recall/F1を使用、accuracyではない</td></tr>
<tr><td>FM入力フォーマット</td><td>Factorization Machines</td><td>RecordIOのみ必須（CSVではない）</td></tr>
<tr><td>マネージド vs カスタム</td><td>「最も迅速に実装」</td><td>マネージドを優先（Personalize、Forecast）</td></tr>
<tr><td>過学習の修正</td><td>訓練accuracyが高い、検証accuracyが低い</td><td>正則化（L1/L2）またはデータ追加</td></tr>
<tr><td>SageMaker + インターネット</td><td>「安全な環境、インターネットなし」</td><td>VPC + ネットワーク分離 + VPCエンドポイント</td></tr>
<tr><td>Ground Truthラベリング</td><td>「ラベリングコストの削減」</td><td>GTの自動ラベリング（能動学習）</td></tr>
<tr><td>モデルのバイアス</td><td>「デプロイ前にバイアスを特定」</td><td>SageMaker Clarify</td></tr>
<tr><td>1つのエンドポイントに複数モデル</td><td>「コスト削減、単一エンドポイント」</td><td>マルチモデルエンドポイント（MME）</td></tr>
</tbody>
</table>

<h2 id="storage-formats"><strong>5. データ/ストレージクイックリファレンス</strong></h2>

<table>
<thead><tr><th>シナリオ</th><th>最適な選択</th></tr></thead>
<tbody>
<tr><td>大規模テーブル訓練データ</td><td>S3 + CSVまたはParquet；SageMaker用RecordIO</td></tr>
<tr><td>リアルタイムストリーミングデータ取り込み</td><td>Kinesis Data Streams → Firehose → S3</td></tr>
<tr><td>S3データ上のアドホックSQLクエリ</td><td>Amazon Athena</td></tr>
<tr><td>ETL変換 → Feature Store</td><td>AWS Glue（Spark ETL）→ SageMaker Feature Store</td></tr>
<tr><td>BI/ダッシュボード</td><td>Amazon QuickSight</td></tr>
<tr><td>ML特徴量用データウェアハウス</td><td>Amazon Redshift → ML（Redshift ML）</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>試験のヒント：</strong> 覚えておいてください：問題に「最速/最も簡単/ノーコード」とある場合 → AWSマネージドAIサービス。「カスタムモデル/柔軟性/自前のモデル」とある場合 → SageMaker。これが最も重要な判断基準です。</p>
</blockquote>
