---
id: 722555b5-e196-45c3-9061-a4f72197e2ed
title: '第11課：速查表 — 核心知識彙整'
slug: bai-11-cheat-sheet
description: >-
  全課程彙整表：SageMaker演算法、AWS AI服務、
  評估指標、重要公式和考試常見陷阱。
duration_minutes: 40
is_free: true
video_url: null
sort_order: 11
section_title: "第4部分：總複習與考試策略"
course:
  id: 019c9619-lt02-7002-c002-lt0200000002
  title: 'AWS認證機器學習 - 專業級 考試準備'
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">📝 考試準備 — 第11課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第11課：速查表 — 核心知識彙整</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AWS認證機器學習 - 專業級 考試準備</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第4部分：總複習與考試策略</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="algorithms-master"><strong>1. SageMaker內建演算法總表</strong></h2>

<table>
<thead><tr><th>演算法</th><th>類型</th><th>最適用途</th><th>輸入</th></tr></thead>
<tbody>
<tr><td><strong>XGBoost</strong></td><td>監督式（分類/迴歸）</td><td>表格數據、競賽</td><td>CSV、LibSVM</td></tr>
<tr><td><strong>Linear Learner</strong></td><td>監督式（分類/迴歸）</td><td>高維、快速</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>Random Cut Forest</strong></td><td>非監督式</td><td>異常檢測</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>K-Means</strong></td><td>非監督式</td><td>客戶分群</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>PCA</strong></td><td>維度縮減</td><td>特徵壓縮</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>Factorization Machines</strong></td><td>監督式（分類/迴歸）</td><td>稀疏數據、推薦</td><td>僅RecordIO</td></tr>
<tr><td><strong>DeepAR+</strong></td><td>監督式</td><td>時間序列預測</td><td>JSON Lines</td></tr>
<tr><td><strong>BlazingText</strong></td><td>監督式/非監督式</td><td>文本分類、word2vec</td><td>文本檔案</td></tr>
<tr><td><strong>Object2Vec</strong></td><td>監督式</td><td>語義相似度</td><td>JSON Lines</td></tr>
<tr><td><strong>Image Classification</strong></td><td>監督式</td><td>影像標籤</td><td>RecordIO、原始影像</td></tr>
<tr><td><strong>Object Detection</strong></td><td>監督式</td><td>邊界框</td><td>RecordIO、JSON</td></tr>
<tr><td><strong>Semantic Segmentation</strong></td><td>監督式</td><td>像素級分類</td><td>影像 + 遮罩</td></tr>
<tr><td><strong>LDA</strong></td><td>非監督式</td><td>主題建模</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>NTM</strong></td><td>非監督式</td><td>神經網路主題建模</td><td>CSV、RecordIO</td></tr>
<tr><td><strong>IP Insights</strong></td><td>非監督式</td><td>IP位址異常</td><td>CSV</td></tr>
</tbody>
</table>

<h2 id="aws-ai-services"><strong>2. AWS AI服務 — 無程式碼ML</strong></h2>

<table>
<thead><tr><th>服務</th><th>用途</th><th>輸出</th></tr></thead>
<tbody>
<tr><td><strong>Amazon Rekognition</strong></td><td>影像/影片分析</td><td>標籤、人臉、文字、內容審核</td></tr>
<tr><td><strong>Amazon Textract</strong></td><td>文件擷取</td><td>文字、表單、表格</td></tr>
<tr><td><strong>Amazon Comprehend</strong></td><td>NLP、文本分析</td><td>實體、情感、主題</td></tr>
<tr><td><strong>Amazon Translate</strong></td><td>機器翻譯</td><td>翻譯文本</td></tr>
<tr><td><strong>Amazon Transcribe</strong></td><td>語音轉文字</td><td>轉錄、字幕</td></tr>
<tr><td><strong>Amazon Polly</strong></td><td>文字轉語音</td><td>音訊</td></tr>
<tr><td><strong>Amazon Lex</strong></td><td>對話式AI（聊天機器人）</td><td>意圖、槽位</td></tr>
<tr><td><strong>Amazon Kendra</strong></td><td>智慧搜尋</td><td>答案、文件</td></tr>
<tr><td><strong>Amazon Personalize</strong></td><td>推薦</td><td>項目排名、使用者推薦</td></tr>
<tr><td><strong>Amazon Forecast</strong></td><td>時間序列預測</td><td>預測 + 信賴區間</td></tr>
<tr><td><strong>Amazon Lookout for Vision</strong></td><td>視覺異常（製造）</td><td>通過/不通過、異常圖</td></tr>
<tr><td><strong>Amazon Lookout for Equipment</strong></td><td>設備異常（IoT）</td><td>異常分數</td></tr>
</tbody>
</table>

