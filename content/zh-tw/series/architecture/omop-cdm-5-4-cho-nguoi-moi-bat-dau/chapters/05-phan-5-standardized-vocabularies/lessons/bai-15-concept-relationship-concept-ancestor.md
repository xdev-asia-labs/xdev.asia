---
id: 019f1a00-a115-7b01-e001-omopcdm54015
title: 第 15 課：CONCEPT_RELATIONSHIP 和 CONCEPT_ANCESTOR
slug: bai-15-concept-relationship-concept-ancestor
description: 概念（映射到、Is a、RxNorm 有成分...）和祖先-後代層次結構樹之間的關係。 ETL 映射和層次分析最重要的表格。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 15
section_title: 第 5 部分：標準化詞彙
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 15 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">概念_關係</tspan>
    <tspan x="60" dy="42">& CONCEPT_ANCESTOR</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：標準化詞彙</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

如果 CONCEPT 是一本“字典”，那麼 **CONCEPT_RELATIONSHIP** 就是一個將單字連接在一起的“地圖”，而 **CONCEPT_ANCESTOR** 是一個顯示祖先-後代關係的“家譜”。這兩個表格非常重要：CONCEPT_RELATIONSHIP 用於 ETL（映射 ICD-10 → SNOMED），CONCEPT_ANCESTOR 用於分析（查找所有「糖尿病」代碼，包括 1 型、2 型、妊娠期...）。

---

## 1.概念_關係

### 1.1。表結構

|專欄 |類型 |說明 |
|-----|--------|--------|
| `concept_id_1` |整數| FK → 概念（來源）|
| `concept_id_2` |整數| FK → 概念（目的地）|
| `relationship_id` | VARCHAR(20) | FK → 關係式 |
| `valid_start_date` |日期 |開始日期 |
| `valid_end_date` |日期 |有效期限 |
| `invalid_reason` | VARCHAR(1) | VARCHAR(1) |空/U/D |

### 1.2。關係最重要

|關係_id |意義|使用案例 |
|----------|--------|----------|
| **映射到** |來源 → 標準 | ETL 映射（核心！） |
| **映射自** |標準 → 來源 |相反，映射到 |
| **是一個** |兒子→父親| SNOMED 層次結構 |
| **包含** |父親→兒子|相反， 是 |
| **RxNorm 有成分** |藥品 → 成分 |尋找活性成分 |
| **有商品名** |通用 → 品牌 |藥物圖譜|

### 1.3。 「映射到」——對於 ETL 來說最重要

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

### 1.4。 “Is a” — SNOMED 層次結構

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

## 2.關係表

|專欄 |類型 |說明 |
|-----|--------|--------|
| `relationship_id` | VARCHAR(20) | PK |
| `relationship_name` | VARCHAR(255) |關係名稱 |
| `is_hierarchical` | VARCHAR(1) | VARCHAR(1) | 1 = 層次結構 |
| `defines_ancestry` | VARCHAR(1) | VARCHAR(1) | 1 = 建立祖先 |
| `reverse_relationship_id` | VARCHAR(20) |反向關係式|
| `relationship_concept_id` |整數| FK → 概念 |

---

## 3. CONCEPT_ANCESTOR — 完整的層次樹

### 3.1。表結構

|專欄 |類型 |說明 |
|-----|--------|--------|
| `ancestor_concept_id` |整數| FK → CONCEPT（祖先）|
| `descendant_concept_id` |整數| FK → CONCEPT（後代）|
| `min_levels_of_separation` |整數|最小距離|
| `max_levels_of_separation` |整數|最大距離|

### 3.2。比較 CONCEPT_RELATIONSHIP 與 CONCEPT_ANCESTOR

| |概念_關係 | CONCEPT_ANCESTOR | 概念
|--|---------------------------------|-----------------|
| **內容** |直接聯繫 |所有的祖先-後代|
| **範例** |類型 2 DM → 是 → DM | 2 型 DM → 所有祖先 |
| **等級** |僅 1 級 |包含 n 個等級 |
| **用於** | ETL 映射 |層次分析 |
| **包括自我** |沒有 | ✅ (最小等級 = 0) |

### 3.3。為什麼需要 CONCEPT_ANCESTOR？

CONCEPT_RELATIONSHIP 僅具有「1 級」關係。如果您想尋找**所有**類型的糖尿病（1 型、2 型、妊娠期、新生兒...），您必須多次瀏覽該樹。 CONCEPT_ANCESTOR是預先計算的（預先計算的傳遞閉包）。

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

### 3.4。分析應用

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

## 4. SOURCE_TO_CONCEPT_MAP — 自訂映射

當詞彙沒有映射時使用（例如：越南醫院的內部代碼）。

|專欄 |類型 |說明 |
|-----|--------|--------|
| `source_code` | VARCHAR(50) |原始碼 |
| `source_concept_id` |整數|來源概念（若不可用則為 0） |
| `source_vocabulary_id` | VARCHAR(20) |自訂詞彙ID |
| `source_code_description` | VARCHAR(255) |描述 |
| `target_concept_id` |整數| FK → 標準概念 |
| `target_vocabulary_id` | VARCHAR(20) |字彙目的地|
| `valid_start_date` |日期 | |
| `valid_end_date` |日期 | |
| `invalid_reason` | VARCHAR(1) | VARCHAR(1) | |

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

## 5. CONCEPT_SYNONYM — 同義詞名稱

|專欄 |類型 |說明 |
|-----|--------|--------|
| `concept_id` |整數| FK → 概念 |
| `concept_synonym_name` | VARCHAR(1000) |同義詞名稱 |
| `language_concept_id` |整數|語言（4180186 = 英語）|

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

## 6.完整的ETL映射過程

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

## 總結

1. **CONCEPT_RELATIONSHIP**：兩個概念之間的直接關係
2. **「映射到」** = ETL 最重要的關係（資料來源 → 標準）
3. **「是一個」** = SNOMED 層次結構（子→父）
4. **CONCEPT_ANCESTOR**：預先計算所有祖先/後代
5. **SOURCE_TO_CONCEPT_MAP**：內部程式碼的自訂映射
6. 分析層次結構時始終使用 CONCEPT_ANCESTOR

**下一篇文章：** DRUG_STRENGTH 和剩餘詞彙表。

---

## 參考文獻

- [OMOP CDM 5.4 — CONCEPT_RELATIONSHIP](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_RELATIONSHIP)
- [OMOP CDM 5.4 — CONCEPT_ANCESTOR](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_ANCESTOR)
- [OMOP CDM 5.4 — SOURCE_TO_CONCEPT_MAP](https://ohdsi.github.io/CommonDataModel/cdm54.html#SOURCE_TO_CONCEPT_MAP)
