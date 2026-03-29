---
id: 019c9619-dd01-7001-e001-dd0100000001
title: 'Bài 1: Fine-tuning là gì? — Landscape & Tại sao bạn (chưa) cần nó'
slug: bai-1-fine-tuning-la-gi
description: >-
  Định nghĩa fine-tuning trong bối cảnh LLM hiện đại. Pre-training vs
  SFT vs RLHF/DPO. Khi nào cần fine-tune, khi nào KHÔNG nên. Decision
  framework: Prompt Engineering → RAG → Fine-tuning.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: "Phần 1: Tổng quan & Chiến lược — Khi nào cần Fine-tune?"
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: "Fine-tuning LLM: Nghệ thuật Tinh chỉnh AI"
  slug: fine-tuning-llm
---

## Giới thiệu

"Fine-tuning" là một trong những buzzword được nhắc đến nhiều nhất trong AI — nhưng cũng là kỹ thuật bị **lạm dụng** nhiều nhất. Trước khi nhảy vào code, bạn cần hiểu: Fine-tuning thực sự là gì, nó nằm ở đâu trong pipeline AI, và **khi nào thực sự cần nó**.

> ⚠️ **Quy tắc vàng**: 80% trường hợp bạn nghĩ cần fine-tune, thực ra prompt engineering hoặc RAG đã đủ. Fine-tuning là **lựa chọn cuối cùng**, không phải đầu tiên.

---

## 1. Vòng đời của một LLM

Trước khi hiểu fine-tuning, hãy xem LLM được tạo ra thế nào:

```
┌──────────────────────────────────────────────────────────────────┐
│                    VÒNG ĐỜI MỘT LLM                             │
│                                                                  │
│  Phase 1: PRE-TRAINING                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện trên TOÀN BỘ internet (~15 nghìn tỷ tokens)  │    │
│  │ → Học ngôn ngữ, kiến thức, lập luận chung               │    │
│  │ Cost: $10M–$100M+ | Time: Weeks–Months | GPUs: Hàng nghìn│    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 2: SUPERVISED FINE-TUNING (SFT) ← Bạn đang ở đây        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Huấn luyện thêm trên dataset nhỏ, chất lượng cao        │    │
│  │ → Dạy model cách tuân thủ instructions, format, style    │    │
│  │ Cost: $10–$10,000 | Time: Minutes–Hours | GPUs: 1–8      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Phase 3: ALIGNMENT (RLHF / DPO)                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Tinh chỉnh model theo preferences con người              │    │
│  │ → An toàn, helpful, honest                               │    │
│  │ Cost: $1,000–$50,000 | Cần human annotators              │    │
│  └─────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────┘
```

### Điểm mấu chốt

- **Pre-training**: Cho model "đọc" toàn bộ internet → biết mọi thứ nhưng không biết cách trả lời
- **SFT (Fine-tuning)**: Dạy model *cách* trả lời, theo format/style bạn muốn
- **RLHF/DPO**: Tinh chỉnh model để phản hồi "đúng ý" con người

**Khi người ta nói "fine-tuning", thường là Phase 2 — SFT.**

---

## 2. Fine-tuning giải quyết vấn đề gì?

### 2.1 Behavior vs Knowledge

Đây là phân biệt **quan trọng nhất** để quyết định có cần fine-tune không:

| Vấn đề | Loại | Giải pháp |
|---------|------|-----------|
| Model không biết sản phẩm của công ty bạn | **Knowledge gap** | RAG |
| Model trả lời phải bằng tiếng Việt, format JSON cụ thể | **Behavior gap** | Fine-tuning |
| Model cần data real-time (giá cổ phiếu, thời tiết) | **Knowledge gap** | RAG / Tool use |
| Model không dùng đúng thuật ngữ ngành bạn | **Behavior gap** | Fine-tuning |
| Model "nói nhiều" quá, bạn cần trả lời ngắn gọn | **Behavior gap** | Fine-tuning (hoặc prompt) |
| Model không biết policy nội bộ mới nhất | **Knowledge gap** | RAG |

### 2.2 Ví dụ cụ thể

**❌ KHÔNG cần fine-tune:**
- "Tôi muốn chatbot biết về sản phẩm của công ty" → Dùng **RAG**
- "Tôi muốn model trả lời chính xác câu hỏi từ tài liệu" → Dùng **RAG**
- "Tôi cần model đọc database và trả lời" → Dùng **Tool Use / Agent**

**✅ CẦN fine-tune:**
- "Model phải luôn trả lời bằng JSON với schema cụ thể" → **Fine-tune**
- "Model cần dùng giọng điệu brand riêng, rất khác default" → **Fine-tune**
- "Model bé (Flash/Mini) cần perform như model lớn (Pro/4o)" → **Fine-tune** (distillation)
- "Model phải hiểu thuật ngữ y khoa tiếng Việt" → **Fine-tune** + RAG

---

## 3. Decision Framework: Nấc thang 3 bước

Trước khi fine-tune, hãy đi qua 3 bước theo thứ tự:

```
Bước 1: PROMPT ENGINEERING
├── Chi phí: $0 | Thời gian: Phút
├── Thử: System prompt tốt hơn, few-shot examples, chain-of-thought
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 2

Bước 2: RAG (Retrieval-Augmented Generation)
├── Chi phí: $50–$500 setup | Thời gian: Ngày
├── Thử: Kết nối knowledge base, vector DB
├── Đủ tốt? → DỪNG ✅
└── Không đủ? → Bước 3

Bước 3: FINE-TUNING
├── Chi phí: $50–$10,000+ | Thời gian: Days–Weeks
├── Chuẩn bị data, train, evaluate, iterate
└── Đây là lựa chọn cuối cùng
```

