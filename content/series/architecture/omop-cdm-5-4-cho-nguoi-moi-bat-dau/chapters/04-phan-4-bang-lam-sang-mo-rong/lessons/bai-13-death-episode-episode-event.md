---
id: 019f1a00-a113-7b01-e001-omopcdm54013
title: "Bài 13: DEATH, EPISODE & EPISODE_EVENT"
slug: bai-13-death-episode-episode-event
description: >-
  Ghi nhận tử vong (DEATH), quá trình bệnh lý dài hạn
  (EPISODE — mới CDM 5.4) như điều trị ung thư, và
  liên kết event trong episode (EPISODE_EVENT).
duration_minutes: 50
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Bảng lâm sàng mở rộng"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop13)"/>
  <g>
    <circle cx="700" cy="85" r="20" fill="#818cf8" opacity="0.12"/>
    <circle cx="780" cy="115" r="28" fill="#818cf8" opacity="0.08"/>
    <circle cx="870" cy="95" r="24" fill="#818cf8" opacity="0.06"/>
    <line x1="640" y1="150" x2="1100" y2="230" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 13</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DEATH, EPISODE</tspan>
    <tspan x="60" dy="42">&amp; EPISODE_EVENT</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Bảng lâm sàng mở rộng</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Ba bảng cuối cùng trong nhóm Clinical Data: **DEATH** ghi nhận sự kiện tử vong, **EPISODE** (mới trong CDM 5.4) ghi nhận quá trình bệnh lý/điều trị dài hạn, và **EPISODE_EVENT** liên kết các sự kiện thuộc một episode. EPISODE là addition đáng chú ý nhất của CDM 5.4, đặc biệt quan trọng cho nghiên cứu ung thư.

---

## 1. DEATH — Ghi nhận tử vong

### 1.1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `person_id` | INTEGER | ✅ PK/FK | Bệnh nhân (1 record/BN) |
| `death_date` | DATE | ✅ | Ngày tử vong |
| `death_datetime` | DATETIME | | Ngày giờ tử vong |
| `death_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `cause_concept_id` | INTEGER | | Nguyên nhân tử vong (SNOMED) |
| `cause_source_value` | VARCHAR(50) | | ICD gốc |
| `cause_source_concept_id` | INTEGER | | Concept gốc |

### 1.2. Đặc điểm quan trọng

- **1 record duy nhất** per person — nếu có nhiều nguồn, chọn đáng tin nhất
- **person_id** vừa là PK vừa là FK → không có death_id riêng
- **cause_concept_id**: dùng SNOMED cho nguyên nhân chính

### 1.3. death_type_concept_id

| Concept ID | Nguồn | Mô tả |
|-----------|------|-------|
| 32817 | EHR | Ghi nhận từ HIS |
| 32810 | Claim | Dữ liệu BHXH |
| 32885 | Death certificate | Giấy chứng tử |
| 32886 | National Death Index | Sổ bộ quốc gia |

### 1.4. Ví dụ

```sql
-- BN tử vong do nhồi máu cơ tim cấp
INSERT INTO death (
    person_id, death_date,
    death_type_concept_id,
    cause_concept_id,
    cause_source_value,
    cause_source_concept_id
) VALUES (
    100001, '2024-06-20',
    32885,                        -- Death certificate
    4329847,                      -- SNOMED: AMI
    'I21.9',                      -- ICD-10
    45572161                      -- ICD10CM concept
);
```

### 1.5. SQL phân tích

```sql
-- Top 10 nguyên nhân tử vong
SELECT
    c.concept_name AS cause_of_death,
    COUNT(*) AS death_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS pct
FROM death d
JOIN concept c ON d.cause_concept_id = c.concept_id
WHERE d.cause_concept_id != 0
GROUP BY c.concept_name
ORDER BY death_count DESC
LIMIT 10;

-- Tỉ lệ tử vong sau nhập viện ICU
SELECT
    ROUND(
        COUNT(DISTINCT d.person_id) * 100.0 /
        NULLIF(COUNT(DISTINCT v.person_id), 0), 1
    ) AS mortality_rate_pct
