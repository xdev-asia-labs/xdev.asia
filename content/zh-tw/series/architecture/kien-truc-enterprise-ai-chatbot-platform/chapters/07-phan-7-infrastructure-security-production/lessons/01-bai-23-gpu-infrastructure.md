---
id: 019f0b20-b701-7001-e001-f2b8f9000701
title: 第 23 課：GPU 基礎架構與模型服務 — 自託管 LLM 部署
slug: bai-23-gpu-infrastructure
description: 使用 vLLM/TGI 進行自架 LLM 部署、Kubernetes 上的 GPU 叢集管理、模型快取和量化、自動縮放推理、成本最佳化。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 23
section_title: 第 7 部分：基礎設施、安全與生產
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: 企業人工智慧聊天機器人平台架構－從原型到生產
  slug: kien-truc-enterprise-ai-chatbot-platform
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7452" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7452)"/>

  <!-- Decorations -->
  <g>
    <circle cx="739" cy="67" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="166" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1017" cy="265" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="104" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="203" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.712812921102,231 1074.712812921102,263 1047,279 1019.287187078898,263 1019.287187078898,231 1047,215" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：GPU 基礎設施與模型服務</tspan>
      <tspan x="60" dy="42">— 自託管 LLM 部署</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">企業人工智慧聊天機器人平台架構－從原型到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：基礎設施、安全與生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-self-hosted-overview"><strong>1. 為什麼選擇自辦法學碩士？</strong></h2>

<p>基於API的LLM（OpenAI，Claude）適合原型設計，但企業在以下情況下需要自架：</p>

<table>
<thead>
<tr>
<th>因素</th>
<th>基於API</th>
<th>自託管</th>
</tr>
</thead>
<tbody>
<tr>
<td>數據主權</td>
<td>數據發送出去</td>
<td>資料是本地的</td>
</tr>
<tr>
<td>規模成本</td>
<td>$50K+/月 @ 10M 代幣/天</td>
<td>GPU 租金為 8K-15K 美元/月</td>
</tr>
<tr>
<td>延遲</td>
<td>200-800ms TFT</td>
<td>50-200ms TTFT</td>
</tr>
<tr>
<td>客製化</td>
<td>微調有限</td>
<td>全控微調+LoRA</td>
</tr>
<tr>
<td>速率限制</td>
<td>提供者強加的</td>
<td>僅受 GPU 限制</td>
</tr>
<tr>
<td>合規性</td>
<td>依賴提供者</td>
<td>全面控制審核</td>
</tr>
</tbody>
</table>

<pre><code class="language-text">
┌────────── GPU INFRASTRUCTURE STACK ───────────────────┐
│                                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │             INFERENCE GATEWAY                   │   │
│  │  (Load balancer, auth, rate limiting, routing)  │   │
│  └────────────────┬────────────────────────────────┘   │
│                   │                                    │
│     ┌─────────────┼─────────────┐                      │
│     ▼             ▼             ▼                      │
│  ┌──────┐    ┌──────┐    ┌──────────┐                  │
│  │ vLLM │    │ vLLM │    │   TGI    │                  │
│  │ Llama│    │ Qwen │    │ Mixtral  │                  │
│  │ 3.1  │    │ 2.5  │    │ 8x22B   │                  │
│  │ 70B  │    │ 72B  │    │         │                  │
│  └──┬───┘    └──┬───┘    └────┬─────┘                  │
│     │           │             │                        │
│  ┌──▼───┐    ┌──▼───┐    ┌────▼─────┐                  │
│  │ GPU  │    │ GPU  │    │   GPU    │                  │
│  │ A100 │    │ A100 │    │  H100   │                  │
│  │ 80GB │    │ 80GB │    │  80GB   │                  │
│  └──────┘    └──────┘    └──────────┘                  │
│                                                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  SHARED INFRASTRUCTURE                          │   │
│  │  • Model Cache (NFS / S3)                       │   │
│  │  • KV Cache (GPU Memory + CPU Offload)          │   │
│  │  • Monitoring (Prometheus + Grafana)             │   │
│  └─────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-vllm-deployment"><strong>2.vLLM在Kubernetes上的部署</strong></h2>

<pre><code class="language-yaml">
# vLLM Deployment with GPU
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-llama-70b
  namespace: ai-inference
