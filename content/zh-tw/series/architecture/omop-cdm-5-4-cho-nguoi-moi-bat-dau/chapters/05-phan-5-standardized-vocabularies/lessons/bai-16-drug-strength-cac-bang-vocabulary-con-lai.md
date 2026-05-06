---
id: 019f1a00-a116-7b01-e001-omopcdm54016
title: 第 16 課：DRUG_STRENGTH 和剩餘詞彙表
slug: bai-16-drug-strength-cac-bang-vocabulary-con-lai
description: DRUG_STRENGTH 提供藥物劑量資訊、CONCEPT_SYNONYM、RELATIONSHIP 表以及所有 12 個標準化詞彙表的摘要。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 16
section_title: 第 5 部分：標準化詞彙
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 16 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">藥物強度和表格</tspan>
    <tspan x="60" dy="42">詞彙依然存在</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：標準化詞彙</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

詞彙部分的最後一篇文章介紹了表 **DRUG_STRENGTH**（從 RxNorm 中提取的劑量資訊），並總結了標準化詞彙組中的所有 12 個表。讀完本文後，您將對 OMOP 字典系統有完整的了解。

---

## 1. DRUG_STRENGTH — 藥物劑量

### 1.1。表結構

|專欄 |類型 |說明 |
|-----|--------|--------|
| `drug_concept_id` |整數| FK → 概念（藥物）|
| `ingredient_concept_id` |整數| FK → CONCEPT (active ingredient) |
| `amount_value` |浮動| Content (tablets, capsules) |
| `amount_unit_concept_id` |整數|單位（毫克、克、國際單位）|
| `numerator_value` |浮動|分子（解）|
| `numerator_unit_concept_id` |整數|單位分子|
| `denominator_value` |浮動|型號 |
| `denominator_unit_concept_id` |整數|單位分母|
| `box_size` |整數|藥片數量/盒 |
| `valid_start_date` |日期 | |
| `valid_end_date` |日期 | |
| `invalid_reason` | VARCHAR(1) | VARCHAR(1) | |

### 1.2。 Two types of dose representation

**類型 1：固體（片劑、膠囊）→ amount_value**

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

**類型2：液體（溶液、注射液）→分子/分母**

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

### 1.3。 Application: Calculate actual dose

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

### 1.4。 Find all formulations of an active ingredient

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

## 2.標準化詞彙12表匯總

| ＃|表|記錄(~)|角色 |
|---|-------|-------------|---------|
| 1 | **概念** | 〜10M | Dictionary of all medical concepts |
| 2 | **字彙** | 〜70 |字彙來源列表|
| 3 | **域名** | 〜50 |域列表（條件、藥物...）|
| 4 | **概念類別** | 〜400 | Classification in vocabulary |
| 5 | **概念_關係** | 〜60M |概念之間的關係|
| 6 | **關係** | 〜600 |關係類型的定義|
| 7 | **概念_同義詞** | 〜10M |同義字名稱 |
| 8 | **CONCEPT_ANCESTOR** | ~80M |預先計算的層次結構 |
| 9 | **SOURCE_TO_CONCEPT_MAP** |自訂|自訂映射 |
| 10 | 10 **藥物強度** |約 150 萬 |藥物劑量|
| 11 | 11 **群組定義** |自訂|佇列的定義|
| 12 | 12 **ATTRIBUTE_DEFINITION** |自訂|屬性定義（很少使用）|

---

## 3.群組定義

|專欄 |類型 |說明 |
|-----|--------|--------|
| `cohort_definition_id` |整數| PK |
| `cohort_definition_name` | VARCHAR(255) |群組名稱 |
| `cohort_definition_description` | CLOB |詳細說明|
| `definition_type_concept_id` |整數|型別定義|
| `cohort_definition_syntax` | CLOB | JSON/SQL 查詢建立群組 |
| `subject_concept_id` |整數|主題（通常=人） |
| `cohort_initiation_date` |日期 |建立日期 |

與 **COHORT** 表（在派生元素中）結合使用 - 第 20 課將詳細介紹。

---

## 4. ER 圖 — 詞彙

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

## 5. 詞彙管理的最佳實踐

### 5.1。更新詞彙

```
  1. Download từ athena.ohdsi.org (CPT4 cần license)
  2. Load vào schema vocabulary riêng
  3. Chạy script consistency check
  4. KHÔNG tự modify bảng CONCEPT / CONCEPT_RELATIONSHIP
  5. Dùng SOURCE_TO_CONCEPT_MAP cho mã tùy chỉnh
```

### 5.2。檢查詞彙質量

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

## 總結

1. **DRUG_STRENGTH**：固體（量）和液體（分子/分母）劑量
2. **12個詞彙表**構成約1000萬個醫學概念的管理系統
3. **SOURCE_TO_CONCEPT_MAP** 用於 VN 內部代碼 → 標準概念
4. 詞彙需要Athena定期更新，而不是自我修正
5. DRUG_STRENGTH結合DRUG_EXPOSURE計算實際劑量

**下一篇文章：** 第 6 部分 — 地點、護理地點、提供者和衛生系統小組。

---

## 參考文獻

- [OMOP CDM 5.4 — DRUG_STRENGTH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DRUG_STRENGTH)
- [OMOP CDM 5.4 — Full table list](https://ohdsi.github.io/CommonDataModel/cdm54.html)
- [Athena Vocabulary Download](https://athena.ohdsi.org/vocabulary/list)
