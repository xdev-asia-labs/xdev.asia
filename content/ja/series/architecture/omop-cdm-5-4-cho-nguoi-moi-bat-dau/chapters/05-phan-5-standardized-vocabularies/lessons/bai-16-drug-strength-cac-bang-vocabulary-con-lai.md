---
id: 019f1a00-a116-7b01-e001-omopcdm54016
title: 'レッスン 16: DRUG_STRENGTH と残りの語彙テーブル'
slug: bai-16-drug-strength-cac-bang-vocabulary-con-lai
description: >-
  DRUG_STRENGTH は、薬剤の投与量情報、CONCEPT_SYNONYM、RELATIONSHIP テーブル、および 12
  個すべての標準化された語彙テーブルの概要を提供します。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 16
section_title: 'パート 5: 標準化された語彙'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 16</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DRUG_STRENGTH とテーブル</tspan>
    <tspan x="60" dy="42">語彙が残っている</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 標準化された語彙</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

語彙セクションの最後の記事では、テーブル **DRUG_STRENGTH** (RxNorm から抽出された投与量情報) について説明し、標準化語彙グループの 12 のテーブルすべてをまとめています。この記事を読み終えると、OMOP 辞書システムの全体像がわかるようになります。

---

## 1. DRUG_STRENGTH — 薬剤の投与量

＃＃＃１．１．テーブル構造

|コラム |タイプ |説明 |
|-----|--------|------|
| `drug_concept_id` |整数 | FK → CONCEPT（ドラッグ） |
| `ingredient_concept_id` |整数 | FK → CONCEPT（有効成分） |
| `amount_value` |フロート |内容物（錠剤、カプセル） |
| `amount_unit_concept_id` |整数 |単位 (mg、g、IU) |
| `numerator_value` |フロート |分子 (解) |
| `numerator_unit_concept_id` |整数 |単位分子 |
| `denominator_value` |フロート |型番 |
| `denominator_unit_concept_id` |整数 |単位分母 |
| `box_size` |整数 | 1 箱あたりの錠剤数 |
| `valid_start_date` |日付 | |
| `valid_end_date` |日付 | |
| `invalid_reason` | VARCHAR(1) | |

＃＃＃１．２． 2種類の線量表現

**タイプ 1: 固体 (錠剤、カプセル) → amount_value**

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

**タイプ 2: 液体 (溶液、注射) → 分子/分母**

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

＃＃＃１．３．アプリケーション: 実際の線量を計算する

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

＃＃＃１．４．有効成分のすべての配合を検索する

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

## 2. 標準化された語彙の 12 の表の要約

| # |表 |記録 (~) |役割 |
|---|----------|-------------|----------|
| 1 | **コンセプト** | ～10M |すべての医療概念の辞書 |
| 2 | **語彙** | ~70 |語彙ソースリスト |
| 3 | **ドメイン** | ~50 |ドメインのリスト (状態、薬物...) |
| 4 | **コンセプトクラス** | ~400 |語彙による分類 |
| 5 | **コンセプト_リレーションシップ** | ~60M |概念間の関係 |
| 6 | **関係** | ~600 |関係タイプの定義 |
| 7 | **CONCEPT_SYNONYM** | ～10M |同義名 |
| 8 | **CONCEPT_ANCESTOR** | ～80M |事前に計算された階層 |
| 9 | **ソース_TO_CONCEPT_MAP** |カスタム |カスタムマッピング |
| 10 | **DRUG_STRENGTH** | ～1.5M |薬物投与量 |
| 11 | **COHORT_DEFINITION** |カスタム |コホートの定義 |
| 12 | **属性_定義** |カスタム |属性定義 (めったに使用されない) |

---

## 3. COHORT_DEFINITION

|コラム |タイプ |説明 |
|-----|--------|------|
| `cohort_definition_id` |整数 | PK |
| `cohort_definition_name` | VARCHAR(255) |コホート名 |
| `cohort_definition_description` |クロブ |詳細な説明 |
| `definition_type_concept_id` |整数 |型の定義 |
| `cohort_definition_syntax` |クロブ | JSON/SQL クエリがコホートを作成する |
| `subject_concept_id` |整数 |件名 (通常 = 人) |
| `cohort_initiation_date` |日付 |作成日 |

**COHORT** テーブル (派生要素内) と組み合わせて使用​​します — 詳細についてはレッスン 20 で説明します。

---

## 4. ER 図 — 語彙

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

## 5. 語彙管理のベストプラクティス

＃＃＃５．１．語彙を更新する

```
  1. Download từ athena.ohdsi.org (CPT4 cần license)
  2. Load vào schema vocabulary riêng
  3. Chạy script consistency check
  4. KHÔNG tự modify bảng CONCEPT / CONCEPT_RELATIONSHIP
  5. Dùng SOURCE_TO_CONCEPT_MAP cho mã tùy chỉnh
```

＃＃＃５．２．語彙の質をチェックする

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

## 概要

1. **DRUG_STRENGTH**: 固体 (量) および液体 (分子/分母) の投与量
2. **12 の語彙テーブル** は、約 1,000 万の医療概念の管理システムを構成します
3. VN 内部コードの **SOURCE_TO_CONCEPT_MAP** → 標準コンセプト
4. 語彙は自己修正ではなく、Athena からの定期的な更新が必要です
5. DRUG_STRENGTH と DRUG_EXPOSURE を組み合わせて実際の線量を計算する

**次の記事:** パート 6 — LOCATION、CARE_SITE、PROVIDER、および Health System グループ。

---

## 参考文献

- [OMOP CDM 5.4 — DRUG_STRENGTH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DRUG_STRENGTH)
- [OMOP CDM 5.4 — Full table list](https://ohdsi.github.io/CommonDataModel/cdm54.html)
- [Athena Vocabulary Download](https://athena.ohdsi.org/vocabulary/list)
