---
id: 019d8b33-bb01-7001-c001-ee0100000001
title: 'Lesson 1: AI in Healthcare — Overview & Ethics'
slug: bai-1-ai-y-te-tong-quan
description: >-
  Landscape AI Healthcare. Main applications: diagnostics, drugs, patient
  management. Ethics: bias, privacy, explainability. Regulatory landscape: FDA,
  CE Mark.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 0
section_title: 'Part 1: Medical AI Platform & Medical Data'
course:
  id: 019d8b33-aa01-7001-b001-ff0400000001
  title: 'AI in Health & Healthcare: Real Battle Applications'
  slug: ai-trong-y-te-healthcare
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7163" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7163)"/>

  <!-- Decorations -->
  <g>
    <circle cx="876" cy="118" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="652" cy="234" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="928" cy="90" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="704" cy="206" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="62" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="98" x2="1100" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="128" x2="1050" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1026.5788383248864,181.5 1026.5788383248864,214.5 998,231 969.4211616751136,214.5 969.4211616751135,181.5 998,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="99" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🧠 AI & ML — Lesson 0</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: AI in Healthcare — Overview & Ethics</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">AI in Health & Healthcare: Real Battle Applications</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Medical AI Platform & Medical Data</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

> This article lays the thinking foundation for the entire series. You'll understand **why** AI works differently in healthcare than in other industries — and why it's more important than any algorithm.

---

## 1. Why is AI in Healthcare completely different?

When building an AI to classify cat/dog photos, 5% error is okay. When building AI to diagnose lung cancer, a 5% error means **thousands of people being missed** or receiving unnecessary chemotherapy.

Three things make healthcare AI different from every other domain:

### 1.1. Stakes are extremely high

| Domain | Consequences if AI is wrong |
|--------|-------|
| Movie Recommendation | User is not good at watching movies |
| Spam filter | Email goes to wrong folder |
| **Medical diagnosis** | **Patient death or disability** |
| **Drug dosage AI** | **Overdose or underdose** |

This is not a reason to fear AI in healthcare — but a reason to do **more right, more carefully**.

### 1.2. Data is both precious and scarce

**Precious**: Each patient is a natural "experiment" that cannot be replicated. Rare cancer data may only have a few hundred cases globally.

**Khan**: HIPAA (US), GDPR (EU), Decree 13/2023 (Vietnam) — health data is most protected across all industries. Cannot be scraped from the internet.

**Imbalanced**: 99% of patients are healthy, 1% have rare diseases → naïve model only predicts "healthy" which is correct 99% of the time but is useless.

### 1.3. "Ground truth" does not completely exist

In NLP, correct translations are verifiable. In medical imaging:

- **Inter-rater reliability**: 3 radiologists reading the same film can give 3 different results
- **Gold standard** is usually the result of surgery or biopsy — expensive, slow, invasive
- The disease can progress: the label is correct today, wrong 6 months later

---

## 2. Landscape: Where is AI being used in Healthcare?

```
AI Healthcare Ecosystem
│
├── 🔬 Chẩn đoán & Phát hiện bệnh
│   ├── Radiology AI (X-ray, CT, MRI)         ← Mature, FDA-cleared products
│   ├── Pathology AI (digital slides)          ← Growing fast
│   ├── Dermatology AI (skin lesions)          ← Consumer + clinical
│   ├── Ophthalmology (retinal scan)           ← DeepMind, Google leading
│   └── Clinical Decision Support Systems     ← Hospital workflow tools
│
├── 💊 Drug Discovery & Development
│   ├── Target identification                  ← Bioinformatics + ML
│   ├── Molecule design (generative AI)        ← GNN, Transformer
│   ├── ADMET prediction                       ← Replace wet lab screening
│   └── Clinical trial optimization            ← Patient matching, protocol
│
├── 🧬 Genomics & Precision Medicine
│   ├── Variant calling                        ← DeepVariant (Google)
│   ├── Polygenic risk scores                  ← GWAS + ML
│   └── Pharmacogenomics                       ← Drug-gene interactions
│
├── 📋 EHR & Clinical Operations
│   ├── Clinical NLP (notes → structured)     ← Extract diagnoses, meds
│   ├── ICD coding automation                  ← Billing, compliance
│   ├── Readmission prediction                 ← Care management
│   └── Sepsis early warning                   ← ICU monitoring
│
├── ⌚ Remote Monitoring & Wearables
│   ├── AFib detection (ECG/PPG)               ← Apple Watch cleared
│   ├── Continuous glucose monitoring + AI    ← Diabetes management
│   └── Mental health monitoring              ← Sleep, activity patterns
│
└── 🏥 Operations & Administration
    ├── Medical coding + billing               ← Revenue cycle management
    ├── Appointment no-show prediction         ← Scheduling optimization
    └── Supply chain (drug demand forecast)   ← Hospital logistics
```

### 2.1. Maturity level by application

