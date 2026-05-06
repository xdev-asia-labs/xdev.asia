---
id: 02760001-aie1-4001-a002-000000000001
title: "Backend foundation cho AI apps: Python, TypeScript, streaming, queue và secret"
slug: backend-ai-apps-python-typescript
excerpt: >-
  AI app production cần nền tảng backend chắc: timeout, retry, streaming, queue,
  typed config, secret management, request id và logging không làm lộ dữ liệu nhạy cảm.
featured_image: /images/blog/backend-ai-apps-python-typescript.png
type: blog
reading_time: 11
view_count: 0
meta: null
published_at: '2026-05-06T10:05:00.000000Z'
created_at: '2026-05-06T10:05:00.000000Z'
author: {id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf, name: Duy Tran, avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg}
category: {id: 019c9616-cat1-7001-a001-000000000001, name: AI, slug: ai}
tags: [{name: AI Engineer, slug: ai-engineer}, {name: Backend, slug: backend}, {name: Python, slug: python}, {name: TypeScript, slug: typescript}]
comments: []
---

AI Engineer không cần trở thành backend architect ngay từ ngày đầu. Nhưng nếu backend yếu, AI feature sẽ dễ sập ở production: request treo, model timeout, log lộ dữ liệu, retry vô hạn, hoặc cost tăng mà không ai biết.

Bài này gom các nền tảng backend quan trọng nhất cho AI apps.

## Sau bài này bạn làm được gì?

- Build được endpoint AI có timeout, retry, request_id và structured logging.
- Biết khi nào dùng streaming, queue và background job.
- Thiết kế được config/secret handling tối thiểu cho staging và production.

## Mini-lab bắt buộc

Tạo endpoint phân loại ticket trả JSON, validate schema, retry 1 lần khi invalid, log latency/token/error đã redact.

## Checklist tự đánh giá

- Output có schema không?
- Retry có giới hạn không?
- Log có raw PII không?

## 1. Endpoint gọi model không nên quá "mỏng"

Endpoint đơn giản nhất thường là:

```ts
POST /api/chat -> gọi model -> trả response
```

Nhưng production cần thêm:

- `request_id` để trace.
- Timeout rõ cho model call.
- Retry có giới hạn cho lỗi tạm thời.
- Validate input trước khi gọi model.
- Validate output trước khi ghi DB.
- Log latency, token usage, model version.
- Redact PII trong logs.

Nếu không có các lớp này, bạn sẽ rất khó trả lời câu hỏi: "vì sao user này nhận câu trả lời sai?".

## 2. Python hay TypeScript?

Không có lựa chọn tuyệt đối.

Python phù hợp khi bạn cần:

- Data processing.
- Embeddings pipeline.
- Eval harness.
- Notebook thử nghiệm.
- ML/RAG tooling nhiều.

TypeScript phù hợp khi bạn cần:

- Web product integration.
- Type-safe API contract.
- Next.js hoặc Node backend.
- Frontend/backend shared schema.

Một pattern thực tế là dùng TypeScript cho product API, Python cho ingestion/eval/offline jobs. Quan trọng là contract giữa hai bên rõ ràng.

## 3. Streaming cho trải nghiệm người dùng

LLM response có thể mất vài giây. Nếu chờ full response rồi mới trả, UX sẽ rất nặng.

Streaming giúp:

- User thấy hệ thống đang làm việc.
- Giảm cảm giác latency.
- Có thể hủy request giữa chừng.
- Dễ hiển thị progressive answer.

Nhưng streaming cần xử lý thêm:

- Client disconnect.
- Partial response.
- Lỗi giữa stream.
- Không ghi log thiếu kiểm soát.
- Không commit action quan trọng khi response chưa hoàn tất.

## 4. Queue cho tác vụ dài

Không phải task AI nào cũng nên chạy trong request-response.

Dùng queue cho:

- Summarize tài liệu lớn.
- Ingest nhiều files.
- Chạy eval batch.
- Generate report dài.
- Re-index embeddings.

Queue tốt cần:

- Job id.
- Retry policy.
- Dead letter queue.
- Progress status.
- Idempotency key.
- Result storage.

Với AI apps, idempotency đặc biệt quan trọng. Nếu retry một job "gửi email cho khách hàng", bạn không muốn email bị gửi 3 lần.

## 5. Secret management và environment

Không hardcode API key trong source. Tối thiểu cần:

- `.env.local` cho dev.
- Secret manager hoặc platform env vars cho staging/prod.
- Tách key staging và prod.
- Rate limit và spend limit theo environment.
- Rotation process khi key lộ.

Một lỗi phổ biến là dùng chung key cho tất cả môi trường. Khi dev script chạy lỗi và spam API, production cũng bị ảnh hưởng.

## 6. Typed config và schema validation

AI app có nhiều config dễ sai:

- Model name.
- Temperature.
- Max output tokens.
- Retrieval top-k.
- Similarity threshold.
- Guardrail mode.
- Eval dataset version.

Hãy validate config khi app start. Nếu `RETRIEVAL_TOP_K` là `"abc"`, app nên fail sớm, không phải chờ production báo lỗi.

## 7. Bài tập thực hành

Build một endpoint `/api/ai/ticket-classifier`:

1. Nhận ticket text.
2. Validate độ dài input.
3. Gọi model với timeout.
4. Bắt output theo JSON schema.
5. Retry 1 lần nếu output invalid.
6. Log request id, latency, model, token usage.
7. Không log raw nội dung ticket nếu có PII.

Khi làm được bài này, bạn đã có nền backend tối thiểu để bước sang prompt, RAG và evals.
