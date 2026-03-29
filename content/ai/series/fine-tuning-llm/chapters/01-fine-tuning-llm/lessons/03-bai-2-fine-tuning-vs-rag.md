---
id: 019c9619-dd02-7002-e002-dd0200000002
title: 'Bài 2: Fine-tuning vs RAG — Cuộc tranh luận lớn nhất AI 2025'
slug: bai-2-fine-tuning-vs-rag
description: >-
  So sánh chi tiết Fine-tuning vs RAG: Knowledge gap vs Behavior gap.
  Decision checklist thực tế. Hybrid approach. Case studies thực tế:
  khi nào RAG thắng, khi nào Fine-tuning thắng.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Tổng quan & Chiến lược — Khi nào cần Fine-tune?"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

"Nên dùng Fine-tuning hay RAG?" — đây là câu hỏi được hỏi nhiều nhất trong mọi AI meetup, forum, và interview năm 2025–2026. Câu trả lời đúng: **Tuỳ vào vấn đề bạn đang giải quyết**. Bài này cho bạn framework để trả lời chính xác.

---

## 1. Chẩn đoán: Knowledge Gap vs Behavior Gap

### Nguyên tắc cốt lõi

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Model KHÔNG BIẾT thông tin bạn cần?               │
│   → Knowledge Gap → RAG 📚                          │
│                                                     │
│   Model BIẾT nhưng KHÔNG LÀM ĐÚNG cách bạn muốn?   │
│   → Behavior Gap → Fine-tuning 🎯                   │
│                                                     │
│   Cả hai?                                           │
│   → Fine-tuning + RAG (Hybrid) 🔀                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 2. So sánh chi tiết

### 2.1 Bảng so sánh toàn diện

| Tiêu chí | RAG | Fine-tuning |
|----------|-----|-------------|
| **Giải quyết** | Knowledge gap (thiếu thông tin) | Behavior gap (cách ứng xử) |
| **Dữ liệu thay đổi** | Thường xuyên → RAG mạnh | Ít thay đổi → FT phù hợp |
| **Cập nhật** | Tức thì (update DB) | Chậm (train lại model) |
| **Giải thích được** | Cao (cite nguồn) | Thấp (black box) |
| **Chi phí setup** | $50–$500 | $50–$10,000+ |
| **Chi phí maintain** | Thấp (chỉ update data) | Cao (re-train khi cần) |
| **Latency** | Chậm hơn (thêm retrieval step) | Nhanh hơn (không cần retrieval) |
| **Độ chính xác** | Phụ thuộc retrieval quality | Phụ thuộc training data |
| **Hallucination** | Giảm (có nguồn) | Vẫn có thể (nếu data xấu) |
| **Quy mô lớn** | Tốn retrieval cost/lần | Tốn 1 lần training |

### 2.2 Ví dụ thực tế

```
Case 1: Chatbot hỗ trợ khách hàng cần biết chính sách công ty
→ Chính sách thay đổi thường xuyên
→ Cần cite nguồn cho customer
→ RAG THẮNG ✅

Case 2: Model phải trả lời bằng tiếng Việt, formal, format markdown cụ thể
→ Đây là "hành vi" không phải "kiến thức"
→ Prompt engineering không ổn định
→ FINE-TUNING THẮNG ✅

Case 3: Model y khoa cần biết thuật ngữ chuyên ngành VÀ access medical records
→ Thuật ngữ = behavior (fine-tune)
→ Medical records = knowledge (RAG)
→ HYBRID THẮNG ✅

Case 4: Model cần trả lời giá sản phẩm real-time
→ Giá thay đổi liên tục
→ Fine-tune sẽ bị outdated ngay lập tức
→ RAG (hoặc Tool Use) THẮNG ✅

Case 5: Model nhỏ (Flash/Mini) cần perform như model lớn (Pro/4o)
→ "Chắt lọc" kiến thức từ model lớn xuống nhỏ
→ Distillation = một dạng fine-tuning
→ FINE-TUNING THẮNG ✅
```

---

## 3. Decision Flowchart

```
                    ┌─────────────────────┐
                    │  Bạn cần gì từ LLM? │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
    ┌─────────────┐  ┌──────────────┐  ┌──────────────┐
    │ Kiến thức   │  │ Hành vi      │  │ Cả hai       │
    │ mới/riêng   │  │ /Style/Format│  │              │
    └──────┬──────┘  └──────┬───────┘  └──────┬───────┘
           │                │                  │
           ▼                ▼                  ▼
    ┌──────────┐    ┌─────────────┐    ┌──────────────┐
    │ Data thay│    │Prompt eng.  │    │ FT cho style │
    │ đổi nhiều│    │ đã thử?     │    │ + RAG cho    │
    │ không?   │    │             │    │   knowledge  │
    └─────┬────┘    └──────┬──────┘    └──────────────┘
     Yes  │  No        No  │  Yes
      │   │             │  │
      ▼   ▼             ▼  ▼
    ┌───┐┌────┐    ┌───┐┌─────────┐
    │RAG││Cả 2│    │Thử││Fine-tune│
    │   ││    │    │PE ││         │
    └───┘└────┘    └───┘└─────────┘
```