spec:
  replicas: 2
  selector:
    matchLabels:
      app: vllm-llama-70b
  template:
    metadata:
      labels:
        app: vllm-llama-70b
    spec:
      containers:
        - name: vllm
          image: vllm/vllm-openai:v0.7.0
          args:
            - "--model"
            - "/models/Meta-Llama-3.1-70B-Instruct"
            - "--tensor-parallel-size"
            - "2"  # Split across 2 GPUs
            - "--max-model-len"
            - "8192"
            - "--gpu-memory-utilization"
            - "0.90"
            - "--enable-prefix-caching"  # KV cache reuse
            - "--max-num-seqs"
            - "256"  # Max concurrent sequences
            - "--quantization"
            - "awq"  # 4-bit quantization
            - "--served-model-name"
            - "llama-70b"
          ports:
            - containerPort: 8000
          resources:
            limits:
              nvidia.com/gpu: "2"  # 2x A100 80GB
              memory: "200Gi"
            requests:
              nvidia.com/gpu: "2"
              memory: "160Gi"
          volumeMounts:
            - name: model-cache
              mountPath: /models
            - name: shm
              mountPath: /dev/shm
          env:
            - name: NCCL_P2P_DISABLE
              value: "0"
            - name: CUDA_VISIBLE_DEVICES
              value: "0,1"
          readinessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 120
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /health
              port: 8000
            initialDelaySeconds: 180
            periodSeconds: 30
      volumes:
        - name: model-cache
          persistentVolumeClaim:
            claimName: model-cache-pvc
        - name: shm
          emptyDir:
            medium: Memory
            sizeLimit: 16Gi
      nodeSelector:
        nvidia.com/gpu.product: "NVIDIA-A100-SXM4-80GB"
      tolerations:
        - key: nvidia.com/gpu
          operator: Exists
          effect: NoSchedule
---
# HPA for GPU-based scaling
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: vllm-llama-70b-hpa
  namespace: ai-inference
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: vllm-llama-70b
  minReplicas: 1
  maxReplicas: 4
  metrics:
    - type: Pods
      pods:
        metric:
          name: vllm_num_requests_waiting
        target:
          type: AverageValue
          averageValue: "50"  # Scale up when queue > 50
    - type: Pods
      pods:
        metric:
          name: vllm_gpu_cache_usage_perc
        target:
          type: AverageValue
          averageValue: "85"  # Scale up when KV cache > 85%
</code></pre>

<h2 id="3-inference-gateway"><strong>3. 推理網關－路由與負載平衡</strong></h2>

<pre><code class="language-typescript">
class InferenceGateway {
  private backends: Map&lt;string, InferenceBackend[]&gt; = new Map();

  constructor(
    private readonly config: GatewayConfig,
    private readonly metrics: MetricsCollector,
  ) {
    this.initializeBackends();
  }

  async route(request: InferenceRequest): Promise&lt;InferenceResponse&gt; {
    const model = request.model;
    const backends = this.backends.get(model);
    if (!backends?.length) {
      throw new Error(`No backend available for model: ${model}`);
    }

    // Select backend based on strategy
    const backend = this.selectBackend(backends, request);

    const startTime = Date.now();
    try {
      const response = await backend.infer(request);

      // Record metrics
      this.metrics.recordInference({
        model,
        backend: backend.id,
        latencyMs: Date.now() - startTime,
        inputTokens: response.usage.promptTokens,
        outputTokens: response.usage.completionTokens,
        queueDepth: backend.queueDepth,
      });

      return response;
    } catch (error) {
      // Fallback to API provider if self-hosted fails
      if (this.config.fallbackToAPI) {
        return this.fallbackToAPI(request, model);
      }
      throw error;
    }
  }

  private selectBackend(
    backends: InferenceBackend[],
    request: InferenceRequest,
  ): InferenceBackend {
    // Filter healthy backends
    const healthy = backends.filter(b =&gt; b.isHealthy());
    if (healthy.length === 0) {
      throw new Error('No healthy backends available');
    }

    // Least-connections with queue awareness
    return healthy.reduce((best, current) =&gt; {
      const bestScore = best.activeRequests + best.queueDepth * 2;
      const currentScore = current.activeRequests + current.queueDepth * 2;
      return currentScore &lt; bestScore ? current : best;
    });
  }

  // Graceful fallback to API providers
  private async fallbackToAPI(
    request: InferenceRequest,
    failedModel: string,
  ): Promise&lt;InferenceResponse&gt; {
    const modelMap: Record&lt;string, { provider: string; model: string }&gt; = {
      'llama-70b': { provider: 'together', model: 'meta-llama/Llama-3.1-70B-Instruct' },
      'qwen-72b': { provider: 'fireworks', model: 'accounts/fireworks/models/qwen2p5-72b' },
    };

    const fallback = modelMap[failedModel];
    if (!fallback) throw new Error(`No API fallback for model: ${failedModel}`);

    this.metrics.recordFallback({ model: failedModel, reason: 'backend_unavailable' });

    return this.apiProviders.get(fallback.provider)!.infer({
      ...request,
      model: fallback.model,
    });
  }
}
</code></pre>

<h2 id="4-model-optimization"><strong>4. 模型最佳化－量化與緩存</strong></h2>

<pre><code class="language-typescript">
class ModelOptimizer {
  // AWQ Quantization script
  async quantizeModel(config: QuantizationConfig): Promise&lt;void&gt; {
    // AWQ: 4-bit quantization with minimal quality loss
    const command = [
      'python', '-m', 'awq.entry',
      '--model_path', config.inputPath,
      '--w_bit', String(config.bits),       // 4
      '--q_group_size', String(config.groupSize), // 128
      '--output_path', config.outputPath,
    ];
    await this.exec(command);
  }
}

