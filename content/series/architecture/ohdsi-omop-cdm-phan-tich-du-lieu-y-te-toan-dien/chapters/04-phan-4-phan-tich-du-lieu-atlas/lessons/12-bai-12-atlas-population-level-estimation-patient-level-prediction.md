---
id: 019e0b20-b212-7a01-e001-f1a7f8000012
title: "Bài 12: ATLAS — Population-Level Estimation & Patient-Level Prediction"
slug: bai-12-atlas-population-level-estimation-patient-level-prediction
description: >-
  Population-Level Effect Estimation (propensity score matching,
  negative control outcomes), Patient-Level Prediction (LASSO,
  gradient boosting, ROC/AUC), generate R study packages từ ATLAS
  và đánh giá kết quả.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Phân tích Dữ liệu với ATLAS"
course:
  id: 019e0b20-b200-7a01-e001-f1a7f8000001
  title: "OHDSI & OMOP CDM — Phân tích Dữ liệu Y tế Toàn diện"
  slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
---

![Bài 12: Population-Level Estimation & Patient-Level Prediction](/storage/uploads/2026/03/ohdsi-bai-12-estimation-prediction.png)

## Giới thiệu

Bài này tập trung vào hai tính năng phân tích nâng cao nhất của ATLAS:
- **Population-Level Effect Estimation (PLE)**: Ước lượng hiệu quả/tác dụng phụ thuốc ở cấp quần thể
- **Patient-Level Prediction (PLP)**: Dự đoán xác suất xảy ra outcome cho từng bệnh nhân

---

## 1. Population-Level Effect Estimation (PLE)

### 1.1 Bài toán

```
Câu hỏi: "Thuốc A có làm GIẢM/TĂNG nguy cơ [outcome]
          so với thuốc B không?"

Ví dụ thực tế:
  T (Treatment): Metformin (thuốc ĐTĐ)
  C (Comparator): Sulfonylurea (thuốc ĐTĐ khác)
  O (Outcome): Nhồi máu cơ tim (MI)

  → Metformin có giảm nguy cơ MI so với SU không?
```

### 1.2 Thiết kế trong ATLAS

```
ATLAS → Estimation → New Estimation

┌─────────────────────────────────────────────────────────┐
│  Estimation: Metformin vs SU — MI Risk                  │
│                                                         │
│  Comparisons:                                           │
│  ┌───────────────────────────────────────────┐          │
│  │  Target: [New Metformin Users ▼]          │          │
│  │  Comparator: [New Sulfonylurea Users ▼]   │          │
│  └───────────────────────────────────────────┘          │
│                                                         │
│  Outcomes:                                              │
│  ☑ Acute Myocardial Infarction                         │
│  ☑ Stroke (thêm outcome phụ)                           │
│                                                         │
│  Analysis Settings:                                     │
│  ☑ Propensity Score Matching (1:1)                      │
│  ☑ Propensity Score Stratification (5 strata)           │
│  ☑ Inverse Probability of Treatment Weighting           │
│                                                         │
│  Negative Controls:                                     │
│  ☑ Import negative control concepts (50 outcomes)       │
│                                                         │
│  [▶ Generate R Package]                                 │
└─────────────────────────────────────────────────────────┘
```

### 1.3 New-User Cohort Design

```
Tại sao "New User"?
─────────────────────
Tránh prevalent user bias:

Timeline (Sai):
  Patient đã dùng Metformin 2 năm → bắt đầu theo dõi
  → Bias: BN dung nạp tốt mới còn dùng → sống sót tốt hơn

Timeline (Đúng — New User):
  Lần đầu dùng Metformin ─────────→ theo dõi
       ↑ Index date

Điều kiện New User cohort:
  1. Lần đầu dùng thuốc (no prior 365 days)
  2. Có ≥365 ngày observation trước index date
  3. Không có prior outcome
```

### 1.4 Propensity Score

