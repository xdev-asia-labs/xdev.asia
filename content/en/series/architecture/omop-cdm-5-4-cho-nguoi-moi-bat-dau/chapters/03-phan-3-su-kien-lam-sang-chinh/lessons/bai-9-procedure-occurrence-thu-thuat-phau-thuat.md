---
id: 019f1a00-a109-7b01-e001-omopcdm54009
title: 'Lesson 9: PROCEDURE_OCCURRENCE — Procedures & Surgery'
slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
description: >-
  Record procedures, surgeries, and medical interventions. SNOMED / CPT4 /
  ICD-10-PCS mapping, modifier_concept_id, distinguishing Procedure vs
  Measurement vs Drug, practicing ETL of Vietnamese hospital data.
duration_minutes: 55
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 3: Key clinical events'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop09" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop09)"/>
  <g>
    <circle cx="700" cy="95" r="26" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="120" r="20" fill="#818cf8" opacity="0.09"/>
    <circle cx="850" cy="100" r="32" fill="#818cf8" opacity="0.06"/>
    <circle cx="910" cy="170" r="18" fill="#818cf8" opacity="0.10"/>
    <line x1="640" y1="160" x2="1100" y2="230" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 9</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">PROCEDURE_OCCURRENCE</tspan>
    <tspan x="60" dy="42">Procedures & Surgery</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Key clinical events</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**PROCEDURE_OCCURRENCE** records all procedures, surgeries, and medical interventions performed on a patient. From simple blood pressure measurements to complex open heart surgery — it's all standardized in this table. The lesson will help you understand when to use PROCEDURE, when to use MEASUREMENT or DRUG.

---

## 1. Table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `procedure_occurrence_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | Patients |
| `procedure_concept_id` | INTEGER | ✅ | Standard Concept |
| `procedure_date` | DATE | ✅ | Implementation date |
| `procedure_datetime` | DATETIME | | Date and time |
| `procedure_end_date` | DATE | | End date (new CDM 5.4) |
| `procedure_end_datetime` | DATETIME | | Closing time |
| `procedure_type_concept_id` | INTEGER | ✅ | Data source |
| `modifier_concept_id` | INTEGER | | Add (left/right, 2nd...) |
| `quantity` | INTEGER | | Number of executions |
| `provider_id` | INTEGER | FK | Doctor performed |
| `visit_occurrence_id` | INTEGER | FK | Related Visit |
| `visit_detail_id` | INTEGER | FK | Visit details |
| `procedure_source_value` | VARCHAR(50) | | Original code |
| `procedure_source_concept_id` | INTEGER | | Original concept |
| `modifier_source_value` | VARCHAR(50) | | Original Modifier |

**New in CDM 5.4:** `procedure_end_date` and `procedure_end_datetime` — important for surgery that lasts many hours/days.

---

## 2. Vocabulary for Procedure

### 2.1. Popular vocabulary

| Vocabulary | Role | Example |
|-----------|---------|-------|
| **SNOMED CT** | Standard concept | Appendectomy (44783086) |
| **CPT4** | US billing code | 44970 (Laparoscopic appendectomy) |
| **ICD-10-PCS** | US inpatient procedures | 0DTJ4ZZ |
| **ICD-9-Proc** | Legacy US procedures | 47.01 |
| **HCPCS** | US outpatient services | G0101 |

### 2.2. Domain routing rules

```
  ICD-10-PCS mã = '0DTJ4ZZ' (Lapar appendectomy)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 44783086
  concept_name = 'Laparoscopic appendectomy'
  domain_id = 'Procedure'
       │
       └──→ Lưu vào PROCEDURE_OCCURRENCE ✓


  CPT4 mã = '80053' (Basic metabolic panel)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 3019897
  domain_id = 'Measurement'
       │
       └──→ Lưu vào MEASUREMENT ✗ (không phải Procedure!)
```

> **Golden Rule:** Always check the domain_id of Standard Concept. Even though the source code is CPT4 (procedure code), if Standard Concept has domain = Measurement, it must be saved in MEASUREMENT.

---

## 3. Procedure vs Measurement vs Drug — Boundaries

| Original data | Where? | Reason |
|-------------|--------|-------|
| Appendicitis surgery | **PROCEDURE** | Domain = Procedure |
| Abdominal ultrasound | **PROCEDURE** | Domain = Procedure (imaging) |
| Blood test (result 5.8 mmol/L) | **MEASUREMENT** | Has a measurement value → Measurement |
| Cardiopulmonary X-ray (no results) | **PROCEDURE** | Imaging → Procedure |
| Insulin injection | **DRUG_EXPOSURE** | Drug administration |
| Colonoscopy + biopsy | **PROCEDURE** | Procedural intervention |
| Physical therapy 30 minutes | **PROCEDURE** | Procedure domain |
| Blood transfusion | **PROCEDURE** | Transfusion = Procedure |

---

## 4. modifier_concept_id — Additional information

| Concept ID | Modifiers | Meaning |
|-----------|----------|---------|
| 4148525 | Left | Left |
| 4149625 | Right | Right |
| 4236436 | Bilateral | Both sides |
| 4215561 | Initial encounter | First time |
| 4215562 | Subsequent encounter | Re-examination |

