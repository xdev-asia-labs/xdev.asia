---
id: 019f1a00-a109-7b01-e001-omopcdm54009
title: 第 9 課：PROCEDURE_OCCURRENCE — 程序與手術
slug: bai-9-procedure-occurrence-thu-thuat-phau-thuat
description: >-
  記錄程序、手術和醫療幹預措施。 SNOMED / CPT4 / ICD-10-PCS
  映射，modifier_concept_id，區分程序與測量與藥物，練習越南醫院資料的 ETL。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 9
section_title: 第 3 部分：關鍵臨床事件
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 9 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">PROCEDURE_OCCURRENCE 過程</tspan>
    <tspan x="60" dy="42">程序和手術</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：關鍵臨床事件</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**PROCEDURE_OCCURRENCE** 記錄對患者進行的所有程序、手術和醫療幹預。從簡單的血壓測量到複雜的心臟直視手術——所有這些都在這張表中進行了標準化。本課程將幫助您了解何時使用程序、何時使用測量或藥物。

---

## 1.表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `procedure_occurrence_id` |整數| ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `procedure_concept_id` |整數| ✅ |標準理念|
| `procedure_date` |日期 | ✅ |實施日期 |
| `procedure_datetime` |日期時間 | |日期與時間 |
| `procedure_end_date` |日期 | |結束日期（新 CDM 5.4）|
| `procedure_end_datetime` |日期時間 | |截止時間 |
| `procedure_type_concept_id` |整數| ✅ |資料來源|
| `modifier_concept_id` |整數| |新增（左/右，第二個...）|
| `quantity` |整數| |執行次數|
| `provider_id` |整數|氟克 |醫生進行 |
| `visit_occurrence_id` |整數|氟克 |相關訪問 |
| `visit_detail_id` |整數|氟克 |瀏覽詳情 |
| `procedure_source_value` | VARCHAR(50) | |原始碼 |
| `procedure_source_concept_id` |整數| |原創概念|
| `modifier_source_value` | VARCHAR(50) | |原始修改器|

**CDM 5.4 中的新增功能：** `procedure_end_date` 和 `procedure_end_datetime` — 對於持續數小時/數天的手術很重要。

---

## 2. 程式詞彙

### 2.1。熱門詞彙

|詞彙|角色 |範例|
|------------|---------|--------|
| **SNOMED CT** |標準概念|闌尾切除術 (44783086) |
| **CPT4** |美國帳單代碼 | 44970（腹腔鏡闌尾切除術）|
| **ICD-10-PCS** |美國住院程序| 0DTJ4ZZ |
| **ICD-9-過程** |美國遺留程序| 47.01 | 47.01
| **HCPCS** |美國門診服務| G0101 |

### 2.2。域路由規則

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

> **黃金法則：** 總是檢查標準概念的domain_id。即使原始程式碼是CPT4（過程程式碼），如果Standard Concept的domain=Measurement，則必須將其保存在MEASUREMENT中。

---

## 3. 程序、測量、藥物 — 邊界

|原始資料|在哪裡？ |原因 |
|------------|--------|--------|
|闌尾炎手術| **程序** |域=過程|
|腹部超音波| **程序** |領域 = 程序（成像）|
|血液檢查（結果 5.8 mmol/L）| **測量** |有測量值→測量|
|心肺X光檢查（無結果）| **程式** |成像→程式|
|胰島素注射| **藥物暴露** |藥品管理|
|大腸鏡檢查+切片| **程序** |程序介入|
|物理治療 30 分鐘 | **程序** |程序域|
|輸血| **程序** |輸血=程序|

---

## 4.modifier_concept_id — 附加訊息

|概念 ID |修改器 |意義|
|------------|----------|---------|
| 4148525 | 4148525左|左|
| 4149625 | 4149625對|對|
| 4236436 | 4236436雙邊|雙方|
| 4215561 | 4215561初次邂逅 |第一次 |
| 4215562 | 4215562隨後的相遇|複試|

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

## 5. ETL VN 數據

### 5.1。熱門資料來源

|來源 |描述 |原始詞彙|
|------|------|----------------|
|醫院技術服務一覽| BV技術服務|內部代碼|
| ICD-9-CM 程序 |舊手術代碼| ICD9 程序 |
|社會保險一覽|社會保險服務代碼|內部保險代碼 |

### 5.2。 SQL ETL

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

### 5.3。處理域路由

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

## 6.SQL分析

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

## 總結

1. **PROCEDURE_OCCURRENCE** = 程序、手術、介入、影像
2. 主要標準詞彙：**SNOMED CT**
3. **網域路由**極為重要：CPT4程式碼可以對應到Measurement，而不是Procedure
4. CDM 5.4 增加了延長手術的 **procedure_end_date**
5. **modifier_concept_id** 用於左/右，初始/重訪
6. ETL VN：內部記帳服務代碼 → SOURCE_TO_CONCEPT_MAP → 標準 SNOMED

**下一篇文章：** 測量 — 測試、測量和數值。

---

## 參考文獻

- [OMOP CDM 5.4 — PROCEDURE_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#PROCEDURE_OCCURRENCE)
- [Athena — Procedure Domain](https://athena.ohdsi.org/)
