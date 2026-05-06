---
id: 019f0b20-a603-7001-e001-f2b8f9000603
title: 第 21 課：ML 管道和特徵儲存 — 訓練、服務和 A/B 測試
slug: bai-21-ml-pipeline-feature-store
description: >-
  Fashion POD 的 ML 平台 — 特徵儲存、訓練管道、模型服務、A/B 測試、模型監控、偏差檢測、MLOps
  堆疊（MLflow、註冊表、實驗追蹤）。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 第 6 部分：資料平台與分析
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1431" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1431)"/>

  <!-- Decorations -->
  <g>
    <circle cx="718" cy="224" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="836" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="954" cy="180" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1072" cy="158" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="64" x2="1100" y2="144" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="94" x2="1050" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.7749907475932,194.5 1047.7749907475932,233.5 1014,253 980.2250092524068,233.5 980.2250092524068,194.5 1014,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ 建築 — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：ML 管道和特徵儲存 —</tspan>
      <tspan x="60" dy="42">培訓、服務和 A/B 測試</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：資料平台與分析</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-ml-platform-overview"><strong>1. 機器學習平台概述</strong></h2>

<pre><code class="language-text">Raw Data -> Feature Pipeline -> Feature Store
                     │
                     ├-> Training Jobs -> Model Registry
                     │
                     └-> Online Features -> Model Serving -> Predictions
</code></pre>

<h2 id="2-feature-store"><strong>2. 特徵庫設計</strong></h2>

<pre><code class="language-typescript">interface FeatureDefinition {
  name: string;
  entity: 'user' | 'product' | 'shop';
  type: 'float' | 'int' | 'string' | 'vector';
  source: string;
  ttlHours?: number;
}

const features: FeatureDefinition[] = [
  { name: 'user_30d_click_count', entity: 'user', type: 'int', source: 'events' },
  { name: 'product_ctr_7d', entity: 'product', type: 'float', source: 'analytics' },
  { name: 'product_clip_embedding', entity: 'product', type: 'vector', source: 'ai' },
  { name: 'shop_return_rate_30d', entity: 'shop', type: 'float', source: 'orders' },
];
</code></pre>

<ul>
<li><strong>線下商店</strong>：訓練資料集</li>
<li><strong>網上商店</strong>：低延遲推理功能</li>
<li><strong>時間點正確性</strong>：避免資料外洩</li>
</ul>

<h2 id="3-training-pipeline"><strong>3. 培訓流程</strong></h2>

<pre><code class="language-text">Schedule trigger (daily/weekly)
  -> Build training dataset
  -> Train model
  -> Evaluate metrics
  -> Register candidate model
  -> Optional shadow deployment
</code></pre>

<pre><code class="language-typescript">class TrainingOrchestrator {
  async run(job: TrainingJob) {
    const dataset = await this.datasetBuilder.build(job.featureSet, job.timeWindow);
    const model = await this.trainer.train(job.algorithm, dataset);
    const metrics = await this.evaluator.evaluate(model, dataset.validation);

    await this.mlflow.logRun({ job, metrics });

    if (metrics.auc >= job.minAuc && metrics.calibrationError <= job.maxCalibrationError) {
      await this.registry.register(model, metrics);
    }
  }
}
</code></pre>

<h2 id="4-model-serving"><strong>4. 模型服務</strong></h2>

<table>
<thead>
<tr><th>圖案</th><th>使用時</th></tr>
</thead>
<tbody>
<tr><td>在線推理</td><td>推薦、即時個人化</td></tr>
<tr><td>批量推理</td><td>每晚排名預計算，趨勢預測</td></tr>
<tr><td>流式推理</td><td>按事件進行詐欺/風險評分</td></tr>
</tbody>
</table>

<pre><code class="language-typescript">interface PredictionRequest {
  modelName: string;
  entityId: string;
  features: Record&lt;string, unknown&gt;;
}

class ModelServingGateway {
  async predict(req: PredictionRequest) {
    const onlineFeatures = await this.featureStore.getOnline(req.entityId);
    const merged = { ...onlineFeatures, ...req.features };
    return this.runtime.predict(req.modelName, merged);
  }
}
</code></pre>

<h2 id="5-ab-testing"><strong>5.A/B測試框架</strong></h2>

<pre><code class="language-typescript">interface Experiment {
  id: string;
  name: string;
  variants: Array&lt;{ name: 'control' | 'treatment'; weight: number }&gt;;
  primaryMetric: 'ctr' | 'conversion' | 'revenue_per_session';
  guardrails: string[];
}

function assignVariant(userId: string, experimentId: string): string {
  const bucket = hash(userId + experimentId) % 100;
  return bucket < 50 ? 'control' : 'treatment';
}
</code></pre>

<ul>
<li>在運行測試之前主要指標已經明確</li>
<li>Guardrail：延遲、錯誤率、退款率</li>
<li>停止標準：意義+實際影響</li>
</ul>

<h2 id="6-monitoring-drift"><strong>6. 監控和漂移檢測</strong></h2>

<pre><code class="language-text">Monitors:
- Data drift: PSI / KS distance
- Prediction drift: distribution shift
- Performance drift: CTR/conversion decay
- Operational: latency/error/timeout
</code></pre>

<pre><code class="language-typescript">if (psi(featureDistTrain, featureDistLive) > 0.2) {
  alert('Feature drift high');
  triggerRetraining('recommendation_model');
}
</code></pre>

<h2 id="7-mlops-governance"><strong>7. MLOps 治理</strong></h2>

<ul>
<li>具有版本控制+批准工作流程的模型註冊表</li>
<li>實驗追蹤（MLflow）</li>
<li>可重複的訓練（代碼+資料快照）</li>
<li>模型降級時的回滾策略</li>
</ul>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><p><strong>特色商店</strong> 是同步訓練和服務的中心</p></li>
<li><p><strong>培訓管道</strong> 推廣模型之前需要品質標準</p></li>
<li><p><strong>A/B 測試</strong> 是安全生產決策機制</p></li>
<li><p><strong>漂移監測</strong> 幫助及早發現模型惡化</p></li>
<li><p><strong>MLOps 治理</strong> 確保機器學習能夠持續運作</p></li>
</ul>
