---
id: 019f1a00-a105-7b01-e001-omopcdm54005
title: 'Lesson 5: OBSERVATION_PERIOD — Patient monitoring period'
slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
description: >-
  What is the meaning of OBSERVATION_PERIOD, why is this table required, how to
  determine start/end date from source data, how it affects incidence/prevalence
  calculations, and ETL conventions.
duration_minutes: 45
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Person & Visit — Data platform'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop05" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop05)"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 5</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION_PERIOD — Approx</tspan>
    <tspan x="60" dy="42">patient follow-up time</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Person & Visit — Data platform</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**OBSERVATION_PERIOD** is a table that many newbies overlook — but it's extremely important. This table answers the question: **"Since when do we have data about this patient?"**

If the patient does not have OBSERVATION_PERIOD, we cannot distinguish: "the patient is not sick" or "the patient is sick but does not come for examination (so there is no data)".

---

## 1. Why is OBSERVATION_PERIOD needed?

### 1.1. The "absence vs missing" problem

```
  Bệnh nhân Lan:
  ├── 2020-01-10: Khám → chẩn đoán Tiểu đường
  ├── 2020-06-15: Tái khám
  ├── 2021-01-20: Tái khám
  ├── (im lặng 2 năm)
  └── 2023-03-10: Nhập viện → Suy tim

  Câu hỏi: Từ 2021-01 đến 2023-03, Lan có khỏe mạnh
  hay chuyển sang bệnh viện khác?
```

**OBSERVATION_PERIOD** indicates how long the patient was "in view" of the data source:

```
  Observation Period:
  ┌──────────────────────────────────────────────────────────────┐
  │  2020-01-10 ════════════════════════ 2021-12-31             │
  │  (Có BHYT tại BV này)                                       │
  └──────────────────────────────────────────────────────────────┘
  
  ┌──────────────────────────────────────────────────────────────┐
  │  2023-01-01 ════════════════════════ 2024-06-30             │
  │  (Quay lại BV, có BHYT mới)                                │
  └──────────────────────────────────────────────────────────────┘

  → Trong observation period: không có Condition = bệnh nhân KHÔNG bị
  → Ngoài observation period: không có Condition = KHÔNG BIẾT
```

### 1.2. Impact on analysis

| Analysis | No OP | Yes OP |
|-----------|-------------|-------|
| **Incidence rate** | Incorrect (incorrect denominator) | Correct (know person-time at risk) |
| **Prevalence** | Wrong (not enough count) | True (know total population) |
| **Survival analysis** | Don't know censoring time | Accurate time-to-event |
| **Cohort entry** | Can select patients outside the data | Select only BN in OP |

---

## 2. Table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `observation_period_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | PERSON Reference |
| `observation_period_start_date` | DATE | ✅ | Data start date |
| `observation_period_end_date` | DATE | ✅ | End date with data |
| `period_type_concept_id` | INTEGER | ✅ | Origin determines OP |

### 2.1. period_type_concept_id

| Concept ID | Concept Name | Description |
|-----------|--------------|-------|
| 32817 | EHR | Determine from EHR records |
| 32810 | Claim | Determine the word claims/health insurance |
| 44814724 | Period covering healthcare encounters | From encounters |
| 44814725 | Period inferred by algorithm | Inference algorithm |

---

## 3. How to determine Observation Period

### 3.1. From claims/insurance data

```
  BHXH cấp thẻ BHYT:
  ┌─────────────────────────────────────────┐
  │ Mã thẻ: DN-123456  Hiệu lực: 01/2020   │
  │ BV đăng ký: Chợ Rẫy  Hết hạn: 12/2024  │
  └─────────────────────────────────────────┘

  → observation_period_start_date = 2020-01-01
  → observation_period_end_date   = 2024-12-31
  → period_type_concept_id = 32810 (Claim)
```

### 3.2. From EHR data

When there is no clear insurance information, count from **first to last encounter/visit**:

```sql
-- Tính OP từ visits
SELECT
    person_id,
    MIN(visit_start_date) AS observation_period_start_date,
    MAX(COALESCE(visit_end_date, visit_start_date))
        AS observation_period_end_date,
    32817 AS period_type_concept_id  -- EHR
FROM visit_occurrence
GROUP BY person_id;
```

### 3.3. A patient can have multiple Observation Periods

