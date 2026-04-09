---
id: 019f1a00-a109-7b01-e001-omopcdm54009
title: "Bài 9: PROCEDURE_OCCURRENCE — Thủ thuật & Phẫu thuật"
slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
description: >-
  Ghi nhận thủ thuật, phẫu thuật, can thiệp y khoa.
  SNOMED / CPT4 / ICD-10-PCS mapping, modifier_concept_id,
  phân biệt Procedure vs Measurement vs Drug, thực hành ETL
  dữ liệu bệnh viện Việt Nam.
duration_minutes: 55
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Sự kiện lâm sàng chính"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop09" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop09)"/>
  <g>
    <circle cx="700" cy="95" r="26" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="120" r="20" fill="#818cf8" opacity="0.09"/>
    <circle cx="850" cy="100" r="32" fill="#818cf8" opacity="0.06"/>
    <circle cx="910" cy="170" r="18" fill="#818cf8" opacity="0.10"/>
    <line x1="640" y1="160" x2="1100" y2="230" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 9</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">PROCEDURE_OCCURRENCE</tspan>
    <tspan x="60" dy="42">Thủ thuật &amp; Phẫu thuật</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Sự kiện lâm sàng chính</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**PROCEDURE_OCCURRENCE** ghi nhận mọi thủ thuật, phẫu thuật, và can thiệp y khoa được thực hiện trên bệnh nhân. Từ đo huyết áp đơn giản đến phẫu thuật tim mở phức tạp — tất cả đều được chuẩn hóa trong bảng này. Bài học sẽ giúp bạn hiểu khi nào dùng PROCEDURE, khi nào dùng MEASUREMENT hay DRUG.

---

## 1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `procedure_occurrence_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `procedure_concept_id` | INTEGER | ✅ | Standard Concept |
| `procedure_date` | DATE | ✅ | Ngày thực hiện |
| `procedure_datetime` | DATETIME | | Ngày giờ |
| `procedure_end_date` | DATE | | Ngày kết thúc (CDM 5.4 mới) |
| `procedure_end_datetime` | DATETIME | | Giờ kết thúc |
| `procedure_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `modifier_concept_id` | INTEGER | | Bổ sung (trái/phải, lần 2...) |
| `quantity` | INTEGER | | Số lần thực hiện |
| `provider_id` | INTEGER | FK | Bác sĩ thực hiện |
| `visit_occurrence_id` | INTEGER | FK | Visit liên quan |
| `visit_detail_id` | INTEGER | FK | Visit detail |
| `procedure_source_value` | VARCHAR(50) | | Mã gốc |
| `procedure_source_concept_id` | INTEGER | | Concept gốc |
| `modifier_source_value` | VARCHAR(50) | | Modifier gốc |

**Mới trong CDM 5.4:** `procedure_end_date` và `procedure_end_datetime` — quan trọng cho phẫu thuật kéo dài nhiều giờ/ngày.

---

## 2. Vocabulary cho Procedure

### 2.1. Các vocabulary phổ biến

| Vocabulary | Vai trò | Ví dụ |
|-----------|---------|-------|
| **SNOMED CT** | Standard concept | Appendectomy (44783086) |
| **CPT4** | US billing code | 44970 (Laparoscopic appendectomy) |
| **ICD-10-PCS** | US inpatient procedures | 0DTJ4ZZ |
| **ICD-9-Proc** | Legacy US procedures | 47.01 |
| **HCPCS** | US outpatient services | G0101 |

### 2.2. Domain routing quy tắc

```
  ICD-10-PCS mã = '0DTJ4ZZ' (Lapar appendectomy)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 44783086
  concept_name = 'Laparoscopic appendectomy'
  domain_id = 'Procedure'
       │
       └──→ Lưu vào PROCEDURE_OCCURRENCE ✓


  CPT4 mã = '80053' (Basic metabolic panel)
       │
       │ concept_relationship: Maps to
       ↓
  SNOMED concept_id = 3019897
  domain_id = 'Measurement'
       │
       └──→ Lưu vào MEASUREMENT ✗ (không phải Procedure!)
```

> **Quy tắc vàng:** Luôn check domain_id của Standard Concept. Dù mã nguồn là CPT4 (procedure code), nếu Standard Concept có domain = Measurement, phải lưu vào MEASUREMENT.

---

## 3. Procedure vs Measurement vs Drug — Ranh giới

| Dữ liệu gốc | Ở đâu? | Lý do |
|-------------|---------|-------|
| Phẫu thuật ruột thừa | **PROCEDURE** | Domain = Procedure |
| Siêu âm bụng | **PROCEDURE** | Domain = Procedure (imaging) |
| Xét nghiệm máu (kết quả 5.8 mmol/L) | **MEASUREMENT** | Có giá trị đo → Measurement |
| Chụp X-quang tim phổi (không kết quả) | **PROCEDURE** | Imaging → Procedure |
| Tiêm insulin | **DRUG_EXPOSURE** | Drug administration |
| Nội soi đại tràng + sinh thiết | **PROCEDURE** | Can thiệp thủ thuật |
| Vật lý trị liệu 30 phút | **PROCEDURE** | Procedure domain |
| Truyền máu | **PROCEDURE** | Transfusion = Procedure |

---

## 4. modifier_concept_id — Bổ sung thông tin

| Concept ID | Modifier | Ý nghĩa |
|-----------|----------|---------|
| 4148525 | Left | Bên trái |
| 4149625 | Right | Bên phải |
| 4236436 | Bilateral | Cả hai bên |
| 4215561 | Initial encounter | Lần đầu |
| 4215562 | Subsequent encounter | Tái khám |

```sql
-- Phẫu thuật cắt ruột thừa nội soi (bên phải)
INSERT INTO procedure_occurrence (
    procedure_occurrence_id, person_id, procedure_concept_id,
    procedure_date, procedure_end_date,
    procedure_type_concept_id,
    modifier_concept_id, quantity,
    provider_id, visit_occurrence_id,
    procedure_source_value
) VALUES (
    90001, 100001, 44783086,          -- SNOMED: Lapar appendectomy
    '2024-06-15', '2024-06-15',
    32817,                             -- EHR
    4149625, 1,                        -- Right side, 1 time
    5001, 50001,
    '0DTJ4ZZ'                          -- ICD-10-PCS
);
```

---

## 5. ETL dữ liệu VN

### 5.1. Nguồn dữ liệu phổ biến

| Nguồn | Mô tả | Vocabulary gốc |
|------|-------|----------------|
| Danh mục DVKT BV | Dịch vụ kỹ thuật BV | Mã nội bộ |
| ICD-9-CM Proc | Mã phẫu thuật cũ | ICD9Proc |
| Danh mục BHXH | Mã dịch vụ BHXH | Mã BH nội bộ |

### 5.2. SQL ETL

```sql
SELECT
    ROW_NUMBER() OVER() AS procedure_occurrence_id,
    pm.person_id,
    COALESCE(cr.concept_id_2, 0) AS procedure_concept_id,
    tt.ngay_thuchien AS procedure_date,
    tt.ngay_ketthuc AS procedure_end_date,
    32817 AS procedure_type_concept_id,
    0 AS modifier_concept_id,
    tt.so_lan AS quantity,
    tt.ma_dvkt AS procedure_source_value,
    COALESCE(c_source.concept_id, 0) AS procedure_source_concept_id
