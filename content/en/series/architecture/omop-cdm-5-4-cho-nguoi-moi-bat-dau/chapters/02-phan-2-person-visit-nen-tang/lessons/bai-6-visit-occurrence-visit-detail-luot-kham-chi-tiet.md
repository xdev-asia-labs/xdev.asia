---
id: 019f1a00-a106-7b01-e001-omopcdm54006
title: 'Lesson 6: VISIT_OCCURRENCE & VISIT_DETAIL — Visits & Details'
slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
description: >-
  Visit types (Inpatient, Outpatient, ER, Telehealth), VISIT_OCCURRENCE,
  VISIT_DETAIL structures for details in a visit, admitted_from/discharged_to,
  and Visit-Event relationships in the OMOP model.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Person & Visit — Data platform'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop06" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop06)"/>
  <g>
    <circle cx="659" cy="87" r="22" fill="#818cf8" opacity="0.12"/>
    <circle cx="718" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="777" cy="125" r="36" fill="#818cf8" opacity="0.06"/>
    <circle cx="836" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 6</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">VISIT_OCCURRENCE & VISIT_DETAIL</tspan>
    <tspan x="60" dy="42">Visits & Details</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Person & Visit — Data platform</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**VISIT_OCCURRENCE** records every patient contact with the healthcare system — from outpatient visits, hospitalizations, emergency departments, to telehealth. **VISIT_DETAIL** adds more detail: during one hospitalization, the patient can be transferred to many departments.

These two tables are the **bridge** between PERSON and all clinical events.

---

## 1. VISIT_OCCURRENCE — Structure

### 1.1. Column list

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `visit_occurrence_id` | INTEGER | ✅ PK | Unique ID for each visit |
| `person_id` | INTEGER | ✅ FK | PERSON Reference |
| `visit_concept_id` | INTEGER | ✅ | Type of visit (Standard Concept) |
| `visit_start_date` | DATE | ✅ | Start date |
| `visit_start_datetime` | DATETIME | | Start date and time |
| `visit_end_date` | DATE | ✅ | End date |
| `visit_end_datetime` | DATETIME | | End date and time |
| `visit_type_concept_id` | INTEGER | ✅ | Data source (EHR, Claim...) |
| `provider_id` | INTEGER | FK | Doctor in charge |
| `care_site_id` | INTEGER | FK | Medical facilities |
| `visit_source_value` | VARCHAR(50) | | Original visit code |
| `visit_source_concept_id` | INTEGER | | Original concept |
| `admitted_from_concept_id` | INTEGER | | Where do you come from (Home, ER...) |
| `admitted_from_source_value` | VARCHAR(50) | | Original value |
| `discharged_to_concept_id` | INTEGER | | Where to go after leaving the hospital |
| `discharged_to_source_value` | VARCHAR(50) | | Original value |
| `preceding_visit_occurrence_id` | INTEGER | FK | Previous Visit |

### 1.2. Important types of Visits

| visit_concept_id | Concept Name | Description VN |
|-----------------|-------------|-----------|
| 9201 | **Inpatient Visit** | Inpatient hospitalization |
| 9202 | **Outpatient Visit** | Outpatient examination |
| 9203 | **Emergency Room Visit** | First aid |
| 262 | **Emergency Room and Inpatient Visit** | Emergency → Hospitalization |
| 581477 | **Telehealth** | Remote examination |
| 32693 | **Pharmacy visit** | Get medicine at the pharmacy |
| 581476 | **Home Visit** | Home examination |
| 38004515 | **Laboratory Visit** | Just come for testing |

---

## 2. Example: Patient admitted to hospital

```
  Bệnh nhân 100001: Nhập viện 10 ngày tại BV Chợ Rẫy
  
  ┌──────────────── VISIT_OCCURRENCE ────────────────┐
  │ visit_occurrence_id = 50001                       │
  │ person_id = 100001                                │
  │ visit_concept_id = 9201 (Inpatient Visit)         │
  │ visit_start_date = 2024-06-10                     │
  │ visit_end_date = 2024-06-20                       │
  │ admitted_from_concept_id = 581476 (Home)           │
  │ discharged_to_concept_id = 581476 (Home)           │
  │ care_site_id = 2001 (BV Chợ Rẫy)                │
  └───────────────────────────────────────────────────┘
      │
      │  Trong visit này có các events:
      │
      ├── CONDITION: Tiểu đường type 2 (chẩn đoán chính)
      ├── CONDITION: Tăng huyết áp (chẩn đoán phụ)
      ├── DRUG: Metformin 500mg x 20 viên
      ├── DRUG: Amlodipine 5mg x 10 viên
      ├── MEASUREMENT: HbA1c = 8.2%
      ├── MEASUREMENT: Creatinine = 1.2 mg/dL
      ├── PROCEDURE: Siêu âm bụng
      └── OBSERVATION: Tiền sử hút thuốc
```

