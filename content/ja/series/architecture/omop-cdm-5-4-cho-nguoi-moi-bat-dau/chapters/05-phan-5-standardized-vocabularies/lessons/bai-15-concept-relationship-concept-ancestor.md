---
id: 019f1a00-a115-7b01-e001-omopcdm54015
title: 'レッスン 15: CONCEPT_RELATIONSHIP と CONCEPT_ANCESTOR'
slug: bai-15-concept-relationship-concept-ancestor
description: 概念 (マップ先、ある、RxNorm には成分がある...) と祖先 - 子孫階層ツリー間の関係。 ETL マッピングと階層分析にとって最も重要なテーブル。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 5: 標準化された語彙'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop15" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop15)"/>
  <g>
    <circle cx="680" cy="85" r="24" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="105" r="20" fill="#818cf8" opacity="0.09"/>
    <circle cx="840" cy="125" r="30" fill="#818cf8" opacity="0.06"/>
    <circle cx="920" cy="150" r="18" fill="#818cf8" opacity="0.10"/>
    <line x1="620" y1="155" x2="1100" y2="235" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 15</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">CONCEPT_RELATIONSHIP</tspan>
    <tspan x="60" dy="42">& CONCEPT_ANCESTOR</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 標準化された語彙</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

CONCEPT が「辞書」である場合、**CONCEPT_RELATIONSHIP** は単語を結び付ける「地図」、**CONCEPT_ANCESTOR** は祖先と子孫の関係を示す「家系図」です。これら 2 つのテーブルは非常に重要です。CONCEPT_RELATIONSHIP は ETL (ICD-10 → SNOMED のマッピング) に使用され、CONCEPT_ANCESTOR は分析 (1 型、2 型、妊娠などを含むすべての「糖尿病」コードを検索) に使用されます。

---

## 1. コンセプト_関係

＃＃＃１．１．テーブル構造

|コラム |タイプ |説明 |
|-----|--------|------|
| `concept_id_1` |整数 | FK → CONCEPT (出典) |
| `concept_id_2` |整数 | FK → CONCEPT (目的地) |
| `relationship_id` | VARCHAR(20) | FK → 関係 |
| `valid_start_date` |日付 |開始日 |
| `valid_end_date` |日付 |有効期限 |
| `invalid_reason` | VARCHAR(1) | NULL/U/D |

＃＃＃１．２．関係が最も重要です

|関係ID |意味 |使用例 |
|----------|----------|----------|
| **マップ先** |ソース → 標準 | ETL マッピング (コア!) |
| **マッピング元** |標準 → ソース |対照的に、 | にマップします。
| **は**です |息子→父 | SNOMED 階層 |
| **包含** |父→息子 |逆に、は | です。
| **RxNorm には成分があります** |薬剤 → 成分 |有効成分を探す |
| **商品名あり** |ジェネリック → ブランド |薬物マッピング |

＃＃＃１．３． 「マップ先」 — ETL にとって最も重要

```
  ICD10CM: E11 "Type 2 diabetes mellitus"
  concept_id = 45591837
  standard_concept = NULL (Non-standard)
       │
       │ relationship_id = 'Maps to'
       ↓
  SNOMED: "Type 2 diabetes mellitus"
  concept_id = 201826
  standard_concept = 'S' (Standard)
```

```sql
-- Tìm Standard Concept từ ICD-10 code
SELECT
    c1.concept_code AS source_code,
    c1.concept_name AS source_name,
    c1.vocabulary_id AS source_vocab,
    cr.relationship_id,
    c2.concept_id AS standard_concept_id,
    c2.concept_name AS standard_name,
    c2.vocabulary_id AS standard_vocab,
    c2.domain_id
FROM concept c1
JOIN concept_relationship cr
    ON c1.concept_id = cr.concept_id_1
    AND cr.relationship_id = 'Maps to'
    AND cr.invalid_reason IS NULL
JOIN concept c2
    ON cr.concept_id_2 = c2.concept_id
    AND c2.standard_concept = 'S'
    AND c2.invalid_reason IS NULL
WHERE c1.concept_code = 'E11'
  AND c1.vocabulary_id = 'ICD10CM';
```

＃＃＃１．４． 「Is a」 — SNOMED 階層

