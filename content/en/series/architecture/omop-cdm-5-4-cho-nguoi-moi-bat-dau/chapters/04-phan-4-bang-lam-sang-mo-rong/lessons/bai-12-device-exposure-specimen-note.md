---
id: 019f1a00-a112-7b01-e001-omopcdm54012
title: 'Lesson 12: DEVICE_EXPOSURE, SPECIMEN & NOTE'
slug: bai-12-device-exposure-specimen-note
description: >-
  Three additional clinical tables: DEVICE_EXPOSURE for medical devices (stent,
  pacemaker), SPECIMEN for specimens (blood, tissue), NOTE and NOTE_NLP for
  clinical notes and NLP processing.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 4: Expanded clinical table'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop12)"/>
  <g>
    <circle cx="680" cy="90" r="24" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="110" r="18" fill="#818cf8" opacity="0.09"/>
    <circle cx="840" cy="130" r="32" fill="#818cf8" opacity="0.06"/>
    <line x1="620" y1="160" x2="1100" y2="240" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 12</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DEVICE_EXPOSURE,</tspan>
    <tspan x="60" dy="42">SPECIMEN & NOTES</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Expanded clinical table</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

This article introduces three additional clinical tables: **DEVICE_EXPOSURE** (implantable/patient-mounted medical device), **SPECIMEN** (specimen used for testing), and **NOTE / NOTE_NLP** (free-text clinical notes). Although less common than Condition/Drug/Procedure, they are increasingly important in research.

---

## 1. DEVICE_EXPOSURE — Medical equipment

### 1.1. Table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `device_exposure_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | Patients |
| `device_concept_id` | INTEGER | ✅ | Standard Concept |
| `device_exposure_start_date` | DATE | ✅ | Start date |
| `device_exposure_start_datetime` | DATETIME | | |
| `device_exposure_end_date` | DATE | | Expiration/removal date |
| `device_exposure_end_datetime` | DATETIME | | |
| `device_type_concept_id` | INTEGER | ✅ | Data source |
| `unique_device_id` | VARCHAR(255) | | Unique Device Identifier (UDI) |
| `production_id` | VARCHAR(255) | | ⭐ New CDM 5.4 |
| `quantity` | INTEGER | | Quantity |
| `provider_id` | INTEGER | FK | Doctor |
| `visit_occurrence_id` | INTEGER | FK | Visit |
| `visit_detail_id` | INTEGER | FK | |
| `device_source_value` | VARCHAR(50) | | |
| `device_source_concept_id` | INTEGER | | |
| `unit_concept_id` | INTEGER | | ⭐ New CDM 5.4 |
| `unit_source_value` | VARCHAR(50) | | ⭐ New CDM 5.4 |
| `unit_source_concept_id` | INTEGER | | ⭐ New CDM 5.4 |

### 1.2. For example

| Equipment | Concepts | Example |
|--------|---------|-------|
| Coronary stent | 4138390 | Stent placement after intervention |
| Pacemaker | 4051938 | Pacemaker |
| Endotracheal tube | 4097216 | Intubation during surgery |
| Eyeglasses | 4175440 | Prescribing glasses |
| Hearing aids | 4023396 | Hearing aid level |
| Acupuncture needles | 0 | Oriental medicine equipment (no mapping yet) |

```sql
-- Đặt stent mạch vành
INSERT INTO device_exposure (
    device_exposure_id, person_id, device_concept_id,
    device_exposure_start_date,
    device_type_concept_id,
    unique_device_id, quantity,
    provider_id, visit_occurrence_id,
    device_source_value
) VALUES (
    140001, 100001, 4138390,
    '2024-06-15',
    32817,
    '(01)00844588003288(17)141120(10)A213B1',
    2,                            -- 2 stent
    5001, 50001,
    'STENT_CORONARY'
);
```

### 1.3. CDM 5.4 — production_id

New in 5.4: `production_id` separate from `unique_device_id`, used for production identifier (serial number, lot number).

---

## 2. SPECIMEN — Patient sample

