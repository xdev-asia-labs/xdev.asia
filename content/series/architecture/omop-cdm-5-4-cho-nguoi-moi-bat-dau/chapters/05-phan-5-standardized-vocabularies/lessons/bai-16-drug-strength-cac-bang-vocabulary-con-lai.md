---
id: 019f1a00-a116-7b01-e001-omopcdm54016
title: "Bài 16: DRUG_STRENGTH & Các bảng Vocabulary còn lại"
slug: bai-16-drug-strength-cac-bang-vocabulary-con-lai
description: >-
  DRUG_STRENGTH cho thông tin liều lượng thuốc,
  CONCEPT_SYNONYM, bảng RELATIONSHIP, và tổng hợp
  toàn bộ 12 bảng Standardized Vocabularies.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Standardized Vocabularies"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop16" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop16)"/>
  <g>
    <circle cx="700" cy="90" r="22" fill="#818cf8" opacity="0.12"/>
    <circle cx="790" cy="110" r="26" fill="#818cf8" opacity="0.08"/>
    <circle cx="870" cy="140" r="20" fill="#818cf8" opacity="0.07"/>
    <line x1="640" y1="160" x2="1100" y2="240" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 16</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DRUG_STRENGTH &amp; Các bảng</tspan>
    <tspan x="60" dy="42">Vocabulary còn lại</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Standardized Vocabularies</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài cuối của phần Vocabulary cover bảng **DRUG_STRENGTH** (thông tin liều lượng chiết xuất từ RxNorm) và tổng hợp toàn bộ 12 bảng trong nhóm Standardized Vocabularies. Sau bài này bạn sẽ có bức tranh hoàn chỉnh về hệ thống từ điển OMOP.

---

## 1. DRUG_STRENGTH — Liều lượng thuốc

### 1.1. Cấu trúc bảng

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `drug_concept_id` | INTEGER | FK → CONCEPT (thuốc) |
| `ingredient_concept_id` | INTEGER | FK → CONCEPT (hoạt chất) |
| `amount_value` | FLOAT | Hàm lượng (viên nén, capsule) |
| `amount_unit_concept_id` | INTEGER | Đơn vị (mg, g, IU) |
| `numerator_value` | FLOAT | Tử số (dung dịch) |
| `numerator_unit_concept_id` | INTEGER | Đơn vị tử số |
| `denominator_value` | FLOAT | Mẫu số |
| `denominator_unit_concept_id` | INTEGER | Đơn vị mẫu số |
| `box_size` | INTEGER | Số viên/hộp |
| `valid_start_date` | DATE | |
| `valid_end_date` | DATE | |
| `invalid_reason` | VARCHAR(1) | |

### 1.2. Hai loại biểu diễn liều

**Loại 1: Solid (viên nén, capsule) → amount_value**

```sql
-- Metformin 500mg Oral Tablet
SELECT
    c_drug.concept_name AS drug_name,
    c_ing.concept_name AS ingredient,
    ds.amount_value,
    c_unit.concept_name AS unit
FROM drug_strength ds
JOIN concept c_drug ON ds.drug_concept_id = c_drug.concept_id
JOIN concept c_ing ON ds.ingredient_concept_id = c_ing.concept_id
LEFT JOIN concept c_unit ON ds.amount_unit_concept_id = c_unit.concept_id
WHERE ds.drug_concept_id = 1503328;
-- Kết quả: Metformin | 500 | milligram
```

**Loại 2: Liquid (dung dịch, tiêm) → numerator/denominator**

```sql
-- Amoxicillin 250mg/5mL Oral Suspension
SELECT
    c_drug.concept_name,
    ds.numerator_value,
    c_num.concept_name AS num_unit,
    ds.denominator_value,
    c_den.concept_name AS den_unit
FROM drug_strength ds
JOIN concept c_drug ON ds.drug_concept_id = c_drug.concept_id
LEFT JOIN concept c_num ON ds.numerator_unit_concept_id = c_num.concept_id
LEFT JOIN concept c_den ON ds.denominator_unit_concept_id = c_den.concept_id
WHERE ds.drug_concept_id = 19077795;
-- Kết quả: 250 mg / 5 mL
```

