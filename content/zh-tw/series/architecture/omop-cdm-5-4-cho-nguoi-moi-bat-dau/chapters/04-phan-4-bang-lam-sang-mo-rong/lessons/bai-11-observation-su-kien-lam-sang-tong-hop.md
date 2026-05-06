---
id: 019f1a00-a111-7b01-e001-omopcdm54011
title: 第 11 課：觀察 — 一般臨床事件
slug: bai-11-observation-su-kien-lam-sang-tong-hop
description: 觀察表記錄不屬於病情、藥物、程序或測量的臨床事件。病史、生活方式、過敏、家族史、新的observation_event_id CDM 5.4。
duration_minutes: 55
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：擴展臨床表
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 11 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">觀察</tspan>
    <tspan x="60" dy="42">臨床事件總結</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：擴展臨床表</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**觀察**是一個「包羅萬象」的表格——儲存與條件、藥物、程序或測量不匹配的任何臨床事件的地方。病史、生活方式（吸煙、飲酒）、過敏、家族史、婚姻狀況——都在這裡。

---

## 1.表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `observation_id` |整數| ✅ PK |唯一ID |
| `person_id` |整數| ✅ FK |病人 |
| `observation_concept_id` |整數| ✅ |標準理念|
| `observation_date` |日期 | ✅ |記錄日期|
| `observation_datetime` |日期時間 | |日期與時間 |
| `observation_type_concept_id` |整數| ✅ |資料來源|
| `value_as_number` |浮動| |數值|
| `value_as_string` | VARCHAR(60) | |文字值|
| `value_as_concept_id` |整數| |類別值 |
| `qualifier_concept_id` |整數| |附加背景 |
| `unit_concept_id` |整數| |單位|
| `provider_id` |整數|氟克 |提供者記錄 |
| `visit_occurrence_id` |整數|氟克 |相關訪問 |
| `visit_detail_id` |整數|氟克 |瀏覽詳情 |
| `observation_source_value` | VARCHAR(50) | |原始碼 |
| `observation_source_concept_id` |整數| |原創概念|
| `unit_source_value` | VARCHAR(50) | |原單位|
| `qualifier_source_value` | VARCHAR(50) | |原始預選賽 |
| `value_as_datetime` | 日期時間 | | ⭐ 清潔發展機制5.4 |
| `observation_event_id` |大智 | | ⭐ 清潔發展機制5.4 |
| `obs_event_field_concept_id` |整數| | ⭐ 清潔發展機制5.4 |

---

## 2. 觀察要保存什麼？

### 2.1。用例列表

|使用案例 |觀察概念 ID |價值|範例|
|----------|---------------------|--------|--------|
| **吸煙** | 4275495（吸煙）| value_as_concept_id | 4298794（目前吸煙者）|
| **過敏** | 439224（過敏）| value_as_concept_id |藥品/食品概念|
| **家族史** | 4167217（家族史）| value_as_concept_id |疾病概念|
| **婚姻狀況** | 4053609（婚姻狀況）| value_as_concept_id | 4338692（已婚）|
| **血型** | 4041671（血型）| value_as_concept_id | 36308332（O 型）|
| **病史** | 4214956（歷史）+條件概念| value_as_concept_id | |
| **懷孕** | 4299535（懷孕）| value_as_concept_id | |
| **職業** | 4019962（職業）|值字串 | “老師”|

### 2.2。觀察與條件－何時保存、何處保存？

|資料|表格|說明|
|--------|--------|------------|
| “2型糖尿病患者”| **狀況** |活動性疾病 |
| “糖尿病家族史”| **觀察** |家族史 |
| 「病人患有B型肝炎（已康復）」| **觀察** | | 的歷史
| “青黴素過敏”| **觀察** |過敏 |
| 「病人吸菸20年」| **觀察** |生活方式 |
| “發燒38.5°C” | **測量** |有測量值|

---

## 3. 詳細範例

### 3.1。吸煙

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

### 3.2。藥物過敏

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

### 3.3。家族史

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

## 4.observation_event_id — CDM 5.4

與measurement_event_id類似，允許將觀察結果連結到其他事件。

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

## 5. qualifier_concept_id — 新增上下文

|概念 ID |預選賽|用於 |
|------------|------------|---------|
| 4129512 | 4129512嚴重|嚴重程度 |
| 4148136 | 4148136溫和|輕度水平|
| 4129511 | 4129511中|中等程度 |
| 4166847 | 4166847媽媽|家庭關係 |
| 4166848 | 4166848父親|家庭關係 |
| 4192403 | 4192403兄弟姊妹|兄弟/姊妹|
| 4167233 | 4167233一級親屬 |一級親屬 |

---

## 6.VN數據ETL

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

## 7. SQL分析

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

## 總結

1. **觀察** =「包羅萬象」的表，用於不屬於專用表的數據
2. 主要用例：吸菸、過敏、家族史、生活型態、婚姻
3. **qualifier_concept_id** 新增上下文（層級、關係）
4. CDM 5.4：**observation_event_id** 與另一個事件關聯
5. **域路由**決定觀察、條件與測量

**下一篇文章：** 設備暴露、樣本和註釋 — 醫療設備、樣本和臨床註釋。

---

## 參考文獻

- [OMOP CDM 5.4 — OBSERVATION](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION)
- [Athena — Observation Domain](https://athena.ohdsi.org/)