### 2.1. Table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `specimen_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | Patients |
| `specimen_concept_id` | INTEGER | ✅ | Sample type (SNOMED) |
| `specimen_type_concept_id` | INTEGER | ✅ | Data source |
| `specimen_date` | DATE | ✅ | Sampling date |
| `specimen_datetime` | DATETIME | | |
| `quantity` | FLOAT | | Sample quantity |
| `unit_concept_id` | INTEGER | | Unit (mL, g...) |
| `anatomic_site_concept_id` | INTEGER | | Sampling location |
| `disease_status_concept_id` | INTEGER | | Medical condition |
| `specimen_source_id` | VARCHAR(50) | | Original barcode |
| `specimen_source_value` | VARCHAR(50) | | Original model type |
| `unit_source_value` | VARCHAR(50) | | Original unit |
| `anatomic_site_source_value` | VARCHAR(50) | | Original location |
| `disease_status_source_value` | VARCHAR(50) | | Original state |

### 2.2. Popular model type

| specimen_concept_id | Sample Type | Vietnamese |
|--------------------|----------|-----------|
| 4045667 | Blood specimens | Blood sample |
| 4048506 | Urine specimen | Urine |
| 4002890 | Serum specimens | Serum |
| 4219166 | Tissue specimens | Tissue samples |
| 4045666 | Sputum specimens | Dam |
| 4260640 | Cerebrospinal fluid | Cerebrospinal fluid |
| 4000626 | Bone marrow | Bone marrow |

### 2.3. Specimen → Measurement link

```sql
-- Mẫu máu lấy ngày 15/6
INSERT INTO specimen VALUES (
    150001, 100001, 4045667,      -- Blood specimen
    32817, '2024-06-15', NULL,
    5, 8587,                      -- 5 mL
    4236402,                      -- Antecubital vein
    NULL, 'BARCODE_123456',
    'MAU_MAU', 'mL', 'tinh_mach_khuu_tay', NULL
);

-- Xét nghiệm Glucose từ mẫu máu này
-- (liên kết qua person_id + measurement_date + logic ETL)
```

> **Note:** SPECIMEN does not have a direct FK to MEASUREMENT in CDM 5.4. Links are usually via person_id + date or via FACT_RELATIONSHIP.

---

## 3. NOTE — Clinical notes

### 3.1. NOTE table structure

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `note_id` | INTEGER | ✅ PK | Unique ID |
| `person_id` | INTEGER | ✅ FK | Patients |
| `note_date` | DATE | ✅ | Date of note |
| `note_datetime` | DATETIME | | |
| `note_type_concept_id` | INTEGER | ✅ | Note type |
| `note_class_concept_id` | INTEGER | ✅ | Classification |
| `note_title` | VARCHAR(250) | | Title |
| `note_text` | CLOB | ✅ | Content |
| `encoding_concept_id` | INTEGER | ✅ | Encoding (UTF-8) |
| `language_concept_id` | INTEGER | ✅ | Language |
| `provider_id` | INTEGER | FK | Doctor writes |
| `visit_occurrence_id` | INTEGER | FK | Visit |
| `visit_detail_id` | INTEGER | FK | |
| `note_source_value` | VARCHAR(50) | | |
| `note_event_id` | BIGINT | | ⭐ CDM 5.4 |
| `note_event_field_concept_id` | INTEGER | | ⭐ CDM 5.4 |

### 3.2. common note_class_concept_id

| Concept ID | Note Class | Vietnamese |
|-----------|-----------|-----------|
| 44814637 | Discharge summary | Discharge Summary |
| 44814638 | Emergency department note | Emergency notes |
| 44814639 | Inpatient note | Boarding Notes |
| 44814640 | Outpatient note | Outpatient Notes |
| 44814641 | Pathology report | Pathological results |
| 44814642 | Radiology report | X-ray/CT results |
| 44814643 | Surgical notes | Surgical records |

### 3.3. For example

