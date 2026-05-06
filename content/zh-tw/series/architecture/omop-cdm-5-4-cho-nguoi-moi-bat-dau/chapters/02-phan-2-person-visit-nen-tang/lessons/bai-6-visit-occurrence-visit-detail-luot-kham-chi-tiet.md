---
id: 019f1a00-a106-7b01-e001-omopcdm54006
title: 第 6 課：VISIT_OCCURRENCE 和 VISIT_DETAIL — 訪問和詳細信息
slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
description: >-
  就診類型（住院、門診、急診室、遠距醫療）、VISIT_OCCURRENCE、VISIT_DETAIL 結構（了解就診詳細資訊）、入院/出院以及 OMOP
  模式中的就診事件關係。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：人員與存取 — 資料平台
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop06" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop06)"/>
  <g>
    <circle cx="659" cy="87" r="22" fill="#818cf8" opacity="0.12"/>
    <circle cx="718" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="777" cy="125" r="36" fill="#818cf8" opacity="0.06"/>
    <circle cx="836" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 6 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">VISIT_OCCURRENCE 和 VISIT_DETAIL</tspan>
    <tspan x="60" dy="42">參觀及詳情</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：人員與存取 — 資料平台</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**VISIT_OCCURRENCE** 記錄每次患者與醫療保健系統的接觸—從門診、住院、急診室到遠距醫療。 **VISIT_DETAIL** 添加了更多細節：在一次住院期間，患者可以轉移到多個科室。

這兩個表是人員和所有臨床事件之間的**橋樑**。

---

## 1. VISIT_OCCURRENCE — 結構

### 1.1。欄位列表

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `visit_occurrence_id` |整數 | ✅ PK |每次訪問的唯一 ID |
| `person_id` |整數 | ✅ FK |人物參考 |
| `visit_concept_id` |整數 | ✅ |存取類型（標準概念）|
| `visit_start_date` |日期 | ✅ |開始日期 |
| `visit_start_datetime` |日期時間 | |開始日期和時間 |
| `visit_end_date` |日期 | ✅ |結束日期 |
| `visit_end_datetime` |日期時間 | |結束日期和時間 |
| `visit_type_concept_id` |整數 | ✅ |資料來源（EHR、索賠...）|
| `provider_id` |整數 |氟克 |主治醫生|
| `care_site_id` |整數 |氟克 |醫療設施|
| `visit_source_value` | VARCHAR(50) | |原始存取碼 |
| `visit_source_concept_id` |整數 | |原創概念|
| `admitted_from_concept_id` |整數 | |你從哪裡來（家、急診室...） |
| `admitted_from_source_value` | VARCHAR(50) | |原值|
| `discharged_to_concept_id` |整數 | |出院後去哪裡|
| `discharged_to_source_value` | VARCHAR(50) | |原值|
| `preceding_visit_occurrence_id` |整數 |氟克 |上次造訪 |

### 1.2。重要的訪問類型

|訪問概念 ID |概念名稱|越南 | 描述
|-----------------|-------------|------------|
| 9201 | 9201 **住院就診** |住院 |
| 9202 | 9202 **門診就診** |門診檢查|
| 9203 | 9203 **急診室就診** |急診|
| 262 | 262 **急診室及住院就診** |緊急→住院|
| 581477 | **遠距醫療** |遠距檢查 |
| 32693 | 32693 **藥局參觀** |去藥局買藥|
| 581476 | **家訪** |居家考試|
| 38004515 | **實驗室參觀** |剛來測試|

---

## 2. 例：病人入院

```
  Bệnh nhân 100001: Nhập viện 10 ngày tại BV Chợ Rẫy
  
  ┌──────────────── VISIT_OCCURRENCE ────────────────┐
  │ visit_occurrence_id = 50001                       │
  │ person_id = 100001                                │
  │ visit_concept_id = 9201 (Inpatient Visit)         │
  │ visit_start_date = 2024-06-10                     │
  │ visit_end_date = 2024-06-20                       │
  │ admitted_from_concept_id = 581476 (Home)           │
  │ discharged_to_concept_id = 581476 (Home)           │
  │ care_site_id = 2001 (BV Chợ Rẫy)                │
  └───────────────────────────────────────────────────┘
      │
      │  Trong visit này có các events:
      │
      ├── CONDITION: Tiểu đường type 2 (chẩn đoán chính)
      ├── CONDITION: Tăng huyết áp (chẩn đoán phụ)
      ├── DRUG: Metformin 500mg x 20 viên
      ├── DRUG: Amlodipine 5mg x 10 viên
      ├── MEASUREMENT: HbA1c = 8.2%
      ├── MEASUREMENT: Creatinine = 1.2 mg/dL
      ├── PROCEDURE: Siêu âm bụng
      └── OBSERVATION: Tiền sử hút thuốc
```