// Semantic Cache — avoid redundant inference
class SemanticInferenceCache {
  constructor(
    private readonly vectorStore: VectorStore,
    private readonly cache: Redis,
  ) {}

  async getCachedResponse(
    prompt: string,
    model: string,
    threshold = 0.95,
  ): Promise&lt;CachedInference | null&gt; {
    const embedding = await this.embedder.embed(prompt);

    const results = await this.vectorStore.search({
      vector: embedding,
      filter: { model },
      topK: 1,
    });

    if (results.length &gt; 0 && results[0].score &gt;= threshold) {
      const cached = await this.cache.get(
        `inference:${results[0].id}`,
      );
      if (cached) {
        return JSON.parse(cached);
      }
    }

    return null;
  }

  async cacheResponse(
    prompt: string,
    model: string,
    response: InferenceResponse,
    ttl = 3600,
  ): Promise&lt;void&gt; {
    const embedding = await this.embedder.embed(prompt);
    const id = crypto.randomUUID();

    await this.vectorStore.upsert({
      id,
      vector: embedding,
      metadata: { model },
    });

    await this.cache.setex(
      `inference:${id}`,
      ttl,
      JSON.stringify({ prompt, response, cachedAt: new Date() }),
    );
  }
}
</code></pre>

<h2 id="5-gpu-monitoring"><strong>5.GPU監控與自動縮放</strong></h2>

<pre><code class="language-yaml">
# Prometheus rules for GPU monitoring
groups:
  - name: gpu-inference-alerts
    rules:
      # GPU utilization below threshold — consider scaling down
      - alert: GPUUnderutilized
        expr: avg(DCGM_FI_DEV_GPU_UTIL{namespace="ai-inference"}) < 30
        for: 30m
        labels:
          severity: info
        annotations:
          summary: "GPU utilization below 30% for 30m — consider scaling down"

      # KV cache pressure — scale up
      - alert: KVCachePressure
        expr: vllm_gpu_cache_usage_perc > 90
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "KV cache usage > 90% — inference quality may degrade"

      # Request queue growing — scale up
      - alert: InferenceQueueBacklog
        expr: vllm_num_requests_waiting > 100
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Inference queue backlog > 100 requests"

      # GPU memory OOM risk
      - alert: GPUMemoryHigh
        expr: DCGM_FI_DEV_FB_USED / DCGM_FI_DEV_FB_FREE > 9
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "GPU memory > 90% used — OOM risk"
</code></pre>

<pre><code class="language-typescript">
// Cost Tracker for GPU vs API comparison
class GPUCostTracker {
  calculateMonthlyCost(config: GPUClusterConfig): GPUCostBreakdown {
    const gpuHourlyRate: Record&lt;string, number&gt; = {
      'A100-80GB': 3.50,  // Cloud hourly rate
      'H100-80GB': 5.50,
      'L40S-48GB': 1.80,
    };

    const gpuCost = config.gpuCount
      * (gpuHourlyRate[config.gpuType] ?? 3.50)
      * 24 * 30; // 24/7 operation

    const storageCost = config.modelStorageGB * 0.10; // per GB/month
    const networkCost = config.egressGB * 0.08;

    return {
      gpuCompute: gpuCost,
      storage: storageCost,
      network: networkCost,
      total: gpuCost + storageCost + networkCost,
      costPerMillionTokens: this.estimateCostPerToken(config, gpuCost),
    };
  }

  private estimateCostPerToken(
    config: GPUClusterConfig,
    monthlyCost: number,
  ): number {
    // Estimate throughput based on model and GPU
    const tokensPerSecond: Record&lt;string, number&gt; = {
      'llama-70b-A100': 35,
      'llama-70b-H100': 80,
      'qwen-72b-A100': 30,
    };

    const key = `${config.modelName}-${config.gpuType.split('-')[0]}`;
    const tps = tokensPerSecond[key] ?? 30;
    const monthlyTokens = tps * 60 * 60 * 24 * 30 * config.gpuCount;

    return (monthlyCost / monthlyTokens) * 1_000_000;
  }
}
</code></pre>

<h2 id="tong-ket"><strong>第 23 課總結</strong></h2>

<ul>
<li><strong>自主辦法學碩士</strong>：資料主權、規模成本和低延遲所需</li>
<li><strong>K8s 上的 vLLM</strong>：張量並行、AWQ量化、前綴快取、GPU節點選擇器</li>
<li><strong>推理網關</strong>：最少連線路由、健康檢查、API 回退</li>
<li><strong>最佳化</strong>：AWQ 4位元量化，語意緩存（95%相似度閾值）</li>
<li><strong>監控</strong>：GPU利用率、KV緩存壓力、佇列積壓、OOM警報</li>
</ul>

<p><strong>下一篇：</strong> 安全性與合規性 — 端對端加密、審核日誌記錄、GDPR/HIPAA 合規性、AI 系統滲透測試。</p>
