---
id: 019f0b20-b701-7001-e001-f2b8f9000701
title: 'Bài 23: GPU Infrastructure & Model Serving — Self-hosted LLM Deployment'
slug: bai-23-gpu-infrastructure
description: >-
  Self-hosted LLM deployment với vLLM/TGI, GPU cluster management trên Kubernetes,
  model caching & quantization, auto-scaling inference, cost optimization.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: Infrastructure, Security & Production"
course:
  id: 019f0b20-b100-7001-e001-f2b8f9000001
  title: Kiến trúc Enterprise AI Chatbot Platform — Từ Prototype đến Production
  slug: kien-truc-enterprise-ai-chatbot-platform
---

<h2 id="1-self-hosted-overview"><strong>1. Tại sao Self-hosted LLM?</strong></h2>

<p>API-based LLM (OpenAI, Claude) phù hợp cho prototyping, nhưng enterprise cần self-hosted khi:</p>

<table>
<thead>
<tr>
<th>Yếu tố</th>
<th>API-based</th>
<th>Self-hosted</th>
</tr>
</thead>
<tbody>
<tr>
<td>Data sovereignty</td>
<td>Data gửi ra ngoài</td>
<td>Data ở on-premise</td>
</tr>
<tr>
<td>Cost ở scale</td>
<td>$50K+/tháng @ 10M tokens/ngày</td>
<td>$8K-15K/tháng GPU rental</td>
</tr>
<tr>
<td>Latency</td>
<td>200-800ms TTFT</td>
<td>50-200ms TTFT</td>
</tr>
<tr>
<td>Customization</td>
<td>Fine-tuning limited</td>
<td>Full control fine-tune + LoRA</td>
</tr>
<tr>
<td>Rate limits</td>
<td>Provider-imposed</td>
<td>Only limited by GPU</td>
</tr>
<tr>
<td>Compliance</td>
<td>Phụ thuộc provider</td>
<td>Full control audit</td>
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

<h2 id="2-vllm-deployment"><strong>2. vLLM Deployment trên Kubernetes</strong></h2>

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

<h2 id="3-inference-gateway"><strong>3. Inference Gateway — Routing & Load Balancing</strong></h2>

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

<h2 id="4-model-optimization"><strong>4. Model Optimization — Quantization & Caching</strong></h2>

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

<h2 id="5-gpu-monitoring"><strong>5. GPU Monitoring & Auto-scaling</strong></h2>

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

<h2 id="tong-ket"><strong>Tổng kết Bài 23</strong></h2>

<ul>
<li><strong>Self-hosted LLM</strong>: Cần thiết cho data sovereignty, cost @ scale, và low-latency</li>
<li><strong>vLLM on K8s</strong>: Tensor parallel, AWQ quantization, prefix caching, GPU node selector</li>
<li><strong>Inference Gateway</strong>: Least-connections routing, health check, API fallback</li>
<li><strong>Optimization</strong>: AWQ 4-bit quantization, semantic cache (95% similarity threshold)</li>
<li><strong>Monitoring</strong>: GPU utilization, KV cache pressure, queue backlog, OOM alerts</li>
</ul>

<p><strong>Bài tiếp theo:</strong> Security & Compliance — End-to-end encryption, audit logging, GDPR/HIPAA compliance, penetration testing for AI systems.</p>
