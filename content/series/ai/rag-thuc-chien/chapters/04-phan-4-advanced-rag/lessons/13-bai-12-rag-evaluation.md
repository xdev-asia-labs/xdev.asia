---
id: 019c9619-ff12-7012-a012-ff1200000012
title: 'Bài 12: RAG Evaluation — RAGAS, Faithfulness & Relevancy'
slug: bai-12-rag-evaluation
description: >-
  Đánh giá RAG bằng RAGAS framework. Metrics: Faithfulness, Answer Relevancy,
  Context Precision, Context Recall. Tạo golden test set, automated evaluation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Advanced RAG Patterns"
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: "RAG Thực Chiến: Từ Basic đến Advanced"
  slug: rag-thuc-chien
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7779" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7779)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="148" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="140" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="266" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.2390923627308,216.5 1075.2390923627308,259.5 1038,281 1000.7609076372692,259.5 1000.7609076372692,216.5 1038,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI &amp; ML — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: RAG Evaluation — RAGAS,</tspan>
      <tspan x="60" dy="42">Faithfulness &amp; Relevancy</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">RAG Thực Chiến: Từ Basic đến Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Advanced RAG Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bạn đã xây RAG pipeline. Nhưng **nó tốt đến mức nào?** Không thể chỉ "cảm thấy" — cần đo lường bằng **metrics cụ thể**. RAG Evaluation giúp trả lời: retrieval có tìm đúng không? LLM có trả lời chính xác không? Có hallucination không?

> **Ví dụ:** RAG trả lời "Nghỉ phép 20 ngày" nhưng tài liệu ghi "15 ngày". Không đánh giá → không phát hiện lỗi → user mất niềm tin.

Bài này cover:
1. **RAG Evaluation Metrics** — Faithfulness, Relevancy, Precision, Recall
2. **RAGAS Framework** — automated evaluation
3. **Golden Test Set** — tạo bộ test chuẩn

---

## 1. RAG Evaluation Metrics

### 1.1 Hai nhóm metrics

```
RAG Pipeline:  Query → Retrieve → Generate → Answer

Retrieval Metrics (retrieve có tốt không?):
├── Context Precision: bao nhiêu % context là relevant?
└── Context Recall: có miss thông tin quan trọng không?

Generation Metrics (LLM generate có tốt không?):
├── Faithfulness: answer có đúng với context không? (no hallucination)
└── Answer Relevancy: answer có trả lời đúng câu hỏi không?
```

### 1.2 Giải thích từng metric

| Metric | Câu hỏi | Range | Mục tiêu |
|--------|---------|:---:|:---:|
| **Faithfulness** | Answer có bịa thêm không? | 0-1 | > 0.9 |
| **Answer Relevancy** | Answer có đúng trọng tâm? | 0-1 | > 0.8 |
| **Context Precision** | Context retrieved có relevant? | 0-1 | > 0.8 |
| **Context Recall** | Có bỏ sót context quan trọng? | 0-1 | > 0.7 |

### 1.3 Ví dụ minh họa

```
Question: "Nghỉ phép bao nhiêu ngày?"
Ground truth: "15 ngày cho full-time, 8 ngày cho part-time"

Retrieved contexts:
  C1: "Nhân viên full-time được 15 ngày phép" ← Relevant
  C2: "Quy trình xin nghỉ phép..."           ← Partially relevant
  C3: "Công ty thành lập năm 2020..."         ← NOT relevant

Answer: "Nhân viên được 15 ngày nghỉ phép mỗi năm."

Metrics:
├── Faithfulness: 1.0 (answer đúng với context C1)
├── Answer Relevancy: 0.8 (trả lời đúng nhưng thiếu part-time)
├── Context Precision: 0.33 (1/3 context relevant)
└── Context Recall: 0.5 (có full-time, thiếu part-time)
```

---

## 2. RAGAS Framework

### 2.1 Cài đặt và setup

