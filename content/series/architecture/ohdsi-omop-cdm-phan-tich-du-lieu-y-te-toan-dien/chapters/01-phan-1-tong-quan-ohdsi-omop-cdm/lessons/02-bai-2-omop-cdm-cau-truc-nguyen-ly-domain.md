---
id: 019e0b20-b202-7a01-e001-f1a7f8000002
title: "Bài 2: OMOP Common Data Model — Cấu trúc, nguyên lý & Domain"
slug: bai-2-omop-cdm-cau-truc-nguyen-ly-domain
description: >-
  Kiến trúc OMOP CDM v5.4, các nhóm bảng (Clinical Data, Health System,
  Health Economics, Standardized Vocabularies, Metadata), quan hệ giữa
  các domain (Condition, Drug, Procedure, Measurement, Observation),
  Person-Visit-Event model và nguyên lý thiết kế.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Tổng quan OHDSI & OMOP CDM"
course:
  id: 019e0b20-b200-7a01-e001-f1a7f8000001
  title: "OHDSI & OMOP CDM — Phân tích Dữ liệu Y tế Toàn diện"
  slug: ohdsi-omop-cdm-phan-tich-du-lieu-y-te-toan-dien
---

## Giới thiệu

OMOP CDM (Common Data Model) là nền tảng cốt lõi của toàn bộ hệ sinh thái OHDSI. Mọi công cụ — ATLAS, WebAPI, ACHILLES, HADES — đều hoạt động trên dữ liệu được chuẩn hóa theo mô hình này.

Bài này sẽ đi sâu vào cấu trúc, nguyên lý thiết kế, và các domain chính của OMOP CDM v5.4.

---

## 1. Nguyên lý thiết kế OMOP CDM

### 1.1 Triết lý cốt lõi

```
1. Patient-Centric (Lấy bệnh nhân làm trung tâm)
   → Mọi dữ liệu gắn với PERSON

2. Event-Based (Dựa trên sự kiện)
   → Mỗi record = 1 sự kiện y tế (chẩn đoán, kê thuốc, xét nghiệm...)

3. Concept-Oriented (Dựa trên khái niệm)
   → Mỗi sự kiện gắn với Standard Concept từ Vocabulary

4. Source-Preserving (Giữ nguyên dữ liệu gốc)
   → Luôn có cột source_value, source_concept_id bên cạnh standard

5. Platform-Agnostic (Không phụ thuộc nền tảng)
   → Chạy trên PostgreSQL, SQL Server, Oracle, Spark, Databricks...
```

### 1.2 Person-Visit-Event Model

```
                  PERSON (bệnh nhân)
                    │
                    │ 1:N
                    ▼
              VISIT_OCCURRENCE (lượt khám)
                    │
                    │ 1:N
          ┌─────────┼─────────────────────────────┐
          ▼         ▼         ▼         ▼         ▼
    CONDITION   DRUG      PROCEDURE  MEASURE   OBSERVATION
    (chẩn đoán) (thuốc)  (thủ thuật) (XN)     (quan sát)
```

Ví dụ thực tế:
```sql
-- Bệnh nhân đến khám ngày 2024-03-01
-- Được chẩn đoán Tăng huyết áp (I10), kê Amlodipine 5mg,
-- Xét nghiệm Glucose máu: 126 mg/dL

PERSON:          person_id = 12345
VISIT:           visit_id = 67890, visit_date = 2024-03-01
CONDITION:       condition_concept_id = 320128 (Essential HTN)
DRUG_EXPOSURE:   drug_concept_id = 1332419 (Amlodipine 5mg)
MEASUREMENT:     measurement_concept_id = 3004410 (Glucose)
                 value_as_number = 126, unit_concept_id = 8840 (mg/dL)
```

---

## 2. Nhóm bảng trong OMOP CDM v5.4

### 2.1 Tổng quan

