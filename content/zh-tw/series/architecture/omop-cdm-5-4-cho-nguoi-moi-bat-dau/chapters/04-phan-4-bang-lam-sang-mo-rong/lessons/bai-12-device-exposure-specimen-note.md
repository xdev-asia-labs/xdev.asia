---
id: 019f1a00-a112-7b01-e001-omopcdm54012
title: 第 12 課：設備曝光、樣本和註釋
slug: bai-12-device-exposure-specimen-note
description: >-
  三個額外的臨床表：用於醫療設備（支架、起搏器）的 DEVICE_EXPOSURE、用於樣本（血液、組織）的 SPECIMEN、用於臨床記錄和 NLP 處理的
  NOTE 和 NOTE_NLP。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：擴展臨床表
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 12 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">設備曝光，</tspan>
    <tspan x="60" dy="42">樣本和註釋</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：擴展臨床表</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

本文介紹了三個額外的臨床表：**DEVICE_EXPOSURE**（植入式/患者安裝的醫療設備）、**SPECIMEN**（用於測試的樣本）和**NOTE / NOTE_NLP**（自由文本臨床註釋）。儘管不如條件/藥物/程序常見，但它們在研究中越來越重要。

---

## 1.DEVICE_EXPOSURE — 醫療設備

### 1.1。表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `device_exposure_id` |整數| ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `device_concept_id` |整數| ✅ |標準理念|
| `device_exposure_start_date` |日期 | ✅ |開始日期 |
| `device_exposure_start_datetime` |日期時間 | | |
| `device_exposure_end_date` |日期 | |到期/刪除日期 |
| `device_exposure_end_datetime` |日期時間 | | |
| `device_type_concept_id` |整數| ✅ |資料來源|
| `unique_device_id` | VARCHAR(255) | |唯一裝置識別碼 (UDI) |
| `production_id` | VARCHAR(255) | | ⭐ 新CDM 5.4 |
| `quantity` |整數| |數量 |
| `provider_id` |整數|氟克 |醫生|
| `visit_occurrence_id` |整數|氟克 |瀏覽 |
| `visit_detail_id` |整數|氟克 | |
| `device_source_value` | VARCHAR(50) | | |
| `device_source_concept_id` |整數| | |
| `unit_concept_id` |整數| | ⭐ 新CDM 5.4 |
| `unit_source_value` | VARCHAR(50) | | ⭐ 新CDM 5.4 |
| `unit_source_concept_id` |整數| | ⭐ 新CDM 5.4 |

### 1.2。例如

|設備|概念 |範例|
|--------|---------|--------|
|冠狀動脈支架| 4138390 |介入後支架置入|
|起搏器| 4051938 |心律調節器|
|氣管插管| 4097216 | 4097216手術期間插管 |
|眼鏡| 4175440 | 4175440處方眼鏡|
|助聽器| 4023396 |助聽器等級|
|針灸針| 0 |東方醫學設備（尚未測繪）|

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

### 1.3。 CDM 5.4 — 生產_id

5.4 中的新增內容： `production_id` 與 分開 `unique_device_id`，用於生產識別碼（序號、批號）。

---

## 2. 樣本 — 病人樣本

### 2.1。表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `specimen_id` |整數| ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `specimen_concept_id` |整數| ✅ |樣本類型 (SNOMED) |
| `specimen_type_concept_id` |整數| ✅ |資料來源|
| `specimen_date` |日期 | ✅ |取樣日期|
| `specimen_datetime` |日期時間 | | |
| `quantity` |浮動| |樣品數 |
| `unit_concept_id` |整數| |單位（毫升、克...）|
| `anatomic_site_concept_id` |整數| |取樣地點 |
| `disease_status_concept_id` |整數| |醫療狀況 |
| `specimen_source_id` | VARCHAR(50) | |原始條碼|
| `specimen_source_value` | VARCHAR(50) | |原型號|
| `unit_source_value` | VARCHAR(50) | |原單位|
| `anatomic_site_source_value` | VARCHAR(50) | |原址|
| `disease_status_source_value` | VARCHAR(50) | |原始狀態|

### 2.2。熱門車款類型

