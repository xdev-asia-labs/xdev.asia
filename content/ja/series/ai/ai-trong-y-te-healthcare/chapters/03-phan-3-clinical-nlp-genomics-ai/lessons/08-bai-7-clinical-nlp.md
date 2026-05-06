---
id: 019d8b33-bb07-7007-c007-ee0700000007
title: 'レッスン 7: 臨床 NLP — 医療記録の分析'
slug: bai-7-clinical-nlp
description: '医療 NER: 病気、薬剤、症状。 BioBERT、PubMedBERT。関係抽出。臨床テキストの分類。 ICDコーディングの自動化。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 3: 臨床 NLP とゲノミクス AI'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: '医療とヘルスケアにおける AI: 実戦アプリケーション'
  slug: ai-trong-y-te-healthcare
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🧠 AI と ML — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: 臨床 NLP — 疾患プロファイルの分析</tspan>
      <tspan x="60" dy="42">判断</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">医療とヘルスケアにおける AI: 実戦アプリケーション</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 臨床 NLP とゲノミクス AI</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> 医療データの 80% 以上がテキスト (臨床記録、検査報告書、退院概要など) です。この記事はその宝を活用するための鍵です。

---

## 1. 臨床 NLP はなぜ通常の NLP と違うのですか?

臨床文書:
```
"Bn nam 58t, tiền sử THA, ĐTĐ typ 2, vào viện vì ĐAU NGỰC trái lan lên vai,
kèm khó thở, không sốt. SpO2 94%, M 110 bpm, ECG bình thường.
TnI 0.8 ng/mL (ref < 0.04)."
```

問題:
1. **密集した略語**: 高血圧、ECG、ECG、TnI
2. **否定**: 「発熱なし」 — 否定を検出する必要があります
3. **時間性**: 「過去」と「現在」
4. **後続の文脈**: ECG の「正常」≠ 正常 SpO2

---

## 2. BioBERT による NER ヘルス

＃＃＃２．１．ドメインモデル

|モデル |トレーニングデータ |こんな方に最適 |
|----------|---------------|---------------|
|バイオバート |パブメッド + PMC |研究 NER |
| PubMedBERT | PubMed (スクラッチ) | BioNLP でベスト |
|臨床BERT |ミミックⅢ |臨床ノート |
|バイオ_クリニカルBERT |パブリメッド + MIMIC |一般的な医療NLP |

＃＃＃２．２．トークン分類 (NER)

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

＃＃＃２．３．否定と一時性の処理

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

## 3. ICD-10 自動コーディング

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

## 4. NERの評価

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

## 5. 演習

1. I2B2 2010 NER データセットをダウンロードします。 ClinicalBERT と PubMedBERT を微調整します。各エンティティ タイプ (病気/薬剤/治療) の F1 スコアを比較します。
2. 否定評価を実装します。100 文に注釈を付け、偽陽性 (否定が予測されたがそうではない) と偽陰性をカウントします。
3. MIMIC-III 上に ICD-10 トップ 50 分類器を構築します。ターゲット精度@5 > 0.70。

**レッスン 8**: RAG + LLM を使用して **医療 Q&A チャットボット**を構築します。
