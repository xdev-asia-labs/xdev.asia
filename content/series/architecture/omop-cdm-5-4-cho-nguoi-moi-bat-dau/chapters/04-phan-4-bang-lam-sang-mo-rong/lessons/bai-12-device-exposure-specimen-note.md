---
id: 019f1a00-a112-7b01-e001-omopcdm54012
title: "Bài 12: DEVICE_EXPOSURE, SPECIMEN & NOTE"
slug: bai-12-device-exposure-specimen-note
description: >-
  Ba bảng lâm sàng bổ sung: DEVICE_EXPOSURE cho thiết bị y tế
  (stent, pacemaker), SPECIMEN cho mẫu bệnh phẩm (máu, mô),
  NOTE và NOTE_NLP cho ghi chú lâm sàng và xử lý NLP.
duration_minutes: 50
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Bảng lâm sàng mở rộng"
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: "OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z"
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop12)"/>
  <g>
    <circle cx="680" cy="90" r="24" fill="#818cf8" opacity="0.12"/>
    <circle cx="760" cy="110" r="18" fill="#818cf8" opacity="0.09"/>
    <circle cx="840" cy="130" r="32" fill="#818cf8" opacity="0.06"/>
    <line x1="620" y1="160" x2="1100" y2="240" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="130" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Kiến trúc — Bài 12</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">DEVICE_EXPOSURE,</tspan>
    <tspan x="60" dy="42">SPECIMEN &amp; NOTE</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">OMOP CDM 5.4 cho Người mới — Hiểu từ A đến Z</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Bảng lâm sàng mở rộng</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài này giới thiệu ba bảng lâm sàng bổ sung: **DEVICE_EXPOSURE** (thiết bị y tế cấy/gắn trên bệnh nhân), **SPECIMEN** (mẫu bệnh phẩm dùng cho xét nghiệm), và **NOTE / NOTE_NLP** (ghi chú lâm sàng dạng văn bản tự do). Dù ít phổ biến hơn Condition/Drug/Procedure, chúng ngày càng quan trọng trong nghiên cứu.

---

## 1. DEVICE_EXPOSURE — Thiết bị y tế

### 1.1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `device_exposure_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `device_concept_id` | INTEGER | ✅ | Standard Concept |
| `device_exposure_start_date` | DATE | ✅ | Ngày bắt đầu |
| `device_exposure_start_datetime` | DATETIME | | |
| `device_exposure_end_date` | DATE | | Ngày tháo/hết hạn |
| `device_exposure_end_datetime` | DATETIME | | |
| `device_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `unique_device_id` | VARCHAR(255) | | Unique Device Identifier (UDI) |
| `production_id` | VARCHAR(255) | | ⭐ CDM 5.4 mới |
| `quantity` | INTEGER | | Số lượng |
| `provider_id` | INTEGER | FK | Bác sĩ |
| `visit_occurrence_id` | INTEGER | FK | Visit |
| `visit_detail_id` | INTEGER | FK | |
| `device_source_value` | VARCHAR(50) | | |
| `device_source_concept_id` | INTEGER | | |
| `unit_concept_id` | INTEGER | | ⭐ CDM 5.4 mới |
| `unit_source_value` | VARCHAR(50) | | ⭐ CDM 5.4 mới |
| `unit_source_concept_id` | INTEGER | | ⭐ CDM 5.4 mới |

### 1.2. Ví dụ

| Thiết bị | Concept | Ví dụ |
|---------|---------|-------|
| Stent mạch vành | 4138390 | Đặt stent sau can thiệp |
| Pacemaker | 4051938 | Máy tạo nhịp tim |
| Ống nội khí quản | 4097216 | Đặt NKQ khi phẫu thuật |
| Kính đeo mắt | 4175440 | Kê đơn kính |
| Máy trợ thính | 4023396 | Cấp máy trợ thính |
| Kim châm cứu | 0 | Thiết bị đông y (chưa có mapping) |

```sql
-- Đặt stent mạch vành
INSERT INTO device_exposure (
    device_exposure_id, person_id, device_concept_id,
    device_exposure_start_date,
    device_type_concept_id,
    unique_device_id, quantity,
    provider_id, visit_occurrence_id,
    device_source_value
) VALUES (
    140001, 100001, 4138390,
    '2024-06-15',
    32817,
    '(01)00844588003288(17)141120(10)A213B1',
    2,                            -- 2 stent
    5001, 50001,
    'STENT_CORONARY'
);
```

### 1.3. CDM 5.4 — production_id

Mới trong 5.4: `production_id` tách biệt với `unique_device_id`, dùng cho production identifier (serial number, lot number).

---

## 2. SPECIMEN — Mẫu bệnh phẩm

### 2.1. Cấu trúc bảng

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `specimen_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `specimen_concept_id` | INTEGER | ✅ | Loại mẫu (SNOMED) |
| `specimen_type_concept_id` | INTEGER | ✅ | Nguồn dữ liệu |
| `specimen_date` | DATE | ✅ | Ngày lấy mẫu |
| `specimen_datetime` | DATETIME | | |
| `quantity` | FLOAT | | Lượng mẫu |
| `unit_concept_id` | INTEGER | | Đơn vị (mL, g...) |
| `anatomic_site_concept_id` | INTEGER | | Vị trí lấy mẫu |
| `disease_status_concept_id` | INTEGER | | Tình trạng bệnh lý |
| `specimen_source_id` | VARCHAR(50) | | Mã barcode gốc |
| `specimen_source_value` | VARCHAR(50) | | Loại mẫu gốc |
| `unit_source_value` | VARCHAR(50) | | Đơn vị gốc |
| `anatomic_site_source_value` | VARCHAR(50) | | Vị trí gốc |
| `disease_status_source_value` | VARCHAR(50) | | Trạng thái gốc |

