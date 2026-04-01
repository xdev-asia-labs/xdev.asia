---
id: 019d8b33-bb07-7007-c007-ee0700000007
title: "Bài 7: Clinical NLP — Phân tích Hồ sơ Bệnh án"
slug: bai-7-clinical-nlp
description: >-
  NER y tế: diseases, drugs, symptoms. BioBERT, PubMedBERT. Relation extraction. Clinical text classification. ICD coding automation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 3: Clinical NLP & Genomics AI"
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: "AI trong Y tế & Healthcare: Ứng dụng Thực chiến"
  slug: ai-trong-y-te-healthcare
---

> Hơn 80% dữ liệu y tế nằm trong text — ghi chú lâm sàng, báo cáo xét nghiệm, tóm tắt xuất viện. Bài này là chìa khóa để khai thác kho tàng đó.

---

## 1. Tại sao Clinical NLP Khác với NLP Thông thường?

Văn bản lâm sàng:
```
"Bn nam 58t, tiền sử THA, ĐTĐ typ 2, vào viện vì ĐAU NGỰC trái lan lên vai,
kèm khó thở, không sốt. SpO2 94%, M 110 bpm, ECG bình thường.
TnI 0.8 ng/mL (ref < 0.04)."
```

Vấn đề:
1. **Viết tắt dày đặc**: THA, ĐTĐ, ECG, TnI
2. **Negation**: "không sốt" — negation cần detect
3. **Temporality**: "tiền sử" (past) vs "hiện tại" (current)
4. **Trailing context**: "bình thường" trong ECG ≠ SpO2 bình thường

---

## 2. NER Y tế với BioBERT

### 2.1. Các domain models

| Model | Training data | Tốt nhất cho |
|-------|-------------|-------------|
| BioBERT | PubMed + PMC | Research NER |
| PubMedBERT | PubMed (scratch) | Tốt nhất trên BioNLP |
| ClinicalBERT | MIMIC-III | Clinical notes |
| Bio_ClinicalBERT | PubMed + MIMIC | General medical NLP |

### 2.2. Token Classification (NER)

```python
from transformers import (
    AutoTokenizer, AutoModelForTokenClassification,
    TrainingArguments, Trainer, DataCollatorForTokenClassification
)
import torch

LABEL_LIST = [
    "O",
    "B-DISEASE", "I-DISEASE",
    "B-DRUG", "I-DRUG",
    "B-SYMPTOM", "I-SYMPTOM",
    "B-ANATOMICAL", "I-ANATOMICAL",
    "B-LAB_VALUE", "I-LAB_VALUE",
]
LABEL2ID = {l: i for i, l in enumerate(LABEL_LIST)}
ID2LABEL = {i: l for l, i in LABEL2ID.items()}

MODEL_NAME = "dmis-lab/biobert-base-cased-v1.2"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForTokenClassification.from_pretrained(
    MODEL_NAME,
    num_labels=len(LABEL_LIST),
    id2label=ID2LABEL,
    label2id=LABEL2ID
)

def tokenize_and_align_labels(examples):
    """Align NER labels với BERT wordpieces."""
    tokenized = tokenizer(
        examples["tokens"],
        truncation=True,
        is_split_into_words=True,
        max_length=512
    )

    all_labels = []
    for i, label_ids in enumerate(examples["ner_tags"]):
        word_ids = tokenized.word_ids(batch_index=i)
        previous_word_idx = None
        label_ids_aligned = []

        for word_idx in word_ids:
            if word_idx is None:
                label_ids_aligned.append(-100)
            elif word_idx != previous_word_idx:
                label_ids_aligned.append(label_ids[word_idx])
            else:
                # Wordpiece continuation: dùng I- label
                current_label = LABEL_LIST[label_ids[word_idx]]
                if current_label.startswith("B-"):
                    inside_label = "I-" + current_label[2:]
                    label_ids_aligned.append(LABEL2ID.get(inside_label, -100))
                else:
                    label_ids_aligned.append(-100)
            previous_word_idx = word_idx

        all_labels.append(label_ids_aligned)

    tokenized["labels"] = all_labels
    return tokenized
```

