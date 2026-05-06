---
id: 019f1a00-a106-7b01-e001-omopcdm54006
title: 'レッスン 6: VISIT_OCCURRENCE と VISIT_DETAIL — 訪問と詳細'
slug: bai-6-visit-occurrence-visit-detail-luot-kham-chi-tiet
description: >-
  訪問タイプ (入院患者、外来患者、ER、遠隔医療)、訪問の詳細のための VISIT_OCCURRENCE、VISIT_DETAIL 構造、OMOP
  モデルの入院_from/退院_to、訪問とイベントの関係。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: 人物と訪問 — データ プラットフォーム'
course:
  id: 019f1a00-a100-7b01-e001-omopcdm54001
  title: 初心者向け OMOP CDM 5.4 — A to Z を理解する
  slug: omop-cdm-5-4-cho-nguoi-moi-bat-dau
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 6</text>
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
    <tspan x="60" dy="0">VISIT_OCCURRENCE と VISIT_DETAIL</tspan>
    <tspan x="60" dy="42">訪問と詳細</tspan>
  </text>
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">初心者向け OMOP CDM 5.4 — A to Z を理解する</text>
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: 人物と訪問 — データ プラットフォーム</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

**VISIT_OCCURRENCE** は、外来受診、入院、救急外来から遠隔医療まで、医療システムとのあらゆる患者の接触を記録します。 **VISIT_DETAIL** により詳細が追加されます。1 回の入院中に、患者は多くの部門に転送される可能性があります。

これら 2 つのテーブルは、PERSON とすべての臨床事象の間の**架け橋**です。

---

## 1. VISIT_OCCURRENCE — 構造体

＃＃＃１．１．コラム一覧

|コラム |タイプ |必須 |説明 |
|-----|----------|----------|----------|
| `visit_occurrence_id` |整数 | ✅PK |訪問ごとに一意の ID |
| `person_id` |整数 | ✅FK |人物 リファレンス |
| `visit_concept_id` |整数 | ✅ |訪問タイプ（標準コンセプト） |
| `visit_start_date` |日付 | ✅ |開始日 |
| `visit_start_datetime` |日時 | |開始日時 |
| `visit_end_date` |日付 | ✅ |終了日 |
| `visit_end_datetime` |日時 | |終了日時 |
| `visit_type_concept_id` |整数 | ✅ |データ ソース (EHR、クレーム...) |
| `provider_id` |整数 | FK |担当医師｜
| `care_site_id` |整数 | FK |医療施設 |
| `visit_source_value` | VARCHAR(50) | |元の訪問コード |
| `visit_source_concept_id` |整数 | |オリジナルコンセプト |
| `admitted_from_concept_id` |整数 | |どこから来たのですか (自宅、ER...) |
| `admitted_from_source_value` | VARCHAR(50) | |元の値 |
| `discharged_to_concept_id` |整数 | |退院後の行き先 |
| `discharged_to_source_value` | VARCHAR(50) | |元の値 |
| `preceding_visit_occurrence_id` |整数 | FK |前回の訪問 |

＃＃＃１．２．重要な訪問の種類

|訪問コンセプトID |コンセプト名 |説明説明
|------|---------------|----------|
| 9201 | **入院患者の訪問** |入院 | 入院
| 9202 | **外来診察** |外来診察 |
| 9203 | **緊急治療室の訪問** |応急処置 |
| 262 | **緊急治療室と入院患者の訪問** |救急→入院 |
| 581477 | **遠隔医療** |遠隔診察 |
| 32693 | **薬局訪問** |薬局で薬を買う |
| 581476 | **家庭訪問** |自宅受験 |
| 38004515 | **研究室訪問** |テストに来てください |

---

## 2. 例: 入院した患者

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

## 3. VISIT_DETAIL — 訪問の詳細

＃＃＃３．１． VISIT_DETAIL が必要になるのはどのような場合ですか?

VISIT_DETAIL は VISIT_OCCURRENCE の **サブ詳細**をキャプチャします。患者が複数の科に転院する場合の**入院**に特に役立ちます。

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

＃＃＃３．２． VISIT_DETAIL 構造体

|コラム |タイプ |説明 |
|-----|--------|------|
| `visit_detail_id` |整数 | PK |
| `person_id` |整数 | FK → 人物 |
| `visit_detail_concept_id` |整数 |詳細タイプ (部門、区...) |
| `visit_detail_start_date` |日付 |部門での開始日 |
| `visit_detail_end_date` |日付 |部署を退職した日 |
| `visit_detail_type_concept_id` |整数 |データソース |
| `provider_id` |整数 |担当医｜
| `care_site_id` |整数 |特定の学部・学科 |
| `visit_occurrence_id` |整数 | **FK → VISIT_OCCURRENCE** (親) |
| `visit_detail_parent_id` |整数 | FK → VISIT_DETAIL (親詳細) |
| `admitted_from_concept_id` |整数 |どこから乗り換える |
| `discharged_to_concept_id` |整数 |どこに移動するか |
| `visit_detail_source_value` | VARCHAR(50) |元の値 |

＃＃＃３．３．たとえば

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

## 4. 訪問 ↔ 臨床事象の関係

すべての臨床イベント表には列があります `visit_occurrence_id`:

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

CDM 5.4も追加されました `visit_detail_id` 複数の臨床テーブルを入力します - 訪問中にイベントが発生した**部門**を示します:

```sql
-- Xét nghiệm nào thực hiện tại ICU?
SELECT m.*
FROM measurement m
JOIN visit_detail vd ON m.visit_detail_id = vd.visit_detail_id
WHERE vd.care_site_id = 2030;  -- ICU
```

---

## 5.previous_visit_occurrence_id — 文字列訪問

コラム `preceding_visit_occurrence_id` 訪問の間に**リンクリスト**を作成します:

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

## 6. 訪問のための ETL 規則

＃＃＃６．１．一般規則

|ルール |詳細 |
|----------|----------|
| 1 回の出会い = 1 回の訪問 |各露出 = 1 VISIT_OCCURRENCE |
|即日外来 |同じ日と同じ施設の場合は 1 回の訪問にまとめることができます |
| ER → 入院 |使用コンセプト 262 (ER および入院患者の訪問) |
|訪問終了日 |寄付の場合: end_date = start_date |
|ご来店がない場合 | 「ダミー訪問」を作成します。concept_id = 0 |

＃＃＃６．２．ベトナム病院の ETL 例

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

## 7. 一般的に使用される分析 SQL

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

## 概要

1. **VISIT_OCCURRENCE** は、患者が医療システムに連絡するたびに記録します。
2. **訪問タイプ**: 入院患者 (9201)、外来患者 (9202)、ER (9203)、遠隔医療 (581477)
3. **VISIT_DETAIL**: 1 回の訪問での部門/部屋の詳細 (特に入院)
4. **すべての臨床イベント** は訪問へのリンクです `visit_occurrence_id`
5. **preceding_visit_occurrence_id**: 時間をかけて一連の訪問を作成します
6. **入院から/退院まで**: 患者の出入りの流れを追跡する

**次の記事:** 最初の臨床イベント — **CONDITION_OCCURRENCE** — 診断と病理の探索を開始します。

---

## 参考文献

- [OMOP CDM 5.4 — VISIT_OCCURRENCE](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_OCCURRENCE)
- [OMOP CDM 5.4 — VISIT_DETAIL](https://ohdsi.github.io/CommonDataModel/cdm54.html#VISIT_DETAIL)
