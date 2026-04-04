---
id: 87d7c5c5-d20a-47a8-b64e-7f9db75bb1d2
title: 'Bài 12: Chiến Lược Thi MLS-C01'
slug: bai-12-chien-luoc-thi
description: >-
  Cấu trúc đề thi MLS-C01, phân bổ điểm số theo domain, chiến lược quản lý
  thời gian, kỹ thuật loại trừ đáp án và kế hoạch ôn tập cuối kỳ.
duration_minutes: 35
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Ôn Tập Tổng Hợp"
course:
  id: 019c9619-lt02-7002-c002-lt0200000002
  title: 'Luyện thi AWS Certified Machine Learning - Specialty'
  slug: luyen-thi-aws-ml-specialty
---

<h2 id="exam-structure"><strong>1. Cấu Trúc Đề Thi MLS-C01</strong></h2>

<table>
<thead><tr><th>Item</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Total Questions</strong></td><td>65 câu</td></tr>
<tr><td><strong>Scored Questions</strong></td><td>50 câu (15 unscored/experimental)</td></tr>
<tr><td><strong>Time Limit</strong></td><td>180 phút (3 giờ)</td></tr>
<tr><td><strong>Passing Score</strong></td><td>750/1000</td></tr>
<tr><td><strong>Question Format</strong></td><td>Multiple choice + Multiple response</td></tr>
<tr><td><strong>Languages</strong></td><td>Có thể chọn tiếng Nhật, tiếng Hàn (không có tiếng Việt)</td></tr>
<tr><td><strong>Validity</strong></td><td>3 năm</td></tr>
</tbody>
</table>

<h2 id="domain-weights"><strong>2. Domain Weights — Phân Bổ Điểm</strong></h2>

<table>
<thead><tr><th>Domain</th><th>Weight</th><th>Questions (~)</th></tr></thead>
<tbody>
<tr><td>Domain 1: Data Engineering</td><td>20%</td><td>~13 câu</td></tr>
<tr><td>Domain 2: Exploratory Data Analysis</td><td>24%</td><td>~16 câu</td></tr>
<tr><td>Domain 3: Modeling</td><td>36%</td><td>~24 câu</td></tr>
<tr><td>Domain 4: ML Implementation & Operations</td><td>20%</td><td>~13 câu</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>Exam tip:</strong> <strong>Domain 3 (Modeling) chiếm 36%</strong> — đây là domain quan trọng nhất. Ưu tiên ôn: SageMaker built-in algorithms, evaluation metrics, hyperparameter tuning, và underfitting/overfitting.</p>
</blockquote>

<h2 id="time-management"><strong>3. Chiến Lược Quản Lý Thời Gian</strong></h2>

<pre><code class="language-text">Time Budget (180 minutes, 65 questions):

Average: 2.5 minutes per question

Strategy:
Round 1 (120 min): Attempt all 65 questions
  - Answer confident questions immediately
  - Flag uncertain questions (don't spend > 3 min each)
  
Round 2 (45 min): Review flagged questions
  - Apply elimination technique
  - Check scenario keywords

Round 3 (15 min): Final review
  - Check unmarked questions
  - Don't change answers unless certain
</code></pre>

<h2 id="elimination"><strong>4. Kỹ Thuật Loại Trừ Đáp Án</strong></h2>

<table>
<thead><tr><th>Keyword in Question</th><th>Eliminate</th><th>Keep / Prefer</th></tr></thead>
<tbody>
<tr><td>"no labels / unlabeled data"</td><td>Supervised algorithms</td><td>K-Means, RCF, PCA</td></tr>
<tr><td>"quickest / easiest / no code"</td><td>Custom SageMaker models</td><td>Managed AI services</td></tr>
<tr><td>"real-time predictions"</td><td>Batch Transform</td><td>Real-time Endpoint</td></tr>
<tr><td>"low traffic, cost-efficient inference"</td><td>Real-time Endpoint</td><td>Serverless Inference</td></tr>
<tr><td>"no internet, secure"</td><td>Public endpoint</td><td>VPC + Network Isolation</td></tr>
<tr><td>"imbalanced dataset"</td><td>Accuracy metric</td><td>F1, Precision, Recall, AUC</td></tr>
<tr><td>"multiple models, save cost"</td><td>Separate endpoints</td><td>Multi-Model Endpoint</td></tr>
<tr><td>"structured tabular data"</td><td>Image/NLP algorithms</td><td>XGBoost, Linear Learner</td></tr>
</tbody>
</table>

<h2 id="study-plan"><strong>5. Kế Hoạch Ôn Tập Cuối Kỳ</strong></h2>

<table>
<thead><tr><th>Ngày</th><th>Focus</th></tr></thead>
<tbody>
<tr><td>Day 1</td><td>Review Domain 3 (Modeling): algorithms + metrics + HPO</td></tr>
<tr><td>Day 2</td><td>Review Domain 2 (EDA): data preparation + feature engineering</td></tr>
<tr><td>Day 3</td><td>Review Domain 1+4 (Data Engineering + Operations)</td></tr>
<tr><td>Day 4</td><td>Practice exam 1 (65 câu): identify weak areas</td></tr>
<tr><td>Day 5</td><td>Review weak areas từ Practice Exam 1</td></tr>
<tr><td>Day 6</td><td>Practice exam 2 (65 câu)</td></tr>
<tr><td>Day 7</td><td>Cheat sheet review only — nghỉ ngơi, không học mới</td></tr>
</tbody>
</table>

<h2 id="day-of-exam"><strong>6. Ngày Thi</strong></h2>

<ul>
<li>Đến sớm 30 phút (Pearson VUE test center) hoặc check kỹ environment (online proctored)</li>
<li>Đọc kỹ toàn bộ câu hỏi — đừng chỉ đọc 2-3 dòng đầu</li>
<li>Highlight keywords: "MOST cost-effective", "LEAST operational overhead", "FASTEST to deploy"</li>
<li>Khi thấy 2 đáp án đều đúng: chọn cái phù hợp nhất với constraints trong câu hỏi</li>
<li>Không để trống câu nào — guess nếu không biết (không bị trừ điểm)</li>
</ul>

<blockquote>
<p><strong>Exam tip:</strong> AWS Specialty exams thường có câu hỏi dài (3-5 dòng scenario). Keywords ở CUỐI câu thường là key constraint: "with minimal operational overhead", "in the most cost-effective manner", "without requiring data scientists" — đọc kỹ đến cuối!</p>
</blockquote>
