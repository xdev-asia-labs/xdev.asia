---
id: 019c9619-lt03-l09
title: 'Bài 9: Responsible AI & Security'
slug: bai-9-responsible-ai
description: >-
  Google Responsible AI principles. Vertex AI Explainability (SHAP, IG).
  Fairness indicators. Privacy: differential privacy, federated learning.
  IAM, VPC-SC, CMEK cho ML workloads.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 5: Responsible AI & Ôn tập"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Luyện thi Google Cloud Professional Machine Learning Engineer'
  slug: luyen-thi-gcp-ml-engineer
---

<h2 id="responsible-ai"><strong>1. Google's Responsible AI Principles</strong></h2>

<table>
<thead><tr><th>Principle</th><th>Key Requirement</th></tr></thead>
<tbody>
<tr><td><strong>Socially Beneficial</strong></td><td>Benefits society and individuals</td></tr>
<tr><td><strong>Avoid Unfair Bias</strong></td><td>Test fairness across demographic groups</td></tr>
<tr><td><strong>Safety</strong></td><td>Test across diverse scenarios, continuous evaluation</td></tr>
<tr><td><strong>Accountable</strong></td><td>Appropriate human oversight and control</td></tr>
<tr><td><strong>Privacy Preserving</strong></td><td>Protect training data privacy</td></tr>
<tr><td><strong>Scientific Excellence</strong></td><td>Rigorous research standards</td></tr>
<tr><td><strong>Available for Beneficial Uses</strong></td><td>Primary benefit criteria</td></tr>
</tbody>
</table>

<h2 id="explainability"><strong>2. Vertex AI Explainability</strong></h2>

<p>Vertex AI Explainability cung cấp feature attribution scores — giải thích tại sao model đưa ra prediction nào đó.</p>

<table>
<thead><tr><th>Method</th><th>For</th><th>How</th></tr></thead>
<tbody>
<tr><td><strong>SHAP (Shapley Values)</strong></td><td>Tabular models</td><td>Game theory: contribution của mỗi feature</td></tr>
<tr><td><strong>Integrated Gradients (IG)</strong></td><td>Neural networks (image, text)</td><td>Gradient accumulation from baseline to input</td></tr>
<tr><td><strong>XRAI</strong></td><td>Image models</td><td>Pixel-region attribution (better UX than IG)</td></tr>
<tr><td><strong>Sampled Shapley</strong></td><td>Large tabular datasets</td><td>Approximate SHAP, faster</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Exam tip:</strong> "Explain why a loan was denied" → SHAP for tabular models. "Highlight which image regions drove classification" → Integrated Gradients or XRAI. Vertex AI Explainability phải được enable lúc deploy endpoint.</p>
</blockquote>

<h2 id="fairness"><strong>3. Fairness & Bias Detection</strong></h2>

<table>
<thead><tr><th>Tool/Concept</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Fairness Indicators</strong></td><td>GCP tool: evaluate model fairness metrics across demographic slices</td></tr>
<tr><td><strong>What-If Tool</strong></td><td>Interactive exploration of model behavior, counterfactuals</td></tr>
<tr><td><strong>Demographic parity</strong></td><td>Model predicts same rate across demographic groups</td></tr>
<tr><td><strong>Equal opportunity</strong></td><td>Same recall/TPR across groups</td></tr>
<tr><td><strong>Data slice evaluation</strong></td><td>Evaluate metrics per gender, race, age in TFX Evaluator</td></tr>
</tbody>
</table>

<h2 id="privacy"><strong>4. Privacy Techniques</strong></h2>

<table>
<thead><tr><th>Technique</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Differential Privacy</strong></td><td>Add statistical noise to training data/model, prevents individual data re-identification</td></tr>
<tr><td><strong>Federated Learning</strong></td><td>Train on distributed data without centralizing raw data — model updates only</td></tr>
<tr><td><strong>Data Anonymization</strong></td><td>Remove PII before training (Cloud DLP API)</td></tr>
</tbody>
</table>

<h2 id="security"><strong>5. Security Controls for ML Workloads</strong></h2>

<table>
<thead><tr><th>Control</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><strong>IAM roles</strong></td><td>Least-privilege access for ML service accounts</td></tr>
<tr><td><strong>VPC Service Controls (VPC-SC)</strong></td><td>Security perimeter: prevent data exfiltration from BigQuery, GCS</td></tr>
<tr><td><strong>CMEK (Customer-Managed Encryption Keys)</strong></td><td>Control encryption keys via Cloud KMS</td></tr>
<tr><td><strong>Private IP for Vertex AI</strong></td><td>Training and endpoints use private networking</td></tr>
<tr><td><strong>Cloud Audit Logs</strong></td><td>Who accessed what data, when (Data Access + Admin Activity)</td></tr>
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

<h2 id="practice"><strong>6. Practice Questions</strong></h2>

<p><strong>Q1:</strong> A financial services company deployed a loan approval ML model. Regulators require the company to explain why specific loan applications were denied. Which Vertex AI feature provides per-prediction feature importance scores for tabular models?</p>
<ul>
<li>A) Vertex AI Experiments</li>
<li>B) Vertex AI Explainability with SHAP ✓</li>
<li>C) Vertex AI Model Monitoring</li>
<li>D) Fairness Indicators</li>
</ul>
<p><em>Explanation: Vertex AI Explainability with Shapley Values (SHAP) assigns an importance score to each feature for each individual prediction, explaining why a specific loan was denied by attributing the model's decision to specific input features like credit_score, income, debt_ratio.</em></p>

<p><strong>Q2:</strong> A healthcare company needs to train ML models on patient data distributed across multiple hospitals. Data privacy regulations prohibit centralizing raw patient records. Which privacy-preserving ML approach should they use?</p>
<ul>
<li>A) Differential Privacy with central training</li>
<li>B) Federated Learning ✓</li>
<li>C) Data anonymization + BigQuery ML</li>
<li>D) Cloud DLP de-identification</li>
</ul>
<p><em>Explanation: Federated Learning trains models on distributed data without moving raw data to a central location. Each hospital trains locally on its own data; only model updates (gradients) are shared and aggregated. Raw patient records never leave the hospital's environment.</em></p>

<p><strong>Q3:</strong> A company processes sensitive financial data in BigQuery for ML training. They need to prevent data from being moved outside an approved security boundary to unauthorized GCP projects. Which GCP feature should they implement?</p>
<ul>
<li>A) Cloud KMS CMEK encryption</li>
<li>B) VPC Service Controls (VPC-SC) perimeter ✓</li>
<li>C) IAM role deny policies</li>
<li>D) Cloud Armor WAF</li>
</ul>
<p><em>Explanation: VPC Service Controls creates a security perimeter around GCP services (BigQuery, Cloud Storage, Vertex AI). It prevents data exfiltration by blocking requests that would move data outside the defined perimeter, even from authenticated users. CMEK provides encryption control but doesn't prevent exfiltration.</em></p>
