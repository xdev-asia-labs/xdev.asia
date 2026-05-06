---
id: 019f0b20-a603-7001-e001-f2b8f9000603
title: 'レッスン 21: ML パイプラインと機能ストア — トレーニング、サービス提供、A/B テスト'
slug: bai-21-ml-pipeline-feature-store
description: >-
  ファッション POD 用 ML プラットフォーム — フィーチャー ストア、トレーニング パイプライン、モデル提供、A/B テスト、モデル
  モニタリング、ドリフト検出、MLOps スタック (MLflow、レジストリ、実験追跡)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 6: データ プラットフォームと分析'
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ アーキテクチャ — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: ML パイプラインと機能ストア —</tspan>
      <tspan x="60" dy="42">トレーニング、サービス、A/B テスト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">ファッション デザインとプリント オン デマンド システム アーキテクチャ — ドメイン分析から生産まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: データ プラットフォームと分析</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ml-platform-overview"><strong>1. ML プラットフォームの概要</strong></h2>

<pre><code class="language-text">Raw Data -> Feature Pipeline -> Feature Store
                     │
                     ├-> Training Jobs -> Model Registry
                     │
                     └-> Online Features -> Model Serving -> Predictions
</code></pre>

<h2 id="2-feature-store"><strong>2. フィーチャーストアのデザイン</strong></h2>

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
<li><strong>オフラインストア</strong>: トレーニング データセット</li>
<li><strong>オンラインストア</strong>: 低遅延推論機能</li>
<li><strong>特定時点の正確性</strong>: データ漏洩を回避します</li>
</ul>

<h2 id="3-training-pipeline"><strong>3. トレーニング パイプライン</strong></h2>

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

<h2 id="4-model-serving"><strong>4. モデルの提供</strong></h2>

<table>
<thead>
<tr><th>パターン</th><th>使用時</th></tr>
</thead>
<tbody>
<tr><td>オンライン推論</td><td>レコメンデーション、リアルタイムのパーソナライゼーション</td></tr>
<tr><td>バッチ推論</td><td>夜間のランキング事前計算、トレンド予測</td></tr>
<tr><td>ストリーミング推論</td><td>イベント別の不正/リスクスコアリング</td></tr>
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

<h2 id="5-ab-testing"><strong>5. A/B テストのフレームワーク</strong></h2>

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
<li>テストを実行する前に主要な指標が明確である</li>
<li>ガードレール: レイテンシ、エラー率、返金率</li>
<li>停止基準: 重要性 + 実際の影響</li>
</ul>

<h2 id="6-monitoring-drift"><strong>6. モニタリングとドリフト検出</strong></h2>

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

<h2 id="7-mlops-governance"><strong>7. MLOps ガバナンス</strong></h2>

<ul>
<li>バージョン管理と承認ワークフローを備えたモデル レジストリ</li>
<li>実験的な追跡 (MLflow)</li>
<li>再現可能なトレーニング (コード + データのスナップショット)</li>
<li>モデルが劣化した場合のロールバック戦略</li>
</ul>

<h2 id="8-tong-ket"><strong>8. まとめ</strong></h2>

<ul>
<li><p><strong>機能ストア</strong> トレーニングとサービスを同期させるためのセンターです</p></li>
<li><p><strong>トレーニングパイプライン</strong> モデルを宣伝する前に品質基準が必要</p></li>
<li><p><strong>A/B テスト</strong> 安全な生産意思決定メカニズムです</p></li>
<li><p><strong>ドリフト監視</strong> モデルの劣化を早期に検出するのに役立ちます</p></li>
<li><p><strong>MLOps ガバナンス</strong> ML が持続的に運営できるようにする</p></li>
</ul>