```
  Diabetes mellitus (concept_id = 201820)
       ↑ Is a
  ├── Type 1 diabetes mellitus (201254)
  │        ↑ Is a
  │   ├── Type 1 DM without complication (435216)
  │   └── Type 1 DM with ketoacidosis (443727)
  │
  ├── Type 2 diabetes mellitus (201826)
  │        ↑ Is a
  │   ├── Type 2 DM without complication (443732)
  │   └── Type 2 DM with peripheral angiopathy (318712)
  │
  └── Gestational diabetes (4058243)
```

```sql
-- Tìm concept cha trực tiếp
SELECT
    c_parent.concept_id,
    c_parent.concept_name
FROM concept_relationship cr
JOIN concept c_parent ON cr.concept_id_2 = c_parent.concept_id
WHERE cr.concept_id_1 = 201826   -- Type 2 DM
  AND cr.relationship_id = 'Is a'
  AND cr.invalid_reason IS NULL;

-- Tìm concept con trực tiếp
SELECT
    c_child.concept_id,
    c_child.concept_name
FROM concept_relationship cr
JOIN concept c_child ON cr.concept_id_1 = c_child.concept_id
WHERE cr.concept_id_2 = 201826   -- Type 2 DM
  AND cr.relationship_id = 'Is a'
  AND cr.invalid_reason IS NULL;
```

---

## 2. 関係テーブル

|コラム |タイプ |説明 |
|-----|--------|------|
| `relationship_id` | VARCHAR(20) | PK |
| `relationship_name` | VARCHAR(255) |関係名 |
| `is_hierarchical` | VARCHAR(1) | 1 = 階層 |
| `defines_ancestry` | VARCHAR(1) | 1 = 祖先を作成 |
| `reverse_relationship_id` | VARCHAR(20) |逆関係 |
| `relationship_concept_id` |整数 | FK → コンセプト |

---

## 3. CONCEPT_ANCESTOR — 完全な階層ツリー

＃＃＃３．１．テーブル構造

|コラム |タイプ |説明 |
|-----|--------|------|
| `ancestor_concept_id` |整数 | FK → CONCEPT（先祖） |
| `descendant_concept_id` |整数 | FK → CONCEPT (子孫) |
| `min_levels_of_separation` |整数 |最小距離 |
| `max_levels_of_separation` |整数 |最大距離 |

＃＃＃３．２． CONCEPT_RELATIONSHIP と CONCEPT_ANCESTOR の比較

| |コンセプト_リレーションシップ | CONCEPT_ANCESTOR |
|--|-----------------|--|
| **内容** |直接連絡 |すべての先祖 - 子孫 |
| **例** |タイプ 2 DM → です → DM |タイプ 2 DM → すべての祖先 |
| **レベル** | 1 レベルのみ | n レベルを含む |
| **用途** | ETLマッピング |階層分析 |
| **自分自身を含む** |いいえ | ✅ (最小レベル = 0) |

＃＃＃３．３． CONCEPT_ANCESTOR が必要な理由は何ですか?

CONCEPT_RELATIONSHIP には「1 レベル」の関係のみがあります。 **すべて**のタイプの糖尿病 (1 型、2 型、妊娠期、新生児など) を見つけたい場合は、ツリーを何度も参照する必要があります。 CONCEPT_ANCESTOR は事前に計算されます (事前に計算された推移閉包)。

```sql
-- Tìm TẤT CẢ concept thuộc nhóm "Diabetes mellitus"
-- Bao gồm bản thân + mọi hậu duệ
SELECT
    ca.descendant_concept_id,
    c.concept_name,
    ca.min_levels_of_separation AS levels
FROM concept_ancestor ca
JOIN concept c ON ca.descendant_concept_id = c.concept_id
WHERE ca.ancestor_concept_id = 201820   -- Diabetes mellitus
  AND c.standard_concept = 'S'
ORDER BY ca.min_levels_of_separation, c.concept_name;
-- Kết quả: ~300+ concepts bao gồm mọi loại & biến chứng
```

＃＃＃３．４．分析用途

```sql
-- Đếm BN có BẤT KỲ loại tiểu đường nào
SELECT COUNT(DISTINCT co.person_id) AS dm_patients
FROM condition_occurrence co
WHERE co.condition_concept_id IN (
    SELECT descendant_concept_id
    FROM concept_ancestor
    WHERE ancestor_concept_id = 201820  -- Diabetes mellitus
);

-- So sánh: KHÔNG dùng ancestor (chỉ bắt 1 loại)
SELECT COUNT(DISTINCT co.person_id) AS dm_type2_only
FROM condition_occurrence co
WHERE co.condition_concept_id = 201826;  -- Chỉ Type 2 DM
-- → Bỏ sót Type 1, gestational, neonatal, with complications...!
```