```sql
INSERT INTO visit_occurrence VALUES (
    50001,                -- visit_occurrence_id
    100001,               -- person_id
    9201,                 -- visit_concept_id (Inpatient)
    '2024-06-10',         -- visit_start_date
    '2024-06-10 08:30:00', -- visit_start_datetime
    '2024-06-20',         -- visit_end_date
    '2024-06-20 14:00:00', -- visit_end_datetime
    32817,                -- visit_type_concept_id (EHR)
    5001,                 -- provider_id
    2001,                 -- care_site_id
    'MNV-2024-50001',     -- visit_source_value
    0,                    -- visit_source_concept_id
    581476,               -- admitted_from_concept_id (Home)
    'Nhà',                -- admitted_from_source_value
    581476,               -- discharged_to_concept_id (Home)
    'Nhà',                -- discharged_to_source_value
    NULL                  -- preceding_visit_occurrence_id
);
```

---

## 3. VISIT_DETAIL — 訪問詳情

### 3.1。什麼時候需要 VISIT_DETAIL？

VISIT_DETAIL 捕捉 VISIT_OCCURRENCE 中的**子詳細資料**。當病人被轉移到多個科室時，對於**住院治療**特別有用：

```
  VISIT_OCCURRENCE (Inpatient, 10 ngày):
  ═══════════════════════════════════════════════════
  
  VISIT_DETAIL (chi tiết):
  ├── Cấp cứu (10/06, 2 giờ)
  │   ═══
  ├── Khoa Nội tiết (10/06 → 15/06, 5 ngày)
  │   ═══════════════════
  ├── ICU (15/06 → 17/06, 2 ngày)
  │   ═══════
  └── Khoa Nội tiết (17/06 → 20/06, 3 ngày)
      ═══════════
```

### 3.2。 VISIT_DETAIL 結構

|專欄 |類型 |說明 |
|-----|--------|--------|
| `visit_detail_id` |整數 | PK |
| `person_id` |整數 | FK → 人 |
| `visit_detail_concept_id` |整數 |詳細資料類型（科室、病房...）|
| `visit_detail_start_date` |日期 |部門開始日期|
| `visit_detail_end_date` |日期 |離開部門日期 |
| `visit_detail_type_concept_id` |整數 |資料來源|
| `provider_id` |整數 |科室主任醫師 |
| `care_site_id` |整數 |具體部門/部門 |
| `visit_occurrence_id` |整數| **FK → VISIT_OCCURRENCE**（父級）|
| `visit_detail_parent_id` |整數| FK → VISIT_DETAIL（父親詳細資料）|
| `admitted_from_concept_id` |整數|從哪裡轉車 |
| `discharged_to_concept_id` |整數|搬到哪裡|
| `visit_detail_source_value` | VARCHAR(50) |原值|

### 3.3。例如

```sql
-- Visit Detail cho chuyển khoa
INSERT INTO visit_detail VALUES
    -- Cấp cứu (2 giờ)
    (1, 100001, 9203, '2024-06-10', '2024-06-10', 32817,
     5002, 2010, 50001, NULL, 581476, NULL, 'ED'),
    -- Khoa Nội tiết (5 ngày)
    (2, 100001, 9201, '2024-06-10', '2024-06-15', 32817,
     5003, 2020, 50001, 1, NULL, NULL, 'NOI_TIET'),
    -- ICU (2 ngày)
    (3, 100001, 32037, '2024-06-15', '2024-06-17', 32817,
     5004, 2030, 50001, 2, NULL, NULL, 'ICU'),
    -- Quay lại Nội tiết (3 ngày)
    (4, 100001, 9201, '2024-06-17', '2024-06-20', 32817,
     5003, 2020, 50001, 3, NULL, 581476, 'NOI_TIET');
```

---

## 4.訪問↔臨床事件關係

每個臨床事件表都有列 `visit_occurrence_id`：

```sql
-- Tìm tất cả events trong 1 visit
SELECT 'Conditions' AS type, COUNT(*) AS count
FROM condition_occurrence WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Drugs', COUNT(*)
FROM drug_exposure WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Measurements', COUNT(*)
FROM measurement WHERE visit_occurrence_id = 50001
UNION ALL
SELECT 'Procedures', COUNT(*)
FROM procedure_occurrence WHERE visit_occurrence_id = 50001;
```

CDM 5.4也加入了 `visit_detail_id` 輸入多個臨床表 — 表示就診期間事件發生在哪個**部門**：

```sql
-- Xét nghiệm nào thực hiện tại ICU?
SELECT m.*
FROM measurement m
JOIN visit_detail vd ON m.visit_detail_id = vd.visit_detail_id
WHERE vd.care_site_id = 2030;  -- ICU
```

