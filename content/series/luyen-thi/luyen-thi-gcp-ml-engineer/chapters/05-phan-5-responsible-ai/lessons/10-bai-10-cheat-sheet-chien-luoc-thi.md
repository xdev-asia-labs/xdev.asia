---
id: 019c9619-lt03-l10
title: 'Bài 10: Cheat Sheet & Chiến lược thi GCP MLE'
slug: bai-10-cheat-sheet-chien-luoc-thi
description: >-
  Bảng tổng hợp toàn khoá GCP Professional Machine Learning Engineer.
  GCP service reference, evaluation metrics, domain weights, và chiến lược thi.
duration_minutes: 40
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 5: Responsible AI & Ôn tập"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Luyện thi Google Cloud Professional Machine Learning Engineer'
  slug: luyen-thi-gcp-ml-engineer
---

<h2 id="exam-structure"><strong>1. Cấu Trúc Đề Thi GCP Professional ML Engineer</strong></h2>

<table>
<thead><tr><th>Item</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Total Questions</strong></td><td>60 câu</td></tr>
<tr><td><strong>Time Limit</strong></td><td>120 phút (2 giờ)</td></tr>
<tr><td><strong>Passing Score</strong></td><td>~70% (Google không công bố chính xác)</td></tr>
<tr><td><strong>Format</strong></td><td>Multiple choice, multiple select</td></tr>
<tr><td><strong>Validity</strong></td><td>2 năm</td></tr>
<tr><td><strong>Level</strong></td><td>Professional (intermediate to advanced)</td></tr>
</tbody>
</table>

<h2 id="domain-weights"><strong>2. Domain Weights</strong></h2>

<table>
<thead><tr><th>Domain</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>1. Architecting low-code ML solutions</td><td>~10%</td></tr>
<tr><td>2. Collaborate within and across teams to manage data and models</td><td>~20%</td></tr>
<tr><td>3. Scale prototypes into ML models</td><td>~20%</td></tr>
<tr><td>4. Serve and scale models</td><td>~20%</td></tr>
<tr><td>5. Automate & orchestrate ML pipelines</td><td>~20%</td></tr>
<tr><td>6. Monitor ML solutions</td><td>~10%</td></tr>
</tbody>
</table>

<h2 id="service-cheat-sheet"><strong>3. GCP ML Services Cheat Sheet</strong></h2>

<table>
<thead><tr><th>Task</th><th>GCP Service</th></tr></thead>
<tbody>
<tr><td>No-code image classification</td><td>Vertex AI AutoML Image</td></tr>
<tr><td>SQL-based ML in data warehouse</td><td>BigQuery ML</td></tr>
<tr><td>Custom TensorFlow/PyTorch training</td><td>Vertex AI Custom Training</td></tr>
<tr><td>Hyperparameter optimization</td><td>Vertex AI Hyperparameter Tuning (Bayesian)</td></tr>
<tr><td>Feature consistency training/serving</td><td>Vertex AI Feature Store</td></tr>
<tr><td>ML workflow orchestration (pipelines)</td><td>Vertex AI Pipelines (KFP)</td></tr>
<tr><td>Experiment tracking</td><td>Vertex AI Experiments</td></tr>
<tr><td>Model versioning</td><td>Vertex AI Model Registry</td></tr>
<tr><td>A/B testing model versions</td><td>Vertex AI Endpoints traffic splitting</td></tr>
<tr><td>Monitor feature skew/drift</td><td>Vertex AI Model Monitoring</td></tr>
<tr><td>Explain model predictions</td><td>Vertex AI Explainability (SHAP, IG)</td></tr>
<tr><td>Real-time event ingestion</td><td>Pub/Sub</td></tr>
<tr><td>Batch + streaming ETL (unified)</td><td>Dataflow (Apache Beam)</td></tr>
<tr><td>Spark/Hadoop workloads</td><td>Dataproc</td></tr>
<tr><td>ML pipeline orchestration (multi-service)</td><td>Cloud Composer (Airflow)</td></tr>
<tr><td>Natural language analysis (no training)</td><td>Cloud Natural Language API</td></tr>
<tr><td>Document extraction</td><td>Document AI</td></tr>
<tr><td>Speech to text</td><td>Cloud Speech-to-Text API</td></tr>
<tr><td>Prevent data exfiltration</td><td>VPC Service Controls</td></tr>
<tr><td>Customer-managed encryption</td><td>Cloud KMS (CMEK)</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. Common Exam Traps</strong></h2>

<table>
<thead><tr><th>Trap</th><th>Correct Answer</th></tr></thead>
<tbody>
<tr><td>"No ML expertise, image classification"</td><td>AutoML Image (not custom training)</td></tr>
<tr><td>"Train on data already in BigQuery"</td><td>BigQuery ML (not Vertex AI)</td></tr>
<tr><td>"Features differ at training vs serving"</td><td>Vertex AI Feature Store (not re-training)</td></tr>
<tr><td>"Trigger retraining when data arrives"</td><td>GCS notification → Eventarc → Vertex AI Pipeline</td></tr>
<tr><td>"Explain why model rejected application"</td><td>Vertex AI Explainability (SHAP)</td></tr>
<tr><td>"Train on distributed hospital data"</td><td>Federated Learning</td></tr>
<tr><td>"Prevent BigQuery data exfiltration"</td><td>VPC Service Controls</td></tr>
<tr><td>"Compare model performance across runs"</td><td>Vertex AI Experiments</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Exam tip:</strong> GCP Professional ML Engineer thường hỏi về architecture decisions, không phải API syntax. Key question patterns: "which service BEST fits the requirement", "what is the FIRST step", "which approach requires the LEAST operational overhead". Luôn ưu tiên managed services của GCP khi câu hỏi có "minimal management" hoặc "serverless".</p>
</blockquote>

<h2 id="study-plan"><strong>5. Kế Hoạch Ôn Tập</strong></h2>

<table>
<thead><tr><th>Ngày</th><th>Focus</th></tr></thead>
<tbody>
<tr><td>Day 1</td><td>Vertex AI full platform: Training, Pipelines, Endpoints, Monitoring</td></tr>
<tr><td>Day 2</td><td>Data engineering: Pub/Sub, Dataflow, Dataproc, Cloud Composer</td></tr>
<tr><td>Day 3</td><td>BigQuery ML + Feature Engineering + Feature Store</td></tr>
<tr><td>Day 4</td><td>Responsible AI: Explainability, Fairness, Privacy, Security</td></tr>
<tr><td>Day 5</td><td>Practice exam 1 — identify weak areas</td></tr>
<tr><td>Day 6</td><td>Review weak areas + Practice exam 2</td></tr>
<tr><td>Day 7</td><td>Cheat sheet review only</td></tr>
</tbody>
</table>