### Checklist trước khi fine-tune

- [ ] Đã thử ít nhất 5 phiên bản system prompt khác nhau?
- [ ] Đã thử few-shot prompting (3–5 examples trong prompt)?
- [ ] Nếu cần kiến thức mới → đã thử RAG?
- [ ] Có ít nhất 100 ví dụ training data chất lượng cao?
- [ ] Có budget cho training + evaluation iterations?
- [ ] Có thời gian maintain model trong dài hạn?

---

## 4. Các phương pháp Fine-tuning

### 4.1 Full Fine-tuning
- Cập nhật **tất cả** weights của model
- Cần GPU khủng (A100 80GB+)
- Chi phí cao, rủi ro catastrophic forgetting
- Hiếm khi cần trong thực tế 2025–2026

### 4.2 Supervised Fine-Tuning (SFT) qua API
- Dùng API của Google/OpenAI
- Không cần quản lý GPU
- Nhanh, dễ, chi phí vừa phải
- **Đây là cách phổ biến nhất**

### 4.3 LoRA / QLoRA (Parameter-Efficient)
- Chỉ cập nhật **một phần nhỏ** weights (~0.1–1%)
- Chạy được trên GPU consumer (RTX 3090, T4)
- Chi phí thấp nhất
- Cần technical knowledge nhiều hơn

```
┌─────────────────────────────────────────────────┐
│           So sánh 3 phương pháp                  │
│                                                  │
│  Full FT    ████████████████████  $$$$$  🔥🔥🔥  │
│  SFT (API)  ██████████           $$     🔥       │
│  LoRA       ████                 $      🔥🔥     │
│                                                  │
│  ████ = Resources    $$$ = Cost    🔥 = Difficulty│
└─────────────────────────────────────────────────┘
```

---

## 5. Landscape 2025–2026: Ai cung cấp Fine-tuning?

| Provider | Models hỗ trợ | Pricing model | Ưu điểm |
|----------|---------------|---------------|---------|
| **Google (Vertex AI)** | Gemini 2.0 Flash, Pro | Per training token | Inference giá bằng base model |
| **OpenAI** | GPT-4o-mini, GPT-4o | Per training token | Ecosystem lớn, dễ dùng |
| **Anthropic** | Chưa public SFT | N/A | Chưa available cho end users |
| **Hugging Face** | Mọi open-source model | Self-hosted / AutoTrain | Linh hoạt nhất, rẻ nhất |
| **Together AI** | LLaMA, Mistral, ... | Per training token | Quản lý infrastructure |
| **Unsloth** | LLaMA, Mistral, ... | Free (self-hosted) | 2x nhanh hơn, ít VRAM |

---

## 6. Demo nhanh: Fine-tuning "Hello World"

Cảm nhận fine-tuning đơn giản nhất — dùng OpenAI API:

```python
from openai import OpenAI
import json

client = OpenAI()

# Step 1: Chuẩn bị dataset (tối thiểu ~10 examples cho demo)
training_data = [
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Giá dịch vụ thế nào?"},
        {"role": "assistant", "content": "Dạ, XDev có 3 gói: Starter (miễn phí), Pro ($29/tháng), Enterprise (liên hệ). Anh/chị quan tâm gói nào ạ? 😊"}
    ]},
    {"messages": [
        {"role": "system", "content": "Bạn là trợ lý hỗ trợ khách hàng của XDev."},
        {"role": "user", "content": "Làm sao liên hệ support?"},
        {"role": "assistant", "content": "Dạ, anh/chị có thể liên hệ qua: 📧 support@xdev.asia hoặc 💬 chat trực tiếp trên website. Team support online 9h-18h (GMT+7) các ngày trong tuần ạ!"}
    ]},
    # ... thêm 8+ examples nữa
]

# Step 2: Save thành JSONL file
with open("training_data.jsonl", "w") as f:
    for item in training_data:
        f.write(json.dumps(item, ensure_ascii=False) + "\n")

# Step 3: Upload file
file = client.files.create(
    file=open("training_data.jsonl", "rb"),
    purpose="fine-tune"
)

# Step 4: Tạo fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18",
    hyperparameters={"n_epochs": 3}
)

print(f"Job ID: {job.id}")
print(f"Status: {job.status}")  # → "validating_files" → "running" → "succeeded"
```

> 💡 **Chú ý**: Đây chỉ là demo flow. Bài 7 & 9 sẽ đi sâu chi tiết với dataset thực tế.

---

## Tóm tắt bài học

- **Fine-tuning** = dạy model cách **behave** (hành xử), không phải dạy **knowledge** (kiến thức)
- **Knowledge gap** → dùng RAG | **Behavior gap** → dùng Fine-tuning
- Luôn đi qua 3 bước: Prompt Engineering → RAG → Fine-tuning
- 3 phương pháp: Full FT (hiếm) | SFT qua API (phổ biến) | LoRA (tiết kiệm)
- Google Vertex AI + OpenAI là 2 platform chính cho API fine-tuning
- LoRA/QLoRA cho self-hosted, chi phí thấp nhất

## Bài tập

1. Liệt kê 3 vấn đề AI trong công việc của bạn — phân loại Knowledge gap vs Behavior gap
2. Với mỗi vấn đề, đề xuất giải pháp: Prompt Engineering, RAG, hay Fine-tuning?
3. Tạo 10 training examples (format JSONL) cho use case bạn quan tâm
4. Đọc blog post "A Practical Guide to Fine-Tuning" trên OpenAI Cookbook