```
OMOP CDM v5.4
├── Standardized Vocabularies (15 tables)
│   ├── CONCEPT
│   ├── VOCABULARY
│   ├── DOMAIN
│   ├── CONCEPT_CLASS
│   ├── CONCEPT_RELATIONSHIP
│   ├── RELATIONSHIP
│   ├── CONCEPT_SYNONYM
│   ├── CONCEPT_ANCESTOR
│   ├── SOURCE_TO_CONCEPT_MAP
│   ├── DRUG_STRENGTH
│   └── ...
│
├── Standardized Clinical Data (12 tables)
│   ├── PERSON
│   ├── OBSERVATION_PERIOD
│   ├── VISIT_OCCURRENCE
│   ├── VISIT_DETAIL
│   ├── CONDITION_OCCURRENCE
│   ├── DRUG_EXPOSURE
│   ├── PROCEDURE_OCCURRENCE
│   ├── DEVICE_EXPOSURE
│   ├── MEASUREMENT
│   ├── OBSERVATION
│   ├── NOTE
│   └── NOTE_NLP
│
├── Standardized Health System (2 tables)
│   ├── LOCATION
│   └── CARE_SITE
│
├── Standardized Health Economics (2 tables)
│   ├── PAYER_PLAN_PERIOD
│   └── COST
│
├── Standardized Derived Elements (4 tables)
│   ├── DRUG_ERA
│   ├── DOSE_ERA
│   ├── CONDITION_ERA
│   └── EPISODE + EPISODE_EVENT
│
├── Results Schema
│   ├── COHORT
│   └── COHORT_DEFINITION
│
└── Metadata
    ├── CDM_SOURCE
    └── METADATA
```

---

## 3. Các bảng Clinical Data quan trọng

### 3.1 PERSON

```sql
CREATE TABLE person (
  person_id               BIGINT       NOT NULL,  -- PK, auto-generated
  gender_concept_id       INT          NOT NULL,  -- 8507=Male, 8532=Female
  year_of_birth           INT          NOT NULL,
  month_of_birth          INT          NULL,
  day_of_birth            INT          NULL,
  birth_datetime          TIMESTAMP    NULL,
  race_concept_id         INT          NOT NULL,
  ethnicity_concept_id    INT          NOT NULL,
  location_id             BIGINT       NULL,
  care_site_id            BIGINT       NULL,
  person_source_value     VARCHAR(50)  NULL,      -- Mã BN gốc
  gender_source_value     VARCHAR(50)  NULL,
  gender_source_concept_id INT        NULL
);
```

**Lưu ý quan trọng**:
- `person_id` KHÔNG phải mã bệnh nhân gốc (privacy)
- Mã bệnh nhân gốc lưu trong `person_source_value`
- Gender, race, ethnicity đều dùng Standard Concept IDs

### 3.2 VISIT_OCCURRENCE

```sql
CREATE TABLE visit_occurrence (
  visit_occurrence_id     BIGINT       NOT NULL,  -- PK
  person_id               BIGINT       NOT NULL,  -- FK → person
  visit_concept_id        INT          NOT NULL,  -- Loại visit
  visit_start_date        DATE         NOT NULL,
  visit_start_datetime    TIMESTAMP    NULL,
  visit_end_date          DATE         NOT NULL,
  visit_end_datetime      TIMESTAMP    NULL,
  visit_type_concept_id   INT          NOT NULL,  -- Nguồn dữ liệu
  care_site_id            BIGINT       NULL,
  visit_source_value      VARCHAR(50)  NULL,
  visit_source_concept_id INT          NULL
);

-- visit_concept_id phổ biến:
-- 9201 = Inpatient Visit (nội trú)
-- 9202 = Outpatient Visit (ngoại trú)
-- 9203 = Emergency Room Visit (cấp cứu)
-- 262  = Emergency Room and Inpatient Visit
```

### 3.3 CONDITION_OCCURRENCE

```sql
CREATE TABLE condition_occurrence (
  condition_occurrence_id     BIGINT       NOT NULL,
  person_id                   BIGINT       NOT NULL,
  condition_concept_id        INT          NOT NULL,  -- Standard Concept
  condition_start_date        DATE         NOT NULL,
  condition_start_datetime    TIMESTAMP    NULL,
  condition_end_date          DATE         NULL,
  condition_end_datetime      TIMESTAMP    NULL,
  condition_type_concept_id   INT          NOT NULL,
  condition_status_concept_id INT          NULL,
  stop_reason                 VARCHAR(20)  NULL,
  visit_occurrence_id         BIGINT       NULL,     -- FK → visit
  condition_source_value      VARCHAR(50)  NULL,     -- Mã ICD gốc: "I10"
  condition_source_concept_id INT          NULL      -- ICD concept: 45566052
);
```

**Dual concept pattern** (rất quan trọng):
```
condition_concept_id        = 320128     ← SNOMED "Essential HTN" (Standard)
condition_source_concept_id = 45566052   ← ICD-10CM "I10" (Source)
condition_source_value      = "I10"      ← Giá trị text gốc
```

### 3.4 DRUG_EXPOSURE