---

## 4. SOURCE_TO_CONCEPT_MAP — カスタム マッピング

語彙にマッピングがない場合に使用されます (例: ベトナム病院の内部コード)。

|コラム |タイプ |説明 |
|-----|--------|------|
| `source_code` | VARCHAR(50) |ソースコード |
| `source_concept_id` |整数 |ソースのコンセプト (利用できない場合は 0) |
| `source_vocabulary_id` | VARCHAR(20) |カスタム語彙 ID |
| `source_code_description` | VARCHAR(255) |説明 |
| `target_concept_id` |整数 | FK → スタンダードコンセプト |
| `target_vocabulary_id` | VARCHAR(20) |語彙の目的地 |
| `valid_start_date` |日付 | |
| `valid_end_date` |日付 | |
| `invalid_reason` | VARCHAR(1) | |

```sql
-- Tạo mapping cho mã ICD-10-VN nội bộ
INSERT INTO source_to_concept_map (
    source_code, source_concept_id,
    source_vocabulary_id, source_code_description,
    target_concept_id, target_vocabulary_id,
    valid_start_date, valid_end_date
) VALUES
    ('E11', 0, 'VN_ICD10',
     'Đái tháo đường type 2',
     201826, 'SNOMED',
     '2024-01-01', '2099-12-31'),
    ('METFORMIN500', 0, 'VN_DRUG',
     'Metformin 500mg viên nén',
     1503328, 'RxNorm',
     '2024-01-01', '2099-12-31');
```

---

## 5. CONCEPT_SYNONYM — シノニム名

|コラム |タイプ |説明 |
|-----|--------|------|
| `concept_id` |整数 | FK → コンセプト |
| `concept_synonym_name` | VARCHAR(1000) |同義名 |
| `language_concept_id` |整数 |言語 (4180186 = 英語) |

```sql
-- Tìm concept qua tên đồng nghĩa
SELECT DISTINCT c.concept_id, c.concept_name
FROM concept_synonym cs
JOIN concept c ON cs.concept_id = c.concept_id
WHERE LOWER(cs.concept_synonym_name) LIKE '%heart attack%'
  AND c.standard_concept = 'S';
-- Tìm được: Acute myocardial infarction
```

---

## 6. ETL マッピング プロセスを完了する

```
  Bước 1: Lấy mã nguồn
  HIS: ma_benh = 'E11.65'
       │
  Bước 2: Tìm Source Concept
       │ SELECT * FROM concept
       │ WHERE concept_code = 'E11.65'
       │   AND vocabulary_id = 'ICD10CM'
       ↓
  Source: concept_id = 45591837
       │
  Bước 3: Tìm Maps to
       │ SELECT * FROM concept_relationship
       │ WHERE concept_id_1 = 45591837
       │   AND relationship_id = 'Maps to'
       ↓
  Standard: concept_id = 201826
            domain_id = 'Condition'
       │
  Bước 4: Domain routing
       │ domain_id = 'Condition'
       ↓
  Lưu vào: CONDITION_OCCURRENCE
            condition_concept_id = 201826
            condition_source_concept_id = 45591837
            condition_source_value = 'E11.65'
```

---

## 概要

1. **CONCEPT_RELATIONSHIP**: 2 つの概念間の直接の関係
2. **「マップ先」** = ETL にとって最も重要な関係 (ソース → 標準)
3. **「Is a」** = SNOMED 階層 (子→親)
4. **CONCEPT_ANCESTOR**: すべての祖先/子孫を事前に計算しました
5. **SOURCE_TO_CONCEPT_MAP**: 内部コードのカスタム マッピング
6. 階層構造を分析する場合は、常に CONCEPT_ANCESTOR を使用します。

**次の記事:** DRUG_STRENGTH と残りの語彙テーブル。

---

## 参考文献

- [OMOP CDM 5.4 — CONCEPT_RELATIONSHIP](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_RELATIONSHIP)
- [OMOP CDM 5.4 — CONCEPT_ANCESTOR](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_ANCESTOR)
- [OMOP CDM 5.4 — SOURCE_TO_CONCEPT_MAP](https://ohdsi.github.io/CommonDataModel/cdm54.html#SOURCE_TO_CONCEPT_MAP)
