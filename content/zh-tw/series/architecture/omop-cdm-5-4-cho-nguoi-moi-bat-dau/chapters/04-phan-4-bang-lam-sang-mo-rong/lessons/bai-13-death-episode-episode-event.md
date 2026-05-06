---
id: 019f1a00-a113-7b01-e001-omopcdm54013
title: 第 13 課：死亡、EPISODE 和 EPISODE_EVENT
slug: bai-13-death-episode-episode-event
description: 記錄死亡 (DEATH)、長期疾病過程（EPISODE — 新 CDM 5.4），例如癌症治療，以及發作中的相關事件 (EPISODE_EVENT)。
duration_minutes: 50
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：擴展臨床表
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 13 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">死亡，情節</tspan>
    <tspan x="60" dy="42">&EPISODE_EVENT</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：擴展臨床表</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

臨床資料組中的最後三個表：**DEATH** 記錄死亡事件，**EPISODE**（CDM 5.4 中的新增功能）記錄長期臨床/治療進展，**EPISODE_EVENT** 連結一次發作中的事件。 EPISODE 是 CDM 5.4 中最引人注目的補充，對於癌症研究尤其重要。

---

## 1. DEATH — 死亡記錄

### 1.1。表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `person_id` |整數| ✅ PK/FK |患者（1 筆記錄/患者）|
| `death_date` |日期 | ✅ |死亡日期 |
| `death_datetime` |日期時間 | |死亡日期和時間 |
| `death_type_concept_id` |整數| ✅ |資料來源|
| `cause_concept_id` |整數| |死亡原因 (SNOMED) |
| `cause_source_value` | VARCHAR(50) | |原廠ICD |
| `cause_source_concept_id` |整數| |原創概念|

### 1.2。重要特徵

- 每人 **1 個唯一記錄** — 如果有多個來源，請選擇最值得信賴的來源
- **person_id**既是PK又是FK→沒有自己的death_id
- **cause_concept_id**：使用 SNOMED 作為主要原因

### 1.3。死亡類型概念 ID

|概念 ID |來源 |描述 |
|------------|--------|--------|
| 32817 | 32817電子病歷 |從 HIS 記錄 |
| 32810 |索賠 |社保資料|
| 32885 |死亡證明|死亡證明|
| 32886 |全國死亡指數|國家登記冊|

### 1.4。例如

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

### 1.5。 SQL分析

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

## 2. 情節 — 病理過程（新 CDM 5.4）

### 2.1。為什麼我們需要劇集？

在 CDM 5.4 之前，無法表示「癌症治療過程」—事件（診斷、化療、放療、手術）分散在多個表格中。 EPISODE將它們組合成一個完整的「故事」。

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

### 2.2。 EPISODE表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `episode_id` |大智 | ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `episode_concept_id` |整數| ✅ |劇集類型 |
| `episode_start_date` |日期 | ✅ |開始日期 |
| `episode_start_datetime` |日期時間 | | |
| `episode_end_date` |日期 | |結束日期 |
| `episode_end_datetime` |日期時間 | | |
| `episode_parent_id` |大智 | |劇集父級（層次結構）|
| `episode_number` |整數| |序號 |
| `episode_object_concept_id` |整數| ✅ |劇集物件 |
| `episode_type_concept_id` |整數| ✅ |資料來源|
| `episode_source_value` | VARCHAR(50) | |原始碼 |
| `episode_source_concept_id` |整數| | |

### 2.3。 Episode_concept_id — 劇集類型

|概念 ID |剧集类型 |示例|
|------------|-------------|--------|
| 32528 | 32528疾病首次出現|首次發現肺癌|
| 32529 | 32529疾病復發 |癌症復發|
| 32531 | 32531治療方案|順鉑-依托泊苷方案|
| 32532 | 32532治療週期|週期 1、週期 2... |

### 2.4。例如：肺癌治療

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

## 3. EPISODE_EVENT — 事件綁定

### 3.1。表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `episode_id` |大智 | ✅ FK |劇集 |
| `event_id` |大智 | ✅ |事件 ID |
| `episode_event_field_concept_id` |整数| ✅ |包含事件的表 |

### 3.2。 Episode_event_field_concept_id

|概念 ID |事件表|
|------------|-------------|
| 1147127 | 1147127條件發生。條件發生_id |
| 1147094 | 1147094 drug_exposure.drug_exposure_id | 藥物暴露
| 1147082 | 1147082 procedure_occurrence.procedure_occurrence_id | procedure_occurrence.procedure_occurrence_id | procedure_occurrence.procedure_occurrence_id
| 1147138 |測量.measurement_id |
| 1147165 | 1147165 device_exposure.device_exposure_id | device_exposure.device_exposure_id |

### 3.3。例如：将事件附加到周期 1

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

## 4. EPISODE在研究中的应用

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

## 總結

1. **死亡**：1 筆記錄/人，使用 SNOMED 確定死亡原因
2. **EPISODE**（新CDM 5.4）：病理/治療過程，親子層次結構支持
3. **EPISODE_EVENT**：將多個表中的事件連結到劇集
4. EPISODE 主要針對**腫瘤學**設計，但適用於所有慢性疾病
5. 結構：疾病→治療方案→治療週期→事件

**下一篇：**開始第5部分－標準化詞彙，標準化字典系統。

---

## 參考文獻

- [OMOP CDM 5.4 — DEATH](https://ohdsi.github.io/CommonDataModel/cdm54.html#DEATH)
- [OMOP CDM 5.4 — EPISODE](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE)
- [OMOP CDM 5.4 — EPISODE_EVENT](https://ohdsi.github.io/CommonDataModel/cdm54.html#EPISODE_EVENT)
- [OHDSI Oncology WG](https://www.ohdsi.org/web/wiki/doku.php?id=documentation:next_cdm:oncology)