| Application | Phase | Representative |
|----------|-----------|----------|
| Retinal screening (DR) | **Production** | IDx-DR (FDA cleared 2018) |
| Chest X-ray AI | **Production** | Aidoc, Viz.ai |
| Sepsis prediction | **Clinical deployment** | Epic Sepsis Model |
| Drug molecular design | **Research → Early clinical** | Insilico Medicine |
| Surgical robot AI | **Experimental** | Intuitive Surgical R&D |
| Digital twin patient | **Research** | 2030+ horizon |

---

## 3. Lifecycle of a Medical AI Project

Understanding this lifecycle helps you ask the right questions from the beginning:

```
1. Problem Definition
   "Bài toán lâm sàng là gì? AI có phải là giải pháp phù hợp không?"
   ↓
2. Data Strategy
   "Dữ liệu nào có? Privacy? Annotation cost? Class imbalance?"
   ↓
3. Model Development
   "Architecture nào? Baseline metrics? Validation methodology?"
   ↓
4. Clinical Validation
   "Prospective study hay retrospective? Comparison với clinicians?"
   ↓
5. Regulatory Submission
   "FDA 510(k)? CE Mark? SaMD class?"
   ↓
6. Clinical Integration
   "Workflow integration? EHR compatibility? Change management?"
   ↓
7. Post-market Monitoring
   "Performance drift? Adverse events? Retraining strategy?"
```

> **Bloody lesson**: 85% of medical AI projects fail **not** because of bad algorithms — but because steps 1, 6, 7 are skipped.

---

## 4. AI Ethics in Healthcare

### 4.1. The four traditional pillars of medical ethics → apply to AI

| Principles of medical ethics | Meaning | Apply to AI |
|-----------------|---------|----------------|
| **Beneficence** (benefit) | Acting for the benefit of patients | AI must improve outcomes, not just optimize metrics
| **Non-maleficence** (not harmful) | "First, do no harm" | Understand AI failure modes before deploying |
| **Autonomy** (autonomy) | Patients have the right to decide | Informed consent when AI participates in diagnosis |
| **Justice** (fairness) | Treat all patients fairly | Fairness across demographic groups |

### 4.2. Three unique ethical issues of Medical AI

**Issue 1: Bias and Health Disparities**

AI does not invent bias — it **amplifies bias that already exists in the data**.

Real-life example: A 2019 study in *Science* (Obermeyer et al.) found that a health management algorithm used by **>200 million Americans** has severe bias:

```
Thuật toán dùng "chi phí y tế trong quá khứ" để dự đoán "mức độ bệnh"
→ Người da đen có chi phí y tế thấp hơn (vì thiếu tiếp cận dịch vụ)
→ Thuật toán kết luận họ ít bệnh hơn thực tế
→ Bệnh nhân da đen phải bệnh nặng hơn 40% mới được chăm sóc tương đương
```

**Issue 2: Accountability — Who is responsible?**

```
Bác sĩ tin AI → AI sai → Bệnh nhân tổn hại
   ↑
Ai có lỗi?
  - Bác sĩ không kiểm tra?
  - Nhà sản xuất AI?
  - Bệnh viện mua AI không validate?
  - FDA đã approve nhưng AI vẫn sai?
```

Currently: There is no clear legal framework. The EU AI Act is trying to deal with "high-risk AI" classification.

**Issue 3: Automation Bias**

Doctors tend to trust AI more when it provides a high confidence level:

```python
# Nghiên cứu: Radiologists với AI assistance
# Kịch bản 1: AI đúng, bác sĩ gốc sai → bác sĩ theo AI (tốt)
# Kịch bản 2: AI sai, bác sĩ gốc đúng → bác sĩ CŨNG theo AI (nguy hiểm)
# → "Automation bias" làm bác sĩ kém hơn khi có AI kém!
```

Solution: The UI design does not display the confidence score before the physician reads it independently.

### 4.3. Framework for evaluating AI Ethics in Healthcare

```python
# Model Card — tài liệu tối thiểu khi publish medical AI
model_card = {
    "model_details": {
        "name": "ChestAI v2.1",
        "type": "Multi-label chest X-ray classifier",
        "conditions_detected": ["Pneumonia", "Effusion", "Cardiomegaly", ...],
        "intended_use": "Screening support for radiologists, NOT standalone diagnosis"
    },
    "training_data": {
        "dataset": "CheXpert + NIH ChestX-ray14",
        "size": "224,316 images",
        "demographics": {
            "age": "18-90 years",
            "sex": "51% male, 49% female",
            "race": "WARNING: Race not captured in original dataset"
        }
    },
    "performance": {
        "overall_auc": 0.889,
        "by_condition": {"Pneumonia": 0.768, "Effusion": 0.925, ...}
    },
    "fairness_evaluation": {
        "sex_auc_gap": 0.023,  # Female vs Male
        "age_auc_gap": 0.041,  # Elderly (>70) vs Adult (30-70)
        "WARNING": "Not evaluated on non-US populations"
    },
    "limitations": [
        "NOT validated for pediatric (<18) patients",
        "Performance may degrade on non-standard beam projections",
        "Not tested on COVID-19 pneumonia"
    ],
    "out_of_scope": [
        "Final diagnosis without physician review",
        "Emergency triage decision making"
    ]
}
```