---

## 4. Hybrid Approach — Best of Both Worlds

### 4.1 Kiến trúc Hybrid

```python
# Fine-tune model cho: style, format, domain terminology
# RAG cho: factual data, recent information

class HybridAI:
    def __init__(self):
        self.model = "ft:gpt-4o-mini:xdev:customer-support:abc123"  # Fine-tuned
        self.rag = RAGPipeline(collection="company_docs")           # RAG
    
    def answer(self, question):
        # Step 1: Retrieve relevant context
        context = self.rag.search(question, top_k=3)
        
        # Step 2: Use fine-tuned model with context
        response = openai.chat.completions.create(
            model=self.model,  # Fine-tuned model → đúng style/format
            messages=[
                {"role": "system", "content": f"Context:\n{context}"},
                {"role": "user", "content": question}
            ]
        )
        return response.choices[0].message.content
```

### 4.2 Khi nào dùng Hybrid?

- Cần **cả style riêng VÀ data riêng**
- Hệ thống enterprise lớn
- Domain chuyên biệt (y tế, pháp lý, tài chính)
- Budget đủ cho cả hai

---

## 5. Case Studies thực tế

### Case Study 1: Customer Support Bot — RAG thắng

**Vấn đề**: Chatbot cần trả lời câu hỏi về 500+ sản phẩm, chính sách thay đổi hàng tuần.

**Thử Fine-tuning**: Model thuộc policy cũ, mỗi lần update lại phải train → tốn $200/lần × 4 lần/tháng = $800/tháng.

**Thử RAG**: Update database 5 phút, chi phí retrieve ~$0.001/query. Monthly cost: ~$50.

**Kết luận**: RAG rẻ hơn 16x và luôn up-to-date.

### Case Study 2: Code Review Bot — Fine-tuning thắng

**Vấn đề**: Model cần review code theo coding standard riêng của team (naming conventions, architecture patterns, error handling style rất cụ thể).

**Thử Prompt**: System prompt quá dài (3000 tokens), vẫn không consistent.

**Thử RAG**: Coding standards document không đủ context, output quá generic.

**Thử Fine-tuning**: 200 examples (code + review comments) → model nhất quán 95%+, system prompt giảm từ 3000 → 200 tokens.

**Kết luận**: Fine-tuning giảm 93% token cost + tăng consistency.

### Case Study 3: Medical Q&A — Hybrid thắng

**Vấn đề**: Chatbot y khoa cần hiểu thuật ngữ chuyên ngành VÀ trả lời dựa trên hồ sơ bệnh nhân.

**Solution**: Fine-tune cho medical Vietnamese terminology + RAG cho patient records.

---

## 6. Cost Comparison: Concrete Numbers

### Scenario: 10,000 queries/ngày, 30 ngày

| Approach | Setup cost | Monthly inference | Total/month |
|----------|-----------|-------------------|-------------|
| **Base model + Prompt** | $0 | ~$300 | **$300** |
| **RAG** | $200 (1 lần) | ~$400 (retrieval overhead) | **$400** |
| **Fine-tuning** | $100–$500 (1 lần) | ~$250 (shorter prompts) | **$250** |
| **Hybrid** | $500 | ~$350 | **$350** |

> 💡 Fine-tuning có thể **rẻ hơn** base model nếu bạn rút ngắn được system prompt (ít tokens = ít tiền). Nhưng tính cả maintenance cost!

---

## Tóm tắt bài học

- **Knowledge gap** → RAG | **Behavior gap** → Fine-tuning | **Cả hai** → Hybrid
- Data thay đổi thường xuyên → RAG (update tức thì)
- Cần consistency cao về style/format → Fine-tuning
- 80% trường hợp → Prompt Engineering hoặc RAG đã đủ
- Hybrid approach là industry standard cho enterprise
- Luôn tính toán **tổng chi phí** (training + inference + maintenance)

## Bài tập

1. Phân tích 5 use case trong công ty bạn → phân loại Knowledge vs Behavior gap
2. Vẽ decision flowchart cho use case cụ thể
3. Tính chi phí ước lượng: RAG vs Fine-tuning cho use case đó
4. Thiết kế kiến trúc Hybrid cho một hệ thống thực tế
