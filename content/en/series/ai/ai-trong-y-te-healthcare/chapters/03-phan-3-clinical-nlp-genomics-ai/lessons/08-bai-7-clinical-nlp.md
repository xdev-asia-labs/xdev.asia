---
id: 019d8b33-bb07-7007-c007-ee0700000007
title: 'Lesson 7: Clinical NLP — Analyzing Medical Records'
slug: bai-7-clinical-nlp
description: >-
  Medical NER: diseases, drugs, symptoms. BioBERT, PubMedBERT. Relation
  extraction. Clinical text classification. ICD coding automation.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 3: Clinical NLP & Genomics AI'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8258" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8258)"/>

  <!-- Decorations -->
  <g>
    <circle cx="709" cy="277" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="818" cy="186" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="927" cy="95" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1036" cy="264" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="173" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="107" x2="1100" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="137" x2="1050" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.3730669589463,186 1043.3730669589463,228 1007,249 970.6269330410536,228 970.6269330410536,186 1007,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI & ML — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 7: Clinical NLP — Analyzing Disease Profile</tspan>
      <tspan x="60" dy="42">judgment</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Clinical NLP & Genomics AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> More than 80% of medical data is in text — clinical notes, lab reports, discharge summaries. This article is the key to exploiting that treasure.

---

## 1. Why is Clinical NLP Different from Regular NLP?

Clinical documents:
```
"Bn nam 58t, tiền sử THA, ĐTĐ typ 2, vào viện vì ĐAU NGỰC trái lan lên vai,
kèm khó thở, không sốt. SpO2 94%, M 110 bpm, ECG bình thường.
TnI 0.8 ng/mL (ref < 0.04)."
```

Problem:
1. **Dense abbreviations**: Hypertension, ECG, ECG, TnI
2. **Negation**: "no fever" — negation needs to be detected
3. **Temporality**: "past" vs "current"
4. **Trailing context**: "normal" in ECG ≠ normal SpO2

---

## 2. NER Health with BioBERT

### 2.1. Domain models

| Model | Training data | Best for |
|-------|-------------|-------------|
| BioBERT | PubMed + PMC | Research NER |
| PubMedBERT | PubMed (scratch) | Best on BioNLP |
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

### 2.3. Handling Negation and Temporality

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

## 4. NER assessment

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

## 5. Exercises

1. Download I2B2 2010 NER dataset. Fine-tune ClinicalBERT and PubMedBERT. Compare F1-score for each entity type (disease/drug/treatment).
2. Implement negation evaluation: annotate 100 sentences, counting False Positive (predicted negation but not) and False Negative.
3. Build ICD-10 top-50 classifier on MIMIC-III. Target Precision@5 > 0.70.

**Lesson 8**: Building **Medical Q&A Chatbot** with RAG + LLM.