FROM visit_occurrence v
LEFT JOIN death d ON v.person_id = d.person_id
    AND d.death_date BETWEEN v.visit_start_date
    AND v.visit_start_date + INTERVAL '30 days'
WHERE v.visit_concept_id = 32037;  -- ICU visit
```

---

## 2. EPISODE — Quá trình bệnh lý (CDM 5.4 mới)

### 2.1. Tại sao cần EPISODE?

Trước CDM 5.4, không có cách thể hiện "quá trình điều trị ung thư" — các sự kiện (chẩn đoán, hóa trị, xạ trị, phẫu thuật) nằm rải rác ở nhiều bảng. EPISODE gom chúng lại thành một "câu chuyện" hoàn chỉnh.

```
  Trước CDM 5.4:

  CONDITION: Ung thư phổi ─────────── (rời rạc)
  PROCEDURE: Sinh thiết phổi ────────── (rời rạc)
  DRUG:      Cisplatin cycle 1 ──────── (rời rạc)
  DRUG:      Cisplatin cycle 2 ──────── (rời rạc)
  PROCEDURE: Phẫu thuật cắt thùy phổi ─ (rời rạc)

  Sau CDM 5.4:

  EPISODE: "Điều trị ung thư phổi giai đoạn 3"
       │
       ├── EPISODE_EVENT → CONDITION (chẩn đoán)
       ├── EPISODE_EVENT → PROCEDURE (sinh thiết)
       ├── EPISODE_EVENT → DRUG (hóa trị cycle 1)
       ├── EPISODE_EVENT → DRUG (hóa trị cycle 2)
       └── EPISODE_EVENT → PROCEDURE (phẫu thuật)
```

### 2.2. Cấu trúc bảng EPISODE

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `episode_id` | BIGINT | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `episode_concept_id` | INTEGER | ✅ | Loại episode |
| `episode_start_date` | DATE | ✅ | Ngày bắt đầu |
| `episode_start_datetime` | DATETIME | | |
| `episode_end_date` | DATE | | Ngày kết thúc |
| `episode_end_datetime` | DATETIME | | |
| `episode_parent_id` | BIGINT | | Episode cha (phân cấp) |
| `episode_number` | INTEGER | | Số thứ tự |
| `episode_object_concept_id` | INTEGER | ✅ | Đối tượng episode |
| `episode_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `episode_source_value` | VARCHAR(50) | | Mã gốc |
| `episode_source_concept_id` | INTEGER | | |

### 2.3. episode_concept_id — Loại Episode

| Concept ID | Episode Type | Ví dụ |
|-----------|-------------|-------|
| 32528 | Disease first occurrence | Ung thư phổi lần đầu |
| 32529 | Disease recurrence | Ung thư tái phát |
| 32531 | Treatment regimen | Phác đồ Cisplatin-Etoposide |
| 32532 | Treatment cycle | Cycle 1, Cycle 2... |

### 2.4. Ví dụ: Điều trị ung thư phổi

```sql
-- Episode cha: Bệnh ung thư phổi
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200001, 100001,
    32528,                            -- Disease first occurrence
    '2024-01-15', NULL,               -- Chưa kết thúc
    NULL,                             -- Không có cha
    4311499,                          -- SNOMED: Lung cancer
    32817                             -- EHR
);

-- Episode con: Phác đồ hóa trị
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_number,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200002, 100001,
    32531,                            -- Treatment regimen
    '2024-02-01', '2024-06-30',
    200001,                           -- Thuộc episode ung thư phổi
    1,
    35804410,                         -- Cisplatin regimen
    32817
);

-- Episode con: Cycle 1
INSERT INTO episode (
    episode_id, person_id,
    episode_concept_id,
    episode_start_date, episode_end_date,
    episode_parent_id,
    episode_number,
    episode_object_concept_id,
    episode_type_concept_id
) VALUES (
    200003, 100001,
    32532,                            -- Treatment cycle
    '2024-02-01', '2024-02-21',
    200002,                           -- Thuộc phác đồ
    1,                                -- Cycle 1
    35804410,
    32817
);
```