```python
"""RAGAS — RAG Assessment framework"""
# pip install ragas

from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall,
)
from datasets import Dataset

# Chuẩn bị evaluation data
eval_data = {
    "question": [
        "Nghỉ phép bao nhiêu ngày?",
        "Quy trình tuyển dụng thế nào?",
    ],
    "answer": [
        "Nhân viên full-time được 15 ngày phép/năm.",
        "Tuyển dụng gồm 3 vòng: CV screening, phỏng vấn kỹ thuật, phỏng vấn văn hóa.",
    ],
    "contexts": [
        ["Nhân viên full-time được 15 ngày phép có lương mỗi năm."],
        ["Quy trình tuyển dụng 3 vòng: screening CV, phỏng vấn tech, phỏng vấn culture fit."],
    ],
    "ground_truth": [
        "15 ngày cho full-time, 8 ngày cho part-time.",
        "3 vòng: CV screening, phỏng vấn kỹ thuật, phỏng vấn văn hóa.",
    ],
}

dataset = Dataset.from_dict(eval_data)

# Evaluate
result = evaluate(
    dataset=dataset,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
)

print(result)
# {'faithfulness': 0.95, 'answer_relevancy': 0.82,
#  'context_precision': 0.90, 'context_recall': 0.65}
```

### 2.2 Hiểu kết quả

```
Faithfulness: 0.95  ← Tốt! Answer không bịa
Answer Relevancy: 0.82  ← OK, nhưng có thể cải thiện
Context Precision: 0.90  ← Retrieval tìm đúng documents
Context Recall: 0.65  ← ⚠️ Thiếu sót! Cần cải thiện retrieval

Action plan:
├── Context Recall thấp → cải thiện chunking hoặc thêm tài liệu
├── Answer Relevancy trung bình → tune prompt generation
└── Faithfulness cao → generation prompt tốt, ít hallucination
```

> **💡 Bài tập 1:** Evaluate RAG pipeline hiện tại bằng RAGAS. Tạo 10 câu test với ground truth. Tính 4 metrics. Metric nào thấp nhất?

---

## 3. Tạo Golden Test Set

### 3.1 Tại sao cần Golden Test Set?

```
Golden Test Set = bộ câu hỏi + đáp án chuẩn (ground truth)
→ Dùng để đánh giá mọi thay đổi trong RAG pipeline

Khi thay đổi chunk size:  chạy golden test → so sánh metrics
Khi thay đổi embedding:   chạy golden test → so sánh metrics
Khi thêm reranker:        chạy golden test → so sánh metrics

Không có golden test = mù → không biết thay đổi tốt hay xấu!
```

### 3.2 Tạo từ tài liệu

```python
"""Tự động sinh golden test set từ tài liệu"""
from ragas.testset.generator import TestsetGenerator
from ragas.testset.evolutions import simple, reasoning, multi_context
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

generator_llm = ChatOpenAI(model="gpt-4o")
critic_llm = ChatOpenAI(model="gpt-4o")
embeddings = OpenAIEmbeddings()

# Tạo test set generator
generator = TestsetGenerator.from_langchain(
    generator_llm=generator_llm,
    critic_llm=critic_llm,
    embeddings=embeddings,
)

# Sinh test set từ documents
testset = generator.generate_with_langchain_docs(
    documents=chunks,   # Documents đã chunk
    test_size=20,        # 20 câu test
    distributions={
        simple: 0.5,       # 50% câu đơn giản
        reasoning: 0.25,   # 25% câu cần suy luận
        multi_context: 0.25,  # 25% câu cần nhiều context
    },
)

test_df = testset.to_pandas()
print(test_df[["question", "ground_truth"]].head())
```

### 3.3 Đánh giá thủ công

| # | Câu hỏi | Ground Truth | Ai tạo |
|---|---------|-------------|--------|
| 1 | Nghỉ phép bao nhiêu ngày? | 15 ngày full-time, 8 ngày part-time | Expert |
| 2 | Quy trình xin nghỉ? | Gửi đơn trước 3 ngày, quản lý duyệt | Expert |
| 3 | Lương trả ngày nào? | Ngày 5 hàng tháng | Auto (RAGAS) |

> **Rule of thumb:** Golden test set nên có ít nhất **50 câu**, bao gồm: 50% simple, 30% reasoning, 20% edge cases.

---

## 4. End-to-End Evaluation Pipeline

### 4.1 Automated evaluation