```
Propensity Score = P(nhận Treatment | covariates)

Mục đích: Cân bằng confounders giữa 2 nhóm
         (vì đây KHÔNG phải RCT)

Covariates ATLAS tự trích xuất:
  - Demographics (age, gender, race)
  - Conditions (trước 365 ngày)
  - Drugs (trước 365 ngày)
  - Procedures, Measurements
  - Visit count
  → Hàng nghìn covariates tự động

Matching 1:1:
┌─────────────────┐     ┌─────────────────┐
│ Metformin Users │     │ SU Users        │
│ PS = 0.72       │────→│ PS = 0.73       │  ← matched
│ PS = 0.45       │────→│ PS = 0.44       │  ← matched
│ PS = 0.88       │  ✗  │ (no match)      │  ← excluded
│ PS = 0.31       │────→│ PS = 0.30       │  ← matched
└─────────────────┘     └─────────────────┘

→ After matching: 2 nhóm tương đồng về covariates
→ Kiểm tra SMD < 0.1 cho tất cả features
```

### 1.5 Negative Control Outcomes

```
Negative Control = Outcome mà thuốc KHÔNG có tác dụng

Mục đích: Phát hiện systematic bias

Ví dụ negative controls cho Metformin vs SU:
  - Gãy xương cẳng tay (fracture)
  - Viêm ruột thừa (appendicitis)
  - Điếc (hearing loss)
  → Thuốc đái tháo đường KHÔNG ảnh hưởng các outcome này

Kết quả mong đợi:
  Negative control HR ≈ 1.0

Nếu negative controls cho HR ≠ 1.0 hệ thống:
  → CÓ residual bias → cần calibrate p-value
```

```
Empirical Calibration:
                    ●
              ●    ●  ●
          ●  ●  ● ● ●●  ●
     ─────●──●●●●●●─●──●──────── HR = 1.0
           ● ●  ●● ●● ●
              ●   ●  ●
                   ●

Nếu negative controls lệch: p-value cần calibrate
  UnCalibrated p = 0.03
  Calibrated p   = 0.12 → KHÔNG còn có ý nghĩa!
```

---

## 2. Patient-Level Prediction (PLP)

### 2.1 Bài toán

```
Câu hỏi: "Bệnh nhân X có xác suất bao nhiêu sẽ phát
          triển [outcome] trong [time window]?"

Ví dụ:
  Target: BN Type 2 DM mới chẩn đoán
  Outcome: Chronic Kidney Disease (CKD)
  Time-at-risk: 5 năm

  → Model dự đoán: BN này có 23% nguy cơ CKD
                    trong 5 năm tới
```

### 2.2 Thiết kế trong ATLAS

```
ATLAS → Prediction → New Prediction

┌─────────────────────────────────────────────────────────┐
│  Prediction: CKD Risk in DM Patients                    │
│                                                         │
│  Target Cohort:                                         │
│  [New-Onset Type 2 DM ▼]                               │
│                                                         │
│  Outcome Cohort:                                        │
│  [Chronic Kidney Disease ▼]                             │
│                                                         │
│  Time-at-risk:                                          │
│  Start: Cohort start + [1] day                          │
│  End:   Cohort start + [1825] days (5 years)            │
│                                                         │
│  Models:                                                │
│  ☑ LASSO Logistic Regression                            │
│  ☑ Gradient Boosting Machine                            │
│  ☑ Random Forest                                        │
│                                                         │
│  Covariates:                                            │
│  ☑ Demographics                                         │
│  ☑ Conditions (prior 365d, prior 30d)                   │
│  ☑ Drugs (prior 365d)                                   │
│  ☑ Measurements (prior 365d)                            │
│  ☑ Procedures (prior 365d)                              │
│                                                         │
│  [▶ Generate R Package]                                 │
└─────────────────────────────────────────────────────────┘
```

### 2.3 Quy trình Cross-Validation