### 1.3. Ứng dụng: Tính liều thực tế

```sql
-- Tính tổng mg Metformin BN đã dùng
SELECT
    de.person_id,
    SUM(
        de.quantity *
        COALESCE(ds.amount_value, ds.numerator_value)
    ) AS total_mg,
    SUM(de.days_supply) AS total_days
FROM drug_exposure de
JOIN drug_strength ds
    ON de.drug_concept_id = ds.drug_concept_id
WHERE ds.ingredient_concept_id = 1503297  -- Metformin ingredient
  AND de.person_id = 100001
GROUP BY de.person_id;
```

### 1.4. Tìm tất cả formulations của 1 hoạt chất

```sql
-- Tất cả dạng bào chế chứa Metformin
SELECT DISTINCT
    c_drug.concept_id,
    c_drug.concept_name,
    c_drug.concept_class_id,
    ds.amount_value,
    c_unit.concept_name AS unit
FROM drug_strength ds
JOIN concept c_drug ON ds.drug_concept_id = c_drug.concept_id
JOIN concept c_unit ON ds.amount_unit_concept_id = c_unit.concept_id
WHERE ds.ingredient_concept_id = 1503297  -- Metformin
  AND c_drug.standard_concept = 'S'
ORDER BY c_drug.concept_class_id, ds.amount_value;
```

---

## 2. Tổng hợp 12 bảng Standardized Vocabularies

| # | Bảng | Records (~) | Vai trò |
|---|------|------------|---------|
| 1 | **CONCEPT** | ~10M | Từ điển tất cả khái niệm y tế |
| 2 | **VOCABULARY** | ~70 | Danh sách nguồn vocabulary |
| 3 | **DOMAIN** | ~50 | Danh sách domain (Condition, Drug...) |
| 4 | **CONCEPT_CLASS** | ~400 | Phân loại trong vocabulary |
| 5 | **CONCEPT_RELATIONSHIP** | ~60M | Quan hệ giữa concepts |
| 6 | **RELATIONSHIP** | ~600 | Định nghĩa loại quan hệ |
| 7 | **CONCEPT_SYNONYM** | ~10M | Tên đồng nghĩa |
| 8 | **CONCEPT_ANCESTOR** | ~80M | Phân cấp pre-computed |
| 9 | **SOURCE_TO_CONCEPT_MAP** | Custom | Mapping tùy chỉnh |
| 10 | **DRUG_STRENGTH** | ~1.5M | Liều lượng thuốc |
| 11 | **COHORT_DEFINITION** | Custom | Định nghĩa cohort |
| 12 | **ATTRIBUTE_DEFINITION** | Custom | Định nghĩa attribute (ít dùng) |

---

## 3. COHORT_DEFINITION

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `cohort_definition_id` | INTEGER | PK |
| `cohort_definition_name` | VARCHAR(255) | Tên cohort |
| `cohort_definition_description` | CLOB | Mô tả chi tiết |
| `definition_type_concept_id` | INTEGER | Loại definition |
| `cohort_definition_syntax` | CLOB | JSON/SQL query tạo cohort |
| `subject_concept_id` | INTEGER | Đối tượng (thường = person) |
| `cohort_initiation_date` | DATE | Ngày tạo |

Dùng kết hợp với bảng **COHORT** (trong Derived Elements) — Bài 20 sẽ chi tiết.

---

## 4. ER Diagram — Vocabularies