FROM thuthuat_his tt
JOIN person_mapping pm ON tt.ma_bn = pm.source_id
LEFT JOIN source_to_concept_map stcm
    ON tt.ma_dvkt = stcm.source_code
    AND stcm.source_vocabulary_id = 'VN_PROCEDURE'
LEFT JOIN concept c_std
    ON stcm.target_concept_id = c_std.concept_id
    AND c_std.standard_concept = 'S'
    AND c_std.domain_id = 'Procedure'   -- ← Chỉ Procedure domain!
LEFT JOIN concept c_source
    ON tt.ma_dvkt = c_source.concept_code
LEFT JOIN concept_relationship cr
    ON c_source.concept_id = cr.concept_id_1
    AND cr.relationship_id = 'Maps to';
```

### 5.3. Xử lý domain routing

```sql
-- DVKT "Xét nghiệm HbA1c" → mã CPT 83036
-- Standard concept domain = Measurement → KHÔNG lưu vào PROCEDURE

-- Bước 1: Tìm Standard Concept
SELECT c.*
FROM concept c
JOIN concept_relationship cr ON c.concept_id = cr.concept_id_2
    AND cr.relationship_id = 'Maps to'
JOIN concept c_src ON cr.concept_id_1 = c_src.concept_id
WHERE c_src.concept_code = '83036'
  AND c_src.vocabulary_id = 'CPT4';
-- domain_id = 'Measurement' → route sang MEASUREMENT table

-- Bước 2: Lưu vào đúng bảng
-- Nếu domain = 'Procedure' → procedure_occurrence
-- Nếu domain = 'Measurement' → measurement
-- Nếu domain = 'Observation' → observation
-- Nếu domain = 'Drug' → drug_exposure
```

---

## 6. SQL phân tích

```sql
-- Top 10 thủ thuật phổ biến
SELECT
    c.concept_name AS procedure_name,
    COUNT(*) AS procedure_count,
    COUNT(DISTINCT po.person_id) AS patient_count
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id != 0
GROUP BY c.concept_name
ORDER BY procedure_count DESC
LIMIT 10;

-- Thống kê phẫu thuật theo tháng
SELECT
    DATE_TRUNC('month', po.procedure_date) AS month,
    c.concept_name AS procedure_name,
    COUNT(*) AS total
FROM procedure_occurrence po
JOIN concept c ON po.procedure_concept_id = c.concept_id
WHERE po.procedure_concept_id = 44783086  -- Appendectomy
GROUP BY month, c.concept_name
ORDER BY month;

-- BN có cả chẩn đoán + phẫu thuật liên quan
SELECT
    po.person_id,
    co_cond.concept_name AS diagnosis,
    co_proc.concept_name AS procedure_name,
    co.condition_start_date,
    po.procedure_date
FROM procedure_occurrence po
JOIN condition_occurrence co ON po.person_id = co.person_id
    AND po.visit_occurrence_id = co.visit_occurrence_id
JOIN concept co_cond ON co.condition_concept_id = co_cond.concept_id
JOIN concept co_proc ON po.procedure_concept_id = co_proc.concept_id
WHERE co.condition_concept_id = 441604    -- Appendicitis
  AND po.procedure_concept_id = 44783086  -- Appendectomy
LIMIT 20;
```

---

## Tổng kết

1. **PROCEDURE_OCCURRENCE** = thủ thuật, phẫu thuật, can thiệp, imaging
2. Standard Vocabulary chính: **SNOMED CT**
3. **Domain routing** cực quan trọng: CPT4 code có thể map sang Measurement, không phải Procedure
4. CDM 5.4 bổ sung **procedure_end_date** cho phẫu thuật kéo dài
5. **modifier_concept_id** cho trái/phải, lần đầu/tái khám
6. ETL VN: mã DVKT nội bộ → SOURCE_TO_CONCEPT_MAP → Standard SNOMED

**Bài tiếp theo:** MEASUREMENT — xét nghiệm, đo lường, và giá trị số.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — PROCEDURE_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#PROCEDURE_OCCURRENCE)
- [Athena — Procedure Domain](https://athena.ohdsi.org/)
