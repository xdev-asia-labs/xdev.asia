---
id: 019f1a00-a111-7b01-e001-omopcdm54011
title: 'Lesson 11: OBSERVATION — General clinical events'
slug: bai-11-observation-su-kien-lam-sang-tong-hop
description: >-
  The OBSERVATION table records clinical events that are not part of Condition,
  Drug, Procedure, or Measurement. Medical history, lifestyle, allergies, family
  history, new observation_event_id CDM 5.4.
duration_minutes: 55
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Expanded clinical table'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop11)"/>
  <g>
    <circle cx="690" cy="80" r="22" fill="#818cf8" opacity="0.11"/>
    <circle cx="770" cy="120" r="30" fill="#818cf8" opacity="0.08"/>
    <circle cx="860" cy="105" r="25" fill="#818cf8" opacity="0.07"/>
    <line x1="630" y1="155" x2="1100" y2="235" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 11</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION</tspan>
    <tspan x="60" dy="42">Summary of clinical events</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Expanded clinical table</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

**OBSERVATION** is a "catch-all" table — the place to store any clinical events that do not match Condition, Drug, Procedure, or Measurement. Medical history, lifestyle (smoking, drinking), allergies, family history, marital status — it's all here.

---

## 1. Table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `observation_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | Patients |
| `observation_concept_id` | INTEGER | ✅ | Standard Concept |
| `observation_date` | DATE | ✅ | Record date |
| `observation_datetime` | DATETIME | | Date and time |
| `observation_type_concept_id` | INTEGER | ✅ | Data source |
| `value_as_number` | FLOAT | | Numeric value |
| `value_as_string` | VARCHAR(60) | | Text value |
| `value_as_concept_id` | INTEGER | | Category Value |
| `qualifier_concept_id` | INTEGER | | Additional context |
| `unit_concept_id` | INTEGER | | Unit |
| `provider_id` | INTEGER | FK | Provider records |
| `visit_occurrence_id` | INTEGER | FK | Related Visit |
| `visit_detail_id` | INTEGER | FK | Visit details |
| `observation_source_value` | VARCHAR(50) | | Original code |
| `observation_source_concept_id` | INTEGER | | Original concept |
| `unit_source_value` | VARCHAR(50) | | Original unit |
| `qualifier_source_value` | VARCHAR(50) | | Original Qualifier |
| `value_as_datetime` | DATETIME | | ⭐ CDM 5.4 |
| `observation_event_id` | BIGINT | | ⭐ CDM 5.4 |
| `obs_event_field_concept_id` | INTEGER | | ⭐ CDM 5.4 |

---

## 2. What to save in OBSERVATION?

### 2.1. List of use cases

| Use cases | observation_concept_id | value | Example |
|----------|---------------------|-------|-------|
| **Smoking** | 4275495 (Tobacco smoking) | value_as_concept_id | 4298794 (Current smoker) |
| **Allergy** | 439224 (Allergy) | value_as_concept_id | Drug/food concept |
| **Family history** | 4167217 (Family history of) | value_as_concept_id | Disease concept |
| **Marital status** | 4053609 (Marital status) | value_as_concept_id | 4338692 (Married) |
| **Blood type** | 4041671 (Blood type) | value_as_concept_id | 36308332 (Type O) |
| **Medical history** | 4214956 (History of) + condition concept | value_as_concept_id | |
| **Pregnancy** | 4299535 (Pregnancy) | value_as_concept_id | |
| **Profession** | 4019962 (Occupation) | value_as_string | "Teacher" |

### 2.2. OBSERVATION vs CONDITION — When to save where?

| Data | Table | Explanation |
|--------|-------|-----------|
| "Patients with type 2 diabetes" | **CONDITION** | Active disease |
| "Family history of diabetes" | **OBSERVATION** | Family history |
| "Patient had hepatitis B (recovered)" | **OBSERVATION** | History of |
| "Penicillin Allergy" | **OBSERVATION** | Allergy |
| "Patient has smoked for 20 years" | **OBSERVATION** | Lifestyle |
| "Fever 38.5°C" | **MEASUREMENT** | Has measurement value |

---

## 3. Detailed example

### 3.1. Smoking

```sql
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    observation_source_value
) VALUES (
    130001, 100001,
    4275495,                     -- Tobacco smoking behavior
    '2024-06-15', 32817,
    4298794,                     -- Current every day smoker
    'SMOKING_STATUS'
);
```

### 3.2. Drug allergy

```sql
-- Dị ứng Penicillin
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    qualifier_concept_id,
    observation_source_value
) VALUES (
    130002, 100001,
    439224,                      -- Allergy to substance
    '2024-06-15', 32817,
    1713332,                     -- Penicillin (RxNorm ingredient)
    4129512,                     -- Severe (qualifier)
    'ALLERGY_PENICILLIN'
);
```

