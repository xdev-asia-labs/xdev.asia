---
id: 019c9619-lt03-l10
title: '第10課：速查表與GCP MLE考試策略'
slug: bai-10-cheat-sheet-chien-luoc-thi
description: >-
  GCP Professional Machine Learning Engineer課程完整總結。
  GCP服務對照、評估指標、領域比重、考試策略。
duration_minutes: 40
is_free: true
video_url: null
sort_order: 10
section_title: "領域5：Responsible AI與複習"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Google Cloud Professional Machine Learning Engineer 考試準備'
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">📝 考試準備 — 第10課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第10課：速查表 &amp; GCP MLE</tspan>
      <tspan x="60" dy="42">考試策略</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Google Cloud Professional Machine Learning Engineer 考試準備</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">領域5：Responsible AI與複習</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="exam-structure"><strong>1. GCP Professional ML Engineer考試結構</strong></h2>

<table>
<thead><tr><th>項目</th><th>詳細</th></tr></thead>
<tbody>
<tr><td><strong>總題數</strong></td><td>60題</td></tr>
<tr><td><strong>時間限制</strong></td><td>120分鐘（2小時）</td></tr>
<tr><td><strong>通過分數</strong></td><td>約70%（Google不公布確切分數）</td></tr>
<tr><td><strong>題型</strong></td><td>單選題、複選題</td></tr>
<tr><td><strong>有效期限</strong></td><td>2年</td></tr>
<tr><td><strong>等級</strong></td><td>Professional（中高階）</td></tr>
</tbody>
</table>

<h2 id="domain-weights"><strong>2. 領域比重</strong></h2>

<table>
<thead><tr><th>領域</th><th>比重</th></tr></thead>
<tbody>
<tr><td>1. 設計低程式碼ML解決方案的架構</td><td>約10%</td></tr>
<tr><td>2. 團隊內外資料和模型管理的協作</td><td>約20%</td></tr>
<tr><td>3. 從原型擴展到ML模型</td><td>約20%</td></tr>
<tr><td>4. 模型服務與擴展</td><td>約20%</td></tr>
<tr><td>5. ML管線的自動化與協調</td><td>約20%</td></tr>
<tr><td>6. ML解決方案的監控</td><td>約10%</td></tr>
</tbody>
</table>

<h2 id="service-cheat-sheet"><strong>3. GCP ML服務速查表</strong></h2>

<table>
<thead><tr><th>任務</th><th>GCP服務</th></tr></thead>
<tbody>
<tr><td>無程式碼影像分類</td><td>Vertex AI AutoML Image</td></tr>
<tr><td>資料倉儲中的SQL式ML</td><td>BigQuery ML</td></tr>
<tr><td>自訂TensorFlow/PyTorch訓練</td><td>Vertex AI Custom Training</td></tr>
<tr><td>超參數最佳化</td><td>Vertex AI Hyperparameter Tuning（Bayesian）</td></tr>
<tr><td>訓練/推論間的特徵一致性</td><td>Vertex AI Feature Store</td></tr>
<tr><td>ML工作流程協調（管線）</td><td>Vertex AI Pipelines（KFP）</td></tr>
<tr><td>實驗追蹤</td><td>Vertex AI Experiments</td></tr>
<tr><td>模型版本控制</td><td>Vertex AI Model Registry</td></tr>
<tr><td>模型版本的A/B測試</td><td>Vertex AI Endpoints流量分割</td></tr>
<tr><td>特徵偏移/漂移監控</td><td>Vertex AI Model Monitoring</td></tr>
<tr><td>模型預測解釋</td><td>Vertex AI Explainability（SHAP、IG）</td></tr>
<tr><td>即時事件擷取</td><td>Pub/Sub</td></tr>
<tr><td>統一批次 + 串流ETL</td><td>Dataflow（Apache Beam）</td></tr>
<tr><td>Spark/Hadoop工作負載</td><td>Dataproc</td></tr>
<tr><td>ML管線協調（多服務）</td><td>Cloud Composer（Airflow）</td></tr>
<tr><td>自然語言分析（無需訓練）</td><td>Cloud Natural Language API</td></tr>
<tr><td>文件擷取</td><td>Document AI</td></tr>
<tr><td>語音轉文字</td><td>Cloud Speech-to-Text API</td></tr>
<tr><td>防止資料外洩</td><td>VPC Service Controls</td></tr>
<tr><td>客戶管理加密</td><td>Cloud KMS（CMEK）</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. 常見考試陷阱</strong></h2>

<table>
<thead><tr><th>陷阱</th><th>正確答案</th></tr></thead>
<tbody>
<tr><td>「沒有ML專業知識，影像分類」</td><td>AutoML Image（不是自訂訓練）</td></tr>
<tr><td>「資料已在BigQuery中進行訓練」</td><td>BigQuery ML（不是Vertex AI）</td></tr>
<tr><td>「訓練時與推論時特徵不同」</td><td>Vertex AI Feature Store（不是重新訓練）</td></tr>
<tr><td>「資料到達時觸發重新訓練」</td><td>GCS通知 → Eventarc → Vertex AI Pipeline</td></tr>
<tr><td>「解釋模型拒絕申請的原因」</td><td>Vertex AI Explainability（SHAP）</td></tr>
<tr><td>「在分散的醫院資料上訓練」</td><td>聯邦學習</td></tr>
<tr><td>「防止BigQuery資料外洩」</td><td>VPC Service Controls</td></tr>
<tr><td>「比較不同執行之間的模型效能」</td><td>Vertex AI Experiments</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>考試提示：</strong> GCP Professional ML Engineer考試通常考察架構決策，而非API語法。主要題目模式：「哪個服務最適合需求」、「第一步是什麼」、「哪種方法的營運開銷最少」。當題目中出現「最少管理」或「無伺服器」時，始終優先選擇GCP的託管服務。</p>
</blockquote>

<h2 id="study-plan"><strong>5. 學習計畫</strong></h2>

<table>
<thead><tr><th>日期</th><th>重點領域</th></tr></thead>
<tbody>
<tr><td>第1天</td><td>Vertex AI完整平台：Training、Pipelines、Endpoints、Monitoring</td></tr>
<tr><td>第2天</td><td>資料工程：Pub/Sub、Dataflow、Dataproc、Cloud Composer</td></tr>
<tr><td>第3天</td><td>BigQuery ML + 特徵工程 + Feature Store</td></tr>
<tr><td>第4天</td><td>Responsible AI：Explainability、Fairness、Privacy、Security</td></tr>
<tr><td>第5天</td><td>模擬考1 — 找出弱點</td></tr>
<tr><td>第6天</td><td>弱點複習 + 模擬考2</td></tr>
<tr><td>第7天</td><td>僅複習速查表</td></tr>
</tbody>
</table>