---

## 5. previous_visit_occurrence_id — 字串訪問

專欄 `preceding_visit_occurrence_id` 在訪問之間建立**連結列表**：

```
  Visit 1 (2024-01-15, Outpatient)
      │
      └──→ Visit 2 (2024-03-20, Outpatient)
               │    preceding_visit_occurrence_id = Visit 1
               └──→ Visit 3 (2024-06-10, Inpatient)
                        preceding_visit_occurrence_id = Visit 2
```

```sql
-- Timeline visits của 1 bệnh nhân
WITH RECURSIVE visit_chain AS (
    SELECT visit_occurrence_id, visit_start_date,
           visit_concept_id, preceding_visit_occurrence_id, 1 AS seq
    FROM visit_occurrence
    WHERE person_id = 100001 AND preceding_visit_occurrence_id IS NULL
    UNION ALL
    SELECT vo.visit_occurrence_id, vo.visit_start_date,
           vo.visit_concept_id, vo.preceding_visit_occurrence_id, vc.seq + 1
    FROM visit_occurrence vo
    JOIN visit_chain vc ON vo.preceding_visit_occurrence_id = vc.visit_occurrence_id
)
SELECT * FROM visit_chain ORDER BY seq;
```

---

## 6. 存取的 ETL 約定

### 6.1。一般規則

|規則|詳情 |
|--------|----------|
| 1 次相遇 = 1 次造訪 |每次曝光 = 1 VISIT_OCCURRENCE |
|當天門診 |如果同一天 + 同一設施，可合併為 1 次訪問 |
|急診室 → 住院 |使用概念 262（急診室和住院）|
|訪問結束日期 |如果捐款：結束日期=開始日期|
|如果沒有來訪|建立「虛擬存取」concept_id = 0 |

### 6.2。越南醫院的 ETL 範例

```sql
-- Mapping HIS VN → OMOP VISIT_OCCURRENCE
SELECT
    ROW_NUMBER() OVER() AS visit_occurrence_id,
    bn.person_id,
    CASE
        WHEN kc.loai_kham = 'NOI_TRU' THEN 9201   -- Inpatient
        WHEN kc.loai_kham = 'NGOAI_TRU' THEN 9202  -- Outpatient
        WHEN kc.loai_kham = 'CAP_CUU' THEN 9203    -- ER
        WHEN kc.loai_kham = 'KHAM_TU_XA' THEN 581477 -- Telehealth
        ELSE 0  -- Unknown
    END AS visit_concept_id,
    kc.ngay_vao AS visit_start_date,
    COALESCE(kc.ngay_ra, kc.ngay_vao) AS visit_end_date,
    32817 AS visit_type_concept_id,  -- EHR
    kc.ma_kham AS visit_source_value
FROM kcb_his kc
JOIN person_mapping bn ON kc.ma_bn = bn.source_id;
```

---

## 7.常用的分析SQL

```sql
-- Phân bố loại visit
SELECT
    c.concept_name AS visit_type,
    COUNT(*) AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 1) AS pct
FROM visit_occurrence vo
JOIN concept c ON vo.visit_concept_id = c.concept_id
GROUP BY c.concept_name
ORDER BY count DESC;

-- Thời gian nằm viện trung bình (Length of Stay)
SELECT
    ROUND(AVG(visit_end_date - visit_start_date), 1) AS avg_los_days
FROM visit_occurrence
WHERE visit_concept_id = 9201;  -- Inpatient only

-- Số visit trung bình mỗi bệnh nhân
SELECT
    ROUND(AVG(visit_count), 1) AS avg_visits_per_patient
FROM (
    SELECT person_id, COUNT(*) AS visit_count
    FROM visit_occurrence
    GROUP BY person_id
) sub;
```

---

## 總結

1. **VISIT_OCCURRENCE** 記錄病人每次聯絡醫療系統的時間
2. **就診類型**：住院病患 (9201)、門診病患 (9202)、急診室 (9203)、遠距醫療 (581477)
3. **VISIT_DETAIL**：一次就診的科室/房間詳細資料（尤其是入院）
4. **所有臨床事件** 連結訪問 `visit_occurrence_id`
5. **preceding_visit_occurrence_id**：隨著時間的推移創建一系列訪問
6. **入院_自/出院_**：追蹤進出病人流程

**下一篇文章：** 開始探索第一個臨床事件 - **CONDITION_OCCURRENCE** - 診斷和病理學。

---

## 參考文獻

- [OMOP CDM 5.4 — VISIT_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_OCCURRENCE)
- [OMOP CDM 5.4 — VISIT_DETAIL](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_DETAIL)