### 2.2. Loại mẫu phổ biến

| specimen_concept_id | Loại mẫu | Tiếng Việt |
|--------------------|----------|-----------|
| 4045667 | Blood specimen | Mẫu máu |
| 4048506 | Urine specimen | Nước tiểu |
| 4002890 | Serum specimen | Huyết thanh |
| 4219166 | Tissue specimen | Mẫu mô |
| 4045666 | Sputum specimen | Đàm |
| 4260640 | Cerebrospinal fluid | Dịch não tủy |
| 4000626 | Bone marrow | Tủy xương |

### 2.3. Liên kết Specimen → Measurement

```sql
-- Mẫu máu lấy ngày 15/6
INSERT INTO specimen VALUES (
    150001, 100001, 4045667,      -- Blood specimen
    32817, '2024-06-15', NULL,
    5, 8587,                      -- 5 mL
    4236402,                      -- Antecubital vein
    NULL, 'BARCODE_123456',
    'MAU_MAU', 'mL', 'tinh_mach_khuu_tay', NULL
);

-- Xét nghiệm Glucose từ mẫu máu này
-- (liên kết qua person_id + measurement_date + logic ETL)
```

> **Lưu ý:** SPECIMEN không có FK trực tiếp đến MEASUREMENT trong CDM 5.4. Liên kết thường qua person_id + date hoặc thông qua FACT_RELATIONSHIP.

---

## 3. NOTE — Ghi chú lâm sàng

### 3.1. Cấu trúc bảng NOTE

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `note_id` | INTEGER | ✅ PK | ID duy nhất |
| `person_id` | INTEGER | ✅ FK | Bệnh nhân |
| `note_date` | DATE | ✅ | Ngày ghi chú |
| `note_datetime` | DATETIME | | |
| `note_type_concept_id` | INTEGER | ✅ | Loại ghi chú |
| `note_class_concept_id` | INTEGER | ✅ | Phân loại |
| `note_title` | VARCHAR(250) | | Tiêu đề |
| `note_text` | CLOB | ✅ | Nội dung |
| `encoding_concept_id` | INTEGER | ✅ | Encoding (UTF-8) |
| `language_concept_id` | INTEGER | ✅ | Ngôn ngữ |
| `provider_id` | INTEGER | FK | Bác sĩ viết |
| `visit_occurrence_id` | INTEGER | FK | Visit |
| `visit_detail_id` | INTEGER | FK | |
| `note_source_value` | VARCHAR(50) | | |
| `note_event_id` | BIGINT | | ⭐ CDM 5.4 |
| `note_event_field_concept_id` | INTEGER | | ⭐ CDM 5.4 |

### 3.2. note_class_concept_id phổ biến

| Concept ID | Note Class | Tiếng Việt |
|-----------|-----------|-----------|
| 44814637 | Discharge summary | Tóm tắt xuất viện |
| 44814638 | Emergency department note | Ghi chú cấp cứu |
| 44814639 | Inpatient note | Ghi chú nội trú |
| 44814640 | Outpatient note | Ghi chú ngoại trú |
| 44814641 | Pathology report | Kết quả giải phẫu bệnh |
| 44814642 | Radiology report | Kết quả X-quang/CT |
| 44814643 | Surgical note | Biên bản phẫu thuật |

### 3.3. Ví dụ

