---
id: 019c9619-dd02-7002-e002-dd0200000002
title: 'Lesson 2: Fine-tuning vs RAG — The biggest AI debate of 2025'
slug: bai-2-fine-tuning-vs-rag
description: >-
  Detailed comparison of Fine-tuning vs RAG: Knowledge gap vs Behavior gap.
  Practical decision checklist. Hybrid approach. Actual case studies: when RAG
  wins, when Fine-tuning wins.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: Overview & Strategy — When to Fine-tune?'
course:
  id: 019c9619-aa03-7003-b003-aa0300000003
  title: 'Fine-tuning LLM: The Art of AI Tuning'
  slug: fine-tuning-llm
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9312" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9312)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1051" cy="103" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="1002" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="953" cy="65" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="904" cy="176" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="287" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🧠 AI & ML — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Fine-tuning vs RAG — Competition</tspan>
      <tspan x="60" dy="42">Biggest discussion AI 2025</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Fine-tuning LLM: The Art of AI Tuning</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Overview & Strategy — When to Fine-tune?</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

"Should I use Fine-tuning or RAG?" — this is the most asked question in every AI meetup, forum, and interview in 2025–2026. Correct answer: **Depends on the problem you are solving**. This article gives you a framework to answer correctly.

---

## 1. Diagnosis: Knowledge Gap vs Behavior Gap

### Core principles

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

## 2. Compare details

### 2.1 Comprehensive comparison table

| Criteria | RAG | Fine-tuning |
|----------|-----|-------------|
| **Resolved** | Knowledge gap (lack of information) | Behavior gap (behavior) |
| **Data subject to change** | Regular → Strong RAG | Little change → FT suitable |
| **Update** | Instant (update DB) | Slow (retrain model) |
| **Explainable** | Cao (source cite) | Low (black box) |
| **Setup costs** | $50–$500 | $50–$10,000+ |
| **Maintenance costs** | Low (update data only) | High (re-train when needed) |
| **Latency** | Slower (more retrieval step) | Faster (no retrieval needed) |
| **Accuracy** | Depends on quality retrieval | Depends on training data |
| **Hallucination** | Reduce (with source) | It's still possible (if the data is bad) |
| **Large scale** | Retrieval cost/time | Costs 1 training session |

### 2.2 Practical example

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

### 4.1 Hybrid Architecture

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

### 4.2 When to use Hybrid?

- Needs **both separate style AND separate data**
- Large enterprise system
- Specialized domains (medical, legal, financial)
- Budget is enough for both

---

## 5. Practical Case Studies

### Case Study 1: Customer Support Bot — RAG wins

**Problem**: Chatbot needs to answer questions about 500+ products, policies change weekly.

**Try Fine-tuning**: The model is under the old policy, each update requires training → costs $200/time × 4 times/month = $800/month.

**Try RAG**: Update database in 5 minutes, retrieval cost ~$0.001/query. Monthly cost: ~$50.

**Conclusion**: RAG is 16x cheaper and always up-to-date.

### Case Study 2: Code Review Bot — Fine-tuning wins

**Problem**: Model needs to review code according to the team's own coding standards (naming conventions, architectural patterns, very specific error handling style).

**Try Prompt**: System prompt is too long (3000 tokens), still not consistent.

**Try RAG**: Coding standards document does not have enough context, output is too generic.

**Try Fine-tuning**: 200 examples (code + review comments) → model consistency 95%+, system prompt reduced from 3000 → 200 tokens.

**Conclusion**: Fine-tuning reduces token cost by 93% + increases consistency.

### Case Study 3: Medical Q&A — Hybrid wins

**Problem**: Medical chatbots need to understand specialized terminology AND respond based on patient records.

**Solution**: Fine-tune for medical Vietnamese terminology + RAG for patient records.

---

## 6. Cost Comparison: Concrete Numbers

### Scenario: 10,000 queries/day, 30 days

| Approach | Setup cost | Monthly inference | Total/month |
|----------|-----------|-------------------|-------------|
| **Base model + Prompt** | $0 | ~$300 | **$300** |
| **RAG** ​​| $200 (1 time) | ~$400 (retrieval overhead) | **$400** |
| **Fine-tuning** | $100–$500 (1 time) | ~$250 (shorter prompts) | **$250** |
| **Hybrid** | $500 | ~$350 | **$350** |

> 💡 Fine-tuning can be **cheaper** than the base model if you can shorten the system prompt (less tokens = less money). But including maintenance cost!

---

## Lesson summary

- **Knowledge gap** → RAG | **Behavior gap** → Fine-tuning | **Both** → Hybrid
- Data changes frequently → RAG (instant update)
- Need high consistency in style/format → Fine-tuning
- 80% of cases → Prompt Engineering or RAG is enough
- Hybrid approach is the industry standard for enterprises
- Always calculate **total cost** (training + inference + maintenance)

## Exercises

1. Analyze 5 use cases in your company → classify Knowledge vs Behavior gap
2. Draw a decision flowchart for a specific use case
3. Calculate estimated costs: RAG vs Fine-tuning for that use case
4. Hybrid architecture design for a practical system