### 2.3. Xử lý Negation và Temporality

```python
NEGATION_TERMS = [
    "không", "chưa", "phủ nhận", "không ghi nhận", "âm tính",
    "no", "not", "without", "denies", "absent", "negative", "ruled out"
]

TEMPORAL_PATTERNS = {
    "past": ["tiền sử", "trước đây", "cũ", "đã", "history of", "prior"],
    "family": ["gia đình", "bố mẹ", "family history"],
    "current": ["hiện tại", "hiện", "currently", "presenting with"],
}

def detect_negation_scope(text: str, entity_start: int, window: int = 5) -> bool:
    """Check 5 words trước entity xem có negation term không."""
    tokens = text[:entity_start].split()
    window_tokens = [t.lower() for t in tokens[-window:]]
    return any(neg in window_tokens for neg in NEGATION_TERMS)

def classify_temporality(text: str, entity_start: int) -> str:
    before = text[:entity_start].lower()[-80:]
    for category, patterns in TEMPORAL_PATTERNS.items():
        if any(p in before for p in patterns):
            return category
    return "current"

def extract_entities_with_context(text: str, ner_pipeline) -> list[dict]:
    """NER + negation + temporality."""
    raw_entities = ner_pipeline(text, aggregation_strategy="max")
    enriched = []
    for e in raw_entities:
        enriched.append({
            "text": e["word"],
            "label": e["entity_group"],
            "confidence": round(e["score"], 3),
            "is_negated": detect_negation_scope(text, e["start"]),
            "temporality": classify_temporality(text, e["start"]),
        })
    return enriched
```

---

## 3. ICD-10 Automatic Coding

```python
from transformers import AutoModelForSequenceClassification, pipeline

class ICD10AutoCoder:
    """
    Multi-label classification: discharge summary → ICD-10 codes.
    Dataset: MIMIC-III (top 50 codes)
    Metric: micro-AUC, P@8, R@8
    """
    def __init__(self, model_path: str, icd_list: list[str]):
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.icd_list = icd_list
        self.model.eval()

    def predict(self, discharge_summary: str, top_k: int = 10) -> list[dict]:
        inputs = self.tokenizer(
            discharge_summary,
            return_tensors="pt",
            max_length=4096,   # Dùng Longformer/BigBird cho long docs
            truncation=True,
        )
        with torch.no_grad():
            logits = self.model(**inputs).logits
            probs = torch.sigmoid(logits).squeeze()

        top_k_indices = torch.topk(probs, k=min(top_k, len(self.icd_list))).indices
        return [
            {
                "icd_code": self.icd_list[i],
                "confidence": round(float(probs[i]), 3)
            }
            for i in top_k_indices.tolist()
        ]
```

---

## 4. Đánh giá NER

```python
from seqeval.metrics import classification_report, f1_score

def evaluate_ner(all_true_labels: list, all_pred_labels: list):
    """
    seqeval dùng entity-level F1 (strict span match).
    Khác với token-level accuracy — entity-level khắt khe hơn nhiều.
    """
    print(classification_report(all_true_labels, all_pred_labels))
    micro_f1 = f1_score(all_true_labels, all_pred_labels, average="micro")
    macro_f1 = f1_score(all_true_labels, all_pred_labels, average="macro")
    print(f"Micro F1: {micro_f1:.4f} | Macro F1: {macro_f1:.4f}")
```

---

## 5. Bài tập

1. Download I2B2 2010 NER dataset. Fine-tune ClinicalBERT và PubMedBERT. So sánh F1-score cho từng entity type (disease/drug/treatment).
2. Implement negation evaluation: annotate 100 sentences, đếm False Positive (predict negated nhưng không phải) và False Negative.
3. Build ICD-10 top-50 classifier trên MIMIC-III. Target Precision@5 > 0.70.

**Bài 8**: Xây dựng **Medical Q&A Chatbot** với RAG + LLM.
