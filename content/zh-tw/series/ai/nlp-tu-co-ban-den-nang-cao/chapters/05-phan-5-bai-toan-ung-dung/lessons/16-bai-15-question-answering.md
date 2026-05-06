---
id: 019d8b30-bb15-7015-c015-ee1500000015
title: 第十五課：問答－智慧問答系統
slug: bai-15-question-answering
description: >-
  QA 類型：抽取式、抽象式、開放式域。 SQuAD 資料集和格式。微調 BERT 以進行抽取式
  QA。檢索增強的品質保證。用於檢索的交叉編碼器與雙編碼器。親自動手建構越南語的 QA 系統。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 第 5 部分：應用 NLP 問題 — 實作項目
course:
  id: 019d8b30-aa01-7001-b001-ff0100000001
  title: NLP 從基礎到進階：掌握自然語言處理
  slug: nlp-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7868" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7868)"/>

  <!-- Decorations -->
  <g>
    <circle cx="777" cy="61" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="954" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="631" cy="255" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="808" cy="92" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="985" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="71" x2="1100" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="101" x2="1050" y2="171" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.5166604983954,158 993.5166604983954,184 971,197 948.4833395016046,184 948.4833395016046,158 971,145" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🧠 人工智慧與機器學習 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：問答 — 問題系統</tspan>
      <tspan x="60" dy="42">智慧回答</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">NLP 從基礎到進階：掌握自然語言處理</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：應用 NLP 問題 — 實作項目</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**問答（QA）**——自動問答系統——是具有最高實用價值的NLP應用之一：客戶支援自動化、內部知識庫、教育工具。

---

## 1. 品質保證的類型

|類型 |如何回答 |範例|
|--------|-------------|--------|
| **提取** |從上下文中提取文本 | SQuAD，“蘋果首席執行官是蒂姆·庫克”|
| **抽象** |產生新答案 | T5、GPT 產生回應 |
| **開放域** |搜尋上下文然後回答 |維基百科搜尋+ QA |
| **封閉域** |文檔中的答案 |聊天機器人常見問題解答 |

---

## 2. 使用 BERT 進行抽取式 QA

### 2.1 想法

```
Context: "Tim Cook là CEO của Apple từ năm 2011. Apple có trụ sở tại Cupertino."
Question: "Ai là CEO của Apple?"
Answer: "Tim Cook"  ← trích xuất từ context
         ↑ start     ↑ end
```

BERT 預測上下文中答案的 **開始位置** 和 **結束位置**。

### 2.2 實踐

```python
from transformers import pipeline

# Pre-trained QA
qa = pipeline("question-answering", model="deepset/roberta-base-squad2")

result = qa(
    question="What is the capital of France?",
    context="France is a country in Western Europe. Its capital is Paris, a major European city."
)
print(f"Answer: {result['answer']} (score: {result['score']:.4f})")
# Answer: Paris (score: 0.9834)
```

### 2.3 SQuAD 微調

```python
from transformers import (
    AutoTokenizer,
    AutoModelForQuestionAnswering,
    Trainer,
    TrainingArguments,
)
from datasets import load_dataset

dataset = load_dataset("squad_v2")
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

def preprocess_qa(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=384,
        truncation="only_second",
        stride=128,
        return_overflowing_tokens=True,
        return_offsets_mapping=True,
        padding="max_length",
    )

    offset_mapping = inputs.pop("offset_mapping")
    sample_map = inputs.pop("overflow_to_sample_mapping")
    answers = examples["answers"]
    start_positions = []
    end_positions = []

    for i, offset in enumerate(offset_mapping):
        sample_idx = sample_map[i]
        answer = answers[sample_idx]

        if len(answer["answer_start"]) == 0:
            start_positions.append(0)
            end_positions.append(0)
            continue

        start_char = answer["answer_start"][0]
        end_char = start_char + len(answer["text"][0])

        # Find token positions
        sequence_ids = inputs.sequence_ids(i)
        idx = 0
        while sequence_ids[idx] != 1:
            idx += 1
        context_start = idx
        while idx < len(sequence_ids) and sequence_ids[idx] == 1:
            idx += 1
        context_end = idx - 1

        if offset[context_start][0] > start_char or offset[context_end][1] < end_char:
            start_positions.append(0)
            end_positions.append(0)
        else:
            idx = context_start
            while idx <= context_end and offset[idx][0] <= start_char:
                idx += 1
            start_positions.append(idx - 1)

            idx = context_end
            while idx >= context_start and offset[idx][1] >= end_char:
                idx -= 1
            end_positions.append(idx + 1)

    inputs["start_positions"] = start_positions
    inputs["end_positions"] = end_positions
    return inputs

tokenized = dataset.map(preprocess_qa, batched=True, remove_columns=dataset["train"].column_names)

model = AutoModelForQuestionAnswering.from_pretrained("bert-base-uncased")

trainer = Trainer(
    model=model,
    args=TrainingArguments(
        output_dir="./qa-model",
        num_train_epochs=3,
        per_device_train_batch_size=16,
        learning_rate=3e-5,
    ),
    train_dataset=tokenized["train"],
)
trainer.train()
```

---

## 3. 檢索增強 QA

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Question    │──▶│   Retriever   │──▶│    Reader     │
│ "CEO Apple?"  │    │ (bi-encoder)  │    │ (BERT QA)    │
└──────────────┘    │ Tìm top-k     │    │ Trích answer  │
                    │ documents     │    │ từ context    │
                    └──────────────┘    └──────────────┘
```

```python
from sentence_transformers import SentenceTransformer, util
from transformers import pipeline

# 1. Retriever: tìm passages liên quan
retriever = SentenceTransformer("all-MiniLM-L6-v2")
passages = [
    "Tim Cook là CEO của Apple từ năm 2011.",
    "Google được sáng lập bởi Larry Page và Sergey Brin.",
    "Apple có trụ sở chính tại Cupertino, California.",
]
passage_embeddings = retriever.encode(passages, convert_to_tensor=True)

question = "Ai là CEO của Apple?"
q_embedding = retriever.encode(question, convert_to_tensor=True)
scores = util.cos_sim(q_embedding, passage_embeddings)[0]
top_idx = scores.argmax().item()

# 2. Reader: trích xuất answer
reader = pipeline("question-answering")
answer = reader(question=question, context=passages[top_idx])
print(f"Answer: {answer['answer']}")
# Answer: Tim Cook
```

---

## 總結

|方法|型號|優勢 |限制 |
|----------|--------|---------|---------|
|提取 | BERT + QA 負責人 |準確、快速|只提取，不生成 |
|抽象| T5、GPT |靈活、自然|會產生幻覺|
|檢索+品質檢查|雙編碼器+閱讀器|可擴展、開放域 | 2 階段複雜性 |

---

## 下一篇文章

**第 16 課：文字摘要和機器翻譯** — 文字摘要和機器翻譯：兩個最重要的生成問題。