```sql
INSERT INTO visit_occurrence VALUES (
    50001,                -- visit_occurrence_id
    100001,               -- person_id
    9201,                 -- visit_concept_id (Inpatient)
    '2024-06-10',         -- visit_start_date
    '2024-06-10 08:30:00', -- visit_start_datetime
    '2024-06-20',         -- visit_end_date
    '2024-06-20 14:00:00', -- visit_end_datetime
    32817,                -- visit_type_concept_id (EHR)
    5001,                 -- provider_id
    2001,                 -- care_site_id
    'MNV-2024-50001',     -- visit_source_value
    0,                    -- visit_source_concept_id
    581476,               -- admitted_from_concept_id (Home)
    'Nhà',                -- admitted_from_source_value
    581476,               -- discharged_to_concept_id (Home)
    'Nhà',                -- discharged_to_source_value
    NULL                  -- preceding_visit_occurrence_id
);
```

---

## 3. VISIT_DETAIL — Details in Visit

### 3.1. When is VISIT_DETAIL needed?

VISIT_DETAIL captures **sub-details** in a VISIT_OCCURRENCE. Especially useful for **inpatient hospitalization** when the patient is transferred to multiple departments:

```
  VISIT_OCCURRENCE (Inpatient, 10 ngày):
  ═══════════════════════════════════════════════════
  
  VISIT_DETAIL (chi tiết):
  ├── Cấp cứu (10/06, 2 giờ)
  │   ═══
  ├── Khoa Nội tiết (10/06 → 15/06, 5 ngày)
  │   ═══════════════════
  ├── ICU (15/06 → 17/06, 2 ngày)
  │   ═══════
  └── Khoa Nội tiết (17/06 → 20/06, 3 ngày)
      ═══════════
```

### 3.2. VISIT_DETAIL structure

| Column | Type | Description |
|-----|--------|-------|
| `visit_detail_id` | INTEGER | PK |
| `person_id` | INTEGER | FK → PERSON |
| `visit_detail_concept_id` | INTEGER | Detail type (Department, Ward...) |
| `visit_detail_start_date` | DATE | Start date at the department |
| `visit_detail_end_date` | DATE | Date of leaving the department |
| `visit_detail_type_concept_id` | INTEGER | Data source |
| `provider_id` | INTEGER | Doctor in charge of the department |
| `care_site_id` | INTEGER | Specific departments/departments |
| `visit_occurrence_id` | INTEGER | **FK → VISIT_OCCURRENCE** (parent) |
| `visit_detail_parent_id` | INTEGER | FK → VISIT_DETAIL (parent detail) |
| `admitted_from_concept_id` | INTEGER | Where to transfer from |
| `discharged_to_concept_id` | INTEGER | Where to move |
| `visit_detail_source_value` | VARCHAR(50) | Original value |

### 3.3. For example

```sql
-- Visit Detail cho chuyển khoa
INSERT INTO visit_detail VALUES
    -- Cấp cứu (2 giờ)
    (1, 100001, 9203, '2024-06-10', '2024-06-10', 32817,
     5002, 2010, 50001, NULL, 581476, NULL, 'ED'),
    -- Khoa Nội tiết (5 ngày)
    (2, 100001, 9201, '2024-06-10', '2024-06-15', 32817,
     5003, 2020, 50001, 1, NULL, NULL, 'NOI_TIET'),
    -- ICU (2 ngày)
    (3, 100001, 32037, '2024-06-15', '2024-06-17', 32817,
     5004, 2030, 50001, 2, NULL, NULL, 'ICU'),
    -- Quay lại Nội tiết (3 ngày)
    (4, 100001, 9201, '2024-06-17', '2024-06-20', 32817,
     5003, 2020, 50001, 3, NULL, 581476, 'NOI_TIET');
```

---

## 4. Visit ↔ Clinical Events relationship

Every clinical event table has columns `visit_occurrence_id`:

```sql
-- Tìm tất cả events trong 1 visit
SELECT 'Conditions' AS type, COUNT(*) AS count
FROM condition_occurrence WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Drugs', COUNT(*)
FROM drug_exposure WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Measurements', COUNT(*)
FROM measurement WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Procedures', COUNT(*)
FROM procedure_occurrence WHERE visit_occurrence_id = 50001;
```

CDM 5.4 also added `visit_detail_id` enter multiple clinical tables — indicates which **department** the event occurred in during visit:

