---
id: 019f1a00-a115-7b01-e001-omopcdm54015
title: "Bài 15: CONCEPT_RELATIONSHIP & CONCEPT_ANCESTOR"
slug: bai-15-concept-relationship-concept-ancestor
description: >-
  Mối quan hệ giữa Concepts (Maps to, Is a, RxNorm has ingredient...)
  và cây phân cấp Ancestor-Descendant. Bảng quan trọng nhất
  cho ETL mapping và phân tích hierarchical.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Standardized Vocabularies"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 15</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">CONCEPT_RELATIONSHIP</tspan>
    <tspan x="60" dy="42">&amp; CONCEPT_ANCESTOR</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Standardized Vocabularies</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Nếu CONCEPT là "từ điển", thì **CONCEPT_RELATIONSHIP** là "bản đồ" kết nối các từ lại với nhau, và **CONCEPT_ANCESTOR** là "cây gia phả" thể hiện quan hệ tổ tiên-hậu duệ. Hai bảng này cực kỳ quan trọng: CONCEPT_RELATIONSHIP dùng cho ETL (mapping ICD-10 → SNOMED), CONCEPT_ANCESTOR dùng cho phân tích (tìm tất cả mã "tiểu đường" bao gồm type 1, type 2, gestational...).

---

## 1. CONCEPT_RELATIONSHIP

### 1.1. Cấu trúc bảng

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `concept_id_1` | INTEGER | FK → CONCEPT (nguồn) |
| `concept_id_2` | INTEGER | FK → CONCEPT (đích) |
| `relationship_id` | VARCHAR(20) | FK → RELATIONSHIP |
| `valid_start_date` | DATE | Ngày bắt đầu |
| `valid_end_date` | DATE | Ngày hết hạn |
| `invalid_reason` | VARCHAR(1) | NULL/U/D |

### 1.2. Relationship quan trọng nhất

| relationship_id | Ý nghĩa | Use case |
|----------------|---------|----------|
| **Maps to** | Source → Standard | ETL mapping (cốt lõi!) |
| **Mapped from** | Standard → Source | Ngược lại Maps to |
| **Is a** | Con → Cha | Phân cấp SNOMED |
| **Subsumes** | Cha → Con | Ngược lại Is a |
| **RxNorm has ingredient** | Drug → Ingredient | Tìm hoạt chất |
| **Has tradename** | Generic → Brand | Drug mapping |

### 1.3. "Maps to" — Quan trọng nhất cho ETL

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

### 1.4. "Is a" — Phân cấp SNOMED

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

## 2. Bảng RELATIONSHIP

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `relationship_id` | VARCHAR(20) | PK |
| `relationship_name` | VARCHAR(255) | Tên quan hệ |
| `is_hierarchical` | VARCHAR(1) | 1 = phân cấp |
| `defines_ancestry` | VARCHAR(1) | 1 = tạo ancestor |
| `reverse_relationship_id` | VARCHAR(20) | Quan hệ ngược |
| `relationship_concept_id` | INTEGER | FK → concept |

---

## 3. CONCEPT_ANCESTOR — Cây phân cấp đầy đủ

### 3.1. Cấu trúc bảng

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `ancestor_concept_id` | INTEGER | FK → CONCEPT (tổ tiên) |
| `descendant_concept_id` | INTEGER | FK → CONCEPT (hậu duệ) |
| `min_levels_of_separation` | INTEGER | Khoảng cách tối thiểu |
| `max_levels_of_separation` | INTEGER | Khoảng cách tối đa |

### 3.2. So sánh CONCEPT_RELATIONSHIP vs CONCEPT_ANCESTOR

| | CONCEPT_RELATIONSHIP | CONCEPT_ANCESTOR |
|--|---------------------|-----------------|
| **Nội dung** | Quan hệ trực tiếp | Tất cả tổ tiên-hậu duệ |
| **Ví dụ** | Type 2 DM → Is a → DM | Type 2 DM → mọi ancestor |
| **Levels** | Chỉ 1 bậc | Bao gồm n bậc |
| **Dùng cho** | ETL mapping | Phân tích hierarchical |
| **Includes self** | Không | ✅ (min_level = 0) |

### 3.3. Tại sao cần CONCEPT_ANCESTOR?

CONCEPT_RELATIONSHIP chỉ có quan hệ "1 bậc". Muốn tìm **tất cả** loại tiểu đường (type 1, type 2, gestational, neonatal...), phải duyệt cây nhiều lần. CONCEPT_ANCESTOR đã tính sẵn (pre-computed transitive closure).

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

### 3.4. Ứng dụng phân tích

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

## 4. SOURCE_TO_CONCEPT_MAP — Mapping tùy chỉnh

Dùng khi vocabulary chưa có mapping (VD: mã nội bộ BV Việt Nam).

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `source_code` | VARCHAR(50) | Mã nguồn |
| `source_concept_id` | INTEGER | Concept nguồn (0 nếu chưa có) |
| `source_vocabulary_id` | VARCHAR(20) | ID vocabulary tùy chỉnh |
| `source_code_description` | VARCHAR(255) | Mô tả |
| `target_concept_id` | INTEGER | FK → Standard Concept |
| `target_vocabulary_id` | VARCHAR(20) | Vocabulary đích |
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

## 5. CONCEPT_SYNONYM — Tên đồng nghĩa

| Cột | Kiểu | Mô tả |
|-----|------|-------|
| `concept_id` | INTEGER | FK → CONCEPT |
| `concept_synonym_name` | VARCHAR(1000) | Tên đồng nghĩa |
| `language_concept_id` | INTEGER | Ngôn ngữ (4180186 = English) |

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

## 6. Quy trình ETL Mapping hoàn chỉnh

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

## Tổng kết

1. **CONCEPT_RELATIONSHIP**: quan hệ trực tiếp giữa 2 concepts
2. **"Maps to"** = quan hệ quan trọng nhất cho ETL (Source → Standard)
3. **"Is a"** = phân cấp SNOMED (con → cha)
4. **CONCEPT_ANCESTOR**: pre-computed tất cả ancestor/descendant
5. **SOURCE_TO_CONCEPT_MAP**: mapping tùy chỉnh cho mã nội bộ
6. Luôn dùng CONCEPT_ANCESTOR khi phân tích hierarchical

**Bài tiếp theo:** DRUG_STRENGTH & các bảng Vocabulary còn lại.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — CONCEPT_RELATIONSHIP](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_RELATIONSHIP)
- [OMOP CDM 5.4 — CONCEPT_ANCESTOR](https://ohdsi.github.io/CommonDataModel/cdm54.html#CONCEPT_ANCESTOR)
- [OMOP CDM 5.4 — SOURCE_TO_CONCEPT_MAP](https://ohdsi.github.io/CommonDataModel/cdm54.html#SOURCE_TO_CONCEPT_MAP)
