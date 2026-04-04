---
id: 722555b5-e196-45c3-9061-a4f72197e2ed
title: 'Bài 11: Cheat Sheet Tổng Hợp'
slug: bai-11-cheat-sheet
description: >-
  Bảng tổng hợp toàn bộ khoá học: thuật toán SageMaker, AWS AI services,
  evaluation metrics, công thức quan trọng và các bẫy thường gặp trong đề thi.
duration_minutes: 40
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Ôn Tập Tổng Hợp"
course:
  id: 019c9619-lt02-7002-c002-lt0200000002
  title: 'Luyện thi AWS Certified Machine Learning - Specialty'
  slug: luyen-thi-aws-ml-specialty
---

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
<thead><tr><th>Trap</strong></th><th>What the Exam Says</th><th>Correct Answer</th></tr></thead>
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
<p><strong>Exam tip:</strong> Hãy nhớ: khi đề bài nói "fastest / easiest / no code" → AWS Managed AI Service. Khi nói "custom model / flexibility / bring your own" → SageMaker. Đây là decision boundary quan trọng nhất.</p>
</blockquote>
