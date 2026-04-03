---
id: 01970001-bb05-7005-d005-bb0500001005
title: 'Bài 5: Ingestion, chunking và vector indexing cho tiếng Việt'
slug: bai-5-ingestion-chunking-va-vector-indexing-cho-tieng-viet
description: >-
  Xử lý Markdown và PDF, chunk theo cấu trúc tài liệu kỹ thuật,
  lưu metadata đầy đủ và tối ưu embedding pipeline cho tiếng Việt.
duration_minutes: 110
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 3: RAG Engineering cho dữ liệu nội bộ"
course:
  id: 01970001-aa11-7011-b011-aa1100001011
  title: Gemma 4 Local AI Engineering trên Mac
  slug: gemma-4-local-ai-engineering-tren-mac
---

## Giới thiệu

RAG chất lượng cao bắt đầu từ ingestion đúng. Nếu chunk sai cấu trúc, retrieval tốt đến đâu cũng khó cho câu trả lời ổn định.

## 1. Nguồn dữ liệu nội bộ

Nguồn phổ biến:

- Markdown docs
- Runbook vận hành
- PDF quy trình hoặc compliance
- Notes kỹ thuật từ team

Mỗi nguồn cần parser riêng nhưng phải đổ về một schema thống nhất.

## 2. Chuẩn hóa dữ liệu trước khi chunk

Các bước đề xuất:

1. Chuẩn hóa encoding và unicode
2. Làm sạch header/footer lặp lại
3. Đánh dấu code block giữ nguyên
4. Tách cấu trúc theo heading

Không xóa dấu tiếng Việt bừa bãi vì làm giảm chất lượng retrieval.

## 3. Chunking strategy

Thông số tham khảo:

- Chunk size: 600-1000 tokens
- Overlap: 80-150 tokens
- Ưu tiên cắt theo section thay vì cắt ký tự cứng

Mục tiêu là giữ ngữ nghĩa hoàn chỉnh cho từng chunk.

## 4. Metadata schema

Payload khuyến nghị:

```json
{
  "doc_id": "pg-backup-v2",
  "title": "Backup PostgreSQL",
  "section": "3. PITR",
  "source": "docs/backup.md",
  "language": "vi",
  "updated_at": "2026-04-03"
}
```

Metadata giúp filter chính xác theo topic, nguồn và thời gian cập nhật.

## 5. Embedding pipeline

Thực hành tốt:

- Batch embedding theo lô
- Cache theo hash nội dung
- Chỉ embed lại chunk thay đổi

Với dữ liệu lớn, incremental ingestion tiết kiệm rất nhiều thời gian.

## 6. Index lifecycle

Áp dụng 2 collection:

- `active`: phục vụ truy vấn
- `staging`: ingest dữ liệu mới

Khi staging pass eval, swap sang active để giảm rủi ro downtime.

## Demo code

Kết quả query qua RAG endpoint với citation:

![RAG Query](/images/blog/gemma4-series-demo/05-rag-query.png)

> Source code: [04-ingestion](https://github.com/xdev-asia-labs/gemma-4-local-ai-engineering-on-mac/tree/main/04-ingestion)

## Tóm tắt

Ingestion và chunking là nền móng của RAG. Bài tiếp theo sẽ nâng retrieval lên hybrid search với BM25 + vector + reranker để tăng precision và citation quality.