```sql
-- Xét nghiệm nào thực hiện tại ICU?
SELECT m.*
FROM measurement m
JOIN visit_detail vd ON m.visit_detail_id = vd.visit_detail_id
WHERE vd.care_site_id = 2030;  -- ICU
```

---

## 5. preceding_visit_occurrence_id — String visits

Column `preceding_visit_occurrence_id` create **linked list** between visits:

```
  Visit 1 (2024-01-15, Outpatient)
      │
      └──→ Visit 2 (2024-03-20, Outpatient)
               │    preceding_visit_occurrence_id = Visit 1
               └──→ Visit 3 (2024-06-10, Inpatient)
                        preceding_visit_occurrence_id = Visit 2
```

```sql
-- Timeline visits của 1 bệnh nhân
WITH RECURSIVE visit_chain AS (
    SELECT visit_occurrence_id, visit_start_date,
           visit_concept_id, preceding_visit_occurrence_id, 1 AS seq
    FROM visit_occurrence
    WHERE person_id = 100001 AND preceding_visit_occurrence_id IS NULL
    UNION ALL
    SELECT vo.visit_occurrence_id, vo.visit_start_date,
           vo.visit_concept_id, vo.preceding_visit_occurrence_id, vc.seq + 1
    FROM visit_occurrence vo
    JOIN visit_chain vc ON vo.preceding_visit_occurrence_id = vc.visit_occurrence_id
)
SELECT * FROM visit_chain ORDER BY seq;
```

---

## 6. ETL Conventions for Visit

### 6.1. General rules

| Rules | Details |
|--------|----------|
| 1 encounter = 1 visit | Each exposure = 1 VISIT_OCCURRENCE |
| Outpatient same day | Can be combined into 1 visit if same day + same facility |
| ER → Inpatient | Use concept 262 (ER and Inpatient Visit) |
| visit_end_date | If donation: end_date = start_date |
| If there is no visit | Create "dummy visit" concept_id = 0 |

### 6.2. ETL example for Vietnam Hospital

```sql
-- Mapping HIS VN → OMOP VISIT_OCCURRENCE
SELECT
    ROW_NUMBER() OVER() AS visit_occurrence_id,
    bn.person_id,
    CASE
        WHEN kc.loai_kham = 'NOI_TRU' THEN 9201   -- Inpatient
        WHEN kc.loai_kham = 'NGOAI_TRU' THEN 9202  -- Outpatient
        WHEN kc.loai_kham = 'CAP_CUU' THEN 9203    -- ER
        WHEN kc.loai_kham = 'KHAM_TU_XA' THEN 581477 -- Telehealth
        ELSE 0  -- Unknown
    END AS visit_concept_id,
    kc.ngay_vao AS visit_start_date,
    COALESCE(kc.ngay_ra, kc.ngay_vao) AS visit_end_date,
    32817 AS visit_type_concept_id,  -- EHR
    kc.ma_kham AS visit_source_value
FROM kcb_his kc
JOIN person_mapping bn ON kc.ma_bn = bn.source_id;
```

---

## 7. Commonly used analytical SQL

```sql
-- Phân bố loại visit
SELECT
    c.concept_name AS visit_type,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS pct
FROM visit_occurrence vo
JOIN concept c ON vo.visit_concept_id = c.concept_id
GROUP BY c.concept_name
ORDER BY count DESC;

-- Thời gian nằm viện trung bình (Length of Stay)
SELECT
    ROUND(AVG(visit_end_date - visit_start_date), 1) AS avg_los_days
FROM visit_occurrence
WHERE visit_concept_id = 9201;  -- Inpatient only

-- Số visit trung bình mỗi bệnh nhân
SELECT
    ROUND(AVG(visit_count), 1) AS avg_visits_per_patient
FROM (
    SELECT person_id, COUNT(*) AS visit_count
    FROM visit_occurrence
    GROUP BY person_id
) sub;
```

---

## Summary

1. **VISIT_OCCURRENCE** records each time the patient contacts the medical system
2. **Visit Type**: Inpatient (9201), Outpatient (9202), ER (9203), Telehealth (581477)
3. **VISIT_DETAIL**: department/room details in one visit (especially hospital admission)
4. **All clinical events** link to visit `visit_occurrence_id`
5. **preceding_visit_occurrence_id**: create a series of visits over time
6. **admitted_from / discharged_to**: tracking in-out patient flow

**Next article:** Start exploring the first clinical event — **CONDITION_OCCURRENCE** — diagnosis and pathology.

---

## References

- [OMOP CDM 5.4 — VISIT_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_OCCURRENCE)
- [OMOP CDM 5.4 — VISIT_DETAIL](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_DETAIL)
