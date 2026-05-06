---
id: 02760001-aie1-4001-a011-000000000001
title: "Evaluation-driven AI Engineering: eval dataset, rubrics, graders và release gates"
slug: eval-driven-ai-engineering
excerpt: >-
  Evals là cách đưa AI feature từ cảm giác sang kỹ thuật. Học cách tạo objective,
  dataset, rubrics, automated graders, human review và release gate.
featured_image: /images/blog/eval-driven-ai-engineering.png
type: blog
reading_time: 12
view_count: 0
meta: null
published_at: '2026-05-06T10:50:00.000000Z'
created_at: '2026-05-06T10:50:00.000000Z'
author: {id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf, name: Duy Tran, avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg}
category: {id: 019c9616-cat1-7001-a001-000000000001, name: AI, slug: ai}
tags: [{name: Evaluation, slug: evaluation}, {name: Evals, slug: evals}, {name: AI Engineer, slug: ai-engineer}, {name: CI/CD, slug: cicd}]
comments: []
---

Phần lớn bug phần mềm truyền thống có thể test bằng assert rõ ràng. AI feature khó hơn vì output biến thiên, có nhiều cách trả lời đúng, và chất lượng không chỉ là pass/fail.

Evals giúp bạn đo chất lượng AI một cách có hệ thống.

## Sau bài này bạn làm được gì?

- Viết được eval objective, dataset card và rubric.
- Kết hợp được exact checks, schema checks, LLM judge và human review.
- Đưa eval vào CI/CD làm release gate.

## Mini-lab bắt buộc

Tạo eval harness cho RAG assistant: 100 cases, expected docs, rubric groundedness, report và threshold fail CI.

## Checklist tự đánh giá

- Dataset có edge/adversarial cases không?
- Rubric có đủ cụ thể không?
- Release gate có block regression không?

## 1. Eval objective

Đừng bắt đầu bằng tool. Bắt đầu bằng câu hỏi:

> Chúng ta muốn hệ thống làm tốt điều gì?

Ví dụ:

- Q&A phải trả lời đúng dựa trên tài liệu.
- Ticket classifier phải route đúng category.
- Summarizer phải giữ đủ decision và action items.
- Agent phải dùng đúng tools và không tự ý gây side effect.

Objective càng rõ, eval càng hữu ích.

## 2. Dataset

Eval dataset nên gồm:

- Typical cases.
- Edge cases.
- Adversarial cases.
- Historical production cases.
- Domain-specific hard cases.
- Cases cần refusal.
- Cases nhiều ngôn ngữ nếu sản phẩm hỗ trợ.

Đừng chỉ dùng câu hỏi dễ. Dataset dễ tạo cảm giác an toàn giả.

Một sample có thể gồm:

```json
{
  "input": "User question or task",
  "expected_behavior": "answer_with_citation",
  "expected_facts": ["..."],
  "risk": "medium",
  "tags": ["billing", "policy", "edge-case"]
}
```

## 3. Metrics

Tùy task:

### Extraction/classification

- Exact match.
- F1.
- JSON validity.
- Enum validity.

### RAG

- Context recall.
- Context precision.
- Groundedness.
- Citation accuracy.
- No-answer accuracy.

### Summarization

- Key point coverage.
- Faithfulness.
- Conciseness.
- Action item accuracy.

### Agent

- Tool trajectory.
- Argument correctness.
- Final response quality.
- Safety violation rate.

## 4. Rubrics

Nhiều task cần chấm theo rubric. Ví dụ groundedness:

- 5: tất cả factual claims có nguồn rõ.
- 4: gần như đầy đủ, thiếu citation cho claim phụ.
- 3: có vài claim chưa được hỗ trợ.
- 2: nhiều claim không có trong context.
- 1: bịa hoặc trái nguồn.

Rubric phải đủ cụ thể để hai reviewer chấm không lệch quá xa.

## 5. Automated graders

Bạn có thể dùng:

- Rule-based checks.
- Schema validation.
- Exact match.
- Regex.
- LLM-as-judge.
- Pairwise comparison.

LLM-as-judge hữu ích nhưng không nên mù quáng. Hãy calibrate bằng human review, đặc biệt với domain rủi ro.

## 6. Release gates

Eval nên vào CI/CD.

Ví dụ policy:

- JSON validity phải >= 99%.
- Unsafe answer rate phải = 0 trên safety set.
- Groundedness không được giảm hơn 2 điểm phần trăm.
- Cost per successful task không tăng quá 20 phần trăm.
- Các regression case critical phải pass 100%.

Nếu fail, block release prompt/model/RAG change.

## 7. Data flywheel

Eval dataset không đứng yên. Nó nên lớn dần từ:

- User feedback.
- Failed traces.
- Support corrections.
- Human review.
- Incident postmortem.
- New product policy.

Mỗi lần production có lỗi, hãy hỏi: lỗi này đã có trong eval chưa? Nếu chưa, thêm vào.

## 8. Bài tập thực hành

Tạo eval harness cho một RAG assistant:

1. 100 questions.
2. Expected docs.
3. Expected answer facts.
4. Rubric groundedness 1-5.
5. Script chạy model và xuất CSV report.
6. CI fail nếu score giảm quá ngưỡng.

Khi eval chạy tự động, AI Engineering bắt đầu giống engineering thật hơn.