<h2 id="metrics"><strong>3. 評估指標快速參考</strong></h2>

<table>
<thead><tr><th>指標</th><th>公式</th><th>使用時機</th></tr></thead>
<tbody>
<tr><td><strong>Accuracy</strong></td><td>(TP+TN)/(TP+TN+FP+FN)</td><td>平衡類別</td></tr>
<tr><td><strong>Precision</strong></td><td>TP/(TP+FP)</td><td>FP成本高（垃圾郵件過濾器）</td></tr>
<tr><td><strong>Recall（靈敏度）</strong></td><td>TP/(TP+FN)</td><td>FN成本高（癌症診斷）</td></tr>
<tr><td><strong>F1分數</strong></td><td>2×(P×R)/(P+R)</td><td>不平衡類別</td></tr>
<tr><td><strong>AUC-ROC</strong></td><td>TPR vs FPR曲線下面積</td><td>整體分類器品質</td></tr>
<tr><td><strong>RMSE</strong></td><td>√(Σ(yᵢ-ŷᵢ)²/n)</td><td>迴歸、懲罰離群值</td></tr>
<tr><td><strong>MAE</strong></td><td>Σ|yᵢ-ŷᵢ|/n</td><td>迴歸、對離群值穩健</td></tr>
<tr><td><strong>MAPE</strong></td><td>Σ|yᵢ-ŷᵢ|/|yᵢ| × 100%</td><td>預測、可解讀的百分比</td></tr>
</tbody>
</table>

<h2 id="traps"><strong>4. 考試常見陷阱</strong></h2>

<table>
<thead><tr><th>陷阱</th><th>考試敘述</th><th>正確答案</th></tr></thead>
<tbody>
<tr><td>不平衡數據 + accuracy</td><td>「模型有99% accuracy」（欺詐）</td><td>使用Precision/Recall/F1，非accuracy</td></tr>
<tr><td>FM輸入格式</td><td>Factorization Machines</td><td>僅需RecordIO（非CSV）</td></tr>
<tr><td>託管 vs 自訂</td><td>「最快實現」</td><td>優先託管服務（Personalize、Forecast）</td></tr>
<tr><td>過擬合修復</td><td>訓練accuracy高、驗證低</td><td>正規化（L1/L2）或更多數據</td></tr>
<tr><td>SageMaker + 網際網路</td><td>「安全環境、無網際網路」</td><td>VPC + 網路隔離 + VPC端點</td></tr>
<tr><td>Ground Truth標註</td><td>「降低標註成本」</td><td>GT中的自動標註（主動學習）</td></tr>
<tr><td>模型偏差</td><td>「部署前識別偏差」</td><td>SageMaker Clarify</td></tr>
<tr><td>單一端點多模型</td><td>「節省成本、單一端點」</td><td>多模型端點（MME）</td></tr>
</tbody>
</table>

<h2 id="storage-formats"><strong>5. 數據/儲存快速參考</strong></h2>

<table>
<thead><tr><th>情境</th><th>最佳選擇</th></tr></thead>
<tbody>
<tr><td>大型表格訓練數據</td><td>S3 + CSV或Parquet；SageMaker用RecordIO</td></tr>
<tr><td>即時串流數據攝取</td><td>Kinesis Data Streams → Firehose → S3</td></tr>
<tr><td>S3數據的臨時SQL查詢</td><td>Amazon Athena</td></tr>
<tr><td>ETL轉換 → Feature Store</td><td>AWS Glue（Spark ETL）→ SageMaker Feature Store</td></tr>
<tr><td>商業智慧/儀表板</td><td>Amazon QuickSight</td></tr>
<tr><td>ML特徵的數據倉儲</td><td>Amazon Redshift → ML（Redshift ML）</td></tr>
</tbody>
</table>

<blockquote>
<p><strong>考試提示：</strong> 請記住：當題目說「最快/最簡單/無程式碼」→ AWS託管AI服務。當說「自訂模型/彈性/自帶」→ SageMaker。這是最重要的判斷標準。</p>
</blockquote>