```sql
CREATE TABLE drug_exposure (
  drug_exposure_id          BIGINT       NOT NULL,
  person_id                 BIGINT       NOT NULL,
  drug_concept_id           INT          NOT NULL,  -- RxNorm concept
  drug_exposure_start_date  DATE         NOT NULL,
  drug_exposure_start_datetime TIMESTAMP NULL,
  drug_exposure_end_date    DATE         NOT NULL,
  drug_type_concept_id      INT          NOT NULL,
  stop_reason               VARCHAR(20)  NULL,
  refills                   INT          NULL,
  quantity                  NUMERIC      NULL,
  days_supply               INT          NULL,
  sig                       TEXT         NULL,       -- Hướng dẫn sử dụng
  route_concept_id          INT          NULL,       -- Đường dùng: oral, IV
  lot_number                VARCHAR(50)  NULL,
  visit_occurrence_id       BIGINT       NULL,
  drug_source_value         VARCHAR(50)  NULL,       -- Tên thuốc gốc
  drug_source_concept_id    INT          NULL,
  route_source_value        VARCHAR(50)  NULL,
  dose_unit_source_value    VARCHAR(50)  NULL
);
```

### 3.5 MEASUREMENT

```sql
CREATE TABLE measurement (
  measurement_id              BIGINT       NOT NULL,
  person_id                   BIGINT       NOT NULL,
  measurement_concept_id      INT          NOT NULL,  -- LOINC concept
  measurement_date            DATE         NOT NULL,
  measurement_datetime        TIMESTAMP    NULL,
  measurement_type_concept_id INT          NOT NULL,
  operator_concept_id         INT          NULL,      -- =, <, >, <=, >=
  value_as_number             NUMERIC      NULL,      -- Giá trị số
  value_as_concept_id         INT          NULL,      -- Giá trị mã (Pos/Neg)
  unit_concept_id             INT          NULL,      -- Đơn vị đo (UCUM)
  range_low                   NUMERIC      NULL,      -- Khoảng tham chiếu
  range_high                  NUMERIC      NULL,
  visit_occurrence_id         BIGINT       NULL,
  measurement_source_value    VARCHAR(50)  NULL,
  measurement_source_concept_id INT        NULL,
  unit_source_value           VARCHAR(50)  NULL,
  value_source_value          VARCHAR(50)  NULL
);
```

---

## 4. Standardized Vocabularies

### 4.1 Bảng CONCEPT — Trung tâm của mọi thứ

```sql
CREATE TABLE concept (
  concept_id       INT          NOT NULL,  -- Unique ID
  concept_name     VARCHAR(255) NOT NULL,  -- Tên concept
  domain_id        VARCHAR(20)  NOT NULL,  -- Condition, Drug, Measurement...
  vocabulary_id    VARCHAR(20)  NOT NULL,  -- SNOMED, RxNorm, LOINC...
  concept_class_id VARCHAR(20)  NOT NULL,  -- Clinical Finding, Ingredient...
  standard_concept VARCHAR(1)   NULL,      -- 'S'=Standard, 'C'=Class, NULL=Non-standard
  concept_code     VARCHAR(50)  NOT NULL,  -- Mã gốc: "38341003"
  valid_start_date DATE         NOT NULL,
  valid_end_date   DATE         NOT NULL,  -- 2099-12-31 = vẫn active
  invalid_reason   VARCHAR(1)   NULL       -- NULL=Valid, 'D'=Deleted, 'U'=Upgraded
);
```

### 4.2 Vocabulary Domains chính

```
Domain            Vocabulary       Ví dụ
─────────────────────────────────────────────────────────
Condition         SNOMED CT        Tăng huyết áp, Đái tháo đường
Drug              RxNorm           Amlodipine 5mg, Metformin 500mg
Measurement       LOINC            Glucose máu, HbA1c, Creatinine
Procedure         SNOMED CT/CPT4   Phẫu thuật, nội soi, siêu âm
Observation       SNOMED CT        Tiền sử gia đình, thói quen
Device            SNOMED CT        Stent, pacemaker
Spec Anatomic Site SNOMED CT       Tim, gan, thận
Unit              UCUM             mg/dL, mmol/L, kg
Gender            Gender           Male, Female
Race              Race             Asian, White, Black
```

### 4.3 Standard vs Source Concepts

```
Source Data:       "I10" (ICD-10-CM)
                      │
                      │ "Maps to" relationship
                      ▼
Standard Concept:  "Essential hypertension" (SNOMED CT, concept_id=320128)

Quy tắc:
- Phân tích DÙng standard_concept = 'S' (Standard)
- Source concept giữ lại để truy xuất ngược
- Một source concept có thể map sang nhiều standard concepts
```

