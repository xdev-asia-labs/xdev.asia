---
id: 019c9619-dd14-7014-e014-dd1400000014
title: 'Bài 14: Deployment — Serve Fine-tuned Model hiệu quả'
slug: bai-14-deployment
description: >-
  Deploy trên Vertex AI endpoints, OpenAI API, self-hosted (vLLM, TGI). Merge LoRA adapters. Multi-adapter serving. Monitoring inference.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 6: Production & Best Practices"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

Fine-tuned model chạy trong notebook ≠ chạy trên production. Bài này cover deployment strategies.

---

## 1. API-based Deployment (Easiest)

### Vertex AI
```python
# Model đã deploy tự động sau tuning job
response = client.models.generate_content(
    model=tuned_model_name,
    contents="Production query here"
)
```

### OpenAI
```python
response = client.chat.completions.create(
    model="ft:gpt-4o-mini:org:name:id",
    messages=[{"role": "user", "content": "Production query"}]
)
```

## 2. Self-hosted Deployment

### Merge LoRA + Deploy với vLLM
```bash
# Merge LoRA adapters into base model
python merge_adapters.py --base meta-llama/Llama-3-8B --adapter ./lora_output

# Serve with vLLM
python -m vllm.entrypoints.openai.api_server \
    --model ./merged_model \
    --host 0.0.0.0 --port 8000
```

## 3. Monitoring

```python
# Track: latency, cost, quality drift
class InferenceMonitor:
    def __init__(self):
        self.metrics = []
    
    def log(self, query, response, latency, cost):
        self.metrics.append({
            "timestamp": time.time(),
            "latency_ms": latency,
            "cost_usd": cost,
            "response_length": len(response),
        })
```

---

## Tóm tắt

- API deployment: simplest, Vertex AI hoặc OpenAI
- Self-hosted: vLLM hoặc TGI, cần merge LoRA trước
- Multi-adapter: serve nhiều fine-tuned variants từ 1 base model
- Monitoring: latency, cost, quality drift

## Bài tập

1. Deploy fine-tuned model và test latency (base vs FT)
2. Implement inference monitoring dashboard
3. Load test: 100 concurrent requests
4. Setup quality drift detection

