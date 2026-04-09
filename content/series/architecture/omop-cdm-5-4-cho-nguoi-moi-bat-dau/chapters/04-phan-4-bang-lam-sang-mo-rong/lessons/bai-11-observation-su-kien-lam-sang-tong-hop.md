---
id: 019f1a00-a111-7b01-e001-omopcdm54011
title: "Bài 11: OBSERVATION — Sự kiện lâm sàng tổng hợp"
slug: bai-11-observation-su-kien-lam-sang-tong-hop
description: >-
  Bảng OBSERVATION ghi nhận sự kiện lâm sàng không thuộc
  Condition, Drug, Procedure, hay Measurement. Tiền sử bệnh,
  lối sống, dị ứng, tiền sử gia đình, observation_event_id
  mới CDM 5.4.
duration_minutes: 55
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Bảng lâm sàng mở rộng"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 11</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION</tspan>
    <tspan x="60" dy="42">Sự kiện lâm sàng tổng hợp</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Bảng lâm sàng mở rộng</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

**OBSERVATION** là bảng "catch-all" — nơi lưu trữ mọi sự kiện lâm sàng không phù hợp với Condition, Drug, Procedure, hay Measurement. Tiền sử bệnh, lối sống (hút thuốc, uống rượu), dị ứng, tiền sử gia đình, tình trạng hôn nhân — tất cả đều nằm ở đây.

---

## 1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `observation_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `observation_concept_id` | INTEGER | ✅ | Standard Concept |
| `observation_date` | DATE | ✅ | Ngày ghi nhận |
| `observation_datetime` | DATETIME | | Ngày giờ |
| `observation_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `value_as_number` | FLOAT | | Giá trị số |
| `value_as_string` | VARCHAR(60) | | Giá trị text |
| `value_as_concept_id` | INTEGER | | Giá trị danh mục |
| `qualifier_concept_id` | INTEGER | | Bổ sung ngữ cảnh |
| `unit_concept_id` | INTEGER | | Đơn vị |
| `provider_id` | INTEGER | FK | Provider ghi nhận |
| `visit_occurrence_id` | INTEGER | FK | Visit liên quan |
| `visit_detail_id` | INTEGER | FK | Visit detail |
| `observation_source_value` | VARCHAR(50) | | Mã gốc |
| `observation_source_concept_id` | INTEGER | | Concept gốc |
| `unit_source_value` | VARCHAR(50) | | Đơn vị gốc |
| `qualifier_source_value` | VARCHAR(50) | | Qualifier gốc |
| `value_as_datetime` | DATETIME | | ⭐ CDM 5.4 |
| `observation_event_id` | BIGINT | | ⭐ CDM 5.4 |
| `obs_event_field_concept_id` | INTEGER | | ⭐ CDM 5.4 |

---

## 2. Lưu gì vào OBSERVATION?

### 2.1. Danh sách use case

| Use case | observation_concept_id | value | Ví dụ |
|----------|----------------------|-------|-------|
| **Hút thuốc** | 4275495 (Tobacco smoking) | value_as_concept_id | 4298794 (Current smoker) |
| **Dị ứng** | 439224 (Allergy) | value_as_concept_id | Concept thuốc/thức ăn |
| **Tiền sử gia đình** | 4167217 (Family history of) | value_as_concept_id | Concept bệnh |
| **Tình trạng hôn nhân** | 4053609 (Marital status) | value_as_concept_id | 4338692 (Married) |
| **Nhóm máu** | 4041671 (Blood type) | value_as_concept_id | 36308332 (Type O) |
| **Tiền sử bệnh** | 4214956 (History of) + condition concept | value_as_concept_id | |
| **Thai kỳ** | 4299535 (Pregnancy) | value_as_concept_id | |
| **Nghề nghiệp** | 4019962 (Occupation) | value_as_string | "Giáo viên" |

### 2.2. OBSERVATION vs CONDITION — Khi nào lưu ở đâu?

| Dữ liệu | Bảng | Giải thích |
|---------|------|-----------|
| "Bệnh nhân bị tiểu đường type 2" | **CONDITION** | Bệnh đang hoạt động |
| "Tiền sử tiểu đường gia đình" | **OBSERVATION** | Family history |
| "BN từng bị viêm gan B (đã khỏi)" | **OBSERVATION** | History of |
| "Dị ứng Penicillin" | **OBSERVATION** | Allergy |
| "BN hút thuốc 20 năm" | **OBSERVATION** | Lifestyle |
| "Sốt 38.5°C" | **MEASUREMENT** | Có giá trị đo |

---

## 3. Ví dụ chi tiết

### 3.1. Hút thuốc

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

### 3.2. Dị ứng thuốc

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

### 3.3. Tiền sử gia đình

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

Tương tự measurement_event_id, cho phép liên kết observation với event khác.

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

## 5. qualifier_concept_id — Bổ sung ngữ cảnh

| Concept ID | Qualifier | Dùng cho |
|-----------|-----------|---------|
| 4129512 | Severe | Mức độ nặng |
| 4148136 | Mild | Mức độ nhẹ |
| 4129511 | Moderate | Mức độ vừa |
| 4166847 | Mother | Mối quan hệ gia đình |
| 4166848 | Father | Mối quan hệ gia đình |
| 4192403 | Sibling | Anh/chị/em |
| 4167233 | First degree relative | Họ hàng bậc 1 |

---

## 6. ETL dữ liệu VN

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

## 7. SQL phân tích

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

## Tổng kết

1. **OBSERVATION** = bảng "catch-all" cho dữ liệu không thuộc bảng chuyên biệt
2. Use case chính: hút thuốc, dị ứng, tiền sử gia đình, lối sống, hôn nhân
3. **qualifier_concept_id** thêm ngữ cảnh (mức độ, mối quan hệ)
4. CDM 5.4: **observation_event_id** liên kết với event khác
5. **Domain routing** quyết định Observation vs Condition vs Measurement

**Bài tiếp theo:** DEVICE_EXPOSURE, SPECIMEN & NOTE — thiết bị y tế, mẫu bệnh phẩm, và ghi chú lâm sàng.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — OBSERVATION](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION)
- [Athena — Observation Domain](https://athena.ohdsi.org/)
