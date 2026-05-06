---
id: 019c9619-ff12-7012-a012-ff1200000012
title: 第 12 課：RAG 評估 — RAGAS、忠實性和相關性
slug: bai-12-rag-evaluation
description: 使用 RAGAS 框架評估 RAG。指標：忠誠度、答案相關性、情境精確度、情境回想率。建立黃金測試集，自動化評估。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：進階 RAG 模式
course:
  id: 019c9619-aa05-7005-b005-aa0500000005
  title: 真實戰鬥 RAG：從基礎到高級
  slug: rag-thuc-chien
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 人工智慧與機器學習 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：RAG 評估 — RAGAS，</tspan>
      <tspan x="60" dy="42">忠誠度和相關性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">真實戰鬥 RAG：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階 RAG 模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您已經建置了 RAG 管道。但**它有多好？ ** 它不能只是「感覺到」—它需要用特定的**指標**來衡量。 RAG評估幫助解答：檢索正確嗎？ LLM回答正確嗎？是不是出現了幻覺？

> **範例：** RAG 回覆“20 天休假”，但文件顯示“15 天”。不評估→不偵測錯誤→使用者失去信任。

本文涵蓋：
1. **RAG 評估指標** — 忠實度、相關性、精確度、召回率
2. **RAGAS框架**——自動化評估
3. **黃金測試集** — 建立標準測試集

---

## 1. RAG 評估指標

### 1.1 兩組指標

```
RAG Pipeline:  Query → Retrieve → Generate → Answer

Retrieval Metrics (retrieve có tốt không?):
├── Context Precision: bao nhiêu % context là relevant?
└── Context Recall: có miss thông tin quan trọng không?

Generation Metrics (LLM generate có tốt không?):
├── Faithfulness: answer có đúng với context không? (no hallucination)
└── Answer Relevancy: answer có trả lời đúng câu hỏi không?
```

### 1.2 解釋每個指標

|指標|問題 |範圍 |目標|
|--------|--------|:---:|:---:|
| **忠誠** |答案是否彌補了更多？ | 0-1 | > 0.9 |
| **答案相關性** |答案是否切題？ | 0-1 | > 0.8 |
| **上下文精度** |上下文檢索相關嗎？ | 0-1 | > 0.8 |
| **情境回憶** |缺少重要的背景？ | 0-1 | > 0.7 |

### 1.3 說明性範例

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

## 2.RAGAS框架

### 2.1 安裝與設定

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

### 2.2 理解結果

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

> **💡練習 1：** 使用 RAGAS 評估目前的 RAG 管道。建立 10 個具有基本事實的測試問題。計算 4 個指標。哪個指標最低？

---

## 3. 建立黃金測試集

### 3.1 為什麼我們需要黃金測試集？

```
Golden Test Set = bộ câu hỏi + đáp án chuẩn (ground truth)
→ Dùng để đánh giá mọi thay đổi trong RAG pipeline

Khi thay đổi chunk size:  chạy golden test → so sánh metrics
Khi thay đổi embedding:   chạy golden test → so sánh metrics
Khi thêm reranker:        chạy golden test → so sánh metrics

Không có golden test = mù → không biết thay đổi tốt hay xấu!
```

### 3.2 從文件創建

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

### 3.3 人工審核

| ＃|問題 |地面真相|誰創造了|
|---|--------|-------------|--------|
| 1 |休息幾天？ | 15 天全職，8 天兼職 |專家|
| 2 |請假流程？ |提前3天提交申請，經理批准 |專家|
| 3 |薪水是哪一天發的？ |每月 5 號 |汽車（RAGAS）|

> **經驗法則：**黃金測試集應至少有 **50 個問題**，包括：50% 簡單問題、30% 推理問題、20% 邊緣案例問題。

---

## 4. 端對端評估流程

### 4.1 自動化評估

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

### 4.2 評估儀表板

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

> **💡練習 2：** 建立黃金測試集（20 多個句子）→ 評估 RAG 管道→ 更改 1 個參數（區塊大小或 top_k）→ 重新評估→ 比較之前/之後的指標。

---

## 5. 根据Metrics改进RAG

### 5.1 診斷與行動

|低公制|原因 |行動|
|------------|------------|----------|
| **上下文回憶 ↓** |檢索遺漏文檔|新增文件、改進分塊、嘗試混合搜尋 |
| **上下文精度 ↓** |檢索大量雜訊 |新增 reranker、減少 top_k、過濾元資料 |
| **忠誠↓** | LLM幻覺|使用更大的模型改進提示（“僅基於上下文”）|
| **答案相關性 ↓** |回答題外話 |改進提示，增加少量範例 |

---

## 總結

|概念 |記住|
|--------|--------|
| **忠誠** |答案對上下文來說正確嗎？ （沒有幻覺） |
| **答案相關性** |答案是否正確符合問題的重點？ |
| **上下文精度** |檢索準確嗎？ |
| **情境回憶** |檢索完成了嗎？ |
| **拉格斯** |自动化 RAG 评估框架 |
| **黃金測試套件** |具有地面實況的標準測試套件|
| **迭代** |低指標→診斷→改進→重新評估|

## 一般練習

1. ✅ 完成 2 個小練習 (1, 2)
2. **全面評估：** 建立包含 50 個問題的黃金測試 → 評估目前流程 → 辨識瓶頸 → 變更元件 → 重新評估 → 撰寫比較報告。
3. **CI/CD評估：** 每次管線變更時自動執行RAGAS。腳本： `python evaluate.py` → 輸出指標 → 若忠實則失敗 < 0.85.
4. **人機互動：** 建立 Streamlit 應用程式：顯示問題 + 答案 + 上下文 + ground_truth。使用者對每個句子打分 1-5 分。比較人類評分與 RAGAS 評分。

> **下一篇文章：** 將 RAG 部署到生產環境 — API、快取和監控 — 將 RAG 從筆記型電腦帶入實際產品。