```
Dữ liệu CDM (10,000 BN Type 2 DM)
     │
     ├── 75% Training (7,500)
     │     │
     │     ├── Fold 1: Train 5,625 / Val 1,875
     │     ├── Fold 2: Train 5,625 / Val 1,875
     │     └── Fold 3: Train 5,625 / Val 1,875
     │
     └── 25% Test (2,500) — KHÔNG bao giờ dùng khi train

→ 3-fold cross-validation trên Training set
→ Đánh giá final trên Test set
```

### 2.4 Đánh giá Model

```
Discrimination (AUC-ROC):
  ┌─────────────────────────────┐
  │ 1.0 ──────────────── ●      │
  │      ╱               │      │
  │     ╱       AUC=0.82 │      │
  │    ╱        ─────     │      │
  │   ╱ ╱             ╱  │      │
  │  ╱╱         ╱╱╱      │      │
  │ ╱     ╱╱╱            │      │
  │╱╱╱                   │      │
  0───────────────────────1     │
  └─────────────────────────────┘
  AUC > 0.80: Tốt (acceptable for clinical use)
  AUC > 0.90: Rất tốt

Calibration:
  ┌─────────────────────────────┐
  │ Observed                    │
  │ 0.5 ●                      │
  │      ╱●                    │
  │     ╱  ●      ← Trên đường │
  │    ╱ ●   ●      45° = tốt  │
  │   ╱●                       │
  │  ●                         │
  │ ╱                           │
  0───────────── 0.5            │
  │    Predicted                │
  └─────────────────────────────┘
  Predicted 20% → thực tế ~20% xảy ra → well-calibrated
```

### 2.5 Kết quả — Top Predictors

```
LASSO Logistic Regression — Top Predictors:

┌────┬──────────────────────────────────┬─────────┐
│ #  │ Predictor                        │ Coeff   │
├────┼──────────────────────────────────┼─────────┤
│  1 │ Age ≥ 65                         │ +0.82   │
│  2 │ Hypertension (prior 365d)        │ +0.65   │
│  3 │ eGFR < 60 (prior measurement)   │ +0.58   │
│  4 │ Proteinuria (prior 365d)         │ +0.52   │
│  5 │ ACE inhibitor use               │ +0.38   │
│  6 │ HbA1c > 9% (prior measurement)  │ +0.35   │
│  7 │ Obesity                          │ +0.28   │
│  8 │ Heart failure (prior 365d)       │ +0.25   │
│  9 │ Female gender                    │ −0.12   │
│ 10 │ Statin use                       │ −0.18   │
└────┴──────────────────────────────────┴─────────┘

→ Age, HTN, eGFR thấp, protein niệu: predictor mạnh nhất
→ Statin use: protective effect nhẹ
```

---

## 3. Generate R Study Package

### 3.1 Export từ ATLAS

```
ATLAS → Estimation/Prediction → [Analysis name] → Utilities

Download R Package:
  estimation-metformin-vs-su/
  ├── DESCRIPTION
  ├── NAMESPACE
  ├── R/
  │   ├── Main.R
  │   ├── Diagnostics.R
  │   └── Export.R
  ├── inst/
  │   ├── settings/
  │   │   ├── TCosCohortDefinitions.json
  │   │   ├── NegativeControlOutcomes.csv
  │   │   └── analysisSettings.json
  │   └── sql/
  │       └── CreateCohorts.sql
  └── extras/
      └── CodeToRun.R
```

### 3.2 Chạy Study Package

```r
# extras/CodeToRun.R

library(DatabaseConnector)
library(CohortMethod)  # cho Estimation
# hoặc library(PatientLevelPrediction)  # cho Prediction

# Connection details
connectionDetails <- createConnectionDetails(
  dbms = "postgresql",
  server = "localhost/ohdsi",
  user = "ohdsi_app",
  password = keyring::key_get("ohdsi"),
  port = 5432
)

# CDM schema info
cdmDatabaseSchema <- "cdm"
cohortDatabaseSchema <- "results"
cohortTable <- "estimation_cohort"

# Output folder
outputFolder <- "output/metformin_vs_su"

# Execute study
execute(
  connectionDetails = connectionDetails,
  cdmDatabaseSchema = cdmDatabaseSchema,
  cohortDatabaseSchema = cohortDatabaseSchema,
  cohortTable = cohortTable,
  outputFolder = outputFolder,
  createCohorts = TRUE,
  synthesizePositiveControls = TRUE,
  runAnalyses = TRUE,
  runDiagnostics = TRUE,
  maxCores = 4
)
```

