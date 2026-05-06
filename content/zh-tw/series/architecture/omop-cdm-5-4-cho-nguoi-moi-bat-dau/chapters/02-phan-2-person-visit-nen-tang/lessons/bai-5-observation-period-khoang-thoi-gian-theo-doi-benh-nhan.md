---
id: 019f1a00-a105-7b01-e001-omopcdm54005
title: 第 5 課：OBSERVATION_PERIOD — 病人監護期
slug: bai-5-observation-period-khoang-thoi-gian-theo-doi-benh-nhan
description: OBSERVATION_PERIOD 的含義是什麼、為什麼需要此表、如何從來源資料確定開始/結束日期、它如何影響發病率/盛行率計算以及 ETL 約定。
duration_minutes: 45
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：人員與存取 — 資料平台
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初學者的 OMOP CDM 5.4 — 從頭到尾了解
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-omop05" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-omop05)"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 5 課</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">OBSERVATION_PERIOD — 約</tspan>
    <tspan x="60" dy="42">患者追蹤時間</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初學者的 OMOP CDM 5.4 — 從頭到尾了解</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：人員與存取 — 資料平台</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

**OBSERVATION_PERIOD** 是許多新手忽略的一個表 - 但它非常重要。表上回答了以下問題：**「我們什麼時候有關於該患者的數據？」**

如果患者沒有OBSERVATION_PERIOD，我們無法區分：「患者沒有生病」或「患者生病但沒有來檢查（因此沒有數據）」。

---

## 1. 為什麼需要 OBSERVATION_PERIOD？

### 1.1。 “缺席與失蹤”問題

```
  Bệnh nhân Lan:
  ├── 2020-01-10: Khám → chẩn đoán Tiểu đường
  ├── 2020-06-15: Tái khám
  ├── 2021-01-20: Tái khám
  ├── (im lặng 2 năm)
  └── 2023-03-10: Nhập viện → Suy tim

  Câu hỏi: Từ 2021-01 đến 2023-03, Lan có khỏe mạnh
  hay chuyển sang bệnh viện khác?
```

**OBSERVATION_PERIOD** 表示病患「檢視」資料來源的時間長度：

```
  Observation Period:
  ┌──────────────────────────────────────────────────────────────┐
  │  2020-01-10 ════════════════════════ 2021-12-31             │
  │  (Có BHYT tại BV này)                                       │
  └──────────────────────────────────────────────────────────────┘
  
  ┌──────────────────────────────────────────────────────────────┐
  │  2023-01-01 ════════════════════════ 2024-06-30             │
  │  (Quay lại BV, có BHYT mới)                                │
  └──────────────────────────────────────────────────────────────┘

  → Trong observation period: không có Condition = bệnh nhân KHÔNG bị
  → Ngoài observation period: không có Condition = KHÔNG BIẾT
```

### 1.2。對分析的影響

|分析|沒有OP |是的，OP |
|------------|-------------|--------|
| **發病率** |不正確（分母不正確）|正確（知道處於危險中的人時間）|
| **流行率** |錯誤（計數不夠）|正確（知道總人口）|
| **生存分析** |不知道審查時間 |準確的事件發生時間 |
| **佇列條目** |可以選擇資料以外的患者| OP中只選擇BN |

---

## 2.表結構

|專欄 |類型 |必填 |說明 |
|-----|--------|----------|--------|
| `observation_period_id` |整數 | ✅ PK |唯一ID |
| `person_id` |整數 | ✅ FK |人物參考 |
| `observation_period_start_date` |日期 | ✅ |資料開始日期 |
| `observation_period_end_date` |日期 | ✅ |資料結束日期 |
| `period_type_concept_id` |整數 | ✅ |產地決定OP |

### 2.1。 period_type_concept_id

|概念 ID |概念名稱|說明 |
|------------|--------------|--------|
| 32817 | 32817電子病歷 |從 EHR 記錄中確定 |
| 32810 |索賠 |確定索賠/健康保險這個詞 |
| 44814724 |涵蓋醫療保健遭遇的時期|來自相遇|
| 44814725 |透過演算法推論的週期 |推理演算法 |

---

## 3. 如何確定觀察期

### 3.1。來自索賠/保險數據

```
  BHXH cấp thẻ BHYT:
  ┌─────────────────────────────────────────┐
  │ Mã thẻ: DN-123456  Hiệu lực: 01/2020   │
  │ BV đăng ký: Chợ Rẫy  Hết hạn: 12/2024  │
  └─────────────────────────────────────────┘

  → observation_period_start_date = 2020-01-01
  → observation_period_end_date   = 2024-12-31
  → period_type_concept_id = 32810 (Claim)
```

### 3.2。來自電子病歷數據

當沒有明確的保險資訊時，從**第一次到最後一次遇到/訪問**計數：

```sql
-- Tính OP từ visits
SELECT
    person_id,
    MIN(visit_start_date) AS observation_period_start_date,
    MAX(COALESCE(visit_end_date, visit_start_date))
        AS observation_period_end_date,
    32817 AS period_type_concept_id  -- EHR
FROM visit_occurrence
GROUP BY person_id;
```

