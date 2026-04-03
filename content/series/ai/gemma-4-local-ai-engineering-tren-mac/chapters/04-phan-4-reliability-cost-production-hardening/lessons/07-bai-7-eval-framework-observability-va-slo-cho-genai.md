---
id: 01970001-bb07-7007-d007-bb0700001007
title: 'Bài 7: Eval framework, observability và SLO cho GenAI'
slug: bai-7-eval-framework-observability-va-slo-cho-genai
description: >-
  Thiết kế golden set, feedback loop, metrics latency và groundedness,
  định nghĩa SLO thực tế cho tính năng GenAI trong môi trường nội bộ.
duration_minutes: 95
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 4: Reliability, Cost và Production Hardening"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 Local AI Engineering trên Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

## Giới thiệu

Không đo thì không quản được. Local AI stack cần cùng kỷ luật vận hành như các dịch vụ backend khác: có SLO, có dashboard, có postmortem.

## 1. Bộ metrics cốt lõi

- Latency: p50, p95, p99
- Quality: groundedness, citation accuracy
- Retrieval: recall@k, hit rate
- Cost nội bộ: CPU/GPU time, memory pressure

## 2. Thiết kế golden set

Golden set gồm các nhóm:

- FAQ ngắn và rõ
- Câu hỏi nhiều bước
- Câu hỏi đánh bẫy thiếu context
- Câu hỏi tiếng Việt có thuật ngữ kỹ thuật

Mỗi case có expected behavior và tiêu chí pass/fail.

## 3. Online feedback loop

Trong UI, thêm nút:

- Helpful
- Not helpful
- Wrong citation

Log feedback theo `request_id` để map ngược về prompt, model, retriever version.

## 4. Định nghĩa SLO thực dụng

Ví dụ SLO cho feature hỏi đáp nội bộ:

- 95% request trả trong dưới 3 giây
- 90% câu trả lời có citation hợp lệ
- Tỷ lệ fallback do thiếu context dưới 12%

SLO nên đi kèm error budget và kế hoạch xử lý khi vi phạm.

## 5. Dashboard tối thiểu

Dashboard cần có:

- Latency theo model
- Quality theo use case
- Tần suất lỗi schema
- Tỷ lệ fallback

Theo dõi theo ngày và theo release để phát hiện drift nhanh.

## Demo code

Eval framework tests và golden set runner:

![Eval Framework](/images/blog/gemma4-series-demo/07-eval-framework.png)

> Source code: [06-eval-observability](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/06-eval-observability)

## Tóm tắt

Eval framework và observability giúp GenAI trở thành hệ thống có thể vận hành lâu dài. Bài cuối sẽ chốt hardening và checklist rollout cho môi trường doanh nghiệp.