```sql
-- Phẫu thuật cắt ruột thừa nội soi (bên phải)
INSERT INTO procedure_occurrence (
    procedure_occurrence_id, person_id, procedure_concept_id,
    procedure_date, procedure_end_date,
    procedure_type_concept_id,
    modifier_concept_id, quantity,
    provider_id, visit_occurrence_id,
    procedure_source_value
) VALUES (
    90001, 100001, 44783086,          -- SNOMED: Lapar appendectomy
    '2024-06-15', '2024-06-15',
    32817,                             -- EHR
    4149625, 1,                        -- Right side, 1 time
    5001, 50001,
    '0DTJ4ZZ'                          -- ICD-10-PCS
);
```

---

## 5. ETL VN data

### 5.1. Popular data sources

| Source | Description | Original Vocabulary |
|-------|-------|----------------|
| List of hospital technical services | BV technical services | Internal code |
| ICD-9-CM Proc | Old surgery code | ICD9Proc |
| List of social insurance | Social insurance service code | Internal insurance code |

### 5.2. SQL ETL

```sql
SELECT
    ROW_NUMBER() OVER() AS procedure_occurrence_id,
    pm.person_id,
    COALESCE(cr.concept_id_2, 0) AS procedure_concept_id,
    tt.ngay_thuchien AS procedure_date,
    tt.ngay_ketthuc AS procedure_end_date,
    32817 AS procedure_type_concept_id,
    0 AS modifier_concept_id,
    tt.so_lan AS quantity,
    tt.ma_dvkt AS procedure_source_value,
    COALESCE(c_source.concept_id, 0) AS procedure_source_concept_id
FROM thuthuat_his tt
JOIN person_mapping pm ON tt.ma_bn = pm.source_id
LEFT JOIN source_to_concept_map stcm
    ON tt.ma_dvkt = stcm.source_code
    AND stcm.source_vocabulary_id = 'VN_PROCEDURE'
LEFT JOIN concept c_std
    ON stcm.target_concept_id = c_std.concept_id
    AND c_std.standard_concept = 'S'
    AND c_std.domain_id = 'Procedure'   -- ← Chỉ Procedure domain!
LEFT JOIN concept c_source
    ON tt.ma_dvkt = c_source.concept_code
LEFT JOIN concept_relationship cr
    ON c_source.concept_id = cr.concept_id_1
    AND cr.relationship_id = 'Maps to';
```

### 5.3. Handles domain routing

```sql
-- DVKT "Xét nghiệm HbA1c" → mã CPT 83036
-- Standard concept domain = Measurement → KHÔNG lưu vào PROCEDURE

-- Bước 1: Tìm Standard Concept
SELECT c.*
FROM concept c
JOIN concept_relationship cr ON c.concept_id = cr.concept_id_2
    AND cr.relationship_id = 'Maps to'
JOIN concept c_src ON cr.concept_id_1 = c_src.concept_id
WHERE c_src.concept_code = '83036'
  AND c_src.vocabulary_id = 'CPT4';
-- domain_id = 'Measurement' → route sang MEASUREMENT table

-- Bước 2: Lưu vào đúng bảng
-- Nếu domain = 'Procedure' → procedure_occurrence
-- Nếu domain = 'Measurement' → measurement
-- Nếu domain = 'Observation' → observation
-- Nếu domain = 'Drug' → drug_exposure
```

---

## 6. SQL analysis

```sql
-- Top 10 thủ thuật phổ biến
SELECT
    c.concept_name AS procedure_name,
    COUNT(*) AS procedure_count,
    COUNT(DISTINCT po.person_id) AS patient_count
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id != 0
GROUP BY c.concept_name
ORDER BY procedure_count DESC
LIMIT 10;

-- Thống kê phẫu thuật theo tháng
SELECT
    DATE_TRUNC('month', po.procedure_date) AS month,
    c.concept_name AS procedure_name,
    COUNT(*) AS total
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id = 44783086  -- Appendectomy
GROUP BY month, c.concept_name
ORDER BY month;

-- BN có cả chẩn đoán + phẫu thuật liên quan
SELECT
    po.person_id,
    co_cond.concept_name AS diagnosis,
    co_proc.concept_name AS procedure_name,
    co.condition_start_date,
    po.procedure_date
FROM procedure_occurrence po
JOIN condition_occurrence co ON po.person_id = co.person_id
    AND po.visit_occurrence_id = co.visit_occurrence_id
JOIN concept co_cond ON co.condition_concept_id = co_cond.concept_id
JOIN concept co_proc ON po.procedure_concept_id = co_proc.concept_id
WHERE co.condition_concept_id = 441604    -- Appendicitis
  AND po.procedure_concept_id = 44783086  -- Appendectomy
LIMIT 20;
```

---

## Summary

1. **PROCEDURE_OCCURRENCE** = procedure, surgery, intervention, imaging
2. Main Standard Vocabulary: **SNOMED CT**
3. **Domain routing** is extremely important: CPT4 code can be mapped to Measurement, not Procedure
4. CDM 5.4 adds **procedure_end_date** for extended surgery
5. **modifier_concept_id** for left/right, initial/revisit
6. ETL VN: internal accounting service code → SOURCE_TO_CONCEPT_MAP → Standard SNOMED

**Next article:** MEASUREMENT — tests, measurements, and numerical values.

---

## References

- [OMOP CDM 5.4 — PROCEDURE_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#PROCEDURE_OCCURRENCE)
- [Athena — Procedure Domain](https://athena.ohdsi.org/)
