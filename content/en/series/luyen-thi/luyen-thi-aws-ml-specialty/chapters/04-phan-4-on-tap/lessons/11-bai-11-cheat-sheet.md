---
id: 722555b5-e196-45c3-9061-a4f72197e2ed
title: 'Lesson 11: Comprehensive Cheat Sheet'
slug: bai-11-cheat-sheet
description: >-
  Full course summary: SageMaker algorithms, AWS AI services,
  evaluation metrics, important formulas, and common exam traps.
duration_minutes: 40
is_free: true
video_url: null
sort_order: 11
section_title: "Part 4: Review & Exam Strategy"
course:
  id: 019c9619-lt02-7002-c002-lt0200000002
  title: 'AWS Certified Machine Learning - Specialty Exam Prep'
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">📝 Exam Prep — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: Comprehensive Cheat Sheet</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AWS Certified Machine Learning - Specialty Exam Prep</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Review & Exam Strategy</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="algorithms-master"><strong>1. SageMaker Built-in Algorithms Master Table</strong></h2>

<table>
<thead><tr><th>Algorithm</th><th>Type</th><th>Best For</th><th>Input</th></tr></thead>
<tbody>
<tr><td><strong>XGBoost</strong></td><td>Supervised (C/R)</td><td>Tabular data, competitions</td><td>CSV, LibSVM</td></tr>
<tr><td><strong>Linear Learner</strong></td><td>Supervised (C/R)</td><td>High-dimensional, fast</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>Random Cut Forest</strong></td><td>Unsupervised</td><td>Anomaly detection</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>K-Means</strong></td><td>Unsupervised</td><td>Customer segmentation</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>PCA</strong></td><td>Dimensionality Reduction</td><td>Feature reduction</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>Factorization Machines</strong></td><td>Supervised (C/R)</td><td>Sparse data, recommendations</td><td>RecordIO only</td></tr>
<tr><td><strong>DeepAR+</strong></td><td>Supervised</td><td>Time series forecasting</td><td>JSON Lines</td></tr>
<tr><td><strong>BlazingText</strong></td><td>Supervised / Unsupervised</td><td>Text classification, word2vec</td><td>Text files</td></tr>
<tr><td><strong>Object2Vec</strong></td><td>Supervised</td><td>Semantic similarity</td><td>JSON Lines</td></tr>
<tr><td><strong>Image Classification</strong></td><td>Supervised</td><td>Image labels</td><td>RecordIO, raw images</td></tr>
<tr><td><strong>Object Detection</strong></td><td>Supervised</td><td>Bounding boxes</td><td>RecordIO, JSON</td></tr>
<tr><td><strong>Semantic Segmentation</strong></td><td>Supervised</td><td>Pixel-level classification</td><td>Images + masks</td></tr>
<tr><td><strong>LDA</strong></td><td>Unsupervised</td><td>Topic modeling</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>NTM</strong></td><td>Unsupervised</td><td>Neural topic modeling</td><td>CSV, RecordIO</td></tr>
<tr><td><strong>IP Insights</strong></td><td>Unsupervised</td><td>IP address anomaly</td><td>CSV</td></tr>
</tbody>
</table>

<h2 id="aws-ai-services"><strong>2. AWS AI Services — No-Code ML</strong></h2>

<table>
<thead><tr><th>Service</th><th>Purpose</th><th>Output</th></tr></thead>
<tbody>
<tr><td><strong>Amazon Rekognition</strong></td><td>Image/video analysis</td><td>Labels, faces, text, moderation</td></tr>
<tr><td><strong>Amazon Textract</strong></td><td>Document extraction</td><td>Text, forms, tables</td></tr>
<tr><td><strong>Amazon Comprehend</strong></td><td>NLP, text analytics</td><td>Entities, sentiment, topics</td></tr>
<tr><td><strong>Amazon Translate</strong></td><td>Machine translation</td><td>Translated text</td></tr>
<tr><td><strong>Amazon Transcribe</strong></td><td>Speech to text</td><td>Transcription, subtitles</td></tr>
<tr><td><strong>Amazon Polly</strong></td><td>Text to speech</td><td>Audio</td></tr>
<tr><td><strong>Amazon Lex</strong></td><td>Conversational AI (chatbot)</td><td>Intent, slots</td></tr>
<tr><td><strong>Amazon Kendra</strong></td><td>Intelligent search</td><td>Answers, documents</td></tr>
<tr><td><strong>Amazon Personalize</strong></td><td>Recommendations</td><td>Item rankings, user recs</td></tr>
<tr><td><strong>Amazon Forecast</strong></td><td>Time series forecasting</td><td>Predictions + confidence</td></tr>
<tr><td><strong>Amazon Lookout for Vision</strong></td><td>Visual anomaly (manufacturing)</td><td>Pass/Fail, anomaly map</td></tr>
<tr><td><strong>Amazon Lookout for Equipment</strong></td><td>Equipment anomaly (IoT)</td><td>Anomaly scores</td></tr>
</tbody>
</table>