---

## 5. Regulatory Landscape: Global game rules

### 5.1. FDA — Software as Medical Device (SaMD)

FDA classifies AI/ML software according to **risk level**:

| Class | Risk | Example | Road |
|-------|--------|-------|-----------|
| Class I | Low | Administrative tools, low-risk support | General Controls |
| Class II | Average | X-ray AI (screening support) | 510(k) clearance |
| Class III | Cao | AI decides automatic treatment | PMA (Premarket Approval) |

**510(k)**: Demonstrated "substantially equivalent" with cleared predicate device.  
**PMA**: Must demonstrate safety and effectiveness — similar to the drug approval process.

**Pre-Determined Change Control Plan (PCCP)** — new regulations 2023:
Allow AI model to self-update/improve within _approved scope_ without resubmitting. It's important because medical AI needs to constantly retrain with new data.

### 5.2. EU AI Act + MDR

The EU AI Act (effective 2024) classifies medical AI as **High-Risk AI**:
- Transparency obligation: must notify the user who is interacting with the AI
- Human oversight: there must be an override mechanism
- Accuracy/robustness/cybersecurity requirements
- Conformity assessment required before entering the EU market

### 5.3. Vietnam

- **Decree 98/2021** on medical equipment management
- AI diagnostic software: classify medical devices A/B/C/D
- Completing the legal framework for medical AI (2024-2026)
- Reality: many AI products are operating as "physician support" to avoid device classification

---

## 6. AI is not Silver Bullet — When NOT to use AI?

This is the most important question a medical AI engineer must answer honestly:

**Do not use AI when:**

1. **Simple rule-based system is enough**: If the problem can be solved with 5 clear if-else with 100% accuracy, do not train the model.

2. **Dataset is too small and cannot be expanded**: Super rare disease with 50 cases → AI will overfit, not generalize. Rare disease approaches (few-shot, synthetic data) should be considered.

3. **Lack of reliable ground truth**: If inter-rater agreement < 70%, the model will learn noise.

4. **Can't explain to the doctor**: Some clinical contexts (court, insurance) need AI that can explain each decision.

5. **Regulatory pathway is unclear**: Deploying the tool without knowing the SaMD class may lead to withdrawal.

---

## 7. Summary & Preparation for Lesson 2

After this article, you should understand:

- ✅ Medical AI is different from regular AI in **stakes, data constraints, ground truth uncertainty**
- ✅ Landscape applications from **mature** (retinal AI) to **experimental** (digital twin)
- ✅ The medical AI project life cycle includes 7 steps — failures are usually in steps 1, 6, 7
- ✅ Ethics: bias, accountability, automation bias
- ✅ Regulatory: FDA SaMD classes, 510(k)/PMA, EU AI Act, VN context

**Lesson 2** will delve into the most important thing about medical AI: **data**. You'll learn how DICOM images are stored, what HL7 FHIR is, and why de-identification isn't as simple as you think.

---

## Exercise

1. Find an AI medical device that has been cleared by the FDA [510(k) database](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm). Read the predicate comparison — which device does it compare to?

2. Read the paper ["Dissecting racial bias"](https://science.sciencemag.org/content/366/6464/447) (Obermeyer et al., 2019). Why is using "cost" as a proxy for "health" problematic?

3. For the following problem, decide: AI or rule-based? Explain why.
- Warning when blood pressure > 180/120
   - Predict whether the patient will be readmitted to the hospital within 30 days
   - Classify ECG as normal or abnormal

---

## 2. Architecture & Principles

### Core Architecture

```python
# Example implementation
import torch
import torch.nn as nn

class ExampleModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
    
    def forward(self, x):
        return self.net(x)
```

---

## 3. Practice

### Setup

```bash
pip install torch transformers datasets
```

### Training Pipeline

```python
# Training loop
model = ExampleModel(input_dim=768, output_dim=10)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)
criterion = nn.CrossEntropyLoss()

for epoch in range(10):
    for batch in train_loader:
        optimizer.zero_grad()
        outputs = model(batch["input"])
        loss = criterion(outputs, batch["label"])
        loss.backward()
        optimizer.step()
```

---

## 4. Best Practices

| Aspect | Recommendation |
|--------|---------------|
| Data | Quality over quantity |
| Model | Start simple, scale up |
| Training | Monitor loss curves |
| Evaluation | Use appropriate metrics |

---

## Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Architecture | Suitable for the problem |
| Training | Careful hyperparameter tuning |
| Evaluation | Multiple metrics |
