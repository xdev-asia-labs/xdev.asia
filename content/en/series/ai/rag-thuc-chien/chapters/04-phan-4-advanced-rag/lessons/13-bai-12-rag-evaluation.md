---
id: 019c9619-ff12-7012-a012-ff1200000012
title: 'Lesson 12: RAG Evaluation — RAGAS, Faithfulness & Relevancy'
slug: bai-12-rag-evaluation
description: >-
  Evaluate RAG using the RAGAS framework. Metrics: Faithfulness, Answer
  Relevancy, Context Precision, Context Recall. Create golden test set,
  automated evaluation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Advanced RAG Patterns'
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 'Real Battle RAG: From Basic to Advanced'
  slug: rag-thuc-chien
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 12: RAG Evaluation — RAGAS,</tspan>
      <tspan x="60" dy="42">Faithfulness & Relevancy</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Real Battle RAG: From Basic to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Advanced RAG Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You have built the RAG pipeline. But **how good is it?** It can't just be "felt" — it needs to be measured with specific **metrics**. RAG Evaluation helps answer: is retrieval correct? Does LLM answer correctly? Is there hallucination?

> **Example:** RAG replies "20 days leave" but the document says "15 days". Not evaluating → not detecting errors → users lose trust.

This article covers:
1. **RAG Evaluation Metrics** — Faithfulness, Relevancy, Precision, Recall
2. **RAGAS Framework** — automated evaluation
3. **Golden Test Set** — create a standard test set

---

## 1. RAG Evaluation Metrics

### 1.1 Two groups of metrics

```
RAG Pipeline:  Query → Retrieve → Generate → Answer

Retrieval Metrics (retrieve có tốt không?):
├── Context Precision: bao nhiêu % context là relevant?
└── Context Recall: có miss thông tin quan trọng không?

Generation Metrics (LLM generate có tốt không?):
├── Faithfulness: answer có đúng với context không? (no hallucination)
└── Answer Relevancy: answer có trả lời đúng câu hỏi không?
```

### 1.2 Explain each metric

| Metrics | Question | Range | Goal |
|--------|--------|:---:|:---:|
| **Faithfulness** | Is Answer making up more? | 0-1 | > 0.9 |
| **Answer Relevancy** | Is the answer on point? | 0-1 | > 0.8 |
| **Context Precision** | Is Context retrieval relevant? | 0-1 | > 0.8 |
| **Context Recall** | Missing important context? | 0-1 | > 0.7 |

### 1.3 Illustrative example

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

### 2.1 Installation and setup

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

### 2.2 Understand the results

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

> **💡 Exercise 1:** Evaluate the current RAG pipeline using RAGAS. Create 10 test questions with ground truth. Calculate 4 metrics. Which metric is the lowest?

---

## 3. Create Golden Test Set

### 3.1 Why do we need the Golden Test Set?

```
Golden Test Set = bộ câu hỏi + đáp án chuẩn (ground truth)
→ Dùng để đánh giá mọi thay đổi trong RAG pipeline

Khi thay đổi chunk size:  chạy golden test → so sánh metrics
Khi thay đổi embedding:   chạy golden test → so sánh metrics
Khi thêm reranker:        chạy golden test → so sánh metrics

Không có golden test = mù → không biết thay đổi tốt hay xấu!
```

### 3.2 Create from document

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

### 3.3 Manual review

| # | Question | Ground Truth | Who created |
|---|--------|-------------|--------|
| 1 | How many days off? | 15 days full-time, 8 days part-time | Expert |
| 2 | Procedure for applying for leave? | Submit application 3 days in advance, manager approves | Expert |
| 3 | What day is salary paid? | 5th day of every month | Auto (RAGAS) |

> **Rule of thumb:** Golden test set should have at least **50 questions**, including: 50% simple, 30% reasoning, 20% edge cases.

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

> **💡 Exercise 2:** Create golden test set (20+ sentences) → evaluate RAG pipeline → change 1 param (chunk size or top_k) → re-evaluate → compare metrics before/after.

---

## 5. Improve RAG based on Metrics

### 5.1 Diagnosis and actions

| Low Metric | Cause | Action |
|-----------|-----------|----------|
| **Context Recall ↓** | Retrieval miss docs | Add documentation, improve chunking, try hybrid search |
| **Context Precision ↓** | Retrieve a lot of noise | Add reranker, reduce top_k, filter metadata |
| **Faithfulness ↓** | LLM hallucinate | Improve prompt ("based on context only"), using a larger model |
| **Answer Relevancy ↓** | Answer off topic | Improve prompt, add few-shot examples |

---

## Summary

| Concepts | Remember |
|--------|--------|
| **Faithfulness** | Is the answer correct for the context? (no hallucination) |
| **Answer Relevancy** | Is the answer correct to the point of the question? |
| **Context Precision** | Is Retrieval accurate? |
| **Context Recall** | Is the retrieval complete? |
| **RAGAS** | Automated RAG assessment framework |
| **Golden Test Set** | Standard test suite with ground truth |
| **Iterate** | Low metric → diagnose → improve → re-evaluate |

## General exercises

1. ✅ Complete 2 small exercises (1, 2)
2. **Full Evaluation:** Create a golden test with 50 questions → evaluate the current pipeline → identify bottlenecks → change a component → re-evaluate → write a comparison report.
3. **CI/CD Evaluation:** Automatically run RAGAS every time the pipeline changes. Script: `python evaluate.py` → output metrics → fail if faithfulness < 0.85.
4. **Human-in-the-loop:** Create Streamlit app: display question + answer + context + ground_truth. Users rate 1-5 for each sentence. Compare human rating vs RAGAS scores.

> **Next article:** Deploy RAG to Production — API, Caching & Monitoring — bring RAG from notebook to real product.