### 3.3. Family history

```sql
-- Mẹ bị ung thư vú
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    qualifier_concept_id,
    observation_source_value
) VALUES (
    130003, 100001,
    4167217,                     -- Family history of clinical finding
    '2024-06-15', 32817,
    4112853,                     -- Malignant neoplasm of breast
    4166847,                     -- Mother (qualifier)
    'FHX_BREAST_CANCER_MOTHER'
);
```

---

## 4. observation_event_id — CDM 5.4

Similar to measurement_event_id, allows linking observations to other events.

```sql
-- Ghi nhận: "Lý do nhập viện: Đau ngực"
-- Liên kết với visit_occurrence_id = 50001
INSERT INTO observation (
    observation_id, person_id, observation_concept_id,
    observation_date, observation_type_concept_id,
    value_as_concept_id,
    observation_event_id,
    obs_event_field_concept_id
) VALUES (
    130004, 100001,
    4148832,                     -- Chief complaint
    '2024-06-15', 32817,
    77670,                       -- Chest pain
    50001,                       -- visit_occurrence_id
    1147082                      -- Field = visit_occurrence.visit_occurrence_id
);
```

---

## 5. qualifier_concept_id — Adds context

| Concept ID | Qualifier | Used for |
|-----------|-----------|---------|
| 4129512 | Severe | Severity level |
| 4148136 | Mild | Mild level |
| 4129511 | Moderate | Moderate level |
| 4166847 | Mother | Family relationships |
| 4166848 | Father | Family relationships |
| 4192403 | Sibling | Brother/sister |
| 4167233 | First degree relative | 1st degree relative |

---

## 6. VN data ETL

```sql
-- Tiền sử từ HIS
SELECT
    ROW_NUMBER() OVER() AS observation_id,
    pm.person_id,
    COALESCE(stcm.target_concept_id, 0) AS observation_concept_id,
    ts.ngay_ghinhan AS observation_date,
    32817 AS observation_type_concept_id,
    -- Map giá trị
    CASE ts.loai_tiensu
        WHEN 'HUT_THUOC' THEN
            CASE ts.gia_tri
                WHEN 'CO' THEN 4298794     -- Current smoker
                WHEN 'DA_BO' THEN 4144272  -- Former smoker
                WHEN 'KHONG' THEN 4144273  -- Never smoker
            END
        WHEN 'DI_UNG' THEN
            COALESCE(stcm_drug.target_concept_id, 0)
    END AS value_as_concept_id,
    ts.mo_ta AS value_as_string,
    ts.ma_tiensu AS observation_source_value
FROM tiensu_his ts
JOIN person_mapping pm ON ts.ma_bn = pm.source_id
LEFT JOIN source_to_concept_map stcm
    ON ts.loai_tiensu = stcm.source_code
    AND stcm.source_vocabulary_id = 'VN_OBS_TYPE'
LEFT JOIN source_to_concept_map stcm_drug
    ON ts.gia_tri = stcm_drug.source_code
    AND stcm_drug.source_vocabulary_id = 'VN_DRUG';
```

---

## 7. SQL analysis

```sql
-- Tỉ lệ hút thuốc theo giới tính
SELECT
    g.concept_name AS gender,
    s.concept_name AS smoking_status,
    COUNT(DISTINCT o.person_id) AS patients
FROM observation o
JOIN person p ON o.person_id = p.person_id
JOIN concept g ON p.gender_concept_id = g.concept_id
JOIN concept s ON o.value_as_concept_id = s.concept_id
WHERE o.observation_concept_id = 4275495  -- Tobacco smoking
GROUP BY g.concept_name, s.concept_name
ORDER BY g.concept_name, patients DESC;

-- Top dị ứng thuốc
SELECT
    c.concept_name AS allergen,
    COUNT(DISTINCT o.person_id) AS patients
FROM observation o
JOIN concept c ON o.value_as_concept_id = c.concept_id
WHERE o.observation_concept_id = 439224  -- Allergy
GROUP BY c.concept_name
ORDER BY patients DESC
LIMIT 10;
```

---

## Summary

1. **OBSERVATION** = "catch-all" table for data that is not part of a specialized table
2. Main use cases: smoking, allergies, family history, lifestyle, marriage
3. **qualifier_concept_id** adds context (level, relationship)
4. CDM 5.4: **observation_event_id** associated with another event
5. **Domain routing** decides Observation vs Condition vs Measurement

**Next article:** DEVICE_EXPOSURE, SPECIMEN & NOTE — medical devices, specimens, and clinical notes.

---

## References

- [OMOP CDM 5.4 — OBSERVATION](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION)
- [Athena — Observation Domain](https://athena.ohdsi.org/)