```
  Bệnh nhân person_id = 100001:

  OP 1: ═══════════ (2018-01-01 → 2019-06-30)
          Có BHYT tại BV A

                  Gap (6 tháng, không có dữ liệu)

  OP 2: ═══════════════════ (2020-01-01 → 2024-12-31)
          Có BHYT mới tại BV A

  → 2 records trong OBSERVATION_PERIOD
```

```sql
INSERT INTO observation_period VALUES
    (1, 100001, '2018-01-01', '2019-06-30', 32810),
    (2, 100001, '2020-01-01', '2024-12-31', 32810);
```

---

## 4. Important rule

### 4.1. All clinical events must be within the Observation Period

```
  OP: ════════════════════════════════════
  2020-01-01                        2024-12-31

      ✅ Visit 2020-03-15 (trong OP)
      ✅ Condition 2022-06-10 (trong OP)
      ❌ Drug Exposure 2019-05-10 (NGOÀI OP!) → Cảnh báo data quality
```

**ACHILLES data quality checks**: checks to see if there are any clinical events outside of OBSERVATION_PERIOD.

### 4.2. Observation Periods cannot overlap

Given the same person_id, OPs must be **chronological order, no overlap**:

```
  ✅ ĐÚng:
  OP1: ═══════    OP2: ═══════════
  2018-01  2019-06    2020-01  2024-12

  ❌ SAI (overlap):
  OP1: ═══════════════
  OP2:       ═══════════════
```

### 4.3. Special convention

| Situation | Processing |
|-----------|-------|
| The patient only came once | start_date = end_date = examination date |
| Patient died | end_date = death date |
| Gap < 32 days (Claim) | Usually combined into 1 OP |
| Many sources overlap | Combined into the largest OP |

---

## 5. Application in analysis

### 5.1. Calculate Person-Time at Risk

```sql
-- Tổng thời gian theo dõi (person-years)
SELECT
    SUM(
        observation_period_end_date - observation_period_start_date
    ) / 365.25 AS total_person_years
FROM observation_period;

-- Person-time cho incidence rate
SELECT
    p.gender_concept_id,
    SUM(
        op.observation_period_end_date - op.observation_period_start_date
    ) / 365.25 AS person_years
FROM observation_period op
JOIN person p ON op.person_id = p.person_id
GROUP BY p.gender_concept_id;
```

### 5.2. Filter patients with "sufficient data"

```sql
-- Chỉ chọn BN có ≥ 1 năm follow-up
SELECT person_id
FROM observation_period
WHERE observation_period_end_date - observation_period_start_date >= 365
GROUP BY person_id;
```

### 5.3. Check data quality

```sql
-- Find events outside the observation period
SELECT
    'CONDITION' AS event_type,
    co.person_id,
    co.condition_start_date AS event_date
FROM condition_occurrence co
LEFT JOIN observation_period op
    ON co.person_id = op.person_id
    AND co.condition_start_date
        BETWEEN op.observation_period_start_date
            AND op.observation_period_end_date
WHERE op.observation_period_id IS NULL;
```

---

## 6. Complete example

```sql
-- OBSERVATION_PERIOD for Vietnamese hospitals
INSERT INTO observation_period (
    observation_period_id,
    person_id,
    observation_period_start_date, observation_period_start_date
    observation_period_end_date, observation_period_end_date
    period_type_concept_id
) VALUES
    -- Patient 100001: has health insurance from 2020 to 2024
    (1, 100001, '2020-01-01', '2024-12-31', 32810),
    -- Patient 100002: visited 3 times in 2023
    (2, 100002, '2023-02-15', '2023-11-20', 32817),
    -- Patient 100003: 2 different stages
    (3, 100003, '2019-03-10', '2020-06-30', 32817),
    (4, 100003, '2022-01-15', '2024-06-30', 32817);
```

---

## Summary

1. **OBSERVATION_PERIOD** = the amount of time the patient "has data" in the system
2. Distinguishing **"not sick"** vs **"no data"**
3. **Required** for every person — requires at least 1 OP per person
4. **No overlap** between OPs with the same person_id
5. **All clinical events** must be in the OP
6. **Main application**: calculate person-time, incidence rate, prevalence, cohort definition

**Next article:** VISIT_OCCURRENCE & VISIT_DETAIL — how OMOP CDM records each patient contact with the healthcare system.

---

## References

- [OMOP CDM 5.4 — OBSERVATION_PERIOD](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION_PERIOD)
- [The Book of OHDSI — Observation Periods](https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html)