```sql
-- Tóm tắt xuất viện
INSERT INTO note (
    note_id, person_id, note_date,
    note_type_concept_id, note_class_concept_id,
    note_title, note_text,
    encoding_concept_id, language_concept_id,
    provider_id, visit_occurrence_id
) VALUES (
    160001, 100001, '2024-06-20',
    32817,                            -- EHR
    44814637,                         -- Discharge summary
    'TÓM TẮT XUẤT VIỆN',
    'Bệnh nhân nam, 55 tuổi, nhập viện vì đau ngực. '
    || 'Chẩn đoán: Nhồi máu cơ tim cấp. '
    || 'Đã can thiệp mạch vành, đặt 2 stent. '
    || 'Xuất viện ngày 20/06/2024 với đơn thuốc: '
    || 'Aspirin 81mg, Clopidogrel 75mg, Atorvastatin 40mg. '
    || 'Tái khám sau 1 tháng.',
    32678,                            -- UTF-8
    4181730,                          -- Vietnamese
    5001, 50001
);
```

---

## 4. NOTE_NLP — Kết quả xử lý NLP

| Cột | Kiểu | Bắt buộc | Mô tả |
|-----|------|----------|-------|
| `note_nlp_id` | BIGINT | ✅ PK | ID |
| `note_id` | INTEGER | ✅ FK | Note gốc |
| `section_concept_id` | INTEGER | | Section (HPI, Assessment...) |
| `snippet` | VARCHAR(250) | | Đoạn text trích |
| `offset` | VARCHAR(50) | | Vị trí trong note |
| `lexical_variant` | VARCHAR(250) | ✅ | Từ/cụm từ gốc |
| `note_nlp_concept_id` | INTEGER | ✅ | Concept phát hiện |
| `note_nlp_source_concept_id` | INTEGER | | |
| `nlp_system` | VARCHAR(250) | | Tên NLP tool |
| `nlp_date` | DATE | ✅ | Ngày chạy NLP |
| `nlp_datetime` | DATETIME | | |
| `term_exists` | VARCHAR(1) | | Y/N — khẳng định hay phủ định |
| `term_temporal` | VARCHAR(50) | | Past/Present/Future |
| `term_modifiers` | VARCHAR(2000) | | Modifier (negation, family...) |

```sql
-- NLP phát hiện "Nhồi máu cơ tim" từ tóm tắt xuất viện
INSERT INTO note_nlp (
    note_nlp_id, note_id,
    snippet, offset, lexical_variant,
    note_nlp_concept_id,
    nlp_system, nlp_date,
    term_exists, term_temporal
) VALUES (
    170001, 160001,
    'Chẩn đoán: Nhồi máu cơ tim cấp',
    '120-153',
    'nhồi máu cơ tim cấp',
    4329847,                          -- SNOMED: AMI
    'cTAKES-VN', '2024-07-01',
    'Y',                              -- Có (không phải negation)
    'Present'                         -- Hiện tại
);
```

---

## 5. Khi nào dùng bảng nào?

```
  Dữ liệu gốc
       │
       ├── Thiết bị gắn/cấy trên BN ──→ DEVICE_EXPOSURE
       │   (stent, pacemaker, kính)
       │
       ├── Mẫu bệnh phẩm ──────────→ SPECIMEN
       │   (máu, nước tiểu, mô)
       │
       ├── Văn bản tự do ───────────→ NOTE
       │   (tóm tắt xuất viện,
       │    biên bản phẫu thuật)
       │
       └── Kết quả NLP từ NOTE ─────→ NOTE_NLP
           (concepts phát hiện tự động)
```

---

## Tổng kết

1. **DEVICE_EXPOSURE**: thiết bị y tế cấy/gắn, dùng UDI để truy vết
2. **SPECIMEN**: mẫu bệnh phẩm, liên kết gián tiếp với MEASUREMENT
3. **NOTE**: ghi chú lâm sàng dạng văn bản tự do, hỗ trợ tiếng Việt
4. **NOTE_NLP**: kết quả phân tích NLP, phát hiện concept tự động
5. CDM 5.4 thêm `production_id` (Device), `note_event_id` (Note)

**Bài tiếp theo:** DEATH, EPISODE & EPISODE_EVENT — các sự kiện đặc biệt.

---

## Tài liệu tham khảo

- [OMOP CDM 5.4 — DEVICE_EXPOSURE](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEVICE_EXPOSURE)
- [OMOP CDM 5.4 — SPECIMEN](https://ohdsi.github.io/CommonDataModel/cdm54.html#SPECIMEN)
- [OMOP CDM 5.4 — NOTE](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE)
- [OMOP CDM 5.4 — NOTE_NLP](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE_NLP)
