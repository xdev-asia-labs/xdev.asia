---
id: 02760001-aie1-4001-a006-000000000001
title: "RAG từ gốc: ingestion, chunking, metadata, vector search và hybrid retrieval"
slug: rag-ingestion-vector-hybrid-retrieval
excerpt: >-
  RAG tốt bắt đầu từ dữ liệu tốt: ingestion sạch, chunking đúng cấu trúc, metadata
  đủ giàu, vector search có filter và hybrid retrieval khi keyword vẫn quan trọng.
featured_image: /images/blog/rag-ingestion-vector-hybrid-retrieval.png
type: blog
reading_time: 12
view_count: 0
meta: null
published_at: '2026-05-06T10:25:00.000000Z'
created_at: '2026-05-06T10:25:00.000000Z'
author: {id: 019c9616-d2b4-713f-9b2c-40e2e92a05cf, name: Duy Tran, avatar: avatars/7e8eb5c6-4cac-455b-a701-4060f085d501.jpeg}
category: {id: 019c9616-cat1-7001-a001-000000000001, name: AI, slug: ai}
tags: [{name: RAG, slug: rag}, {name: Vector DB, slug: vector-db}, {name: Embeddings, slug: embeddings}, {name: Retrieval, slug: retrieval}]
comments: []
---

RAG demo rất dễ. RAG production khó hơn nhiều.

Lý do: model chỉ trả lời tốt khi context đưa vào prompt đúng, đủ và không nhiễu. Muốn vậy, ingestion và retrieval phải được thiết kế cẩn thận.

## Sau bài này bạn làm được gì?

- Thiết kế được ingestion pipeline có chunking và metadata.
- So sánh được dense, keyword và hybrid retrieval.
- Biết dùng permission/freshness filter trước khi đưa context vào model.

## Mini-lab bắt buộc

Ingest 20 tài liệu, chunk theo heading, gắn metadata, chạy 50 câu hỏi và đo top-k có lấy đúng source không.

## Checklist tự đánh giá

- Chunk có owner/updated_at/access_level không?
- Có re-index policy không?
- Có hybrid search cho mã lỗi/SKU/API không?

## 1. Ingestion không chỉ là đọc file

Ingestion pipeline cần biến dữ liệu thô thành dạng search được.

Nguồn dữ liệu có thể là:

- Markdown.
- PDF.
- HTML.
- Confluence/Notion.
- Database rows.
- Support tickets.
- API docs.
- Product manuals.

Mỗi nguồn có vấn đề riêng: PDF mất heading, HTML có navigation noise, database thiếu context, docs cũ chưa archive.

Ingestion tốt nên chuẩn hóa về một format trung gian:

```json
{
  "document_id": "refund-policy-v3",
  "title": "Refund Policy",
  "body": "...",
  "source": "confluence",
  "updated_at": "2026-05-06",
  "owner": "billing-team",
  "access_level": "internal",
  "product_area": "billing"
}
```

## 2. Chunking theo cấu trúc

Chunk quá nhỏ thì mất context. Chunk quá lớn thì retrieval nhiễu và tốn token.

Các chiến lược thường dùng:

- Chunk theo heading.
- Chunk theo paragraph.
- Sliding window có overlap.
- Chunk theo semantic boundary.
- Chunk theo object domain, ví dụ một policy, một API endpoint, một FAQ.

Không có chunk size đúng cho mọi bài toán. Hãy đo retrieval recall/precision trên dataset thật.

## 3. Metadata là nửa còn lại của RAG

Vector search tìm nội dung gần nghĩa. Nhưng metadata giúp hệ thống biết:

- Tài liệu thuộc product nào?
- User có quyền xem không?
- Tài liệu còn mới không?
- Tenant nào?
- Ngôn ngữ nào?
- Owner là ai?
- Version nào?

Nếu không có metadata, RAG dễ trả lời bằng tài liệu sai tenant hoặc tài liệu cũ.

Metadata filter nên chạy trước hoặc cùng retrieval:

- `tenant_id = current_tenant`
- `access_level <= user_permission`
- `product_area = selected_product`
- `status = published`

## 4. Vector search không thay thế keyword search

Embedding rất mạnh khi user dùng từ khác tài liệu. Nhưng keyword search vẫn quan trọng khi:

- Có mã lỗi.
- Có SKU.
- Có API endpoint.
- Có tên feature.
- Có số hóa đơn.
- Có thuật ngữ chính xác.

Hybrid retrieval kết hợp semantic search và keyword search. Sau đó có thể rerank để chọn context tốt nhất.

## 5. Retrieval pipeline mẫu

Một pipeline thực tế:

1. Normalize query.
2. Detect language/domain.
3. Apply permission filter.
4. Run vector search.
5. Run keyword search.
6. Merge candidates.
7. Rerank.
8. Remove duplicates.
9. Build context with citations.
10. Send to model.

Mỗi bước nên có logging để debug.

## 6. Những lỗi RAG phổ biến

- Chunk chứa quá nhiều noise.
- Không re-index khi tài liệu đổi.
- Không filter theo permission.
- Top-k quá cao làm context loãng.
- Không đo retrieval, chỉ đo answer.
- Không có no-answer behavior.
- Citation trỏ nhầm đoạn.

## 7. Bài tập thực hành

Lấy 30 tài liệu nội bộ hoặc FAQ. Làm pipeline:

1. Ingest và chunk theo heading.
2. Tạo embeddings.
3. Gắn metadata `source`, `updated_at`, `product_area`, `access_level`.
4. Tạo 50 câu hỏi test.
5. Đo top-3 có chứa tài liệu đúng không.
6. Thử hybrid retrieval với câu hỏi có mã lỗi hoặc tên API.

RAG tốt không nằm ở vector database xịn nhất. RAG tốt nằm ở dữ liệu, metadata, retrieval logic và eval.
