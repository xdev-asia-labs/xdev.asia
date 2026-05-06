---
id: 019f1a00-a115-7b01-e001-omopcdm54015
title: 'Lesson 15: CONCEPT_RELATIONSHIP & CONCEPT_ANCESTOR'
slug: bai-15-concept-relationship-concept-ancestor
description: >-
  Relationship between Concepts (Maps to, Is a, RxNorm has ingredient...) and
  the Ancestor-Descendant hierarchy tree. The most important table for ETL
  mapping and hierarchical analysis.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 15
section_title: 'Part 5: Standardized Vocabularies'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: OMOP CDM 5.4 for Beginners — Understand A to Z
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 15</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">CONCEPT_RELATIONSHIP</tspan>
    <tspan x="60" dy="42">& CONCEPT_ANCESTOR</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 for Beginners — Understand A to Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Standardized Vocabularies</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

If CONCEPT is a "dictionary", then **CONCEPT_RELATIONSHIP** is a "map" that connects words together, and **CONCEPT_ANCESTOR** is a "family tree" that shows ancestor-descendant relationships. These two tables are extremely important: CONCEPT_RELATIONSHIP is used for ETL (mapping ICD-10 → SNOMED), CONCEPT_ANCESTOR is used for analysis (finds all "diabetes" codes including type 1, type 2, gestational...).

---

## 1. CONCEPT_RELATIONSHIP

### 1.1. Table structure

| Column | Type | Description |
|-----|--------|-------|
| `concept_id_1` | INTEGER | FK → CONCEPT (source) |
| `concept_id_2` | INTEGER | FK → CONCEPT (destination) |
| `relationship_id` | VARCHAR(20) | FK → RELATIONSHIP |
| `valid_start_date` | DATE | Start date |
| `valid_end_date` | DATE | Expiry date |
| `invalid_reason` | VARCHAR(1) | NULL/U/D |

### 1.2. Relationship is the most important

| relationship_id | Meaning | Use cases |
|----------|--------|----------|
| **Maps to** | Source → Standard | ETL mapping (core!) |
| **Mapped from** | Standard → Source | In contrast, Maps to |
| **Is a** | Son → Father | SNOMED hierarchy |
| **Subsumes** | Father → Son | On the contrary, Is a |
| **RxNorm has ingredients** | Drug → Ingredient | Find active ingredients |
| **Has tradename** | Generic → Brand | Drug mapping |

### 1.3. "Maps to" — Most important for ETL

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

### 1.4. "Is a" — SNOMED hierarchy

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

## 2. RELATIONSHIP table

| Column | Type | Description |
|-----|--------|-------|
| `relationship_id` | VARCHAR(20) | PK |
| `relationship_name` | VARCHAR(255) | Relationship name |
| `is_hierarchical` | VARCHAR(1) | 1 = hierarchy |
| `defines_ancestry` | VARCHAR(1) | 1 = create ancestor |
| `reverse_relationship_id` | VARCHAR(20) | Reverse relationship |
| `relationship_concept_id` | INTEGER | FK → concept |

---

## 3. CONCEPT_ANCESTOR — Full hierarchical tree

### 3.1. Table structure

| Column | Type | Description |
|-----|--------|-------|
| `ancestor_concept_id` | INTEGER | FK → CONCEPT (ancestor) |
| `descendant_concept_id` | INTEGER | FK → CONCEPT (descendant) |
| `min_levels_of_separation` | INTEGER | Minimum Distance |
| `max_levels_of_separation` | INTEGER | Maximum Distance |

### 3.2. Compare CONCEPT_RELATIONSHIP vs CONCEPT_ANCESTOR

| | CONCEPT_RELATIONSHIP | CONCEPT_ANCESTOR |
|--|---------------------|-----------------|
| **Content** | Direct contact | All ancestors-descendants |
| **Example** | Type 2 DM → Is a → DM | Type 2 DM → all ancestors |
| **Levels** | Only 1 level | Includes n levels |
| **Used for** | ETL mapping | Hierarchical analysis |
| **Includes self** | No | ✅ (min_level = 0) |

### 3.3. Why is CONCEPT_ANCESTOR needed?

CONCEPT_RELATIONSHIP only has a "1 level" relationship. If you want to find **all** types of diabetes (type 1, type 2, gestational, neonatal...), you have to browse the tree many times. CONCEPT_ANCESTOR is pre-computed (pre-computed transitive closure).

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

### 3.4. Analytical applications

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

## 4. SOURCE_TO_CONCEPT_MAP — Custom mapping

Used when vocabulary does not have mapping (eg: internal code of Vietnam Hospital).

| Column | Type | Description |
|-----|--------|-------|
| `source_code` | VARCHAR(50) | Source code |
| `source_concept_id` | INTEGER | Source concept (0 if not available) |
| `source_vocabulary_id` | VARCHAR(20) | Custom vocabulary ID |
| `source_code_description` | VARCHAR(255) | Description |
| `target_concept_id` | INTEGER | FK → Standard Concept |
| `target_vocabulary_id` | VARCHAR(20) | Vocabulary destination |
| `valid_start_date` | DATE | |
| `valid_end_date` | DATE | |
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

## 5. CONCEPT_SYNONYM — Synonym name

| Column | Type | Description |
|-----|--------|-------|
| `concept_id` | INTEGER | FK → CONCEPT |
| `concept_synonym_name` | VARCHAR(1000) | Synonym name |
| `language_concept_id` | INTEGER | Language (4180186 = English) |

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

## 6. Complete ETL Mapping Process

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

## Summary

1. **CONCEPT_RELATIONSHIP**: direct relationship between two concepts
2. **"Maps to"** = most important relationship for ETL (Source → Standard)
3. **"Is a"** = SNOMED hierarchy (child → parent)
4. **CONCEPT_ANCESTOR**: pre-computed all ancestors/descendants
5. **SOURCE_TO_CONCEPT_MAP**: custom mapping for internal code
6. Always use CONCEPT_ANCESTOR when analyzing hierarchical

**Next article:** DRUG_STRENGTH & remaining Vocabulary tables.

---

## References

- [OMOP CDM 5.4 — CONCEPT_RELATIONSHIP](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_RELATIONSHIP)
- [OMOP CDM 5.4 — CONCEPT_ANCESTOR](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_ANCESTOR)
- [OMOP CDM 5.4 — SOURCE_TO_CONCEPT_MAP](https://ohdsi.github.io/CommonDataModel/cdm54.html#SOURCE_TO_CONCEPT_MAP)