```
  ┌──────────┐     ┌──────────────────┐
  │ VOCABULARY│────→│     CONCEPT      │←─── DOMAIN
  └──────────┘     │                  │←─── CONCEPT_CLASS
                   │ concept_id (PK)  │
                   │ concept_name     │
                   │ domain_id        │
                   │ vocabulary_id    │
                   │ concept_class_id │
                   │ standard_concept │
                   └─────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ↓              ↓              ↓
  ┌────────────────┐ ┌──────────────┐ ┌──────────────┐
  │CONCEPT_        │ │CONCEPT_      │ │CONCEPT_      │
  │RELATIONSHIP    │ │ANCESTOR      │ │SYNONYM       │
  │                │ │              │ │              │
  │concept_id_1 →  │ │ancestor →    │ │concept_id →  │
  │concept_id_2 →  │ │descendant →  │ │synonym_name  │
  │relationship_id │ │min_levels    │ │language       │
  └────────────────┘ │max_levels    │ └──────────────┘
         │           └──────────────┘
         ↓
  ┌──────────────┐
  │ RELATIONSHIP │    ┌──────────────┐
  └──────────────┘    │DRUG_STRENGTH │
                      │              │
                      │drug_concept→ │
                      │ingredient → │
                      │amount_value  │
                      │numerator     │
                      │denominator   │
                      └──────────────┘
  ┌─────────────────────┐
  │SOURCE_TO_CONCEPT_MAP│  (custom mapping)
  │source_code          │
  │target_concept_id →  │
  └─────────────────────┘
```

---

## 5. Best practices quản lý Vocabulary

### 5.1. Cập nhật Vocabulary

```
  1. Download từ athena.ohdsi.org (CPT4 cần license)
  2. Load vào schema vocabulary riêng
  3. Chạy script consistency check
  4. KHÔNG tự modify bảng CONCEPT / CONCEPT_RELATIONSHIP
  5. Dùng SOURCE_TO_CONCEPT_MAP cho mã tùy chỉnh
```

### 5.2. Kiểm tra chất lượng Vocabulary

```sql
-- Kiểm tra concepts hết hạn đang được dùng
SELECT
    'condition_occurrence' AS source_table,
    COUNT(*) AS invalid_concept_count
FROM condition_occurrence co
JOIN concept c ON co.condition_concept_id = c.concept_id
WHERE c.invalid_reason IS NOT NULL

UNION ALL

SELECT 'drug_exposure', COUNT(*)
FROM drug_exposure de
JOIN concept c ON de.drug_concept_id = c.concept_id
WHERE c.invalid_reason IS NOT NULL;

-- Kiểm tra mapping completeness
SELECT
    c.vocabulary_id,
    COUNT(*) AS total_concepts,
    SUM(CASE WHEN cr.concept_id_2 IS NOT NULL THEN 1 ELSE 0 END) AS mapped,
    ROUND(
        SUM(CASE WHEN cr.concept_id_2 IS NOT NULL THEN 1 ELSE 0 END) * 100.0
        / COUNT(*), 1
    ) AS mapped_pct
FROM concept c
LEFT JOIN concept_relationship cr
    ON c.concept_id = cr.concept_id_1
    AND cr.relationship_id = 'Maps to'
    AND cr.invalid_reason IS NULL
WHERE c.vocabulary_id IN ('ICD10CM', 'ICD10', 'CPT4')
  AND c.invalid_reason IS NULL
GROUP BY c.vocabulary_id;
```

---

## Tổng kết

1. **DRUG_STRENGTH**: liều thuốc solid (amount) và liquid (numerator/denominator)
2. **12 bảng Vocabulary** hợp thành hệ thống quản lý ~10 triệu khái niệm y tế
3. **SOURCE_TO_CONCEPT_MAP** cho mã nội bộ VN → Standard Concept
4. Vocabulary cần cập nhật định kỳ từ Athena, KHÔNG tự sửa
5. DRUG_STRENGTH kết hợp DRUG_EXPOSURE để tính liều thực tế

**Bài tiếp theo:** Phần 6 — LOCATION, CARE_SITE, PROVIDER và nhóm Health System.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — DRUG_STRENGTH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DRUG_STRENGTH)
- [OMOP CDM 5.4 — Full table list](https://ohdsi.github.io/CommonDataModel/cdm54.html)
- [Athena Vocabulary Download](https://athena.ohdsi.org/vocabulary/list)