```python
"""Full evaluation pipeline: RAG → Evaluate → Report"""
def evaluate_rag_pipeline(pipeline, golden_testset):
    questions = golden_testset["question"]
    ground_truths = golden_testset["ground_truth"]
    
    answers = []
    contexts = []
    
    for question in questions:
        # Chạy RAG pipeline
        result = pipeline.invoke(question)
        answers.append(result["answer"])
        contexts.append([doc.page_content for doc in result["source_documents"]])
    
    # RAGAS evaluate
    eval_dataset = Dataset.from_dict({
        "question": questions,
        "answer": answers,
        "contexts": contexts,
        "ground_truth": ground_truths,
    })
    
    scores = evaluate(
        dataset=eval_dataset,
        metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
    )
    
    return scores

# Compare 2 pipelines
scores_v1 = evaluate_rag_pipeline(pipeline_v1, golden_test)
scores_v2 = evaluate_rag_pipeline(pipeline_v2, golden_test)

print("V1:", scores_v1)
print("V2:", scores_v2)
# V1: {'faithfulness': 0.85, 'context_recall': 0.60}
# V2: {'faithfulness': 0.92, 'context_recall': 0.78}  ← Better!
```

### 4.2 Evaluation Dashboard

```python
"""Streamlit dashboard cho RAG evaluation"""
import streamlit as st
import pandas as pd

st.title("RAG Evaluation Dashboard")

# Upload golden test
uploaded = st.file_uploader("Upload golden test CSV")

if uploaded:
    test_df = pd.read_csv(uploaded)
    
    # Run evaluation
    if st.button("Run Evaluation"):
        scores = evaluate_rag_pipeline(pipeline, test_df)
        
        # Display metrics
        col1, col2, col3, col4 = st.columns(4)
        col1.metric("Faithfulness", f"{scores['faithfulness']:.2f}")
        col2.metric("Answer Relevancy", f"{scores['answer_relevancy']:.2f}")
        col3.metric("Context Precision", f"{scores['context_precision']:.2f}")
        col4.metric("Context Recall", f"{scores['context_recall']:.2f}")
        
        # Per-question breakdown
        st.dataframe(scores.to_pandas())
```

> **💡 Bài tập 2:** Tạo golden test set (20+ câu) → evaluate RAG pipeline → thay đổi 1 param (chunk size hoặc top_k) → re-evaluate → so sánh metrics trước/sau.

---

## 5. Cải thiện RAG dựa trên Metrics

### 5.1 Chẩn đoán và hành động

| Metric thấp | Nguyên nhân | Hành động |
|------------|------------|----------|
| **Context Recall ↓** | Retrieval miss docs | Thêm tài liệu, cải thiện chunking, thử hybrid search |
| **Context Precision ↓** | Retrieve nhiều noise | Thêm reranker, giảm top_k, filter metadata |
| **Faithfulness ↓** | LLM hallucinate | Improve prompt ("chỉ dựa trên context"), dùng model lớn hơn |
| **Answer Relevancy ↓** | Answer lạc đề | Improve prompt, thêm few-shot examples |

---

## Tóm tắt

| Concept | Ghi nhớ |
|---------|---------|
| **Faithfulness** | Answer có đúng với context? (no hallucination) |
| **Answer Relevancy** | Answer có đúng trọng tâm câu hỏi? |
| **Context Precision** | Retrieval có chính xác? |
| **Context Recall** | Retrieval có đầy đủ? |
| **RAGAS** | Framework đánh giá RAG tự động |
| **Golden Test Set** | Bộ test chuẩn với ground truth |
| **Iterate** | Metric thấp → chẩn đoán → cải thiện → re-evaluate |

## Bài tập tổng hợp

1. ✅ Hoàn thành 2 bài tập nhỏ (1, 2)
2. **Full Evaluation:** Tạo golden test 50 câu → evaluate pipeline hiện tại → xác định bottleneck → thay đổi 1 component → re-evaluate → viết report so sánh.
3. **CI/CD Evaluation:** Tự động chạy RAGAS mỗi khi thay đổi pipeline. Script: `python evaluate.py` → output metrics → fail nếu faithfulness < 0.85.
4. **Human-in-the-loop:** Tạo Streamlit app: hiển thị question + answer + context + ground_truth. Người dùng rate 1-5 cho mỗi câu. So sánh human rating vs RAGAS scores.

> **Bài tiếp theo:** Deploy RAG lên Production — API, Caching & Monitoring — đưa RAG từ notebook ra sản phẩm thực tế.
