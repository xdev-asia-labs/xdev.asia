---
id: 019c9619-lt03-l09
title: '第9課：Responsible AI與安全性'
slug: bai-9-responsible-ai
description: >-
  Google的Responsible AI原則。Vertex AI Explainability（SHAP、IG）。
  公平性指標。隱私：差分隱私、聯邦學習。
  IAM、VPC-SC、CMEK保護ML工作負載。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 9
section_title: "領域5：Responsible AI與複習"
course:
  id: 019c9619-lt03-7003-c003-lt0300000003
  title: 'Google Cloud Professional Machine Learning Engineer 考試準備'
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">📝 考試準備 — 第9課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第9課：Responsible AI &amp; 安全性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Google Cloud Professional Machine Learning Engineer 考試準備</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">領域5：Responsible AI與複習</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="responsible-ai"><strong>1. Google的Responsible AI原則</strong></h2>

<table>
<thead><tr><th>原則</th><th>主要要求</th></tr></thead>
<tbody>
<tr><td><strong>對社會有益</strong></td><td>為社會和個人帶來利益</td></tr>
<tr><td><strong>避免不公平的偏見</strong></td><td>跨人口統計群體測試公平性</td></tr>
<tr><td><strong>安全性</strong></td><td>在多種情境中測試，持續評估</td></tr>
<tr><td><strong>可問責</strong></td><td>適當的人類監督和控制</td></tr>
<tr><td><strong>隱私保護</strong></td><td>保護訓練資料的隱私</td></tr>
<tr><td><strong>科學卓越</strong></td><td>嚴格的研究標準</td></tr>
<tr><td><strong>用於有益目的</strong></td><td>主要利益標準</td></tr>
</tbody>
</table>

<h2 id="explainability"><strong>2. Vertex AI Explainability</strong></h2>

<p>Vertex AI Explainability提供特徵歸因分數，解釋模型為何做出特定預測。</p>

<table>
<thead><tr><th>方法</th><th>適用對象</th><th>運作方式</th></tr></thead>
<tbody>
<tr><td><strong>SHAP（Shapley Values）</strong></td><td>表格模型</td><td>賽局理論：每個特徵的貢獻度</td></tr>
<tr><td><strong>Integrated Gradients（IG）</strong></td><td>神經網路（影像、文字）</td><td>從基準線到輸入的梯度累積</td></tr>
<tr><td><strong>XRAI</strong></td><td>影像模型</td><td>像素區域歸因（比IG更好的UX）</td></tr>
<tr><td><strong>Sampled Shapley</strong></td><td>大型表格資料集</td><td>近似SHAP，速度更快</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>考試提示：</strong>「解釋貸款被拒絕的原因」→ 表格模型用SHAP。「標記影響分類的影像區域」→ Integrated Gradients或XRAI。Vertex AI Explainability需要在部署端點時啟用。</p>
</blockquote>

<h2 id="fairness"><strong>3. 公平性與偏見偵測</strong></h2>

<table>
<thead><tr><th>工具/概念</th><th>說明</th></tr></thead>
<tbody>
<tr><td><strong>Fairness Indicators</strong></td><td>GCP工具：評估跨人口統計切片的模型公平性指標</td></tr>
<tr><td><strong>What-If Tool</strong></td><td>互動式探索模型行為、反事實分析</td></tr>
<tr><td><strong>Demographic parity</strong></td><td>跨人口統計群體的相同預測率</td></tr>
<tr><td><strong>Equal opportunity</strong></td><td>跨群體的相同Recall/TPR</td></tr>
<tr><td><strong>資料切片評估</strong></td><td>TFX Evaluator按性別、種族、年齡評估指標</td></tr>
</tbody>
</table>

<h2 id="privacy"><strong>4. 隱私技術</strong></h2>

<table>
<thead><tr><th>技術</th><th>說明</th></tr></thead>
<tbody>
<tr><td><strong>差分隱私</strong></td><td>在訓練資料/模型中添加統計雜訊，防止個人資料被重新識別</td></tr>
<tr><td><strong>聯邦學習</strong></td><td>在分散的資料上訓練而不集中原始資料——只共享模型更新</td></tr>
<tr><td><strong>資料匿名化</strong></td><td>在訓練前移除PII（Cloud DLP API）</td></tr>
</tbody>
</table>

<h2 id="security"><strong>5. ML工作負載的安全控制</strong></h2>

<table>
<thead><tr><th>控制</th><th>目的</th></tr></thead>
<tbody>
<tr><td><strong>IAM角色</strong></td><td>ML服務帳號的最小權限存取</td></tr>
<tr><td><strong>VPC Service Controls（VPC-SC）</strong></td><td>安全邊界：防止BigQuery、GCS資料外洩</td></tr>
<tr><td><strong>CMEK（客戶管理加密金鑰）</strong></td><td>透過Cloud KMS控制加密金鑰</td></tr>
<tr><td><strong>Vertex AI私有IP</strong></td><td>訓練和端點使用私有網路</td></tr>
<tr><td><strong>Cloud Audit Logs</strong></td><td>誰在何時存取了什麼資料（Data Access + Admin Activity）</td></tr>
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

<h2 id="practice"><strong>6. 練習題</strong></h2>

<p><strong>Q1：</strong> 金融服務公司部署了貸款審批ML模型。監管機構要求解釋特定貸款申請被拒絕的原因。哪個Vertex AI功能為表格模型提供逐筆預測的特徵重要性分數？</p>
<ul>
<li>A) Vertex AI Experiments</li>
<li>B) 使用SHAP的Vertex AI Explainability ✓</li>
<li>C) Vertex AI Model Monitoring</li>
<li>D) Fairness Indicators</li>
</ul>
<p><em>解說：使用Shapley Values（SHAP）的Vertex AI Explainability為每個個別預測中的每個特徵分配重要性分數，將模型的決策歸因於credit_score、income、debt_ratio等特定輸入特徵，解釋特定貸款被拒絕的原因。</em></p>

<p><strong>Q2：</strong> 一家醫療公司需要在分散於多家醫院的患者資料上訓練ML模型。資料隱私法規禁止集中原始患者記錄。應使用哪種隱私保護ML方法？</p>
<ul>
<li>A) 集中訓練搭配差分隱私</li>
<li>B) 聯邦學習 ✓</li>
<li>C) 資料匿名化 + BigQuery ML</li>
<li>D) Cloud DLP去識別化</li>
</ul>
<p><em>解說：聯邦學習在不將原始資料移動到中央位置的情況下，在分散的資料上訓練模型。每家醫院在自己的資料上進行本地訓練，只有模型更新（梯度）被共享和聚合。原始患者記錄不會離開醫院的環境。</em></p>

<p><strong>Q3：</strong> 企業在BigQuery中處理ML訓練用的敏感金融資料。需要防止資料被移動到授權安全邊界之外的未授權GCP專案。應實作哪個GCP功能？</p>
<ul>
<li>A) Cloud KMS CMEK加密</li>
<li>B) VPC Service Controls（VPC-SC）邊界 ✓</li>
<li>C) IAM角色拒絕政策</li>
<li>D) Cloud Armor WAF</li>
</ul>
<p><em>解說：VPC Service Controls在GCP服務（BigQuery、Cloud Storage、Vertex AI）周圍建立安全邊界。透過阻止將資料移動到定義邊界之外的請求來防止資料外洩，即使是來自已認證的使用者。CMEK提供加密控制但不能防止外洩。</em></p>
