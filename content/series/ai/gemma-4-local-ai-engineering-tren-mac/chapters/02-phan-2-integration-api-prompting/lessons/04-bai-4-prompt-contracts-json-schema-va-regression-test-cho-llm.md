---
id: 01970001-bb04-7004-d004-bb0400001004
title: 'Bài 4: Prompt contracts, JSON schema và regression test cho LLM'
slug: bai-4-prompt-contracts-json-schema-va-regression-test-cho-llm
description: >-
  Định nghĩa prompt contract theo từng use case, ép output theo schema,
  xây regression test để kiểm soát quality khi đổi prompt hoặc model.
duration_minutes: 95
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 2: Integration - API, Prompting và App Embedding"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 Local AI Engineering trên Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

## Giới thiệu

Nhiều team thất bại không phải vì model yếu, mà vì prompt không có hợp đồng rõ ràng. Khi prompt thay đổi, output drift và app hỏng ngầm.

## 1. Prompt contract là gì?

Prompt contract gồm 4 phần:

- Role và phạm vi nhiệm vụ
- Input format
- Output format
- Failure behavior khi thiếu dữ liệu

Ví dụ failure behavior: trả đúng câu "không đủ dữ liệu" thay vì bịa.

## 2. JSON schema cho output

Ví dụ schema trích xuất action items:

```json
{
  "type": "object",
  "required": ["summary", "items"],
  "properties": {
    "summary": {"type": "string"},
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["task", "owner"],
        "properties": {
          "task": {"type": "string"},
          "owner": {"type": "string"},
          "deadline": {"type": "string"}
        }
      }
    }
  }
}
```

Validate schema ngay sau khi nhận output từ model.

## 3. Thiết kế golden tests

Tạo file test chứa:

- Input prompt
- Must include
- Must not include
- Schema pass/fail

Mỗi lần đổi prompt/model phải chạy lại toàn bộ bộ test.

## 4. Phân loại lỗi

- Format error: không đúng schema
- Grounding error: không bám context
- Safety error: trả dữ liệu nhạy cảm
- Instruction error: bỏ qua ràng buộc hệ thống

Gắn mã lỗi rõ ràng giúp theo dõi xu hướng theo thời gian.

## 5. Versioning prompt

Áp dụng quy tắc:

- Mỗi prompt có mã phiên bản
- Changelog ngắn gọn cho từng lần đổi
- Rollback nhanh nếu quality giảm

Không chỉnh prompt trực tiếp trên production mà không lưu version.

## Demo code

Kết quả chạy prompt contract tests — 6/6 passed:

![Prompt Contract Tests](/images/blog/gemma4-series-demo/04-prompt-contract-tests.png)

> Source code: [03-prompt-contracts](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/03-prompt-contracts)

## Tóm tắt

Prompt contract + schema + regression test là bộ ba bắt buộc để biến LLM thành thành phần kỹ thuật có thể bảo trì. Bài tiếp theo sẽ chuyển sang RAG engineering, bắt đầu từ ingestion và chunking tiếng Việt.