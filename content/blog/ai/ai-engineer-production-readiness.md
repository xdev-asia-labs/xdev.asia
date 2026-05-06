---
id: 02760001-aie1-4001-a001-000000000001
title: "AI Engineer là gì? Từ prototype LLM đến sản phẩm AI production"
slug: ai-engineer-production-readiness
excerpt: >-
  AI Engineer không chỉ gọi API model. Vai trò này biến model thành tính năng có
  metric, eval, guardrail, fallback, logging và quy trình vận hành rõ ràng.
featured_image: /images/blog/ai-engineer-production-readiness.png
type: blog
reading_time: 10
view_count: 0
meta: null
published_at: '2026-05-06T10:00:00.000000Z'
created_at: '2026-05-06T10:00:00.000000Z'
author: {id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf, name: Duy Tran, avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg}
category: {id: 019c9616-cat1-7001-a001-000000000001, name: AI, slug: ai}
tags: [{name: AI Engineer, slug: ai-engineer}, {name: LLM, slug: llm}, {name: Production AI, slug: production-ai}, {name: Roadmap, slug: roadmap}]
comments: []
---

Nhiều team bắt đầu AI feature bằng một demo rất nhanh: gọi API model, nhét prompt vào, có câu trả lời nhìn khá thông minh. Nhưng khoảng cách từ demo đến production thường rất xa.

AI Engineer là người chịu trách nhiệm lấp khoảng cách đó.

## Sau bài này bạn làm được gì?

- Phân biệt được AI Engineer với ML Engineer, Backend Engineer và Data Scientist.
- Viết được AI feature brief có success metric, guardrail metric và fallback.
- Tự đánh giá một prototype đã đủ production-ready hay chưa.

## Mini-lab bắt buộc

Chọn một chatbot FAQ hoặc ticket assistant. Viết 1 trang AI feature brief gồm user, task, dữ liệu được phép dùng, metric, rủi ro, fallback và go/no-go criteria.

## Checklist tự đánh giá

- Có owner cho quality/safety/cost không?
- Có eval trước release không?
- Có fallback khi model lỗi không?

## 1. AI Engineer làm gì?

AI Engineer trong sản phẩm GenAI thường đứng giữa nhiều nhóm:

- Product/BA: làm rõ use case, success metric, acceptance criteria.
- Backend/Platform: tích hợp API, queue, streaming, auth, logging, deployment.
- Data/ML: chuẩn bị dữ liệu, embeddings, evaluation dataset, monitoring drift.
- Security/Compliance: kiểm soát prompt injection, PII, audit log, quyền tool.
- Support/Operations: theo dõi incident, fallback, escalation, cost spike.

Điểm khác biệt là AI Engineer không chỉ hỏi "model trả lời được không?". Câu hỏi đúng hơn là:

> Tính năng AI này có đáng tin, đo được, kiểm soát được và vận hành được không?

## 2. Prototype AI thường thiếu gì?

Một prototype có thể chạy ổn trong demo nhưng vẫn chưa production-ready nếu thiếu:

- Eval dataset để so sánh chất lượng qua mỗi lần đổi prompt/model.
- Guardrails để xử lý input nguy hiểm, output rủi ro hoặc yêu cầu ngoài phạm vi.
- Logging đủ sâu để biết lỗi đến từ prompt, retrieval, model hay tool.
- Fallback khi model timeout, trả sai format hoặc cost vượt ngưỡng.
- Permission model cho tools và dữ liệu tenant.
- Release policy cho prompt version, model version và retrieval index.

Nếu thiếu các phần này, team thường chỉ "cảm thấy" AI tốt hoặc không tốt. Cảm giác không đủ để vận hành.

## 3. Production readiness checklist

Trước khi release AI feature, hãy kiểm tra tối thiểu:

### Use case

- User journey rõ.
- AI giải quyết pain point cụ thể.
- Có scope không làm trong version đầu.
- Có human escalation khi AI không đủ tự tin.

### Quality

- Có eval objective.
- Có dataset gồm case thường, edge case và adversarial case.
- Có metric như correctness, groundedness, helpfulness, citation accuracy.
- Có threshold go/no-go.

### Reliability

- Timeout và retry có giới hạn.
- Model output được validate bằng schema nếu downstream cần dùng.
- Có fallback khi model lỗi hoặc trả invalid response.
- Có tracing theo request id.

### Safety

- Không log raw PII nếu không cần.
- Có policy cho prompt injection và data exfiltration.
- Tool nguy hiểm cần confirmation.
- Output có kiểm tra policy với các domain rủi ro.

### Cost

- Có cost per successful task.
- Có alert theo spend.
- Có model routing hoặc caching cho tác vụ lặp lại.
- Có degradation mode khi quá tải hoặc vượt ngân sách.

## 4. AI Engineer không thay ML Engineer

ML Engineer thường mạnh về training pipeline, model registry, feature store, serving và MLOps. AI Engineer trong GenAI application mạnh về application layer:

- Prompt contract.
- Structured output.
- RAG.
- Tool calling.
- Agent workflow.
- Evals.
- Guardrails.
- Observability.
- Cost optimization.

Hai vai trò có vùng giao nhau, nhưng không giống nhau.

## 5. Bài tập thực hành

Chọn một tính năng đơn giản như "AI assistant trả lời FAQ sản phẩm". Viết một AI feature brief gồm:

1. Người dùng là ai?
2. Task nào AI hỗ trợ?
3. Khi nào AI phải từ chối?
4. Metric thành công là gì?
5. Rủi ro production lớn nhất là gì?
6. Dữ liệu nào được phép dùng?
7. Nếu model lỗi thì fallback ra sao?

Khi trả lời được các câu này, bạn đã bắt đầu nghĩ như AI Engineer thay vì chỉ nghĩ như người gọi API.