```sql
-- Tóm tắt xuất viện
INSERT INTO note (
    note_id, person_id, note_date,
    note_type_concept_id, note_class_concept_id,
    note_title, note_text,
    encoding_concept_id, language_concept_id,
    provider_id, visit_occurrence_id
) VALUES (
    160001, 100001, '2024-06-20',
    32817,                            -- EHR
    44814637,                         -- Discharge summary
    'TÓM TẮT XUẤT VIỆN',
    'Bệnh nhân nam, 55 tuổi, nhập viện vì đau ngực. '
    || 'Chẩn đoán: Nhồi máu cơ tim cấp. '
    || 'Đã can thiệp mạch vành, đặt 2 stent. '
    || 'Xuất viện ngày 20/06/2024 với đơn thuốc: '
    || 'Aspirin 81mg, Clopidogrel 75mg, Atorvastatin 40mg. '
    || 'Tái khám sau 1 tháng.',
    32678,                            -- UTF-8
    4181730,                          -- Vietnamese
    5001, 50001
);
```

---

## 4. NOTE_NLP — NLP processing results

| Column | Type | Required | Description |
|-----|-------|----------|-------|
| `note_nlp_id` | BIGINT | ✅ PK | ID |
| `note_id` | INTEGER | ✅ FK | Original Note |
| `section_concept_id` | INTEGER | | Section (HPI, Assessment...) |
| `snippet` | VARCHAR(250) | | Excerpted text |
| `offset` | VARCHAR(50) | | Location in note |
| `lexical_variant` | VARCHAR(250) | ✅ | Root word/phrase |
| `note_nlp_concept_id` | INTEGER | ✅ | Concept discovery |
| `note_nlp_source_concept_id` | INTEGER | | |
| `nlp_system` | VARCHAR(250) | | Name NLP tool |
| `nlp_date` | DATE | ✅ | NLP Run Day |
| `nlp_datetime` | DATETIME | | |
| `term_exists` | VARCHAR(1) | | Y/N — confirm or deny |
| `term_temporal` | VARCHAR(50) | | Past/Present/Future |
| `term_modifiers` | VARCHAR(2000) | | Modifier (negation, family...) |

```sql
-- NLP phát hiện "Nhồi máu cơ tim" từ tóm tắt xuất viện
INSERT INTO note_nlp (
    note_nlp_id, note_id,
    snippet, offset, lexical_variant,
    note_nlp_concept_id,
    nlp_system, nlp_date,
    term_exists, term_temporal
) VALUES (
    170001, 160001,
    'Chẩn đoán: Nhồi máu cơ tim cấp',
    '120-153',
    'nhồi máu cơ tim cấp',
    4329847,                          -- SNOMED: AMI
    'cTAKES-VN', '2024-07-01',
    'Y',                              -- Có (không phải negation)
    'Present'                         -- Hiện tại
);
```

---

## 5. When to use which table?

```
  Dữ liệu gốc
       │
       ├── Thiết bị gắn/cấy trên BN ──→ DEVICE_EXPOSURE
       │   (stent, pacemaker, kính)
       │
       ├── Mẫu bệnh phẩm ──────────→ SPECIMEN
       │   (máu, nước tiểu, mô)
       │
       ├── Văn bản tự do ───────────→ NOTE
       │   (tóm tắt xuất viện,
       │    biên bản phẫu thuật)
       │
       └── Kết quả NLP từ NOTE ─────→ NOTE_NLP
           (concepts phát hiện tự động)
```

---

## Summary

1. **DEVICE_EXPOSURE**: implanted/attached medical device, uses UDI for tracing
2. **SPECIMEN**: patient sample, indirectly linked to MEASUREMENT
3. **NOTE**: free text clinical notes, Vietnamese language support
4. **NOTE_NLP**: NLP analysis results, automatic concept detection
5. CDM 5.4 added `production_id` (Device), `note_event_id` (Note)

**Next article:** DEATH, EPISODE & EPISODE_EVENT — special events.

---

## References

- [OMOP CDM 5.4 — DEVICE_EXPOSURE](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEVICE_EXPOSURE)
- [OMOP CDM 5.4 — SPECIMEN](https://ohdsi.github.io/CommonDataModel/cdm54.html#SPECIMEN)
- [OMOP CDM 5.4 — NOTE](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE)
- [OMOP CDM 5.4 — NOTE_NLP](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE_NLP)