|樣本概念 ID |樣本類型|越南語 |
|--------------------|----------|------------|
| 4045667 | 4045667血液樣本|血液樣本|
| 4048506 | 4048506尿液樣本|尿液 |
| 4002890 |血清標本|血清 |
| 4219166 | 4219166組織標本|組織樣本|
| 4045666 |痰標本|大壩|
| 4260640 | 4260640腦脊髓液|腦脊髓液|
| 4000626 |骨髓|骨髓|

### 2.3。樣本→測量鏈接

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

> **注意：** SPECIMEN 在 CDM 5.4 中沒有直接到 MEASUREMENT 的 FK。連結通常透過 person_id + 日期或透過 FACT_RELATIONSHIP 進行。

---

## 3. 注意 — 臨床記錄

### 3.1。注意表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `note_id` |整數| ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `note_date` |日期 | ✅ |備註日期 |
| `note_datetime` |日期時間 | | |
| `note_type_concept_id` |整數| ✅ |註解類型 |
| `note_class_concept_id` |整數| ✅ |分類|
| `note_title` | VARCHAR(250) | |標題 |
| `note_text` | CLOB | ✅ |內容 |
| `encoding_concept_id` |整數| ✅ |編碼 (UTF-8) |
| `language_concept_id` |整數| ✅ |語言 |
| `provider_id` |整數|氟克 |醫生寫道|
| `visit_occurrence_id` |整數|氟克 |瀏覽 |
| `visit_detail_id` |整數|氟克 | |
| `note_source_value` | VARCHAR(50) | | |
| `note_event_id` |大智 | | ⭐ 清潔發展機制5.4 |
| `note_event_field_concept_id` |整數| | ⭐ 清潔發展機制5.4 |

### 3.2。通用note_class_concept_id

|概念 ID |筆記類別|越南語 |
|------------|------------|------------|
| 44814637 | 44814637出院總結|出院總結|
| 44814638 |急診科注意事項|緊急注意事項|
| 44814639 |住院須知|登機須知 |
| 44814640 |門診須知|門診須知|
| 44814641 |病理報告|病理結果|
| 44814642 |放射學報告| X 光/CT 結果 |
| 44814643 |手術筆記|手術紀錄|

### 3.3。例如

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

## 4.NOTE_NLP－NLP處理結果

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `note_nlp_id` |大智 | ✅ PK |身分證 |
| `note_id` |整數| ✅ FK |原文|
| `section_concept_id` |整數| |部份（HPI、評估...）|
| `snippet` | VARCHAR(250) | |摘錄文字|
| `offset` | VARCHAR(50) | |註解中的位置 |
| `lexical_variant` | VARCHAR(250) | ✅ |字根/片語 |
| `note_nlp_concept_id` |整數| ✅ |概念發現|
| `note_nlp_source_concept_id` |整數| | |
| `nlp_system` | VARCHAR(250) | |名稱 NLP 工具 |
| `nlp_date` |日期 | ✅ | NLP 跑步日 |
| `nlp_datetime` |日期時間 | | |
| `term_exists` | VARCHAR(1) | VARCHAR(1) | | Y/N — 確認或否認 |
| `term_temporal` | VARCHAR(50) | |過去/現在/未來 |
| `term_modifiers` | VARCHAR(2000) | |修飾語（否定、家族...）|

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

## 5. 何時使用哪一個表格？

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

## 總結

1. **DEVICE_EXPOSURE**：植入/附著的醫療設備，使用UDI進行追踪
2. **樣本**：病人樣本，與測量間接相關
3. **注意**：自由文本臨床筆記，越南語支持
4. **NOTE_NLP**：NLP分析結果，自動概念檢測
5. 新增CDM 5.4 `production_id` （設備）， `note_event_id` (註)

**下一篇文章：** DEATH、EPISODE 和 EPISODE_EVENT — 特別事件。

---

## 參考文獻

- [OMOP CDM 5.4 — DEVICE_EXPOSURE](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEVICE_EXPOSURE)
- [OMOP CDM 5.4 — SPECIMEN](https://ohdsi.github.io/CommonDataModel/cdm54.html#SPECIMEN)
- [OMOP CDM 5.4 — NOTE](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE)
- [OMOP CDM 5.4 — NOTE_NLP](https://ohdsi.github.io/CommonDataModel/cdm54.html#NOTE_NLP)