---

## 3. EPISODE_EVENT — Liên kết sự kiện

### 3.1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `episode_id` | BIGINT | ✅ FK | Episode |
| `event_id` | BIGINT | ✅ | ID của sự kiện |
| `episode_event_field_concept_id` | INTEGER | ✅ | Bảng chứa event |

### 3.2. episode_event_field_concept_id

| Concept ID | Bảng sự kiện |
|-----------|-------------|
| 1147127 | condition_occurrence.condition_occurrence_id |
| 1147094 | drug_exposure.drug_exposure_id |
| 1147082 | procedure_occurrence.procedure_occurrence_id |
| 1147138 | measurement.measurement_id |
| 1147165 | device_exposure.device_exposure_id |

### 3.3. Ví dụ: Gắn events vào Cycle 1

```sql
-- Chẩn đoán ung thư → Episode chẩn đoán
INSERT INTO episode_event VALUES (
    200001,                           -- Episode: lung cancer
    70010,                            -- condition_occurrence_id
    1147127                           -- condition_occurrence table
);

-- Hóa trị Cisplatin → Episode Cycle 1
INSERT INTO episode_event VALUES (
    200003,                           -- Episode: Cycle 1
    80010,                            -- drug_exposure_id (Cisplatin)
    1147094                           -- drug_exposure table
);

-- XN máu trước hóa trị → Episode Cycle 1
INSERT INTO episode_event VALUES (
    200003,
    110020,                           -- measurement_id (CBC)
    1147138                           -- measurement table
);
```

---

## 4. Ứng dụng EPISODE trong nghiên cứu

```sql
-- Tìm BN ung thư phổi có >= 4 cycle hóa trị
SELECT
    e_disease.person_id,
    c_disease.concept_name AS cancer_type,
    COUNT(e_cycle.episode_id) AS total_cycles
FROM episode e_disease
JOIN concept c_disease
    ON e_disease.episode_object_concept_id = c_disease.concept_id
JOIN episode e_regimen
    ON e_disease.episode_id = e_regimen.episode_parent_id
    AND e_regimen.episode_concept_id = 32531  -- Treatment regimen
JOIN episode e_cycle
    ON e_regimen.episode_id = e_cycle.episode_parent_id
    AND e_cycle.episode_concept_id = 32532    -- Treatment cycle
WHERE e_disease.episode_concept_id = 32528    -- First occurrence
  AND c_disease.concept_id = 4311499          -- Lung cancer
GROUP BY e_disease.person_id, c_disease.concept_name
HAVING COUNT(e_cycle.episode_id) >= 4;

-- Timeline điều trị 1 BN
SELECT
    e.episode_number,
    ec.concept_name AS episode_type,
    e.episode_start_date,
    e.episode_end_date,
    oc.concept_name AS episode_object
FROM episode e
JOIN concept ec ON e.episode_concept_id = ec.concept_id
JOIN concept oc ON e.episode_object_concept_id = oc.concept_id
WHERE e.person_id = 100001
ORDER BY e.episode_start_date, e.episode_number;
```

---

## Tổng kết

1. **DEATH**: 1 record/person, nguyên nhân tử vong dùng SNOMED
2. **EPISODE** (CDM 5.4 mới): quá trình bệnh lý/điều trị, hỗ trợ phân cấp cha-con
3. **EPISODE_EVENT**: liên kết events từ nhiều bảng vào episode
4. EPISODE thiết kế chủ yếu cho **oncology** nhưng áp dụng được cho mọi bệnh mạn tính
5. Cấu trúc: Disease → Treatment Regimen → Treatment Cycle → Events

**Bài tiếp theo:** Bắt đầu Phần 5 — Standardized Vocabularies, hệ thống từ điển chuẩn hóa.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — DEATH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEATH)
- [OMOP CDM 5.4 — EPISODE](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE)
- [OMOP CDM 5.4 — EPISODE_EVENT](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE_EVENT)
- [OHDSI Oncology WG](https://www.ohdsi.org/web/wiki/doku.php?id=documentation:next_cdm:oncology)
