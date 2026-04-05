---
id: 019f0b20-a603-7001-e001-f2b8f9000603
title: 'Bài 21: ML Pipeline & Feature Store — Training, Serving & A/B Testing'
slug: bai-21-ml-pipeline-feature-store
description: >-
  ML Platform cho Fashion POD — feature store, training pipeline,
  model serving, A/B testing, model monitoring, drift detection,
  MLOps stack (MLflow, registry, experiment tracking).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 6: Data Platform & Analytics"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Kiến trúc — Bài 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 21: ML Pipeline &amp; Feature Store —</tspan>
      <tspan x="60" dy="42">Training, Serving &amp; A/B Testing</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Data Platform &amp; Analytics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ml-platform-overview"><strong>1. ML Platform Overview</strong></h2>

<pre><code class="language-text">Raw Data -> Feature Pipeline -> Feature Store
                     │
                     ├-> Training Jobs -> Model Registry
                     │
                     └-> Online Features -> Model Serving -> Predictions
</code></pre>

<h2 id="2-feature-store"><strong>2. Feature Store Design</strong></h2>

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
<li><strong>Offline store</strong>: training datasets</li>
<li><strong>Online store</strong>: low-latency inference features</li>
<li><strong>Point-in-time correctness</strong>: tránh data leakage</li>
</ul>

<h2 id="3-training-pipeline"><strong>3. Training Pipeline</strong></h2>

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

<h2 id="4-model-serving"><strong>4. Model Serving</strong></h2>

<table>
<thead>
<tr><th>Pattern</th><th>Khi dùng</th></tr>
</thead>
<tbody>
<tr><td>Online inference</td><td>Recommendation, personalization thời gian thực</td></tr>
<tr><td>Batch inference</td><td>Nightly ranking precompute, trend prediction</td></tr>
<tr><td>Streaming inference</td><td>Fraud/risk scoring theo event</td></tr>
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

<h2 id="5-ab-testing"><strong>5. A/B Testing Framework</strong></h2>

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
<li>Primary metric rõ ràng trước khi chạy test</li>
<li>Guardrail: latency, error rate, refund rate</li>
<li>Stop criteria: significance + practical impact</li>
</ul>

<h2 id="6-monitoring-drift"><strong>6. Monitoring & Drift Detection</strong></h2>

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

<h2 id="7-mlops-governance"><strong>7. MLOps Governance</strong></h2>

<ul>
<li>Model registry with versioning + approval workflow</li>
<li>Experiment tracking (MLflow)</li>
<li>Reproducible training (code + data snapshot)</li>
<li>Rollback strategy khi model degrade</li>
</ul>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>Feature store</strong> là trung tâm để đồng bộ training và serving</p></li>
<li><p><strong>Training pipeline</strong> cần tiêu chí chất lượng trước khi promote model</p></li>
<li><p><strong>A/B testing</strong> là cơ chế ra quyết định production an toàn</p></li>
<li><p><strong>Drift monitoring</strong> giúp phát hiện suy giảm model sớm</p></li>
<li><p><strong>MLOps governance</strong> đảm bảo ML có thể vận hành bền vững</p></li>
</ul>