<h2 id="metrics"><strong>3. Evaluation Metrics Quick Reference</strong></h2>

<table>
<thead><tr><th>Metric</th><th>Formula</th><th>Use When</th></tr></thead>
<tbody>
<tr><td><strong>Accuracy</strong></td><td>(TP+TN)/(TP+TN+FP+FN)</td><td>Balanced classes</td></tr>
<tr><td><strong>Precision</strong></td><td>TP/(TP+FP)</td><td>FP is costly (spam filter)</td></tr>
<tr><td><strong>Recall (Sensitivity)</strong></td><td>TP/(TP+FN)</td><td>FN is costly (cancer diagnosis)</td></tr>
<tr><td><strong>F1 Score</strong></td><td>2×(P×R)/(P+R)</td><td>Imbalanced classes</td></tr>
<tr><td><strong>AUC-ROC</strong></td><td>Area under TPR vs FPR curve</td><td>Overall classifier quality</td></tr>
<tr><td><strong>RMSE</strong></td><td>√(Σ(yᵢ-ŷᵢ)²/n)</td><td>Regression, penalizes outliers</td></tr>
<tr><td><strong>MAE</strong></td><td>Σ|yᵢ-ŷᵢ|/n</td><td>Regression, robust to outliers</td></tr>
<tr><td><strong>MAPE</strong></td><td>Σ|yᵢ-ŷᵢ|/|yᵢ| × 100%</td><td>Forecasting, interpretable %</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. Common Exam Traps</strong></h2>

<table>
<thead><tr><th>Trap</th><th>What the Exam Says</th><th>Correct Answer</th></tr></thead>
<tbody>
<tr><td>Imbalanced data + accuracy</td><td>"Model has 99% accuracy" (fraud)</td><td>Use Precision/Recall/F1, not accuracy</td></tr>
<tr><td>FM input format</td><td>Factorization Machines</td><td>Requires RecordIO ONLY (not CSV)</td></tr>
<tr><td>Managed vs custom</td><td>"quickest to implement"</td><td>Prefer managed (Personalize, Forecast)</td></tr>
<tr><td>Overfitting fix</td><td>Training accuracy high, validation low</td><td>Regularization (L1/L2) or more data</td></tr>
<tr><td>SageMaker + Internet</td><td>"secure environment, no internet"</td><td>VPC + Network Isolation + VPC Endpoints</td></tr>
<tr><td>Ground Truth labeling</td><td>"reduce labeling cost"</td><td>Auto-labeling (active learning) in GT</td></tr>
<tr><td>Bias in model</td><td>"identify bias before deployment"</td><td>SageMaker Clarify</td></tr>
<tr><td>Multiple models behind one endpoint</td><td>"save cost, single endpoint"</td><td>Multi-Model Endpoint (MME)</td></tr>
</tbody>
</table>

<h2 id="storage-formats"><strong>5. Data / Storage Quick Reference</strong></h2>

<table>
<thead><tr><th>Scenario</th><th>Best Choice</th></tr></thead>
<tbody>
<tr><td>Large tabular training data</td><td>S3 + CSV or Parquet; RecordIO for SageMaker</td></tr>
<tr><td>Real-time streaming data ingestion</td><td>Kinesis Data Streams → Firehose → S3</td></tr>
<tr><td>Ad-hoc SQL queries on S3 data</td><td>Amazon Athena</td></tr>
<tr><td>ETL transformation → Feature Store</td><td>AWS Glue (Spark ETL) → SageMaker Feature Store</td></tr>
<tr><td>Business intelligence / dashboards</td><td>Amazon QuickSight</td></tr>
<tr><td>Data warehouse for ML features</td><td>Amazon Redshift → ML (Redshift ML)</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Exam tip:</strong> Remember: when the question says "fastest / easiest / no code" → AWS Managed AI Service. When it says "custom model / flexibility / bring your own" → SageMaker. This is the most important decision boundary.</p>
</blockquote>