### 3.3 Kết quả PLE

```
Hazard Ratio Results:
┌─────────────────────────────────────────────────────┐
│ Target: Metformin (N=3,200)                         │
│ Comparator: Sulfonylurea (N=3,200)                  │
│ Outcome: Acute MI                                   │
│                                                     │
│ Method: PS Matching 1:1                              │
│ Matched pairs: 2,850                                 │
│                                                     │
│ Events Target: 28 (0.98%)                            │
│ Events Compar: 45 (1.58%)                            │
│                                                     │
│ Calibrated HR: 0.62 [95% CI: 0.39 - 0.98]           │
│ Calibrated p:  0.041                                 │
│                                                     │
│ → Metformin giảm 38% nguy cơ MI so với SU            │
│ → Kết quả có ý nghĩa thống kê (p < 0.05)            │
│                                                     │
│ ⚠ Diagnostics:                                      │
│   PS equipoise: PASS (preference score overlap)      │
│   Covariate balance: PASS (all SMD < 0.1)            │
│   Negative controls: PASS (centered around HR=1)     │
│   MDRR: 1.5 (minimum detectable relative risk)       │
└─────────────────────────────────────────────────────┘
```

---

## 4. Diagnostics & Quality Assessment

### 4.1 Estimation Diagnostics

```
Trước khi tin kết quả Estimation, kiểm tra:

1. Preference Score Distribution
   ─────────────────────────────
   Metformin:  ▁▂▃▅▇██▇▅▃▂▁
   SU:         ▁▂▃▅▇██▇▅▃▂▁
   → Cần overlap đáng kể (equipoise)
   → Nếu không overlap: confounding by indication

2. Covariate Balance (after matching)
   ────────────────────────────────────
   Before: 150 covariates có SMD > 0.1
   After:    0 covariates có SMD > 0.1
   → PASS

3. Kaplan-Meier Plot
   ───────────────────
   1.0 ┬────────────────────────
       │ ──── Metformin
       │ ─ ─ SU
   0.98│──────────────
       │     ── ──     ──────── Metformin (higher survival)
   0.96│          ── ──
       │               ── ── ── SU
   0.94│
       └────────────────────────
       0     1     2     3  years

4. Negative Control Plot
   ───────────────────────
   Systematic error: mean = 0.02, SD = 0.08
   → Acceptable (mean ≈ 0, SD < 0.2)
```

### 4.2 Prediction Diagnostics

```
PLP Diagnostics checklist:
  ☑ AUC > 0.70 (minimum acceptable)
  ☑ Calibration slope ∈ [0.8, 1.2]
  ☑ Calibration intercept ∈ [-0.2, 0.2]
  ☑ Brier score < baseline
  ☑ No overfitting (train AUC ≈ test AUC)
  ☑ Sufficient outcome events (≥100)
  ☑ Adequate sample size (events per variable > 10)
```

---

## Tóm tắt

| Tính năng | Input | Output | Ứng dụng |
|-----------|-------|--------|----------|
| Estimation | Target vs Comparator → Outcome | Hazard Ratio + CI | So sánh hiệu quả/an toàn thuốc |
| Prediction | Target → Outcome (time window) | Risk score per patient | Dự đoán nguy cơ cá nhân |
| PS Matching | Covariates | Balanced cohorts | Giảm confounding |
| Negative Controls | Known null effects | Empirical calibration | Phát hiện systematic bias |

**Bài tiếp theo**: ACHILLES — Data Characterization & Source Profiling