### 3.3。患者可以有多個觀察期

```
  Bệnh nhân person_id = 100001:

  OP 1: ═══════════ (2018-01-01 → 2019-06-30)
          Có BHYT tại BV A

                  Gap (6 tháng, không có dữ liệu)

  OP 2: ═══════════════════ (2020-01-01 → 2024-12-31)
          Có BHYT mới tại BV A

  → 2 records trong OBSERVATION_PERIOD
```

```sql
INSERT INTO observation_period VALUES
    (1, 100001, '2018-01-01', '2019-06-30', 32810),
    (2, 100001, '2020-01-01', '2024-12-31', 32810);
```

---

## 4. 重要規則

### 4.1。所有臨床事件必須在觀察期內

```
  OP: ════════════════════════════════════
  2020-01-01                        2024-12-31

      ✅ Visit 2020-03-15 (trong OP)
      ✅ Condition 2022-06-10 (trong OP)
      ❌ Drug Exposure 2019-05-10 (NGOÀI OP!) → Cảnh báo data quality
```

**ACHILLES 資料品質檢查**：檢查 OBSERVATION_PERIOD 以外是否有任何臨床事件。

### 4.2。觀察期不能重疊

給定相同的 person_id，OP 必須**按時間順序排列，沒有重疊**：

```
  ✅ ĐÚng:
  OP1: ═══════    OP2: ═══════════
  2018-01  2019-06    2020-01  2024-12

  ❌ SAI (overlap):
  OP1: ═══════════════
  OP2:       ═══════════════
```

### 4.3。特別大會

|情況|加工|
|----------|------|
|病人只來過一次|開始日期 = 結束日期 = 考試日期 |
|病人死亡 |結束日期 = 死亡日期 |
| 透明度 < 32 天（聲明）|通常組合成 1 個 OP |
|許多來源重疊|合併成最大OP |

---

## 5. 分析中的應用

### 5.1。计算处于风险中的人员时间

```sql
-- Tổng thời gian theo dõi (person-years)
SELECT
    SUM(
        observation_period_end_date - observation_period_start_date
    ) / 365.25 AS total_person_years
FROM observation_period;

-- Person-time cho incidence rate
SELECT
    p.gender_concept_id,
    SUM(
        op.observation_period_end_date - op.observation_period_start_date
    ) / 365.25 AS person_years
FROM observation_period op
JOIN person p ON op.person_id = p.person_id
GROUP BY p.gender_concept_id;
```

### 5.2。用「足夠的數據」篩選患者

```sql
-- Chỉ chọn BN có ≥ 1 năm follow-up
SELECT person_id
FROM observation_period
WHERE observation_period_end_date - observation_period_start_date >= 365
按 person_id 分組；
```

### 5.3。檢查數據質量

```sql
-- 尋找觀察期之外的事件
選擇
    '條件'作為事件類型，
    co.person_id,
    co.condition_start_date AS event_date
FROM 條件發生 co
左側連接觀察週期操作
    ON co.person_id = op.person_id
    AND co.condition_start_date
        介於 op.observation_period_start_date 之間
            AND op.observation_period_end_date
其中 op.observation_period_id 為 NULL；
```

---

## 6. 完整範例

```sql
-- 越南醫院的 OBSERVATION_PERIOD
插入觀察週期（
    觀察期_id，
    人物 ID，
    觀察期間開始日期、觀察期間開始日期
    觀察期結束日期、觀察期結束日期
    period_type_concept_id
) 價值觀
    -- 病患100001：擁有2020年至2024年的健康保險
    (1, 100001, '2020-01-01', '2024-12-31', 32810),
    -- 病患 100002：2023 年造訪過 3 次
    (2, 100002, '2023-02-15', '2023-11-20', 32817),
    -- 100003號病患：2個不同階段
    (3, 100003, '2019-03-10', '2020-06-30', 32817),
    (4, 100003, '2022-01-15', '2024-06-30', 32817);
```

---

## 總結

1. **OBSERVATION_PERIOD** = 患者在系統中「擁有資料」的時間量
2. 區分**「沒有生病」**與**「無數據」**
3. **每個人都需要** — 每人至少需要 1 個 OP
4. 具有相同 person_id 的 OP 之間**無重疊**
5. **所有臨床事件**必須包含在 OP 中
6. **主要應用**：計算人次、發生率、盛行率、世代定義

**下一篇：** VISIT_OCCURRENCE 和 VISIT_DETAIL — OMOP CDM 如何記錄每位患者與醫療保健系統的接觸。

---

## 參考文獻

- [OMOP CDM 5.4 — OBSERVATION_PERIOD](https://ohdsi.github.io/CommonDataModel/cdm54.html#OBSERVATION_PERIOD)
- [The Book of OHDSI — Observation Periods](https://ohdsi.github.io/TheBookOfOhdsi/CommonDataModel.html)