---

## 5. Derived Elements — Bảng tính toán sẵn

### 5.1 ERA Tables

```
CONDITION_ERA: Gộp các condition liên tiếp thành 1 "era"

Timeline:
  ├── Condition A (01/01 - 15/01)
  ├── Gap 10 ngày
  ├── Condition A (25/01 - 10/02)
  └── CONDITION_ERA: 01/01 - 10/02 (gap_days ≤ 30 → merge)

DRUG_ERA: Tương tự, gộp drug exposures liên tiếp
  ├── Drug X 30 ngày supply (01/01)
  ├── Drug X 30 ngày supply (01/02)
  └── DRUG_ERA: 01/01 - 02/03 (liên tục dùng thuốc)
```

### 5.2 Ý nghĩa

- **CONDITION_ERA**: Bệnh nhân mắc bệnh X bao lâu? (duration)
- **DRUG_ERA**: Bệnh nhân dùng thuốc Y liên tục bao lâu? (adherence)
- Được tính tự động bởi ETL hoặc ACHILLES

---

## 6. ERD — Quan hệ giữa các bảng

```
                                    ┌──────────────┐
                                    │   LOCATION   │
                                    └──────┬───────┘
                                           │
┌──────────────┐    ┌──────────────┐    ┌──┴───────────┐
│ CDM_SOURCE   │    │  CARE_SITE   │◄───│   PERSON     │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                                    ┌──────────┴──────────┐
                                    │ OBSERVATION_PERIOD   │
                                    └──────────┬──────────┘
                                               │
                                    ┌──────────┴──────────┐
                                    │ VISIT_OCCURRENCE     │
                                    └──────────┬──────────┘
                                               │
        ┌──────────┬──────────┬────────────────┼────────────┐
        ▼          ▼          ▼                ▼            ▼
  ┌──────────┐ ┌────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐
  │CONDITION │ │ DRUG   │ │PROCEDURE  │ │MEASUREMENT│ │OBSERV   │
  │OCCURRENCE│ │EXPOSURE│ │OCCURRENCE │ │           │ │ATION    │
  └──────────┘ └────────┘ └───────────┘ └───────────┘ └─────────┘
        │          │
        ▼          ▼
  ┌──────────┐ ┌────────┐
  │CONDITION │ │DRUG_ERA│
  │ERA       │ │DOSE_ERA│
  └──────────┘ └────────┘
```

---

## 7. Query Examples

### 7.1 Đếm bệnh nhân theo giới tính

```sql
SELECT
  c.concept_name AS gender,
  COUNT(*) AS patient_count
FROM person p
JOIN concept c ON p.gender_concept_id = c.concept_id
GROUP BY c.concept_name;
```

### 7.2 Top 10 chẩn đoán phổ biến

```sql
SELECT
  c.concept_name AS condition_name,
  COUNT(DISTINCT co.person_id) AS patient_count
FROM condition_occurrence co
JOIN concept c ON co.condition_concept_id = c.concept_id
WHERE c.standard_concept = 'S'
GROUP BY c.concept_name
ORDER BY patient_count DESC
LIMIT 10;
```

### 7.3 Bệnh nhân tăng huyết áp dùng Amlodipine

```sql
SELECT COUNT(DISTINCT p.person_id)
FROM person p
JOIN condition_occurrence co ON p.person_id = co.person_id
JOIN drug_exposure de ON p.person_id = de.person_id
WHERE co.condition_concept_id = 320128        -- Essential HTN
  AND de.drug_concept_id = 1332419            -- Amlodipine 5mg
  AND de.drug_exposure_start_date >= co.condition_start_date;
```

---

## Tóm tắt

| Khái niệm | Giải thích |
|-----------|-----------|
| OMOP CDM v5.4 | Mô hình dữ liệu chung với ~37 bảng |
| Person-Visit-Event | Mọi sự kiện gắn với Person qua Visit |
| Dual Concept | Standard concept + Source concept song song |
| Standard Concept | Concept chuẩn dùng trong phân tích (SNOMED, RxNorm, LOINC) |
| Source Concept | Concept gốc từ dữ liệu nguồn (ICD-10, mã nội bộ) |
| ERA Tables | Bảng derived gộp events liên tiếp thành khoảng thời gian |

**Bài tiếp theo**: Athena — Tra cứu & Quản lý Standardized Vocabularies
